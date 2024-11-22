import {useDispatch, useSelector} from 'react-redux';
import {removeChatBox} from '@/core/redux/actions/chatBoxAction';
import ChatBox from './ChatBox';
import "./ChatContainer.scss";
import {useState} from "react";

const ChatContainer = () => {
    const chatBoxes = useSelector((state) => {
        return state.chatBox.chatBoxes;
    });
    const [minimizedChatBoxes, setMinimizedChatBoxes] = useState([]);

    const dispatch = useDispatch();

    const updatePosition = (index) => {
        setMinimizedChatBoxes((prev) => {
            const newPositions = [...prev];
            newPositions[index] = { bottom: newPositions.length * 60 };
            return newPositions;
        });
    };

    const handleRemoveChatBox = (box, id) => {
        dispatch(removeChatBox(box));
        setMinimizedChatBoxes((prev) => {
            const newPositions = prev.filter((_, index) => index !== id);
            return newPositions.map((position, index) => ({
                bottom: index * 60,
            }));
        });
    }
    return (
        <div className="chat-container">
            {chatBoxes.map((box, index) => (
                <ChatBox
                    key={index}
                    data={box}
                    onClose={() => handleRemoveChatBox(box, index)}
                    isMinimized={!!minimizedChatBoxes[index]}
                    positionIndex={minimizedChatBoxes[index]}
                    updatePosition={() => updatePosition(index)}
                />
            ))}
        </div>
    );
};

export default ChatContainer;