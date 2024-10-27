import type { LatLngTuple } from 'leaflet';
import { RootState } from './store';

export const rightPanelSelector = (app: RootState) => app.panel.rightPanelOpen;

export const workSurfacesSelector = (app: RootState) => app.workSurface.workSurfaces;

export const centerPositionSelector = (app: RootState) => {
  return <LatLngTuple | undefined>(
    app.workSurface.workSurfaces.flatMap(({ features }) =>
      features.map(({ geometry }) => geometry.coordinates?.[0]),
    )[0]?.[0]
  );
};

export const removedFeatureSelector = (app: RootState) => app.workSurface.removedFeatures;

export const selectedFeatureSelector = (app: RootState) => app.workSurface.selectedFeature;

export const featureCoordinatesSelector = (app: RootState) => app.workSurface.selectedFeature?.geometry.coordinates[0];
