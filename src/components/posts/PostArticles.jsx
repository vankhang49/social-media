import "./PostArticles.scss";
import Image from "next/image";
import avatar from "../../asset/images/my-avatar.png";
import {FaImages} from "react-icons/fa";
import {IoIosVideocam} from "react-icons/io";
import {MdEmojiEmotions} from "react-icons/md";

export function PostArticles() {

    return (
        <div id="post-article">
            <div className="input-box">
                <div className="avatar">
                    <Image src={avatar} alt="avatar"/>
                </div>
                <div className="input-element">
                    <input type="text" placeholder="Bạn đang nghĩ gì?"/>
                </div>
            </div>
            <div className="post-image-video-emotion">
                <div className="post-image">
                    <FaImages fill={'blue'}/>
                    <span>Hình ảnh</span>
                </div>
                <div className="post-video">
                    <IoIosVideocam fill={'green'}/>
                    <span>Video</span>
                </div>
                <div className="post-emotion">
                    <MdEmojiEmotions fill={'yellow'}/>
                    <span>Cảm xúc</span>
                </div>
            </div>
        </div>
    );
}