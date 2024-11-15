import styles from "./PersonalHeader.module.scss";
import coverImg from "@/asset/images/dn1.jpg";
import avatar from "@/asset/images/my-avatar.png";
import Image from "next/image";
import {RiCameraSwitchLine} from "react-icons/ri";
import {FaPlus} from "react-icons/fa";
import {MdEdit} from "react-icons/md";
import {posts} from "@/data";
import {usePictures} from "@/core/contexts/ModalPicturesContext";

const listFriends = [
    {
        friendId: 1,
        friendName: 'friend1',
        avatar: avatar,
    },
    {
        friendId: 2,
        friendName: 'friend2',
        avatar: avatar,
    },
    {
        friendId: 3,
        friendName: 'friend3',
        avatar: avatar,
    },
    {
        friendId: 4,
        friendName: 'friend4',
        avatar: avatar,
    },
    {
        friendId: 5,
        friendName: "friend5",
        avatar: avatar,
    }
]
export function PersonalHeader() {
    const {
        changePictures,
        changeIndex,
        toggleIsOpenModal,
    } = usePictures();

    const handleOpenPictureModal = (listImages) => {
        changePictures(listImages);
        changeIndex(0);
        toggleIsOpenModal(true);
    }

    return (
        <div className={styles.personalHeader}>
            <div className={styles.coverImage}>
                <Image src={coverImg} alt={'coverImage'} onClick={()=> handleOpenPictureModal([coverImg])}/>
                <button className={styles.changeCoverImg} type={'button'}><RiCameraSwitchLine /></button>
            </div>
            <div className={styles.basicInfo}>
                <div className={styles.avatar}>
                    <Image src={avatar} alt={avatar} onClick={()=> handleOpenPictureModal([avatar])}/>
                    <button className={styles.changeAvatar} type={'button'}><RiCameraSwitchLine/></button>
                </div>
                <div className={styles.info}>
                    <h1>Văn Khang</h1>
                    <p>123 người bạn</p>
                    <div className={styles.friendList}>
                        {
                            listFriends && listFriends.map(friend => (
                                <Image src={friend.avatar} alt={friend.friendName}
                                       key={friend.friendId}/>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.editProfile}>
                    <button className={styles.postNew}><FaPlus /> Thêm vào tin</button>
                    <button className={styles.editInfo}><MdEdit /> Chỉnh sửa trang cá nhân</button>
                </div>
            </div>
        </div>
    );
}