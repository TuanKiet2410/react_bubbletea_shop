import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Heart,
  Share2,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  X,
  Instagram,
  Facebook,
  MessageCircle,
  Bookmark,
  Eye,
  ThumbsUp
} from 'lucide-react';

const Story = () => {
  const [stories] = useState([
    {
      id: 1,
      productName: 'Trà sữa truyền thống',
      category: 'Trà sữa',
      price: 35000,
      thumbnail: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600',
      video: 'https://videos.pexels.com/video-files/8473616/8473616-uhd_1440_2732_25fps.mp4',
      views: 12500,
      likes: 2340,
      description: 'Vị trà đậm đà kết hợp với sữa béo ngậy, topping trân châu đen mềm dẻo',
      hashtags: ['#TraSua', '#BubbleTea', '#BestSeller', '#Viral']
    },
    {
      id: 2,
      productName: 'Trà sữa matcha',
      category: 'Trà sữa',
      price: 42000,
      thumbnail: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600',
      video: 'https://videos.pexels.com/video-files/5953564/5953564-uhd_1440_2732_25fps.mp4',
      views: 9800,
      likes: 1890,
      description: 'Matcha Nhật Bản nguyên chất, kem cheese mặn ngọt độc đáo',
      hashtags: ['#Matcha', '#Premium', '#Healthy', '#Japanese']
    },
    {
      id: 3,
      productName: 'Trà đào cam sả',
      category: 'Trà trái cây',
      price: 40000,
      thumbnail: 'https://images.unsplash.com/photo-1556679086-42f6b2b5f1e7?w=600',
      video: 'https://videos.pexels.com/video-files/5338081/5338081-uhd_1440_2732_25fps.mp4',
      views: 15200,
      likes: 3120,
      description: 'Hương thơm tự nhiên của đào, cam và sả, tươi mát cực kỳ',
      hashtags: ['#Fresh', '#Fruit', '#Summer', '#Refreshing']
    },
    {
      id: 4,
      productName: 'Trà trái cây nhiệt đới',
      category: 'Trà trái cây',
      price: 38000,
      thumbnail: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600',
      video: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_1440_2732_25fps.mp4',
      views: 8900,
      likes: 1560,
      description: 'Mix 5 loại trái cây: dứa, xoài, chanh dây, dâu tây, kiwi',
      hashtags: ['#Tropical', '#Vitamins', '#Healthy', '#Colorful']
    },
    {
      id: 5,
      productName: 'Trà sữa socola',
      category: 'Trà sữa',
      price: 45000,
      thumbnail: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600',
      video: 'https://videos.pexels.com/video-files/6478606/6478606-uhd_1440_2732_25fps.mp4',
      views: 11300,
      likes: 2100,
      description: 'Socola đắng Bỉ cao cấp, kết hợp với sữa tươi và kem whipping',
      hashtags: ['#Chocolate', '#Rich', '#Indulgent', '#Premium']
    },
    {
      id: 6,
      productName: 'Trà sữa taro',
      category: 'Trà sữa',
      price: 38000,
      thumbnail: 'https://images.unsplash.com/photo-1600788907416-456578634209?w=600',
      video: 'https://videos.pexels.com/video-files/7651940/7651940-uhd_1440_2732_25fps.mp4',
      views: 10500,
      likes: 1980,
      description: 'Khoai môn tím Đà Lạt, mịn màng, thơm ngon tự nhiên',
      hashtags: ['#Taro', '#Purple', '#Creamy', '#Popular']
    }
  ]);

  const [selectedStory, setSelectedStory] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const currentStory = stories[currentStoryIndex];

  const openStory = (index) => {
    setSelectedStory(index);
    setCurrentStoryIndex(index);
    setProgress(0);
    setIsPlaying(true);
    setIsLiked(false);
    setIsSaved(false);
  };

  const closeStory = () => {
    setSelectedStory(null);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Handle video time update
  useEffect(() => {
    const video = videoRef.current;
    if (!video || selectedStory === null) return;

    const updateProgress = () => {
      const percentage = (video.currentTime / video.duration) * 100;
      setProgress(percentage);
    };

    video.addEventListener('timeupdate', updateProgress);
    
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [selectedStory, currentStoryIndex]);

  // Auto play when story opens
  useEffect(() => {
    const video = videoRef.current;
    if (!video || selectedStory === null) return;

    if (isPlaying) {
      video.play().catch(e => console.log('Play prevented:', e));
    } else {
      video.pause();
    }
  }, [isPlaying, selectedStory, currentStoryIndex]);

  const handleVideoEnd = () => {
    if (currentStoryIndex < stories.length - 1) {
      nextStory();
    } else {
      setIsPlaying(false);
      setProgress(100);
    }
  };

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
      setIsPlaying(true);
      setIsLiked(false);
      setIsSaved(false);
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setProgress(0);
      setIsPlaying(true);
      setIsLiked(false);
      setIsSaved(false);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    alert(`Đã thêm "${currentStory.productName}" vào giỏ hàng!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 animate-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Product <span className="bg-gradient-to-r from-sky-300 to-purple-300 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-blue-200">Khám phá sản phẩm qua video ngắn hấp dẫn</p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => openStory(index)}
              className="group relative bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ 
                animationDelay: `${index * 50}ms`,
                aspectRatio: '9/16'
              }}
            >
              {/* Thumbnail Image */}
              <img
                src={story.thumbnail}
                alt={story.productName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>

              {/* Play Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>

              {/* Top Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg text-sm">
                    {story.productName.charAt(0)}
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    <p className="text-white text-xs font-semibold">{story.category}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="absolute top-16 right-3 space-y-2">
                <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Eye className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-bold">{(story.views / 1000).toFixed(1)}K</span>
                </div>
                <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                  <span className="text-white text-xs font-bold">{(story.likes / 1000).toFixed(1)}K</span>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg line-clamp-1">
                  {story.productName}
                </h3>
                <p className="text-sky-200 text-sm mb-2 drop-shadow-lg line-clamp-2">
                  {story.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                    {story.price.toLocaleString()}đ
                  </span>
                  <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                    <Play className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">Xem</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full Screen Video Modal */}
      {selectedStory !== null && (
        <>
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 animate-fade-in"
            onClick={closeStory}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md h-full max-h-[90vh] flex items-center animate-scale-in">
              {/* Close Button */}
              <button
                onClick={closeStory}
                className="absolute top-4 right-4 z-30 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-all shadow-xl"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video Player Container */}
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl w-full" style={{ aspectRatio: '9/16' }}>
                {/* Progress Bars */}
                <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-3">
                  {stories.map((_, index) => (
                    <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                      <div
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300"
                        style={{
                          width: index < currentStoryIndex ? '100%' : index === currentStoryIndex ? `${progress}%` : '0%'
                        }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Video */}
                <video
                  ref={videoRef}
                  src={currentStory.video}
                  className="w-full h-full object-cover"
                  loop={false}
                  muted={isMuted}
                  playsInline
                  autoPlay
                  onEnded={handleVideoEnd}
                  poster={currentStory.thumbnail}
                />

                {/* Navigation Overlay (Click Areas) */}
                <div className="absolute inset-0 flex z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevStory();
                    }}
                    className="flex-1 cursor-pointer"
                    disabled={currentStoryIndex === 0}
                  ></button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className="flex-1 cursor-pointer"
                  ></button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextStory();
                    }}
                    className="flex-1 cursor-pointer"
                    disabled={currentStoryIndex === stories.length - 1}
                  ></button>
                </div>

                {/* Top Info Bar */}
                <div className="absolute top-16 left-0 right-0 z-20 px-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                        {currentStory.productName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm drop-shadow-lg">{currentStory.productName}</p>
                        <p className="text-sky-200 text-xs drop-shadow-lg">{currentStory.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all shadow-lg"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                    </button>
                  </div>
                </div>

                {/* Play/Pause Button (Center) */}
                {!isPlaying && (
                  <button
                    onClick={togglePlayPause}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all animate-pulse shadow-xl"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                )}

                {/* Side Action Buttons */}
                <div className="absolute right-4 bottom-40 z-20 space-y-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike();
                    }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all shadow-lg">
                      <Heart className={`w-6 h-6 ${isLiked ? 'fill-pink-500 text-pink-500' : 'text-white'} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-white text-xs font-semibold drop-shadow-lg">{((currentStory.likes + (isLiked ? 1 : 0)) / 1000).toFixed(1)}K</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowShareMenu(!showShareMenu);
                    }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all shadow-lg">
                      <Share2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-white text-xs font-semibold drop-shadow-lg">Chia sẻ</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSaved(!isSaved);
                    }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all shadow-lg">
                      <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-yellow-500 text-yellow-500' : 'text-white'} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-white text-xs font-semibold drop-shadow-lg">Lưu</span>
                  </button>
                </div>

                {/* Bottom Product Info */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <div className="mb-4">
                    <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">{currentStory.productName}</h3>
                    <p className="text-sky-200 text-sm mb-3 drop-shadow-lg">{currentStory.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {currentStory.hashtags.map((tag, index) => (
                        <span key={index} className="text-sky-300 text-sm font-medium drop-shadow-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart();
                    }}
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-gradient-x shadow-xl"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Thêm vào giỏ - {currentStory.price.toLocaleString()}đ
                  </button>
                </div>

                {/* Navigation Arrows */}
                {currentStoryIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevStory();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                )}
                {currentStoryIndex < stories.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextStory();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                )}
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
      `}</style>
    </div>
  );
};

export default Story;