import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} DineDirect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

