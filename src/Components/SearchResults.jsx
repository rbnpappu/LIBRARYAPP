import { useCallback } from 'react';
import BookCard from './BookCard';
import classes  from '../styles/style.module.css';

function SearchResults({ booksData }) {
    const renderBookCard = useCallback((book, index) => {
        return (
            <li key={index}>
                <BookCard
                    coverId={book.cover_i}
                    title={book.title}
                    author={book.author_name?.join(", ") || "Unknown Author"}
                    year={book.first_publish_year}
                    status="Read"
                />
            </li>
        );
    }, []);

    return (
        <ul className={classes.list}>
            {booksData && booksData.map(renderBookCard)}
        </ul>
    );
}

export default SearchResults;
