import React, { useState } from "react";
import styled from 'styled-components';
import '../../css/search.scss';

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default function SearchBar(props) {

    const [keyword, setKeyword] = useState('')
    const [year, setYear] = useState('')

    const keywordHandler = e => setKeyword(e.target.value)

    const yearHandler = e => setYear(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        props.searchMovies(keyword, year)
    }

    return (
        <FormWrapper>

            <form>
                <div className="searchWrapper">
                    <img className="searchIcon" src={SearchIcon} />
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Harry Potter"
                        onChange={keywordHandler}
                        value={keyword}
                    />
                </div>
                <div className="searchWrapper">
                    <img className="searchIcon" src={CalendarIcon} />
                    <input
                        className="searchInput"
                        type="number"
                        placeholder="Year"
                        onChange={yearHandler}
                        value={year}
                    />
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                >
                    submit
                </button>
            </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`

`;