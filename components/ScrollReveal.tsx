"use client";

import { useEffect } from "react";

/**
 * Adds the `.in` class to every `.reveal` element as it enters the viewport,
 * with a small stagger between siblings sharing a parent.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!reveals.length) return;

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []).filter(
            (c) => c.classList.contains("reveal")
          );
          const index = siblings.indexOf(el);
          el.style.setProperty("--d", `${Math.min(index, 6) * 0.08}s`);
          el.classList.add("in");
          obs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
