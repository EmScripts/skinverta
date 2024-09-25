// components/Testimonials.js
const testimonials = [
    "SkinVerta helped me find the best skincare products!",
    "I love the price comparison feature—it saved me money!",
    "The ingredient insights are so helpful in choosing the right products."
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-20 bg-lightGrey text-darkGrey">
        <h2 className="text-3xl font-heading text-center mb-8">What Our Users Say</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="p-6 border-l-4 border-secondary">
              <p className="italic">"{testimonial}"</p>
            </blockquote>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  