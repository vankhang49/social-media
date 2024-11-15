import "./PersonalArticle.scss";
import PersonalLayout from "@/layouts/PersonalLayout";
import {PostArticles} from "@/components/posts/PostArticles";
import Posts from "@/components/posts/Posts";
import {PersonalIntroduction} from "@/components/introduction/PersonalIntroduction";
import {OwnedPhotos} from "@/components/ownedPhotos/OwnedPhotos";
import {OwnedFriends} from "@/components/ownedFriends/OwnedFriends";

export default function index() {

    return (
        <PersonalLayout>
            <div className="personalPost">
                <div className="boxLeft">
                    <PersonalIntroduction/>
                    <OwnedPhotos/>
                    <OwnedFriends/>
                </div>
                <div className='boxRight'>
                    <PostArticles/>
                    <Posts/>
                </div>
            </div>
        </PersonalLayout>
    );
}