import Image from 'next/image';
import styles from "./mainSidebar.module.scss";
import avatar from "../../asset/images/my-avatar.png";
import {IoHomeOutline} from "react-icons/io5";
import {FiEdit2, FiSend} from "react-icons/fi";
import {FaRegHeart} from "react-icons/fa";
import {SlLocationPin} from "react-icons/sl";
import {LuSettings} from "react-icons/lu";
import Link from "next/link";
import {useRouter} from "next/router";
import {CiLogout} from "react-icons/ci";

export default function Sidebar(props) {
    const router = useRouter();

    const handleLogout = () => {
       localStorage.removeItem("isAuthenticated");
       router.push("/login");
    }
    return (
        <aside id="mainSidebar" className={styles.mainSidebar}>
            <div className={styles.personalBox}>
                <div className={styles.avatar}>
                    <Image src={avatar} alt="avatar"/>
                </div>
                <div className={styles.info}>
                    <h3>Văn Khang</h3>
                    <button>Contact Me</button>
                </div>
            </div>
            <div className={styles.menuTask}>
                <h4>MENUS</h4>
                <ul>
                    <li className={styles.active}><Link href={'#'}><IoHomeOutline /> Newsfeed</Link></li>
                    <li><Link href={'/'}><FiSend /> Messages</Link></li>
                    <li><Link href={'/about'}><FaRegHeart /> Notifications</Link></li>
                    <li><Link href={'/blog'}><SlLocationPin /> Locations</Link></li>
                    <li><Link href={'/login'}><FiEdit2 /> Privecy</Link></li>
                    <li><Link href={'#'}><LuSettings /> Settings</Link></li>
                </ul>
                <div className={styles.logout} onClick={handleLogout}>
                    <a><CiLogout />Log out</a>
                </div>
            </div>
        </aside>
    );
}