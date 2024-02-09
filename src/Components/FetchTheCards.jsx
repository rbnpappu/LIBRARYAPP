import React, { useState, useEffect, useCallback } from 'react';
import { useFetch } from '../fetchApi';
import BookCard from './BookCard';
import classes from '../styles/style.module.css';

function FetchTheCard() {
    const { data, loading, error } = useFetch("https://openlibrary.org/people/mekBot/books/already-read.json");
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        if (data && data.reading_log_entries) {
            setBooksData(data.reading_log_entries);
        }
    }, [data]);

    const renderBookCard = useCallback((book, index) => {
        return (
            <BookCard
                key={index}
                coverId={book.work.cover_id}
                title={book.work.title}
                author={book.work.author_names?.join(", ") || "Unknown Author"}
                year={book.work.first_publish_year}
                status="Read"
            />
        );
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <ul className={classes.list}>
                {booksData.map(renderBookCard)}
            </ul>
        </div>
    );
}

export default FetchTheCard;
