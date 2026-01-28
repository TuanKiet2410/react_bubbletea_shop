import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Thực Đơn', path: '/menu' },
    { name: 'Stories', path: '/about' },
    { name: 'Tuyển Dụng', path: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      url: 'https://facebook.com',
      name: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: Instagram, 
      url: 'https://instagram.com',
      name: 'Instagram', 
      color: 'hover:bg-pink-600'
    },
    { 
      icon: Send, 
      url: 'https://tiktok.com',
      name: 'TikTok',
      color: 'hover:bg-purple-600'
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 border-t border-cyan-500/20">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Đăng ký nhận ưu đãi
              </h3>
              <p className="text-cyan-200/70">
                Nhận thông tin về các chương trình khuyến mãi và sản phẩm mới nhất
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-2 max-w-md">
                <div className="flex-1 relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                  <input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                <NavLink
                  to="/login"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Đăng Ký
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🧋</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  BubbleTea
                </span>
                <span className="text-orange-400">Store</span>
              </h3>
            </div>
            <p className="text-cyan-200/70 text-sm leading-relaxed">
              Thưởng thức hương vị trà sữa đậm đà và những món ăn vặt "gây nghiện". 
              Cam kết nguyên liệu sạch, tươi ngon mỗi ngày.
            </p>
            <div className="pt-4">
              <p className="text-cyan-300/70 text-xs flex items-center gap-2">
                Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> in Vietnam
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Liên Kết</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-cyan-200/70 hover:text-cyan-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-cyan-200/70 group hover:text-cyan-400 transition-colors">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">123 Đường Trà Sữa, Q.1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3 text-cyan-200/70 group hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="tel:1900123456" className="text-sm">1900 123 456</a>
              </li>
              <li className="flex items-center gap-3 text-cyan-200/70 group hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@bubbleteastore.com" className="text-sm">hello@bubbleteastore.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Kết Nối</h4>
            <p className="text-cyan-200/70 text-sm">
              Theo dõi chúng tôi để cập nhật những xu hướng mới nhất
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-cyan-300 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </a>
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="pt-4">
              <p className="text-cyan-200/70 text-xs mb-2">Phương thức thanh toán</p>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-cyan-300 text-xs font-medium">
                  💳 Visa
                </div>
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-cyan-300 text-xs font-medium">
                  💳 MasterCard
                </div>
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-cyan-300 text-xs font-medium">
                  📱 MoMo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cyan-200/70 text-sm text-center md:text-left">
              &copy; {currentYear} BubbleTeaStore. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cyan-200/70 hover:text-cyan-400 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-cyan-200/70 hover:text-cyan-400 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-cyan-200/70 hover:text-cyan-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;