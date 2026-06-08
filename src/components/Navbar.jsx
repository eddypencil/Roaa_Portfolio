import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/roaa_logo.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/hire", label: "Hire" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 py-4 bg-[#F4F0EB] shadow-md z-50">
      <Link to="/" onClick={() => setOpen(false)}>
        <img className="h-8" src={logo} alt="Roaa Logo" />
      </Link>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`font-semibold transition-opacity hover:opacity-70 ${location.pathname === l.to ? "text-[#0F3561]" : "text-[#0F3561]/60"}`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#F4F0EB] shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`font-semibold text-lg transition-opacity hover:opacity-70 ${location.pathname === l.to ? "text-[#0F3561]" : "text-[#0F3561]/60"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
