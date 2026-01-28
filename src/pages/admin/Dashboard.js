import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Package, 
  DollarSign, 
  Activity, 
  Calendar,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  // Dữ liệu thống kê tổng quan
  const mainStats = [
    {
      label: 'Đơn hàng',
      value: '120',
      change: '+12.5%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      description: 'Tổng đơn hàng hôm nay'
    },
    {
      label: 'Doanh thu',
      value: '15tr',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500',
      description: 'Doanh thu trong ngày'
    },
    {
      label: 'Sản phẩm',
      value: '45',
      change: '+5',
      trend: 'up',
      icon: Package,
      color: 'from-purple-500 to-pink-500',
      description: 'Tổng sản phẩm'
    },
    {
      label: 'Khách hàng',
      value: '300',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'from-orange-500 to-amber-500',
      description: 'Khách hàng đã đăng ký'
    }
  ];

  // Thống kê trạng thái đơn hàng
  const orderStats = [
    { status: 'Chờ xử lý', count: 25, color: 'from-amber-500 to-orange-500', icon: Clock },
    { status: 'Đang xử lý', count: 48, color: 'from-blue-500 to-cyan-500', icon: Activity },
    { status: 'Hoàn thành', count: 95, color: 'from-emerald-500 to-teal-500', icon: CheckCircle },
    { status: 'Đã hủy', count: 12, color: 'from-red-500 to-rose-500', icon: XCircle },
  ];

  // Đơn hàng gần đây
  const recentOrders = [
    { id: 'ORD-001', customer: 'Nguyễn Văn An', product: 'Trà sữa trân châu', amount: 45000, status: 'completed', time: '5 phút trước' },
    { id: 'ORD-002', customer: 'Trần Thị Bình', product: 'Trà trái cây', amount: 38000, status: 'processing', time: '12 phút trước' },
    { id: 'ORD-003', customer: 'Lê Hoàng Cường', product: 'Trà sữa matcha', amount: 42000, status: 'pending', time: '25 phút trước' },
    { id: 'ORD-004', customer: 'Phạm Minh Đức', product: 'Trà oolong', amount: 35000, status: 'completed', time: '1 giờ trước' },
    { id: 'ORD-005', customer: 'Võ Thị Em', product: 'Trà đào', amount: 40000, status: 'processing', time: '2 giờ trước' },
  ];

  // Sản phẩm bán chạy
  const topProducts = [
    { name: 'Trà sữa trân châu', sold: 85, revenue: 3825000, trend: 'up', change: '+15%' },
    { name: 'Trà trái cây nhiệt đới', sold: 72, revenue: 2736000, trend: 'up', change: '+8%' },
    { name: 'Trà sữa matcha', sold: 68, revenue: 2856000, trend: 'up', change: '+12%' },
    { name: 'Trà oolong đào', sold: 54, revenue: 1890000, trend: 'down', change: '-3%' },
    { name: 'Trà đen macchiato', sold: 48, revenue: 2112000, trend: 'up', change: '+5%' },
  ];

  // Doanh thu theo tuần (giả lập)
  const weeklyRevenue = [
    { day: 'T2', revenue: 2.1 },
    { day: 'T3', revenue: 2.8 },
    { day: 'T4', revenue: 2.3 },
    { day: 'T5', revenue: 3.5 },
    { day: 'T6', revenue: 4.2 },
    { day: 'T7', revenue: 5.8 },
    { day: 'CN', revenue: 6.5 },
  ];

  const maxRevenue = Math.max(...weeklyRevenue.map(d => d.revenue));

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'processing': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'pending': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 p-6">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tổng quan hệ thống
            </h1>
            <p className="text-cyan-200/70">Chào mừng trở lại! Đây là tổng quan về hoạt động kinh doanh của bạn</p>
          </div>
          
          {/* Period Selector */}
          <div className="flex gap-2">
            {['today', 'week', 'month'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedPeriod === period
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-white/5 text-cyan-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                {period === 'today' ? 'Hôm nay' : period === 'week' ? 'Tuần này' : 'Tháng này'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {mainStats.map((stat, index) => {
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
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-semibold ${
                    stat.trend === 'up' 
                      ? 'bg-emerald-500/20 text-emerald-300' 
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-cyan-200/70 text-sm mb-1">{stat.label}</p>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-cyan-300/50 text-xs">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart - 2 columns */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Doanh thu tuần này</h3>
              <p className="text-cyan-200/70 text-sm">Biểu đồ doanh thu theo ngày</p>
            </div>
            <div className="text-right">
              <p className="text-cyan-200/70 text-sm">Tổng doanh thu</p>
              <p className="text-2xl font-bold text-emerald-400">27.2tr</p>
            </div>
          </div>
          
          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-3 h-64">
            {weeklyRevenue.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="text-emerald-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.revenue}tr
                </div>
                <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden" style={{ height: '100%' }}>
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg transition-all duration-500 group-hover:from-emerald-500 group-hover:to-teal-500"
                    style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                  ></div>
                </div>
                <div className="text-cyan-200 text-sm font-medium">{item.day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Status Stats - 1 column */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 animate-fade-in">
          <h3 className="text-xl font-bold text-white mb-4">Trạng thái đơn hàng</h3>
          <div className="space-y-4">
            {orderStats.map((stat, index) => {
              const Icon = stat.icon;
              const total = orderStats.reduce((sum, s) => sum + s.count, 0);
              const percentage = ((stat.count / total) * 100).toFixed(0);
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-cyan-100 font-medium">{stat.status}</span>
                    </div>
                    <span className="text-white font-bold">{stat.count}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Total */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-cyan-200/70">Tổng đơn hàng</span>
              <span className="text-2xl font-bold text-white">
                {orderStats.reduce((sum, s) => sum + s.count, 0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout - Recent Orders & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-bold text-white">Đơn hàng gần đây</h3>
            <p className="text-cyan-200/70 text-sm mt-1">Các đơn hàng mới nhất</p>
          </div>
          <div className="divide-y divide-white/5">
            {recentOrders.map((order, index) => (
              <div 
                key={index} 
                className="p-4 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-cyan-300 text-sm font-semibold">{order.id}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    <p className="text-white font-medium">{order.customer}</p>
                    <p className="text-cyan-200/70 text-sm">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">{order.amount.toLocaleString()}đ</p>
                    <p className="text-cyan-300/50 text-xs mt-1">{order.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-bold text-white">Sản phẩm bán chạy</h3>
            <p className="text-cyan-200/70 text-sm mt-1">Top 5 sản phẩm có doanh thu cao nhất</p>
          </div>
          <div className="p-6 space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white font-medium">{product.name}</p>
                      <p className="text-cyan-200/70 text-sm">{product.sold} đã bán</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">{(product.revenue / 1000).toFixed(1)}K</p>
                    <div className={`flex items-center gap-1 text-xs font-semibold ${
                      product.trend === 'up' ? 'text-emerald-300' : 'text-red-300'
                    }`}>
                      {product.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {product.change}
                    </div>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                    style={{ width: `${(product.sold / 85) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Dashboard;