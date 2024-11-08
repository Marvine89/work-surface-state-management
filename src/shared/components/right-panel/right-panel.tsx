import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from '@react-spring/web';
import CloseIcon from '@mui/icons-material/Close';
import { closeRightPanel } from '@states/panel.slice';
import { centerPositionSelector, rightPanelSelector, selectedPolygonSelector } from '@states/selectors';
import styles from './right-panel.module.scss';
import { Maps } from '../maps/maps';
import { PropertyText } from './property-text/property-text';
import { useAreaCalculation } from '@/shared/hooks';

export function RightPanel() {
  const dispatch = useDispatch();
  const rightPanel = useSelector(rightPanelSelector);
  const position = useSelector(centerPositionSelector);
  const selectedPolygon = useSelector(selectedPolygonSelector);
  const polygones = useSelector(selectedPolygonSelector)?.coord || [];
  const areaa = useAreaCalculation();

  const sidePanelAnimate = useSpring({
    keys: null,
    right: rightPanel ? 16 : -400,
  });

  return (
    <animated.aside style={sidePanelAnimate} className={styles['right-panel']}>
      <div className={styles['right-panel__header']}>
        <h3>{selectedPolygon?.name}</h3>
        <IconButton aria-label="close" color="warning" onClick={() => dispatch(closeRightPanel())}>
          <CloseIcon className={styles['right-panel__header-icon']} fontSize="large" />
        </IconButton>
      </div>

      <section className={styles['right-panel__map']}>
        <Maps position={position} geometryList={polygones} zoom={16} />
      </section>

      <div className={styles['right-panel__properties']}>
        <h4>Properties</h4>

        <PropertyText title="Area" value={areaa} />
        <PropertyText title="Description" value={selectedPolygon?.description} />
      </div>
    </animated.aside>
  );
}
