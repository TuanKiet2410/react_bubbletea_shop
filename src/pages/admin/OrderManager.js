import React, { useState } from 'react';
import { Package, TrendingUp, Clock, CheckCircle, XCircle, Search, Filter, Eye, MoreVertical } from 'lucide-react';

const OrderManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    { id: 'ORD-2026-001', customer: 'Nguyễn Văn An', product: 'Laptop Dell XPS 15', amount: 35000000, status: 'completed', date: '2026-01-25', items: 1 },
    { id: 'ORD-2026-002', customer: 'Trần Thị Bình', product: 'iPhone 15 Pro Max', amount: 32000000, status: 'processing', date: '2026-01-26', items: 2 },
    { id: 'ORD-2026-003', customer: 'Lê Hoàng Cường', product: 'Samsung Galaxy S24', amount: 25000000, status: 'pending', date: '2026-01-27', items: 1 },
    { id: 'ORD-2026-004', customer: 'Phạm Minh Đức', product: 'MacBook Pro M3', amount: 45000000, status: 'completed', date: '2026-01-24', items: 1 },
    { id: 'ORD-2026-005', customer: 'Võ Thị Em', product: 'iPad Air 2024', amount: 18000000, status: 'cancelled', date: '2026-01-23', items: 3 },
    { id: 'ORD-2026-006', customer: 'Hoàng Văn Phong', product: 'AirPods Pro 2', amount: 6500000, status: 'processing', date: '2026-01-28', items: 2 },
  ];

  const stats = [
    { label: 'Tổng đơn hàng', value: '2,847', icon: Package, color: 'from-blue-500 to-cyan-500', percent: '+12.5%' },
    { label: 'Doanh thu', value: '₫845M', icon: TrendingUp, color: 'from-cyan-500 to-teal-500', percent: '+8.2%' },
    { label: 'Đang xử lý', value: '127', icon: Clock, color: 'from-teal-500 to-emerald-500', percent: '-3.1%' },
    { label: 'Hoàn thành', value: '2,654', icon: CheckCircle, color: 'from-blue-600 to-indigo-600', percent: '+15.3%' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
      case 'processing': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'pending': return 'bg-gradient-to-r from-amber-500 to-orange-500';
      case 'cancelled': return 'bg-gradient-to-r from-red-500 to-rose-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'Hoàn thành';
      case 'processing': return 'Đang xử lý';
      case 'pending': return 'Chờ xử lý';
      case 'cancelled': return 'Đã hủy';
      default: return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 p-6">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Quản lý Đơn hàng
        </h1>
        <p className="text-cyan-200/70">Theo dõi và quản lý tất cả đơn hàng của bạn</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-semibold px-2 py-1 rounded-lg ${
                    stat.percent.startsWith('+') ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {stat.percent}
                  </span>
                </div>
                <p className="text-cyan-200/70 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters and Search */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-6 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <input
              type="text"
              placeholder="Tìm kiếm đơn hàng, khách hàng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-2 flex-wrap">
            {['all', 'pending', 'processing', 'completed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedStatus === status
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-white/5 text-cyan-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                {status === 'all' ? 'Tất cả' : getStatusText(status)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden animate-fade-in">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Mã đơn</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Khách hàng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Sản phẩm</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Số lượng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Tổng tiền</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Ngày đặt</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Trạng thái</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4">
                    <span className="font-mono text-cyan-300 font-semibold">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold shadow-lg">
                        {order.customer.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-cyan-100">{order.product}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium">
                      {order.items} sản phẩm
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-emerald-400 font-bold">
                      {order.amount.toLocaleString('vi-VN')}₫
                    </span>
                  </td>
                  <td className="px-6 py-4 text-cyan-200">{order.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-white text-sm font-medium ${getStatusColor(order.status)} shadow-lg`}>
                      {getStatusText(order.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg transition-all hover:scale-110">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-all hover:scale-110">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full mb-4">
              <Package className="w-16 h-16 text-cyan-400" />
            </div>
            <p className="text-cyan-200 text-lg">Không tìm thấy đơn hàng nào</p>
            <p className="text-cyan-300/50 text-sm mt-2">Thử thay đổi bộ lọc hoặc tìm kiếm khác</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default OrderManagement;