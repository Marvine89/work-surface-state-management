import { useQuery } from "@tanstack/react-query";
import { WorkSurface } from "../interfaces";
import { API_QUERIES, CACHE_TIMEOUT } from "../utils";
import { httpClient } from "./http-client";

function fetchWorkSurface() {
  return httpClient.get("work-surfaces").json<WorkSurface[]>();
}

export const useFetchWorkSurfaceQuery = () => {
  return useQuery({
    queryKey: [API_QUERIES.WORK_SURFACES],
    queryFn: fetchWorkSurface,
    gcTime: CACHE_TIMEOUT,
  });
};
