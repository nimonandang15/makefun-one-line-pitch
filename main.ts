import * as fs from "node:fs";

// One sentence (238 characters) to convince a friend who has never coded
// to let an AI agent build their first app idea on make.fun.
const text =
  "That app idea you've been carrying around for ages — just describe it in plain words and an AI agent on make.fun builds a real, working version today, no code, nothing to install, free to try, while you watch it come alive on your screen.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
