import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPostsApi, uploadPostApi} from '../api';

const name = 'posts';
const initialState = {
  postLoading: false,
  uploadLoading: false,
  postsInfo: [],
  error: null,
};

export const getPostsInfo = createAsyncThunk(
  `${name}/getPostsInfo`,
  async ({page}, thunkAPI) => {
    try {
      const {data} = await getPostsApi({page});
      return data;
    } catch (err) {
      console.log('posts api err', err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const uploadPost = createAsyncThunk(
  `${name}/uploadPost`,
  async ({req}, thunkAPI) => {
    try {
      const res = await uploadPostApi(req);
      return res;
    } catch (err) {
      console.log('upload post api err', err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsInfo.pending]: state => {
      state.postLoading = true;
    },
    [getPostsInfo.fulfilled]: (state, {payload}) => {
      state.postLoading = false;
      state.postsInfo = [...state.postsInfo, ...payload];
    },
    [getPostsInfo.rejected]: (state, {error}) => {
      state.postLoading = false;
      state.error = error;
    },
    [uploadPost.pending]: state => {
      state.uploadLoading = true;
    },
    [uploadPost.fulfilled]: (state, {payload}) => {
      state.uploadLoading = false;
      state.postsInfo = [payload.data, ...state.postsInfo];
    },
    [uploadPost.rejected]: (state, {error}) => {
      state.uploadLoading = false;
      state.error = error;
    },
  },
});

export default slice.reducer;
