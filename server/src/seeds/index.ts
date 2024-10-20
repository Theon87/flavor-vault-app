// import { seedUsers } from "./user-seeds.js";
import { seedRecipes } from "./recipe-seeds.js";
import sequelize from "../config/connection.js";

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced successfully.");

    // await seedUsers();
    // console.log("Users seeded successfully.");

    await seedRecipes();
    console.log("Recipes seeded successfully.");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedAll();
