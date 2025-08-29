import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_BASE_URL

  
 } from '../constants';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (token) => {
    localStorage.setItem('token', token);
    fetchUserData(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const fetchUserData = async (token, retries = 3) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
      });
  
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        throw new Error('Invalid token');
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (retries > 0) {
        console.log(`Retrying... attempts remaining: ${retries - 1}`);
        await fetchUserData(token, retries - 1);
      } else {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token);
    } else {
      setLoading(false); 
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
