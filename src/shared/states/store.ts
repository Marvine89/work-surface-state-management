import { configureStore } from "@reduxjs/toolkit";
import FeatureSlice from "./feature.slice";
import surfaceMapReducer from "./maps.slice";
import workSurfaceSlice from "./work-surface.slice";

export const AppStore = configureStore({
  reducer: {
    map: surfaceMapReducer,
    feature: FeatureSlice,
    workSurface: workSurfaceSlice,
  },
});

export type AppState = ReturnType<typeof AppStore.getState>;

export type AppDispatch = typeof AppStore.dispatch;
