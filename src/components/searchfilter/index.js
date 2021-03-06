import React from "react";
import styled, { css } from 'styled-components';

import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {


  render () {
    const { genres, ratings, languages, searchMovies } = this.props;

    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
          <SearchBar searchMovies={searchMovies}/>
        </SearchFiltersCont>

        <SearchFiltersCont>
          <CategoryTitle>Movies</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          <ExpandableFilter genres={genres} ratings={ratings} languages={languages} />
        </SearchFiltersCont>
      </FiltersWrapper>
    )
  }
}

const FiltersWrapper = styled.div`
  position: relative;

`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  ${'' /* width: 100px; */}

  ${'' /* &:hover{
    width: 90%;
    
  } */}
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
`

const CategoryTitle = styled.div`
  font-weight: 900;
  font-size: 2rem;
`