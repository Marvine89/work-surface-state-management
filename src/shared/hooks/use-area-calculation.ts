import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedPolygonSelector } from '../states/selectors';
import { areaCalculation } from '../utils';

export function useAreaCalculation() {
  const selectedPolygon = useSelector(selectedPolygonSelector);
  const [area, setArea] = useState<string>('0.0 m²');

  useEffect(() => {
    if (!selectedPolygon) return setArea('0.0 m²');

    const area = new Intl.NumberFormat('en', { notation: 'compact' }).format(areaCalculation(selectedPolygon.coord));
    setArea(`${area}m²`);
  }, [selectedPolygon]);

  return area;
}
