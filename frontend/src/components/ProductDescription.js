// components/ProductDescription.js
const ProductDescription = ({ description }) => {
    return (
      <section className="py-6">
        <h2 className="text-2xl font-heading text-darkGrey">Description</h2>
        <p className="mt-4 text-body text-darkGrey">{description}</p>
      </section>
    );
  };
  
  export default ProductDescription;
  