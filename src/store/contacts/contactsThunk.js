import { createAsyncThunk } from '@reduxjs/toolkit';

import { setTokenApi } from 'components/service/authApi';
import {
  createContactApi,
  deleteContactApi,
  getContactsApi,
} from 'components/service/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      return await getContactsApi();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await createContactApi(contact);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      return await deleteContactApi(contactId);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
