import {
    ASSISTANT_REPLY_SUCCESS,
    SEND_CHAT_MESSAGE,
    SET_CHAT_EXPANDED, SET_CHAT_HAS_SCROLLED_PAGE, SET_CHAT_INPUT,

} from "../actions/actionTypes";


const initialState = {
    expanded: false,
    messages: [],
    inputValue: "",
    isLoading: false,
    hasAutoScrolledPage: false,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHAT_EXPANDED:
            return {
                ...state,
                expanded: action.payload,
            };
        case SET_CHAT_INPUT:
            return {
                ...state,
                inputValue: action.payload,
            };
        case SET_CHAT_HAS_SCROLLED_PAGE:
            return {
                ...state,
                hasAutoScrolledPage: action.payload,
            };

        case SEND_CHAT_MESSAGE:
            return {
                ...state,
                isLoading: true,
                messages: [...state.messages, action.payload.message]
            };

        case ASSISTANT_REPLY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                messages: [...state.messages,
                    {role: "assistant", content: action.payload.response}
                ]
            };

        default:
            return state;
    }
};


export default chatReducer;
