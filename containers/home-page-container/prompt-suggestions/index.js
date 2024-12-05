"use client"
import {SUGGESTIONS} from "./constants";
import styles from "./styles.module.scss";
import {Tag} from "@/components/tag";
import {useHomePage} from "@/containers/home-page-container/useHomepage";

const PromptSuggestions = () => {
    const {changePrompt} = useHomePage();

    return (<div className={styles.promptSuggestions}>
        <h3 className={styles.title}>Nothing in mind? Try one of these prompts:</h3>
        <div className={styles.suggestions}>
            {SUGGESTIONS.map((suggestion) => (
                <Tag onClick={changePrompt} key={suggestion.id} title={suggestion.title}/>))}
        </div>
    </div>);
};

export default PromptSuggestions;