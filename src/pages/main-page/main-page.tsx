import "./main-page.scss";
import { LeftPanel, Maps, RightPanel } from "../../shared/components";

export function MainPage() {
  return (
    <section className="app">
      <LeftPanel />
      <Maps />
      <RightPanel />
    </section>
  );
}
