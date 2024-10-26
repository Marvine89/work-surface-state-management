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
  },
});

export const { setSurfaces, setSelectedFeature } = workSurfaceSlice.actions;
export default workSurfaceSlice.reducer;
