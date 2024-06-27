import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://667c6d7e3c30891b865ca229.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts/", { ...values });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
