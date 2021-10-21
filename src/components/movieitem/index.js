import React from "react";
import styled from 'styled-components';
import '../../css/item.scss'

export default class MovieItem extends React.Component {

  render() {
    const { movies, genres } = this.props;

    return (
      // Complete the MovieItem component
      <MovieItemWrapper>

        <LeftCont>
          {/* map movies here */}

          {movies.map(movie =>
            <div className="leftItem" key={movie.id}>
              <img className="movieImg" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
              <h3 className="movieTitle">{movie.title}</h3>
              <p className="movieRelease">RELEASE DATE: {movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          )}
        </LeftCont>

        <RightCont>
          {/* map genres list here */}
            {}
        </RightCont>
      </MovieItemWrapper>
    )
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`

const LeftCont = styled.div`
  display: inline-block;
  background-color: white;

`

const RightCont = styled.div`
  display: inline-block;
`