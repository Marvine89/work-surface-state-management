import { SurfaceFeature, WorkSurface } from '../interfaces';
import { hasFeature } from './has-feature';

export function getFilteredCoordinates(workSurfaces: WorkSurface[], removedFeatures: SurfaceFeature[]) {
  return workSurfaces.flatMap(({ features }) => {
    return features
      .filter((feature) => {
        return !hasFeature(removedFeatures, feature);
      })
      .map(({ geometry }) => geometry.coordinates);
  });
}
