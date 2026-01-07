import {
    SET_FORM_NAME,
    SET_FORM_MESSAGE,
    SET_FORM_EMAIL,
    SET_FORM_SUBMIT_SUCCESS,
    SUBMIT_CONTACT_FORM,
    SET_FORM_ERROR_MESSAGE
} from "../actions/actionTypes";

const initialState = {
    name: "",
    email: "",
    message: "",
    submitSuccess: false,
    formSubmitError: "",
    loading : false
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
                formSubmitError: "",
                loading: false,
                name: "",
                email: "",
                message: "",
            };
        case SUBMIT_CONTACT_FORM:
            return {
                ...state,
                loading: true,
            };
        case SET_FORM_ERROR_MESSAGE:
            return {
                ...state,
                submitSuccess: false,
                formSubmitError: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};


export default portefolioReducer;
