import { configureStore } from "@reduxjs/toolkit";
import surfaceMapReducer from "./maps.slice";
import workSurfaceSlice from "./work-surface.slice";

export const AppStore = configureStore({
  reducer: {
    map: surfaceMapReducer,
    workSurface: workSurfaceSlice,
  },
});

export type AppState = ReturnType<typeof AppStore.getState>;

export type AppDispatch = typeof AppStore.dispatch;
