# Movie Search, CORD Challenge

### Overview 
The main functionality of the app is to search movies on [theMovieDB]. Before searching the movies, it will preload the popular movies. I uploaded the challenge app on [Heroku].

### API documentation
Need to replace your own API_KEY if anyone wants to implement it.
In fetcher.js, there are three API calls, 
- **search movies**: implemented debounce function which can limit the API calls. It will request the API call after 500ms once user finishes typing.
- **preaload movies**
- **get movie genres**

### Personal Details
- **Name**: Meng Ju Kuo
- **Email**: rickykuo925@gmail.com
- **Mobile**: (+44)759-6055650

Packages & Technologies used in the repo:
- `axios`
- `node-sass`
- `react-router-dom`
- `styled-components`
- `react-icons`: additional package used

[theMovieDB]: <https://www.themoviedb.org/documentation/api>
[Heroku]: <https://cord-movie-search.herokuapp.com/discover>