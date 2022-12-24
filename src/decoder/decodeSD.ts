import { AIImageInfo } from "../index";

export const decodeSD = async (result: Map<string, string>) => {
    const infoText = result.has("parameters")
        ? [...result.values()][0]
        : result.get("__TEXT__");

    // 只截断第一个 断行的
    const [prompt, other] = infoText.split(/[\n|,]Negative prompt:/);
    // console.log(other);
    const [Negative, others] = // 如果重复写了 Negative prompt，那么不进行重复写
        (
            other.trim().startsWith("Negative prompt:")
                ? other
                : "Negative prompt:" + other
        ).split("\n");

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
