import styles from "./Layout.module.scss";
import MainSidebar from  "../components/sidebars/mainSidebar";

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <MainSidebar></MainSidebar>
            <div className={styles.container}>{children}</div>

        </div>
    );
}