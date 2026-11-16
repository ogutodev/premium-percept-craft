import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

function isPreview(host: string) {
  const h = host.toLowerCase().split(":")[0];
  return h.endsWith(".lovable.app") || h.endsWith(".lovableproject.com");
}

/** True when the page is served from a Lovable preview/staging host (must not be indexed). */
export const isPreviewHost = createIsomorphicFn()
  .server(() => {
    try {
      const req = getRequest();
      const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || new URL(req.url).host;
      return isPreview(host);
    } catch {
      return false;
    }
  })
  .client(() => isPreview(window.location.host));
