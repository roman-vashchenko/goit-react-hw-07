import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const contactReducer = contactsSlice.reducer;
