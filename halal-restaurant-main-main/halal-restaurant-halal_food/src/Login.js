import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Card, CardContent } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Ensure this is configured correctly

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirects to home page after successful login
    } catch (error) {
      setError('Invalid email or password. Please try again.'); // Error handling
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
            Login
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
              Login
            </Button>
          </Box>

          <Typography
            variant="body2"
            textAlign="center"
            mt={3}
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            Don't have an account?{' '}
            <Link
              component={RouterLink}
              to="/signup"
              sx={{
                fontWeight: 'bold',
                color: (theme) => theme.palette.primary.main,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Sign up
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
