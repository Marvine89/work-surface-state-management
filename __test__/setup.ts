// vi.mock('react-redux', () => ({
//   useDispatch: vi.fn(),
//   useSelector: vi.fn(),
// }));

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn().mockReturnValue({ data: null, isLoading: false, error: null }),
}));
