import React from 'react';
import $ from 'jquery';
import Movie from './movie';
import ReviewInput from './review-form';

const apiUrl = 'https://6688a5410ea28ca88b85b20f.mockapi.io/movie';

class MovieList extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        Movie.getMovie().then(movies => {
            this.setState({ movies });
        });
    }
render(){
    return (
        <div className='row'>
           <div className='col-6'> 
        {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
            
        ))
        }
       
        </div>
        <div className='col-6'>
            <ReviewInput />
        </div>
        </div>
    );
}
};

export default MovieList

