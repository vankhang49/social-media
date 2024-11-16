import Image from 'next/image';
import styles from "./mainSidebar.module.scss";
import avatar from "../../asset/images/my-avatar.png";
import {IoHomeOutline} from "react-icons/io5";
import {FiEdit2, FiSend} from "react-icons/fi";
import {FaMoon, FaRegHeart} from "react-icons/fa";
import {SlLocationPin} from "react-icons/sl";
import {LuSettings} from "react-icons/lu";
import Link from "next/link";
import {useRouter} from "next/router";
import {CiLogout} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";
import {useEffect, useState} from "react";

export default function Sidebar({isOpen, className}) {
    const router = useRouter();
    const [showSettings, setShowSettings] = useState(false);
    const [isShowSidebar, setIsShowSidebar] = useState(isOpen);

    useEffect(() => {
        setIsShowSidebar(isOpen);
    },[isOpen]);

    const handleLogout = () => {
       localStorage.removeItem("isAuthenticated");
       router.push("/login").catch(console.error);
    }
    const handleShowSettings = () => {
        setShowSettings(!showSettings);
    }

    const handleChangeDarkMode = () => {
        document.body.classList.toggle('dark-mode-variables');
    }

    return (
        <aside id="mainSidebar" className={`${styles.mainSidebar} ${isShowSidebar && styles.showSidebar}
        ${className==='private'? styles.private : ''}`}>
            <div className={styles.personalBox}>
                <Link href={'/personal/article'} className={styles.avatar}>
                    <Image src={avatar} alt="avatar"/>
                </Link>
                <div className={styles.info}>
                    <h3>Văn Khang</h3>
                </div>
            </div>
            <div className={styles.menuTask}>
                <h4>MENUS</h4>
                <ul>
                    <li className={styles.active}><Link href={'#'}><IoHomeOutline /> <span>Newsfeed</span></Link></li>
                    <li><Link href={'/'}><FiSend /> <span>Messages</span></Link></li>
                    <li><Link href={'/about'}><FaRegHeart /> <span>Notifications</span></Link></li>
                    <li><Link href={'/blog'}><SlLocationPin /> <span>Locations</span></Link></li>
                    <li><Link href={'/login'}><FiEdit2 /> <span>Privecy</span></Link></li>
                    <li className={styles.settings} onClick={handleShowSettings}>
                        <a><LuSettings/> <span>Settings</span></a>
                        <ul className={`${styles.settingMenu} ${showSettings === true && styles.activeSetting}`}>
                            <li>Settings & privacy <IoIosArrowForward className={styles.arrowAction}/></li>
                            <li onClick={handleChangeDarkMode}>
                                <FaMoon/>Screen & accessibility <IoIosArrowForward className={styles.arrowAction}/>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={styles.logout} onClick={handleLogout}>
                    <a><CiLogout /><span>Log out</span></a>
                </div>
            </div>
        </aside>
    );
}