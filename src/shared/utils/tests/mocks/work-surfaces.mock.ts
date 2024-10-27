import { WorkSurface } from '../../../interfaces';
import { FEATURE_1_MOCK, FEATURE_2_MOCK } from './features.mock';

export const WORK_SURFACES_MOCK: WorkSurface[] = [
  {
    type: 'Work Surface 1',
    features: [FEATURE_1_MOCK],
  },
  {
    type: 'Work Surface 2',
    features: [FEATURE_2_MOCK],
  },
] as const;
