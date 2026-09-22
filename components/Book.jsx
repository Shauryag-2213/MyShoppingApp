import React from "react";
import "./Book.css";
const Book = () => {
    return (
        <div className="book">
            <img src = "https://imgs.search.brave.com/EV5dc9ZdfSEi2Uk_IOajazSf5XbIxIUYg69gGmksrJg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ib29r/cmlvdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDgv/SGFycnktUG90dGVy/LWFuZC10aGUtU29y/Y2VyZXJzLVN0b25l/LUJvb2stQ292ZXIt/MjA5eDMwMC5qcGcu/b3B0aW1hbC5qcGc" alt="Book Image"/>
            <h3>Harry Potter</h3>
            <h3>Price: $45</h3>
            <button>Add To Cart</button>    
        </div>
    )
}
export default Book;