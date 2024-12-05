"use client"
import styles from './styles.module.scss';

const Tag = ({title, onClick}) => {
    const handleClick = () => {
        onClick && onClick(title);
    }
    return (
        <button className={styles.tag} onClick={handleClick}>
            {title}
        </button>
    );
};

export {Tag};