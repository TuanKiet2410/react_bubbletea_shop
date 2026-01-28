import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import thư viện gọi API
import { FaEdit, FaTrash, FaPlus, FaImage } from 'react-icons/fa';
import './AdminProduct.css';

const ProductManager = () => {
  // 1. State lưu danh sách sản phẩm từ DB
  const [products, setProducts] = useState([]);
  
  // State quản lý form
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // State chứa dữ liệu nhập
  const [formData, setFormData] = useState({
    id: null, // Lưu ID của MongoDB (_id)
    name: '',
    price: '',
    category: 'Trà sữa',
    description: '',
    image: '' // Đổi thành string để lưu link ảnh
  });

  const categories = ['Trà sữa', 'Trà trái cây', 'Topping', 'Ăn vặt', 'Khác'];
  const API_URL = 'http://localhost:5000/api/products'; // Đường dẫn Server Node.js

  // --- 2. LẤY DỮ LIỆU TỪ SERVER (READ) ---
  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data); // Lưu dữ liệu thật vào state
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
      alert('Không kết nối được với Server!');
    }
  };

  // Chạy hàm này 1 lần khi trang vừa load
  useEffect(() => {
    fetchProducts();
  }, []);

  // --- CÁC HÀM XỬ LÝ FORM ---

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // --- 3. GỬI DỮ LIỆU LÊN SERVER (CREATE & UPDATE) ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // --- LOGIC SỬA (PUT) ---
        // Gọi API: PUT /api/products/:id
        await axios.put(`${API_URL}/${formData.id}`, {
          name: formData.name,
          price: Number(formData.price),
          category: formData.category,
          description: formData.description,
          image: formData.image
        });
        alert('Cập nhật thành công!');
      } else {
        // --- LOGIC THÊM MỚI (POST) ---
        // Gọi API: POST /api/products
        await axios.post(API_URL, {
          name: formData.name,
          price: Number(formData.price),
          category: formData.category,
          description: formData.description,
          image: formData.image
        });
        alert('Thêm sản phẩm thành công!');
      }

      // Sau khi thêm/sửa xong, tải lại danh sách mới
      fetchProducts(); 
      resetForm();

    } catch (error) {
      console.error("Lỗi khi lưu:", error);
      alert('Có lỗi xảy ra, vui lòng kiểm tra console.');
    }
  };

  // --- 4. XÓA DỮ LIỆU (DELETE) ---
  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        // Gọi API: DELETE /api/products/:id
        await axios.delete(`${API_URL}/${id}`);
        // Xóa xong thì cập nhật lại giao diện
        fetchProducts(); 
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
        alert('Xóa thất bại!');
      }
    }
  };

  const handleEdit = (product) => {
    setFormData({
      id: product._id, // MongoDB dùng _id thay vì id
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({ id: null, name: '', price: '', category: 'Trà sữa', description: '', image: '' });
    setShowForm(false);
    setIsEditing(false);
  };

  return (
    <div className="product-manager">
      <div className="pm-header">
        <h2>Quản Lý Sản Phẩm (Dữ liệu thật)</h2>
        <button className="btn-add" onClick={() => setShowForm(true)}><FaPlus /> Thêm Sản Phẩm</button>
      </div>

      {showForm && (
        <div className="pm-form-container">
          <form className="pm-form" onSubmit={handleSubmit}>
            <h3>{isEditing ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm Mới'}</h3>
            
            <div className="form-group">
              <label>Tên sản phẩm:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Giá (VNĐ):</label>
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Danh mục:</label>
                <select name="category" value={formData.category} onChange={handleInputChange}>
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            </div>

            {/* Chỗ này tạm thời nhập Link ảnh online */}
            <div className="form-group">
              <label>Link hình ảnh (URL):</label>
              <input 
                type="text" 
                name="image" 
                value={formData.image} 
                onChange={handleInputChange} 
                placeholder="Ví dụ: https://i.imgur.com/xyz.jpg" 
              />
              {formData.image && <img src={formData.image} alt="Preview" className="img-preview" style={{marginTop: '10px'}} />}
            </div>

            <div className="form-group">
              <label>Mô tả:</label>
              <textarea name="description" rows="3" value={formData.description} onChange={handleInputChange}></textarea>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={resetForm}>Hủy</button>
              <button type="submit" className="btn-save">{isEditing ? 'Cập Nhật' : 'Lưu Lại'}</button>
            </div>
          </form>
        </div>
      )}

      <div className="pm-table-wrapper">
        <table className="pm-table">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Danh mục</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>
                  <img 
                    src={product.image || 'https://via.placeholder.com/150'} 
                    alt={product.name} 
                    className="table-img" 
                    onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}} // Xử lý nếu link ảnh lỗi
                  />
                </td>
                <td>
                  <strong>{product.name}</strong>
                  <p className="desc-text">{product.description}</p>
                </td>
                <td>{product.price.toLocaleString()} đ</td>
                <td><span className={`badge ${product.category === 'Topping' ? 'badge-blue' : 'badge-green'}`}>{product.category}</span></td>
                <td>
                  <button className="action-btn edit" onClick={() => handleEdit(product)}><FaEdit /></button>
                  <button className="action-btn delete" onClick={() => handleDelete(product._id)}><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManager;