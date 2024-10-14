import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsSlice';

const ContactList = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector((state) => state.contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    if (isLoading) return <div > Loading... < /div>;
    if (error) return <div > Error: { error } < /div>;

    return ( <
        ul > {
            items.map(contact => ( <
                li key = { contact.id } > { contact.name } < /li>
            ))
        } <
        /ul>
    );
};

export default ContactList;