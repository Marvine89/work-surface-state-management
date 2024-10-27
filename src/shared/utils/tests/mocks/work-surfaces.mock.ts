import { WorkSurface } from '../../../interfaces';

export const WORK_SURFACES: WorkSurface[] = [
  {
    type: 'Work Surface 1',
    features: [
      {
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
      },
    ],
  },
  {
    type: 'Work Surface 2',
    features: [
      {
        type: 'Feature 1',
        id: 1,
        parentId: 2,
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
      },
    ],
  },
];
