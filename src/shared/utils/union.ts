import { Coordinates } from '../interfaces';
import { featureCollection, polygon } from '@turf/helpers';
import union from '@turf/union';

export const unionHelper = (latlong: Coordinates[][][]) => {
  if (latlong.length === 0) return [];

  const poly = latlong.map((cord) => polygon(cord));

  if (poly.length === 0) return [];
  if (poly.length === 1) return <Coordinates[][]>poly[0].geometry.coordinates;

  const unionObj = union(featureCollection(poly));
  if (!unionObj) return [];

  return <Coordinates[][]>unionObj.geometry.coordinates;
};
