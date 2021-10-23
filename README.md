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
- `react-icons`

### Submission guide
Please fork this repo and drop your contact person a note once you are done

### How we review
- **Design**: Were you able to translate the mockup into a web application that works well on various browsers and devices? Does the output match the mockup? Are all the required interactions implemented? This is the most important aspect. Weight: 50%
- **Functionality**: Does the search function work? Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account? Weight: 25%
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with the language's best practices? Do you demonstrate a good grasp of JavaScript, especially ES6? Weight: 15%
- **Performance**: Does the UI render quickly? Are the choice of libraries etc appropriate for the web page? Weight: 10%

### Bonus points
- **Automated Tests** - Are there any automated frontend tests?
- **Documentation** - Is the README well written? Are the commit messages clear?
- **Reporting** - React Profiler report with demonstrated knowledge of reading / reporting performance data 
- **Production-readiness** - Is there proper error handling? Is the code ready to put into production? Code-Splitting?
- **Future-readiness** - React Hooks? Web workers? PWA? Client-side caching?

[theMovieDB]: <https://www.themoviedb.org/documentation/api>
[Heroku]: <https://cord-movie-search.herokuapp.com/discover>