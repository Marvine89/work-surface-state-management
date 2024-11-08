import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import { centerPositionSelector } from '@states/selectors';
import { useSelectedCoordinates } from '@/shared/hooks';
import styles from './maps-block.module.scss';
import { Maps } from '../maps/maps';

export function MapsBlock() {
  const position = useSelector(centerPositionSelector);
  const geometryList = useSelectedCoordinates();

  return (
    <>
      <section className={styles['map-block']}>
        <Maps position={position} geometryList={geometryList} />
      </section>
    </>
  );
}
