import { describe, it, expect } from "vitest";
import { PromptExtractor } from "../src";
import fs from "fs";
/** 非最终结果测试，这是中间函数的测试 */
describe("实战测试", () => {
    it("Paddle Break Line Error", async () => {
        const data = await PromptExtractor(
            fs.readFileSync("./assets/BreakLinePaddle.png")
        );
        expect(data).toEqual({
            Comment: {
                noise: undefined,
                sampler: "DDIM",
                scale: "7.0",
                seed: "2632139819",
                steps: "64",
                strength: undefined,
                uc: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
            },
            Description: `(((wide shot))),(from side),contour deepening,cinematic lighting,art of light,artist style,steampunk,depth of field,

(((1 girl))), (detailed hands and detailed fingers)fluffy hair,exquisite cloth,beautiful detailed eyes,smooth sketch,sculpture,dress,blonde hair,beautiful eyes,eyes the same size,(beautiful elbow gloves),beautiful detailed white gloves`,
            Software: "PaddleNLP",
            Source: "PaddleNLP",
            Title: "AI generated from PaddleNLP",
            others: {
                "CFG scale": "7.0",
                "Negative prompt":
                    "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
                Sampler: "DDIM",
                Seed: "2632139819",
                Steps: "64",
                epoch_time: "1671197390.0114484",
                eta: "0.0",
                height: "1024",
                latents: "None",
                max_embeddings_multiples: "5",
                model_name: "Linaqruf/anything-v3.0",
                no_boseos_middle: "False",
                num_images_per_prompt: "1",
                skip_parsing: "False",
                skip_weighting: "False",
                superres_model_name: "无",
                width: "512",
            },
        });
    });
    it("Paddle Huge Size Image Error", async () => {
        const data = await PromptExtractor(
            fs.readFileSync("./assets/Paddle_huge.png")
        );
        console.log(data);
        expect(data).toEqual({
            Title: "AI generated from PaddleNLP",
            Description:
                "(((extremely detailed CG unity 8k wallpaper))),((highly detailed)),((best quality)),\n" +
                "looking at viewer,close up,\n" +
                "((detailed beautiful face)),aqua eyes,(wide-eyed),hair flower,long black hair,wet clothes,serafuku,bathing,(((water))),((fog)),red lips",
            Software: "PaddleNLP",
            Source: "PaddleNLP",
            Comment: {
                uc: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
                steps: "40",
                sampler: "DDIM",
                scale: "12.0",
                seed: "3021703102",
                noise: undefined,
                strength: undefined,
            },
            others: {
                "Negative prompt":
                    "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
                Steps: "40",
                Sampler: "DDIM",
                "CFG scale": "12.0",
                Seed: "3021703102",
                width: "1024",
                height: "256",
                num_images_per_prompt: "1",
                eta: "0.0",
                latents: "None",
                max_embeddings_multiples: "3",
                no_boseos_middle: "False",
                skip_parsing: "False",
                skip_weighting: "False",
                epoch_time: "1671367282.08157",
                superres_model_name: "falsr_a",
                model_name: "Linaqruf/anything-v3.0",
            },
        });
    });
});
