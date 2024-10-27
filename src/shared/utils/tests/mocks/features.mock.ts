import { SurfaceFeature } from '../../../interfaces';

export const FEATURE_1_MOCK: SurfaceFeature = {
  type: 'Feature 1',
  id: 1,
  parentId: 1,
  properties: { name: 'Feature 1', description: 'Feature 1 description' },
  geometry: {
    type: 'Polygon',
    color: 'red',
    coordinates: [
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
    ],
  },
} as const;

export const FEATURE_2_MOCK: SurfaceFeature = {
  type: 'Feature 2',
  id: 1,
  parentId: 2,
  properties: { name: 'Feature 2', description: 'Feature 2 description' },
  geometry: {
    type: 'Polygon',
    color: 'red',
    coordinates: [
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
    ],
  },
} as const;
