import React from 'react';
import Pagination from './Pagination';

const Products = ({products,page}) => {
  return (
    <div className="products">
      {products.map((prod, i) => (
        <span key={prod.id} className='products__single'>
          <img src={prod.thumbnail} alt={prod.title} />
          <span className='title'>{prod.title}</span>
        </span>
      ))}
     
    </div>
  );
};

export default Products;
