import content from "../../content/combined.json";
import KubexChart from "../ui/KubexChart";

type Card = {
  title: string;
  description: string;
};

export default function Infrastructure() {
  const cards: Card[] = content.Infrastructure.cards;

  const images = ["/finops.png", "/spend.png"];

  return (
    <section className="w-full flex justify-center py-16 md:py-32 bg-transparent relative z-10 px-4">

      <div className="w-full max-w-[1400px] flex flex-col gap-20 md:gap-40">

        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-32"
          >

            {/* LEFT TEXT */}
            <div className="w-full md:w-[50%] text-center md:text-left">
              <h3 className="text-white text-3xl md:text-[64px] font-semibold leading-tight md:leading-[1.05] mb-4 md:mb-6">
                {card.title}
              </h3>

              <p className="text-[#8A8A8A] text-base md:text-[26px] leading-relaxed md:leading-[1.6] max-w-full md:max-w-[600px] mx-auto md:mx-0">
                {card.description}
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="
              w-full md:w-[640px]
              h-[220px] md:h-[360px]
              rounded-[32px] md:rounded-[48px]
              p-[2px]
              bg-[linear-gradient(135deg,#0F1800,#77B900)]
              shadow-[0_0_40px_rgba(119,185,0,0.2)] md:shadow-[0_0_80px_rgba(119,185,0,0.25)]
            ">

              <div className="
                w-full h-full 
                bg-[#0E1411] 
                rounded-[30px] md:rounded-[46px] 
                overflow-hidden
                flex items-center justify-center
              ">

                {index === 2 ? (
                  <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
                    <KubexChart />
                  </div>
                ) : (
                  <img
                    src={images[index]}
                    alt={card.title}
                    className="w-full h-full object-contain md:object-cover p-4 md:p-0"
                  />
                )}

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}