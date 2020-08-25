import SimpleIcon from '@src/hooks/use-simple-icons';
import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import React from 'react';
import { Hits, InstantSearch, SearchBox, Stats } from 'react-instantsearch-dom';
import Hit from './Hit';
import Posts from './Posts';
import { StyledSearch } from './Search.style';
const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

const Search = ({ props }) => {
  const { location } = props;

  const [searchState, setSearchState] = React.useState(
    urlToSearchState(location)
  );

  const onSearchStateChange = updatedSearchState => {
    setSearchState(updatedSearchState);
  };

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  return (
    <StyledSearch>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <SearchBox
          translations={{
            placeholder: 'Search by titile tagname or description...',
          }}
        />

        {searchState && searchState.query ? (
          <>
            <Stats
              translations={{
                stats(nbHits) {
                  return `${nbHits} Results`;
                },
              }}
            />
            <div>
              Powered by Algolia
              <SimpleIcon stack="Algolia" />
              <Hits hitComponent={Hit} />
            </div>
          </>
        ) : (
          <Posts />
        )}
      </InstantSearch>
    </StyledSearch>
  );
};

export default Search;
