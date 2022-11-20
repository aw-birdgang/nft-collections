import type { NextPage } from "next";
import styles from "../styles/Nfts.module.css";
import Header from "../components/Header";
import {ThirdwebNftMedia, useContract, useNFTs} from "@thirdweb-dev/react";

const Nfts: NextPage = () => {
    const { contract } = useContract("0x426e2b2737Eabf21D56dfDEbC4ce57EE43d6785F");
    const { data: nfts, isLoading, error } = useNFTs(contract);
    console.log(nfts);
    return (
        <div className={styles.container}>
            <Header />
            <p>NFTS</p>
            <section className={styles.info}>
                {isLoading ? <p>Loading...</p> : nfts?.map(nft => {
                    return (
                        <div key={nft.metadata.id}>
                            <ThirdwebNftMedia
                                metadata={nft.metadata}
                                height={"200"}
                                style={{borderRadius: "10px" }}
                            />
                            <p>{nft.metadata.name}</p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Nfts;
