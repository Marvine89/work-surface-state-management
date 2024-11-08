import { combineReducers, configureStore } from '@reduxjs/toolkit';
import PanelReducer from './panel.slice';
import saveGeometry from './saved-geometry.slice';
import workSurfaceReducer from './work-surface.slice';

export const appReducer = combineReducers({
  panel: PanelReducer,
  workSurface: workSurfaceReducer,
  saveGeometry: saveGeometry,
});

export function appStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: appReducer,
    preloadedState,
  });
}

export type AppState = ReturnType<typeof appStore>;
export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = AppState['dispatch'];
