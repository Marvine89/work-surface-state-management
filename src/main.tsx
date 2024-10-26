import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./pages";

async function prepareMock() {
  if (process.env.NODE_ENV !== "development") return;

  const { initMockAPI } = await import("./mocks/server");
  return initMockAPI();
}

prepareMock()
  .then(renderApp)
  .catch((error) => {
    console.error("Failed to initialize the app", error);
  });

function renderApp() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <MainPage />
    </StrictMode>
  );
}
