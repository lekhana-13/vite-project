import ServiceCard from "../ui/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="w-full flex justify-center">

      {/* MOBILE VIEW (GRID) */}
      <div className="lg:hidden w-full px-4 py-16">

        <h2 className="text-white text-[32px] font-semibold text-center mb-10">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">

          <ServiceCard emoji="/cost.png" title="Cost Analyzer" description="See exactly where every cost is being spent across clouds" />
          <ServiceCard icon="/category.png" title="Category Views" description="Slice spend by teams, projects, and business categories" />
          <ServiceCard icon="/observability.png" title="K8s Cost Observability" description="Track Kubernetes spend by namespace, pod, and workload" />
          <ServiceCard icon="/recommendation.png" title="Recommendations" description="Get actionable suggestions to reduce waste and optimize resources" />
          <ServiceCard icon="/anomaly.png" title="Anomaly Detection" description="Spot unusual spend patterns before they become budget surprises" />
          <ServiceCard icon="/reporting.png" title="Reporting" description="Build and schedule cost reports for stakeholders" />
          <ServiceCard icon="/virtual.png" title="Virtual Tags" description="Tag resources dynamically without changing cloud metadata" />
          <ServiceCard icon="/cost-allocation.png" title="Cost Allocation" description="Allocate spend to teams, products, and business units" />
          <ServiceCard icon="/unit-economics.png" title="Unit Economics" description="Understand cost per user, request, and feature usage" />
          <ServiceCard icon="/forecasting.png" title="Forecasting" description="Predict future spend with historical trends" />
          <ServiceCard icon="/budgeting.png" title="Budgeting" description="Set spending limits and get alerts when close to thresholds" />

        </div>
      </div>

      {/* DESKTOP VIEW (YOUR EXACT DESIGN — NO CHANGE) */}
      {/* DESKTOP VIEW */}
<div className="hidden lg:block w-full max-w-[1728px] h-[1117px] relative mx-auto">

  {/* TITLE */}
  <h2 className="text-white text-[55px] font-semibold text-center absolute top-[80px] left-1/2 -translate-x-1/2">
    Explore Our Services
  </h2>

  {/* ✅ CENTER WRAPPER (IMPORTANT) */}
  <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-full">

    {/* ROW 1 */}
    <div className="absolute top-[250px] left-[0px]">
      <ServiceCard icon="/cost.png" title="Cost Analyzer" description="See exactly where every cost is being spent across clouds" />
    </div>

    <div className="absolute top-[250px] left-[300px]">
      <ServiceCard icon="/category.png" title="Category Views" description="Slice spend by teams, projects, and business categories" />
    </div>

    <div className="absolute top-[250px] left-[600px]">
      <ServiceCard icon="/observability.png" title="K8s Cost Observability" description="Track Kubernetes spend by namespace, pod, and workload" />
    </div>

    <div className="absolute top-[250px] left-[900px]">
      <ServiceCard icon="/recommendation.png" title="Recommendations" description="Get actionable suggestions to reduce waste and optimize resources" />
    </div>

    {/* ROW 2 */}
    <div className="absolute top-[544px] left-[0px]">
      <ServiceCard icon="/anomaly.png" title="Anomaly Detection" description="Spot unusual spend patterns before they become budget surprises" />
    </div>

    <div className="absolute top-[544px] left-[300px]">
      <ServiceCard icon="/reporting.png" title="Reporting" description="Build and schedule cost reports for stakeholders" />
    </div>

    <div className="absolute top-[544px] left-[600px]">
      <ServiceCard icon="/virtual.png" title="Virtual Tags" description="Tag resources dynamically without changing cloud metadata" />
    </div>

    <div className="absolute top-[544px] left-[900px]">
      <ServiceCard icon="/cost-allocation.png" title="Cost Allocation" description="Allocate spend to teams, products, and business units" />
    </div>

    {/* ROW 3 */}
    <div className="absolute top-[840px] left-[150px]">
      <ServiceCard icon="/unit-economics.png" title="Unit Economics" description="Understand cost per user, request, and feature usage" />
    </div>

    <div className="absolute top-[840px] left-[450px]">
      <ServiceCard icon="/forecasting.png" title="Forecasting" description="Predict future spend with historical trends" />
    </div>

    <div className="absolute top-[840px] left-[750px]">
      <ServiceCard icon="/budgeting.png" title="Budgeting" description="Set spending limits and get alerts when close to thresholds" />
    </div>

  </div>

</div>

    </section>
  );
}
export default ServicesSection;