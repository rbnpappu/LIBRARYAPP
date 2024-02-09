import classes from '../styles/style.module.css';

function BookInfo({ bookInfo, type }) {
    let element = null;

    if (bookInfo) {
        switch (type) {
            case "title":
                element = <h2 className={classes.title}>{bookInfo}</h2>;
                break;
            case "author":
            case "year":
                element = <p className={classes.bookInfo}>{bookInfo}</p>;
                break;
            default:
                break;
        }
    }

    return element;
}

export default BookInfo;
