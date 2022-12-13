import extractChunks from "png-chunks-extract";
import text from "png-chunk-text";
export const readDataFromPNG = async (
    buf: ArrayBuffer
): Promise<{ keyword: string; text: string }[]> => {
    let chunks = [];
    try {
        chunks = extractChunks(new Uint8Array(buf));
    } catch (err) {
        throw new Error("This picture can't  extract any useful information!");
    }
    return chunks
        .filter(function (chunk) {
            // tExt 和 iTXt 才是文本信息
            return chunk.name === "tEXt" || chunk.name === "iTXt";
        })
        .map(function (chunk) {
            if (chunk.name === "iTXt") {
                let data = chunk.data.filter((x) => x != 0x0);
                let txt = new TextDecoder().decode(data);

                return {
                    keyword: "__TEXT__",
                    text: txt.slice(10),
                };
            }
            return text.decode(chunk.data);
        });
};
