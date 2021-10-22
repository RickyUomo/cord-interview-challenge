import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import '../../css/search.scss';
import Debounce from './Debounce'

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";


export default function SearchBar(props) {

    const [search, setSearch] = useState({
        keyword: '', year: ''
    })

    const debouncedSearchTerm = Debounce(search.keyword, 500);
    const debouncedSearchTermYear = Debounce(search.year, 500);

    // to make search immediately with 500 ms debounce
    useEffect(
        () => {
            if (debouncedSearchTerm || debouncedSearchTermYear) {
                props.searchMovies(search.keyword, search.year)
            }
        }, [debouncedSearchTerm, debouncedSearchTermYear])

    const onType = e => {
        const { value, name } = e.target

        setSearch({
            ...search,
            [name]: value
        })
    }


    return (
        <FormWrapper>

            <form>
                <div className="searchWrapper">
                    <img className="searchIcon" src={SearchIcon} />
                    <input
                        className="searchInput"
                        type="text"
                        name="keyword"
                        placeholder="Harry Potter"
                        onChange={onType}
                        value={search.keyword}
                    />
                </div>
                <div className="searchWrapper">
                    <img className="searchIcon" src={CalendarIcon} />
                    <input
                        className="searchInput"
                        type="number"
                        name="year"
                        placeholder="Year"
                        onChange={onType}
                        value={search.year}
                    />
                </div>
            </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`

`;