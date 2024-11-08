import { GeometryToggle, LeftPanel, MapsBlock, RightPanel } from '@shared/components';
import styles from './main-page.module.scss';

export function MainPage() {
  return (
    <section className={styles.app}>
      <LeftPanel />
      <MapsBlock />
      <GeometryToggle />
      <RightPanel />
    </section>
  );
}
