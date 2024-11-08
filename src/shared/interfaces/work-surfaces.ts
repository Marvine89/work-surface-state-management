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
  coordinates: Coordinates[][];
}

export type Coordinates = [number, number];

export type PolygoneMode = 'intersection' | 'union';

export interface SavedPolygonState {
  name: string;
  coord: Coordinates[][];
  description?: string;
}
