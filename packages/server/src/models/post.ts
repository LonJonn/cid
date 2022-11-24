import { prisma } from "@cid/db";

export async function getAllPosts() {
  return prisma.post.findMany();
}

export async function getPost(id: number) {
  return prisma.post.findUnique({ where: { id } });
}
