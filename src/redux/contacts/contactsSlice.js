import { fetchContacts, addContact, deleteContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// const handlePending = state => {
//     state.isLoading = true;
//   };

//   const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   };
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    total: null,
    error: null,
    page: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.contacts;
      state.total = action.payload.total;
      state.page = action.payload.page;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});
const persistConfig = {
  key: 'contacts-initial-state',
  storage,
  whitelist: ['0'],
};
export const contactsReducer = contactsSlice.reducer;
export const persistedReducerContacts = persistReducer(
  persistConfig,
  contactsReducer
);
