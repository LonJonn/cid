import { getPost } from "@cid/server";

void (async () => {
  const posts = await getPost(1);
  console.log({ posts, woah: "HEY THERE" });
})();
