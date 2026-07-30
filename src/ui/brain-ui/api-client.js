const configuredApiBase = new URLSearchParams(window.location.search)
  .get("apiBase")
  ?.trim()
  .replace(/\/+$/, "");

export const API = configuredApiBase || (/^https?:$/.test(window.location?.protocol || "")
  ? window.location.origin
  : "http://localhost:3721");

export function apiUrl(path) {
  return `${API}${path}`;
}
