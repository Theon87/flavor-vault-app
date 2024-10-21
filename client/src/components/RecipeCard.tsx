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
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://img.spoonacular.com/recipes/716429-556x370.jpg"
          alt="Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
        </Typography>
        <Typography>
          Discover mouthwatering Pasta recipes.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default RecipeCard;