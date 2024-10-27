import { useEffect } from 'react';
import { Chip, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring, useSpringRef, useTransition } from '@react-spring/web';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { closeRightPanel } from '@states/panel.slice';
import { featureCoordinatesSelector, selectedFeatureSelector, rightPanelSelector } from '@states/selectors';
import styles from './right-panel.module.scss';

export function RightPanel() {
  const dispatch = useDispatch();
  const rightPanel = useSelector(rightPanelSelector);
  const cordinates = useSelector(featureCoordinatesSelector);
  const selectedFeature = useSelector(selectedFeatureSelector);
  const featureTitle = `${selectedFeature?.type} - ${selectedFeature?.id}`;
  const properties = selectedFeature?.properties || {};
  const propertyKeys = Object.keys(properties);

  const sidePanelAnimate = useSpring({
    keys: null,
    right: rightPanel ? 16 : -400,
  });

  const transRef = useSpringRef();
  const transitions = useTransition(cordinates?.length, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transition: 'opacity 60ms ease' },
    enter: { opacity: 1 },
  });

  useEffect(() => {
    transRef.start();
  }, [cordinates?.length, transRef]);

  return (
    <animated.aside style={sidePanelAnimate} className={styles['right-panel']}>
      <div className={styles['right-panel__header']}>
        <h3>{featureTitle}</h3>

        <IconButton aria-label="close" color="warning" onClick={() => dispatch(closeRightPanel())}>
          <CloseIcon className={styles['right-panel__header-icon']} />
        </IconButton>
      </div>

      {transitions((style) => (
        <animated.div className={styles['right-panel__body']} style={style}>
          <div className={styles['right-panel__coordinates']}>
            <h4>Coordinates</h4>

            <div className={styles['right-panel__coordinate-list']}>
              {cordinates?.map((cord, i) => (
                <Chip
                  key={i}
                  label={`${cord[0]}, ${cord[1]}`}
                  color="warning"
                  variant="outlined"
                  icon={<LocationOnIcon className={styles['right-panel__coordinate-icon']} fontSize="small" />}
                />
              ))}
            </div>
          </div>

          <div className={styles['right-panel__properties']}>
            <h4>Properties</h4>

            {propertyKeys.length ? (
              propertyKeys.map((key, i) => (
                <div className={styles['right-panel__properties-list']} key={i}>
                  <div key={key} className={styles['right-panel__properties-row']}>
                    <span className={styles['right-panel__properties-key']}>{key}</span>
                    <span>:</span>
                    <span className={styles['right-panel__properties-value']}>{properties[key]}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles['right-panel__empty-value']}>No properties available</p>
            )}
          </div>
        </animated.div>
      ))}
    </animated.aside>
  );
}
