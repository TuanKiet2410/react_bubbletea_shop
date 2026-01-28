import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Giả lập số lượng giỏ hàng

  // Toggle menu cho mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll để thay đổi style navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu khi resize về desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { path: '/', name: 'Trang Chủ' },
    { path: '/menu', name: 'Thực Đơn' },
    { path: '/about', name: 'Stories' },
    { path: '/contact', name: 'Liên Hệ' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10' 
          : 'bg-gradient-to-b from-slate-900/90 to-transparent backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🧋</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    BubbleTea
                  </span>
                  <span className="text-orange-400">Store</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                        : 'text-cyan-200 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              {/* Search (Desktop) */}
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl text-cyan-300 hover:bg-white/10 hover:text-white transition-all duration-300 group">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              {/* Wishlist (Desktop) */}
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl text-cyan-300 hover:bg-white/10 hover:text-white transition-all duration-300 group">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

             

              {/* User */}
              <Link
                to="/login"
                className="flex items-center justify-center w-10 h-10 rounded-xl text-cyan-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
              >
                <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-cyan-300 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'text-cyan-200 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Additional Links */}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-cyan-200 hover:bg-white/10 hover:text-white transition-all">
                <Search className="w-5 h-5" />
                <span>Tìm kiếm</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-cyan-200 hover:bg-white/10 hover:text-white transition-all">
                <Heart className="w-5 h-5" />
                <span>Yêu thích</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
          style={{ top: '80px' }}
        ></div>
      )}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;