import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 poppins-bold">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-500">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-800 text-2xl cursor-pointer" onClick={toggleMenu}>
          <IoMenu />
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-1/2 bg-gray-300 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <IoClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center space-y-6 mt-10">
            <li>
              <Link to="home" smooth={true} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-gray-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
