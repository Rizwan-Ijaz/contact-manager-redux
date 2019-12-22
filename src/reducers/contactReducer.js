import types from "../actions/types";

const initialState = {
    contacts: [{
        name: 'Rizwan Ijaz',
        email: 'rizwanijaz@demo.com',
        phone: '0313-7823033'
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_CONTACTS:
            return {
                ...state
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
