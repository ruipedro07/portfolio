import {
    SET_FORM_NAME,
    SET_FORM_EMAIL,
    SET_FORM_MESSAGE,
    SET_FORM_SUBMIT_SUCCESS,
    SUBMIT_CONTACT_FORM,
    SET_FORM_ERROR_MESSAGE
} from "./actionTypes";


export const setFormName = (input) => ({
    type: SET_FORM_NAME,
    payload: input,
});

export const setFormEmail = (input) => ({
    type: SET_FORM_EMAIL,
    payload: input,
});

export const setFormMessage = (input) => ({
    type: SET_FORM_MESSAGE,
    payload: input,
});

export const submitContactForm = (data) => ({
    type: SUBMIT_CONTACT_FORM,
    payload: data,
});

export const setFormSubmitSuccess = () => ({
    type: SET_FORM_SUBMIT_SUCCESS,
});

export const setFormErrorMessage = (data) => ({
    type: SET_FORM_ERROR_MESSAGE,
    payload: data,
});




