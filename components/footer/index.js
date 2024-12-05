import styles from './styles.module.scss';
import Link from "next/link";

import GithubIcon from '@/assets/icons/github.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="https://github.com/berkipekoglu" target="_blank">
                <GithubIcon/>
            </Link>
            <Link href="https://x.com/berkipekoglu" target="_blank">
                <TwitterIcon/>
            </Link>
            <p>
                Made by <b>Berk İpekoğlu</b>
                <br/>
                and, built with <b>Next.js</b>
            </p>
        </footer>
    );
};

export {Footer};