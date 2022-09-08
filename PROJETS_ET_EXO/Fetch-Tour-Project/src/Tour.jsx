import { useState } from 'react';

const Tour = (props) => {
  const { id, name, info, image, price } = props.voyage;
  const { removeItem } = props;

  const [i, setI] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>{price}$</h4>
        </div>

        <p>
          {i ? info.substring(0, 200) + '...' : info}
          <button onClick={() => setI(!i)}>
            {i ? 'lire plus' : 'lire moins'}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeItem(id)}>
          supprimer le voyage
        </button>
      </footer>
    </article>
  );
};

export default Tour;
