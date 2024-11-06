import React from 'react';
import { Container, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';

const AlternativeFoodWaste = () => {
  const alternativeRecipes = {
    Orange: [
      {
        name: "Orange Juice",
        details: "Squeeze fresh oranges to make a refreshing juice. Add some mint for a twist!"
      },
      {
        name: "Orange Salad",
        details: "Combine orange segments with mixed greens, avocado, and a light vinaigrette."
      },
      {
        name: "Candied Oranges",
        details: "Slice oranges, simmer in sugar water until translucent, and let cool for a sweet treat."
      }
    ],
    Carrots: [
      {
        name: "Carrot Cake",
        details: "A moist cake made with grated carrots, spices, and topped with cream cheese frosting."
      },
      {
        name: "Carrot Soup",
        details: "Blend cooked carrots with onion, garlic, vegetable broth, and a touch of ginger for a hearty soup."
      },
      {
        name: "Roasted Carrots",
        details: "Toss carrots with olive oil, salt, and herbs, then roast until tender and caramelized."
      }
    ],
    Bread: [
      {
        name: "Bread Pudding",
        details: "Combine stale bread with milk, eggs, sugar, and spices, then bake until set for a delicious dessert."
      },
      {
        name: "French Toast",
        details: "Dip slices of bread in a mixture of beaten eggs and milk, then cook on a skillet until golden brown."
      },
      {
        name: "Croutons",
        details: "Cube stale bread, toss with olive oil and seasonings, then bake until crispy for salads or soups."
      }
    ],
    Milk: [
      {
        name: "Pudding",
        details: "Cook milk with sugar and cornstarch to make a creamy pudding. Flavor with vanilla or chocolate."
      },
      {
        name: "Creamy Pasta",
        details: "Use leftover milk to create a rich sauce with cheese, garlic, and herbs to coat your pasta."
      },
      {
        name: "Milkshake",
        details: "Blend milk with ice cream and flavorings like chocolate or fruit for a delicious shake."
      }
    ],
    Pasta: [
      {
        name: "Pasta Salad",
        details: "Combine cooked pasta with vegetables, dressing, and protein for a cold salad."
      },
      {
        name: "Pasta Bake",
        details: "Mix cooked pasta with sauce, cheese, and your choice of vegetables or meats, then bake until bubbly."
      },
      {
        name: "Pasta Primavera",
        details: "Toss cooked pasta with sautéed seasonal vegetables and olive oil for a fresh dish."
      }
    ],
    Yogurt: [
      {
        name: "Yogurt Parfait",
        details: "Layer yogurt with granola and fresh fruits for a healthy breakfast or snack."
      },
      {
        name: "Yogurt Dressing",
        details: "Mix yogurt with herbs and spices to create a creamy dressing for salads or dips."
      },
      {
        name: "Yogurt Smoothie",
        details: "Blend yogurt with fruits and a splash of juice for a nutritious smoothie."
      }
    ]
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Alternative Uses for Food Waste
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(alternativeRecipes).map(([food, recipes]) => (
          <Grid item xs={12} sm={6} md={4} key={food}>
            <Paper elevation={3} style={{ padding: 5 }}>
              <Typography variant="h6">{food}</Typography>
              <List>
                {recipes.map((recipe, index) => (
                  <ListItem key={index}>
                    <ListItemText 
                      primary={recipe.name} 
                      secondary={recipe.details} 
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AlternativeFoodWaste;
