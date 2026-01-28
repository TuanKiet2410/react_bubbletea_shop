import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Facebook,
  Instagram,
  MessageCircle,
  CheckCircle,
  User,
  MessageSquare,
  Calendar,
  Building,
  MapPinned,
  Heart
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Điện thoại',
      content: '1900 123 456',
      link: 'tel:1900123456',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@bubbleteastore.com',
      link: 'mailto:hello@bubbleteastore.com',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: '123 Đường Trà Sữa, Q.1, TP.HCM',
      link: 'https://maps.google.com',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Giờ mở cửa',
      content: '8:00 - 22:00 (Hàng ngày)',
      link: null,
      color: 'from-pink-600 to-red-600'
    }
  ];

  const stores = [
    {
      name: 'Chi nhánh Quận 1',
      address: '123 Đường Trà Sữa, P.Bến Nghé, Q.1, TP.HCM',
      phone: '028 1234 5678',
      hours: '8:00 - 22:00',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400'
    },
    {
      name: 'Chi nhánh Quận 3',
      address: '456 Đường Võ Văn Tần, P.6, Q.3, TP.HCM',
      phone: '028 8765 4321',
      hours: '8:00 - 23:00',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400'
    },
    {
      name: 'Chi nhánh Thủ Đức',
      address: '789 Đường Võ Văn Ngân, P.Linh Chiểu, TP.Thủ Đức',
      phone: '028 9999 8888',
      hours: '7:00 - 22:00',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      handle: '@bubbleteastore',
      link: 'https://facebook.com',
      color: 'from-blue-600 to-blue-700',
      followers: '50K'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@bubbletea.store',
      link: 'https://instagram.com',
      color: 'from-pink-600 to-purple-600',
      followers: '35K'
    },
    {
      icon: MessageCircle,
      name: 'Zalo',
      handle: '0901 234 567',
      link: 'https://zalo.me',
      color: 'from-blue-500 to-cyan-500',
      followers: '20K'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 animate-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-800 py-20 animate-gradient-x">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in">
            💬 Chúng tôi luôn sẵn sàng lắng nghe
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Liên hệ với
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              BubbleTea Store
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bạn có câu hỏi, góp ý hoặc muốn hợp tác? Hãy để lại thông tin, chúng tôi sẽ phản hồi trong 24h!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link || '#'}
                  target={info.link ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-blue-200">{info.content}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Gửi tin nhắn</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Gửi thành công!</h3>
                    <p className="text-blue-200">Chúng tôi sẽ phản hồi bạn sớm nhất có thể.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-blue-100 text-sm font-medium mb-2">
                        Họ và tên <span className="text-pink-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                          placeholder="Nhập họ tên của bạn"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-blue-100 text-sm font-medium mb-2">
                          Email <span className="text-pink-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-blue-100 text-sm font-medium mb-2">
                          Số điện thoại
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                            placeholder="0901 234 567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-blue-100 text-sm font-medium mb-2">
                        Chủ đề
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                      >
                        <option value="" className="bg-blue-900">Chọn chủ đề</option>
                        <option value="order" className="bg-blue-900">Đặt hàng</option>
                        <option value="feedback" className="bg-blue-900">Góp ý</option>
                        <option value="partnership" className="bg-blue-900">Hợp tác</option>
                        <option value="other" className="bg-blue-900">Khác</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-blue-100 text-sm font-medium mb-2">
                        Nội dung <span className="text-pink-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all resize-none"
                        placeholder="Nhập nội dung tin nhắn của bạn..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-gradient-x ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Gửi tin nhắn
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map & Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Map */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-800 to-purple-800 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946359039665!2d106.68266931533423!3d10.775013762286124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2sBen%20Thanh%20Market!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="opacity-80"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Kết nối với chúng tôi</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-white">{social.name}</p>
                          <p className="text-blue-200 text-sm">{social.handle}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white">{social.followers}</p>
                          <p className="text-blue-200 text-xs">Followers</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-20 bg-gradient-to-b from-transparent to-blue-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hệ thống cửa hàng
            </h2>
            <p className="text-xl text-blue-200">Ghé thăm chúng tôi tại các chi nhánh</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{store.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-blue-200">
                      <MapPinned className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-400" />
                      <span className="text-sm">{store.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-blue-200">
                      <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                      <span className="text-sm">{store.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-blue-200">
                      <Clock className="w-5 h-5 flex-shrink-0 text-indigo-400" />
                      <span className="text-sm">{store.hours}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-gradient-x">
                    Chỉ đường
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xl text-blue-200">Những thông tin bạn cần biết</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Thời gian giao hàng là bao lâu?',
                a: 'Chúng tôi giao hàng trong vòng 30-45 phút trong bán kính 5km. Miễn phí ship cho đơn từ 100K.'
              },
              {
                q: 'Có hỗ trợ đặt hàng online không?',
                a: 'Có, bạn có thể đặt hàng qua website, app hoặc gọi điện trực tiếp đến hotline 1900 123 456.'
              },
              {
                q: 'Chính sách đổi trả như thế nào?',
                a: 'Chúng tôi hỗ trợ đổi trả trong 24h nếu sản phẩm có vấn đề về chất lượng.'
              },
              {
                q: 'Có chương trình khuyến mãi nào không?',
                a: 'Chúng tôi thường xuyên có các chương trình khuyến mãi. Theo dõi fanpage để cập nhật!'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    {index + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-blue-200 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradient-x {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }

        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 8s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;