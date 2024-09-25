// components/Features.js
const features = [
    {
      title: 'Product Comparisons',
      description: 'Easily compare products side-by-side.',
    },
    {
      title: 'Ingredient Insights',
      description: 'Understand what\'s in your skincare products.',
    },
    {
      title: 'Price Alerts',
      description: 'Get notified of price drops on your favorite items.',
    },
  ];
  
  const Features = () => {
    return (
      <section className="py-20">
        <h2 className="text-3xl font-heading text-center mb-8">Key Features</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-lightGrey p-6 rounded shadow">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  