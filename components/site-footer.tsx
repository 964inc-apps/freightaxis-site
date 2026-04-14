import Image from "next/image";
import Link from "next/link";

import { appUrl, contactPhoneDisplay, contactPhoneE164, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="max-w-md space-y-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/freightaxis-logo-white.png"
                alt="FreightAxis logo"
                width={480}
                height={120}
                className="h-12 w-auto md:h-20"
              />
            </Link>
            <p className="text-sm leading-7 text-steel">
              FreightAxis helps trucking teams run dispatch, driver workflow, invoicing,
              pay statements, and customer management from one modern operating system.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-silver">
              Pages
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-steel">
              <Link href="/" className="transition hover:text-brand">
                Home
              </Link>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-brand">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-silver">
              Reach us
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-steel">
              <a href={`tel:${contactPhoneE164}`} className="transition hover:text-brand">
                {contactPhoneDisplay}
              </a>
              <a href={`sms:${contactPhoneE164}`} className="transition hover:text-brand">
                Text support
              </a>
              <a href={appUrl} className="transition hover:text-brand">
                Login to FreightAxis
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.08] pt-6 text-sm text-steel/80">
          Copyright {new Date().getFullYear()} FreightAxis. Modern software for freight
          operations.
        </div>
      </div>
    </footer>
  );
}
