import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Coordinates, PolygoneMode, SavedPolygonState } from '../interfaces';

export interface SavedGeometryState {
  polygoneMode: PolygoneMode | null;
  displayedPolygon: Coordinates[][];
  savedPolygones: SavedPolygonState[];
  selectedPolygon: SavedPolygonState | null;
}

const initialState: SavedGeometryState = {
  polygoneMode: null,
  displayedPolygon: [],
  savedPolygones: [],
  selectedPolygon: null,
};

export const savedGeometryStateSlice = createSlice({
  name: 'saved-polygon',
  initialState,
  reducers: {
    switchMode: (state, action: PayloadAction<PolygoneMode | null>) => {
      state.polygoneMode = action.payload;
    },
    setDisplayedPolygon: (state, action: PayloadAction<Coordinates[][]>) => {
      state.displayedPolygon = action.payload;
    },
    savePolygon: (state, action: PayloadAction<{ name?: string; coord: Coordinates[][] }>) => {
      state.savedPolygones.push({ name: action.payload.name || 'Unnamed', coord: action.payload.coord });
    },
    setSelectedPolygon: (state, action: PayloadAction<SavedPolygonState>) => {
      state.selectedPolygon = action.payload;
    },
    updatePolygon: (state, action: PayloadAction<{ name: string; description: string; coord: Coordinates[][] }>) => {
      const index = state.savedPolygones.findIndex(
        (polygon) => JSON.stringify(polygon.coord) === JSON.stringify(action.payload.coord),
      );

      if (index === -1) return;

      state.savedPolygones[index] = {
        name: action.payload.name,
        coord: action.payload.coord,
        description: action.payload.description,
      };

      if (
        state.selectedPolygon?.coord &&
        JSON.stringify(state.selectedPolygon?.coord) === JSON.stringify(action.payload.coord)
      ) {
        state.selectedPolygon = {
          name: action.payload.name,
          coord: action.payload.coord,
          description: action.payload.description,
        };
      }
    },
    removePolygon: (state, action: PayloadAction<{ name: string; coord: Coordinates[][] }>) => {
      const index = state.savedPolygones.findIndex(
        (polygon) => JSON.stringify(polygon.coord) === JSON.stringify(action.payload.coord),
      );

      if (index === -1) return;
      state.savedPolygones.splice(index, 1);
    },
  },
});

export const { switchMode, savePolygon, removePolygon, setDisplayedPolygon, setSelectedPolygon, updatePolygon } =
  savedGeometryStateSlice.actions;

export default savedGeometryStateSlice.reducer;
