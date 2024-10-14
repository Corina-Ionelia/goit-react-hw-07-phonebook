import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice'; // importăm reducer-ul pentru contacte

const store = configureStore({
    reducer: {
        contacts: contactsReducer, // adăugăm reducer-ul în store
    },
});

export default store;