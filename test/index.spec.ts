import { describe, it, expect } from "vitest";
import { PromptExtractor } from "../src";
import fs from "fs";
/** 非最终结果测试，这是中间函数的测试 */
describe("实战测试", () => {
    it("NovelAI", async () => {
        const data = await PromptExtractor(
            fs.readFileSync("./assets/NovelAI.png")
        );
        expect(data).toEqual({
            Title: "AI generated image",
            Description:
                "masterpiece, best quality, {{{extremely detailed CG unity 8k wallpaper}}},{{highly detailed}},{{best quality}},looking at viewer,{close up},beautiful detailed  water,beautiful detailed girl,{long black hair},{serafuku},hair flower,{{wet clothes}},{{wide-eyed}},{{aqua eyes}},{{fog}}",
            Software: "NovelAI",
            Source: "Stable Diffusion ADDB53AF",
            Comment: {
                steps: 20,
                sampler: "k_euler_ancestral",
                seed: 1138862044,
                strength: 0.69,
                noise: 0.667,
                scale: 12,
                uc: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
            },
        });
    });
    it("Paddle", async () => {
        const data = await PromptExtractor(
            fs.readFileSync("./assets/Paddle.png")
        );
        expect(data).toEqual({
            Title: "AI generated from PaddleNLP",
            Description:
                "best quality,highly detailed,valentine,outdoors,(((((flying petals))))),(rain),red rose,sitting,dynamic angle,((wet)),white hair,hair between eyes,bob cut,hair over one eye,streaming tears,tears,((frills)),((gold trim)),(((white dress))),black ribbon,sleeveless dress,lace trim,floral print,pantyhose,hair scrunchie,flipped hair,small breasts,red bow,detailed hand and detailed fingers",
            Software: "PaddleNLP",
            Source: "PaddleNLP",
            Comment: {
                uc: "umbrella,lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
                steps: "48",
                sampler: "DDIM",
                scale: "12.0",
                seed: "543900313",
                noise: undefined,
                strength: undefined,
            },
            others: {
                "Negative prompt":
                    "umbrella,lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
                Steps: "48",
                Sampler: "DDIM",
                "CFG scale": "12.0",
                Seed: "543900313",
                width: "512",
                height: "768",
                num_images_per_prompt: "1",
                eta: "0.0",
                latents: "None",
                max_embeddings_multiples: "5",
                no_boseos_middle: "False",
                skip_parsing: "False",
                skip_weighting: "False",
                epoch_time: "1670676855.5882823",
                superres_model_name: "无",
                model_name: "Linaqruf/anything-v3.0",
            },
        });
    });
    it("SD", async () => {
        const data = await PromptExtractor(fs.readFileSync("./assets/SD.png"));
        expect(data).toEqual({
            Title: "AI generated from Stable Diffusion",
            Description:
                "(masterpiece), (best quality), (ultra-detailed),(((illustration))), ((an extremely delicate and beautiful)),(detailed light),(1girl)，Short white hair，((Dragon behind him)),(Red eyes),Black trench coat,hand in own hair,Geiren",
            Software: "Stable Diffusion",
            Source: "Stable Diffusion",
            Comment: {
                uc: "bad anatomy,bad hands,text,error,missing fingers,extra digit,fewer digits,cropped,worst quality,low quality,normal quality,signature,watermark,username,blurry,missing arms,long neck,Humpbacked,lowres,jpeg artifacts,nsfw,Characters covered by the background,Excess head,big breast",
                steps: "28",
                sampler: "Euler a",
                scale: "7",
                seed: "367472097",
                noise: undefined,
                strength: undefined,
            },
            others: {
                "Negative prompt":
                    "bad anatomy,bad hands,text,error,missing fingers,extra digit,fewer digits,cropped,worst quality,low quality,normal quality,signature,watermark,username,blurry,missing arms,long neck,Humpbacked,lowres,jpeg artifacts,nsfw,Characters covered by the background,Excess head,big breast",
                Steps: "28",
                Sampler: "Euler a",
                "CFG scale": "7",
                Seed: "367472097",
                Size: "704x384",
                "Model hash": "925997e9",
                "Clip skip": "2",
                ENSD: "31337",
            },
        });
    });
    it("SD2", async () => {
        const data = await PromptExtractor(fs.readFileSync("./assets/SD2.png"));
        expect(data).toEqual({
            Title: "AI generated from Stable Diffusion",
            Description:
                "{{{{{High heels}}}}},{{{{{Silk stockings}}}}},White background,{{{a man}}},{{{Chastity lock}}},{{{Hands at the sides of the legs}}},{{{naked}}},{{{Small penis}}},blonde_hair,Long hair ,Standing,high heels,octane render,style of bubble bobble,lineup,game cg,portrait,upper body,lower body,cowboy shot",
            Software: "Stable Diffusion",
            Source: "Stable Diffusion",
            Comment: {
                uc: "lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feets",
                steps: "40",
                sampler: "Euler a",
                scale: "7",
                seed: "4230162917",
                noise: undefined,
                strength: undefined,
            },
            others: {
                "Negative prompt":
                    "lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feets",
                Steps: "40",
                Sampler: "Euler a",
                "CFG scale": "7",
                Seed: "4230162917",
                Size: "256x512",
                "Model hash": "925997e9",
                "Denoising strength": "0.85",
                "Clip skip": "2",
                ENSD: "31337",
                "Mask blur": "4",
            },
        });
    });
});
