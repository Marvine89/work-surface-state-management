import { screen } from '@testing-library/react';
import { LeftPanel } from './left-panel';
import { useFetchWorkSurfaceStore } from '@shared/hooks';
import { WorkSurface } from '@shared/interfaces';
import { PRELOADED_STATES, WORK_SURFACES } from '@tests/mocks';
import { renderWithProviders } from '@tests/render-with-providers';

interface MockUseFetchWorkSurfaceStore {
  isLoading: boolean;
  isError: boolean;
  data: WorkSurface[];
}

const mockUseFetchWorkSurfaceStore: MockUseFetchWorkSurfaceStore = {
  isLoading: false,
  isError: false,
  data: [],
};

vi.mock('@shared/hooks');

describe('left-panel', () => {
  it('should render loading state when API is loading', () => {
    vi.mocked(useFetchWorkSurfaceStore).mockReturnValue({
      ...mockUseFetchWorkSurfaceStore,
      isLoading: true,
    });

    renderWithProviders(<LeftPanel />);
    const panelLoader = screen.getByTestId('loader-block');
    expect(panelLoader).toBeInTheDocument();
  });

  it('should render error state when API has failed', () => {
    vi.mocked(useFetchWorkSurfaceStore).mockReturnValue({
      ...mockUseFetchWorkSurfaceStore,
      isError: true,
    });

    renderWithProviders(<LeftPanel />);
    const panelError = screen.getByTestId('error-block');
    expect(panelError).toBeInTheDocument();
  });

  it('should render proposal block when request is successfull', () => {
    vi.mocked(useFetchWorkSurfaceStore).mockReturnValue({ ...mockUseFetchWorkSurfaceStore, data: WORK_SURFACES });

    renderWithProviders(<LeftPanel />, {
      preloadedState: PRELOADED_STATES,
    });

    const panel = screen.getAllByTestId('proposal-bock');
    expect(panel[0]).toBeInTheDocument();
    expect(panel[1]).toBeInTheDocument();
  });

  it('should render feature names when request is successfull', () => {
    vi.mocked(useFetchWorkSurfaceStore).mockReturnValue({ ...mockUseFetchWorkSurfaceStore, data: WORK_SURFACES });

    renderWithProviders(<LeftPanel />, {
      preloadedState: PRELOADED_STATES,
    });

    const featuresNames = screen.getAllByTestId('feature-name');
    expect(featuresNames).toHaveLength(2);
    expect(featuresNames[0]).toHaveTextContent(WORK_SURFACES[0].features[0].type);
  });
});
