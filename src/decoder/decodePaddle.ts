import { AIImageInfo } from "../index";

export const decodePaddle = async (result: Map<string, string>) => {
    if (result.get("Software") === "PaddleNLP") {
        const infoText = result.get("__TEXT__");
        console.log(infoText);
        const [mainText, other] = infoText.split("Negative prompt:");
        const others = ("Negative prompt:" + other).split("\n");
        const comments = Object.fromEntries(
            others
                .map((i) => i.split(":").map((i) => i.trim()))
                .filter((i) => i[0])
        );
        return {
            Title: result.get("Title") ?? "AI generated from PaddleNLP",
            Description: mainText,
            Software: result.get("Software"),
            Source: result.get("Source") ?? "PaddleNLP",
            Comment: {
                uc: comments["Negative prompt"],
                steps: comments["Steps"],
                sampler: comments["Sampler"],
                scale: comments["CFG scale"],
                seed: comments["Seed"],
                noise: undefined,
                strength: undefined,
            },
            others: comments,
        } as AIImageInfo;
    } else {
        return false;
    }
};
