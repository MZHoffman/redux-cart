import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isVisable: true },
  reducers: {
    toggleCart(state) {
      state.isVisable = !state.isVisable
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice
