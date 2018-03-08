export function makeUrl(domain, path) {
  if (typeof window === 'undefined') {
    // server-side rendering
    return `${domain}/${path}`;
  }
  return `/api/${path}`;
}
