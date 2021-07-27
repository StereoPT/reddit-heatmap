import React from 'react';
import { useParams } from 'react-router-dom';

import SearchSection from '../Components/SearchSection';
import HeatmapSection from '../Components/HeatmapSection';
import TableSection from '../Components/TableSection';

function Search() {
  const { subreddit } = useParams();

  return (
    <>
      <SearchSection search={ subreddit }/>
      <HeatmapSection />
      <TableSection />
    </>
  );
}

export default Search;