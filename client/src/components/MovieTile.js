import React, { Fragment } from 'react'

function MovieTile({movie}) {
    return <Fragment>
        <div className='card m-3'>
            <b>{movie.name}</b>
        </div>
    </Fragment>
}

export default MovieTile
