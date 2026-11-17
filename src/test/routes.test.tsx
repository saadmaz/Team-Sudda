import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { AppRoutes } from "@/App";
import { ALL_ROUTES } from "@/lib/routes";

const ROUTES = [
  ...ALL_ROUTES,
  "/book?service=deep-cleaning",
  "/business-quote?service=office-cleaning&industry=Schools%20%26%20Institutions",
  "/this-page-does-not-exist",
];

let root: Root | null = null;
let container: HTMLElement;

beforeAll(() => {
  // jsdom does not implement these.
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
  Element.prototype.scrollIntoView = vi.fn();
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
});

afterEach(() => {
  act(() => root?.unmount());
  root = null;
  container?.remove();
});

async function render(path: string) {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  await act(async () => {
    root!.render(
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>,
    );
  });
  // Wait for lazily loaded pages to resolve.
  for (let i = 0; i < 50 && !container.querySelector("h1"); i++) {
    await act(async () => {
      await new Promise((r) => setTimeout(r, 20));
    });
  }
}

describe("every route renders", () => {
  it.each(ROUTES)("%s", async (path) => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    await render(path);
    expect(container.querySelector("h1")?.textContent?.trim()).toBeTruthy();
    expect(container.querySelector("header")).not.toBeNull();
    expect(container.querySelector("footer")).not.toBeNull();
    expect(errors).not.toHaveBeenCalled();
    errors.mockRestore();
  });
});
