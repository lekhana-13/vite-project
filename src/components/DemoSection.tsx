export default function DemoSection() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <section className="w-full bg-[#0A0F0B] flex justify-center py-24 px-4">
      {/* PAGE FRAME */}
      <div
        className="relative w-full max-w-[1300px] border-[5px] border-transparent mx-auto flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-24 gap-16 overflow-hidden"
        style={{
          borderImage: "linear-gradient(180deg,#283E00,#182500) 1"
        }}
      >
        {/* TEXT CONTENT */}
        <div className="flex-1 z-10">
          <p className="text-white text-2xl md:text-3xl font-semibold mb-8 uppercase tracking-wide opacity-90">
            No Risk Proof of Value
          </p>

          <h1 className="text-[#77B900] text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-12">
            Start controlling your AI and Hybrid Environment Costs.
          </h1>

          <p className="text-white text-lg font-medium leading-relaxed opacity-80 max-w-[600px]">
            Monitor every expense across cloud, on-premise systems, AI and SaaS
            through a single platform. Avoid unexpected costs with real-time cost
            distribution, anomaly monitoring and predictive forecasting.
            Streamline cost management using chargebacks, spending guardrails,
            and AI-powered insights.
          </p>
        </div>

        {/* FORM WRAPPER */}
        <div className="w-full max-w-[480px] relative z-10">

          {/* GLOW IMAGE */}
          <img
            src="./Group 61.png"
            alt="glow"
            className="absolute -inset-10 w-[600px] opacity-40 pointer-events-none -z-10"
          />

          {/* FORM */}
          <div
            className="
            relative
            w-full
            rounded-[30px]
            border-[3px]
            border-[#283E00]
            p-8 md:p-10
            bg-[#0A0F0B]/80
            backdrop-blur-sm
            flex flex-col
            "
          >
            <h2 className="text-white text-3xl font-medium mb-8">
              Request a Demo
            </h2>

            {/* NAME */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 block">
                Name <span className="text-[#77B900]">*</span>
              </label>

              <input
                className="
                w-full
                h-14
                bg-[#131814]
                border border-[#283E00]
                rounded-[12px]
                px-4
                text-white
                outline-none
                focus:border-[#77B900]
                transition-colors
                "
                placeholder="Your Name"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 block">
                E-Mail <span className="text-[#77B900]">*</span>
              </label>

              <input
                className="
                w-full
                h-14
                bg-[#131814]
                border border-[#283E00]
                rounded-[12px]
                px-4
                text-white
                outline-none
                focus:border-[#77B900]
                transition-colors
                "
                placeholder="your@email.com"
              />
            </div>

            {/* ORGANIZATION */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 block">
                Organization Name <span className="text-[#77B900]">*</span>
              </label>

              <input
                className="
                w-full
                h-14
                bg-[#131814]
                border border-[#283E00]
                rounded-[12px]
                px-4
                text-white
                outline-none
                focus:border-[#77B900]
                transition-colors
                "
                placeholder="Company Name"
              />
            </div>

            {/* HOW YOU KNOW */}
            <div className="mb-10">
              <label className="text-white text-sm font-medium mb-2 block">
                How you Know about us? <span className="text-[#77B900]">*</span>
              </label>

              <input
                className="
                w-full
                h-14
                bg-[#131814]
                border border-[#283E00]
                rounded-[12px]
                px-4
                text-white
                outline-none
                focus:border-[#77B900]
                transition-colors
                "
                placeholder="Referral, Social Media, etc."
              />
            </div>

            {/* BUTTON */}
            <div className="w-full flex justify-end">
              <button
                onClick={scrollToTop}
                className="
                px-10
                py-3
                bg-[#77B900]
                rounded-[11px]
                text-[#131814]
                text-lg
                font-semibold
                shadow-[0_0_20px_rgba(119,185,0,0.4)]
                hover:bg-[#8fd600]
                transition-all
                "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
