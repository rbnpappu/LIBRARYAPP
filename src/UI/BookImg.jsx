import React from 'react';
import classes from '../styles/style.module.css';

function BookImg({ coverId }) {

    
    // Construct the image URL
    const imageUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null;

    return (
        <>
            {coverId && imageUrl && (
                <div className={classes.coverImgContainer}>
                <img src={imageUrl} alt="Book Cover"  className={classes.coverImg}/>
                </div>
            )}
       
        </>
    );
}

export default BookImg;
