import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Shield, 
  Award,
  Star,
  ArrowRight,
  Heart,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  // Sản phẩm nổi bật
  const featuredProducts = [
    {
      id: 1,
      name: 'Trà sữa truyền thống',
      description: 'Vị trà đậm đà kết hợp với sữa béo ngậy',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400',
      rating: 4.8,
      sold: 1250
    },
    {
      id: 2,
      name: 'Trà trái cây nhiệt đới',
      description: 'Tươi mát với hương vị trái cây tự nhiên',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
      rating: 4.9,
      sold: 980
    },
    {
      id: 3,
      name: 'Trà sữa matcha',
      description: 'Matcha Nhật Bản nguyên chất cao cấp',
      price: 42000,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400',
      rating: 4.7,
      sold: 850
    },
    {
      id: 4,
      name: 'Trà đào cam sả',
      description: 'Hương thơm tự nhiên, vị ngọt thanh',
      price: 40000,
      image: 'https://images.unsplash.com/photo-1556679086-42f6b2b5f1e7?w=400',
      rating: 4.6,
      sold: 720
    }
  ];

  // Các tính năng nổi bật
  const features = [
    {
      icon: Truck,
      title: 'Giao hàng nhanh',
      description: 'Miễn phí ship cho đơn từ 100K',
      color: 'from-sky-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'An toàn thực phẩm',
      description: 'Cam kết nguyên liệu sạch 100%',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Chất lượng đảm bảo',
      description: 'Đổi trả trong 24h nếu không hài lòng',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Hơn 50K khách hàng',
      description: 'Được tin dùng trên toàn quốc',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Đánh giá khách hàng
  const testimonials = [
    {
      name: 'Nguyễn Minh Anh',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      comment: 'Trà sữa ngon nhất tôi từng thử! Vị trà đậm đà, không quá ngọt. Sẽ ủng hộ thường xuyên.'
    },
    {
      name: 'Trần Hoàng Long',
      avatar: 'https://i.pravatar.cc/100?img=2',
      rating: 5,
      comment: 'Giao hàng siêu nhanh, đồ uống vẫn còn nguyên vẹn. Nhân viên thân thiện, nhiệt tình!'
    },
    {
      name: 'Lê Thu Hà',
      avatar: 'https://i.pravatar.cc/100?img=3',
      rating: 5,
      comment: 'Topping trân châu mềm, dẻo vừa phải. Không gian quán đẹp, phù hợp để làm việc và gặp gỡ.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 py-20 md:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                ☕ Chào mừng đến với BubbleTea Store
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Nơi hương vị
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  gặp gỡ đam mê
                </span>
              </h1>
              
              <p className="text-xl text-sky-100 leading-relaxed">
                Thưởng thức những ly trà sữa đậm đà, được pha chế từ nguyên liệu cao cấp 
                và tình yêu dành cho nghề. Mỗi ngụm là một trải nghiệm đáng nhớ! 🧋
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="group px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Đặt hàng ngay
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/menu"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Xem thực đơn
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold">50K+</p>
                  <p className="text-sky-100 text-sm">Khách hàng</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-sky-100 text-sm">Sản phẩm</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">4.9⭐</p>
                  <p className="text-sky-100 text-sm">Đánh giá</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&h=800&fit=crop"
                alt="Bubble Tea"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Top 1</p>
                    <p className="text-sm text-gray-500">Trà sữa bán chạy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-xl text-gray-600">Cam kết mang đến trải nghiệm tuyệt vời nhất</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Sản phẩm nổi bật
              </h2>
              <p className="text-xl text-gray-600">Những món được yêu thích nhất</p>
            </div>
            <Link
              to="/menu"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Xem tất cả
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-yellow-400 text-gray-800 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-600" />
                    {product.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-sky-600">
                      {product.price.toLocaleString()}đ
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <ShoppingBag className="w-4 h-4" />
                      {product.sold} đã bán
                    </span>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-gray-600">Hơn 50,000 khách hàng hài lòng</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-sky-300"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Khách hàng thân thiết</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sẵn sàng thưởng thức?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Đặt hàng ngay để nhận ưu đãi 20% cho đơn hàng đầu tiên!
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Khám phá thực đơn
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
















