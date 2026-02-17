"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SECTIONS } from "@/lib/sections";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export default function IndexNav() {
  const [active, setActive] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const ids = SECTIONS.map((s) => s.id);


  useEffect(() => {
    const rootEl = document.getElementById("scroll-root");
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const visible = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target, entry.intersectionRatio);

        let bestIndex = 0;
        let bestRatio = 0;

        els.forEach((el, i) => {
          const ratio = visible.get(el) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = i;
          }
        });

        setActive(bestIndex);
      },
      {
        root: rootEl ?? null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  // Progress within active section
  useEffect(() => {
    const rootEl = document.getElementById("scroll-root");
    const getViewportH = () => (rootEl ? rootEl.clientHeight : window.innerHeight);

    const calc = () => {
      const id = ids[active];
      const el = document.getElementById(id);
      if (!el) return;

      const vh = getViewportH();

      let top = 0;
      let height = el.offsetHeight || 1;

      if (rootEl) {
        top = el.offsetTop - rootEl.scrollTop;
      } else {
        const rect = el.getBoundingClientRect();
        top = rect.top;
        height = rect.height || 1;
      }

      const raw = (vh - top) / height;
      setSectionProgress(clamp01(raw));
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calc);
    };

    if (rootEl) rootEl.addEventListener("scroll", onScroll, { passive: true });
    else window.addEventListener("scroll", onScroll, { passive: true });

    window.addEventListener("resize", onScroll, { passive: true });

    onScroll();

    return () => {
      if (rootEl) rootEl.removeEventListener("scroll", onScroll);
      else window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, ids]);

  const scrollTo = (id: string) => {
    const rootEl = document.getElementById("scroll-root");
    const el = document.getElementById(id);
    if (!el) return;

    if (rootEl) {
      rootEl.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const overallProgress =
    SECTIONS.length <= 1
      ? 0
      : clamp01((active + sectionProgress) / (SECTIONS.length - 1));

  return (
    <>

      <nav className="fixed left-6 bottom-6 z-50 select-none hidden md:flex items-end gap-4">

        <div className="relative h-28 w-[2px] bg-border/60 overflow-hidden rounded-full">
          <div
            className="absolute left-0 bottom-0 w-full bg-text/70 transition-[height] duration-150 ease-out"
            style={{ height: `${Math.round(overallProgress * 100)}%` }}
          />
        </div>

        <ul className="space-y-1">
          {SECTIONS.map((s, i) => {
            const isActive = i === active;

            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={[
                    "group flex items-center gap-2 text-left w-full cursor-pointer",
                    "transition-all duration-200",
                    isActive ? "opacity-100" : "opacity-55 hover:opacity-85",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "tabular-nums tracking-[0.2em] font-heading",
                      isActive ? "text-text text-base" : "text-text/70 text-xs",
                    ].join(" ")}
                  >
                    {pad2(i)}.
                  </span>

                  <span
                    className={[
                      "tracking-[0.18em] uppercase font-body",
                      isActive ? "text-text text-sm" : "text-text/60 text-xs",
                    ].join(" ")}
                  >
                    {s.label}
                  </span>

                  <span
                    className={[
                      "ml-2 relative h-[2px] w-16 overflow-hidden rounded-full bg-border/60",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <span
                      className="absolute left-0 top-0 h-full bg-text/80 transition-[width] duration-150 ease-out"
                      style={{
                        width: isActive ? `${Math.round(sectionProgress * 100)}%` : "0%",
                      }}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav
        className="fixed left-1/2 bottom-4 -translate-x-1/2 z-50 md:hidden"
        aria-label="Section navigation"
      >
        <div className="flex items-center gap-1 rounded-full border border-border/70 bg-background/70 backdrop-blur px-2 py-1 shadow-sm">
          {SECTIONS.map((s, i) => {
            const isActive = i === active;

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                className={[
                  "relative rounded-full px-3 py-2",
                  "transition-all duration-200",
                  isActive ? "text-text" : "text-text/60",
                ].join(" ")}
              >
                <span className="font-heading tabular-nums text-xs tracking-[0.18em]">
                  {pad2(i)}
                </span>

                <span
                  className={[
                    "absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-10 rounded-full overflow-hidden bg-border/70",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <span
                    className="absolute left-0 top-0 h-full bg-text/80 transition-[width] duration-150 ease-out"
                    style={{
                      width: isActive ? `${Math.round(sectionProgress * 100)}%` : "0%",
                    }}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
