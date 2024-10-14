import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from './redux/contactsSlice';

function App() {
    const dispatch = useDispatch();
    const { items: contacts, isLoading, error } = useSelector(state => state.contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleAddContact = (newContact) => {
        dispatch(addContact(newContact));
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    if (isLoading) return <p > Loading... < /p>;
    if (error) return <p > Error: { error } < /p>;

    return ( <
        div >
        <
        h1 > Contact Book < /h1> <
        ul > {
            contacts.map(contact => ( <
                li key = { contact.id } > { contact.name } - { contact.phone } <
                button onClick = {
                    () => handleDeleteContact(contact.id) } > Delete < /button> <
                /li>
            ))
        } <
        /ul>

        { /* Formularul pentru adăugarea unui contact */ } <
        form onSubmit = {
            (e) => {
                e.preventDefault();
                const form = e.target;
                const newContact = {
                    name: form.name.value,
                    phone: form.phone.value,
                };
                handleAddContact(newContact);
                form.reset();
            }
        } >
        <
        input name = "name"
        placeholder = "Name"
        required / >
        <
        input name = "phone"
        placeholder = "Phone"
        required / >
        <
        button type = "submit" > Add Contact < /button> <
        /form> <
        /div>
    );
}

export default App;