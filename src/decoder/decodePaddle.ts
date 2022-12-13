import { AIImageInfo } from "../index";

export const decodePaddle = async (result: Map<string, string>) => {
    if (result.get("Software") === "PaddleNLP") {
        const infoText = result.get("__TEXT__");

        const [prompt, ...others] = infoText.split("\n");
        const comments = Object.fromEntries(
            others
                .map((i) => i.split(":").map((i) => i.trim()))
                .filter((i) => i[0])
        );
        return {
            Title: result.get("Title") ?? "AI generated from PaddleNLP",
            Description: prompt,
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
