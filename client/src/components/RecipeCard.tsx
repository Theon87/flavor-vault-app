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
    <Card className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white p-6 mt-6">
      <img
        src="https://img.spoonacular.com/recipes/716429-556x370.jpg"
        alt="Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
      />
      <CardHeader className="relative h-56 text-grey">
        Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
        <br></br>
        <Typography variant="h5" color="red" className="mb-2 text-dark-grey">
          Discover mouthwatering Pasta recipes.
        </Typography>
      </CardHeader>

      <CardBody className="pt-0 flex justify-between">
        {/* Save Button */}
        <Button color="green" className="text-grey" onClick={saveRecipe}>
          Save
        </Button>
        {/* Read More Button */}
        <Button color="blue" className="text-grey">
          Read More
        </Button>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
