// import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


const RecipeCard = () => {
// Mock function for saving the recipe
const saveRecipe = () => {
  alert("Recipe saved!");
};

return (
  <Card className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white p-6 mt-10">
  <img
    src="https://img.spoonacular.com/recipes/716429-556x370.jpg"
    alt="Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
  />
    <CardHeader color="black" className="relative h-56">
    Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
    <br></br>
    <Typography variant="h5" color="blue-gray" className="mb-2">
      Discover mouthwatering Pasta recipes.
      </Typography>
    </CardHeader>

    <CardBody className="pt-0 flex justify-between">
      {/* Save Button */}
      <Button color="green" onClick={saveRecipe}>
        Save
      </Button>
      {/* Read More Button */}
      <Button color="blue">Read More</Button>
    </CardBody>

  </Card>
);
};

export default RecipeCard;
