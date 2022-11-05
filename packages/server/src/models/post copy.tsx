import type { Post } from "@prisma/client";
import { prisma, PrismaClient } from "../client";

export async function getAllPosts() {
  return prisma.post.findMany();
}

export async function getPost(id: number) {
  return prisma.post.findUnique({ where: { id } });
}
