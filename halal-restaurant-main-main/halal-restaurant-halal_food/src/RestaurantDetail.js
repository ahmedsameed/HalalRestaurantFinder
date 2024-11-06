import React, { useState } from 'react';
import { Box, Typography, Grid, Avatar, Paper, Rating, Button, Card, CardContent, CardMedia, Divider } from '@mui/material';

const restaurantsData = [
  {
    name: "Al-Baik",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Al_Baik_Logo.svg/1200px-Al_Baik_Logo.svg.png",
    rating: 4.8,
    reviews: "20k+ ratings",
    address: "3174 Al Masjid Al Haram Rd, Alaziziyyah, Makkah 24243, Saudi Arabia",
    googleMapLink: "https://www.google.com/maps?q=AlBaik,+3174+Al+Masjid+Al+Haram+Rd,+Alaziziyyah,+Makkah+24243,+Saudi+Arabia",
    categories: ["Chicken", "Seafood", "Desserts", "Beverages"],
    menuItems: [
      {
        category: "Chicken",
        items: [
          { name: "4 pcs chicken broasted - spicy"},
          { name: "10 pcs chicken nuggets meal - spicy"},
          { name: "Big Baik with Cheese - regular"},
          { name: "Bbq Baik"}
        ]
      }
    ],
    reviewsData: [
      {
        reviewer: "Mohammad Alam",
        rating: 5,
        review: "The meal was enjoyable, a feast for delight.",
        date: "2 months ago",
        photos: 382
      },
      {
        reviewer: "Danial Southern",
        rating: 4.5,
        review: "Personally, I liked fish sandwich, fried chicken, and nuggets sauce.",
        date: "1 year ago",
        photos: 1452
      }
    ]
  },
  {
    name: "Afrah Mediterranean Restaurant Richardson",
    image: "https://www.afrah.com/wp-content/uploads/2021/10/afrah-logo.png",
    rating: 4.2,
    reviews: "4k+ ratings",
    address: "318 E Main St, Richardson, TX 75081",
    googleMapLink: "https://www.google.com/maps?q=318+E+Main+St,+Richardson,+TX+75081",
    categories: ["Beef", "Chicken", "Desserts", "Beverages"],
    menuItems: [
      {
        category: "Beef",
        items: [
          { name: "Beef Shawarma", description: "Parsley, onions, pickles, tomatoes, turnip, tahini sauce" },
          { name: "Beef Kabab", description: "Tomatoes, parsley, onions, pickles, hummus sauce" },
          { name: "Markouk Shawarma", description: "Shawarma wrapped in thin whole wheat bread" },
          { name: "Afrah Burger", description: "1/3 lb beef patty, lettuce, tomatoes, pickles, fried onions, mushrooms" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Brown Kunafeh" },
          { name: "Baklava (4 pcs)" },
          { name: "Bassbousa / Harissa (4 pcs)" }
        ]
      },
      {
        category: "Chicken",
        items: [
          { name: "chicken Shawarma", description: "Parsley, onions, pickles, tomatoes, turnip, tahini sauce" },
          { name: "chicken Kabab", description: "Tomatoes, parsley, onions, pickles, hummus sauce" },
          { name: "Markouk Shawarma", description: "Shawarma wrapped in thin whole wheat bread" },
          { name: "Afrah shishtawook", description: "chicken skewer, lettuce, tomatoes, pickles, fried onions, mushrooms" }
        ]
      }
    ],
    reviewsData: [
      {
        reviewer: "Paolo Tang",
        rating: 5,
        review: "Friendly service and generous servings. Food came out hot and delicious.",
        date: "2 months ago",
        photos: 382
      },
      {
        reviewer: "Bryan Ricci",
        rating: 5,
        review: "The location, service, staff, food, and atmosphere were incredible.",
        date: "1 year ago",
        photos: 96
      }
    ]
  },
  {
    name: "Madina Halal Grill",
    image: "https://menufyproduction.imgix.net/637901406893916799+829805.png?auto=compress,format&fit=max&w=1024&h=1024",
    rating: 4.7,
    reviews: "1,420 ratings",
    address: "114 E Main St, Richardson, TX 75081",
    googleMapLink: "https://www.google.com/maps?q=114+E+Main+St,+Richardson,+TX+75081",
    categories: ["Arabic", "Desserts"],
    menuItems: [
      {
        category: "Arabic",
        items: [
          { name: "MANSAF" },
          { name: "GRAPE LEAVES" },
          { name: "Chicken Shawarma Sandwich", description: "Shawarma wrapped in thin whole wheat bread" },
          { name: "Falafel Sandwich" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Cheesecake" },
          { name: "Baklava" },
          { name: "Gulab Jamun" }
        ]
      }
    ],
    reviewsData: [
      {
        reviewer: "Sally W",
        rating: 5,
        review: "Had 5 different dishes, all were top-notch Moroccan cuisine.",
        date: "6 months ago",
        photos: 65
      },
      {
        reviewer: "Hemalatha Talluri",
        rating: 5,
        review: "A great stop for Mediterranean cravings late at night.",
        date: "3 months ago",
        photos: 80
      }
    ]
  }
];

const RestaurantDetail = () => {
  const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Arabic");

  const restaurant = restaurantsData[selectedRestaurantIndex];

  const handleRestaurantClick = (index) => {
    setSelectedRestaurantIndex(index);
    setSelectedCategory("Arabic");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedMenuItems = restaurant.menuItems.find(
    (menu) => menu.category === selectedCategory
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Restaurant Selection */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
        {restaurantsData.map((restaurant, index) => (
          <Button
            key={restaurant.name}
            variant={selectedRestaurantIndex === index ? "contained" : "outlined"}
            onClick={() => handleRestaurantClick(index)}
          >
            {restaurant.name}
          </Button>
        ))}
      </Box>

      {/* Banner Section */}
      <Box sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="350"
          image={restaurant.image}
          alt={restaurant.name}
          sx={{ borderRadius: 2 }}
        />
      </Box>

      {/* Restaurant Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar
          src={restaurant.image}
          alt={restaurant.name}
          sx={{ width: 100, height: 100, mr: 3, boxShadow: 3 }}
        />
        <Box>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
            {restaurant.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 0.5 }}>
            {`${restaurant.rating} ★ - ${restaurant.reviews}`}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Mediterranean · $$ · Popular
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Location</Typography>
            <Typography variant="body1" color="textSecondary">
              <a href={restaurant.googleMapLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                {restaurant.address}
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Categories Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Menu Categories
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {restaurant.categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "contained" : "outlined"}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  justifyContent: 'flex-start',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  textTransform: 'capitalize',
                  fontWeight: selectedCategory === category ? 'bold' : 'normal'
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Grid>

        {/* Menu Items Section */}
        <Grid item xs={12} sm={9}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
            {selectedCategory}
          </Typography>
          <Grid container spacing={3}>
            {selectedMenuItems &&
              selectedMenuItems.items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="body1" fontWeight="bold" sx={{ textAlign: 'center' }}>
                        {item.name}
                      </Typography>
                      {item.description && (
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1, textAlign: 'center' }}>
                          {item.description}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      {/* Reviews Section */}
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Customer Reviews
        </Typography>
        <Grid container spacing={3}>
          {restaurant.reviewsData.map((review, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                  {review.reviewer}
                </Typography>
                <Rating value={review.rating} readOnly />
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {review.date} · {review.photos} photos
                </Typography>
                <Typography variant="body1">{review.review}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RestaurantDetail;
