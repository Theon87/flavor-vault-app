// import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


const RecipeCard = () => {
// Mock function for saving the recipe
const saveRecipe = () => {
  alert("Recipe saved!");
};

return (
  <Card className="mt-6 w-96">
    <CardHeader color="blue-gray" className="relative h-56">
      <img
        src="https://img.spoonacular.com/recipes/716429-556x370.jpg"
        alt="Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
      />
      <br />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
      </Typography>
      <Typography>
        Discover mouthwatering Pasta recipes.
      </Typography>
    </CardBody>
    <CardFooter className="pt-0 flex justify-between">
      {/* Save Button */}
      <Button color="green" onClick={saveRecipe}>
        Save
      </Button>
      {/* Read More Button */}
      <Button color="blue">Read More</Button>
    </CardFooter>
  </Card>
);
};

export default RecipeCard;
