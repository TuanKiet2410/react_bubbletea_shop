import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Layouts
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import AdminLayout from './layouts/AdminLayout'; // Import Admin Layout

// Pages Client
import Home from './pages/Home';
// import Menu from './pages/Menu'; ... (giữ nguyên các import cũ của bạn)

// Pages Admin
import Dashboard from './pages/admin/Dashboard';
import ProductManager from './pages/admin/ProductManager';

// Component Wrapper cho giao diện Khách hàng (để kẹp Navbar và Footer)
const ClientLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '80vh' }}> {/* Giữ footer luôn ở dưới */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};


function App() {
  return (
    <Router>
      <Routes>
        
        {/* NHÓM ROUTE CHO KHÁCH HÀNG (Có Navbar + Footer) */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<div>Trang Thực Đơn</div>} />
          <Route path="/about" element={<div>Về Chúng Tôi</div>} />
          <Route path="/contact" element={<div>Liên Hệ</div>} />
          <Route path="/cart" element={<div>Giỏ Hàng</div>} />
          <Route path="/login" element={<div>Đăng Nhập</div>} />
        </Route>

        {/* NHÓM ROUTE CHO ADMIN (Giao diện riêng) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> {/* /admin */}
          <Route path="products" element={<ProductManager />} /> {/* /admin/products */}
          <Route path="orders" element={<div>Quản lý Đơn Hàng</div>} />
          <Route path="users" element={<div>Quản lý User</div>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;