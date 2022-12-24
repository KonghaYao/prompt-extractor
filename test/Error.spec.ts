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
        // console.log(data);
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
    it("Stable Diffusion Extras Property", async () => {
        const data = await PromptExtractor(fs.readFileSync("./assets/SD3.png"));
        // console.log(data);
        expect(data).toEqual({
            Title: "AI generated from Stable Diffusion",
            Description:
                "1girl,(lucy), float hair,(((white)) bob cut hair),((Outside the window at night is a sci-fi cyberpunk city full of neon lights and artificial intelligence)),Science fiction style temple, (hologram),tight , loose white jacket,red eye shadow,side bangs over the shoulder,side cut bangs,((reflective eyes)), water eyes,wlop, wide view, looking at viewer, small breasts, upper body,full_body, kula diamond, bangs, jacket, reflex,light smile, from below,",
            Software: "Stable Diffusion",
            Source: "Stable Diffusion",
            Comment: {
                uc: "loli, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, lowres,bad anatomy,bad hands,text,error,missing fingers,extra digit,fewer digits,cropped,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,username,blurry,missing arms,long neck,Humpbacked, (futanari",
                steps: "40",
                sampler: "Euler a",
                scale: "4",
                seed: "2343544909",
                noise: undefined,
                strength: undefined,
            },
            others: {
                "Negative prompt":
                    "loli, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, lowres,bad anatomy,bad hands,text,error,missing fingers,extra digit,fewer digits,cropped,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,username,blurry,missing arms,long neck,Humpbacked, (futanari",
                Steps: "40",
                Sampler: "Euler a",
                "CFG scale": "4",
                Seed: "2343544909",
                Size: "640x960",
                "Model hash": "e08a1b65",
                "Clip skip": "2",
                ENSD: "31337",
            },
            extras: [
                { Upscale: " 2", " visibility": " 1.0", " model": "ESRGAN_4x" },
                {
                    Upscale: " 2",
                    " visibility": " 1",
                    " model": "R-ESRGAN AnimeVideo",
                },
            ],
        });
    });
    it("Stable Diffusion Negative Error ", async () => {
        const data = await PromptExtractor(fs.readFileSync("./assets/SD4.png"));
        // console.log(data);
        expect(data).toEqual({
            Title: "AI generated from Stable Diffusion",
            Description:
                "4K highres ,((masterpiece)),((best quality)), (highly detailed),((illustration)),spot_light,realistic, ,extremely intricate,(perfect beautiful face),ambient light,pov upper body, ,dynamic,swimming,\n" +
                "cyberpunk hair,mechanical cyborg, detailed transparent mechanism,artificial rib bones,artificial organs anatomy, transparent LED penals,transparent head fins and arm fins,tail fin,navel,blush,\n" +
                "underwater futuristic atlantis city, stone, leaf_plants,, [(fish and shell and coral and crab:0.8):6],tiara",
            Software: "Stable Diffusion",
            Source: "Stable Diffusion",
            Comment: {
                uc: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username,longbody,lowres, bad , wrong limbs, extra limbs, fused limbs,missing limbs,bad hands, missing fingers, pubic hair,extra digit, fewer digits, cropped, worst quality, low quality, pregnant, muscular, big red nipples, mirror image, multiple view, black and white",
                steps: "15",
                sampler: "DPM++ 2M Karras",
                scale: "7",
                seed: "2738790710",
                noise: undefined,
                strength: undefined,
            },
            others: {
                "Negative prompt":
                    "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username,longbody,lowres, bad , wrong limbs, extra limbs, fused limbs,missing limbs,bad hands, missing fingers, pubic hair,extra digit, fewer digits, cropped, worst quality, low quality, pregnant, muscular, big red nipples, mirror image, multiple view, black and white",
                Steps: "15",
                Sampler: "DPM++ 2M Karras",
                "CFG scale": "7",
                Seed: "2738790710",
                Size: "832x1280",
                "Model hash": "a3cf2582",
                "Denoising strength": "0.65",
                ENSD: "31337",
                "Mask blur": "1",
            },
            extras: [
                {
                    Upscale: " 1.5",
                    " visibility": " 1.0",
                    " model": "R-ESRGAN 4x+",
                },
            ],
        });
    });
});
