import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = state => state.contacts.contacts;

export const selectAllFilters = state => state.filter;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectAllContacts, selectAllFilters],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase().trim())
    );
  }
);
