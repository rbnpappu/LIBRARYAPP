import BookImg from "../UI/BookImg";
import BookInfo from "../UI/BookInfo";
import Button from '../UI/Button';
import classes from '../styles/style.module.css';

function BookCard({ coverId, title, author, year, status }) {
    // Check if any of the required props is missing
    if (!coverId || !title || !author || !year) {
        return null; // Skip rendering the card if any required prop is missing
    }

    return (
        <div className={classes.card}>
            <BookImg coverId={coverId} /> {/* Always render BookImg */}
            <BookInfo bookInfo={title} type={"title"} />
            <BookInfo bookInfo={author} type={"author"} />
            <BookInfo bookInfo={year} type={"year"} />
            <Button status={status} />
        </div>
    );
}

export default BookCard;
