import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const name = 'users';
const userAddress = 'https://jsonplaceholder.typicode.com/users';

const initialState = {userLoading: false, usersInfo: []};

export const getUsersInfo = createAsyncThunk(
  `${name}/getUsersInfo`,
  async (_, thunkAPI) => {
    try {
      const res = await (await fetch(userAddress)).json();
      return res;
    } catch (err) {
      console.log('users api err', err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersInfo.pending]: state => {
      state.userLoading = true;
    },
    [getUsersInfo.fulfilled]: (state, {payload}) => {
      state.userLoading = false;
      state.usersInfo = payload;
    },
    [getUsersInfo.rejected]: state => {
      state.userLoading = false;
    },
  },
});

export default slice.reducer;
