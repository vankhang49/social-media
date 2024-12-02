import {useEffect, useState} from "react";
import avatar from "../../asset/images/my-avatar.png";
import "./NotificationModal.scss";
import Image from "next/image";

export const NotificationModal = ({isOpen, onClose}) => {
    const notificationList = [
        {
            notificationId: 1,
            sender: {
                senderId: 1,
                senderName: "Friend1",
                avatar: avatar,
            },
            content: "Friend 1 has just joined the group"
        },
        {
            notificationId: 2,
            sender: {
                senderId: 2,
                senderName: "Friend2",
                avatar: avatar,
            },
            content: "Friend 2 has just joined the group"
        },
        {
            notificationId: 3,
            sender: {
                senderId: 3,
                senderName: "Friend3",
                avatar: avatar,
            },
            content: "Friend 3 sent a friend request"
        },
        {
            notificationId:4,
            sender: {
                senderId: 4,
                senderName: "Friend4",
                avatar: avatar,
            },
            content: "Friend 4 sent a friend request"
        },
        {
            notificationId: 5,
            sender: {
                senderId: 5,
                senderName: "Friend3",
                avatar: avatar,
            },
            content: "Friend 5 sent a friend request"
        },
        {
            notificationId: 6,
            sender: {
                senderId: 6,
                senderName: "Friend6",
                avatar: avatar,
            },
            content: "Friend 6 sent a friend request"
        },
    ]

    const [openModal, setOpenModal] = useState(false);
    const [numberSelect, setNumberSelect] = useState(1);

    useEffect(() => {
        setOpenModal(isOpen)
    },[isOpen])

    useEffect(() => {
        if (isOpen) {
            const handleClickOutside = (event) => {
                const modalContent = document.getElementById("notification-modal");
                if (modalContent && !modalContent.contains(event.target)) {
                    setOpenModal(false);
                    onClose();
                }
            };

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isOpen, onClose]);

    return (
        <div id="notification-modal" className={openModal ? 'open' : ''}>
            <h2>Notification</h2>
            <div className="select-show">
                <button type={'button'}
                        className={`button-select ${numberSelect === 1 && 'active'}`}
                        onClick={()=>setNumberSelect(1)}
                >
                    Show All
                </button>
                <button type={'button'}
                        className={`button-select ${numberSelect === 2 && 'active'}`}
                        onClick={()=>setNumberSelect(2)}
                >
                    Not Read Yet
                </button>
            </div>

            <div className="notification-list">
                {
                    notificationList.map((notification, index) => (
                        <div className="notification-card" key={index}>
                            <div className="avatar">
                                <Image src={notification.sender.avatar} alt={notification.sender.senderName}/>
                            </div>
                            <div className="info">
                                <span className="name">{notification.sender.senderName}</span>
                                <span className="content">{notification.content}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}