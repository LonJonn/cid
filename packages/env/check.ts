import { parse as parsePublic } from "./src/public";
import { parse as parseSecret } from "./src/secret";

try {
  parsePublic();
  parseSecret();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
    process.exit(1);
  }

  throw error;
}
