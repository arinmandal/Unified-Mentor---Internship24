import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const HelpPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-mainBg min-h-screen p-8 text-gray-700 text-center">
      <h1
        onClick={() => navigate('/')}
        className='text-center text-2xl sm:text-3xl font-bold text-orange-500 hover:cursor-pointer'>
        Dine<span className='text-gray-800'>Direct <span className='text-gray-400'>Help</span></span>
      </h1>
      <p className="text-lg mb-8">
        Welcome to DineDirect! We're here to help you navigate our food
        delivery app with ease.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-4">How to Order Food</h3>
          <ol className="list-decimal list-inside">
            <li>Browse through our wide selection of restaurants.</li>
            <li>Choose your desired restaurant and browse their menu.</li>
            <li>Add items to your cart and proceed to checkout.</li>
            <li>Enter your delivery address and payment information.</li>
            <li>Submit your order and track its progress.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Contact Us</h3>
          <p>
            If you have any questions or need assistance, please don't hesitate
            to contact us:
          </p>
          <a href="mailto:support@dinedirect.com" className="underline">
            support@dinedirect.com (demo)
          </a>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Developer Information</h3>
          <p>
            This project was developed by <span className='text-orange-500 font-bold'><Link target="_blank" to="https://github.com/arinmandal">Arin Mandal</Link></span>  as an internship project.
        </p>
      </div>
    </div>
    </div >
  );
};

export default HelpPage;
