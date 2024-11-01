import MainSidebar from "@/components/sidebars/mainSidebar";
import Relationship from "@/components/relationship/relationship";
import "./index.scss";
import Posts from "@/components/posts/Posts";
import {PostArticles} from "@/components/posts/PostArticles";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {MainHeader} from "@/components/header/MainHeader";

function Index() {
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const authenticated = localStorage.getItem("isAuthenticated") === "authenticated";
        setIsAuth(authenticated);

        if (!authenticated) {
            router.push('/intro').catch(console.error);
        }
    },[isAuth])

    return (
        <div id="home-page" className="home-page">
            <MainHeader />
            <MainSidebar />
            <div className='container'>
                <PostArticles/>
                <Posts/>
            </div>
            <Relationship/>
        </div>
    )
}

export default Index;