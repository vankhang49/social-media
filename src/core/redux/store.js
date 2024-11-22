import { configureStore } from '@reduxjs/toolkit';
import chatBoxReducer from './reducers/chatBoxReducer';

const store  = configureStore({
    reducer: {
        chatBox: chatBoxReducer,
    },
});

export default store;