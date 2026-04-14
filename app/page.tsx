import Link from "next/link";

import {
  ghostButtonClass,
  platformModules,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/lib/site";

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-silver sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-steel sm:text-lg">{description}</p>
    </div>
  );
}

function ModulePreview({
  previewTitle,
  metrics,
  rows,
  footer,
}: {
  previewTitle: string;
  metrics: (typeof platformModules)[number]["metrics"];
  rows: (typeof platformModules)[number]["rows"];
  footer: string;
}) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="border-b border-white/[0.08] px-5 py-4">
        <p className="text-sm font-semibold text-silver">{previewTitle}</p>
      </div>
      <div className="grid gap-3 border-b border-white/[0.08] px-5 py-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="surface-panel bg-graphite/55 p-4">
            <p className="text-2xl font-semibold text-silver">{metric.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-steel/80">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-3 px-5 py-5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="surface-panel flex items-center justify-between gap-3 px-4 py-4"
          >
            <div>
              <p className="text-sm font-semibold text-silver">{row.name}</p>
              <p className="mt-1 text-sm text-steel">{row.detail}</p>
            </div>
            <span className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand">
              {row.state}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.08] px-5 py-4 text-sm text-steel">{footer}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div>
          <div className="max-w-4xl">
            <span className="eyebrow">FreightAxis operating system</span>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-silver sm:text-5xl lg:text-6xl">
              Run your trucking operation from dispatch to payout.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              FreightAxis is the modern platform for dispatch, drivers, invoicing, and pay
              statements, built to keep every handoff aligned in one clean operating system.
            </p>
          </div>

          <div className="surface-card tech-mesh relative mt-10 px-5 py-6 sm:px-6 sm:py-7 lg:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-16 right-16 top-[3rem] hidden border-t border-brand/20 lg:block"
            />
            <div className="relative grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-4">
              <div className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-graphite text-silver shadow-soft">
                  <span className="h-3 w-3 rounded-full bg-brand" />
                </span>
                <span className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-steel">
                  Trucking Dispatch
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-graphite text-silver shadow-soft">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20Z" />
                    <path d="M9 4v13.5" />
                    <path d="M15 6.5V20" />
                    <circle cx="15" cy="10" r="1.4" fill="#00AEEF" stroke="none" />
                  </svg>
                </span>
                <span className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-steel">
                  Driver Workflow
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-graphite text-silver shadow-soft">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 5.5c-.7-.7-1.7-1-2.9-1-2.3 0-4 1.2-4 3 0 4.5 8 2 8 6 0 1.7-1.6 3-4 3-1.4 0-2.7-.4-3.6-1.3" />
                    <path d="M12 3v18" />
                  </svg>
                </span>
                <span className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-steel">
                  Billing
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-graphite text-silver shadow-soft">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 8.5h12.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5H4.5Z" />
                    <path d="M4.5 10.5V7.8A1.8 1.8 0 0 1 6.3 6h9.4" />
                    <circle cx="16" cy="13.5" r="1" fill="#00AEEF" stroke="none" />
                  </svg>
                </span>
                <span className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-steel">
                  Pay Statements
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={primaryButtonClass}>
              Talk to sales
            </Link>
            <Link href="/pricing" className={secondaryButtonClass}>
              Pricing
            </Link>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(0,174,239,0.08),rgba(255,255,255,0.02))] p-4 shadow-panel sm:p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,174,239,0.12),transparent_30%)]"
            />
            <div className="relative rounded-[1.75rem] border border-white/[0.08] bg-graphite/85 p-4 sm:p-5">
              <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-silver">FreightAxis live operations</p>
                  <p className="mt-1 text-sm text-steel">
                    A unified view for dispatch, drivers, billing, and payout readiness.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand">
                    Dispatch Board
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-steel">
                    Beta platform
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[1.45fr_0.85fr_0.85fr]">
                <div className="surface-panel p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-silver">Dispatch Board</p>
                    <span className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-brand">
                      18 active
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ["DAL to MEM", "Assigned", "Pickup 10:15 AM"],
                      ["PHX to LAX", "In transit", "Driver check-in 12 min ago"],
                      ["ATL to CLT", "Needs review", "POD pending"],
                    ].map(([lane, state, detail]) => (
                      <div
                        key={lane}
                        className="grid gap-3 rounded-2xl border border-white/[0.08] bg-graphite/70 px-4 py-3 sm:grid-cols-[1fr_auto]"
                      >
                        <div>
                          <p className="text-sm font-semibold text-silver">{lane}</p>
                          <p className="mt-1 text-sm text-steel">{detail}</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-silver">
                          {state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="surface-panel p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-silver">Active Drivers</p>
                      <span className="h-2.5 w-2.5 rounded-full bg-success" />
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        ["12 on route", "4 available"],
                        ["6 docs uploaded", "2 exceptions"],
                      ].map(([primary, secondary]) => (
                        <div
                          key={primary}
                          className="rounded-2xl border border-white/[0.08] bg-graphite/70 px-4 py-3"
                        >
                          <p className="text-sm font-semibold text-silver">{primary}</p>
                          <p className="mt-1 text-sm text-steel">{secondary}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="surface-panel p-4">
                    <p className="text-sm font-semibold text-silver">Route Flow</p>
                    <div className="mt-4 space-y-3">
                      <div className="h-2 rounded-full bg-white/[0.08]">
                        <div className="h-2 w-[72%] rounded-full bg-brand" />
                      </div>
                      <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.18em] text-steel/80">
                        <span>Pickups</span>
                        <span>Deliveries</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="surface-panel p-4">
                    <p className="text-sm font-semibold text-silver">Billing / Invoices</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                      <div className="rounded-2xl border border-white/[0.08] bg-graphite/70 px-4 py-3">
                        <p className="text-2xl font-semibold text-silver">9</p>
                        <p className="mt-1 text-sm text-steel">Ready to invoice</p>
                      </div>
                      <div className="rounded-2xl border border-white/[0.08] bg-graphite/70 px-4 py-3">
                        <p className="text-2xl font-semibold text-silver">3</p>
                        <p className="mt-1 text-sm text-steel">Held for documents</p>
                      </div>
                    </div>
                  </div>

                  <div className="surface-panel p-4">
                    <p className="text-sm font-semibold text-silver">Driver Pay</p>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-2xl border border-white/[0.08] bg-graphite/70 px-4 py-3">
                        <p className="text-2xl font-semibold text-silver">21</p>
                        <p className="mt-1 text-sm text-steel">Statements ready for review</p>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-graphite/70 px-4 py-3">
                        <span className="text-sm text-steel">Approved adjustments</span>
                        <span className="text-sm font-semibold text-silver">5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionIntro
          eyebrow="Platform overview"
          title="A single system for the full freight lifecycle."
          description="FreightAxis gives dispatch, operations, billing, and payroll-facing teams one place to work, so handoffs stay clean and every load is easier to manage from start to finish."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {platformModules.map((module) => (
            <article key={module.slug} className="surface-card p-6">
              <div className="mb-5 h-px w-12 bg-brand/50" />
              <p className="text-sm font-semibold text-brand">{module.label}</p>
              <p className="mt-3 text-lg font-semibold text-silver">{module.title}</p>
              <p className="mt-3 text-sm leading-7 text-steel">{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-16">
        <SectionIntro
          eyebrow="Core workflows"
          title="Purpose-built sections for dispatch, drivers, invoicing, pay statements, and customer management."
          description="Each workflow is designed to stand on its own while still contributing to one shared operational record."
        />

        {platformModules.map((module, index) => (
          <div
            key={module.slug}
            id={module.slug}
            className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
          >
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <span className="eyebrow">{module.label}</span>
              <h3 className="mt-5 text-balance text-3xl font-semibold text-silver sm:text-4xl">
                {module.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel sm:text-lg">
                {module.description}
              </p>
              <ul className="mt-6 space-y-3">
                {module.points.map((point) => (
                  <li
                    key={point}
                    className="surface-panel px-4 py-4 text-sm text-steel"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className={index % 2 === 0 ? "" : "lg:order-1"}>
              <ModulePreview
                previewTitle={module.previewTitle}
                metrics={module.metrics}
                rows={module.rows}
                footer={module.footer}
              />
            </div>
          </div>
        ))}
      </section>

      <section className="section-shell">
        <div className="surface-card tech-mesh overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow">Why FreightAxis</span>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-silver sm:text-4xl">
                Replace spreadsheet sprawl with one operating model your whole team can trust.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel sm:text-lg">
                Use FreightAxis to bring dispatch, drivers, invoicing, pay statements, and
                customer records into a single workflow that is easier to scale and safer to
                manage in production.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="/features" className={ghostButtonClass}>
                Explore features
              </Link>
              <Link href="/contact" className={primaryButtonClass}>
                Start a rollout conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
