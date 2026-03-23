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
    <section className="w-full flex justify-center py-20 md:py-28 lg:py-32 bg-transparent relative z-10">

      {/* CONTAINER */}
      <div className="
        w-full 
        max-w-[1400px] 
        px-6 md:px-10 lg:px-0
        flex flex-col gap-24 md:gap-32 lg:gap-40
      ">

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              flex flex-col lg:flex-row 
              items-center 
              justify-between 
              gap-12 md:gap-16 lg:gap-32
            "
          >

            {/* LEFT TEXT */}
            <div className="w-full lg:w-[50%] text-center lg:text-left">

              <h3 className="
                text-white 
                font-semibold 
                leading-[1.1]
                text-[32px] 
                sm:text-[40px] 
                md:text-[48px] 
                lg:text-[64px]
                mb-4 md:mb-6
              ">
                {card.title}
              </h3>

              <p className="
                text-[#8A8A8A] 
                leading-[1.6]
                text-[16px] 
                sm:text-[18px] 
                md:text-[20px] 
                lg:text-[26px]
                max-w-full lg:max-w-[600px]
                mx-auto lg:mx-0
              ">
                {card.description}
              </p>

            </div>

            {/* RIGHT CARD */}
            <div className="
              w-full 
              max-w-[500px] 
              sm:max-w-[600px] 
              lg:w-[640px] 
              h-[220px] 
              sm:h-[260px] 
              md:h-[300px] 
              lg:h-[360px]
              rounded-[28px] sm:rounded-[36px] lg:rounded-[48px]
              p-[2px]
              bg-[linear-gradient(135deg,#0F1800,#77B900)]
              shadow-[0_0_40px_rgba(119,185,0,0.25)] 
              lg:shadow-[0_0_80px_rgba(119,185,0,0.25)]
            ">

              {/* INNER */}
              <div className="
                w-full h-full 
                bg-[#0E1411] 
                rounded-[26px] sm:rounded-[34px] lg:rounded-[46px]
                overflow-hidden
                flex items-center justify-center
              ">

                {/* CONDITION */}
                {index === 2 ? (
                  <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                    <KubexChart />
                  </div>
                ) : (
                  <img
                    src={images[index]}
                    alt={card.title}
                    className="w-full h-full object-cover"
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