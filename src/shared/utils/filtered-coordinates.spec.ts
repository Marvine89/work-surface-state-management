import { getFilteredCoordinates } from './filtered-coordinates';
import { WORK_SURFACES_MOCK, FEATURE_1_MOCK, FEATURE_2_MOCK } from './tests/mocks';

describe('filteredCoordinates', () => {
  it('should return correct result', () => {
    const result = getFilteredCoordinates(WORK_SURFACES_MOCK, [FEATURE_1_MOCK]);
    expect(result).toEqual([FEATURE_2_MOCK.geometry.coordinates]);
  });
});
