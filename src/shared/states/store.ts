import { configureStore } from '@reduxjs/toolkit';
import PanelReducer from './panel.slice';
import workSurfaceReducer from './work-surface.slice';

export const AppStore = configureStore({
  reducer: {
    panel: PanelReducer,
    workSurface: workSurfaceReducer,
  },
});

export type AppState = ReturnType<typeof AppStore.getState>;

export type AppDispatch = typeof AppStore.dispatch;
