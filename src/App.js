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
import OrderManagement from './pages/admin/OrderManager';
import UserManager from './pages/admin/UserManager';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Story from './pages/About';
import AuthPage from './pages/Login';
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop />
      <Routes>
        
        {/* NHÓM ROUTE CHO KHÁCH HÀNG (Có Navbar + Footer) */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<div>Giỏ Hàng</div>} />
          <Route path="/login" element={<AuthPage/>} />
        </Route>

        {/* NHÓM ROUTE CHO ADMIN (Giao diện riêng) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> {/* /admin */}
          <Route path="products" element={<ProductManager />} /> {/* /admin/products */}
          <Route path="orders" element={<OrderManagement />} />
          <Route path="users" element={<UserManager/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;