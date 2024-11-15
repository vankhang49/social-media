import styles from "./OwnedFriends.module.scss";
import Link from "next/link";
import Image from 'next/image';

import avatar from "@/asset/images/my-avatar.png";
import postImg1 from "@/asset/images/dn1.jpg";
import postImg2 from "@/asset/images/dn2.jpg";
import postImg3 from "@/asset/images/dn3.jpg";
import postImg4 from "@/asset/images/dn4.jpg";
import postImg5 from "@/asset/images/dn5.jpg";
import postImg6 from "@/asset/images/dn6.jpg";

const imgList = [avatar, postImg1, postImg2, postImg3, postImg4, postImg5, postImg6, postImg1, postImg2];
export function OwnedFriends() {
    return (
        <div className={styles.ownedFriends}>
            <div className={styles.head}>
                <h2>Bạn bè</h2>
                <Link href={"#"}>Xem tất cả bạn bè</Link>
            </div>
            <p>123 người bạn</p>
            <div className={styles.ListFriends}>
                {
                    imgList.map((item, index) => (
                        <div className={styles.friend} key={index}>
                            <Image src={item} alt={'yourAvatar'} key={index}/>
                            <p>Người bạn {index + 1}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}