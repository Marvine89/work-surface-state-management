import { Button, ButtonGroup, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import { switchMode, savePolygon } from '@states/saved-geometry.slice';
import {
  displayedPolygonSelector,
  isIntersectionPolygonSelector,
  isUnionPolygonSelector,
  polygoneModeSelector,
} from '@states/selectors';
import { PolygoneMode } from '@/shared/interfaces';
import { useDisplayPolygonExist } from '@/shared/hooks';
import styles from './geometry-toggle.module.scss';

export function GeometryToggle() {
  const dispatch = useDispatch();
  const polygoneMode = useSelector(polygoneModeSelector);
  const isUnionPolygon = useSelector(isUnionPolygonSelector);
  const isIntersectionPolygon = useSelector(isIntersectionPolygonSelector);
  const displayedPolygon = useSelector(displayedPolygonSelector);
  const polygonExist = useDisplayPolygonExist();
  const isBtnDisabled = polygonExist || !polygoneMode;

  const toggleGeometryMode = (mode: PolygoneMode | null) => {
    dispatch(switchMode(mode));
  };

  const onSave = () => {
    if (!polygoneMode) return;
    dispatch(savePolygon({ coord: displayedPolygon }));
  };

  return (
    <div className={styles['geomerty-toggle']}>
      <ButtonGroup variant="outlined">
        <Tooltip title="Reset view" placement="bottom">
          <Button onClick={() => toggleGeometryMode(null)} className={!polygoneMode ? styles['active'] : ''}>
            All
          </Button>
        </Tooltip>

        <Tooltip title="Switch to union view" placement="bottom">
          <Button onClick={() => toggleGeometryMode('union')} className={isUnionPolygon ? styles['active'] : ''}>
            Union
          </Button>
        </Tooltip>

        <Tooltip title="Switch to interception view" placement="bottom">
          <Button
            onClick={() => toggleGeometryMode('intersection')}
            className={isIntersectionPolygon ? styles['active'] : ''}
          >
            Interception
          </Button>
        </Tooltip>
      </ButtonGroup>

      <Button variant="contained" onClick={onSave} disabled={isBtnDisabled}>
        <Tooltip title="Save Polygon" placement="bottom">
          <SaveIcon className={styles['save-icon']} />
        </Tooltip>
      </Button>
    </div>
  );
}
