export const getUser = state => state.auth.email;
export const getToken = state => state.auth.token;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const getVerify = state => state.auth.verify;
export const getFormError = state => state.auth.formError;
export const getVerifyMessage = state => state.auth.verifyMessage;
