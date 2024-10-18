import RecipeAttributes from "../model/recipe";
// Define the Recipe seed data
export const seedRecipes = async () => {
  await RecipeAttributes.bulkCreate(
    [
      {
        name: "Spaghetti Carbonara",
        prepTime: 30,
        ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese"],
        instructions:
          "Cook spaghetti. Fry bacon. Mix eggs and cheese. Combine all ingredients.",
        userId: 1,
      },
      {
        name: "Chicken Alfredo",
        prepTime: 45,
        ingredients: [
          "fettuccine",
          "chicken",
          "butter",
          "cream",
          "parmesan cheese",
        ],
        instructions:
          "Cook fettuccine. Cook chicken. Melt butter. Add cream and cheese. Combine all ingredients.",
        userId: 2,
      },
      {
        name: "Beef Stroganoff",
        prepTime: 60,
        ingredients: ["beef", "onion", "mushrooms", "sour cream"],
        instructions:
          "Cook beef. Fry onion and mushrooms. Add sour cream. Combine all ingredients.",
        userId: 3,
      },
      {
        name: "Chicken Parmesan",
        prepTime: 45,
        ingredients: [
          "chicken",
          "flour",
          "eggs",
          "breadcrumbs",
          "tomato sauce",
          "mozzarella cheese",
        ],
        instructions:
          "Bread chicken. Fry chicken. Add tomato sauce and cheese. Bake until cheese melts.",
        userId: 3,
      },
    ],
    { individualHooks: true }
  );
};
