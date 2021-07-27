import React from 'react';

function InfoSection() {
  return (
    <div className="info-section w-9/12 md:w-3/5 mx-auto mt-10">
      <div id="how-it-works">
        <h3 className="text-2xl font-bold">How it Works</h3>
        <ul className="list-disc ml-10 text-lg text-gray-500">
          <li>We find the 500 Top Posts from the Past Year for a Subreddit.</li>
          <li>The Data is Visualized in a Heatmap Grouped by Weekday and Hour of the Day.</li>
          <li>See Immediately when to Submit your Reddit Post.</li>
        </ul>
      </div>
      <div id="about-us" className="mt-10">
        <h1 className="text-2xl font-bold">About us</h1>
        <ul className="list-disc ml-10 text-lg text-gray-500">
          <li>We are a Team of two Developers from Portugal.</li>
          <li>This App was created with the Goal to Implement a Real-World Application with Professional Workflows.</li>
          <li>And Tools like Notion, GitHub, Pull Requests and Code Reviews.</li>
        </ul>
      </div>
      <div id="contacts" className="mt-10">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <ul className="list-disc ml-10 text-lg text-gray-500">
          <li>Guido Pereira</li>
          <li>Fábio Duarte</li>
        </ul>
      </div>
    </div>
  );
}

export default InfoSection;

