import { socialLinks } from "@/lib/portfolio-data";
import { SocialIcon } from "@/components/social-icon";

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  id?: string;
};

export function ContactSection({ eyebrow, title, description, id }: ContactSectionProps) {
  const visibleLinks = socialLinks.filter((item) => item.label === "LinkedIn");

  return (
    <section id={id} className="section-anchor shell py-12 sm:py-16 lg:py-20">
      <div className="surface-card-strong p-8 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 text-balance text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:max-w-sm">
          {visibleLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group rounded-[1.7rem] border border-line bg-white/65 p-5 transition hover:-translate-y-1 hover:[border-color:var(--color-accent)] dark:bg-white/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accentSoft text-accent">
                  <SocialIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <span className="text-lg text-accent transition group-hover:translate-x-0.5">↗</span>
              </div>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </div>
                <div className="mt-2 text-xl font-semibold text-ink">{item.platform}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
