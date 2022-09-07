import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/61Q2a6OPMRL._AC_UL302_SR302,200_.jpg',
  title: 'Le pouvoir du moment présent',
  author: 'Eckhart Tolle'
};

const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/9161teLdxwL._AC_UL302_SR302,200_.jpg',
  title: 'One Piece T05',
  author: 'Eiichiro Oda'
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        title={firstBook.title}
        author={firstBook.author.toUpperCase()}
        img={firstBook.img}
      />
      <Book {...secondBook} />
    </section>
  );
};

const Book = ({ title, author, img, children }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<BookList />);