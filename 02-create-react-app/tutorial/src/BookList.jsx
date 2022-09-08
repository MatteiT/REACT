import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
    <section className='booklist'>
    {books.map(book=>{
        return <Book{...book} key={book.id}/>
    })}
    </section>
    </>
  );
};




export default BookList