import type { LatLngBoundsLiteral } from 'leaflet';
import { FilteredCordinates, SurfaceFeature, WorkSurface } from '../interfaces';
import { hasFeature } from './has-feature';

export function getFilteredCoordinates(
  workSurfaces: WorkSurface[],
  removedFeatures: SurfaceFeature[],
): FilteredCordinates[] {
  return workSurfaces.flatMap(({ features }) => {
    return features
      .filter((feature) => {
        return !hasFeature(removedFeatures, feature);
      })
      .map(({ geometry }) => ({
        coordinates: <LatLngBoundsLiteral>geometry.coordinates[0],
        color: geometry.color,
      }));
  });
}
