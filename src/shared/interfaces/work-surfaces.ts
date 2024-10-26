import type { LatLngBoundsLiteral } from "leaflet";

export interface WorkSurfaceResponse {
  type: string;
  features: SurfaceFeatureResponse[];
}

export interface WorkSurface {
  type: string;
  features: SurfaceFeature[];
}

export interface SurfaceFeatureResponse {
  type: string;
  properties: Record<string, string>;
  geometry: SurfaceGeometry;
}

export interface SurfaceFeature {
  type: string;
  id: number;
  parentId: number;
  properties: Record<string, string>;
  geometry: SurfaceGeometry;
}

export interface SurfaceGeometry {
  type: string;
  color: string;
  coordinates: coordinates[][];
}

export type coordinates = [number, number];

export interface FilteredCordinates {
  coordinates: LatLngBoundsLiteral;
  color: string;
}
