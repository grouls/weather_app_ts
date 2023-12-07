import { Action, ThunkAction, configureStore }       from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    //[imported.reducerPath] : imported.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()//.concat(importedApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
