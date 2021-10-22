import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [], // genreOptions is also array of object
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

  }

  // Write a function to preload the popular movies when page loads & get the movie genres
  componentDidMount() {
    fetcher.preloadMovies()
      .then(res => {
        this.setState({ results: res, totalCount: res.length })
      })


    fetcher.getGenres()
      .then(res => this.setState({ genreOptions: res }))

  }

  // Write a function to trigger the API request and load the search results 
  // based on the keyword and year given as parameters
  searchMovies(keyword, year) {
    // feed keyword and year into api call
    fetcher.getMovies(keyword, year)
      .then(res => this.setState({ results: res, totalCount: res.length }))
  }



  render() {
    const { genreOptions, languageOptions, ratingOptions, totalCount, results } = this.state;

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
      {totalCount > 0?<TotalCounter>{totalCount} results</TotalCounter>:
        <TotalCounter>0 results</TotalCounter>}
        <MovieList
        movies={results ||[]}
        genres={genreOptions ||[]}
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
  font-size: 1.5rem;
  ${'' /* margin: 0 auto; */}
`

const MovieResults = styled.div`
  margin-top: 2rem;
`

const MovieFilters = styled.div`

`

const MobilePageTitle = styled.header`

`