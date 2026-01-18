import {takeLatest, call, put } from "redux-saga/effects";
import {SEND_CHAT_MESSAGE} from "../actions/actionTypes";
import {API_HOST} from "../constants";
import {assistantReplySuccess} from "../actions/chatActions";

function* sendMessage(action) {

    const { message, chatHistory } = action.payload;

    try {
        const response = yield call(fetch, `${API_HOST}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message.content,
                chatHistory: chatHistory,
            }),
        });

        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }

        const data = yield call([response, "json"]);


        yield put(assistantReplySuccess(data));

    } catch (error) {
        //store.dispatch(setFormErrorMessage("No reply from server"));
    }
}

function* chatSaga() {
    yield takeLatest(SEND_CHAT_MESSAGE, sendMessage);
}

export default chatSaga;
