import React, { useEffect, useState } from "react";
import { BookItem } from "../BookItem";

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
      setBooks(["","","","","","","","","",""])
  }, [])

  return (
    <div className="row">
      {books.map((data) => (
        <BookItem />
      ))}
    </div>
  );
};
