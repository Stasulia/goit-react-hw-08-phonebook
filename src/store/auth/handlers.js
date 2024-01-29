export const handleSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleLogOut = state => {
  state.token = '';
  state.profile = null;
};

export const handleRefresh = (state, { payload }) => {
  state.profile = payload;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
