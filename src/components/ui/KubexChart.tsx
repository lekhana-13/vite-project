import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const POINTS = 24;
const CHART_W = 580;
const CHART_H = 200;
const KUBEX_IDX = 10;

const ALLOCATED = [
  72, 68, 74, 70, 66, 72, 69, 65, 70, 68,
  55, 45, 40, 38, 37, 36, 37, 36, 35, 36, 37, 36, 35, 36,
];
const REQUIRED = [
  30, 33, 28, 32, 30, 34, 31, 29, 31, 30,
  30, 28, 29, 30, 29, 28, 30, 29, 28, 29, 30, 29, 28, 29,
];

function ptX(i: number) { return (i / (POINTS - 1)) * CHART_W; }
function ptY(val: number, maxVal: number) { return CHART_H - (val / maxVal) * CHART_H; }

function splinePath(data: number[], maxVal: number, count: number): string {
  const len = Math.min(count, data.length);
  if (len < 2) return "";
  const pts = Array.from({ length: len }, (_, i) => ({ x: ptX(i), y: ptY(data[i], maxVal) }));
  let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    const t = 0.35;
    d += ` C${(p1.x + (p2.x - p0.x) * t).toFixed(1)},${(p1.y + (p2.y - p0.y) * t).toFixed(1)} ${(p2.x - (p3.x - p1.x) * t).toFixed(1)},${(p2.y - (p3.y - p1.y) * t).toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

function fillBetween(top: number[], bot: number[], maxVal: number, from: number, to: number): string {
  const s = Math.max(from, 0);
  const e = Math.min(to, top.length - 1);
  if (e - s < 1) return "";
  const tPts = [], bPts = [];
  for (let i = s; i <= e; i++) {
    tPts.push({ x: ptX(i), y: ptY(top[i], maxVal) });
    bPts.push({ x: ptX(i), y: ptY(bot[i], maxVal) });
  }
  let d = `M${tPts[0].x.toFixed(1)},${tPts[0].y.toFixed(1)}`;
  for (let i = 0; i < tPts.length - 1; i++) {
    const p0 = tPts[Math.max(i - 1, 0)], p1 = tPts[i], p2 = tPts[i + 1], p3 = tPts[Math.min(i + 2, tPts.length - 1)];
    const t = 0.35;
    d += ` C${(p1.x + (p2.x - p0.x) * t).toFixed(1)},${(p1.y + (p2.y - p0.y) * t).toFixed(1)} ${(p2.x - (p3.x - p1.x) * t).toFixed(1)},${(p2.y - (p3.y - p1.y) * t).toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  d += ` L${bPts[bPts.length - 1].x.toFixed(1)},${bPts[bPts.length - 1].y.toFixed(1)}`;
  for (let i = bPts.length - 2; i >= 0; i--) {
    const p0 = bPts[Math.min(i + 2, bPts.length - 1)], p1 = bPts[i + 1], p2 = bPts[i], p3 = bPts[Math.max(i - 1, 0)];
    const t = 0.35;
    d += ` C${(p1.x + (p2.x - p0.x) * t).toFixed(1)},${(p1.y + (p2.y - p0.y) * t).toFixed(1)} ${(p2.x - (p3.x - p1.x) * t).toFixed(1)},${(p2.y - (p3.y - p1.y) * t).toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d + " Z";
}

function interpPt(data: number[], maxVal: number, progress: number) {
  const idx = progress * (data.length - 1);
  const i = Math.floor(idx);
  const frac = idx - i;
  const next = Math.min(i + 1, data.length - 1);
  const val = data[i] + (data[next] - data[i]) * frac;
  return { x: ptX(idx), y: ptY(val, maxVal) };
}

const COL_ALLOCATED = "hsl(155, 85%, 45%)";
const COL_REQUIRED = "hsl(200, 75%, 55%)";
const COL_DIVIDER = "hsl(65, 80%, 50%)";

type Phase = "idle" | "drawing" | "divider" | "done";

export default function KubexChart() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [drawProgress, setDrawProgress] = useState(0);
  const rafRef = useRef(0);

  const restart = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setPhase("idle");
    setDrawProgress(0);
    setTimeout(() => setPhase("drawing"), 600);
  }, []);

  useEffect(() => { restart(); }, [restart]);

  useEffect(() => {
    if (phase !== "drawing") return;
    const start = performance.now();
    const dur = 3500;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setDrawProgress(eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("divider"), 300);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  useEffect(() => {
    if (phase === "divider") {
      const t = setTimeout(() => setPhase("done"), 800);
      return () => clearTimeout(t);
    }
    if (phase === "done") {
      const t = setTimeout(() => restart(), 2500);
      return () => clearTimeout(t);
    }
  }, [phase, restart]);

  const maxVal = 100;
  const visibleCount = phase === "idle" ? 0 : phase === "drawing"
    ? Math.max(2, Math.round(drawProgress * POINTS))
    : POINTS;

  const kubexX = ptX(KUBEX_IDX);
  const showDivider = phase === "divider" || phase === "done";
  const isAfter = phase === "divider" || phase === "done";

  const beforeAllocAvg = ALLOCATED.slice(0, KUBEX_IDX).reduce((a, b) => a + b, 0) / KUBEX_IDX;
  const afterAllocAvg = ALLOCATED.slice(KUBEX_IDX).reduce((a, b) => a + b, 0) / (POINTS - KUBEX_IDX);
  const reqAvg = REQUIRED.reduce((a, b) => a + b, 0) / POINTS;
  const wastePercent = isAfter
    ? Math.round(((afterAllocAvg - reqAvg) / afterAllocAvg) * 100)
    : Math.round(((beforeAllocAvg - reqAvg) / beforeAllocAvg) * 100);
  const allocPercent = isAfter ? Math.round(afterAllocAvg) : Math.round(beforeAllocAvg);
  const reqPercent = Math.round(reqAvg);
  const statusLabel = phase === "done" ? "Optimized" : "Analyzing...";

  const dotAlloc = phase === "drawing" ? interpPt(ALLOCATED, maxVal, drawProgress) : interpPt(ALLOCATED, maxVal, 1);
  const dotReq = phase === "drawing" ? interpPt(REQUIRED, maxVal, drawProgress) : interpPt(REQUIRED, maxVal, 1);

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div
        className="relative rounded-2xl border border-border p-6 md:p-8 cursor-pointer select-none bg-card"
        onClick={restart}
        style={{
          boxShadow: "0 30px 70px -15px rgba(0,0,0,0.7), inset 0 1px 0 hsl(150 5% 16% / 0.3)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: COL_DIVIDER,
                boxShadow: `0 0 10px ${COL_DIVIDER}`,
              }}
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono font-semibold text-lg text-foreground">
              KoreValue
            </span>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-mono text-muted-foreground">Waste</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={wastePercent}
                className="text-2xl font-bold font-mono text-destructive"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
              >
                {wastePercent}%
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Chart area */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[11px] font-mono text-muted-foreground">
            <span>100%</span>
            <span>50%</span>
            <span>0%</span>
          </div>
          <div className="ml-10 mr-4">
            <svg
              viewBox={`-5 -22 ${CHART_W + 20} ${CHART_H + 32}`}
              className="w-full"
              style={{ overflow: "visible" }}
            >
              <defs>
                <clipPath id="draw-clip">
                  <rect x={-5} y={-30} width={drawProgress * (CHART_W + 25)} height={CHART_H + 62} />
                </clipPath>
                <linearGradient id="waste-red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(0, 75%, 50%)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(0, 65%, 42%)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="eff-green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(90, 50%, 35%)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="hsl(90, 40%, 25%)" stopOpacity="0.35" />
                </linearGradient>
                <filter id="line-glow" x="-15%" y="-15%" width="130%" height="130%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="big-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {[0, 0.25, 0.5, 0.75, 1].map((r, i) => (
                <line key={`h${i}`} x1={0} y1={CHART_H * (1 - r)} x2={CHART_W} y2={CHART_H * (1 - r)}
                  stroke="hsl(150 5% 16%)" strokeWidth={0.5} opacity={0.5} />
              ))}
              {Array.from({ length: 10 }, (_, i) => (
                <line key={`v${i}`} x1={(i / 9) * CHART_W} y1={0} x2={(i / 9) * CHART_W} y2={CHART_H}
                  stroke="hsl(150 5% 16%)" strokeWidth={0.5} opacity={0.3} />
              ))}

              <g clipPath={phase === "drawing" ? "url(#draw-clip)" : undefined}>
                {visibleCount >= 2 && (
                  <path d={fillBetween(ALLOCATED, REQUIRED, maxVal, 0, Math.min(KUBEX_IDX, visibleCount - 1))} fill="url(#waste-red)" />
                )}
                {visibleCount > KUBEX_IDX && (
                  <path d={fillBetween(ALLOCATED, REQUIRED, maxVal, KUBEX_IDX, visibleCount - 1)} fill="url(#eff-green)" />
                )}
                {visibleCount >= 2 && (
                  <path d={splinePath(ALLOCATED, maxVal, visibleCount)} fill="none" stroke={COL_ALLOCATED} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
                )}
                {visibleCount >= 2 && (
                  <>
                    <path d={splinePath(REQUIRED, maxVal, visibleCount)} fill="none" stroke={COL_REQUIRED} strokeWidth={6} strokeLinejoin="round" strokeLinecap="round" opacity={0.2} filter="url(#line-glow)" />
                    <path d={splinePath(REQUIRED, maxVal, visibleCount)} fill="none" stroke={COL_REQUIRED} strokeWidth={2.8} strokeLinejoin="round" strokeLinecap="round" />
                  </>
                )}
              </g>

              {phase === "drawing" && drawProgress > 0.02 && (
                <g>
                  <line x1={dotAlloc.x} y1={dotAlloc.y} x2={dotReq.x} y2={dotReq.y} stroke="hsl(0 0% 54%)" strokeWidth={1.5} strokeDasharray="3 3" opacity={0.5} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={8} fill={COL_ALLOCATED} opacity={0.2} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={5} fill={COL_ALLOCATED} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={2} fill="hsl(155, 90%, 80%)" />
                  <circle cx={dotReq.x} cy={dotReq.y} r={8} fill={COL_REQUIRED} opacity={0.2} />
                  <circle cx={dotReq.x} cy={dotReq.y} r={5} fill={COL_REQUIRED} />
                  <circle cx={dotReq.x} cy={dotReq.y} r={2} fill="hsl(200, 85%, 80%)" />
                </g>
              )}

              {showDivider && (
                <motion.g initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ transformOrigin: `${kubexX}px ${CHART_H / 2}px` }}>
                  <line x1={kubexX} y1={-14} x2={kubexX} y2={CHART_H} stroke={COL_DIVIDER} strokeWidth={1.5} strokeDasharray="6 5" opacity={0.8} />
                  <text x={kubexX} y={-16} textAnchor="middle" fill="hsl(0 0% 95%)" fontSize={11} fontFamily="monospace" fontWeight="600">KoreValue</text>
                </motion.g>
              )}

              {(phase === "divider" || phase === "done") && (
                <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, type: "spring", damping: 12 }}>
                  <motion.circle cx={dotAlloc.x} cy={dotAlloc.y} r={20} fill={COL_ALLOCATED} opacity={0.07} animate={{ r: [20, 26, 20], opacity: [0.07, 0.14, 0.07] }} transition={{ duration: 2, repeat: Infinity }} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={14} fill={COL_ALLOCATED} opacity={0.12} filter="url(#big-glow)" />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={10} fill="none" stroke={COL_ALLOCATED} strokeWidth={2} opacity={0.45} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={7} fill={COL_ALLOCATED} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={3} fill="hsl(155, 90%, 85%)" />
                </motion.g>
              )}
            </svg>
          </div>

          <div className="flex items-center gap-6 mt-3 ml-10 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="w-6 h-[3px] rounded-full" style={{ backgroundColor: COL_REQUIRED, boxShadow: `0 0 4px ${COL_REQUIRED}` }} />
              <span className="text-muted-foreground">Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-[3px] rounded-full" style={{ backgroundColor: COL_ALLOCATED }} />
              <span className="text-muted-foreground">Allocated</span>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-5 flex items-center gap-4 pt-4 border-t border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={statusLabel}
              className="px-4 py-1.5 rounded-lg text-sm font-mono font-bold whitespace-nowrap"
              style={{
                backgroundColor: statusLabel === "Optimized" ? COL_DIVIDER : "hsl(150 5% 14%)",
                color: statusLabel === "Optimized" ? "hsl(0, 0%, 5%)" : "hsl(0 0% 95%)",
                boxShadow: statusLabel === "Optimized" ? `0 0 12px hsl(65, 80%, 50%, 0.4)` : "none",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {statusLabel}
            </motion.div>
          </AnimatePresence>
          <div className="text-sm font-mono leading-tight text-muted-foreground">
            CPU/GPU/Memory<br />Resources
          </div>
          <div className="ml-auto text-right">
            <span className="text-[11px] font-mono text-muted-foreground">Allocated</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span key={allocPercent} className="text-xl font-bold font-mono" style={{ color: COL_ALLOCATED }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {allocPercent}%
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-mono text-muted-foreground">Required</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span key={reqPercent} className="text-xl font-bold font-mono" style={{ color: COL_REQUIRED }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {reqPercent}%
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
