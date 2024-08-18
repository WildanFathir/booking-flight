import { PrismaClient } from "@prisma/client";
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const password = bcrypt.hashSync("demo123", 10);

  const userSeed = await prisma.user.create({
    data: {
      email: "demo@gmail.com",
      name: "demo",
      role: "ADMIN",
      password,
    },
  });

  console.log(userSeed);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
