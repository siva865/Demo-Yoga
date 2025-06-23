import { motion } from 'framer-motion';
import { FaLeaf, FaPeace, FaHeartbeat } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: "Natural Healing",
      description: "Our yoga practices focus on natural healing methods derived from ancient Vedic traditions."
    },
    {
      icon: <FaPeace className="text-4xl text-primary" />,
      title: "Mindfulness",
      description: "Learn techniques to calm your mind and achieve inner peace through meditation."
    },
    {
      icon: <FaHeartbeat className="text-4xl text-primary" />,
      title: "Holistic Health",
      description: "We address physical, mental, and spiritual well-being for complete health."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Vedic Yog Kendra</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, Vedic Yog Kendra is dedicated to preserving and teaching authentic yoga practices
            as described in ancient Vedic texts. Our center combines traditional wisdom with modern teaching
            methods to help you achieve optimal health and spiritual growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;