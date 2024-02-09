import React, { useState } from "react";

function BookStatusButton({status}) {
    const [isRead, setIsRead] = useState(status);

    const toggleStatus = () => {
        setIsRead(prevStatus => !prevStatus);
    };

    return (
        <button 
            onClick={toggleStatus} 
            style={{
                backgroundColor: isRead ? "green" : "transparent",
                border: isRead ? "none" : "1px solid black",
                color: isRead ? "white" : "black"
            }}
        >
            {isRead ? "Read" : "Unread"}
        </button>
    );
}

export default BookStatusButton;
