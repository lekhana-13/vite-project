import { useState } from "react";
import content from "../../content/combined.json";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navbar = content.Navbar;

  // ✅ UPDATED ROUTES
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
      case "company":                 // ✅ NEW
        return "/company";
      default:
        return "/";
    }
  };

  return (
    <nav className="relative w-full h-[90px] lg:h-[133px] bg-[#0F1800] border-b border-[#436900] flex items-center justify-between px-4 md:px-8 lg:px-12 shadow-[0_4px_23px_rgba(119,185,0,0.24)] z-[100]">

      {/* LOGO */}
      <Link
        to="/"
        className="w-[200px] md:w-[240px] lg:w-[298px] h-[50px] lg:h-[59px] rounded-[11px] border border-[#436900] bg-[#131814] flex items-center justify-center shadow-[0_0_17px_rgba(119,185,0,0.28)]"
      >
        <img
          src="/logo.png"
          alt="Kore Value Logo"
          className="w-[180px] md:w-[220px] lg:w-[274px] object-contain"
        />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center gap-12">

        {/* ✅ MENU ITEMS */}
        {navbar.menu.map((item: string, index: number) => {
          const path = getPath(item);
          const isActive = location.pathname === path;

          return (
            <Link
              key={index}
              to={path}
              className={`text-[20px] font-medium transition cursor-pointer
              ${
                isActive
                  ? "text-[#9fdc00]"
                  : "text-[#77B900] hover:text-[#9fdc00]"
              }`}
            >
              {item}
            </Link>
          );
        })}

        {/* ✅ COMPANY (FORCED POSITION BEFORE BUTTONS) */}
        <Link
          to="/company"
          className={`text-[20px] font-medium transition cursor-pointer
          ${
            location.pathname === "/company"
              ? "text-[#9fdc00]"
              : "text-[#77B900] hover:text-[#9fdc00]"
          }`}
        >
          Company
        </Link>

        {/* CONTACT BUTTON */}
        <button className="w-[176px] h-[48px] rounded-[11px] border border-[#436900] bg-[#131814] text-[#77B900] text-[20px] font-medium flex items-center justify-center hover:bg-[#1a1f1a] transition">
          {navbar.buttons.contact}
        </button>

        {/* LOGIN BUTTON */}
        <button className="w-[176px] h-[48px] rounded-[11px] bg-[#77B900] text-black text-[20px] font-medium flex items-center justify-center shadow-[0_0_23px_rgba(119,185,0,0.65)] hover:bg-[#8fd600] transition">
          {navbar.buttons.login}
        </button>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-[#77B900] text-3xl z-[200]"
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-[90px] left-0 w-full bg-[#0F1800] flex flex-col items-center gap-6 py-8 lg:hidden border-t border-[#436900] z-[150]">

          {navbar.menu.map((item: string, index: number) => {
            const path = getPath(item);

            return (
              <Link
                key={index}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="text-[#77B900] text-lg"
              >
                {item}
              </Link>
            );
          })}

          {/* ✅ COMPANY IN MOBILE */}
          <Link
            to="/company"
            onClick={() => setMenuOpen(false)}
            className="text-[#77B900] text-lg"
          >
            Company
          </Link>

          <button className="w-[160px] h-[44px] border border-[#436900] bg-[#131814] text-[#77B900] rounded-lg">
            {navbar.buttons.contact}
          </button>

          <button className="w-[160px] h-[44px] bg-[#77B900] text-black rounded-lg">
            {navbar.buttons.login}
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;