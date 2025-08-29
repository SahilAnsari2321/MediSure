import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <Outlet />
    </div>
  );
}