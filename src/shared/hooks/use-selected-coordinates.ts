import { useEffect, useState } from "react";
import { getFilteredCoordinates } from "../utils";
import { useSelector } from "react-redux";
import {
  removedFeatureSelector,
  workSurfacesSelector,
} from "../states/selectors";
import { FilteredCordinates } from "../interfaces";

export function useSelectedCoordinates() {
  const workSurfaces = useSelector(workSurfacesSelector);
  const removedFeature = useSelector(removedFeatureSelector);
  const [geometryList, setGeometryList] = useState<FilteredCordinates[]>([]);

  useEffect(() => {
    const coordinates = getFilteredCoordinates(workSurfaces, removedFeature);
    setGeometryList(coordinates);
  }, [workSurfaces, removedFeature, setGeometryList]);

  return geometryList;
}
