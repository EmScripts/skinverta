// components/PriceComparison.js
const PriceComparison = ({ resellers }) => {
    return (
      <section className="py-6">
        <h2 className="text-2xl font-heading text-darkGrey">Price Comparison</h2>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-lightGrey py-2">Reseller</th>
              <th className="border-b-2 border-lightGrey py-2">Price</th>
              <th className="border-b-2 border-lightGrey py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {resellers.map((reseller, index) => (
              <tr key={index}>
                <td className="border-b border-lightGrey py-2">{reseller.name}</td>
                <td className="border-b border-lightGrey py-2">${reseller.price}</td>
                <td className="border-b border-lightGrey py-2">
                  <a
                    href={reseller.link}
                    className="text-primary underline hover:text-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default PriceComparison;
  