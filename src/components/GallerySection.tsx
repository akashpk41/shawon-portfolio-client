import React, { useState, useEffect } from "react";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("community");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Community Work Images
  const communityWork = [
    {
      id: 1,
      type: "image",
      title: "স্বাস্থ্য সেবা প্রোগ্রাম",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      description: "গ্রামীণ এলাকায় বিনামূল্যে স্বাস্থ্য সেবা প্রদান",
      date: "15 মার্চ 2025",
      participants: "200+"
    },
    {
      id: 2,
      type: "image",
      title: "শিক্ষা উন্নয়ন কর্মসূচি",
      category: "Education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      description: "প্রাথমিক বিদ্যালয়ে শিক্ষা সামগ্রী বিতরণ",
      date: "10 মার্চ 2025",
      participants: "150+"
    },
    {
      id: 3,
      type: "video",
      title: "কমিউনিটি সেন্টার উদ্বোধন",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      videoUrl: "https://example.com/video1.mp4",
      description: "নতুন কমিউনিটি সেন্টার উদ্বোধনী অনুষ্ঠান",
      date: "05 মার্চ 2025",
      participants: "500+"
    },
    {
      id: 4,
      type: "image",
      title: "মহিলা ক্ষমতায়ন সভা",
      category: "Women Empowerment",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
      description: "স্থানীয় মহিলাদের দক্ষতা উন্নয়ন কর্মশালা",
      date: "28 ফেব্রুয়ারি 2025",
      participants: "80+"
    },
    {
      id: 5,
      type: "image",
      title: "যুব উন্নয়ন প্রোগ্রাম",
      category: "Youth Development",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
      description: "তরুণদের জন্য দক্ষতা উন্নয়ন কর্মসূচি",
      date: "20 ফেব্রুয়ারি 2025",
      participants: "300+"
    },
    {
      id: 6,
      type: "video",
      title: "কৃষি প্রযুক্তি প্রদর্শনী",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&h=400&fit=crop",
      videoUrl: "https://example.com/video2.mp4",
      description: "আধুনিক কৃষি প্রযুক্তির ব্যবহার প্রদর্শন",
      date: "15 ফেব্রুয়ারি 2025",
      participants: "120+"
    }
  ];

  // Volunteer Work Images
  const volunteerWork = [
    {
      id: 1,
      type: "image",
      title: "রক্তদান ক্যাম্প",
      category: "Blood Donation",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=600&h=400&fit=crop",
      description: "স্বেচ্ছায় রক্তদান কর্মসূচি - জীবন বাঁচান",
      date: "25 মার্চ 2025",
      participants: "100+ দাতা"
    },
    {
      id: 2,
      type: "image",
      title: "ত্রাণ বিতরণ কার্যক্রম",
      category: "Relief Camp",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
      description: "দুর্গত পরিবারগুলিতে খাদ্য ও ত্রাণসামগ্রী বিতরণ",
      date: "18 মার্চ 2025",
      participants: "50+ স্বেচ্ছাসেবক"
    },
    {
      id: 3,
      type: "video",
      title: "পরিবেশ সচেতনতা অভিযান",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      videoUrl: "https://example.com/video3.mp4",
      description: "বৃক্ষরোপণ ও পরিবেশ রক্ষা কর্মসূচি",
      date: "12 মার্চ 2025",
      participants: "200+ অংশগ্রহণকারী"
    },
    {
      id: 4,
      type: "image",
      title: "শীতবস্ত্র বিতরণ",
      category: "Winter Relief",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      description: "দরিদ্র পরিবারে শীতবস্ত্র বিতরণ কর্মসূচি",
      date: "08 জানুয়ারি 2025",
      participants: "30+ স্বেচ্ছাসেবক"
    },
    {
      id: 5,
      type: "image",
      title: "পথশিশু সহায়তা",
      category: "Child Welfare",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
      description: "পথশিশুদের শিক্ষা ও খাবার সহায়তা",
      date: "02 মার্চ 2025",
      participants: "25+ স্বেচ্ছাসেবক"
    },
    {
      id: 6,
      type: "video",
      title: "বন্যা ত্রাণ কাজ",
      category: "Flood Relief",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      videoUrl: "https://example.com/video4.mp4",
      description: "বন্যা দুর্গতদের উদ্ধার ও সহায়তা কর্মসূচি",
      date: "15 আগস্ট 2024",
      participants: "80+ উদ্ধারকারী"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Healthcare": "from-red-500 to-pink-600",
      "Education": "from-blue-500 to-indigo-600",
      "Infrastructure": "from-purple-500 to-violet-600",
      "Women Empowerment": "from-pink-500 to-rose-600",
      "Youth Development": "from-green-500 to-emerald-600",
      "Agriculture": "from-yellow-500 to-orange-600",
      "Blood Donation": "from-red-600 to-red-700",
      "Relief Camp": "from-orange-500 to-amber-600",
      "Environment": "from-green-600 to-teal-600",
      "Winter Relief": "from-blue-600 to-cyan-600",
      "Child Welfare": "from-purple-600 to-indigo-700",
      "Flood Relief": "from-cyan-500 to-blue-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const openModal = (item) => {
    setSelectedMedia(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const currentGallery = activeTab === "community" ? communityWork : volunteerWork;

  return (
    <div id="Gallery" className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gallery-themed Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-gallery-float opacity-25"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${10 + Math.random() * 40}px`,
                height: `${10 + Math.random() * 40}px`,
                background: `linear-gradient(135deg,
                  ${['#f97316', '#ef4444', '#eab308', '#8b5cf6', '#06b6d4'][Math.floor(Math.random() * 5)]}50,
                  ${['#dc2626', '#f59e0b', '#f97316', '#a855f7', '#0891b2'][Math.floor(Math.random() * 5)]}30)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 10}s`,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 165, 0, 0.2)',
                boxShadow: `0 0 ${20 + Math.random() * 30}px rgba(249, 115, 22, 0.3)`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        {/* Camera-themed Floating Icons */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`camera-${i}`}
              className="absolute opacity-15 animate-camera-float"
              style={{
                left: `${5 + i * 8}%`,
                top: `${15 + ((i * 17) % 70)}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              <div className="w-12 h-10 bg-gradient-to-br from-orange-600/40 to-red-600/40 rounded-lg backdrop-blur-sm border border-orange-500/30 flex items-center justify-center">
                <div className="w-6 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-70"></div>
              </div>
            </div>
          ))}
        </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              GALLERY & COMMUNITY WORK
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">IMPACT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            সমাজসেবা এবং স্বেচ্ছাসেবী কর্মকাণ্ডের মাধ্যমে আমাদের অবদান
          </p>
        </div>

        {/* Premium Tab Navigation */}
        <div
          className={`flex justify-center mb-16 transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-3 shadow-2xl">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("community")}
                className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${
                  activeTab === "community"
                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl"
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-red-600/20"
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Community Work
                </span>
              </button>
              <button
                onClick={() => setActiveTab("volunteer")}
                className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${
                  activeTab === "volunteer"
                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl"
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-red-600/20"
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Volunteer Works
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Premium Gallery Grid */}
        <div
          className={`transform transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Gallery Stats Header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "মোট প্রোগ্রাম", count: "50+", icon: "🏢" },
              { label: "সুবিধাভোগী", count: "2000+", icon: "👥" },
              { label: "স্বেচ্ছাসেবক", count: "300+", icon: "🤝" },
              { label: "এলাকা", count: "15+", icon: "📍" }
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/30 border border-orange-500/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-orange-400 mb-2">{stat.count}</div>
                <div className="text-sm text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative cursor-pointer transform hover:scale-105 transition-all duration-700 hover:z-20"
                onClick={() => openModal(item)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${getCategoryColor(item.category)} opacity-0 group-hover:opacity-30 rounded-4xl blur-xl transition-all duration-500 animate-pulse`} />

                {/* Main Card */}
                <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border border-white/20 group-hover:border-orange-400/60 rounded-4xl overflow-hidden shadow-2xl transition-all duration-500">

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-full shadow-xl`}>
                      <span className="text-white text-sm font-bold">{item.category}</span>
                    </div>

                    {/* Media Type Icon */}
                    {item.type === "video" && (
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}

                    {/* Hover Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-orange-400 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-semibold">{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Participants */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-green-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm font-semibold">{item.participants}</span>
                      </div>

                      {/* View Details Button */}
                      <div className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full group-hover:from-orange-500/40 group-hover:to-red-500/40 transition-all duration-300">
                        <span className="text-orange-400 text-xs font-bold">বিস্তারিত দেখুন</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-4xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl font-black text-white shadow-2xl hover:shadow-orange-500/40 transform hover:scale-110 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-3 text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              আরও দেখুন
            </span>
          </button>
        </div>
      </div>

      {/* Premium Modal */}
      {isModalOpen && selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl">
          <div className="relative max-w-4xl w-full max-h-[90vh] backdrop-blur-3xl bg-gradient-to-br from-black/80 to-gray-900/60 border border-orange-500/40 rounded-4xl overflow-hidden shadow-2xl">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Media Section */}
              <div className="lg:w-2/3">
                <div className="relative h-96 lg:h-[600px]">
                  <img
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play Button for Videos */}
                  {selectedMedia.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:w-1/3 p-8">
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedMedia.category)} rounded-full shadow-xl`}>
                    <span className="text-white font-bold text-sm">{selectedMedia.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-white leading-tight">
                    {selectedMedia.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-3 text-orange-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-bold">{selectedMedia.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedMedia.description}
                  </p>

                  {/* Participants */}
                  <div className="flex items-center gap-3 text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-bold text-lg">{selectedMedia.participants}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4 pt-6">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl font-bold text-white shadow-xl hover:scale-105 transition-all duration-300">
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        শেয়ার করুন
                      </span>
                    </button>

                    <button className="w-full px-6 py-4 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-500/40 rounded-2xl font-bold text-white hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 transition-all duration-300">
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        ডাউনলোড
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gallery-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.25;
          }
          25% {
            transform: translateY(-50px) translateX(30px) scale(1.2) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) translateX(-40px) scale(0.8) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-60px) translateX(20px) scale(1.1) rotate(270deg);
            opacity: 0.4;
          }
        }

        @keyframes camera-float {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
            opacity: 0.15;
          }
          33% {
            transform: translateY(-40px) rotateX(120deg) rotateY(120deg) scale(1.3);
            opacity: 0.4;
          }
          66% {
            transform: translateY(-20px) rotateX(240deg) rotateY(240deg) scale(0.9);
            opacity: 0.6;
          }
        }

        .animate-gallery-float {
          animation: gallery-float 18s ease-in-out infinite;
        }

        .animate-camera-float {
          animation: camera-float 25s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </div>
  );
};

export default GallerySection;