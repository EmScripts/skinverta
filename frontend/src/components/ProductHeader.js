// components/ProductHeader.js
const ProductHeader = ({ product }) => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 py-6 border-b border-lightGrey">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3 h-auto rounded"
        />
        <div className="text-darkGrey">
          <h1 className="text-3xl font-heading">{product.name}</h1>
          <p className="text-lg text-secondary mt-2">${product.basePrice}</p>
          <button className="bg-primary text-lightGrey px-4 py-2 mt-4 rounded hover:bg-secondary transition">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductHeader;
  