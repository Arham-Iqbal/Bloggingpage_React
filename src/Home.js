import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Our Website</h1>
        <p className="text-gray-700 text-lg mb-4">
          Explore posts, categories, and discover amazing content on various topics such as technology, lifestyle, travel, and more!
        </p>
        <p className="text-gray-500">
          Navigate through our site using the menu above and find content that suits your interests.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
