export const selectAllContacts = state => state.contacts.contacts;

export const selectAllFilters = state => state.filter;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoadinselect;

// export const setVisibleContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filters.toLowerCase().trim())
// );
