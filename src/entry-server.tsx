import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { ssrHead, type PageHead } from "./hooks/usePageMeta";

export { ALL_ROUTES, routePriority } from "./lib/routes";
export { SITE_URL } from "./hooks/usePageMeta";

/** Renders one route to HTML, waiting for lazy pages to load. */
export function render(url: string): Promise<{ html: string; head: PageHead | null }> {
  ssrHead.current = null;
  ssrHead.collecting = true;
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new PassThrough();
    sink.on("data", (chunk) => (html += chunk));
    sink.on("end", () => {
      ssrHead.collecting = false;
      resolve({ html, head: ssrHead.current });
    });
    sink.on("error", reject);

    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>,
      {
        onAllReady: () => stream.pipe(sink),
        onShellError: reject,
        onError: (err) => reject(err),
      },
    );
  });
}
