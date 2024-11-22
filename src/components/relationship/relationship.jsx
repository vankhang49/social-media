import avatar from "../../asset/images/my-avatar.png";
import styles from "./relationship.module.scss";
import {useState} from "react";
import sponsor1 from "../../asset/images/sponsors.jpg";
import sponsor2 from "../../asset/images/sponsorship.jpg";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {addChatBox} from "@/core/redux/actions/chatBoxAction";

export default function Relationship() {
    const sponsorCards = [
        {
            sponsorId: 1,
            sponsorName: "sponsor1",
            coverImage: sponsor1,
            content: "This is sponsor content"
        },
        {
            sponsorId: 2,
            sponsorName: "sponsor2",
            coverImage: sponsor2,
            content: "This is sponsor content"
        },
    ]

    const friends = [
        {
            friendId: 1,
            friendName: "Friend1",
            status: 1,
            avatar: avatar,
        },
        {
            friendId: 2,
            friendName: "Friend2",
            status: 1,
            avatar: avatar,
        },
        {
            friendId: 3,
            friendName: "Friend3",
            status: 1,
            avatar: avatar,
        },
        {
            friendId: 4,
            friendName: "Friend4",
            status: 1,
            avatar: avatar,
        },
        {
            friendId: 5,
            friendName: "Friend5",
            status: 1,
            avatar: avatar,
        },
        {
            friendId: 6,
            friendName: "Friend6",
            status: 1,
            avatar: avatar,
        },
        {
            friendId: 7,
            friendName: "Friend7",
            status: 0,
            avatar: avatar,
        },
        {
            friendId: 8,
            friendName: "Friend8",
            status: 0,
            avatar: avatar,
        },
        {
            friendId: 9,
            friendName: "Friend9",
            status: 0,
            avatar: avatar,
        },
        {
            friendId: 10,
            friendName: "Friend10",
            status: 0,
            avatar: avatar,
        },
    ]

    const groups = [
        {
            groupId: 1,
            groupName: "Group 1",
            avatar: avatar,
            status: 1,
        },
        {
            groupId: 2,
            groupName: "Group 2",
            avatar: avatar,
            status: 1,
        },
    ]

    const dispatch = useDispatch();

    const handleOpenChat = (id, name, avatar, status, type) => {
        dispatch(addChatBox({ id, name, avatar, status, type }));
    };

    return (
        <div id={'relationship'} className={styles.relationship}>
            <div className={styles.sponsor}>
                <p className={styles.sponsorTitle}>Sponsor</p>
                {sponsorCards.map((sponsor,index) => (
                    <div className={styles.sponsorCard} key={index}>
                        <div className={styles.sponsorImg}>
                            <Image src={sponsor.coverImage} alt="sponsor"/>
                        </div>
                        <div className={styles.sponsorInfo}>
                            <p className={styles.sponsorName}>{sponsor.sponsorName}</p>
                            <p className={styles.sponsorContent}>{sponsor.content}</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className={styles.groupAndFriends}>
                <div className={styles.friends}>
                    <p className={styles.title}>Friends</p>
                    <div className={styles.friendList}>
                        {friends.map((friend, index) => (
                            <div className={styles.friendCard}
                                 key={index}
                                 onClick={() => handleOpenChat(friend.friendId, friend.friendName, friend.avatar,
                                    friend.status, "friend")}
                            >
                                <div className={styles.avatarAndStatus}>
                                    <Image src={friend.avatar} alt={friend.friendName}/>
                                    <div
                                        className={`${styles.status} ${friend.status === 1 ? styles.on : styles.off}`}></div>
                                </div>
                                <div className={styles.friendInfo}>
                                    <p className={styles.friendName}>{friend.friendName}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className={styles.groups}>
                    <p className={styles.title}>Groups</p>
                    <div className={styles.groupList}>
                        {groups.map((group, index) => (
                            <div className={styles.groupCard}
                                 key={index}
                                 onClick={() => handleOpenChat(group.groupId, group.groupName, group.avatar,
                                     group.status,"group")}
                            >
                                <div className={styles.avatarAndStatus}>
                                    <Image src={group.avatar} alt={group.groupName}/>
                                    <div
                                        className={`${styles.status} ${group.status === 1 ? styles.on : styles.off}`}></div>
                                </div>
                                <div className={styles.groupInfo}>
                                    <p className={styles.friendName}>{group.groupName}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}