const startGeneration = async (prompt) => {
    const response = await fetch(`${process.env.REPLICATE_API_URL}/predictions`, {
        method: "POST", headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
            Prefer: "wait"
        }, body: JSON.stringify({
            version: "6ba5ef3696f252fe087542aec75be37c8194a98a710b2b11ecd26f27bc46f507",
            input: {prompt}
        })
    });

    return response.json();
}

const getGeneration = async (url) => {
    const result = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        }
    })

    return result.json();
}


export default async function handler(request, response) {
    const {prompt} = request.body;

    if (!prompt) {
        response.status(400).json("No prompt provided");
    }

    const predictions = await startGeneration(prompt);
    let generatedImage;

    try {
        while (!generatedImage) {
            if (Object.keys(predictions).includes('urls')) {
                const result = await getGeneration(predictions.urls.get)

                if (result.status === 'succeeded') {
                    [generatedImage] = result.output;
                } else if (result.status === 'failed') {
                    break;
                } else {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            } else {
                generatedImage = 1;
            }
        }
    } catch (error) {
        console.error("API data error")
        throw new Error("API data error")
    }

    response.status(200).json(generatedImage && typeof generatedImage === 'object' ? generatedImage : 1);

}