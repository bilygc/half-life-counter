/**
 * Modifies an image URL to include width, height and fit=crop parameters.
 * @param url The original image URL
 * @param w Width in pixels
 * @param h Height in pixels
 * @returns The modified URL with w, h, and fit=crop parameters
 */
export function getOptimizedImageUrl(
  url: string | null,
  w: number,
  h: number,
): string {
  if (!url) return "";

  try {
    const u = new URL(url);
    u.searchParams.set("w", w.toString());
    u.searchParams.set("h", h.toString());
    u.searchParams.set("fit", "crop");
    return u.toString();
  } catch (e) {
    // If it's a relative path or invalid URL, append parameters manually
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}w=${w}&h=${h}&fit=crop`;
  }
}
