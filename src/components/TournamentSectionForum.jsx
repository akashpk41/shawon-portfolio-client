import React, { useState, useEffect } from "react";

const TournamentSectionForum = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date('2025-09-10T10:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tabData = [
    {
      id: 0,
      title: "টুর্নামেন্ট তথ্য",
      icon: "⚽",
      color: "from-blue-500 to-indigo-600",
      content: [
        {
          icon: "🎖️",
          label: "টুর্নামেন্ট নাম",
          value: "শহীদ জাহিদুল ইসলাম স্মৃতি স্মরণে নবীন শিক্ষার্থীদের ফুটবল টুর্নামেন্ট ২০২৫"
        },
        {
          icon: "📅",
          label: "তারিখ",
          value: "১০ সেপ্টেম্বর ২০২৫"
        },
        {
          icon: "📍",
          label: "স্থান",
          value: "সরকারি এডওয়ার্ড কলেজ মাঠ"
        },
        {
          icon: "💰",
          label: "এন্ট্রি ফি",
          value: "৫০০ টাকা মাত্র"
        },
        {
          icon: "🎓",
          label: "যোগ্যতা",
          value: "শুধুমাত্র নবীন শিক্ষার্থীরাই অংশগ্রহণ করতে পারবে"
        }
      ]
    },
    {
      id: 1,
      title: "দল ও নিয়মাবলি",
      icon: "👥",
      color: "from-green-500 to-emerald-600",
      content: [
        {
          icon: "👕",
          label: "দলের আকার",
          value: "প্রতিটি দলে সর্বমোট ১৫ জন খেলোয়াড় (১১ জন মাঠে + ৪ জন রিজার্ভ)"
        },
        {
          icon: "⏱️",
          label: "খেলার সময়",
          value: "মোট ৬০ মিনিট (প্রতি অর্ধ ৩০ মিনিট) + ১০ মিনিট বিরতি"
        },
        {
          icon: "🪪",
          label: "পরিচয়পত্র",
          value: "খেলার আগে কলেজ পরিচয়পত্র প্রদর্শন বাধ্যতামূলক"
        },
        {
          icon: "🌍",
          label: "নিয়মাবলি",
          value: "আন্তর্জাতিক ফুটবল নিয়ম (FIFA) অনুসরণ করা হবে"
        },
        {
          icon: "👨‍⚖️",
          label: "সিদ্ধান্ত",
          value: "রেফারির সিদ্ধান্তই চূড়ান্ত। সমতায় শেষ হলে পেনাল্টি শুটআউট"
        }
      ]
    },
    {
      id: 2,
      title: "পুরস্কার ঘোষণা",
      icon: "🏆",
      color: "from-yellow-500 to-orange-600",
      content: [
        {
          icon: "🥇",
          label: "চ্যাম্পিয়ন দল",
          value: "আকর্ষণীয় চ্যাম্পিয়ন ট্রফি + খেলোয়াড়দের জন্য মেডেল"
        },
        {
          icon: "🥈",
          label: "রানার্স-আপ দল",
          value: "আকর্ষণীয় রানার্স-আপ ট্রফি + খেলোয়াড়দের জন্য মেডেল"
        },
        {
          icon: "⚽",
          label: "ম্যান অফ দা টুর্নামেন্ট",
          value: "বিশেষ মেডেল ও সম্মাননা"
        },
        {
          icon: "🌟",
          label: "ম্যান অফ দা ফাইনাল",
          value: "বিশেষ মেডেল ও সম্মাননা"
        },
        {
          icon: "🧤",
          label: "সেরা গোলকিপার",
          value: "বিশেষ মেডেল ও সম্মাননা"
        },
        {
          icon: "🎯",
          label: "সেরা গোলদাতা",
          value: "টপ স্কোরার মেডেল ও সম্মাননা"
        }
      ]
    }
  ];

  return (
    <div id="Tournament" className="relative py-32  bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Enhanced Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-football-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 40}px`,
              height: `${15 + Math.random() * 40}px`,
              background: i % 4 === 0
                ? `radial-gradient(circle, #f97316, #ea580c)`
                : i % 4 === 1
                ? `radial-gradient(circle, #10b981, #059669)`
                : i % 4 === 2
                ? `radial-gradient(circle, #f59e0b, #d97706)`
                : `radial-gradient(circle, #3b82f6, #2563eb)`,
              borderRadius: i % 3 === 0 ? '50%' : '30%',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              filter: 'blur(1px)',
              boxShadow: `0 0 ${15 + Math.random() * 25}px rgba(249, 115, 22, 0.6)`
            }}
          />
        ))}
      </div>

      {/* Football Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-orange-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-4 border-green-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-yellow-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-2xl border border-orange-500/40 rounded-full shadow-2xl mb-8">
            <span className="text-orange-400 font-bold text-lg tracking-wide flex items-center gap-3">
              🎖️ শহীদ জাহিদুল ইসলাম স্মৃতি স্মরণে 🎖️
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
            ✨ নবীন শিক্ষার্থীদের <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              ফুটবল টুর্নামেন্ট ২০২৫
            </span> ✨
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xl text-gray-300 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl">
                📅
              </div>
              <span className="font-bold">১০ সেপ্টেম্বর ২০২৫</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl">
                📍
              </div>
              <span className="font-bold">সরকারি এডওয়ার্ড কলেজ মাঠ</span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-black text-white text-center mb-8">
              টুর্নামেন্ট শুরু হতে <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">বাকি</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "দিন", value: countdown.days, color: "from-red-500 to-pink-600" },
                { label: "ঘন্টা", value: countdown.hours, color: "from-orange-500 to-red-600" },
                { label: "মিনিট", value: countdown.minutes, color: "from-yellow-500 to-orange-600" },
                { label: "সেকেন্ড", value: countdown.seconds, color: "from-green-500 to-emerald-600" }
              ].map((item, index) => (
                <div key={index} className={`backdrop-blur-2xl bg-gradient-to-br ${item.color}/20 border border-orange-500/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-all duration-300`}>
                  <div className="text-4xl md:text-6xl font-black text-orange-400 mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-lg text-white font-bold tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12 gap-4">
            {tabData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl shadow-orange-500/30`
                    : 'backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-500/30 text-gray-300 hover:text-white hover:border-orange-500/60'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{tab.icon}</span>
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl shadow-2xl overflow-hidden">
            {tabData.map((tab, index) => (
              <div
                key={tab.id}
                className={`transition-all duration-700 ${
                  activeTab === index ? 'block' : 'hidden'
                }`}
              >
                <div className="p-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${tab.color} rounded-2xl flex items-center justify-center text-4xl shadow-xl`}>
                      {tab.icon}
                    </div>
                    <h3 className="text-4xl font-black text-white">{tab.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {tab.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-black/30 to-gray-900/30 border border-orange-500/20 hover:border-orange-500/40 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xl font-bold text-orange-300 mb-3 group-hover:text-orange-200 transition-colors duration-300">
                            {item.label}
                          </p>
                          <p className="text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration & Contact Section */}
        <div
          className={`transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Registration */}
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-green-500/30 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-black text-white">রেজিস্ট্রেশন</h4>
              </div>
              <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
                <p><span className="text-green-400 font-bold">✅ অনলাইন রেজিস্ট্রেশন:</span> এখনই শুরু!</p>
                <p><span className="text-orange-400 font-bold">💰 এন্ট্রি ফি:</span> মাত্র ৫০০ টাকা</p>
                <p><span className="text-yellow-400 font-bold">📝 প্রয়োজনীয় কাগজপত্র:</span> কলেজ পরিচয়পত্র</p>
                <p><span className="text-cyan-400 font-bold">⏰ শেষ তারিখ:</span> ৫ সেপ্টেম্বর ২০২৫</p>
              </div>
              <button className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl font-black text-white text-xl shadow-2xl hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-500 tracking-wide">
                রেজিস্ট্রেশন করুন
              </button>
            </div>

            {/* Contact */}
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-blue-500/30 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-black text-white">যোগাযোগ</h4>
              </div>

              <div className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-xl font-bold text-blue-300 mb-4">আয়োজনে:</p>
                  <p className="text-lg text-white font-semibold leading-relaxed">
                    সরকারি এডওয়ার্ড কলেজ<br />
                    একাডেমিক ও কালচারাল ফোরাম
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="text-blue-300 font-semibold">Shawon</p>
                      <p className="text-white font-bold">01768298331</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="text-blue-300 font-semibold">Tanzim</p>
                      <p className="text-white font-bold">01628147782</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-12 shadow-2xl">
              <h4 className="text-4xl font-black text-white mb-6">
                🏆 এখনই <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">যোগ দিন</span> 🏆
              </h4>
              <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                শহীদ জাহিদুল ইসলামের স্মৃতিতে আয়োজিত এই ঐতিহাসিক ফুটবল টুর্নামেন্টে অংশ নিয়ে<br />
                <span className="text-orange-400 font-bold">আপনার কলেজের গৌরব</span> রক্ষা করুন!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl font-black text-white text-xl shadow-2xl hover:shadow-orange-500/40 transform hover:scale-110 transition-all duration-500 tracking-wide">
                  🚀 এখনই রেজিস্ট্রেশন করুন
                </button>
                <button className="px-12 py-6 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-500/40 rounded-2xl font-bold text-white text-xl hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 transform hover:scale-110 transition-all duration-500 tracking-wide">
                  📋 নিয়মাবলি ডাউনলোড
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes football-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-40px) translateX(20px) rotate(90deg) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(-30px) rotate(180deg) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-60px) translateX(15px) rotate(270deg) scale(1.05);
            opacity: 0.4;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-football-float {
          animation: football-float 15s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TournamentSectionForum;