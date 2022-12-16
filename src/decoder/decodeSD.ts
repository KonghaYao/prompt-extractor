import { AIImageInfo } from "../index";

export const decodeSD = async (result: Map<string, string>) => {
    const infoText =
        result.size === 1 ? [...result.values()][0] : result.get("__TEXT__");
    // console.log(infoText);
    const [prompt, other] = infoText.split("Negative prompt:");
    const [Negative, others] = ("Negative prompt:" + other).split("\n");
    const comments = Object.fromEntries(
        [Negative, ...others.split(",")]
            .map((i) => i.split(":").map((i) => i.trim()))
            .filter((i) => i[0])
    );
    return {
        Title: result.get("Title") ?? "AI generated from Stable Diffusion",
        Description: prompt.trim(),
        Software: "Stable Diffusion",
        Source: result.get("Source") ?? "Stable Diffusion",
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
};
