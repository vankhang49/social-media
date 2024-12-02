import MainSidebar from "@/components/sidebars/mainSidebar";
import Relationship from "@/components/relationship/relationship";
import "./index.scss";
import Posts from "@/components/posts/Posts";
import {PostArticles} from "@/components/posts/PostArticles";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {MainHeader} from "@/components/header/MainHeader";
import {NotificationModal} from "@/components/notification/NotificationModal";

function Index() {
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [isShowNotification, setIsShowNotification] = useState(false);

    useEffect(() => {
        const authenticated = localStorage.getItem("isAuthenticated") === "authenticated";
        setIsAuth(authenticated);

        if (!authenticated) {
            router.push('/intro').catch(console.error);
        }
    }, [])

    if (!isAuth) {
        return null;
    }

    const handleShowSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }

    const handleShowNotification = () => {
        setIsShowNotification(!isShowNotification);
    }

    return (
        <div id="home-page" className="home-page">
            <MainHeader showSidebar={handleShowSidebar} showNotification={handleShowNotification}/>
            <MainSidebar isOpen={isShowSidebar}/>
            <NotificationModal
                isOpen={isShowNotification}
                onClose={handleShowNotification}
            />
            <div className='container'>
                <PostArticles/>
                <Posts/>
            </div>
            <Relationship/>
        </div>
    )
}

export default Index;
