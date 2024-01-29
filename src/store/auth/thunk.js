import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginApi,
  loginOutApi,
  refreshApi,
  setTokenApi,
  signUpApi,
} from 'components/service/authApi';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, { rejectWithValue }) => {
    try {
      return await signUpApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await loginApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await refreshApi(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/loginOut',
  async (_, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      await loginOutApi();
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
