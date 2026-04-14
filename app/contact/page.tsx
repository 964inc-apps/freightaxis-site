import Link from "next/link";

import {
  contactChannels,
  contactChecklist,
  contactPhoneDisplay,
  contactPhoneE164,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact FreightAxis for a rollout discussion covering dispatch, driver workflow, invoicing, customer management, and pay statements.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-6 sm:pt-10">
        <div className="surface-card tech-mesh overflow-hidden p-8 sm:p-10 lg:p-12">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-silver sm:text-5xl">
            Start a FreightAxis rollout conversation with the team that will help you go live.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
            Reach out to scope dispatch, driver workflow, invoicing, pay statements, or the full
            operations stack. We&apos;ll help you map the right starting point.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${contactPhoneE164}`} className={primaryButtonClass}>
              Call sales
            </a>
            <Link href="/pricing" className={secondaryButtonClass}>
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-5 lg:grid-cols-3">
          {contactChannels.map((channel) => (
            <article key={channel.title} className="surface-card p-6">
              <span className="eyebrow">Contact path</span>
              <h2 className="mt-5 text-2xl font-semibold text-silver">{channel.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{channel.description}</p>
              {channel.number ? (
                <p className="mt-5 text-lg font-semibold text-silver">{contactPhoneDisplay}</p>
              ) : null}
              <div className="mt-8 flex flex-col gap-3">
                {channel.actions.map((action, index) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={index === 0 ? primaryButtonClass : secondaryButtonClass}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card overflow-hidden p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <span className="eyebrow">What to send</span>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-silver sm:text-4xl">
                The fastest way to get a useful response is to include a little operational
                context.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel sm:text-lg">
                Send a short overview of your team, the workflows you want to centralize, and the
                timeline you are targeting. That is usually enough to frame the next step.
              </p>
            </div>

            <div className="grid gap-3">
              {contactChecklist.map((item) => (
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

      <section className="section-shell">
        <div className="surface-card tech-mesh overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">Implementation</span>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-silver sm:text-4xl">
                Start with dispatch visibility, then expand into billing and pay when you&apos;re ready.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel sm:text-lg">
                FreightAxis is set up for a phased rollout path, which makes it easier to launch
                quickly and add more workflow depth without rewriting your process from scratch.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={`sms:${contactPhoneE164}`} className={primaryButtonClass}>
                Text sales
              </a>
              <Link href="/features" className={secondaryButtonClass}>
                Review capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
