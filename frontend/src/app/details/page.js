// app/details/page.js
import ProductHeader from '../../components/ProductHeader';
import ProductDescription from '../../components/ProductDescription';
import Ingredients from '../../components/Ingredients';
import PriceComparison from '../../components/PriceComparison';
import UserReviews from '../../components/UserReviews';

const product = {
  name: 'Hydrating Face Cream',
  image: '/images/face-cream.jpg',
  basePrice: '29.99',
  description: 'A lightweight, non-greasy formula that hydrates the skin...',
  ingredients: ['Water', 'Glycerin', 'Shea Butter', 'Vitamin E'],
  resellers: [
    { name: 'Amazon', price: '29.99', link: 'https://amazon.com' },
    { name: 'Sephora', price: '32.00', link: 'https://sephora.com' },
  ],
  reviews: [
    { username: 'Jane Doe', comment: 'This cream is fantastic!', rating: 5 },
    { username: 'John Smith', comment: 'Worked well for my dry skin.', rating: 4 },
  ],
};

const ProductPage = () => {
  return (
    <div className="container mx-auto p-6">
      <ProductHeader product={product} />
      <ProductDescription description={product.description} />
      <Ingredients ingredients={product.ingredients} />
      <PriceComparison resellers={product.resellers} />
      <UserReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductPage;
