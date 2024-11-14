import PersonalLayout from "@/layouts/PersonalLayout";
import {PostArticles} from "@/components/posts/PostArticles";
import Posts from "@/components/posts/Posts";
import {PersonalIntroduction} from "@/components/introduction/PersonalIntroduction";
import "./PersonalArticle.scss";

export default function index() {

    return (
        <PersonalLayout>
            <div className="personalPost">
                <div className="boxLeft">
                    <PersonalIntroduction/>
                </div>
                <div className='boxRight'>
                    <PostArticles/>
                    <Posts/>
                </div>
            </div>
        </PersonalLayout>
    );
}