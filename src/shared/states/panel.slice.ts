import { createSlice } from "@reduxjs/toolkit";

export interface panelState {
  rightPanelOpen: boolean;
}

const initialState: panelState = {
  rightPanelOpen: false,
};

export const PanelSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    openRightPanel: (state) => {
      state.rightPanelOpen = true;
    },
    closeRightPanel: (state) => {
      state.rightPanelOpen = false;
    },
  },
});

export const { openRightPanel, closeRightPanel } = PanelSlice.actions;
export default PanelSlice.reducer;
