import {PromptForm} from "./prompt-form";
import PromptSuggestions from "@/containers/home-page-container/prompt-suggestions";
import {Examples} from "@/containers/home-page-container/examples";
import ResultImage from "@/containers/home-page-container/result-image";

import styles from "./styles.module.scss";

const HomePageContainer = () => {

    return (
        <div className={styles.homePageContainer}>
            <h1 className={styles.title}>
                You just image,
                <br/>
                we handle the rest
            </h1>

            <p className={styles.description}>
                Tell us a prompt and we&apos;ll generate a story for you.
            </p>
            <PromptForm/>
            <ResultImage/>
            <PromptSuggestions/>
            <Examples/>
        </div>
    );
};

export {HomePageContainer};
