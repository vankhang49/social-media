import "./posts.scss";
import {posts} from "@/data";
import Image from "next/image";
import {BsThreeDots} from "react-icons/bs";
import {IoCloseOutline} from "react-icons/io5";
import {MdPublic} from "react-icons/md";
import {CiLock} from "react-icons/ci";
import {FaImages, FaRegComment, FaUserFriends} from "react-icons/fa";
import {usePictures} from "@/core/contexts/ModalPicturesContext";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import Link from "next/link";
import {IoMdShareAlt} from "react-icons/io";
import {PostModal} from "@/components/modals/PostModal";
import {useState} from "react";

export default function Posts() {
    const {
        changePictures,
        changeIndex,
        toggleIsOpenModal,
    } = usePictures();
    const [isOpenPostModal, setIsOpenPostModal] = useState(false);
    const [post, setPost] = useState(null);

    const handleOpenPictureModal = (indexPost, indexImage) => {
        changePictures(posts[indexPost].postImages);
        changeIndex(indexImage);
        toggleIsOpenModal(true);
    }

    const handleOpenPostModal = (post) => {
        setPost(post);
        setIsOpenPostModal(true);
    }
    const handleClosePostModal = () => {
        setIsOpenPostModal(false);
    }

    return (
        <div id="post">
            {posts.map((post, index) => (
                <div className="post-card" key={index}>
                    <div className="post-header">
                        <div className="avatar">
                            <Image src={post.author.avatar} alt={post.author.friendName}/>
                        </div>
                        <div className="author-info">
                            <Link className='author' href={"#"}>{post.author.friendName}
                                <span className='post-mode'>
                                    {
                                        post.mode === 'public' ? <MdPublic/>
                                            : post.mode === 'private' ? <CiLock/>
                                                : <FaUserFriends/>
                                    }
                                </span>
                            </Link>
                            <p className='post-date'>{(post.dateCreate)}</p>
                        </div>
                        <div className="action">
                            <button className='option'><BsThreeDots/></button>
                            <button className='close-post'><IoCloseOutline/></button>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{post.content}</p>
                    </div>
                    <div className="listImages">
                        <div className={`mainImage 
                        ${post.postImages.length === 1 ? 'full-size'
                            : post.postImages.length === 2 ? 'half' : ''}`}>
                            <Image src={post.postImages[0]} alt={`img1`} onClick={() => handleOpenPictureModal(index, 0)}/>
                        </div>
                        {
                            post.postImages.length > 1 &&
                                <div className='childImages'>
                                    <Image className={`imgSecond ${post.postImages.length === 2 ? 'half' : ''}`}
                                            onClick={() => handleOpenPictureModal(index, 1)}
                                           src={post.postImages[1]} alt={`img2`}/>
                                    {post.postImages.length > 2 &&
                                        <Image className='imgThird' onClick={() => handleOpenPictureModal(index, 2)}
                                               src={post?.postImages[2]} alt={`img3`}/>
                                    }
                                    {post.postImages.length > 3 &&
                                        <div className='showMore'>
                                            <FaImages/> {post.postImages.length - 3}+
                                        </div>
                                    }
                                </div>
                        }
                    </div>

                    <div className="like-comments">
                        <span className="totalEmotion">
                                {post.likes > 0 && <AiOutlineLike/>}
                                {post.dislikes > 0 && <AiOutlineDislike style={{marginRight: 5}}/>}
                                {(post.likes||0) + (post.dislikes||0)}
                        </span>
                        <div className="comment-share">
                            <span onClick={()=>handleOpenPostModal(post)}>{post.comments.length} Bình luận</span>
                            <span>{post.share} lượt chia sẻ</span>
                        </div>
                    </div>
                    <div className="comment-action">
                        <div className="emotion">
                            <AiOutlineLike/>
                            <span>Like</span>
                        </div>
                        <div className="comment" onClick={()=>handleOpenPostModal(post)}>
                            <FaRegComment/>
                            <span>Comment</span>
                        </div>
                        <div className="share">
                            <IoMdShareAlt/>
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            ))}
            <PostModal
                post={post}
                isOpen={isOpenPostModal}
                onClose={handleClosePostModal}
            />
        </div>
    );
}