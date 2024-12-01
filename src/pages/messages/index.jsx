import MessageSidebar from "@/components/sidebars/MessageSidebar";
import RecentChat from "@/components/chatList/RecentChat";
import "./Messages.scss";
import ChatList from "@/components/chatList/ChatList";
import ChatContent from "@/components/chatList/ChatContent";
import {useState} from "react";
import {MessageHeader} from "@/components/header/MessageHeader";
import MainSidebar from "@/components/sidebars/mainSidebar";

function Index() {
    const [chatUser, setChatUser] = useState(null);
    const [isShowSidebar, setIsShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }

    const handleChangeChatUser = chatData => {
        console.log(chatData)
        setChatUser(chatData);
    }

    return (
        <div id="messages">
            <MessageSidebar/>
            <div className="message-container">
                <div className="message-header">
                    <MessageHeader showSidebar={handleShowSidebar}/>
                    <MainSidebar isOpen={isShowSidebar} className={'private'}/>
                </div>
                <div className="select-chat">
                    <RecentChat showUserChat={handleChangeChatUser} />
                    <ChatList showUserChat={handleChangeChatUser} />
                </div>
                <div className="chat-box">
                    <ChatContent data={chatUser} />
                </div>
            </div>

        </div>
    );
}

export default Index;