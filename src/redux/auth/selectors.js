export const getUser = state => state.auth.email;
export const getUserAvatar = state => state.auth.avatarURL;
export const getToken = state => state.auth.token;
export const getIsFetchingCurrentUser = state =>
  state?.auth?.isFetchingCurrentUser ?? false;
export const getVerify = state => state.auth.verify;
export const getisLoading = state => state.auth.isLoading;
export const getFormError = state => state.auth.formError;
export const getVerifyMessage = state => state.auth.verifyMessage;
export const isUserLogIn = state => {
  const email = getUser(state);
  const token = getToken(state);
  if (email && token) return true;
};
