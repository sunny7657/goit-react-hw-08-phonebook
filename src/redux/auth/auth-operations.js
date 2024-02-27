import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentRequest,
  loginRequest,
  signupRequest,
} from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const data = await signupRequest(body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const data = await loginRequest(body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
