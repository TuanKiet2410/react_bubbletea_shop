import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Tổng Quan Hệ Thống</h2>
      
      {/* Các thẻ thống kê mẫu */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div style={cardStyle('#4b7bec')}>
          <h3>Đơn Hàng</h3>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>120</p>
        </div>
        <div style={cardStyle('#26de81')}>
          <h3>Doanh Thu</h3>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>15tr</p>
        </div>
        <div style={cardStyle('#fed330')}>
          <h3>Sản Phẩm</h3>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>45</p>
        </div>
        <div style={cardStyle('#eb3b5a')}>
          <h3>Khách Hàng</h3>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>300</p>
        </div>
      </div>
    </div>
  );
};

// CSS inline nhanh cho card demo
const cardStyle = (color) => ({
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  borderLeft: `5px solid ${color}`
});

export default Dashboard;