import "./Searching.scss";
import {CiSearch} from "react-icons/ci";
import {useEffect, useRef, useState} from "react";
import {FaCloud} from "react-icons/fa";

export function Searching({className}) {
    const [isClicked, setIsClicked] = useState(false);
    const searchingRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchingRef.current && !searchingRef.current.contains(event.target)) {
                setIsClicked(false);
            }
        };

        if (isClicked) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isClicked]);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div id={'searching'} className={`searching ${className || ""}`}
             onClick={handleClick} ref={searchingRef}>
            <form className={`search ${isClicked ? 'focus' : ""}`}>
                <input type="text" placeholder="Tìm kiếm ..."
                       className={`searchInput ${isClicked ? 'focus' : ""}`}/>
                <div className='symbol'>
                    <svg className='cloud'>
                        <use xlinkHref="#cloud"/>
                    </svg>
                    <svg className='lens'>
                        <use xlinkHref="#lens"/>
                    </svg>
                </div>
            </form>

            <svg style={{display: "none"}}>
                <symbol id="cloud">
                    <FaCloud />
                </symbol>
                <symbol id="lens">
                    <CiSearch />
                </symbol>
            </svg>
        </div>
    );
}