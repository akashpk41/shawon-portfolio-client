import React, { useState, useEffect } from "react";

const MediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMedia, setActiveMedia] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate media items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMedia((prev) => (prev + 1) % mediaItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const mediaItems = [
    {
      type: "newspaper",
      category: "print",
      title: "দৈনিক আদ প্রতিদিন",
      subtitle: "মাদক ও সন্ত্রাসবিরোধী আন্দোলন",
      description: "পাবনায় শিক্ষার্থীদের নেতৃত্বে মাদকবিরোধী আন্দোলনের বিস্তারিত প্রতিবেদন",
      date: "১৫ আগস্ট ২০২৪",
      icon: "📰",
      color: "from-blue-500 to-indigo-600",
      url: "adpratidin.com",
      featured: true
    },
    {
      type: "online",
      category: "digital",
      title: "পদ্মা টাইমস ২৪",
      subtitle: "শিক্ষার্থীদের মিছিল প্রতিবেদন",
      description: "কোটা সংস্কার আন্দোলনে পাবনার শিক্ষার্থীদের অংশগ্রহণের সম্পূর্ণ বিবরণ",
      date: "২০ জুলাই ২০২৪",
      icon: "💻",
      color: "from-cyan-500 to-blue-600",
      url: "padmatimes24.com",
      featured: false
    },
    {
      type: "newspaper",
      category: "print",
      title: "দৈনিক সকালের সময়",
      subtitle: "মাদকবিরোধী প্রচারণা",
      description: "তরুণ নেতৃত্বে পাবনায় মাদক প্রতিরোধ কমিটি গঠন ও কার্যক্রম",
      date: "১০ সেপ্টেম্বর ২০২৪",
      icon: "📰",
      color: "from-green-500 to-emerald-600",
      url: "dailysokalersomoy.com",
      featured: true
    },
    {
      type: "online",
      category: "digital",
      title: "মানবজমিন",
      subtitle: "পাবনায় শিক্ষার্থীদের বিক্ষোভ",
      description: "বৈষম্যবিরোধী ছাত্র আন্দোলনের পাবনা অধ্যায়ের নেতৃত্বের ভূমিকা",
      date: "২৫ জুলাই ২০২৪",
      icon: "💻",
      color: "from-orange-500 to-red-600",
      url: "mzamin.com",
      featured: false
    },
    {
      type: "newspaper",
      category: "print",
      title: "আজকের পত্রিকা",
      subtitle: "রাজশাহী বিভাগীয় প্রতিবেদন",
      description: "রাজশাহী বিভাগের ছাত্র আন্দোলনে পাবনার নেতৃত্বের অবদান",
      date: "৩০ জুলাই ২০২৪",
      icon: "📰",
      color: "from-purple-500 to-violet-600",
      url: "ajkerpatrika.com",
      featured: true
    },
    {
      type: "international",
      category: "national",
      title: "The Daily Star বাংলা",
      subtitle: "জাতীয় পর্যায়ে প্রতিবেদন",
      description: "বাংলাদেশের ছাত্র আন্দোলনে আঞ্চলিক নেতৃত্বের ভূমিকা নিয়ে বিশেষ প্রতিবেদন",
      date: "০৫ আগস্ট ২০২৪",
      icon: "🌍",
      color: "from-yellow-500 to-orange-600",
      url: "bangla.thedailystar.net",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'সকল মিডিয়া', count: mediaItems.length, icon: '📱' },
    { id: 'print', label: 'মুদ্রিত মিডিয়া', count: mediaItems.filter(item => item.category === 'print').length, icon: '📰' },
    { id: 'digital', label: 'ডিজিটাল মিডিয়া', count: mediaItems.filter(item => item.category === 'digital').length, icon: '💻' },
    { id: 'national', label: 'জাতীয় মিডিয়া', count: mediaItems.filter(item => item.category === 'national').length, icon: '🌍' }
  ];

  const filteredMedia = selectedCategory === 'all'
    ? mediaItems
    : mediaItems.filter(item => item.category === selectedCategory);

  const featuredMedia = mediaItems.filter(item => item.featured);

  return (
    <div id="Media" className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-bubble opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 40}px`,
              height: `${15 + Math.random() * 40}px`,
              background: `linear-gradient(45deg,
                ${['#f97316', '#ef4444', '#eab308', '#8b5cf6'][Math.floor(Math.random() * 4)]}40,
                ${['#dc2626', '#f59e0b', '#f97316', '#a855f7'][Math.floor(Math.random() * 4)]}20)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 165, 0, 0.3)',
              boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(249, 115, 22, 0.4)`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-2xl border border-orange-500/40 rounded-full shadow-2xl mb-8">
            <span className="text-orange-400 font-bold text-lg tracking-wide flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
              Media Coverage
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-snug">
            গণমাধ্যমে
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent ml-4">
              প্রকাশনা
            </span>
          </h2>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full mb-8" />
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            জাতীয় ও স্থানীয় পর্যায়ের প্রভাবশালী সংবাদমাধ্যমে আন্দোলন ও কার্যক্রমের ব্যাপক প্রচার ও স্বীকৃতি
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`mb-16 transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 flex items-center gap-3 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/40 border-2 border-orange-400/60'
                    : 'backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border-2 border-white/20 text-gray-300 hover:border-orange-400/40 hover:text-white'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.label}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Media Hero */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h3 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
            বিশেষ <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">প্রতিবেদন</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredMedia.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer transform transition-all duration-700 hover:scale-105"
                onClick={() => setActiveMedia(mediaItems.findIndex(media => media.title === item.title))}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 rounded-3xl blur-2xl group-hover:opacity-50 transition-all duration-500 animate-pulse`} />

                {/* Featured Card */}
                <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border-2 border-orange-400/60 rounded-3xl p-8 shadow-2xl">

                  {/* Featured Badge */}
                  <div className="absolute -top-4 left-8 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-bold text-sm shadow-xl">
                    বিশেষ প্রতিবেদন
                  </div>

                  {/* Content */}
                  <div className="mt-4 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-orange-400">{item.title}</h4>
                        <p className="text-sm text-orange-300 font-semibold">{item.url}</p>
                      </div>
                    </div>

                    <h5 className="text-xl font-bold text-white">{item.subtitle}</h5>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-orange-500/30">
                      <span className="text-orange-400 font-semibold">{item.date}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full animate-pulse`} />
                        <span className="text-sm text-green-400 font-semibold">প্রকাশিত</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h3 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
            সকল <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">প্রকাশনা</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredMedia.map((item, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-110 ${
                  activeMedia === mediaItems.findIndex(media => media.title === item.title) ? "scale-105 z-20" : ""
                }`}
                onClick={() => setActiveMedia(mediaItems.findIndex(media => media.title === item.title))}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-3xl blur-2xl group-hover:opacity-40 transition-all duration-500`} />

                {/* Media Card */}
                <div className={`relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border-2 rounded-3xl p-6 shadow-2xl transition-all duration-500 ${
                  activeMedia === mediaItems.findIndex(media => media.title === item.title)
                    ? `border-orange-400/60 shadow-orange-500/30`
                    : `border-white/20 group-hover:border-orange-400/40`
                }`}>

                  {/* Media Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-xl group-hover:rotate-12 transition-all duration-300`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-black text-white group-hover:text-orange-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                      {item.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-400 font-semibold">{item.date}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full animate-pulse`} />
                        <span className="text-green-400 font-semibold">প্রকাশিত</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeMedia === mediaItems.findIndex(media => media.title === item.title) && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {item.featured && (
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Statistics */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              মিডিয়া <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">পরিসংখ্যান</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "সংবাদপত্র", count: "৬+", icon: "📰", color: "from-blue-500 to-indigo-600" },
              { label: "অনলাইন পোর্টাল", count: "১০+", icon: "💻", color: "from-green-500 to-emerald-600" },
              { label: "জাতীয় মিডিয়া", count: "৩+", icon: "🌍", color: "from-purple-500 to-violet-600" },
              { label: "ভিডিও রিপোর্ট", count: "৫+", icon: "🎥", color: "from-red-500 to-pink-600" }
            ].map((stat, index) => (
              <div key={index} className={`backdrop-blur-2xl bg-gradient-to-br ${stat.color}/20 border border-orange-500/20 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition-all duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-4xl font-black text-orange-400 mb-3">{stat.count}</div>
                <div className="text-base text-gray-300 font-semibold tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Contact */}
        <div
          className={`transform transition-all duration-1200 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-12 shadow-2xl">
            <div className="text-center">
              <h4 className="text-4xl font-black text-white mb-6">
                যোগাযোগ <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">রাখুন</span>
              </h4>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                সর্বশেষ আপডেট এবং কার্যক্রমের খবর পেতে সামাজিক যোগাযোগ মাধ্যমে যুক্ত হন এবং নিয়মিত সংবাদ প্রতিবেদন দেখুন
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl font-black text-white text-lg shadow-2xl hover:shadow-blue-500/40 transform hover:scale-110 transition-all duration-500 tracking-wide flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  FACEBOOK পেইজ
                </button>

                <button className="px-12 py-5 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border-2 border-orange-500/40 rounded-2xl font-bold text-white text-lg hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 hover:border-orange-400/60 transform hover:scale-110 transition-all duration-500 tracking-wide flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  ভিডিও দেখুন
                </button>

                <button className="px-12 py-5 backdrop-blur-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-500/40 rounded-2xl font-bold text-white text-lg hover:bg-gradient-to-br hover:from-green-600/30 hover:to-emerald-600/30 hover:border-green-400/60 transform hover:scale-110 transition-all duration-500 tracking-wide flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2.5 2.5 0 00-2.5-2.5H15" />
                  </svg>
                  সকল নিউজ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-bubble {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-30px) translateX(15px) scale(1.1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px) translateX(-20px) scale(0.9);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-40px) translateX(10px) scale(1.05);
            opacity: 0.3;
          }
        }

        .animate-float-bubble {
          animation: float-bubble 12s ease-in-out infinite;
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

export default MediaSection;