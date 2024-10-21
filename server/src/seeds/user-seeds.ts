import { User } from "../model/index.js";

// Define the User seed data
export const seedUsers = async () => {
  console.log("creating users")
  await User.bulkCreate(
    [
      {
        username: "Kurlee710",
        email: "kurlee@bootcamp.com",
        password: "password123"
      },
      {
        username: "JSmith",
        email: "j.smith@gmail.com",
        password: "password456"
      },
      {
        username: "Pamela.b",
        email: "p.bay@aol.com",
        password: "password789"
      },
    ],
    { individualHooks: true }
  );
  
};
