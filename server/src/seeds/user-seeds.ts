import { User } from "../model/user.js";

// Define the User seed data
export const seedUsers = async () => {
  await User.bulkCreate(
    [
      {
        id: 1,
        username: "Kurlee710",
        email: "kurlee@bootcamp.com",
        password: "password123",
      },
      {
        id: 2,
        username: "JSmith",
        email: "j.smith@gmail.com",
        password: "password456",
      },
      {
        id: 3,
        username: "Pamela.b",
        email: "p.bay@aol.com",
        password: "password789",
      },
    ],
    { individualHooks: true }
  );
};
