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

export const polygoneModeSelector = (app: RootState) => app.saveGeometry.polygoneMode;
export const displayedPolygonSelector = (app: RootState) => app.saveGeometry.displayedPolygon;
export const selectedPolygonSelector = (app: RootState) => app.saveGeometry.selectedPolygon;
export const savedPolygonesSelector = (app: RootState) => app.saveGeometry.savedPolygones;
export const isUnionPolygonSelector = (app: RootState) => app.saveGeometry.polygoneMode === 'union';
export const isIntersectionPolygonSelector = (app: RootState) => app.saveGeometry.polygoneMode === 'intersection';
