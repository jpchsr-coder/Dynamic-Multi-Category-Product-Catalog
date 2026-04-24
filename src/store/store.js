import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './slices/itemsSlice.js'

export const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})
