import axios from 'axios';
import { IUser } from '../../interfaces/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.usersFetchingSuccess(data));
//   } catch (error) {
//     dispatch(userSlice.actions.usersFetchingFailure('Failed to load users list'));
//   }
// };
export const fetchUsers = createAsyncThunk('user/fetchingAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Error during users list loading');
  }
});
