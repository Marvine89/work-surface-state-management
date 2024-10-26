import type { LatLngTuple } from "leaflet";
import { AppState } from "./store";

export const workSurfacesSelector = (app: AppState) =>
  app.workSurface.workSurfaces;

export const centerPositionSelector = (app: AppState) => {
  return <LatLngTuple | undefined>(
    app.workSurface.workSurfaces.flatMap(({ features }) =>
      features.map(({ geometry }) => geometry.coordinates?.[0])
    )[0]?.[0]
  );
};

export const removedFeatureSelector = (app: AppState) =>
  app.workSurface.removedFeatures;

export const rightPanelSelector = (app: AppState) => app.panel.rightPanelOpen;

export const featureCoordinatesSelector = (app: AppState) =>
  app.workSurface.selectedFeature?.geometry.coordinates[0];

export const featurePropertySelector = (app: AppState) =>
  app.workSurface.selectedFeature?.properties;
