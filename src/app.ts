import { PromptExtractor } from ".";

const app = async () => {
    console.log(
        await PromptExtractor(
            await fetch("./assets/NovelAI.png").then((res) => res.arrayBuffer())
        )
    );
    const file = await fetch("./assets/SD.png").then((res) =>
        res.arrayBuffer()
    );
    const data = await PromptExtractor(file);
    console.log(data);
};
await app();
