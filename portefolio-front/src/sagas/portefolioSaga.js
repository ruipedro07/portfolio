import {takeLatest, put, call} from "redux-saga/effects";
import {SUBMIT_CONTACT_FORM} from "../actions/actionTypes";
import store from "../store";
import {API_HOST} from "../constants";
import {setFormErrorMessage, setFormSubmitSuccess} from "../actions/portefolioActions";

async function submitContactForm(action) {

    console.log(action.payload)
    try {

        const response = await fetch(`${API_HOST}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                name: action.payload.name,
                email: action.payload.email,
                message: action.payload.message,
            }).toString(),
        });

        if (response.ok) {
            store.dispatch(setFormSubmitSuccess());
        } else {
            store.dispatch(setFormErrorMessage(`Server responded with ${response.status}`));
        }

    } catch (error) {
        store.dispatch(setFormErrorMessage("No reply from server"));
    }
}


function* portefolioSaga() {
    yield takeLatest(SUBMIT_CONTACT_FORM, submitContactForm);
}

export default portefolioSaga;
