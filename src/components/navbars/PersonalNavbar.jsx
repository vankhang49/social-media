import styles from "./PersonalNavbar.module.scss";
import Link from "next/link";
import {MdOutlineArrowDropDown} from "react-icons/md";
import {BsThreeDots} from "react-icons/bs";

export function PersonalNavbar() {

    return (
        <div className={styles.personalNavbar}>
            <ul className={styles.listFunction}>
                <li className={styles.posts}><Link className={styles.activeLink} href={"#"}>Bài viết</Link></li>
                <li className={styles.intro}><Link href={"#"}>Giới thiệu</Link></li>
                <li className={styles.friends}><Link href={"#"}>Bạn bè</Link></li>
                <li className={styles.images}><Link href={"#"}>Ảnh</Link></li>
                <li className={styles.videos}><Link href={"#"}>Video</Link></li>
                <li className={styles.checkin}><Link href={"#"}>Check in</Link></li>
                <li>Xem thêm <MdOutlineArrowDropDown /></li>
            </ul>
            <div className={styles.menuSetting}>
                <button type={'button'}><BsThreeDots /></button>
            </div>
        </div>
    );
}