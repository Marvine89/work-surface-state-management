import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SurfaceFeature, WorkSurface } from "../interfaces";

export interface WorkSurfaceState {
  workSurfaces: WorkSurface[];
  selectedFeature: SurfaceFeature | null;
}

const initialState: WorkSurfaceState = {
  workSurfaces: [],
  selectedFeature: null,
};

export const workSurfaceSlice = createSlice({
  name: "work-surface",
  initialState,
  reducers: {
    setSurfaces: (state, action: PayloadAction<WorkSurface[]>) => {
      state.workSurfaces = [...action.payload];
    },
    setSelectedFeature: (state, action: PayloadAction<SurfaceFeature>) => {
      state.selectedFeature = action.payload;
    },
    clearFeatureSelection: (state) => {
      state.selectedFeature = null;
    },
  },
});

export const { setSurfaces, setSelectedFeature, clearFeatureSelection } = workSurfaceSlice.actions;
export default workSurfaceSlice.reducer;
