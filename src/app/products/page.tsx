"use client";

import Image from 'next/image';

function FeaturedProducts() {
  const products = [
    {
      image: '/Featured/Fea1.png',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00'
    },
    {
      image: '/Featured/Fea2.png',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00'
    },
    {
      image: '/Featured/Fea3.png',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00'
    },
    {
      image: '/Featured/Fea4.png',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00'
    }
  ];

  return (
    <section className="bg-white py-9 px-20 mb-20">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-10 mt-20">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold mb-2 text-[#FB2E86] text-center">{product.title}</h3>
            <p className="text-gray-600 mb-2 text-center">Code: {product.code}</p>
            <p className="text-lg font-bold text-center">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;