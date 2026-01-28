import React, { useState } from 'react';
import { Users, Mail, Shield, CheckCircle, XCircle, Search, Plus, Edit, Trash2, Eye, EyeOff, Calendar, UserPlus, Filter, MoreVertical, Key } from 'lucide-react';

const UserManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add', 'edit', 'view'
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // Sample customer data
  const [customers, setCustomers] = useState([
    {
      _id: "6966fd8b77b57857909952ad",
      username: "customer",
      email: "tduy17780@gmail.com",
      password: "$2b$10$297cOTVFooINHwdCiMJ/.euNRoBE5ylbJvP6tpssAEuUm3W.SXnb.",
      role: "employee",
      otp: null,
      otpExpireTime: null,
      isVerified: true,
      createdAt: "2026-01-14T02:20:59.777Z",
    },
    {
      _id: "6966fd8b77b57857909952ae",
      username: "admin_user",
      email: "admin@example.com",
      password: "$2b$10$AbCdEfGhIjKlMnOpQrStUv.WxYz1234567890abcdefghijk",
      role: "admin",
      otp: null,
      otpExpireTime: null,
      isVerified: true,
      createdAt: "2026-01-10T08:15:30.000Z",
    },
    {
      _id: "6966fd8b77b57857909952af",
      username: "nguyen_van_a",
      email: "nguyenvana@gmail.com",
      password: "$2b$10$XyZaBcDeFgHiJkLmNoPqRs.TuVwXyZ9876543210fedcba",
      role: "customer",
      otp: "123456",
      otpExpireTime: "2026-01-28T15:30:00.000Z",
      isVerified: false,
      createdAt: "2026-01-27T10:45:20.000Z",
    },
    {
      _id: "6966fd8b77b57857909952b0",
      username: "tran_thi_b",
      email: "tranthib@outlook.com",
      password: "$2b$10$QwErTyUiOpAsDfGhJkLzXc.VbNmQwErTy1234567890zxcvb",
      role: "customer",
      otp: null,
      otpExpireTime: null,
      isVerified: true,
      createdAt: "2026-01-20T14:22:15.000Z",
    },
    {
      _id: "6966fd8b77b57857909952b1",
      username: "le_van_c",
      email: "levanc@yahoo.com",
      password: "$2b$10$AsDfGhJkLqWeRtYuIoPlMn.BvCxZaQwEr0987654321poiuy",
      role: "employee",
      otp: null,
      otpExpireTime: null,
      isVerified: true,
      createdAt: "2026-01-15T09:10:45.000Z",
    },
  ]);

  const stats = [
    { label: 'Tổng khách hàng', value: customers.length.toString(), icon: Users, color: 'from-blue-500 to-cyan-500', percent: '+15.3%' },
    { label: 'Đã xác thực', value: customers.filter(c => c.isVerified).length.toString(), icon: CheckCircle, color: 'from-emerald-500 to-teal-500', percent: '+8.7%' },
    { label: 'Chưa xác thực', value: customers.filter(c => !c.isVerified).length.toString(), icon: XCircle, color: 'from-amber-500 to-orange-500', percent: '-2.1%' },
    { label: 'Quản trị viên', value: customers.filter(c => c.role === 'admin').length.toString(), icon: Shield, color: 'from-purple-500 to-pink-500', percent: '+0%' },
  ];

  const getRoleColor = (role) => {
    switch(role) {
      case 'admin': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'employee': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'customer': return 'bg-gradient-to-r from-teal-500 to-emerald-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const getRoleText = (role) => {
    switch(role) {
      case 'admin': return 'Quản trị viên';
      case 'employee': return 'Nhân viên';
      case 'customer': return 'Khách hàng';
      default: return role;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesRole = selectedRole === 'all' || customer.role === selectedRole;
    const matchesSearch = customer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer._id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const handleAddCustomer = () => {
    setModalMode('add');
    setSelectedCustomer({
      username: '',
      email: '',
      password: '',
      role: 'customer',
      isVerified: false,
      otp: null,
      otpExpireTime: null,
    });
    setShowModal(true);
  };

  const handleEditCustomer = (customer) => {
    setModalMode('edit');
    setSelectedCustomer({...customer});
    setShowModal(true);
  };

  const handleViewCustomer = (customer) => {
    setModalMode('view');
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const handleDeleteCustomer = (customerId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khách hàng này?')) {
      setCustomers(customers.filter(c => c._id !== customerId));
    }
  };

  const handleSaveCustomer = () => {
    if (modalMode === 'add') {
      const newCustomer = {
        ...selectedCustomer,
        _id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      setCustomers([...customers, newCustomer]);
    } else if (modalMode === 'edit') {
      setCustomers(customers.map(c => c._id === selectedCustomer._id ? selectedCustomer : c));
    }
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 p-6">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Quản lý Khách hàng
        </h1>
        <p className="text-cyan-200/70">Quản lý thông tin người dùng và phân quyền</p>
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

      {/* Filters and Actions */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-6 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="flex-1 relative group w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email, ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
          </div>

          {/* Role Filter */}
          <div className="flex gap-2 flex-wrap">
            {['all', 'admin', 'employee', 'customer'].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedRole === role
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-white/5 text-cyan-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                {role === 'all' ? 'Tất cả' : getRoleText(role)}
              </button>
            ))}
          </div>

          {/* Add Button */}
          <button
            onClick={handleAddCustomer}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Thêm mới
          </button>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden animate-fade-in">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Người dùng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Vai trò</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Xác thực</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">OTP</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Ngày tạo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-200">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr
                  key={customer._id}
                  className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4">
                    <span className="font-mono text-cyan-300 text-xs">{customer._id.substring(0, 8)}...</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold shadow-lg">
                        {customer.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-white font-medium">{customer.username}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-cyan-100">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      {customer.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-white text-sm font-medium ${getRoleColor(customer.role)} shadow-lg`}>
                      {getRoleText(customer.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {customer.isVerified ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300 text-sm font-medium">Đã xác thực</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-300 text-sm font-medium">Chưa xác thực</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {customer.otp ? (
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded text-xs font-mono">
                        {customer.otp}
                      </span>
                    ) : (
                      <span className="text-cyan-300/50 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-cyan-200 text-sm">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      {formatDate(customer.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => handleViewCustomer(customer)}
                        className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg transition-all hover:scale-110"
                        title="Xem chi tiết"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditCustomer(customer)}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-all hover:scale-110"
                        title="Chỉnh sửa"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteCustomer(customer._id)}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-all hover:scale-110"
                        title="Xóa"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full mb-4">
              <Users className="w-16 h-16 text-cyan-400" />
            </div>
            <p className="text-cyan-200 text-lg">Không tìm thấy khách hàng nào</p>
            <p className="text-cyan-300/50 text-sm mt-2">Thử thay đổi bộ lọc hoặc tìm kiếm khác</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl border border-white/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {modalMode === 'add' ? 'Thêm khách hàng mới' : modalMode === 'edit' ? 'Chỉnh sửa khách hàng' : 'Chi tiết khách hàng'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-cyan-300 hover:text-white transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-cyan-200 text-sm font-medium mb-2">Tên người dùng</label>
                <input
                  type="text"
                  value={selectedCustomer?.username || ''}
                  onChange={(e) => setSelectedCustomer({...selectedCustomer, username: e.target.value})}
                  disabled={modalMode === 'view'}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all disabled:opacity-50"
                  placeholder="Nhập tên người dùng"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-cyan-200 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={selectedCustomer?.email || ''}
                  onChange={(e) => setSelectedCustomer({...selectedCustomer, email: e.target.value})}
                  disabled={modalMode === 'view'}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all disabled:opacity-50"
                  placeholder="Nhập email"
                />
              </div>

              {/* Password */}
              {modalMode !== 'view' && (
                <div>
                  <label className="block text-cyan-200 text-sm font-medium mb-2">
                    Mật khẩu {modalMode === 'edit' && '(để trống nếu không đổi)'}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={selectedCustomer?.password || ''}
                      onChange={(e) => setSelectedCustomer({...selectedCustomer, password: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Nhập mật khẩu"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Role */}
              <div >
                <label className="block text-cyan-200 text-sm font-medium mb-2">Vai trò</label>
                <select
                  value={selectedCustomer?.role || 'customer'}
                  onChange={(e) => setSelectedCustomer({...selectedCustomer, role: e.target.value})}
                  disabled={modalMode === 'view'}
                  className="w-full  px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all disabled:opacity-50"
                >
                  <option value="customer">Khách hàng</option>
                  <option value="employee" >Nhân viên</option>
                  <option value="admin">Quản trị viên</option>
                </select>
              </div>

              {/* Is Verified */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isVerified"
                  checked={selectedCustomer?.isVerified || false}
                  onChange={(e) => setSelectedCustomer({...selectedCustomer, isVerified: e.target.checked})}
                  disabled={modalMode === 'view'}
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-0 disabled:opacity-50"
                />
                <label htmlFor="isVerified" className="text-cyan-200 text-sm font-medium">
                  Đã xác thực email
                </label>
              </div>

              {/* OTP (only in edit/view mode) */}
              {modalMode !== 'add' && (
                <>
                  <div>
                    <label className="block text-cyan-200 text-sm font-medium mb-2">Mã OTP</label>
                    <input
                      type="text"
                      value={selectedCustomer?.otp || ''}
                      onChange={(e) => setSelectedCustomer({...selectedCustomer, otp: e.target.value})}
                      disabled={modalMode === 'view'}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all disabled:opacity-50"
                      placeholder="Mã OTP (nếu có)"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-200 text-sm font-medium mb-2">Thời gian hết hạn OTP</label>
                    <input
                      type="datetime-local"
                      value={selectedCustomer?.otpExpireTime ? new Date(selectedCustomer.otpExpireTime).toISOString().slice(0, 16) : ''}
                      onChange={(e) => setSelectedCustomer({...selectedCustomer, otpExpireTime: e.target.value ? new Date(e.target.value).toISOString() : null})}
                      disabled={modalMode === 'view'}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all disabled:opacity-50"
                    />
                  </div>
                </>
              )}

              {/* Created At (view mode only) */}
              {modalMode === 'view' && selectedCustomer?.createdAt && (
                <div>
                  <label className="block text-cyan-200 text-sm font-medium mb-2">Ngày tạo</label>
                  <input
                    type="text"
                    value={formatDate(selectedCustomer.createdAt)}
                    disabled
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white opacity-50"
                  />
                </div>
              )}

              {/* ID (view mode only) */}
              {modalMode === 'view' && selectedCustomer?._id && (
                <div>
                  <label className="block text-cyan-200 text-sm font-medium mb-2">ID</label>
                  <input
                    type="text"
                    value={selectedCustomer._id}
                    disabled
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-sm opacity-50"
                  />
                </div>
              )}
            </div>

            {/* Actions */}
            {modalMode !== 'view' && (
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleSaveCustomer}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  {modalMode === 'add' ? 'Thêm mới' : 'Cập nhật'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 bg-white/10 text-cyan-200 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Hủy
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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

export default UserManager;