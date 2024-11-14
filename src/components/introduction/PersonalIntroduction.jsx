import styles from "./PersonalIntroduction.module.scss";
import {GiGraduateCap} from "react-icons/gi";
import {IoHomeSharp, IoLocationSharp} from "react-icons/io5";
import {FaHeart} from "react-icons/fa";

const user = {
    userId: 1,
    fullName: "Đinh Văn Khang",
    major: "Developer",
    school: "Codegym Đà Nẵng",
    learned: "University of Technology and Education, The Danang University",
    live: "Đà Nẵng",
    from: "Đà Nẵng",
    status: ""
}

export function PersonalIntroduction() {

    return (
        <div className={styles.personalIntroduction}>
            <h2>Giới thiệu</h2>
            <button type={'button'}>Thêm tiểu sử</button>
            <p><GiGraduateCap /> Học {user.major} tại {user.school}</p>
            <p><GiGraduateCap /> Từng học tại {user.learned}</p>
            <p><IoHomeSharp /> Sống tại {user.live}</p>
            <p><IoLocationSharp /> Đến từ {user.from}</p>
            <p><FaHeart />{user.status}</p>
            <button type={'button'}>Chỉnh sửa chi tiết</button>
            <button type={'button'}>Thêm Nội dung đáng chú ý</button>
        </div>
    );
}