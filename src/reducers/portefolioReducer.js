import {
     SET_FORM_NAME, SET_FORM_MESSAGE, SET_FORM_EMAIL, SET_FORM_SUBMIT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    name: "",
    email: "",
    message: "",
    submitSuccess: false,
    formSubmitError: ""
};

const portefolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case SET_FORM_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case SET_FORM_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        case SET_FORM_SUBMIT_SUCCESS:
            return {
                ...state,
                submitSuccess: true,
            };
        default:
            return state;
    }
};


export default portefolioReducer;
