// RecipeCard.js
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const RecipeCard = ({ recipe, onClick }) => (
  <Card onClick={onClick} sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.details}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default RecipeCard;
