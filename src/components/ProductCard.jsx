// src/components/ProductCard.js
import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105">
      {/* Product Image */}
      {console.log('ProductCard rendering for product:', product)}
      {console.log('Image path being used:', product && product.image)}
      <div className="w-full h-48 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain rounded-md"
        />
      </div>

      {/* Product Name */}
      <h3 className="font-primary text-2xl font-semibold text-yellow-800 mb-2">
        {product.name}
      </h3>

      {/* Product Description */}
      <p className="text-gray-600 text-base mb-4 flex-grow">
        {product.description}
      </p>

      {/* Product Price */}
      <p className="text-red-700 font-bold text-xl mb-4">
        {product.price}
      </p>

      {/* Buy Button (WhatsApp Link) */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors duration-200 font-semibold text-lg"
      >
        Order
      </a>
    </div>
  );
};

export default ProductCard;