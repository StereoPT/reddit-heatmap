import React from 'react';
import styled from 'styled-components';

function HeroSection() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold">Looking for the Best Time to Post?</h1>
      <h3 className="text-lg mt-4">You are in the right place! Find the best time to post on your Subreddit.</h3>
      <CallToAction className="my-12 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-white text-md font-bold">Show me the Best Time</CallToAction>
      <p className="text-lg text-gray-400">r/javascript</p>
      <img src="" alt="" />
    </div>
  );
}

const CallToAction = styled.button``;

export default HeroSection;
