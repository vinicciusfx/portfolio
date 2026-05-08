"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profileLinks } from "@/lib/portfolio-data";
import { withBasePath } from "@/lib/site-paths";

const navItems = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-[rgba(244,246,253,0.72)] backdrop-blur-2xl dark:bg-[rgba(7,17,31,0.68)]">
      <div className="shell flex min-h-[5.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-line bg-black shadow-[0_10px_30px_rgba(8,17,31,0.12)]">
            <Image
              src={withBasePath("/brand/pedro-vinicius-mark.png")}
              alt="Logo de Pedro Vinicius"
              fill
              priority
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-semibold text-ink sm:text-lg">Pedro Vinicius</div>
            <div className="truncate text-xs uppercase tracking-[0.18em] text-muted">
              Game Programmer
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-muted transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white/75 px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 dark:bg-white/5"
          >
            GitHub
          </a>
          <a
            href={withBasePath(profileLinks.cv)}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            CV / Resume
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Abrir menu"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/70 text-ink transition hover:[border-color:var(--color-accent)] dark:bg-white/5 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="shell pb-4 lg:hidden">
          <div className="surface-card-strong flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:bg-accentSoft hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:bg-accentSoft hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={withBasePath(profileLinks.cv)}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white"
            >
              CV / Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
