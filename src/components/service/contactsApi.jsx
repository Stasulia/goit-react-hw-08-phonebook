import { api } from './Api';

export const getContactsApi = async () => {
  const { data } = await api('/contacts');
  return data;
};

export const createContactApi = async contact => {
  const { data } = await api.post('/contacts', contact);
  return data;
};

export const deleteContactApi = async contactId => {
  const { data } = await api.delete(`/contacts/${contactId}`);
  return data;
};
