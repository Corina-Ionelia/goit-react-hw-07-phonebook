import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Folosește URL-ul corect pentru MockAPI
const API_URL = 'https://mockapi.io/clone/670cd8437e5a228ec1d19d75/contacts';

// Creează funcțiile pentru operații
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async() => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async(newContact) => {
    const response = await axios.post(API_URL, newContact);
    return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId) => {
    await axios.delete(`${API_URL}/${contactId}`);
    return contactId;
});

// Crează slice-ul Redux
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
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
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(contact => contact.id === action.payload);
                if (index !== -1) {
                    state.items.splice(index, 1);
                }
            });
    },
});

// Exportă reducerul
export default contactsSlice.reducer;