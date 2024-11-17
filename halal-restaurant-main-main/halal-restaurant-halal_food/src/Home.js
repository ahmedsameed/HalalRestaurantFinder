import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const userName = auth.currentUser ? auth.currentUser.displayName || "User" : "User";

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Welcome Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Welcome, {userName}!
        </Typography>
        <Box>
          <Avatar />
        </Box>
      </Box>

      {/* Pick a Choice Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Pick a Choice 
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} onClick={() => navigate('/dashboard')}>
            <Box sx={{ textAlign: 'center', cursor: 'pointer' }}>
              <Avatar
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/71/69/3e/barley-board.jpg?w=600&h=400&s=1"
                alt="A description of the image" sx={{ width: 100, height: 100, margin: '0 auto', mb: 1 }}
              />
              <Typography variant="subtitle1">Find a Restaurant</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} onClick={() => navigate('/create-recipe')}>
            <Box sx={{ textAlign: 'center', cursor: 'pointer' }}>
              <Avatar
                src="https://fitmealsprep.com/wp-content/uploads/2023/08/Fit-Meals-Prep_Top-Reasons-Why-Using-Fresh-Ingredients-Really-Matters.jpg"
                alt="A description of the image"  sx={{ width: 100, height: 100, margin: '0 auto', mb: 1 }}
              />
              <Typography variant="subtitle1">Create a Recipe</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} onClick={() => navigate('/food-waste')}>
            <Box sx={{ textAlign: 'center', cursor: 'pointer' }}>
              <Avatar
                src="https://media.licdn.com/dms/image/v2/C4D12AQG75b1ljQpmfw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1575750754638?e=2147483647&v=beta&t=DqKwraAyk43NiJ1UPpxT4hXYONhluWj-jnQz1-bZr7w"
                alt="A description of the image" sx={{ width: 100, height: 100, margin: '0 auto', mb: 1 }}
              />
              <Typography variant="subtitle1">donate</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} onClick={() => navigate('/Alternative')}>
            <Box sx={{ textAlign: 'center', cursor: 'pointer' }}>
              <Avatar
                src="https://media.licdn.com/dms/image/v2/C4D12AQG75b1ljQpmfw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1575750754638?e=2147483647&v=beta&t=DqKwraAyk43NiJ1UPpxT4hXYONhluWj-jnQz1-bZr7w"
                alt="A description of the image" sx={{ width: 100, height: 100, margin: '0 auto', mb: 1 }}
              />
              <Typography variant="subtitle1">AlternativeFoodWaste</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Famous in Your Area Section */}
      <Box>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Famous in Your Area
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Al_Baik_Logo.svg/800px-Al_Baik_Logo.svg.png"
              alt="Famous Dish"
              sx={{ width: '50%', borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://kebabuncle.com/wp-content/uploads/2020/02/KebabUncle-logo.jpg"
              alt="Popular Dish"
              sx={{ width: '80%', borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
