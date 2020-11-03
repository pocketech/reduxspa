import { showLoading, hideLoading } from './loadingSlice'
import { createSlice } from '@reduxjs/toolkit';
import { FirebaseTimestamp, db } from '../firebase'

const postsRef = db.collection('posts');
export const postSlice = createSlice({
  name: 'post',
  initialState: {
    lecture: "",
    teacher: "",
    description: "",
    cRating: "",
    eRating: "",
    facultyObj: {},
    semesterObj: {},
    authorID: "",
  },
  reducers: {
    refMyPost: (state, action) => {
      return {
        ...state, ...action.payload
      }
    }
  }
})


export const postReview = (facultyObj, semesterObj, teacher, lecture, cRating, eRating, description, authorID, handleOpen, allFieldReset) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();
    const data = {
      lecture,
      teacher,
      description,
      cRating: Number(cRating),
      eRating: Number(eRating),
      facultyObj,
      semesterObj,
      authorID,
      updated_at: timestamp
    }
    const ref = postsRef.doc()
    const id = ref.id;
    data.id = id;
    data.created_at = timestamp;
    return postsRef.doc(id).set(data, { marge: true })
      .then(() => {
        dispatch(showLoading('Now Posting...'))
        alert("投稿が完了しました !");
        dispatch(hideLoading());
      })
      .catch(error => { throw new Error(error) })
  }
}
export default postSlice.reducer;