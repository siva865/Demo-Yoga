import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Visit our center, give us a call, or send us a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Our Location</h4>
                  <p className="text-gray-600">123 Yoga Street, Rishikesh, Uttarakhand 249201</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone Number</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 11 2345 6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Address</h4>
                  <p className="text-gray-600">info@vedicyogkendra.com</p>
                  <p className="text-gray-600">support@vedicyogkendra.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Opening Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 6:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: 7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.321068543716!2d78.2678133151241!3d30.28492358179836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b9451ae8dfd%3A0xf39a7715e02f4f1e!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1624534297893!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;