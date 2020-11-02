// import { createSlice } from '@reduxjs/toolkit';
// import {FirebaseTimestamp} from '../firebase'

// export const postSlice = createSlice({
//   name: 'post',
//   initialState: {
//     faculty: "",
//     content: "",
//     creditEvaluation: 0,
//     contentEvaluation: 0,

//   },
//   reducers: {
//     showLoading: (state, action) => {
//       state.isLoading = true;
//       state.text = action.payload;
//     },s
//     hideLoading: state => {
//       state.isLoading = false;
//       state.text = "";
//     }
//   }
// })

// export const { showLoading, hideLoading } = loadingSlice.actions;
// export const getLoadingState = state => state.loading.isLoading;
// export const getLoadingText = state => state.loading.text;

// export const savePost = (lecture,teacher,description,rating,faculty,semester)=>{
//   return async (dispatch) =>{
//     const timestamp = FirebaseTimestamp.now()
//     const data = {
//       lecture,
//       teacher,
//       description,
//       cRating,
//       eRating,
//       faculty,
//       semester
//     }
//   }
// }
// export default loadingSlice.reducer;