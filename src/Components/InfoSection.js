import React from 'react';

function InfoSection() {
  return (
    <>
      <div className="info-section text-center">
        <div id="how-it-works">
          <h1 className="text-4xl font-bold">How it Works</h1>
          <h3 className="text-lg mt-4">Description</h3>
        </div>
        <div id="about-us">
          <h1 className="text-4xl font-bold">About us</h1>
          <h3 className="text-lg mt-4">We are fucking fun</h3>
        </div>
        <div id="contacts">
          <h1 className="text-4xl font-bold">Contacts</h1>
          <h3 className="text-lg mt-4">Please contact us</h3>
        </div>
      </div>
    </>
  );
}

export default InfoSection;

