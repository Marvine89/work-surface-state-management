import { polygon } from '@turf/helpers';
import { area } from '@turf/area';
import { Coordinates } from '../interfaces';

export const areaCalculation = (coor: Coordinates[][]): number => {
  const poly = polygon(coor);
  return area(poly) || 0;
};
