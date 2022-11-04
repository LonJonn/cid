import { getPost, prisma } from "@cid/server";

(async () => {
  const posts = await getPost(1);
  console.log({ posts, woah: "HEY" });

  await prisma.$disconnect();
})();
