"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { appUrl, navItems, primaryButtonClass } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/[0.08] bg-graphite/90 shadow-soft backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/freightaxis-logo-white.png"
                alt="FreightAxis logo"
                width={360}
                height={90}
                priority
                className="h-10 w-auto md:h-14"
              />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "border border-brand/30 bg-brand/12 text-silver"
                        : "text-steel hover:bg-white/[0.04] hover:text-silver"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex">
              <a href={appUrl} className={primaryButtonClass}>
                Login
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.08] px-4 py-2 text-sm font-semibold text-silver transition hover:bg-white/[0.04] md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              Menu
            </button>
          </div>

          {isOpen ? (
            <div
              id="mobile-navigation"
              className="border-t border-white/[0.08] px-4 py-4 md:hidden sm:px-6"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "border border-brand/30 bg-brand/12 text-silver"
                          : "border border-white/[0.08] bg-white/[0.03] text-steel hover:bg-white/[0.04] hover:text-silver"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a href={appUrl} className={`${primaryButtonClass} mt-2`} onClick={closeMenu}>
                  Login
                </a>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
