import logo from "@/asset/images/logo-social-media.png";
import Image from "next/image";
import "./MainHeader.scss";
import {FiMenu} from "react-icons/fi";
import styles from "@/components/sidebars/mainSidebar.module.scss";
import {CiLogout} from "react-icons/ci";
import {useRouter} from "next/router";
import {useState} from "react";
import avatar from "../../asset/images/my-avatar.png";
import {MdArrowDropDown} from "react-icons/md";
import {Searching} from "@/components/searching/Searching";

export function MainHeader({showSidebar}) {
    const router = useRouter();
    const authenticated = localStorage.getItem("isAuthenticated") === "authenticated";

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        router.push("/login").catch(console.error);
    }

    const handleShowSidebar = () => {
        showSidebar();
    }

    return(
        <div id="main-header">
            <div className="menu-button">
                <Image src={logo} alt={"logo"} onClick={()=>router.push('/')}></Image>
                <Searching className={'headUse'}/>
            </div>
            {authenticated ?
                <div className={'menuAction'}>
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