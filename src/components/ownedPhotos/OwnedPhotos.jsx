import styles from "./OwnedPhotos.module.scss";
import Link from "next/link";
import Image from 'next/image';

import avatar from "@/asset/images/my-avatar.png";
import postImg1 from "@/asset/images/dn1.jpg";
import postImg2 from "@/asset/images/dn2.jpg";
import postImg3 from "@/asset/images/dn3.jpg";
import postImg4 from "@/asset/images/dn4.jpg";
import postImg5 from "@/asset/images/dn5.jpg";
import postImg6 from "@/asset/images/dn6.jpg";
import {usePictures} from "@/core/contexts/ModalPicturesContext";

const imgList = [avatar, postImg1, postImg2, postImg3, postImg4, postImg5, postImg6, postImg1, postImg2];
export function OwnedPhotos() {
    const {
        changePictures,
        changeIndex,
        toggleIsOpenModal,
    } = usePictures();

    const handleOpenPictureModal = (indexImage) => {
        changePictures(imgList);
        changeIndex(indexImage);
        toggleIsOpenModal(true);
    }
    return (
        <div className={styles.ownedPhotos}>
            <div className={styles.head}>
                <h2>Ảnh</h2>
                <Link href={"#"}>Xem tất cả ảnh</Link>
            </div>

            <div className={styles.ListImages}>
                {
                    imgList.map((item, index) => (
                        <Image src={item} alt={'yourAvatar'} key={index} onClick={() => handleOpenPictureModal(index)}/>
                    ))
                }
            </div>
        </div>
    );
}