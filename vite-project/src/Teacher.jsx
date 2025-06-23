
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Teachers = () => {
  const teachers = [
    {
      name: "Rahul Sharma",
      role: "Hatha Yoga Expert",
      bio: "With over 15 years of experience, Rahul specializes in traditional Hatha Yoga and meditation techniques.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Priya Patel",
      role: "Vinyasa Flow Instructor",
      bio: "Priya brings dynamic energy to her Vinyasa classes, focusing on breath-movement synchronization.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Meera Desai",
      role: "Yin & Restorative Specialist",
      bio: "Meera's gentle approach helps students release deep tension and find stillness in their practice.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Vikram Joshi",
      role: "Ashtanga Advanced Teacher",
      bio: "Vikram has studied in Mysore, India and brings authentic Ashtanga teachings to our center.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="teachers" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Teachers</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our certified instructors bring years of experience and diverse backgrounds to create
            a supportive learning environment for all students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-primary font-medium mb-3">{teacher.role}</p>
                <p className="text-gray-600 text-sm mb-4">{teacher.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;