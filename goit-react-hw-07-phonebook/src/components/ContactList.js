import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/contactsSlice';

const ContactList = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector((state) => state.contacts);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phone) {
            dispatch(addContact({ name, phone })); // trimitem contactul la backend
            setName('');
            setPhone('');
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteContact(id)); // ștergem contactul
    };

    if (isLoading) return <div > Loading... < /div>;
    if (error) return <div > Error: { error } < /div>;

    return ( <
        div >
        <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        placeholder = "Nume"
        required /
        >
        <
        input type = "text"
        value = { phone }
        onChange = {
            (e) => setPhone(e.target.value) }
        placeholder = "Telefon"
        required /
        >
        <
        button type = "submit" > Adaugă Contact < /button> <
        /form> <
        ul > {
            items.map(contact => ( <
                li key = { contact.id } > { contact.name } - { contact.phone } <
                button onClick = {
                    () => handleDelete(contact.id) } > Șterge < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default ContactList;