"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M6.9 4.5h2.6l1.3 4.1-1.9 1.7a15 15 0 0 0 4.8 4.8l1.7-1.9 4.1 1.3v2.6c0 .8-.6 1.5-1.4 1.6-1 .1-2 .1-3-.1A17.5 17.5 0 0 1 5.3 8.9c-.2-1-.2-2-.1-3 0-.8.7-1.4 1.7-1.4Z" />
    </svg>
  );
}

const contactItems = [
  {
    label: "Instagram",
    value: "@vivid_rone",
    href: "https://www.instagram.com/vivid_rone?igsh=MXQ4bzVyNmZwN3BlZg==",
    icon: InstagramIcon,
  },
  {
    label: "Email",
    value: "vividrone@naver.com",
    href: "mailto:vividrone@naver.com",
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: "010-2762-0987",
    href: "tel:01027620987",
    icon: PhoneIcon,
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${scrolled ? "border-b border-white/60 bg-white/75 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/images/비비드드론로고2.png" alt="Vivid Drone Studio logo" width={200} height={100} className="h-20 w-auto" priority />
        </a>
        <div className="flex items-center gap-4">
          <nav className={`md:flex items-center gap-5 text-sm transition-colors duration-300 hidden ${scrolled ? "text-slate-600" : "text-white"}`}>
            <a href="#products" className={`transition ${scrolled ? "hover:text-slate-950" : "hover:text-white/70"}`}>
              Products
            </a>
            <a href="#contact" className={`transition ${scrolled ? "hover:text-[#5eaefd]" : "hover:text-white/70"}`}>
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2 ml-10">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Instagram" ? "_blank" : undefined}
                  rel={item.label === "Instagram" ? "noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  title={`${item.label}: ${item.value}`}
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition ${
                    scrolled ? "border-slate-200 bg-white/80 text-slate-600 hover:border-amber-300 hover:text-slate-950" : "border-transparent bg-transparent text-white hover:text-white/70"
                  }`}
                >
                  <Icon />
                  <span className="pointer-events-none absolute right-0 top-[calc(100%+0.5rem)] whitespace-nowrap rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    {item.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
