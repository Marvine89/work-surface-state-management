import type { LatLngTuple } from 'leaflet';
import { AppState } from './store';

export const rightPanelSelector = (app: AppState) => app.panel.rightPanelOpen;

export const workSurfacesSelector = (app: AppState) => app.workSurface.workSurfaces;

export const centerPositionSelector = (app: AppState) => {
  return <LatLngTuple | undefined>(
    app.workSurface.workSurfaces.flatMap(({ features }) =>
      features.map(({ geometry }) => geometry.coordinates?.[0]),
    )[0]?.[0]
  );
};

export const removedFeatureSelector = (app: AppState) => app.workSurface.removedFeatures;

export const selectedFeatureSelector = (app: AppState) => app.workSurface.selectedFeature;

export const featureCoordinatesSelector = (app: AppState) => app.workSurface.selectedFeature?.geometry.coordinates[0];
