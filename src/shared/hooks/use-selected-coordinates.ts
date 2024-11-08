import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayedPolygon } from '../states/saved-geometry.slice';
import { getFilteredCoordinates, intersectHelper, unionHelper } from '../utils';
import { removedFeatureSelector, workSurfacesSelector, polygoneModeSelector } from '../states/selectors';
import { Coordinates } from '../interfaces';

export function useSelectedCoordinates() {
  const dispatch = useDispatch();
  const workSurfaces = useSelector(workSurfacesSelector);
  const removedFeature = useSelector(removedFeatureSelector);
  const polygoneMode = useSelector(polygoneModeSelector);
  const [geometryList, setGeometryList] = useState<Coordinates[][]>([]);

  useEffect(() => {
    const filteredCoords = getFilteredCoordinates(workSurfaces, removedFeature);
    if (!polygoneMode) return setGeometryList(filteredCoords.map((coords) => coords[0]));

    const geometryList = polygoneMode === 'union' ? unionHelper(filteredCoords) : intersectHelper(filteredCoords);
    setGeometryList(geometryList);
    dispatch(setDisplayedPolygon(geometryList));
  }, [workSurfaces, removedFeature, setGeometryList, polygoneMode, dispatch]);

  return geometryList;
}
