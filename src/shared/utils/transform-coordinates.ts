import { WorkSurface } from '../interfaces';

export function transformCoordinates(workSurfaces: WorkSurface[]): WorkSurface[] {
  return workSurfaces.map((workSurface) => {
    return {
      ...workSurface,
      features: workSurface.features.map((feature) => {
        return {
          ...feature,
          geometry: {
            ...feature.geometry,
            coordinates: feature.geometry.coordinates.map((coords) => {
              return coords.map(([lng, lat]) => [lat, lng]);
            }),
          },
        };
      }),
    };
  });
}
