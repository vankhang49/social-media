import avatar from "@/asset/images/my-avatar.png";
import hi from "@/asset/gifs/wow.gif";
import postImg1 from "@/asset/images/dn1.jpg";
import postImg2 from "@/asset/images/dn2.jpg";
import postImg3 from "@/asset/images/dn3.jpg";
import postImg4 from "@/asset/images/dn4.jpg";
import audio1 from "@/asset/audios/Imagine-Dragons-Thunder-(RawPraise.ng).mp3";
import audio2 from "@/asset/audios/There’s No One At All.mp3";
import audio3 from "@/asset/audios/y2meta.com - Justin Bieber - Love Yourself (PURPOSE _ The Movement) (128 kbps).mp3";
import audio4 from "@/asset/audios/Once Upon A Time - Max Oazo ft. Moonessa.mp3";
import Image from "next/image";
import "./ChatContent.scss";
import {AudioWave} from "@/components/audioWave/AudioWave";
import {TiAttachment, TiMicrophone} from "react-icons/ti";
import {RiEmotionHappyFill} from "react-icons/ri";
import {AiFillLike} from "react-icons/ai";
import {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {BsThreeDotsVertical} from "react-icons/bs";

export default function ChatContent({data}) {
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

    const [userId, setUserId] = useState(null);
    const [userChat, setUserChat] = useState(null);
    const chatBodyRef = useRef(null);
    const [chatList, setChatList] = useState(chatData);
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
        control,
        reset
    } = useForm({});

    useEffect(() => {
        const id = parseInt(localStorage.getItem("userId"));
        setUserId(id);
    }, [])

    useEffect(()=> {
        setUserChat(data)
    }, [data])

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [chatList]);


    const onSubmit = (data) => {
        try {
            const chatElement = {
                senderId: 1,
                avatar: avatar,
                receiverId: 2,
                content: data.content,
                images: null,
                videos: null,
                icons: null,
                audios: null,
            };
            setChatList(prevState => [...prevState, chatElement]);
            reset();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div id="chat-content">
            <div className="chat-header">
                <div className="avatarAndStatus">
                    <Image src={userChat?.avatar} alt={userChat?.chatName}/>
                    <div
                        className={`status ${userChat?.status === 1 ? "on" : "off"}`}></div>
                </div>
                <div className="info">
                    <span className="name">{userChat?.chatName}</span>
                </div>
                <button className={'option-action'}><BsThreeDotsVertical /></button>
            </div>
            <div className="chat-body" ref={chatBodyRef}>
            {
                    chatList && chatList.map((item, index) => (
                        <div className={`chat-element ${item.senderId === userId ? "sender" : "receiver"}`} key={index}>
                            {item.videos && item.videos.map((video, index) => (
                                <video src={video} key={index} controls={true} muted/>
                            ))}
                            {item.images && item.images.map((image, index) => (
                                <Image src={image} key={index} alt={item.senderId}/>
                            ))}
                            {item.audios && item.audios.map((audio, index) => (
                                <AudioWave audio={audio} key={index}
                                           className={item.senderId === userId ? "sender" : "receiver"}/>
                            ))}
                            {item.icons && item.icons.map((icon, index) => (
                                <Image src={icon} key={index} className={'icon'} alt={item.senderId}/>
                            ))}
                            {item.content &&
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
                <form className={'form-chat'} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                           {...register("content", {
                               required: "Không được để trống!"
                           })}
                           placeholder={"Aa"}/>
                    <RiEmotionHappyFill className={'chat-emotion'}/>
                </form>
                <button className={'chat-action'}>
                    <AiFillLike/>
                </button>
            </div>
        </div>
    );
}