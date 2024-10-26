import { setupWorker } from "msw/browser";

export async function initMockAPI() {
  const { handlers } = await import("./handlers");
  const worker = setupWorker(...handlers);
  return worker.start({ onUnhandledRequest: "bypass" });
}
