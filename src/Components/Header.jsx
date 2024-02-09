import library from '../assests/library_logo.png' // Corrected path

function Header() {
    return (
        <>
            <img src={library} alt="Library Logo" /> {/* Corrected img tag */}
        </>
    );
}

export default Header;
