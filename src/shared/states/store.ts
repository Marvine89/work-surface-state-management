import { configureStore } from "@reduxjs/toolkit";
import PanelReducer from "./panel.slice";
import surfaceMapReducer from "./maps.slice";
import workSurfaceReducer from "./work-surface.slice";

export const AppStore = configureStore({
  reducer: {
    panel: PanelReducer,
    map: surfaceMapReducer,
    workSurface: workSurfaceReducer,
  },
});

export type AppState = ReturnType<typeof AppStore.getState>;

export type AppDispatch = typeof AppStore.dispatch;
