export default function Infrastructure() {
  return (
    <section className="w-full flex justify-center">

      <div
        className="
        relative
        w-[1728px]
        h-[950px]
        bg-[#0A0F0B]
        overflow-hidden
        "
      >

        {/* MOCKUP */}
        <img
          src="/mockup1.png"
          alt="dashboard mockup"
          className="
          absolute
          w-[1730px]
          h-[1118px]
          left-[1px]
          top-[25px]
          bottom-0
          object-contain
          z-[10]
          "
        />

        {/* GRADIENT GLOW */}
        <img
          src="/gradient-glow.png"
          alt="gradient glow"
          className="
          absolute
          bottom-0
          left-0
          w-full
          pointer-events-none
          z-[15]
          "
        />

        {/* VECTOR DOT PATTERN */}
        <div
          className="
          absolute
          left-0
          top-[200px]
          w-full
          h-[1141px]
          opacity-70
          z-[20]
          pointer-events-none
          "
        >
          <img
            src="/vectors.svg"
            alt="vector dots"
            className="w-full h-full object-cover"
          />
        </div>

        {/* HEADING */}
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[120px]
          w-[1057px]
          text-center
          z-[40]
          "
        >
          <h2
            className="
            text-white
            font-semibold
            text-[50px]
            leading-[100%]
            tracking-[0]
            font-[Poppins]
            "
          >
            Clear answers for Complex Infrastructure
          </h2>
        </div>

        {/* SUBHEADING */}
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[210px]
          w-[1220px]
          text-center
          z-[40]
          "
        >
          <p
            className="
            text-[#7E7E7E]
            font-normal
            text-[30px]
            leading-[100%]
            tracking-[0.05em]
            font-[Poppins]
            drop-shadow-[0_0_10px_rgba(0,0,0,1)]
            "
          >
            When legacy FinOps tools fail to explain rising usage, margin erosion,
            and AI costs KoreValue provides the clarity and control for the modern era.
          </p>
        </div>

        {/* BOTTOM TEXT */}
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[65px]
          w-[863px]
          z-[30]
          text-center
          "
        >
          <p
            className="
            text-white
            font-medium
            text-[18px]
            leading-[100%]
            tracking-[0.07em]
            font-[Poppins]
            "
          >
            KoreValue centralizes cost data across LLMs, GPUs, SaaS tools, and
            private and public cloud, enabling smarter spending, stronger margins,
            and confident scaling.
          </p>
        </div>

      </div>

    </section>
  )
}