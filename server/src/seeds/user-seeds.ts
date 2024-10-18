import User from "../model/user.js";

// Define the User seed data
export const seedUsers = async () => {
  await User.bulkCreate(
    [
      {
        username: "Kurlee710",
        email: "kurlee@bootcamp.com",
        password: "password123",
      },
    ],
    { individualHooks: true }
  );
};
