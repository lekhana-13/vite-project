import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bars = [
  { label: "AWS", value: 220 },
  { label: "AZURE", value: 150 },
  { label: "GCP", value: 100 },
];

const max = 240;

export default function FinOpsChart() {
  const [key, setKey] = useState(0);

  // 🔁 LOOP (smooth restart)
  useEffect(() => {
    const i = setInterval(() => setKey((p) => p + 1), 4500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between">

      {/* TITLE */}
      <div className="text-white text-sm font-medium mb-2">
        FinOps Autopilot
      </div>

      {/* CHART BOX */}
      <div className="flex-1 rounded-2xl bg-[#020806] px-4 py-3 flex items-center">

        <svg
          viewBox="0 0 520 220"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >

          {/* DEFINITIONS (GRADIENT + GLOW) */}
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="50%" stopColor="#a3e635" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* AXES (fade-in) */}
          <motion.g
            stroke="#6b7280"
            strokeWidth="1.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <line x1="60" y1="20" x2="60" y2="190" />
            <line x1="60" y1="190" x2="500" y2="190" />
          </motion.g>

          {/* TICKS */}
          {[0, 50, 100, 150, 200].map((v, i) => {
            const x = 60 + (v / max) * 440;

            return (
              <g key={i}>
                <line x1={x} y1="190" x2={x} y2="196" stroke="#6b7280" />
                <text
                  x={x}
                  y="210"
                  fontSize="11"
                  fill="#9ca3af"
                  textAnchor="middle"
                >
                  ₹{v}k
                </text>
              </g>
            );
          })}

          {/* BARS */}
          {bars.map((bar, i) => {
            const y = 40 + i * 55;
            const width = (bar.value / max) * 440;

            return (
              <g key={`${key}-${i}`}>

                {/* LABEL */}
                <text
                  x="10"
                  y={y + 18}
                  fontSize="12"
                  fill="#9ca3af"
                >
                  {bar.label}
                </text>

                {/* GLOW BACK LAYER */}
                <motion.rect
                  x="60"
                  y={y}
                  height="28"
                  fill="url(#barGradient)"
                  filter="url(#glow)"
                  opacity="0.5"
                  initial={{ width: 0 }}
                  animate={{ width }}
                  transition={{
                    duration: 1.4,
                    delay: i * 0.25,
                    ease: "easeOut",
                  }}
                />

                {/* MAIN BAR */}
                <motion.rect
                  x="60"
                  y={y}
                  height="28"
                  fill="url(#barGradient)"
                  initial={{ width: 0 }}
                  animate={{ width }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.25,
                    ease: "easeOut",
                  }}
                />

                {/* FLOWING LIGHT EFFECT */}
                <motion.rect
                  x="60"
                  y={y}
                  height="28"
                  fill="white"
                  opacity="0.15"
                  initial={{ x: 60 }}
                  animate={{ x: 60 + width }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />

              </g>
            );
          })}
        </svg>
      </div>

      {/* BOTTOM STATS */}
      <div className="flex justify-between text-center mt-3">

        <div className="flex-1">
          <div className="text-xs text-gray-400">AWS</div>
          <div className="text-[#84cc16] text-sm font-semibold">+12%</div>
        </div>

        <div className="flex-1">
          <div className="text-xs text-gray-400">AZURE</div>
          <div className="text-red-500 text-sm font-semibold">-3%</div>
        </div>

        <div className="flex-1">
          <div className="text-xs text-gray-400">GCP</div>
          <div className="text-[#84cc16] text-sm font-semibold">+8%</div>
        </div>

      </div>
    </div>
  );
}