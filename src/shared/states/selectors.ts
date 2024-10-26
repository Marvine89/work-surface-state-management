import type { LatLngBoundsLiteral, LatLngTuple } from "leaflet";
import { AppState } from "./store";
import { hasFeature } from "../utils";

export const centerPositionSelector = (app: AppState) => {
  return <LatLngTuple | undefined>(
    app.workSurface.workSurfaces.flatMap(({ features }) =>
      features.map(({ geometry }) => geometry.coordinates?.[0])
    )[0]?.[0]
  );
};

export const removedFeatureSelector = (app: AppState) =>
  app.map.removedFeatures;

export const geometrySelector = (app: AppState) => {
  return app.workSurface.workSurfaces.flatMap(({ features }) => {
    return features
      .filter((feature) => {
        return !hasFeature(app.map.removedFeatures, feature);
      })
      .map(({ geometry }) => ({
        coordinates: <LatLngBoundsLiteral>geometry.coordinates[0],
        color: geometry.color,
      }));
  });
};

export const featureCoordinatesSelector = (app: AppState) =>
  app.workSurface.selectedFeature?.geometry.coordinates[0];

export const featurePropertySelector = (app: AppState) =>
  app.workSurface.selectedFeature?.properties ?? {};
