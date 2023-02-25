import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
}
});

export const addNewContact = createAsyncThunk("contacts/addContacts", async (contact, thunkAPI) => {
    const { name, number } = contact;
    try {
        const response = await axios.post("/contacts", {name, number,})
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
}
});

export const deleteContact = createAsyncThunk("contacts/deleteContacts", async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
}
});