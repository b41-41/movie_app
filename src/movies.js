import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
    return (
        <div className="movie" data-id={id}>
            <h3 className="movie__title">{title} <span className="movie__title-icon"><i className="fas fa-arrow-right"></i></span></h3>
            <div className="movie__year">
                <h3 className="movie__year-title">{year} </h3>
                <span className="movie__year-hrForm"><hr className="movie__year-hr" /></span>
            </div>
            <img className="movie__image" src={poster} alt={title} title={title} />
        </div>
        // <div class="movie">
        //     <div class="movie__data">
        //         <div class="movies__movie">
        // <h3 class="movie__title">{title}</h3>
        // <h5 class="movie__year">{year}</h5>
        // <p class="movie__summary">{summary}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;