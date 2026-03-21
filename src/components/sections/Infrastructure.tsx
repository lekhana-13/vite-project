import content from "../../content/combined.json";

export default function Infrastructure() {
  const cards = content.Infrastructure.cards;

  return (
    <section className="w-full flex justify-center overflow-hidden">

      {/* SCALE WRAPPER */}
      <div className="w-full flex justify-center">

        <div
          style={{
            transform: `scale(${
              typeof window !== "undefined"
                ? Math.min(window.innerWidth / 1728, 1)
                : 1
            })`,
            transformOrigin: "top center"
          }}
        >

          {/* MAIN RECTANGLE */}
          <div className="relative w-[1728px] h-[1480px]">

            {cards.map((card, index) => (
              <div key={index}>

                {/* CARD */}
                <div
                  className="absolute left-[979px] w-[669px] h-[386px] rounded-[63px] p-[1px] bg-[linear-gradient(135deg,#0F1800,#77B900)]"
                  style={{ top: `${card.cardTop}px` }}
                >
                  <div className="w-full h-full rounded-[63px] bg-[#131814]" />
                </div>

                {/* TITLE */}
                <h3
                  className="absolute left-[85px] text-white text-[60px] font-semibold leading-[100%]"
                  style={{
                    top: `${card.titleTop}px`,
                    width: card.width || "auto"
                  }}
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="absolute left-[85px] text-[#7E7E7E] text-[36px] font-normal leading-[100%] tracking-[0.05em]"
                  style={{
                    top: `${card.descTop}px`,
                    width: card.descWidth || "auto"
                  }}
                >
                  {card.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}