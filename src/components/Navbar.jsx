import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Member', path: '/members' },
    { name: 'Cheki', path: '/cheki' },
  ];

  return (
    <div className={`fixed w-full z-50 flex justify-center transition-all duration-500 ${atTop ? 'pt-8' : 'pt-4'}`}>
      <nav className={`glass rounded-full px-8 py-4 flex justify-between items-center w-[90%] max-w-6xl shadow-2xl border border-white/20 transition-all duration-500 ${!atTop ? 'scale-95 shadow-primary/10' : ''}`}>
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary">
          KOHI <span className="text-neutral font-light">SEKAI</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-bold text-sm tracking-wide uppercase transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-neutral/60 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/cheki" className="bg-primary text-white px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral transition-all shadow-lg shadow-primary/20 ml-4">
            Buy Cheki
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-neutral" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl p-6 shadow-2xl border border-neutral/5 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-bold text-lg tracking-wide uppercase transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-neutral/60'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/cheki"
                className="bg-primary text-white px-8 py-3 rounded-full font-bold text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Buy Cheki
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
