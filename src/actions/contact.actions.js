import types from "./types";
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getContacts = () => async dispatch => {
    const response = await axios.get(API_URL);

    dispatch({
        type: types.GET_CONTACTS,
        payload: response.data
    });
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
