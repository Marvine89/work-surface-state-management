import { useQuery } from "@tanstack/react-query";
import { WorkSurface, WorkSurfaceResponse } from "../interfaces";
import { API_QUERIES, CACHE_TIMEOUT, MAP_COLORS } from "../utils";
import { httpClient } from "./http-client";

function fetchWorkSurface() {
  return httpClient
    .get("work-surfaces")
    .json<WorkSurfaceResponse[]>()
    .then((data) => addFeaturesIds(data));
}

function addFeaturesIds(workSurfaces: WorkSurfaceResponse[]): WorkSurface[] {
  let colorId = 0;

  return workSurfaces.map((workSurface, parentId) => {
    return {
      ...workSurface,
      features: workSurface.features.map((feature, id) => {
        return {
          id: id + 1,
          parentId,
          ...feature,
          geometry: {
            ...feature.geometry,
            color: MAP_COLORS[colorId++] ?? "#000000",
          },
        };
      }),
    };
  });
}

export const useFetchWorkSurfaceQuery = () => {
  return useQuery({
    queryKey: [API_QUERIES.WORK_SURFACES],
    queryFn: fetchWorkSurface,
    gcTime: CACHE_TIMEOUT,
  });
};
