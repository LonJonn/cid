import { prisma } from "../src";

async function main() {
  const me = await prisma.user.create({
    data: {
      id: 1,
      email: "leon@test.com",
      name: "Leon",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error("❌ seed.ts failed.");
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
