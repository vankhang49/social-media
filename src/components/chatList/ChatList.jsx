import avatar from "@/asset/images/my-avatar.png";
import Image from "next/image";
import "./ChatList.scss";
import {useEffect, useState} from "react";

export default function ChatList({ showUserChat }) {
    const recentChat = [
        {
            chatId: 1,
            chatName: "Friend1",
            status: 1,
            avatar: avatar,
            newestMessage: "Hello",
        },
        {
            chatId: 2,
            chatName: "Friend2",
            status: 1,
            avatar: avatar,
            newestMessage: "Hello",
        },
        {
            chatId: 3,
            chatName: "Group 1",
            avatar: avatar,
            status: 1,
            newestMessage: "I want you to be my friend"
        },
        {
            chatId: 4,
            chatName: "Friend3",
            status: 1,
            avatar: avatar,
            newestMessage: "Hello",
        },
        {
            chatId: 5,
            chatName: "Friend4",
            status: 1,
            avatar: avatar,
            newestMessage: "I want you to be my friend"
        },
        {
            chatId: 6,
            chatName: "Friend5",
            status: 1,
            avatar: avatar,
            newestMessage: "Hello",
        },
        {
            chatId: 7,
            chatName: "Friend6",
            status: 1,
            avatar: avatar,
            newestMessage: "Hello",
        },
        {
            chatId: 8,
            chatName: "Friend7",
            status: 0,
            avatar: avatar,
            newestMessage: "I want you to be my friend"
        },
        {
            chatId: 9,
            chatName: "Group 2",
            avatar: avatar,
            status: 1,
            newestMessage: "Hello",
        },
    ]

    const [chatSelected, setChatSelected] = useState(1);

    useEffect(() => {
        showUserChat(recentChat[0]);
    }, []);

    useEffect(()=> {
        document.querySelectorAll('.chat-element').forEach(el => {
            el.classList.remove('preActive');
        });

        document.querySelectorAll('.chat-element.active').forEach(activeEl => {
            const prevElement = activeEl.previousElementSibling;

            if (prevElement) {
                prevElement.classList.add('preActive');
            }
        });
    },[chatSelected])

    const  handleChangeUserChat = (userChat) => {
        showUserChat(userChat);
    }

    return (
        <div id="chat-list">
            {
                recentChat && recentChat.map((chat, index) => (
                    <div className={`chat-element ${chatSelected === chat.chatId && "active"}`}
                         onClick={()=>{
                             setChatSelected(chat.chatId)
                             handleChangeUserChat(chat)
                         }}
                         key={index}
                    >
                        <div className="avatarAndStatus">
                            <Image src={chat.avatar} alt={chat.chatName}/>
                            <div
                                className={`status ${chat.status === 1 ? "on" : "off"}`}></div>
                        </div>
                        <div className="info">
                            <span className="name">{chat.chatName}</span>
                            <span className="content">{chat.newestMessage}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}