import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SurfaceFeature } from "../interfaces";

interface Feature extends SurfaceFeature {
  parentName: string;
}

export interface FeatureState {
  feature: Feature | null;
}

const initialState: FeatureState = {
  feature: null,
};

export const FeatureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Feature>) => {
      state.feature = { ...action.payload };
    },
  },
});

export const { add } = FeatureSlice.actions;
export default FeatureSlice.reducer;
