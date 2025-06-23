import { GrYoga } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <GrYoga className="text-3xl text-primary mr-2" />
              <h3 className="text-2xl font-bold">Vedic Yog Kendra</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicated to preserving and teaching authentic yoga practices from the Vedic tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaYoutube className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#classes" className="text-gray-400 hover:text-primary transition-colors">Classes</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#teachers" className="text-gray-400 hover:text-primary transition-colors">Teachers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Classes</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Hatha Yoga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Vinyasa Flow</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Yin Yoga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Meditation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Prenatal Yoga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Ashtanga</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on classes, workshops, and special events.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vedic Yog Kendra. All Rights Reserved.</p>
          <p className="mt-2">Designed with ❤️ for yoga enthusiasts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;