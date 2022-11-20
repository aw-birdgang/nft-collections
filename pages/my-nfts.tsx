import type { NextPage } from "next";
import styles from "../styles/MyNfts.module.css";
import Header from "../components/Header";
import {ThirdwebNftMedia, useAddress, useContract, useNFTs} from "@thirdweb-dev/react";

const MyNfts: NextPage = () => {
    const { contract } = useContract("0x5865b234E2D690c5A63CE5B843e6A27DC3365583");
    const address = useAddress();
    const { data: nfts, isLoading, error } = useNFTs(contract);
    console.log(nfts);
    return (
        <div className={styles.container}>
            <Header />
            <p>NFTS</p>
            <section className={styles.info}>
                {isLoading ? <p>Loading...</p>
                    : (
                        nfts?.filter((nft) => nft.owner == address)
                        ?.map(nft => {
                            return (
                                <div key={nft.metadata.id}>
                                    <ThirdwebNftMedia
                                        metadata={nft.metadata}
                                        height={"200"}
                                        style={{borderRadius: "10px" }}
                                    />
                                    <p>
                                        ID: {nft.metadata.id} | {nft.metadata.name}
                                    </p>
                                </div>
                            );
                        })
                    )
                }
            </section>
        </div>
    );
};

export default MyNfts;
