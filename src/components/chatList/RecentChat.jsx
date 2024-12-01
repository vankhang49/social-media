import avatar from "@/asset/images/my-avatar.png";
import Image from "next/image";
import "./RecentChat.scss";
import {useRef} from "react";

export default function RecentChat({showUserChat}) {

    const recentChat = [
        {
            chatId: 1,
            chatName: "Friend1",
            status: 1,
            avatar: avatar,
        },
        {
            chatId: 2,
            chatName: "Friend2",
            status: 1,
            avatar: avatar,
        },
        {
            chatId: 3,
            chatName: "Group 1",
            avatar: avatar,
            status: 1,
        },
        {
            chatId: 4,
            chatName: "Friend3",
            status: 1,
            avatar: avatar,
        },
        {
            chatId: 5,
            chatName: "Friend4",
            status: 1,
            avatar: avatar,
        },
        {
            chatId: 6,
            chatName: "Friend5",
            status: 1,
            avatar: avatar,
        },
        {
            chatId: 7,
            chatName: "Friend6",
            status: 1,
            avatar: avatar,
        },
        {
            chatId: 8,
            chatName: "Friend7",
            status: 0,
            avatar: avatar,
        },
        {
            chatId: 9,
            chatName: "Group 2",
            avatar: avatar,
            status: 1,
        },
    ]


    const listRef = useRef(null); // Tham chiếu đến recent-list
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.pageX - listRef.current.offsetLeft; // Lấy tọa độ X
        scrollLeft = listRef.current.scrollLeft; // Lấy vị trí cuộn hiện tại
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return; // Nếu không kéo, thoát
        e.preventDefault();
        const x = e.pageX - listRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Tăng tốc kéo
        listRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false; // Dừng kéo
    };

    const  handleChangeUserChat = (userChat) => {
        showUserChat(userChat);
    }


    return (
        <div id="recent-chat">
            <h3>Recent Chat</h3>
            <div className="recent-list"
                 ref={listRef}
                 onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUpOrLeave}
                 onMouseLeave={handleMouseUpOrLeave}
            >
                { recentChat && recentChat.map((chat, index) => (
                    <div className="chat-represent" key={index} onClick={()=>handleChangeUserChat(chat)}>
                        <Image src={chat.avatar} alt={chat.chatName}/>
                        <div className={`status ${chat.status === 1 ? 'on' : 'off'}`}></div>
                    </div>
                ))}
            </div>

        </div>
    );
}