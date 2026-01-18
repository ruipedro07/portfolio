import {
    SET_CHAT_INPUT,
    SET_CHAT_HAS_SCROLLED_PAGE,
    SET_CHAT_EXPANDED, SEND_CHAT_MESSAGE, ASSISTANT_REPLY_SUCCESS,
} from "./actionTypes";

export const setExpanded = (expanded) => ({
    type: SET_CHAT_EXPANDED,
    payload: expanded,
});

export const sendMessage = (message) => ({
    type: SEND_CHAT_MESSAGE,
    payload: message,
});

export const setInput = (input) => ({
    type: SET_CHAT_INPUT,
    payload: input,
});

export const setHasScrolledPage = (scrolled) => ({
    type: SET_CHAT_HAS_SCROLLED_PAGE,
    payload: scrolled,
});

export const assistantReplySuccess = (reply) => ({
    type: ASSISTANT_REPLY_SUCCESS,
    payload: reply,
});






