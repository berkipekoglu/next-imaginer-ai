"use client";

import {useHomePage} from "@/containers/home-page-container/useHomepage";
import {Tag} from "@/components/tag";
import Link from "next/link";
import Image from "next/image";
import {Loading} from "@/components/loading";
import ExamplePhoto from '@/assets/images/example-photo.jpeg';

import styles from './styles.module.scss'


const ResultImage = () => {
    const {isSubmitting, error, image, prompt} = useHomePage();

    if (error) return <p className={styles.error}>{error.message}</p>
    if (!isSubmitting && !image) return null;

    return (<div className={styles.resultImage}>
        <div className={styles.animation}>
            {isSubmitting ? <Loading/> : <>
                <div className={styles.content}>
                    <p>{prompt}</p>
                    <Tag title={<Link href={image !== 1 ? image : ExamplePhoto} target="_blank" download>Download</Link>}/>
                </div>
                <Image src={image !== 1 ? image : ExamplePhoto} alt={prompt} width={512} height={512}  />
            </>}
        </div>
    </div>);
};

export default ResultImage;