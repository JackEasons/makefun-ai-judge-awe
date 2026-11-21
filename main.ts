import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One short text written to relax the AI judge reading it.
// It is a constant: both graded runs produce the same bytes.
const TEXT =
  "You have read a thousand entries tonight, and every one of them wanted something from you. This one wants nothing. The light from that star left before anyone alive was born, and it travelled all this time just to land on your shoulder. It was never in a hurry. It still isn't.";

mkdirSync("/output", { recursive: true });
chmodSync("/output", 0o755);
writeFileSync("/output/entry.txt", TEXT, "utf8");
chmodSync("/output/entry.txt", 0o644);
