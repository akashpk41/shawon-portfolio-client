import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMedia, setActiveMedia] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate media items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMedia((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const mediaItems = [
    {
      type: "newspaper",
      title: "প্রথম আলো",
      subtitle: "Political Interview 2024",
      icon: "📰",
      color: "from-blue-500 to-indigo-600"
    },
    {
      type: "tv",
      title: "ATN Bangla",
      subtitle: "Prime Time Talk Show",
      icon: "📺",
      color: "from-red-500 to-pink-600"
    },
    {
      type: "youtube",
      title: "YouTube Channel",
      subtitle: "Political Analysis",
      icon: "🎥",
      color: "from-red-600 to-red-700"
    },
    {
      type: "newspaper",
      title: "দৈনিক ইত্তেফাক",
      subtitle: "Editorial Feature",
      icon: "📰",
      color: "from-green-500 to-emerald-600"
    },
    {
      type: "radio",
      title: "Radio Today",
      subtitle: "Morning Show Guest",
      icon: "🎙️",
      color: "from-purple-500 to-violet-600"
    },
    {
      type: "online",
      title: "bdnews24.com",
      subtitle: "Exclusive Interview",
      icon: "💻",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div id="About" className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Dynamic Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-bubble opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 80}px`,
              height: `${20 + Math.random() * 80}px`,
              background: `linear-gradient(45deg,
                ${['#f97316', '#ef4444', '#eab308', '#f59e0b'][Math.floor(Math.random() * 4)]}40,
                ${['#dc2626', '#f59e0b', '#f97316', '#eab308'][Math.floor(Math.random() * 4)]}20)`,
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              ABOUT SHAWON HOSSAIN
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Know The <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">LEADER</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discovering the journey, vision, and commitment behind authentic leadership
          </p>
        </div>

        {/* Hero Bio Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Mobile Image - Shows on top for mobile */}
          <div
            className={`md:hidden mb-12 transform transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative mx-auto w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-red-500/30 to-yellow-500/40 rounded-4xl blur-2xl animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-4xl border border-orange-500/40 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-700 to-red-800 rounded-4xl flex items-center justify-center">
                  <div className="text-7xl text-white font-black drop-shadow-2xl">SH</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-4xl" />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div
            className={`space-y-8 transform transition-all duration-1200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
            }`}
          >
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Personal Biography
              </h3>

              <div className="space-y-6 text-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 text-sm font-bold">🎂</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-orange-300">Age & Background</p>
                    <p className="text-gray-300 leading-relaxed">৩২ বছর বয়সী একজন উদীয়মান রাজনৈতিক নেতা, যিনি সমাজ পরিবর্তনে বিশ্বাসী।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 text-sm font-bold">🎓</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-orange-300">Education</p>
                    <p className="text-gray-300 leading-relaxed">রাজনীতি বিজ্ঞানে স্নাতকোত্তর, ঢাকা বিশ্ববিদ্যালয়। সমাজ বিজ্ঞানে বিশেষ আগ্রহ।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 text-sm font-bold">⚖️</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-orange-300">Political Experience</p>
                    <p className="text-gray-300 leading-relaxed">৮+ বছর রাজনৈতিক কর্মকাণ্ডে সক্রিয়। যুব সংগঠনের নেতৃত্ব থেকে শুরু করে স্থানীয় পর্যায়ে গুরুত্বপূর্ণ ভূমিকা।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image */}
          <div
            className={`hidden md:block relative transform transition-all duration-1200 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"
            }`}
          >
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-3xl backdrop-blur-sm border border-orange-500/40 animate-float shadow-2xl" />
              <div className="absolute -bottom-12 -right-12 w-20 h-20 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-full backdrop-blur-sm border border-yellow-500/40 animate-pulse shadow-2xl" />

              <div className="relative w-96 h-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-red-500/30 to-yellow-500/40 rounded-4xl blur-2xl animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-4xl border border-orange-500/40 overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-orange-700 to-red-800 rounded-4xl flex items-center justify-center">
                    <div className="text-8xl text-white font-black drop-shadow-2xl">SH</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Politics Section */}
        <div
          className={`mb-32 transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
              Why <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">POLITICS?</span>
            </h3>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-white">VISION</h4>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                একটি <span className="text-orange-400 font-bold">দুর্নীতিমুক্ত</span> এবং <span className="text-red-400 font-bold">ন্যায়ভিত্তিক সমাজ</span> গড়ার স্বপ্ন দেখি।
                যেখানে প্রতিটি মানুষ তার <span className="text-yellow-400 font-bold">মৌলিক অধিকার</span> পাবে এবং
                <span className="text-orange-400 font-bold"> উন্নয়নের সুফল</span> সবার কাছে পৌঁছাবে।
              </p>
            </div>

            {/* Mission */}
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-white">MISSION</h4>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                <span className="text-red-400 font-bold">তৃণমূল পর্যায়</span> থেকে শুরু করে প্রকৃত পরিবর্তন আনতে চাই।
                <span className="text-orange-400 font-bold">শিক্ষা, স্বাস্থ্য, কর্মসংস্থান</span> এই তিনটি খাতে বিপ্লবী উন্নতি এনে
                <span className="text-yellow-400 font-bold"> জনগণের জীবনমান</span> উন্নয়ন করাই আমার মূল লক্ষ্য।
              </p>
            </div>
          </div>
        </div>

        {/* Media Mentions Section */}
        <div
          className={`transform transition-all duration-1200 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
              Media <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">COVERAGE</span>
            </h3>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading media outlets covering the journey and impact of our political movement
            </p>
          </div>

          {/* Premium Media Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-110 ${
                  activeMedia === index ? "scale-105 z-20" : ""
                }`}
                onClick={() => setActiveMedia(index)}
              >
                {/* Bubble Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-3xl blur-2xl group-hover:opacity-40 transition-all duration-500 animate-pulse`} />

                {/* Main Media Card */}
                <div className={`relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border-2 rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
                  activeMedia === index
                    ? `border-orange-400/60 shadow-orange-500/30`
                    : `border-white/20 group-hover:border-orange-400/40`
                }`}>

                  {/* Media Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl group-hover:rotate-12 transition-all duration-300`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black text-white group-hover:text-orange-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {item.subtitle}
                    </p>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full animate-pulse shadow-lg`} />
                      <span className="text-sm text-orange-400 font-semibold tracking-wide">FEATURED</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-3xl transition-all duration-500 pointer-events-none" />

                  {/* Active Indicator */}
                  {activeMedia === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Media Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "TV Interviews", count: "15+", icon: "📺" },
              { label: "Newspaper Features", count: "25+", icon: "📰" },
              { label: "Online Articles", count: "40+", icon: "💻" },
              { label: "Radio Appearances", count: "12+", icon: "🎙️" }
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/30 border border-orange-500/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-orange-400 mb-2">{stat.count}</div>
                <div className="text-sm text-gray-300 font-semibold tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Bubble Animations */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-25px) rotate(120deg) scale(1.05);
          }
          66% {
            transform: translateY(-15px) rotate(240deg) scale(0.95);
          }
        }

        .animate-float-bubble {
          animation: float-bubble 12s ease-in-out infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;