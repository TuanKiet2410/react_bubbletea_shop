import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Layouts.css'; // Chúng ta sẽ viết CSS ở phần dưới

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu cho mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo thương hiệu */}
        <Link to="/" className="navbar-logo">
          BubbleTea<span className="logo-accent">Store</span>
        </Link>

        {/* Icon menu mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu chính */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={toggleMenu}>
              Trang Chủ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={toggleMenu}>
              Thực Đơn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={toggleMenu}>
              Về Chúng Tôi
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={toggleMenu}>
              Liên Hệ
            </NavLink>
          </li>
           {/* Mobile only buttons could go here */}
        </ul>

        {/* Các icon tiện ích (Giỏ hàng, User) */}
        <div className="nav-icons">
          <Link to="/cart" className="icon-link">
            <FaShoppingCart />
            <span className="cart-badge">0</span>
          </Link>
          <Link to="/login" className="icon-link">
            <FaUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;