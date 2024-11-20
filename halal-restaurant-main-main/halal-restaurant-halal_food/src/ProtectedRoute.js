// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase'; // Import your Firebase auth instance

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!auth.currentUser; // Check if the user is authenticated

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
