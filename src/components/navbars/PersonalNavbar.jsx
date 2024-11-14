import styles from "./PersonalNavbar.module.scss";
import Link from "next/link";
import {MdOutlineArrowDropDown} from "react-icons/md";
import {BsThreeDots} from "react-icons/bs";

export function PersonalNavbar() {

    return (
        <div className={styles.personalNavbar}>
            <ul className={styles.listFunction}>
                <li><Link className={styles.activeLink} href={"#"}>Bài viết</Link></li>
                <li><Link href={"#"}>Giới thiệu</Link></li>
                <li><Link href={"#"}>Bạn bè</Link></li>
                <li><Link href={"#"}>Ảnh</Link></li>
                <li><Link href={"#"}>Video</Link></li>
                <li><Link href={"#"}>Check in</Link></li>
                <li>Xem thêm <MdOutlineArrowDropDown /></li>
            </ul>
            <div className={styles.menuSetting}><BsThreeDots /></div>
        </div>
    );
}