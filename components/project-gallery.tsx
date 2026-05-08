"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { withBasePath } from "@/lib/site-paths";
import type { ProjectMedia } from "@/types/portfolio";

type ProjectGalleryProps = {
  items: ProjectMedia[];
  title: string;
  palette: [string, string];
};

export function ProjectGallery({ items, title, palette }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? current : (current + 1) % items.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + items.length) % items.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [activeIndex]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[1.6rem] text-left transition hover:-translate-y-0.5"
          >
            <GalleryMedia
              item={item}
              title={title}
              palette={palette}
              className="h-full"
              fit="cover"
            />
          </button>
        ))}
      </div>

      {isMounted && activeItem
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020611]/80 p-4 backdrop-blur-xl sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`Galeria do projeto ${title}`}
            >
              <button
                type="button"
                aria-label="Fechar galeria"
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
              >
                ✕
              </button>

              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Imagem anterior"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === null ? current : (current - 1 + items.length) % items.length,
                      )
                    }
                    className="absolute left-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:flex"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Próxima imagem"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === null ? current : (current + 1) % items.length,
                      )
                    }
                    className="absolute right-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:flex"
                  >
                    →
                  </button>

                  <div
                    className="absolute left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 sm:hidden"
                    style={{ bottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
                  >
                    <button
                      type="button"
                      aria-label="Imagem anterior"
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === null ? current : (current - 1 + items.length) % items.length,
                        )
                      }
                      className="flex h-12 min-w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-2xl text-white transition hover:bg-white/20"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      aria-label="Próxima imagem"
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === null ? current : (current + 1) % items.length,
                        )
                      }
                      className="flex h-12 min-w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-2xl text-white transition hover:bg-white/20"
                    >
                      →
                    </button>
                  </div>
                </>
              ) : null}

              <div className="relative w-full max-w-6xl overflow-hidden rounded-[1.6rem]">
                <div className="relative h-[min(68vh,30rem)] w-full overflow-hidden rounded-[1.6rem] sm:h-[min(82vh,48rem)]">
                  <GalleryMedia item={activeItem} title={title} palette={palette} fit="contain" />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

type GalleryMediaProps = {
  item: ProjectMedia;
  title: string;
  palette: [string, string];
  className?: string;
  fit?: "cover" | "contain";
};

function GalleryMedia({ item, title, palette, className, fit = "cover" }: GalleryMediaProps) {
  const mediaClassName = `relative h-full w-full ${className ?? ""}`.trim();

  if (item.src) {
    return (
      <div className={mediaClassName}>
        <Image
          src={withBasePath(item.src)}
          alt={item.alt ?? `${title} - ${item.label}`}
          fill
          className={fit === "contain" ? "object-contain" : "object-cover"}
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-[18rem] items-center justify-center overflow-hidden ${mediaClassName}`}
      style={
        {
          "--start": palette[0],
          "--end": palette[1],
          background:
            "linear-gradient(135deg, var(--start), var(--end)), radial-gradient(circle at top right, rgba(255,255,255,0.28), transparent 34%)",
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%)]" />
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
        {item.label}
      </div>
    </div>
  );
}
