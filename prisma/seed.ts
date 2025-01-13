import { db } from "../lib/db";
import bcrypt from "bcryptjs";

const users = {
  name: "Mason",
  email: "mason@example.com",
  password: "mason12345",
};

async function main() {
  const userCount = await db.user.count();

  if (!userCount) {
    await db.user.create({
      data: {
        name: users.name,
        email: users.email,
        password: await bcrypt.hash(users.password, 10),
      },
    });

    console.log("User seeding was successful");
  } else {
    console.log("Users already exist. Skipping seeding.");
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (error) => {
    console.error("Error seeding database:", error);
    await db.$disconnect();
    process.exit(1);
  });
