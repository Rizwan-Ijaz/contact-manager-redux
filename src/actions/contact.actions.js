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

export const getContact = (id) => async dispatch => {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({
        type: types.GET_CONTACT,
        payload: response.data
    });
};

export const addContact = (contact) => async dispatch => {
    const response = await axios.post(API_URL, contact);
    dispatch({
        type: types.ADD_CONTACT,
        payload: response.data
    });
};

export const deleteContact = (id) => async dispatch => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({
            type: types.DELETE_CONTACT,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: types.DELETE_CONTACTS,
            payload: id
        });
    }
};
export const updateContact = (contact) => async dispatch => {
    const response = await axios.put(`${API_URL}/${contact.id}`, contact);
    dispatch({
        type: types.UPDATE_CONTACT,
        payload: response.data
    });
};
