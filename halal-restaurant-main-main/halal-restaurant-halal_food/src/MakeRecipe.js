// MakeRecipe.js
import React from 'react';
import { Container, Grid } from '@mui/material';
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

const MakeRecipe = () => {
  const navigate = useNavigate();

  const recipeData = [
    {
      name: "Chicken Tikka",
      image: "https://sinfullyspicy.com/wp-content/uploads/2014/03/1200-by-1200-images-2.jpg",
      details: "Juicy, marinated chicken pieces grilled to perfection.",
      route: "/chicken-tikka", // Specific route for each recipe
      id: 1,
    },
    {
      name: "Fish and Chips",
      image: "https://popmenucloud.com/ndlfytsi/53efe563-28a2-43b7-a053-fa1688da7693.jpg",
      details: "A classic British dish with crispy battered fish.",
      route: "/fish-and-chips",
      id: 2,
    },
    {
      name: "Maqlouba",
      image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/HS-MAQ/25b64b3d4f950556c534ba9e6223fd26.jpeg",
      details: "A Middle Eastern rice dish with layers of fried vegetables.",
      route: "/maqlouba",
      id: 3,
    },
    {
      name: "Chicken Shawarma",
      image: "https://falasteenifoodie.com/wp-content/uploads/2022/11/Authentic-Middle-Eastern-Chicken-Shawarma.jpg",
      details: "Marinated chicken wrapped in pita bread with garlic sauce.",
      route: "/chicken-shawarma",
      id: 4,
    },
    {
      name: "Hummus",
      image: "https://images.getrecipekit.com/20230523113422-butter-20bean-20hummus-20web-20pic.png?width=650&quality=90&",
      details: "A smooth and creamy dip made from blended chickpeas.",
      route: "/hummus",
      id: 5,
    },
    {
      name: "Zaatar Pie",
      image: "https://www.hungrypaprikas.com/wp-content/uploads/2021/03/Manakish-Cheese-Zaatar-4.jpg",
      details: "Middle Eastern flatbread topped with za'atar spices.",
      route: "/zaatar-pie",
      id: 6,
    },
  ];

  // Navigate to the specific recipe's page on card click
  const handleRecipeClick = (route) => {
    navigate(route); // Programmatically navigate to the recipe's route
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {recipeData.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe.route)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MakeRecipe;
