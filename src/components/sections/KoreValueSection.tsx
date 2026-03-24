import content from "../../content/combined.json";

export default function KoreValueSection() {
  const data = content.koreValue;

  return (
    <section className="w-full bg-transparent px-6 md:px-12 lg:px-20 py-20">

      <div className="max-w-[1400px] mx-auto">

        {/* LOGO */}
        <img
          src="/KV Logo White 1.png"
          alt="logo"
          className="w-[220px] md:w-[300px] lg:w-[380px] mb-16"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* SERVICES */}
          <div>
            <h3 className="text-[#77B900] text-[22px] md:text-[26px] lg:text-[30px] font-medium mb-4">
              {data.services.title}
            </h3>

            <div className="flex gap-10">
              <div className="text-[#7E7E7E] text-[15px] md:text-[17px] leading-[28px]">
                {data.services.left.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>

              <div className="text-[#7E7E7E] text-[15px] md:text-[17px] leading-[28px]">
                {data.services.right.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* RESOURCE */}
          <div>
            <h3 className="text-[#77B900] text-[22px] md:text-[26px] lg:text-[30px] font-medium mb-4">
              {data.resource.title}
            </h3>

            <div className="text-[#7E7E7E] text-[15px] md:text-[17px] leading-[28px]">
              {data.resource.items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-[#77B900] text-[22px] md:text-[26px] lg:text-[30px] font-medium mb-4">
              {data.company.title}
            </h3>

            <div className="text-[#7E7E7E] text-[15px] md:text-[17px] leading-[28px]">
              {data.company.items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-[#77B900] text-[22px] md:text-[26px] lg:text-[30px] font-medium mb-4">
              {data.platform.title}
            </h3>

            <div className="text-[#7E7E7E] text-[15px] md:text-[17px] leading-[28px]">
              {data.platform.items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#77B900] mt-16 mb-8"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* FOLLOW */}
          <div className="flex items-center gap-4 text-[#77B900] text-[18px] md:text-[20px]">
            <span>{data.followText}</span>

            <img src="/Insta.png" className="w-[18px]" />
            <img src="/Linkedin.png" className="w-[18px]" />
            <img src="/Twitter.png" className="w-[20px]" />
          </div>

          {/* COPYRIGHT */}
          <div className="text-[#7E7E7E] text-[13px] md:text-[14px] text-center md:text-right">
            {data.copyright}
          </div>

        </div>

      </div>

    </section>
  );
}