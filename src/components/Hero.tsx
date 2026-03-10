export default function Hero() {
  return (
    <section className="relative w-full min-h-[1000px] lg:min-h-[1200px] overflow-hidden flex flex-col items-center">
      <div className="relative z-10 flex flex-col items-center text-center pt-[150px] lg:pt-[200px] px-6 max-w-[1400px] mx-auto">

        <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-[65px] leading-[1.1] max-w-[1100px] tracking-tight">
          A Single Solution to Manage AI and Hybrid Infrastructure Costs
        </h1>

        <p className="text-white text-lg md:text-xl lg:text-[24px] mt-8 max-w-[900px] opacity-70 leading-relaxed font-light">
          Get end-to-end visibility, chargeback, and forecasting across AI,
          Cloud, SaaS, and on-prem infrastructure to control costs before they grow.
        </p>


        <div className="mt-28 flex justify-center relative">


          <img
            src="/laptop_1.png"
            alt="dashboard laptop"
            className="w-[1036px] max-w-full laptop-float drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
          />


          <div className="absolute bottom-[-30px] w-[900px] h-[80px] bg-black/60 blur-3xl rounded-full"></div>

        </div>

      </div>

    </section>
  );
}