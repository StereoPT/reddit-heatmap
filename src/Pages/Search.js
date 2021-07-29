import React from 'react';
import { useParams } from 'react-router-dom';

import SearchSection from '../Components/SearchSection';
import HeatmapSection from '../Components/HeatmapSection';
import TableSection from '../Components/TableSection';

import { SearchProvider } from '../Store/Context';

function Search() {
  const { subreddit } = useParams();

  return (
    <SearchProvider>
      <SearchSection search={ subreddit }/>
      <HeatmapSection />
      <TableSection />
    </SearchProvider>
  );
}

export default Search;