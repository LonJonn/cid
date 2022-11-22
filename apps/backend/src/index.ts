import { getPost, prisma } from "@cid/server";

void (async () => {
  const posts = await getPost(1);
  console.log({ posts, woah: "HEY THERE" });

  await prisma.$disconnect();
})();
