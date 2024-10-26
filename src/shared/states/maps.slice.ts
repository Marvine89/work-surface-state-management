import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SurfaceFeature } from "../interfaces";
import { hasFeature } from "../utils";

export interface MapState {
  removedFeatures: SurfaceFeature[];
}

const initialState: MapState = {
  removedFeatures: [],
};

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    setFilterFeatures: (state, action: PayloadAction<SurfaceFeature>) => {
      const payload = action.payload;

      if (hasFeature(state.removedFeatures, action.payload)) {
        state.removedFeatures = state.removedFeatures.filter(
          ({ id, parentId }) =>
            !(id === payload.id && parentId === payload.parentId)
        );
        return;
      }

      state.removedFeatures = [...state.removedFeatures, payload];
    },
  },
});

export const { setFilterFeatures } = mapSlice.actions;
export default mapSlice.reducer;
