import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            {/* fancy way to do an if statement like if there isnt a previous page, dont show button */}
            {/* if we have a previous page function, then do what agter the && */}
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
