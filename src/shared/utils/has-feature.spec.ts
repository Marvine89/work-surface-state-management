import { hasFeature } from './has-feature';
import { FEATURE_1_MOCK, FEATURE_2_MOCK } from './tests/mocks';

describe('hasFeature', () => {
  it('should be truthy when feature is found', () => {
    const result = hasFeature([FEATURE_1_MOCK], FEATURE_1_MOCK);
    expect(result).toBeTruthy();
  });

  it('should be falsy when feature is not found', () => {
    const result = hasFeature([FEATURE_2_MOCK], FEATURE_1_MOCK);
    expect(result).toBeFalsy();
  });
});
