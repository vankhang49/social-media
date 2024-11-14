import "./PersonalLayout.scss";
import {PersonalHeader} from "@/components/header/PersonalHeader";
import {PersonalNavbar} from "@/components/navbars/PersonalNavbar";

export default function PersonalLayout({children}) {

    return (
        <div id="personalLayout">
            <div className="personal-container">
                <PersonalHeader />
                <PersonalNavbar/>
                {children}
            </div>
        </div>
    );
}