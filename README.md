# SD、NovelAI、PaddleNLP 法术解析库

```sh
npm install prompt-extractor
pnpm i prompt-extractor
```

```js
import { PromptExtractor } from "prompt-extractor";
// let arraybuffer = await file.arraybuffer()
// let arraybuffer = await fetch('any.png').then(res=>res.arraybuffer())
const data = await PromptExtractor(arraybuffer);
console.log(data);
```

## License

MIT
