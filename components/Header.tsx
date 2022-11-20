import React from "react";
import {ConnectWallet} from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import {useRouter} from "next/router";


const Header: React.FC = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div>
                <Link href={"/"}>
                    <a className={router.pathname == "/" ? styles.active : styles.link }>
                        Claim
                    </a>
                </Link>
                <Link href={"/nfts"}>
                    <a className={router.pathname == "/nfts" ? styles.active : styles.link }>
                        NFTS
                    </a>
                </Link>
                <Link href={"/my-nfts"}>
                    <a className={router.pathname == "/my-nfts" ? styles.active : styles.link }>
                        My NFTS
                    </a>
                </Link>
                <Link href={"/write-note"}>
                    <a className={router.pathname == "/write-note" ? styles.active : styles.link }>
                        Write Note
                    </a>
                </Link>
            </div>
            <div>
                <ConnectWallet colorMode={"light"} accentColor={"#9702c4"} />
            </div>
        </div>
    );
};

export default Header;
