export default function Infrastructure() {
  return (
    <section
      className="
      relative
      w-full
      min-h-[800px]
      lg:h-[1000px]
      overflow-hidden
      "
    >

      {/* HEADING TEXT */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        top-[80px]
        w-full
        max-w-[1057px]
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


      {/* SUBHEADING TEXT */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        top-[160px]
        w-full
        max-w-[1220px]
        text-center
        z-[40]
        px-4
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


      {/* MOCKUP IMAGE */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        top-[420px]
        w-full
        max-w-[1230px]
        z-[5]
        px-4
        "
      >
        <img
          src="/mockup.png"
          alt="dashboard mockup"
          className="w-full object-contain"
        />
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

    </section>
  );
}