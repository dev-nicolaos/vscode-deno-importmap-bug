import { parse } from "std/flags/mod.ts"
import log1 from "someFile";
import { log2 } from "someFolder/mod.ts";

const flags = parse(Deno.args);

if (flags.a) {
  log1();
} else {
  log2();
}