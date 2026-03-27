import { useState, useEffect } from "react";
import content from "../../content/combined.json";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const [showGetStarted, setShowGetStarted] = useState(false);

  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const location = useLocation();
  const navbar = content.Navbar;

  const resources = navbar.resourcesDropdown || [];
  const platformItems = content.Ctrls?.platform?.items || [];
  const companyItems = navbar.companyDropdown || [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPath = (item: string) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
      case "services":
        return "/services";
      case "platform":
        return "/platform";
      case "resource":
      case "resources":
        return "/resources";
      case "company":
        return "/company";
      case "pricing":
        return "/pricing";
      default:
        return "/";
    }
  };

  const menuOrder = ["Home", "Services", "Resources", "Platform", "Company", "Pricing"];

  return (
    <nav
      dir="ltr"
      className={`px-4 transition-all duration-300 relative z-[9999] isolate ${
        scrolled ? "sticky top-0" : ""
      }`}
    >
      <div
        className={`w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto border border-[#436900] rounded-[20px] shadow-[0_4px_23px_rgba(119,185,0,0.24)] transition-all duration-300 ${
          scrolled
            ? "bg-[#0F1800]/90 backdrop-blur-md"
            : "bg-[#0F1800] mt-6"
        }`}
      >
        <div className="px-4 md:px-6 lg:px-8 xl:px-6 2xl:px-10 relative">
          <div className="grid grid-cols-3 items-center h-[70px] md:h-[85px] lg:h-[95px] xl:h-[105px]">

            {/* LEFT */}
            <div className="flex justify-start">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src="/CtrlS.png"
                  alt="logo"
                  className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] object-contain"
                />
              </Link>
            </div>

            {/* CENTER */}
            <div className="hidden lg:flex justify-center">
              <div className="flex items-center gap-5 md:gap-7 lg:gap-9 xl:gap-12 2xl:gap-14">

                {menuOrder.map((item, index) => {
                  const path = getPath(item);
                  const isActive = location.pathname === path;

                  const MenuItem = (
                    <div className="relative group cursor-pointer">
                      <span
                        className={`text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] font-medium transition ${
                          isActive
                            ? "text-[#9fdc00]"
                            : "text-[#77B900] hover:text-[#9fdc00]"
                        }`}
                      >
                        {item}
                      </span>
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-[#9fdc00] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </div>
                  );

                  // 🔥 RESOURCES DROPDOWN
                  if (item === "Resources") {
                    return (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setShowResources(true)}
                        onMouseLeave={() => setShowResources(false)}
                      >
                        {MenuItem}

                        {showResources && (
                          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50">
                            <div className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#0F1800] to-[#77B900]">
                              <div className="w-[540px] bg-[#0F1800] rounded-[20px] px-8 py-7">
                                <div className="grid grid-cols-2 gap-10">
                                  {resources.map((res, i) => (
                                    <Link key={i} to={res.path}>
                                      <div>
                                        <p className="text-[#9fdc00] text-[18px] font-semibold">
                                          {res.title}
                                        </p>
                                        <p className="text-white/60 text-[14px]">
                                          {res.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // 🔥 PLATFORM DROPDOWN
                  if (item === "Platform") {
                    return (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setShowPlatform(true)}
                        onMouseLeave={() => setShowPlatform(false)}
                      >
                        {MenuItem}

                        {showPlatform && (
                          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50">
                            <div className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#0F1800] to-[#77B900]">
                              <div className="w-[280px] bg-[#0F1800] rounded-[20px] p-4">
                                {platformItems.map((p, i) => (
                                  <div key={i} className="py-2 text-white/80 hover:text-[#9fdc00]">
                                    {p}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // 🔥 COMPANY DROPDOWN
                  if (item === "Company") {
                    return (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setShowCompany(true)}
                        onMouseLeave={() => setShowCompany(false)}
                      >
                        {MenuItem}

                        {showCompany && (
                          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50">
                            <div className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#0F1800] to-[#77B900]">
                              <div className="w-[240px] bg-[#0F1800] rounded-[20px] p-4">
                                {companyItems.map((c, i) => (
                                  <Link key={i} to={c.path}>
                                    <div className="py-2 text-white/80 hover:text-[#9fdc00]">
                                      {c.title}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link key={index} to={path}>
                      {MenuItem}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex justify-end items-center gap-3 xl:gap-4 pr-4 lg:pr-6 xl:pr-8 ml-6 lg:ml-10 xl:ml-14">
              <div
                className="relative"
                onClick={() => setShowGetStarted(!showGetStarted)}
              >
                <button className="px-5 py-2 rounded-[12px] bg-[#77B900] text-black font-medium">
                  Get Started ⌄
                </button>

                {showGetStarted && (
                  <div className="absolute right-0 mt-3 w-[200px] bg-[#0F1800] border border-[#77B900] rounded-[14px] p-3">
                    <div className="flex flex-col gap-2">
                      <div className="px-3 py-2 border border-[#436900] rounded-lg text-[#77B900]">Sign in</div>
                      <div className="px-3 py-2 border border-[#436900] rounded-lg text-[#77B900]">Sign up</div>
                      <div className="px-3 py-2 border border-[#436900] rounded-lg text-[#77B900]">Get Demo</div>
                      <div className="px-3 py-2 border border-[#436900] rounded-lg text-[#77B900]">Connect Us</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* MOBILE ICON */}
            <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#77B900] text-3xl">
                ☰
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;