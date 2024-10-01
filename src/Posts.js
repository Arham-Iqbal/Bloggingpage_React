import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import postsdata from './Posts.json';

const Posts = () => {
  const { postId } = useParams();
  const post = postsdata.find(p => p.id === Number(postId));  

  useEffect(() => {
    console.log(postId);
  }, [postId]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {postId ? (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">{post.title}</h1>
          <p className="text-gray-700 text-lg">{post.content}</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">All Posts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsdata.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
                <a
                  href={`/posts/${post.id}`}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
