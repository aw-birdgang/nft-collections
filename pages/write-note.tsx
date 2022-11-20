import type { NextPage } from "next";
import styles from "../styles/WriteNote.module.css";
import Header from "../components/Header";

const WriteNote: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <p>Write Note</p>
        </div>
    );
};

export default WriteNote;
