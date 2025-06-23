import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vedic Yog Kendra transformed my life. The teachers are knowledgeable and the atmosphere is so peaceful.",
      author: "Anjali Mehta",
      role: "Student for 3 years"
    },
    {
      quote: "I've tried many yoga studios, but none compare to the authentic practice taught here. My flexibility and strength have improved dramatically.",
      author: "Rajiv Nair",
      role: "Corporate Professional"
    },
    {
      quote: "The prenatal yoga classes helped me stay strong and calm throughout my pregnancy. I'm so grateful for this community.",
      author: "Sneha Kapoor",
      role: "New Mother"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-primary text-3xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="text-right">
                <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;