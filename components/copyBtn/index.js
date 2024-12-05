"use client"
import styles from './styles.module.scss';

const CopyButton = ({title, onClick}) => {
    const handleOnClick = () => {
        onClick && onClick(title);
    }
    return (
        <button onClick={handleOnClick} className={styles.copyBtn}>
            {title}
        </button>
    );
};

export {CopyButton};