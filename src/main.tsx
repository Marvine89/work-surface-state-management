import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { AppStore } from "@states/store";

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

const queryClient = new QueryClient();

function renderApp() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={AppStore}>
          <MainPage />
        </Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}
