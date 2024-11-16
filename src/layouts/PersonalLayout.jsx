import "./PersonalLayout.scss";
import {PersonalHeader} from "@/components/header/PersonalHeader";
import {PersonalNavbar} from "@/components/navbars/PersonalNavbar";
import {MainHeader} from "@/components/header/MainHeader";
import {useState} from "react";
import MainSidebar from "@/components/sidebars/mainSidebar";

export default function PersonalLayout({children}) {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const handleShowSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }
    return (
        <div id="personalLayout">
            <MainHeader showSidebar={handleShowSidebar}/>
            <MainSidebar isOpen={isShowSidebar} className={'private'}/>
            <div className="personal-container">
                <PersonalHeader />
                <PersonalNavbar/>
                {children}
            </div>
        </div>
    );
}