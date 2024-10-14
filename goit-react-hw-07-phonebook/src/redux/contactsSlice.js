import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://mockapi.io/clone/670cd8437e5a228ec1d19d75/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async() => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async(contact) => {
    const response = await axios.post(API_URL, contact);
    return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id; // returnăm id-ul pentru a șterge contactul din state
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload); // adaugăm contactul nou în listă
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload); // ștergem contactul
            });
    },
});

export default contactsSlice.reducer;