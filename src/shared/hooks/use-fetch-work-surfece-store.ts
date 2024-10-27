import { useDispatch, useSelector } from "react-redux";
import { workSurfacesSelector } from "../states/selectors";
import { useFetchWorkSurfaceQuery } from "../api";
import { useEffect } from "react";
import { setSurfaces } from "../states/work-surface.slice";

export const useFetchWorkSurfaceStore = () => {
  const dispatch = useDispatch();
  const workSurfaces = useSelector(workSurfacesSelector);
  const { isLoading, isError, data } = useFetchWorkSurfaceQuery();

  useEffect(() => {
    if (data) dispatch(setSurfaces(data));
  }, [data, dispatch]);

  return { isLoading, isError, data: workSurfaces };
};
