export const ADD_CHATBOX = 'ADD_CHATBOX';
export const REMOVE_CHATBOX = 'REMOVE_CHATBOX';

export const addChatBox = (chatBox) => ({
    type: ADD_CHATBOX,
    payload: chatBox,
});

export const removeChatBox = (chatBox) => ({
    type: REMOVE_CHATBOX,
    payload: chatBox,
});