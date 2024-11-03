import logo from "@/asset/images/logo-social-media.png";
import Image from "next/image";
import "./MainHeader.scss";
import {FiMenu} from "react-icons/fi";
import styles from "@/components/sidebars/mainSidebar.module.scss";
import {CiLogout} from "react-icons/ci";
import {useRouter} from "next/router";

export function MainHeader() {

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        router.push("/login").catch(console.error);
    }

    return(
        <div id="main-header">
            <div className="menu-button">
                <button type={"button"}><FiMenu/></button>
            </div>
            <div className="logo">
                <Image src={logo} alt={"logo"}></Image>
            </div>
            <div className={'logout'} onClick={handleLogout}>
                <a><CiLogout/>Log out</a>
            </div>
        </div>
    );
}