import type { LatLngBoundsLiteral } from "leaflet";
import { FilteredCordinates, SurfaceFeature, WorkSurface } from "../interfaces";

export function hasFeature(
  features: SurfaceFeature[],
  feature: SurfaceFeature
): boolean {
  return features.some(
    ({ id, parentId }) => id === feature.id && parentId === feature.parentId
  );
}

export function getFilteredCoordinates(
  workSurfaces: WorkSurface[],
  removedFeatures: SurfaceFeature[]
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
