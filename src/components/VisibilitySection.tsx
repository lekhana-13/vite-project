export default function VisibilitySection() {
  return (
    <section
      className="
      w-full
      flex
      justify-center
      "
    >


      <div className="relative w-full max-w-[1300px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">

          <h2 className="text-[#77B900] text-3xl md:text-4xl lg:text-[45px] font-semibold mb-6">
            One Platform, End-to-End Visibility
          </h2>

          <p className="text-[#D1D1D1] text-lg md:text-xl lg:text-[26px] max-w-[1180px] mx-auto opacity-90">
            Track and manage the true cost of workloads across every
            environment with clarity.
          </p>

        </div>

        {/* CARD GRID */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          justify-items-center
          "
        >

          {/* CARD 1 */}
          <div className="w-full max-w-[386px] min-h-[332px] bg-[#131814] rounded-[24px] border border-[#283E00] flex flex-col items-center p-8 text-center hover:border-[#77B900] transition-colors group">
            <img src="/workload.png" className="w-[65px] h-[38px] mb-[24px] group-hover:scale-110 transition-transform" />
            <h3 className="text-white text-[22px] font-semibold mb-[16px]">
              Track AI Workloads End-to-End
            </h3>
            <p className="text-[#D1D1D1] text-[15px] leading-relaxed opacity-80">
              Monitor the cost of every model call,
              agent interaction, and GPU hour while
              enabling detailed visibility for
              precise chargeback allocation.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-full max-w-[387px] min-h-[332px] bg-[#131814] rounded-[24px] border border-[#283E00] flex flex-col items-center p-8 text-center hover:border-[#77B900] transition-colors group">
            <img src="/shared-icon.png" className="w-[64px] h-[64px] mb-[24px] group-hover:scale-110 transition-transform" />
            <h3 className="text-white text-[20px] font-semibold mb-[16px]">
              Handle Complex Shared Resources
            </h3>
            <p className="text-[#D1D1D1] text-[15px] leading-relaxed opacity-80">
              Allocate costs across Kubernetes clusters,
              shared databases, and multi-tenant infrastructure
              effortlessly with KoreValue’s intelligent
              allocation engine.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-full max-w-[386px] min-h-[332px] bg-[#131814] rounded-[24px] border border-[#283E00] flex flex-col items-center p-8 text-center hover:border-[#77B900] transition-colors group">
            <img src="/cloud.png" className="w-[59px] h-[46px] mb-[24px] group-hover:scale-110 transition-transform" />
            <h3 className="text-white text-[22px] font-semibold mb-[16px]">
              Unify Multi-Cloud Cost Data
            </h3>
            <p className="text-[#D1D1D1] text-[15px] leading-relaxed opacity-80">
              Move beyond scattered reports from AWS,
              Azure, GCP and on-prem with a unified
              platform that standardizes cost data
              across environments.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="w-full max-w-[386px] min-h-[332px] bg-[#131814] rounded-[24px] border border-[#283E00] flex flex-col items-center p-8 text-center hover:border-[#77B900] transition-colors group">
            <img src="/pie-chart.svg" className="w-[40px] h-[40px] mb-[24px] group-hover:scale-110 transition-transform" />
            <h3 className="text-white text-[22px] font-semibold mb-[18px]">
              Govern Before you Spend
            </h3>
            <p className="text-[#D1D1D1] text-[15px] leading-relaxed opacity-80">
              Implement budget protections to stop
              unapproved resource creation before
              it impacts your billing.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="w-full max-w-[387px] min-h-[332px] bg-[#131814] rounded-[24px] border border-[#283E00] flex flex-col items-center p-8 text-center hover:border-[#77B900] transition-colors group">
            <img src="/settings.svg" className="w-[60px] h-[50px] mb-[24px] group-hover:scale-110 transition-transform" />
            <h3 className="text-white text-[20px] font-semibold mb-[18px]">
              Integrate into Existing Workflows
            </h3>
            <p className="text-[#D1D1D1] text-[15px] leading-relaxed opacity-80">
              Built on an API-first model, it integrates
              with ERP, ITSM, and BI platforms.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="w-full max-w-[386px] min-h-[332px] bg-[#131814] rounded-[24px] border border-[#283E00] flex flex-col items-center p-8 text-center hover:border-[#77B900] transition-colors group">
            <img src="/graph.svg" className="w-[60px] h-[50px] mb-[24px] group-hover:scale-110 transition-transform" />
            <h3 className="text-white text-[22px] font-semibold mb-[18px]">
              Deploy in Days, not Months
            </h3>
            <p className="text-[#D1D1D1] text-[15px] leading-relaxed opacity-80">
              Integrated discovery automation and
              virtual tagging start working right
              away.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}