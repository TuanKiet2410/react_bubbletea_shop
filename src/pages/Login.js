import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  Facebook,
  Chrome,
  Shield,
  Sparkles,
  Heart,
  Coffee,
} from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", loginData);
    alert("Đăng nhập thành công!");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    console.log("Register:", registerData);
    alert("Đăng ký thành công!");
  };

  const switchToRegister = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const features = [
    { icon: Coffee, text: "Hơn 100+ loại đồ uống" },
    { icon: Sparkles, text: "Ưu đãi thành viên đặc biệt" },
    { icon: Heart, text: "Tích điểm đổi quà hấp dẫn" },
    { icon: Shield, text: "Bảo mật thông tin tuyệt đối" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex items-center justify-center p-4 overflow-hidden animate-gradient">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Sliding Forms */}
          <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm h-full">
            {/* Sliding Container - SỬA Ở ĐÂY */}
            {/* Di chuyển logic translate lên đây. 
      Nếu là Login -> translate-0 (hiện nửa trái). 
      Nếu không -> -translate-x-1/2 (trượt sang trái 50% độ rộng container để hiện nửa phải) */}
            <div
              className={`flex h-full transition-transform duration-700 ease-in-out ${
                isLogin ? "translate-x-0" : "-translate-x-1/2"
              }`}
              style={{ width: "200%" }}
            >
              {/* Login Form - SỬA Ở ĐÂY */}
              {/* Xóa logic translate-x cũ, chỉ giữ lại w-1/2 */}
              <div className="w-1/2 p-8 md:p-12">
                <div className="mb-8 animate-fade-in">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Chào mừng trở lại! 👋
                  </h2>
                  <p className="text-gray-600">Đăng nhập để tiếp tục mua sắm</p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500 group-focus-within:scale-110 transition-transform" />
                      <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-sky-50/50 border-2 border-sky-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500 group-focus-within:scale-110 transition-transform" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                        className="w-full pl-12 pr-12 py-3 bg-sky-50/50 border-2 border-sky-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember & Forgot */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-sky-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                      />
                      <span className="text-gray-600 group-hover:text-sky-600 transition-colors">
                        Ghi nhớ đăng nhập
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-sky-600 hover:text-sky-700 font-semibold transition-colors"
                    >
                      Quên mật khẩu?
                    </a>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Đăng nhập
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">
                        Hoặc đăng nhập với
                      </span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      Facebook
                    </button>
                    <button
                      type="button"
                      className="py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Chrome className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                      Google
                    </button>
                  </div>

                  {/* Switch to Register */}
                  <p className="text-center text-gray-600 mt-6">
                    Chưa có tài khoản?{" "}
                    <button
                      type="button"
                      onClick={switchToRegister}
                      className="text-sky-600 hover:text-sky-700 font-bold transition-colors"
                    >
                      Đăng ký ngay
                    </button>
                  </p>
                </form>
              </div>

              {/* Register Form - SỬA Ở ĐÂY */}
              {/* Xóa logic translate-x cũ, chỉ giữ lại w-1/2 */}
              <div className="w-1/2 p-8 md:p-12">
                <div className="mb-8 animate-fade-in">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Tạo tài khoản mới ✨
                  </h2>
                  <p className="text-gray-600">
                    Tham gia cộng đồng yêu trà sữa
                  </p>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Họ và tên
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500 group-focus-within:scale-110 transition-transform" />
                      <input
                        type="text"
                        name="name"
                        value={registerData.name}
                        onChange={handleRegisterChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-sky-50/50 border-2 border-sky-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500 group-focus-within:scale-110 transition-transform" />
                      <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-sky-50/50 border-2 border-sky-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500 group-focus-within:scale-110 transition-transform" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                        className="w-full pl-12 pr-12 py-3 bg-sky-50/50 border-2 border-sky-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Xác nhận mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500 group-focus-within:scale-110 transition-transform" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        required
                        className="w-full pl-12 pr-12 py-3 bg-sky-50/50 border-2 border-sky-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      className="w-5 h-5 mt-0.5 rounded border-sky-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-sky-600 transition-colors">
                      Tôi đồng ý với{" "}
                      <a
                        href="#"
                        className="text-sky-600 font-semibold hover:underline"
                      >
                        Điều khoản sử dụng
                      </a>{" "}
                      và{" "}
                      <a
                        href="#"
                        className="text-sky-600 font-semibold hover:underline"
                      >
                        Chính sách bảo mật
                      </a>
                    </span>
                  </label>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Đăng ký ngay
                    <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Switch to Login */}
                  <p className="text-center text-gray-600 mt-6">
                    Đã có tài khoản?{" "}
                    <button
                      type="button"
                      onClick={switchToLogin}
                      className="text-sky-600 hover:text-sky-700 font-bold transition-colors"
                    >
                      Đăng nhập
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - Info Panel */}
          <div className="hidden lg:block relative bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-600 p-12 overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative h-full flex flex-col justify-between">
              {/* Logo & Tagline */}
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-4xl">🧋</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">BubbleTea</h1>
                    <p className="text-sky-100 text-sm">Store</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-2">
                  Nơi hương vị gặp gỡ đam mê
                </p>
                <p className="text-sky-100">
                  Tham gia cộng đồng hơn 50,000 người yêu trà sữa
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 my-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2 animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-medium">{feature.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Testimonial */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt="Customer"
                    className="w-12 h-12 rounded-full border-2 border-white/50"
                  />
                  <div>
                    <p className="text-white font-bold">Nguyễn Minh Anh</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-300">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sky-100 italic">
                  "Trà sữa ngon nhất tôi từng thử! Vị trà đậm đà, không quá
                  ngọt. Sẽ ủng hộ thường xuyên."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

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

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
