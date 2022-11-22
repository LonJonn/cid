import { parse as parsePublic } from "./public";
import { parse as parseSecret } from "./secret";

export default {
  get public() {
    return parsePublic();
  },
  get secret() {
    return parseSecret();
  },
};
