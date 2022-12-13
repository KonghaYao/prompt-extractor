import { decodeNovelAI } from "./decoder/decodeNovelAI";
import { decodePaddle } from "./decoder/decodePaddle";
import { decodeSD } from "./decoder/decodeSD";
import { readDataFromPNG } from "./readDataFromPng";

export interface AIImageInfo {
    Title: string;
    Description: string;
    Software: string;
    Source: string;
    Comment: {
        uc: string;
        steps: string;
        sampler: string;
        scale: string;
        seed: string;
        noise?: string;
        strength: string;
    };
    others?: Record<string, string>;
}

export const PromptExtractor = async (
    buffer: ArrayBuffer
): Promise<AIImageInfo> => {
    const entriesData = await readDataFromPNG(buffer);
    const data = new Map<string, string>(
        entriesData.map((i) => {
            return [i.keyword, i.text];
        })
    );
    for (const iterator of [decodeNovelAI, decodePaddle, decodeSD]) {
        const returnInfo = await iterator(data);
        if (returnInfo) return returnInfo;
    }
    throw new Error(
        "Picture is not an output of Stable Diffusion or NovelAI or PaddleNLP"
    );
};
