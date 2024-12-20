import logo from "@/asset/images/logo-social-media.png";
import Image from "next/image";
import "./MainHeader.scss";
import {CiLogout} from "react-icons/ci";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import avatar from "../../asset/images/my-avatar.png";
import {MdArrowDropDown} from "react-icons/md";
import {Searching} from "@/components/searching/Searching";
import {BiSolidMessageRoundedError} from "react-icons/bi";
import {IoNotifications} from "react-icons/io5";

export function MainHeader({showSidebar, showNotification}) {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("isAuthenticated") === "authenticated";
        setAuthenticated(auth);
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        router.push("/login").catch(console.error);
    }

    const handleShowSidebar = () => {
        showSidebar();
    }

    const handleShowNotification = () => {
        showNotification();
    }

    return(
        <div id="main-header">
            <div className="menu-button">
                <Image src={logo} alt={"logo"} onClick={()=>router.push('/')}></Image>
                <Searching className={'headUse'}/>
            </div>
            {authenticated ?
                <div className={'menuAction'}>
                    <div className="new-message">
                        <BiSolidMessageRoundedError />
                    </div>
                    <div className="notification" onClick={handleShowNotification}>
                        <IoNotifications />
                    </div>
                    <div className="avatar" onClick={handleShowSidebar}>
                        <Image src={avatar} alt={'avatar'}/>
                        <MdArrowDropDown />
                    </div>
                </div>
                :
                <div className={'logout'} onClick={handleLogout}>
                    <a><CiLogout/>Log out</a>
                </div>
            }

        </div>
    );
}