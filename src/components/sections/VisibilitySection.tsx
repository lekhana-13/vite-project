import VisibilityCard from "../ui/VisibilityCard"
import content from "../../content/combined.json"

type Card = {
  icon: string
  title: string
  description: string
}

export default function VisibilitySection() {
  const visibility = content.visibility

  return (
    <section
      className="
      relative
      w-full
      overflow-hidden
      flex
      justify-center
      py-16 md:py-20 lg:py-32
      "
    >

      <div className="relative w-full max-w-[1300px] px-4 sm:px-6">

        {/* ================= RECTANGULAR FRAME ================= */}
        <div className="w-full mb-6 md:mb-8 flex justify-center">

          <div className="relative w-full max-w-[1000px]">

            <img
              src="/Rectangle 65.png"
              alt="frame"
              className="
              w-full
              h-[160px] sm:h-[200px] md:h-[260px] lg:h-[320px]
              object-cover
              rounded-[14px] md:rounded-[18px]
              border border-[#2a3f1a]
              shadow-[0_0_40px_rgba(119,185,0,0.08)]
              "
            />

          </div>

        </div>

        {/* ================= BUTTONS BELOW FRAME ================= */}
        <div className="
          flex
          flex-col sm:flex-row
          justify-center
          items-center
          gap-3 sm:gap-4
          mb-10 md:mb-12
        ">

          {/* CONTACT US */}
          <button className="
            w-full sm:w-auto
            px-5 md:px-6
            py-2.5 md:py-3
            rounded-[10px]
            border border-[#436900]
            text-[#77B900]
            bg-[#131814]
            hover:bg-[#1a1f1a]
            transition
            text-[13px] sm:text-[14px] md:text-[16px]
          ">
            Contact Us
          </button>

          {/* GET DEMO */}
          <button className="
            w-full sm:w-auto
            px-5 md:px-6
            py-2.5 md:py-3
            rounded-[10px]
            bg-[#77B900]
            text-black
            font-medium
            shadow-[0_0_20px_rgba(119,185,0,0.5)]
            hover:bg-[#8fd600]
            transition
            text-[13px] sm:text-[14px] md:text-[16px]
          ">
            Get a Demo
          </button>

        </div>

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">

          <h2 className="
            text-[#77B900]
            text-[24px] sm:text-[28px] md:text-[36px] lg:text-[45px]
            font-semibold
            mb-3 md:mb-4 lg:mb-6
          ">
            {visibility.title}
          </h2>

          <p className="
            text-[#7E7E7E]
            text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px]
            max-w-[1180px]
            mx-auto
          ">
            {visibility.description}
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8 lg:gap-10
          justify-items-center
          "
        >

          {visibility.cards.map((card: Card, index: number) => (
            <VisibilityCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}

        </div>

      </div>

    </section>
  )
}