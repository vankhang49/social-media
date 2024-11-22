import Draggable from "react-draggable";
import Image from "next/image";
import avatar from "@/asset/images/my-avatar.png";
import hi from "@/asset/gifs/wow.gif";
import {useEffect, useState} from "react";
import postImg1 from "@/asset/images/dn1.jpg";
import postImg2 from "@/asset/images/dn2.jpg";
import postImg3 from "@/asset/images/dn3.jpg";
import postImg4 from "@/asset/images/dn4.jpg";
import audio1 from "@/asset/audios/Imagine-Dragons-Thunder-(RawPraise.ng).mp3";
import audio2 from "@/asset/audios/There’s No One At All.mp3";
import audio3 from "@/asset/audios/y2meta.com - Justin Bieber - Love Yourself (PURPOSE _ The Movement) (128 kbps).mp3";
import audio4 from "@/asset/audios/Once Upon A Time - Max Oazo ft. Moonessa.mp3";
import {TiAttachment, TiMicrophone} from "react-icons/ti";
import {RiEmotionHappyFill} from "react-icons/ri";
import {AiFillLike} from "react-icons/ai";
import {IoMdClose} from "react-icons/io";
import {VscChromeMinimize} from "react-icons/vsc";

const chatData = [
    {
        senderId: 1,
        avatar: avatar,
        receiverId: 2,
        content: "How can i help you?",
        images: null,
        videos: null,
        icons: null,
        audios: null,
    },
    {
        senderId: 2,
        avatar: avatar,
        receiverId: 1,
        content: "I want you to be my friend",
        images: null,
        videos: null,
        icons: null,
        audios: null,
    },
    {
        senderId: 1,
        avatar: avatar,
        receiverId: 2,
        content: "Really",
        images: null,
        videos: null,
        icons: null,
        audios: null,
    },
    {
        senderId: 1,
        avatar: avatar,
        receiverId: 2,
        content: null,
        images: null,
        videos: null,
        icons: [hi],
        audios: null,
    },
    {
        senderId: 1,
        avatar: avatar,
        receiverId: 2,
        content: null,
        images: [postImg1, postImg2, postImg3],
        videos: null,
        icons: null,
        audios: null,
    },
    {
        senderId: 2,
        avatar: avatar,
        receiverId: 1,
        content: null,
        images: [postImg4],
        videos: null,
        icons: null,
        audios: null,
    },
    {
        senderId: 1,
        avatar: avatar,
        receiverId: 2,
        content: null,
        images: null,
        videos: null,
        icons: null,
        audios: [audio1],
    },
    {
        senderId: 2,
        avatar: avatar,
        receiverId: 1,
        content: null,
        images: null,
        videos: null,
        icons: null,
        audios: [audio2],
    },
    {
        senderId: 1,
        avatar: avatar,
        receiverId: 2,
        content: null,
        images: null,
        videos: null,
        icons: null,
        audios: [audio3],
    },
    {
        senderId: 2,
        avatar: avatar,
        receiverId: 1,
        content: null,
        images: null,
        videos: null,
        icons: null,
        audios: [audio4],
    },
];

const ChatBox = ({ data, onClose, isMinimized, positionIndex, updatePosition }) => {
    const [userId, setUserId] = useState(null);
    const [minimize, setMinimize] = useState(isMinimized);
    const [position, setPosition] = useState({bottom: 0});

    useEffect(() => {
        const id = parseInt(localStorage.getItem("userId"));
        setUserId(id);
    },[])

    useEffect(() => {
        console.log(positionIndex)
        if (minimize) {
            setPosition(positionIndex)
        }
    }, [minimize]);

    const handleMinimize = () => {
        setMinimize(!minimize);
    };

    return (
        <Draggable>
            <div className={`chat-box ${minimize ? 'minimize' : ''}`}
                 style={{
                     position: minimize ? "fixed" : "relative",
                     bottom: minimize ? `${position.bottom}px` : "0",
                     right: minimize ? `20px` : "0",
                     width: minimize ? "60px" : "300px",
                     height: minimize ? "60px" : "400px",
                     zIndex: minimize ? 1000 : 1,
                 }}
                 onClick={minimize ? handleMinimize : null}
            >
                <div className="chat-header">
                    <div className="avatarAndStatus">
                        <Image src={data.avatar} alt={data.name}/>
                        <div
                            className={`status ${data.status === 1 ? "on" : "off"}`}></div>
                    </div>
                    <div className="info">
                        <span className="name">{data.name}</span>
                    </div>
                    <button className={'minimize-action'} onClick={() => { handleMinimize(); updatePosition();}}
                    ><VscChromeMinimize /></button>
                    <button className={'close-action'} onClick={onClose}><IoMdClose /></button>
                </div>
                <div className="chat-body">
                    {
                        chatData.map((item, index) => (
                            <div className={`chat-element ${item.senderId === userId ? "sender" : "receiver"}`} key={index}>
                                {item.videos && item.videos.map((video, index) => (
                                    <video src={video} key={index} controls={true} muted />
                                ))}
                                {item.images && item.images.map((image, index) => (
                                    <Image src={image} key={index} alt={item.senderId}/>
                                ))}
                                {item.audios && item.audios.map((audio, index) => (
                                    <audio src={audio} key={index} autoPlay={false} controls={true}/>
                                ))}
                                {item.icons && item.icons.map((icon, index) => (
                                    <Image src={icon} key={index} className={'icon'} alt={item.senderId}/>
                                ))}
                                { item.content &&
                                    <p>{item.content}</p>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="chat-footer">
                    <button className={'chat-action'}>
                        <TiMicrophone/>
                    </button>
                    <button className={'chat-action'}>
                        <TiAttachment/>
                    </button>
                    <form className={'form-chat'}>
                        <input type="text" placeholder={"Aa"}/>
                        <RiEmotionHappyFill className={'chat-emotion'}/>
                    </form>
                    <button className={'chat-action'}>
                        <AiFillLike/>
                    </button>
                </div>
            </div>
        </Draggable>
    );
};

export default ChatBox;