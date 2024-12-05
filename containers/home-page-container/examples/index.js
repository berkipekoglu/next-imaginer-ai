"use client"
import styles from "./styles.module.scss"
import {EXAMPLES} from "./constants";
import {CopyButton} from "@/components/copyBtn";
import Image from "next/image";
import {useHomePage} from "@/containers/home-page-container/useHomepage";

export const Examples = () => {
    const {changePrompt} = useHomePage();

    return (
        <div className={styles.examples}>
            {
                EXAMPLES.map((example) => (
                    <div className={styles.example} key={example.id}>
                        <h4> {example.prompt}</h4>
                        <CopyButton title="Copy" onClick={() => changePrompt(example.prompt)}/>
                        <Image src={example.image} alt={example.prompt} fill/>
                    </div>
                ))
            }
        </div>
    );
};

