const Book = ({ title, author, img }) => {
  const clickHandler = (e) => {
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Exemple par référence
      </button>
      <button
        type="button"
        onClick={() => {
          return complexExample(author);
        }}
      >
        Exemple par référence
      </button>
    </article>
  );
};

export default Book;
