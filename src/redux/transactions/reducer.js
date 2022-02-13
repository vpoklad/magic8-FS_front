import { createReducer, combineReducers } from '@reduxjs/toolkit';
import thunks from './thunks';

const transactions = createReducer([], {
  [thunks.addNewTransactionThunk.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [thunks.getAllTransactionsThunk.fulfilled]: (_, { payload }) => payload,
  [thunks.delTransactionThunk.fulfilled]: (state, { payload }) => {
    state.filter(e => e.id !== payload);
  },
});

const error = createReducer(null, {});

export default combineReducers({
  transactions,
  error,
});
