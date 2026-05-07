import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";

export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const email = "techthinkers07@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "Instagram",
      // Adding www. and ensuring the trailing slash helps
      href: "https://www.instagram.com/tech_thinkers7/",
      icon: "https://cdn.simpleicons.org/instagram/E4405F",
    },
    {
      name: "TikTok",
      // TikTok MUST have the @ symbol for direct profile access
      href: "https://www.tiktok.com/@techthinkers7",
      icon: "https://cdn.simpleicons.org/tiktok/000000",
    },
    {
      name: "Telegram",
      href: "https://t.me/TechThinkers07",
      icon: "https://cdn.simpleicons.org/telegram/26A5E4",
    },
  ];

  return (
    <footer className="relative border-t border-border mt-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2 text-sm">
          {/* Brand & Email Section */}
          <div className="lg:col-span-2">
            <div className="font-display text-2xl text-gradient-silver mb-4 font-bold">
              Tech Thinkers
            </div>
            <p className="text-muted-foreground max-w-sm text-base mb-8">
              Engineering elegant software, mobile apps, and interfaces that move businesses
              forward.
            </p>

            {/* Advanced Email Box */}
            <div className="group relative inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300">
              <Mail size={18} className="text-primary" />
              <span className="font-medium text-foreground">{email}</span>
              <button
                onClick={copyToClipboard}
                className="ml-2 p-2 rounded-lg bg-background border border-border transition-all"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <div className="text-foreground font-semibold mb-6 uppercase tracking-[0.2em] text-[10px]">
              Explore
            </div>
            <ul className="space-y-4">
              {["Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <div className="text-foreground font-semibold mb-6 uppercase tracking-[0.2em] text-[10px]">
              Social Medias
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="group relative w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden transition-all hover:border-primary/50"
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all filter"
                    // style={{ filter: 'brightness(0.8) invert(0.2)' }} // Blends with theme
                  />
                </motion.a>
              ))}
            </div>
            {/* <div className="mt-8 flex items-center gap-2 text-muted-foreground italic">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Remote-first studio
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Tech Thinkers. All rights reserved.</p>
          {/* <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div> */}
        </div>
      </div>

      {/* Modern Gradient Backdrop */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
