import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
            <AlertCircle className="h-32 w-32 text-indigo-200" />
          </div>
          <AlertCircle className="h-32 w-32 text-indigo-600 relative z-10 mx-auto" />
        </div>
        
        <h1 className="mt-8 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you're looking for seems to have gone missing.
        </p>
        
        <div className="mt-8 space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            Return Home
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            If you believe this is a mistake, please{' '}
            <Link to="/contact" className="text-indigo-600 hover:text-indigo-500">
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}