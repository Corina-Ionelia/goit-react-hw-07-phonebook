import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from './redux/contactsSlice';

const Phonebook = () => {
        const dispatch = useDispatch();
        const { items, isLoading, error } = useSelector((state) => state.contacts);
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');

        useEffect(() => {
            dispatch(fetchContacts());
        }, [dispatch]);

        const handleAddContact = () => {
            dispatch(addContact({ name, phone }));
            setName('');
            setPhone('');
        };

        return ( <
                div >
                <
                h1 > Phonebook < /h1> <
                input type = "text"
                value = { name }
                onChange = {
                    (e) => setName(e.target.value) }
                placeholder = "Name" /
                >
                <
                input type = "text"
                value = { phone }
                onChange = {
                    (e) => setPhone(e.target.value) }
                placeholder = "Phone" /
                >
                <
                button onClick = { handleAddContact } > Add Contact < /button>

                {
                    isLoading && < p > Loading... < /p>} {
                        error && < p > { error } < /p>}

                        <
                        ul > {
                                items.map((contact) => ( <
                                    li key = { contact.id } > { contact.name }: { contact.phone } <
                                    button onClick = {
                                        () => dispatch(deleteContact(contact.id)) } > Delete < /button> <
                                    /li>
                                ))
                            } <
                            /ul> <
                            /div>
                    );
                };

                export default Phonebook;