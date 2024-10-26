import { SurfaceFeature } from "../interfaces";

export const hasFeature = (
  features: SurfaceFeature[],
  feature: SurfaceFeature
): boolean => {
  return features.some(
    ({ id, parentId }) => id === feature.id && parentId === feature.parentId
  );
};
