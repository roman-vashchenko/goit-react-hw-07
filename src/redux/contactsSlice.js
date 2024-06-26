import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsData from "../contactsData.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsData,
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.items = [...state.items, { ...payload, id: nanoid() }];
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
