import Link from "next/link";

import { pricingIncludes, pricingTiers, primaryButtonClass, secondaryButtonClass } from "@/lib/site";

export const metadata = {
  title: "Pricing",
  description:
    "View FreightAxis pricing structure for dispatch, driver workflow, invoicing, customer management, and pay statement rollout plans.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-6 sm:pt-10">
        <div className="surface-card tech-mesh overflow-hidden p-8 sm:p-10 lg:p-12">
          <span className="eyebrow">Pricing</span>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-silver sm:text-5xl">
            Sales-led pricing for teams rolling dispatch, invoicing, and pay workflows into one
            platform.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
            FreightAxis packages are scoped around the operational workflows you need, the team
            structure you are supporting, and the rollout depth required to go live safely.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={primaryButtonClass}>
              Get a quote
            </Link>
            <Link href="/features" className={secondaryButtonClass}>
              Review features
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`surface-card flex h-full flex-col p-6 ${
                tier.emphasis ? "border-brand/30 bg-[linear-gradient(180deg,rgba(0,174,239,0.1),rgba(255,255,255,0.02))]" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-silver">{tier.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-steel">{tier.description}</p>
                </div>
                {tier.emphasis ? (
                  <span className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Popular
                  </span>
                ) : null}
              </div>

              <p className="mt-8 text-4xl font-semibold text-silver">{tier.price}</p>
              <p className="mt-2 text-sm text-steel/80">Scoped to your rollout</p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="surface-panel bg-graphite/55 px-4 py-4 text-sm text-steel"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`${primaryButtonClass} mt-8`}>
                Talk to sales
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card tech-mesh overflow-hidden p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="eyebrow">Included everywhere</span>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-silver sm:text-4xl">
                A simple, production-safe foundation for your marketing presence.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel sm:text-lg">
                Every FreightAxis plan is positioned around clean workflows, mobile responsiveness,
                and a codebase that is easy for your team to extend.
              </p>
            </div>

            <div className="grid gap-3">
              {pricingIncludes.map((item) => (
                <div
                  key={item}
                  className="surface-panel px-4 py-4 text-sm text-steel"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
