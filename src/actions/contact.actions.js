import types from "./types";

export const getContacts = () => {
    return {
        type: types.GET_CONTACTS
    }
};

export const addContact = (contact) => {
    return {
        type: types.ADD_CONTACTS,
        payload: contact
    }
};

export const deleteContact = (id) => {
    return {
        type: types.DELETE_CONTACTS,
        payload: id
    }
};
