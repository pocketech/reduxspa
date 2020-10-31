import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
    text: ""
  },
  reducers: {
    showLoading: (state, action) => {
      state.isLoading = true;
      state.text = action.payload;
    },
    hideLoading: state => {
      state.isLoading = false;
      state.text = "";
    }
  }
})

export const { showLoading, hideLoading } = loadingSlice.actions;
export const getLoadingState = state => state.loading.isLoading;
export const getLoadingText = state => state.loading.text;


export default loadingSlice.reducer;