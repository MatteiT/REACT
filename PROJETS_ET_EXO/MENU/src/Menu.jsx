import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, title, price, img, desc } = menuItems;
        return (
          <>
            <article className="menu-items" key={id}>
              <img src={img} alt={title} className="photo" />
            </article>
            <div className="items-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
