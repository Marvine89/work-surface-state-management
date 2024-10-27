import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SurfaceFeature, WorkSurface } from "../interfaces";
import { hasFeature } from "../utils";

export interface WorkSurfaceState {
  workSurfaces: WorkSurface[];
  removedFeatures: SurfaceFeature[];
  selectedFeature: SurfaceFeature | null;
}

const initialState: WorkSurfaceState = {
  workSurfaces: [],
  removedFeatures: [],
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
      state.selectedFeature = { ...action.payload };
    },
    setFilterFeatures: (state, action: PayloadAction<SurfaceFeature>) => {
      const payload = action.payload;

      if (hasFeature(state.removedFeatures, action.payload)) {
        state.removedFeatures = state.removedFeatures.filter(
          ({ id, parentId }) => {
            return !(id === payload.id && parentId === payload.parentId);
          }
        );
        return;
      }

      state.removedFeatures = [...state.removedFeatures, { ...payload }];
    },
    updateFeature: (state, action: PayloadAction<SurfaceFeature>) => {
      const payload = action.payload;

      state.workSurfaces.forEach((surface) => {
        surface.features.forEach((f) => {
          if (f.id === payload.id && f.parentId === payload.parentId) {
            Object.assign(f, { ...payload });
          }
        });
      });

      if (
        state.selectedFeature?.id === payload.id &&
        state.selectedFeature?.parentId === payload.parentId
      ) {
        state.selectedFeature = { ...payload };
      }
    },
  },
});

export const {
  setSurfaces,
  setSelectedFeature,
  setFilterFeatures,
  updateFeature,
} = workSurfaceSlice.actions;

export default workSurfaceSlice.reducer;
