import Image from "next/image";
import logo from "@/asset/images/logo-social-media.png";
import {FaUserFriends} from "react-icons/fa";
import {HiUserGroup} from "react-icons/hi";
import "./MessageSidebar.scss";
import {useRouter} from "next/router";

export default function MessageSidebar() {
    const router = useRouter();

    return (
        <div id="message-sidebar">
            <div className="back-home">
                <Image src={logo} alt={"logo"} onClick={() => router.push('/')}></Image>
            </div>
            <div className="menu-messages">
                <div className="menu-element">
                    <button type={'button'} className={'menu-button friends'}><FaUserFriends/></button>
                    <span>Friends</span>
                </div>
                <div className="menu-element">
                    <button type={'button'} className={'menu-button groups'}><HiUserGroup/> </button>
                    <span>Groups</span>
                </div>

            </div>
        </div>
    );
}