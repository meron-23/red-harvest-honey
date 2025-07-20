// src/components/FeaturedProducts.js
import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';


const products = [
  {
    id: 1,
    name: "Red Tigray Blossom Honey",
    image: product1, // Image for this product
    description: "A rich, deep golden honey with floral notes, harvested from the highlands of Tigray, Ethiopia. Known for its unique, robust flavor profile.",
    price: "$25.00",
    link: "https://wa.me/+251912345678?text=I'm%20interested%20in%20Red%20Tigray%20Blossom%20Honey." // Replace with actual phone number
  },
  {
    id: 2,
    name: "Forest Gold Wildflower Honey",
    image: product2, // Image for this product
    description: "Smooth and subtly sweet, this golden honey comes from the ancient, biodiverse forests of Ethiopia, a true taste of untouched nature.",
    price: "$22.00",
    link: "https://wa.me/+251912345678?text=I'm%20interested%20in%20Forest%20Gold%20Wildflower%20Honey."
  },
  {
    id: 3,
    name: "Ethiopian Coffee Blossom Honey",
    image: product3, // Image for this product
    description: "A rare and aromatic honey harvested from coffee flower blossoms, offering delicate notes of citrus and jasmine, a true gourmet delight.",
    price: "$28.00",
    link: "https://wa.me/+251912345678?text=I'm%20interested%20in%20Ethiopian%20Coffee%20Blossom%20Honey."
  },
  {
    id: 4,
    name: "Highland Eucalyptus Honey",
    image: product4, // Image for this product
    description: "Bold and distinct, this honey boasts a slightly herbaceous flavor from the eucalyptus trees of the Ethiopian highlands, perfect for wellness.",
    price: "$23.00",
    link: "https://wa.me/+251912345678?text=I'm%20interested%20in%20Highland%20Eucalyptus%20Honey."
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 px-8 bg-yellow-50 text-center">
      {/* Section Title */}
      <h2 className="font-geez text-4xl md:text-5xl text-red-700 mb-12">
        Our Unique Varieties
      </h2>

      {/* Product Grid */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;