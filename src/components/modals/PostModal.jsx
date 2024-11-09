import styles from "./PostModal.module.scss";
import Image from "next/image";
import Link from "next/link";
import {MdPublic} from "react-icons/md";
import {CiLock} from "react-icons/ci";
import {FaImages, FaRegComment, FaUserFriends} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";
import {IoCloseOutline} from "react-icons/io5";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {IoMdShareAlt} from "react-icons/io";
import {useEffect, useState} from "react";
import {usePictures} from "@/core/contexts/ModalPicturesContext";


export const PostModal = ({post, isOpen, onClose}) => {
    const [postElement, setPostElement] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const {
        changePictures,
        changeIndex,
        toggleIsOpenModal,
    } = usePictures();

    useEffect(() => {
        if (post !== undefined) {
            setPostElement(post)
            setOpenModal(isOpen)
        }
    },[isOpen, post])

    useEffect(() => {
        if (isOpen) {
            const handleClickOutside = (event) => {
                const modalContent = document.getElementById("postCard");
                if (modalContent && !modalContent.contains(event.target)) {
                    setOpenModal(false);
                    onClose();
                }
            };

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isOpen, onClose]);

    const handleOpenPictureModal = (indexImage) => {
        changePictures(postElement.postImages);
        changeIndex(indexImage);
        toggleIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
        onClose();
    }

    return (
        <div className={`${styles.postModal} ${isOpen ? styles.open : ''}`}>
            {postElement &&
                <div className={styles.postCard} id='postCard'>
                    <div className={styles.postFixed}>
                        <h3>Bài viết của {postElement.author.friendName}</h3>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.postHeader}>
                            <div className={styles.avatar}>
                                <Image src={postElement.author.avatar} alt={postElement.author.friendName}/>
                            </div>
                            <div className={styles.authorInfo}>
                                <Link className={styles.author} href={"#"}>{postElement.author.friendName}
                                    <span className={styles.postMode}>
                                    {
                                        postElement.mode === 'public' ? <MdPublic/>
                                            : postElement.mode === 'private' ? <CiLock/>
                                                : <FaUserFriends/>
                                    }
                                </span>
                                </Link>
                                <p className={styles.postDate}>{(postElement.dateCreate)}</p>
                            </div>
                            <div className={styles.action}>
                                <button className={styles.option}><BsThreeDots/></button>
                                <button className={styles.closePost} onClick={handleCloseModal}><IoCloseOutline/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.postContent}>
                            <p>{postElement.content}</p>
                        </div>
                        <div className={styles.listImages}>
                            <div className={`${styles.mainImage} 
                        ${postElement.postImages.length === 1 ? `${styles.fullSize}`
                                : postElement.postImages.length === 2 ? `${styles.half}` : ''}`}>
                                <Image src={postElement.postImages[0]} alt={`img1`}
                                       onClick={() => handleOpenPictureModal(0)}/>
                            </div>
                            {
                                postElement.postImages.length > 1 &&
                                <div className={styles.childImages}>
                                    <Image
                                        className={`${styles.imgSecond}  ${postElement.postImages.length === 2 ? `${styles.half}` : ''}`}
                                        onClick={() => handleOpenPictureModal(1)}
                                        src={postElement.postImages[1]} alt={`img2`}/>
                                    {postElement.postImages.length > 2 &&
                                        <Image className={styles.imgThird} onClick={() => handleOpenPictureModal(2)}
                                               src={postElement?.postImages[2]} alt={`img3`}/>
                                    }
                                    {postElement.postImages.length > 3 &&
                                        <div className={styles.showMore}>
                                            <FaImages/> {postElement.postImages.length - 3}+
                                        </div>
                                    }
                                </div>
                            }
                        </div>

                        <div className={styles.likeComments}>
                        <span className={styles.totalEmotion}>
                                {postElement.likes > 0 && <AiOutlineLike />}
                            {postElement.dislikes > 0 && <AiOutlineDislike style={{marginRight: 5}}/>}
                            {(postElement.likes || 0) + (postElement.dislikes || 0)}
                        </span>
                            <div className={styles.commentShare}>
                                <span>{postElement.comments.length} Bình luận</span>
                                <span>{postElement.share} lượt chia sẻ</span>
                            </div>
                        </div>
                        <div className={styles.commentAction}>
                            <div className={styles.emotion}>
                                <AiOutlineLike/>
                                <span>Like</span>
                            </div>
                            <div className={styles.comment}>
                                <FaRegComment/>
                                <span>Comment</span>
                            </div>
                            <div className={styles.share}>
                                <IoMdShareAlt/>
                                <span>Share</span>
                            </div>
                        </div>
                        <div className={styles.commentBox}>
                            {
                                postElement && postElement.comments.map(comment => (
                                    <>
                                        <div className={styles.commentElement} key={comment.commentId}>
                                            <div className={styles.avatarAuthor}>
                                                <Image src={comment.author.avatar} alt={comment.author.friendName}/>
                                            </div>
                                            <div className={styles.commentContent}>
                                                <p className={styles.authorName}>{comment.author.friendName}</p>
                                                <p className={styles.content}>{comment.content}</p>
                                            </div>
                                        </div>
                                        <div className={styles.commentImpact}>
                                            <span className={styles.commentCreate}>{comment.dateCreate}</span>
                                            <span className={styles.likeComment}>Thích</span>
                                            <span className={styles.repplyComment}>Phản hồi</span>
                                            <span className={styles.shareComment}>Chia sẻ</span>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}