import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPostsApi} from '../api';

const name = 'posts';
const initialState = {postLoading: false, postsInfo: []};

export const getPostsInfo = createAsyncThunk(
  `${name}/getPostsInfo`,
  async ({page, limit}, thunkAPI) => {
    try {
      const {data} = await getPostsApi({page, limit});
      return data;
    } catch (err) {
      console.log('posts api err', err);
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
      state.postsInfo = payload;
    },
    [getPostsInfo.rejected]: state => {
      state.postLoading = false;
    },
  },
});

export default slice.reducer;
