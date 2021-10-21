import React from "react";
import styled from 'styled-components';
import '../../css/checkbox.scss'

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    const { genres, ratings, languages } = this.props

    languages.map(lang => {
      console.log(lang.name)
    })

    return (
      <CheckboxCont>

        <div>
          <p>GENRES</p>
          <div className="checkGenre">
            {genres.map(genre =>
              <div className="checkItem" id={genre.id}>
                <label>
                  <input type="checkbox" />
                  {genre.name}
                </label>
              </div>
            )}
          </div>
        </div>

        <div>
          <p>LANGUAGE</p>
          <div className="checkLang">
            {languages.map(lang =>
              <div className="checkItem" id={lang.id}>
                <label>
                  <input type="checkbox" />
                  {lang.name}
                </label>
              </div>
            )}
          </div>
        </div>

        <div >
          <p>RATING</p>
          <div className="checkRating">
            {ratings.map(rating =>
              <div className="checkItem checkRating" id={rating.id}>
                <label>
                  <input type="checkbox" />
                  {rating.name}
                </label>
              </div>
            )}
          </div>
        </div>



      </CheckboxCont>
    )
  }
}

const CheckboxCont = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 900px){
    flex-direction: column;
  }
`