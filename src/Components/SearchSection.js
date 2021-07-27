import React, { useState } from 'react';

function SearchSection({ search }) {
  const [ subreddit, setSubreddit ] = useState(search ?? '');

  function subredditChange(event) {
    setSubreddit(event.target.value);
  }

  function searchSubreddit() {
    console.log(subreddit);
  }

  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold mb-8">Looking for the Best Time to Post?</h1>
      <div className="inline">
        <input
          className="border-2 border-r-0 rounded-l-lg px-4 py-2 text-lg"
          type="text"
          placeholder={ search ? '' : 'Choose Subreddit'}
          value={ subreddit }
          onChange={ subredditChange }
        />
        <button
          type="button"
          className="bg-yellow-400 px-4 py-2 text-lg text-white rounded-r-lg border-2 border-l-0"
          onClick={ searchSubreddit }
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchSection;
