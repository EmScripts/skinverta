// components/Ingredients.js
const Ingredients = ({ ingredients }) => {
    return (
      <section className="py-6">
        <h2 className="text-2xl font-heading text-darkGrey">Ingredients</h2>
        <ul className="mt-4 space-y-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="bg-lightGrey px-4 py-2 rounded">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Ingredients;
  