import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import categoriesData from './Categories.json';

const Categories = () => {
  const { categoryId } = useParams();
  const category = categoriesData.find(c => c.id === Number(categoryId));

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {categoryId ? (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">{category.name}</h1>
          <p className="text-gray-700 text-lg">{category.description}</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">All Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.map((category) => (
              <div key={category.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description.slice(0, 100)}...</p>
                <a
                  href={`/categories/${category.id}`}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  View More
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
