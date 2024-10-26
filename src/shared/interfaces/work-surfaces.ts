export interface WorkSurface {
  type: string;
  features: SurfaceFeature[];
}

export interface SurfaceFeature {
  type: string;
  properties: Record<string, string>;
  geometry: SurfaceGeometry;
}

export interface SurfaceGeometry {
  type: string;
  coordinates: coordinates[][];
}

export type coordinates = [number, number];
