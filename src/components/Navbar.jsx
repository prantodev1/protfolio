"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/portfolio";
import Logo from "./Logo";
import ResumeButton from "./ResumeButton";

export default function Navbar({ hasResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const menuButtonRef = useRef(null);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isOpen) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktopChange = (event) => {
      if (event.matches) setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    desktopQuery.addEventListener("change", handleDesktopChange);
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          href="/#home"
          onClick={() => setIsOpen(false)}
          className="group flex shrink-0 items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <Logo />
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-bold leading-tight text-white">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300/70">
              Full-Stack Developer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = isHome && activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-brand-400/10 text-brand-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ResumeButton
              hasResume={hasResume}
              label="Download CV"
              variant="nav"
            />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-200 transition hover:border-brand-400/40 hover:text-brand-300 lg:hidden"
          >
            {isOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = isHome && activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-brand-400/10 text-brand-300"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <ResumeButton
                hasResume={hasResume}
                label="Download CV"
                variant="primary"
                className="w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
