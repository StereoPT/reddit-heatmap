import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold">Looking for the Best Time to Post?</h1>
      <h3 className="text-lg mt-4">You are in the right place! Find the best time to post on your Subreddit.</h3>
      <Link to="/search/javascript">
        <div className="my-12 bg-yellow-500 hover:bg-yellow-600 px-1 py-3 rounded-lg text-white text-md font-bold w-1/5 mx-auto">
          Show me the Best Time
        </div>
      </Link>
      <p className="text-lg text-gray-400">r/javascript</p>
      <img className="mx-auto mt-4" src="https://via.placeholder.com/700x250" alt="" />
    </div>
  );
}

export default HeroSection;
