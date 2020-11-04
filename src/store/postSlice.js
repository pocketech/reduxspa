import { showLoading, hideLoading } from './loadingSlice'
import { createSlice } from '@reduxjs/toolkit';
import { FirebaseTimestamp, db } from '../firebase'

//postsコレクションへのReference
const postsRef = db.collection('posts');

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    list: []
  },
  reducers: {
    fetchPostsAc: (state, action) => {
      return {
        ...state, list: action.payload
      }
    }
  }
})

export const fetchPosts = (fID, sID) => {
  return async (dispatch) => {

    //postsコレクションを更新日付の新しい順で並び変えて、検索条件を満たすものに絞り込み
    let query = postsRef.orderBy('updated_at', 'desc');
    query = (fID !== "") ? query.where('fID', '==', fID) : query;
    query = (sID !== "") ? query.where('sID', '==', sID) : query;

    //講義情報のドキュメントをpostList配列にpushしてstoreのstateを更新する
    query.get()
      .then(snapshots => {
        const postList = []
        snapshots.forEach(snapshot => {
          const post = snapshot.data();
          console.log(post.updated_at);
          console.log(post.created_at);
          post.updated_at.toDate();
          post.created_at.toDate();
          console.log(post.updated_at);
          console.log(post.created_at);
          postList.push(post);
        })
        dispatch(fetchPostsAc(postList))
      })
  }
}
export const { fetchPostsAc } = postSlice.actions;

//storeに格納した配列を取り出す関数
export const getReview = state => state.post.list;


export const postReview = (facultyObj, semesterObj, teacher, lecture, cRating, eRating, description, authorID, semester, faculty) => {
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
      fID: faculty,
      sID: semester,
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