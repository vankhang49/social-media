import {Searching} from "@/components/searching/Searching";
import {BiSolidMessageRoundedError} from "react-icons/bi";
import {IoNotifications} from "react-icons/io5";
import Image from "next/image";
import avatar from "@/asset/images/my-avatar.png";
import {MdArrowDropDown} from "react-icons/md";
import "./MessageHeader.scss";

export function MessageHeader({showSidebar}) {

    const handleShowSidebar = () => {
        showSidebar();
    }
    return (
        <div id="message-header">
            <h2>Talk To Me</h2>
            <div className="search-action">
                <Searching className={'headUse'}/>
            </div>
            <div className={'menuAction'}>
                <div className="new-message">
                    <BiSolidMessageRoundedError/>
                </div>
                <div className="notification">
                    <IoNotifications/>
                </div>
                <div className="avatar" onClick={handleShowSidebar}>
                    <Image src={avatar} alt={'avatar'}/>
                    <MdArrowDropDown/>
                </div>
            </div>
        </div>
    );
}