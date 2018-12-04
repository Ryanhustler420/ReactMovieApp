import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../config';
import Navigation from './../elements/Navigation/Navigation';
import FourColGrid from './../elements/FourColGrid/FourColGrid';
import Spinner from './../elements/Spinner/Spinner';
import './Movie.css';
import MovieInfo from './../elements/MovieInfo/MovieInfo';
import MovieInfoBar from './../elements/MovieInfoBar/MovieInfoBar';

class Movie extends Component {
    render() {
        return (
            <div className='rmdb-movie'>
                <Navigation />
                <MovieInfo />
                <MovieInfoBar />
                <FourColGrid />
                <Spinner />
            </div>
        )
    }
}

export default Movie;