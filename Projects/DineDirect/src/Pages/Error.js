import React from 'react';

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Oops! Something went wrong.</h1>
          <p className="text-lg text-gray-600">
            We're sorry, but there seems to be an error. Please try again later.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
