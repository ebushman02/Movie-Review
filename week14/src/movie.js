import React from 'react';
import $ from 'jquery';
import ReviewList from './review-list';
import ReviewInput from './review-form';



export default class Movie extends React.Component {
   
    static url = 'https://6688a5410ea28ca88b85b20f.mockapi.io/movie'

    static getMovie() {
        return $.get(this.url);
    }

    static createMovie(title, runtime, rating, cover) {
        return $.post(this.url, { title, runtime, rating, cover });
    }

    static updateMovie(id, newTitle, newRuntime, newRating, newCover) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: 'PUT',
            data: JSON.stringify({ title: newTitle, runtime: newRuntime, rating: newRating, cover: newCover }),
            contentType: 'application/json',
            crossDomain: true,
        });
    }

    static deleteMovie(id) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: 'DELETE',
        });
    }
    

    render() {
        const { movie } = this.props; // Assuming review is passed as a prop

        return(
        <div className='row'>
           <div className='col-lg'>
            <div className='card'>
                <div className='card-header'>
            <h2>{movie.title}</h2>
                </div>
                <div className='card-body'>
            <div display='inline'>
                <img src={movie.cover} alt="Cover" width='25%' align='right' display='inline'/>
            </div>
            <div>
                <strong>Runtime:</strong> {movie.runtime}
            </div>
            <div>
                <strong>Rating:</strong> {movie.rating}
            </div>
           
            </div>
            <div className='card-body'>
            <ReviewList movie={movie} />
            </div>
            
            </div>
            </div>
        </div>
       
    )}
}

