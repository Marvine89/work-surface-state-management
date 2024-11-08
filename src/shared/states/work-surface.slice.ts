import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SurfaceFeature, WorkSurface } from '../interfaces';
import { hasFeature } from '../utils';

export interface WorkSurfaceState {
  workSurfaces: WorkSurface[];
  removedFeatures: SurfaceFeature[];
}

const initialState: WorkSurfaceState = {
  workSurfaces: [],
  removedFeatures: [],
};

export const workSurfaceSlice = createSlice({
  name: 'work-surface',
  initialState,
  reducers: {
    setSurfaces: (state, action: PayloadAction<WorkSurface[]>) => {
      state.workSurfaces = [...action.payload];
    },
    setFilterFeatures: (state, action: PayloadAction<SurfaceFeature>) => {
      const payload = action.payload;

      // Remove feature from removedFeatures if it exists
      if (hasFeature(state.removedFeatures, action.payload)) {
        state.removedFeatures = state.removedFeatures.filter(({ id, parentId }) => {
          return !(id === payload.id && parentId === payload.parentId);
        });
        return;
      }

      state.removedFeatures = [...state.removedFeatures, { ...payload }];
    },
  },
});

export const { setSurfaces, setFilterFeatures } = workSurfaceSlice.actions;

export default workSurfaceSlice.reducer;
