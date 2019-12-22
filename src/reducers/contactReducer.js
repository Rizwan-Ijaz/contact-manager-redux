import types from "../actions/types";

const initialState = {
    contacts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };

        case types.ADD_CONTACTS:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };

        case types.DELETE_CONTACTS:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default:
            return state;
    }
}
