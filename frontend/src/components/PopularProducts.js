// components/PopularProducts.js
const popularProducts = [
    { id: 1, name: 'Product 1', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Product 3', image: '/path/to/image3.jpg' },
  ];
  
  const PopularProducts = () => {
    return (
      <section className="py-20">
        <h2 className="text-3xl font-heading text-center mb-8">Popular Products</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div key={product.id} className="bg-lightGrey p-6 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PopularProducts;
  