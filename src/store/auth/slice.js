import { createSlice } from '@reduxjs/toolkit';
import { logOutThunk, loginThunk, refreshThunk, signUpThunk } from './thunk';
import {
  handleFulfilled,
  handleLogOut,
  handlePending,
  handleRefresh,
  handleRejected,
  handleSignUp,
} from './handlers';

const initialState = {
  token: '',
  profile: null,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleSignUp)
      .addCase(loginThunk.fulfilled, handleSignUp)
      .addCase(refreshThunk.fulfilled, handleRefresh)
      .addCase(refreshThunk.rejected, state => {
        state.token = '';
        state.profile = null;
      })
      .addCase(logOutThunk.fulfilled, handleLogOut)

      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const authReducer = authSlice.reducer;
