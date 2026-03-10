type CardProps = {
  icon: string
  title: string
  description: string
}

export default function VisibilityCard({ icon, title, description }: CardProps) {
  return (
    <div
      className="
      w-[386px]
      h-[332px]
      bg-[#131814]
      rounded-[45px]
      border border-[#283E00]
      flex
      flex-col
      items-center
      pt-[40px]
      text-center
      px-6
      "
    >

      {/* ICON */}
      <img
        src={icon}
        alt={title}
        className="w-[60px] h-[50px] mb-[24px]"
      />

      {/* TITLE */}
      <h3 className="text-white text-[22px] font-semibold mb-[16px]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#929292] text-[15px] leading-[32px]">
        {description}
      </p>

    </div>
  )
}