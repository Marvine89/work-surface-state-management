import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { displayedPolygonSelector, savedPolygonesSelector } from '../states/selectors';

export function useDisplayPolygonExist() {
  const displayedPolygon = useSelector(displayedPolygonSelector);
  const savedPolygones = useSelector(savedPolygonesSelector);
  const [polygonExist, setPolygonExist] = useState<boolean>(false);

  useEffect(() => {
    if (!displayedPolygon) return setPolygonExist(false);

    const exist = savedPolygones.some(({ coord }) => JSON.stringify(coord) === JSON.stringify(displayedPolygon));
    setPolygonExist(exist);
  }, [displayedPolygon, savedPolygones]);

  return polygonExist;
}
