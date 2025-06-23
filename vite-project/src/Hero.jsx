import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Vedic Yog Kendra</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Discover inner peace and physical wellness through ancient yoga practices</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#classes"
              className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Explore Classes
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
};

export default Hero;