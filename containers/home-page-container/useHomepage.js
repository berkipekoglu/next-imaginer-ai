"use client";
import {createContext, useContext, useMemo, useState} from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({children}) => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [isSubmitting, setSubmitting] = useState(false);

    const generateImage = async () => {
        try {
            setSubmitting(true);
            const response = await fetch('/api/generate', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({
                    prompt
                })
            })

            if (!response.ok) throw new Error(response.statusText || response.status);

            const generatedImage = await response.json();
            setImage(generatedImage);
            setError(null);
        } catch (error) {
            setError(error);
            //throw new Error("Failed to generate image");
        }

        setSubmitting(false);


    }

    const changePrompt = (newPrompt) => {
        setPrompt(newPrompt);
        window.scrollTo(0, 0);
    }

    const data = useMemo(() => ({
        prompt, setPrompt, generateImage, changePrompt, image, error, isSubmitting
    }), [prompt, image, error, isSubmitting]);


    return <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>;
}

export const useHomePage = () => {
    const context = useContext(HomePageContext)

    if (!context) {
        throw new Error('Context bulunamadı!');
    }

    return context;
}