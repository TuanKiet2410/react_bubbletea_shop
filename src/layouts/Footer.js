import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Layouts.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: Giới thiệu */}
        <div className="footer-col">
          <h3>BubbleTea<span className="logo-accent">Store</span></h3>
          <p>
            Thưởng thức hương vị trà sữa đậm đà và những món ăn vặt "gây nghiện". 
            Cam kết nguyên liệu sạch, tươi ngon mỗi ngày.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div className="footer-col">
          <h4>Liên Kết</h4>
          <ul>
            <li><a href="/">Trang Chủ</a></li>
            <li><a href="/menu">Thực Đơn</a></li>
            <li><a href="/about">Câu Chuyện</a></li>
            <li><a href="/contact">Tuyển Dụng</a></li>
          </ul>
        </div>

        {/* Cột 3: Thông tin liên hệ */}
        <div className="footer-col">
          <h4>Liên Hệ</h4>
          <p><FaMapMarkerAlt className="footer-icon" /> 123 Đường Trà Sữa, Q.1, TP.HCM</p>
          <p><FaPhoneAlt className="footer-icon" /> 1900 123 456</p>
          <p><FaEnvelope className="footer-icon" /> hello@bubbleteastore.com</p>
        </div>

        {/* Cột 4: Mạng xã hội */}
        <div className="footer-col">
          <h4>Kết Nối</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BubbleTeaStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;