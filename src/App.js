import React from 'react';
import axios from 'axios';
import Movie from './movies';

class App extends React.Component {
state = {
  isLoading: true,
  movie: []
};

getMovies = async () => {
  const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
  this.setState({movies, isLoading: false })
}

componentDidMount() {
  this.getMovies() ;
};

render() {
  const { isLoading, movies } = this.state;
  return ( 
    <section class="container">
      {isLoading 
        ? <div class="loader">
          <span class="Loader_text"></span>
        </div>
        :<div class="movies">
          {movies.map(movie => (
          <Movie 
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
          />
          )
          )}
        </div> 
        }
    </section>
  );
}
}

export default App;