import Link from "next/link";

import {
  featurePillars,
  operatingPrinciples,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/lib/site";

export const metadata = {
  title: "Features",
  description:
    "Explore FreightAxis features for dispatch, driver workflow, invoicing, driver pay statements, and customer management.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-6 sm:pt-10">
        <div className="surface-card tech-mesh overflow-hidden p-8 sm:p-10 lg:p-12">
          <span className="eyebrow">Features</span>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-silver sm:text-5xl">
            Operations software designed for real freight workflows, not stitched-together tools.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
            FreightAxis brings together dispatch, driver workflow, invoicing, pay statements,
            and customer management so the handoff from one team to the next stays clean.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={primaryButtonClass}>
              Request a walkthrough
            </Link>
            <Link href="/pricing" className={secondaryButtonClass}>
              See pricing structure
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Capability set</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-silver sm:text-4xl">
            Five core workflows, organized as one operating system.
          </h2>
          <p className="text-base leading-8 text-steel sm:text-lg">
            Use FreightAxis to keep operational data, customer expectations, billing readiness,
            and pay visibility connected across the life of the load.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featurePillars.map((pillar) => (
            <article key={pillar.title} className="surface-card p-6">
              <div className="mb-5 h-px w-12 bg-brand/50" />
              <h3 className="text-2xl font-semibold text-silver">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-5 lg:grid-cols-3">
          {operatingPrinciples.map((principle) => (
            <article key={principle.title} className="surface-card p-6">
              <span className="eyebrow">Operational principle</span>
              <h3 className="mt-5 text-2xl font-semibold text-silver">{principle.title}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card tech-mesh overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">Next step</span>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-silver sm:text-4xl">
                See how FreightAxis fits your dispatch, driver, billing, and pay processes.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel sm:text-lg">
                We kept the marketing experience intentionally simple so your team can move from
                this site into a rollout conversation without extra friction.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="/contact" className={primaryButtonClass}>
                Talk to sales
              </Link>
              <Link href="/pricing" className={secondaryButtonClass}>
                Compare plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
