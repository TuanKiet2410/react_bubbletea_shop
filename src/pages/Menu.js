import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Plus, 
  Minus,
  Heart,
  Star,
  Tag,
  Clock,
  Flame,
  Leaf,
  X,
  Check
} from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Categories
  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🍹' },
    { id: 'tra-sua', name: 'Trà sữa', icon: '🧋' },
    { id: 'tra-trai-cay', name: 'Trà trái cây', icon: '🍓' },
    { id: 'topping', name: 'Topping', icon: '⚪' },
    { id: 'an-vat', name: 'Ăn vặt', icon: '🍟' },
  ];

  // Products
  const products = [
    {
      id: 1,
      name: 'Trà sữa truyền thống',
      category: 'tra-sua',
      description: 'Vị trà đậm đà kết hợp với sữa béo ngậy, topping trân châu đen',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400',
      rating: 4.8,
      sold: 1250,
      tags: ['Hot', 'Best seller'],
      isNew: false,
      isBestSeller: true
    },
    {
      id: 2,
      name: 'Trà sữa matcha',
      category: 'tra-sua',
      description: 'Matcha Nhật Bản nguyên chất, kem cheese mặn ngọt độc đáo',
      price: 42000,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400',
      rating: 4.9,
      sold: 890,
      tags: ['Premium'],
      isNew: true,
      isBestSeller: false
    },
    {
      id: 3,
      name: 'Trà đào cam sả',
      category: 'tra-trai-cay',
      description: 'Hương thơm tự nhiên của đào, cam và sả, tươi mát cực kỳ',
      price: 40000,
      image: 'https://images.unsplash.com/photo-1556679086-42f6b2b5f1e7?w=400',
      rating: 4.7,
      sold: 720,
      tags: ['Fresh'],
      isNew: false,
      isBestSeller: true
    },
    {
      id: 4,
      name: 'Trả trái cây nhiệt đới',
      category: 'tra-trai-cay',
      description: 'Mix 5 loại trái cây: dứa, xoài, chanh dây, dâu tây, kiwi',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
      rating: 4.6,
      sold: 650,
      tags: ['Vitamin C'],
      isNew: false,
      isBestSeller: false
    },
    {
      id: 5,
      name: 'Trà sữa socola',
      category: 'tra-sua',
      description: 'Socola đắng Bỉ cao cấp, kết hợp với sữa tươi và kem whipping',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
      rating: 4.8,
      sold: 580,
      tags: ['Rich'],
      isNew: false,
      isBestSeller: false
    },
    {
      id: 6,
      name: 'Trà oolong tứ quý',
      category: 'tra-trai-cay',
      description: 'Trà oolong nhập khẩu Đài Loan, hương hoa tự nhiên',
      price: 36000,
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400',
      rating: 4.5,
      sold: 420,
      tags: ['Classic'],
      isNew: false,
      isBestSeller: false
    },
    {
      id: 7,
      name: 'Trân châu đen',
      category: 'topping',
      description: 'Trân châu đen mềm dẻo, nấu tươi mỗi 2 giờ',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1571167530149-c9b024c55555?w=400',
      rating: 4.9,
      sold: 2100,
      tags: ['Popular'],
      isNew: false,
      isBestSeller: true
    },
    {
      id: 8,
      name: 'Thạch rau câu',
      category: 'topping',
      description: 'Thạch rau câu mềm mịn, nhiều màu sắc bắt mắt',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400',
      rating: 4.4,
      sold: 890,
      tags: [],
      isNew: false,
      isBestSeller: false
    },
    {
      id: 9,
      name: 'Bánh flan caramel',
      category: 'an-vat',
      description: 'Bánh flan mềm mịn, caramel đắng nhẹ, ăn kèm trà cực ngon',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
      rating: 4.7,
      sold: 340,
      tags: ['Sweet'],
      isNew: false,
      isBestSeller: false
    },
    {
      id: 10,
      name: 'Gà bóp giấm',
      category: 'an-vat',
      description: 'Gà bóp giấm cay nồng, ăn vặt cực đã, siêu hợp với trà',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400',
      rating: 4.6,
      sold: 510,
      tags: ['Spicy'],
      isNew: false,
      isBestSeller: false
    },
    {
      id: 11,
      name: 'Kem cheese',
      category: 'topping',
      description: 'Kem cheese mặn ngọt, phủ lên trà tạo vị độc đáo',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=400',
      rating: 4.8,
      sold: 1020,
      tags: ['Premium'],
      isNew: true,
      isBestSeller: false
    },
    {
      id: 12,
      name: 'Trà sữa taro',
      category: 'tra-sua',
      description: 'Khoai môn tím Đà Lạt, mịn màng, thơm ngon tự nhiên',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1600788907416-456578634209?w=400',
      rating: 4.7,
      sold: 690,
      tags: ['Creamy'],
      isNew: false,
      isBestSeller: false
    },
  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart functions
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-indigo-100 animate-gradient">
      {/* Header */}
      <div className="sticky top-20 z-30 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 shadow-lg animate-gradient-x">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Thực đơn</h1>
              <p className="text-sky-100">Khám phá hương vị tuyệt vời</p>
            </div>

            {/* Search */}
            <div className="w-full md:w-96 relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
              <input
                type="text"
                placeholder="Tìm kiếm món..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all shadow-lg"
              />
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setShowCart(true)}
              className="relative px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Giỏ hàng</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-44 z-20 bg-white/80 backdrop-blur-xl border-b border-sky-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/50'
                    : 'bg-white text-gray-700 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-sky-100 hover:border-sky-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                      MỚI
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      BÁN CHẠY
                    </span>
                  )}
                </div>

                {/* Wishlist */}
                <button className="absolute top-3 right-3 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all group/heart shadow-lg">
                  <Heart className="w-5 h-5 text-red-500 group-hover/heart:fill-red-500 transition-all" />
                </button>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-yellow-600" />
                  {product.rating}
                </div>

                {/* Quick View */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-3 right-3 px-4 py-1.5 bg-white/95 backdrop-blur-sm text-sky-600 rounded-full text-sm font-bold hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                >
                  Xem chi tiết
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-sky-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">
                  {product.description}
                </p>

                {/* Tags */}
                {product.tags.length > 0 && (
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 text-xs font-medium rounded-lg border border-sky-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price & Sales */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      {product.price.toLocaleString()}đ
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {product.sold} đã bán
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-gradient-x"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full mb-6">
              <Search className="w-20 h-20 text-sky-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy sản phẩm</h3>
            <p className="text-gray-600">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowCart(false)}
          ></div>
          
          <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 animate-slide-in-right overflow-hidden flex flex-col">
            {/* Cart Header */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 text-white animate-gradient-x">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">Giỏ hàng</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sky-100">{getTotalItems()} sản phẩm</p>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <div className="inline-block p-6 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full mb-4">
                    <ShoppingCart className="w-16 h-16 text-sky-500" />
                  </div>
                  <p className="text-gray-600 text-lg">Giỏ hàng trống</p>
                  <p className="text-gray-400 text-sm mt-2">Thêm sản phẩm để tiếp tục</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gradient-to-br from-white to-sky-50 rounded-xl p-4 border border-sky-200 shadow-md animate-slide-up"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{item.name}</h3>
                          <p className="text-sky-600 font-bold mb-2">{item.price.toLocaleString()}đ</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 rounded-lg hover:from-sky-200 hover:to-blue-200 transition-all flex items-center justify-center font-bold"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-gray-800 w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center font-bold"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all flex items-center justify-center"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t border-sky-200 p-6 bg-gradient-to-br from-sky-50 to-blue-50">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Tạm tính</span>
                    <span className="font-semibold">{getTotalPrice().toLocaleString()}đ</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Phí giao hàng</span>
                    <span className="font-semibold text-green-600">Miễn phí</span>
                  </div>
                  <div className="border-t border-sky-200 pt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-800">Tổng cộng</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      {getTotalPrice().toLocaleString()}đ
                    </span>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-gradient-x">
                  <Check className="w-6 h-6" />
                  Đặt hàng ngay
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedProduct.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 rounded-full font-bold">
                    <Star className="w-5 h-5 fill-yellow-600" />
                    {selectedProduct.rating}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 rounded-full font-bold">
                    <Tag className="w-5 h-5" />
                    {selectedProduct.sold} đã bán
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    {selectedProduct.price.toLocaleString()}đ
                  </span>
                </div>
                
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-gradient-x"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </>
      )}

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

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
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

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Menu;