import { AIImageInfo } from "../index";

export const decodeSD = async (result: Map<string, string>) => {
    const infoText = result.has("parameters")
        ? [...result.values()][0]
        : result.get("__TEXT__");

    // 只截断第一个 断行的
    const chunks = infoText.split(/\n/);
    const N = chunks.findIndex((i) => i.startsWith("Negative prompt"));
    const S = chunks.findIndex((i) => i.startsWith("Steps"));
    const prompt = chunks.slice(0, N).join("\n");
    // console.log(other);
    const Negative = (chunks.slice(N, S).join("\n") ?? "")
        .replace(/^(Negative prompt:\s*)+/, "")
        .trim();

    const comments = Object.fromEntries(
        chunks[S].split(",")
            .map((i) => i.split(":").map((i) => i.trim()))
            .filter((i) => i[0])
    );
    comments["Negative prompt"] = Negative;
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
        extras: result.has("extras")
            ? result
                  .get("extras")
                  .split(/\n/)
                  .filter((i) => i)
                  .map((i) => {
                      return Object.fromEntries(
                          i.split(",").map((i) => i.split(":"))
                      );
                  })
            : undefined,
    } as AIImageInfo;
};
