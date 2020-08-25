import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import Hit from './Hit';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const Search = () => (
  <InstantSearch
    searchClient={searchClient}
    indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
  >
    <SearchBox
      translations={{ placeholder: 'Search with title, tags or language' }}
    />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);
export default Search;
