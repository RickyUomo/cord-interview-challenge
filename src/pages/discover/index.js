import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      keyword: '',
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 }
      ],
      languageOptions: [
        { id: 'GR', name: 'Greek' },
        { id: 'EN', name: 'English' },
        { id: 'RU', name: 'Russian' },
        { id: 'PO', name: 'Polish' }
      ]
    };

    this.searchMovies = this.searchMovies.bind(this)
  }

  // Write a function to preload the popular movies when page loads & get the movie genres
  // componentsMount, Didmount


  // Write a function to trigger the API request and load the search results 
  // based on the keyword and year given as parameters
  searchMovies(keyword, year){
    // feed keyword and year into api call
    fetcher.getMovies(keyword, year)
    .then(res => this.setState({results: res}))
  }


  
  render () {
    const { genreOptions, languageOptions, ratingOptions, totalCount, results } = this.state;

    console.log(this.state.results)

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on small screens & mobile devices*/}
        <MovieFilters>
          <SearchFilters 
            genres={genreOptions} 
            ratings={ratingOptions}  
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        <MovieResults>
          { totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
          <MovieList 
            movies={results || []}
            genres={genreOptions || []}
          />
        </MovieResults>
      </DiscoverWrapper>
    )
  }
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
`

const TotalCounter = styled.div`
  font-weight: 900;
`

const MovieResults = styled.div`

`

const MovieFilters = styled.div`

`

const MobilePageTitle = styled.header`

`