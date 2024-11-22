import {ADD_CHATBOX, REMOVE_CHATBOX} from '../actions/chatBoxAction';

const initialState = {
    chatBoxes: [],
};

const chatBoxReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CHATBOX:
            if (state.chatBoxes.some((box) => (box.id === action.payload.id && box.type === action.payload.type))) {
                return state;
            }
            return { ...state, chatBoxes: [...state.chatBoxes, action.payload] };
        case REMOVE_CHATBOX:
            return {
                ...state,
                chatBoxes: state.chatBoxes.filter(
                    (box) => !(box.id === action.payload.id && box.type === action.payload.type)
                ),
            };
        default:
            return state;
    }
};

export default chatBoxReducer;