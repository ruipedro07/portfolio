import {takeLatest, put, call} from "redux-saga/effects";
import {SUBMIT_CONTACT_FORM} from "../actions/actionTypes";
import store from "../store";
import {API_HOST} from "../constants";
import {setFormSubmitSuccess} from "../actions/portefolioActions";

async function submitContactForm(action) {

    try {
        console.log(action.payload.name)

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


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        //const data = await response.json();

        // Dispatch the response to Redux store
        store.dispatch(setFormSubmitSuccess());

    } catch (error) {
        //store.dispatch(setBotReply("No reply from server")); TODO
    }
}


function* portefolioSaga() {
    yield takeLatest(SUBMIT_CONTACT_FORM, submitContactForm);
}

export default portefolioSaga;
