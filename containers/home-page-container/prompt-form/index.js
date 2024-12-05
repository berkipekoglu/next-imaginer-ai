"use client";
import styles from "./styles.module.scss";
import {useHomePage} from "@/containers/home-page-container/useHomepage";

const PromptForm = () => {
    const {prompt, setPrompt, generateImage} = useHomePage();

    const handlePromptChange = (e) => {
        setPrompt(e.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        generateImage();
    };

    return (
        <div className={styles.promptForm}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea
            className={styles.promptTextarea}
            rows={2}
            required
            value={prompt}
            onChange={handlePromptChange}
            placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
        />
                <button className={styles.generateButton} type="submit">
                    Generate
                </button>
            </form>
        </div>
    );
};

export {PromptForm};
