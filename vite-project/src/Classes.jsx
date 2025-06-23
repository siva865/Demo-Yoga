import { motion } from 'framer-motion';
import { FaRegClock, FaUserAlt } from 'react-icons/fa';

const Classes = () => {
  const yogaClasses = [
    {
      name: "Hatha Yoga",
      description: "Traditional yoga practice focusing on physical postures and breathing techniques.",
      duration: "60 mins",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Vinyasa Flow",
      description: "Dynamic practice linking breath with movement in a continuous flow.",
      duration: "75 mins",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Yin Yoga",
      description: "Slow-paced style with poses held for longer periods to target deep connective tissues.",
      duration: "90 mins",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Meditation",
      description: "Guided sessions to calm the mind and develop mindfulness practices.",
      duration: "45 mins",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Prenatal Yoga",
      description: "Specialized practice for expecting mothers to support pregnancy and prepare for birth.",
      duration: "60 mins",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1530046339911-1d1d15c01f1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Advanced Ashtanga",
      description: "Challenging sequence of postures for experienced practitioners.",
      duration: "90 mins",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="classes" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Yoga Classes</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a variety of classes suitable for all levels, from complete beginners to advanced practitioners.
            Find the perfect class for your needs and schedule.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yogaClasses.map((yogaClass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={yogaClass.image} 
                  alt={yogaClass.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{yogaClass.name}</h3>
                <p className="text-gray-600 mb-4">{yogaClass.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <FaRegClock className="mr-1" /> {yogaClass.duration}
                  </span>
                  <span className="flex items-center">
                    <FaUserAlt className="mr-1" /> {yogaClass.level}
                  </span>
                </div>
                <button className="mt-4 w-full bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
