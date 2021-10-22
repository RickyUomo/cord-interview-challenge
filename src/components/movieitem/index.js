import React from "react";
import styled from 'styled-components';
import '../../css/item.scss'

export default class MovieItem extends React.Component {

  render() {
    const { movies } = this.props;

    return (
      // Complete the MovieItem component
      <MovieItemWrapper className="wrapper">

        <LeftCont >
          {movies.map(movie =>
            <div className="movieItem" key={movie.id}>
              <img className="movieImg" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
              <h3 className="movieTitle">{movie.title}</h3>
              <p className="movieRelease">RELEASE DATE: {movie.release_date}</p>
              <p className="movieOverview">{movie.overview}</p>
            </div>
          )}
        </LeftCont>

      </MovieItemWrapper>
    )
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const LeftCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 800px){
    display: grid;
    grid-template-columns: 1fr;
  }
`
