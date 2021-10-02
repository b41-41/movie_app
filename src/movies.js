import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
    return (
        <div class="movie" data-id={id}>
            <h3 class="movie__title">{title} <span class="movie__title-icon"><i class="fas fa-arrow-right"></i></span></h3>
            <div class="movie__year">
                <h3 class="movie__year-title">{year} </h3>
                <span class="movie__year-hrForm"><hr class="movie__year-hr" /></span>
            </div>
            <img class="movie__image" src={poster} alt={title} title={title} />
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
    poster: PropTypes.string.isRequired
}

export default Movie;