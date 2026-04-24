import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedItem: null,
  categories: [],
  loading: false,
  error: null,
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  setSelectedItem,
  clearSelectedItem,
  setCategories,
  setLoading,
  setError,
} = itemsSlice.actions

export default itemsSlice.reducer
