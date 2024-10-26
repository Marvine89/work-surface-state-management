import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {  WorkSurface } from "../interfaces";

export interface WorkSurfaceState {
  workSurfaces: WorkSurface[];
}

const initialState: WorkSurfaceState = {
  workSurfaces: [],
};

export const workSurfaceSlice = createSlice({
  name: "work-surface",
  initialState,
  reducers: {
    setSurfaces: (state, action: PayloadAction<WorkSurface[]>) => {
      state.workSurfaces = [...action.payload];
    },
  },
});

export const { setSurfaces } = workSurfaceSlice.actions;
export default workSurfaceSlice.reducer;
