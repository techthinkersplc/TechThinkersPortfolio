import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu
import { useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Always Visible */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tech Thinkers logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-silver/20"
          />
          <span className="font-display text-xl tracking-wide text-gradient-silver">
            Tech Thinkers
          </span>
        </Link>

        {/* 
            Desktop Navigation 
            'hidden' on mobile/tablet. 
            'lg:flex' only shows it on Large screens (1024px+) 
        */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm transition-colors hover:text-foreground"
              activeProps={{ className: "font-bold text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          {/* <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Start a project
          </Link> */}
        </nav>

        {/* Mobile Menu Toggle - Hidden on Large screens */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 
          Mobile Dropdown Overlay 
          Only renders when isOpen is true and screen is small 
      */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-lg font-medium text-muted-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          {/* <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center rounded-xl bg-primary text-primary-foreground py-4 font-bold"
          >
            Start a project
          </Link> */}
        </div>
      )}
    </header>
  );
}
