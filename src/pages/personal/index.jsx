import PersonalLayout from "@/layouts/PersonalLayout";
import {PostArticles} from "@/components/posts/PostArticles";
import Posts from "@/components/posts/Posts";

export default function index() {

    return (
        <PersonalLayout>
            <div className='container'>
                <PostArticles/>
                <Posts/>
            </div>
        </PersonalLayout>
    );
}