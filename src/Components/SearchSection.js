import React, { useState } from 'react';
import { SearchConsumer } from '../Store/Context';

function SearchSection({ search }) {
  const [ subreddit, setSubreddit ] = useState(search ?? '');

  function subredditChange(event) {
    setSubreddit(event.target.value);
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
        <SearchConsumer>
          {value => (
            <button
              type="button"
              className="bg-yellow-400 px-4 py-2 text-lg text-white rounded-r-lg border-2 border-l-0"
              onClick={() => value.setSearch(subreddit)}
            >
              Search
            </button>
            )
          } 
        </SearchConsumer>
      </div>
    </div>
  );
}

export default SearchSection;
