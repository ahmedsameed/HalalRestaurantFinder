import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Card, CardContent } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home page on successful signup
    } catch (error) {
      setError('Failed to create an account. Please try again.'); // Handle errors
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#121212' : '#f4f4f4',
        margin: 0,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 4,
          boxShadow: (theme) =>
            theme.palette.mode === 'dark'
              ? '0 8px 20px rgba(0, 0, 0, 0.4)'
              : '0 8px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={2}
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            Sign Up
          </Typography>

          {error && (
            <Typography
              color="error"
              textAlign="center"
              mb={2}
              sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
            >
              {error}
            </Typography>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: '12px 0',
              }}
            >
              Sign Up
            </Button>
          </Box>

          <Typography
            variant="body2"
            textAlign="center"
            mt={3}
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            Already have an account?{' '}
            <Link
              component={RouterLink}
              to="/login"
              sx={{
                fontWeight: 'bold',
                color: (theme) => theme.palette.primary.main,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Signup;
