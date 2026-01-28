import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaClipboardList, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import './Admin.css'; // Chúng ta sẽ tạo file này ngay sau đây

const AdminLayout = () => {
  return (
    <div className="admin-container">
      {/* Sidebar bên trái */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Admin<span style={{color: '#ff9f43'}}>Panel</span></h2>
        </div>
        
        <ul className="admin-menu">
          <li>
            <NavLink to="/admin" end className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
              <FaHome className="icon" /> Tổng Quan
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/products" className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
              <FaBox className="icon" /> Quản Lý Sản Phẩm
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders" className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
              <FaClipboardList className="icon" /> Đơn Hàng
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
              <FaUsers className="icon" /> Khách Hàng
            </NavLink>
          </li>
        </ul>

        <div className="admin-logout">
          <button className="logout-btn"><FaSignOutAlt /> Đăng Xuất</button>
        </div>
      </aside>

      {/* Nội dung chính bên phải */}
      <main className="admin-content">
        {/* Header nhỏ của Admin */}
        <header className="admin-header">
          <h3>Xin chào, Admin!</h3>
          <div className="admin-user-info">
            <img src="https://via.placeholder.com/40" alt="Admin" className="avatar" />
          </div>
        </header>

        {/* Nơi hiển thị các trang con (Dashboard, Products...) */}
        <div className="admin-page-body">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;