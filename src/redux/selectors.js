import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contacts.items;
export const selectIsLoading = store => store.contacts.isLoading;
export const selectError = store => store.contacts.error;

export const selectFilter = store => store.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
