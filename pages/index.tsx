import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { Web3Button } from "@thirdweb-dev/react";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                <h1>The NFT COLLECTION Project.</h1>
                <p>
                    HELLO!!
                </p>

                <br />
                <Web3Button
                    contractAddress="0x426e2b2737Eabf21D56dfDEbC4ce57EE43d6785F"
                    action={(contract) => {
                        contract.erc721.claim(1);
                    }}
                >
                    Claim NFT Collection
                </Web3Button>
            </section>
        </div>
    );
};

export default Home;
