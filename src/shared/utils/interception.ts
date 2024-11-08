import { intersect } from '@turf/intersect';
import { Coordinates } from '../interfaces';
import { featureCollection, polygon } from '@turf/helpers';

export const intersectHelper = (latlong: Coordinates[][][]) => {
  if (latlong.length === 0) return [];

  const poly = latlong.map((cord) => polygon(cord));

  if (poly.length === 0) return [];
  if (poly.length === 1) return <Coordinates[][]>poly[0].geometry.coordinates;

  const intersectObj = intersect(featureCollection(poly));
  if (!intersectObj) return [];

  return <Coordinates[][]>intersectObj.geometry.coordinates;
};
