import { SurfaceFeature } from '../../../interfaces';

export const FEATURE_1_MOCK: SurfaceFeature = {
  type: 'Feature 1',
  id: 1,
  parentId: 1,

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
