import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupRequest } from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const data = await signupRequest(body);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
