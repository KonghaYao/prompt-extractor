import { AIImageInfo } from "../index";

export const decodeNovelAI = async (result: Map<string, string>) => {
    if (result.get("Software") === "NovelAI") {
        return {
            Title: result.get("Title"),
            Description: result.get("Description"),
            Software: result.get("Software"),
            Source: result.get("Source"),
            Comment: JSON.parse(result.get("Comment")),
        } as AIImageInfo;
    } else {
        return false;
    }
};
