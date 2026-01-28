// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Giả sử MongoDB lưu ảnh là field 'imageUrl' */}
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        {/* Format giá tiền Việt Nam */}
        <p className="price">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
        </p>
        <button>Mua ngay</button>
      </div>
    </div>
  );
};

export default ProductCard;