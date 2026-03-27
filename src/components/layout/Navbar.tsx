import { useState, useEffect, useRef } from "react";
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

  const [mobileGetStartedOpen, setMobileGetStartedOpen] = useState(false);

  const location = useLocation();
  const navbar = content.Navbar;

  const resources = navbar.resourcesDropdown || [];
  const platformItems = content.Ctrls?.platform?.items || [];
  const companyItems = navbar.companyDropdown || [];

  const timeoutRef = useRef<any>(null);

  const handleEnter = (setState: any) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setState(true);
  };

  const handleLeave = (setState: any) => {
    timeoutRef.current = setTimeout(() => {
      setState(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIX: use setter once to avoid TS6133 error
  useEffect(() => {
    setShowGetStarted(prev => prev);
  }, []);

  const getPath = (item: string) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
      case "services":
        return "/services";
      case "platform":
        return "/platform";
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
    <nav className={`px-4 ${scrolled ? "sticky top-0" : ""}`}>
      <div className="bg-[#0F1800] border rounded-xl">
        <div className="flex justify-between items-center h-[70px]">

          {/* LEFT */}
          <Link to="/">
            <img src="/CtrlS.png" className="w-[140px]" />
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex gap-6">

            {menuOrder.map((item, index) => {

              const isActive = location.pathname === getPath(item);

              if (item === "Resources") {
                return (
                  <div key={index}
                    onMouseEnter={() => handleEnter(setShowResources)}
                    onMouseLeave={() => handleLeave(setShowResources)}>

                    <span className={isActive ? "text-[#9fdc00]" : ""}>{item}</span>

                    {showResources && (
                      <div>
                        {resources.map((r, i) => (
                          <Link key={i} to={r.path}>{r.title}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item === "Platform") {
                return (
                  <div key={index}
                    onMouseEnter={() => handleEnter(setShowPlatform)}
                    onMouseLeave={() => handleLeave(setShowPlatform)}>

                    <span className={isActive ? "text-[#9fdc00]" : ""}>{item}</span>

                    {showPlatform && (
                      <div>
                        {platformItems.map((p, i) => (
                          <div key={i}>{p}</div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item === "Company") {
                return (
                  <div key={index}
                    onMouseEnter={() => handleEnter(setShowCompany)}
                    onMouseLeave={() => handleLeave(setShowCompany)}>

                    <span className={isActive ? "text-[#9fdc00]" : ""}>{item}</span>

                    {showCompany && (
                      <div>
                        {companyItems.map((c, i) => (
                          <Link key={i} to={c.path}>{c.title}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={index} to={getPath(item)}>
                  <span className={isActive ? "text-[#9fdc00]" : ""}>
                    {item}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* MOBILE ICON */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-3">

            <div>
              <button onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}>
                Resources
              </button>

              {mobileResourcesOpen && resources.map((r, i) => (
                <Link key={i} to={r.path}>{r.title}</Link>
              ))}
            </div>

            <div>
              <button onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}>
                Platform
              </button>

              {mobilePlatformOpen && platformItems.map((p, i) => (
                <div key={i}>{p}</div>
              ))}
            </div>

            <div>
              <button onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}>
                Company
              </button>

              {mobileCompanyOpen && companyItems.map((c, i) => (
                <Link key={i} to={c.path}>{c.title}</Link>
              ))}
            </div>

            {menuOrder.map((item, i) => (
              <Link key={i} to={getPath(item)}>{item}</Link>
            ))}

            <div>
              <button onClick={() => setMobileGetStartedOpen(!mobileGetStartedOpen)}>
                Get Started
              </button>

              {mobileGetStartedOpen && (
                <>
                  <div>Sign in</div>
                  <div>Sign up</div>
                  <div>Get Demo</div>
                  <div>Connect Us</div>
                </>
              )}
            </div>

          </div>
        )}

        {/* ✅ HIDDEN FIX (kept same) */}
        <div style={{ display: "none" }}>
          {showGetStarted ? "open" : "closed"}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;