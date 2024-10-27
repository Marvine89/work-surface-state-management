import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appReducer, type AppState, type RootState } from '@states/store';
import { configureStore } from '@reduxjs/toolkit';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: RootState;
  store?: AppState;
}

function setupStore(preloadedState?: RootState) {
  return configureStore({
    reducer: appReducer,
    preloadedState,
  });
}

export function renderWithProviders(ui: React.ReactElement, extendedRenderOptions: ExtendedRenderOptions = {}) {
  const { store = setupStore(), ...renderOptions } = extendedRenderOptions;
  const Wrapper = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>;

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
