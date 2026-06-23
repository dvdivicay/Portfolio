// Base path the site is served from (e.g. "/Portfolio" on GitHub Pages).
// next/image and next/link apply this automatically, but plain <img>,
// <a href> to /public assets, and the favicon need it prefixed manually.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public asset path with the deployment base path. */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
