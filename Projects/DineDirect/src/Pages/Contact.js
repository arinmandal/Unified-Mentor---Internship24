import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact the Developer</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-6">
              Thank you for your interest in DineDirect! If you have any questions, suggestions, or just want to say hello, feel free to reach out using any of the methods below.
            </p>
            <div className="space-y-4">
              <a href="mailto:developer@dinedirect.com" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <FaEnvelope className="mr-3" />
                <span>developer@dinedirect.com</span>
              </a>
              <a href="https://github.com/dinedirect-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
                <FaGithub className="mr-3" />
                <span>GitHub: dinedirect-dev</span>
              </a>
              <a href="https://linkedin.com/in/dinedirect-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-300">
                <FaLinkedin className="mr-3" />
                <span>LinkedIn: DineDirect Developer</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            We appreciate your feedback and look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
