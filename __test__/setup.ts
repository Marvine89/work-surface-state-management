vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn().mockReturnValue({ data: null, isLoading: false, error: null }),
}));
