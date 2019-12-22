import types from "../actions/types";

const initialState = {
    contacts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_CONTACTS:
            return {
                ...state
            };
        default:
            return state;
    }
}
