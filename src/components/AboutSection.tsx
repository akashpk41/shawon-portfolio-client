import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
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

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      id: 1,
      title: "প্রারম্ভিক জীবন ও শিক্ষা",
      icon: "🎓",
      color: "from-blue-500 to-indigo-600",
      content: [
        {
          label: "জন্ম",
          value: "২১ অক্টোবর ২০০৩, সিংগা গ্রাম, পাবনা",
          icon: "📅"
        },
        {
          label: "প্রাথমিক শিক্ষা",
          value: "পাবনা পলিটেকনিক প্রাইমারি স্কুল (২০১৩)",
          icon: "🏫"
        },
        {
          label: "মাধ্যমিক শিক্ষা",
          value: "রাধানগর মজুমদার একাডেমি স্কুল এন্ড কলেজ - JSC (২০১৬), SSC (২০১৯)",
          icon: "📚"
        },
        {
          label: "উচ্চ মাধ্যমিক",
          value: "পাবনা ইসলামিয়া ডিগ্রি কলেজ - HSC (২০২১)",
          icon: "🎯"
        },
        {
          label: "উচ্চশিক্ষা",
          value: "সরকারি এডওয়ার্ড কলেজ - ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ (২০২২-চলমান)",
          icon: "🏛️"
        }
      ]
    },
    {
      id: 2,
      title: "রাজনৈতিক জীবন ও আন্দোলন",
      icon: "⚖️",
      color: "from-red-500 to-pink-600",
      content: [
        {
          label: "প্রাথমিক রাজনীতি",
          value: "বাংলাদেশ ছাত্রলীগের সাবেক কর্মী",
          icon: "🏛️"
        },
        {
          label: "আন্দোলনে যোগদান",
          value: "২০২৪ সালের ১৩ জুলাই ছাত্রলীগ ত্যাগ, ১৪ জুলাই কোটা সংস্কার আন্দোলনে নেতৃত্ব",
          icon: "✊"
        },
        {
          label: "বিজয় ভাষণ",
          value: "৫ আগস্ট ২০২৪ সরকারি এডওয়ার্ড কলেজের শহীদ মিনারে বিজয় ভাষণ",
          icon: "🎤"
        },
        {
          label: "স্মৃতিরক্ষা উদ্যোগ",
          value: "পাবনার ট্রাফিক মোড় > শহীদ চত্বর নামকরণ এবং শহীদ জাহিদুল ইসলাম প্রশাসনিক ভবন নামকরণের প্রস্তাব",
          icon: "🏛️"
        },
        {
          label: "পুনর্বাসন কার্যক্রম",
          value: "আহত শিক্ষার্থীদের চিকিৎসা ও শহীদ পরিবারের পুনর্বাসনে গুরুত্বপূর্ণ ভূমিকা",
          icon: "🤝"
        }
      ]
    },
    {
      id: 3,
      title: "বর্তমান পদবি ও দায়িত্ব",
      icon: "👑",
      color: "from-purple-500 to-violet-600",
      content: [
        {
          label: "প্রধান দায়িত্ব",
          value: "সাবেক পাবনা জেলা সমন্বয়ক",
          icon: "🎯"
        },
        {
          label: "আন্দোলনে পদবি",
          value: "যুগ্ম সদস্য সচিব, বৈষম্যবিরোধী ছাত্র আন্দোলন, পাবনা",
          icon: "⚖️"
        },
        {
          label: "সাংগঠনিক পদবি",
          value: "প্রতিষ্ঠাতা সদস্য সচিব, বাংলাদেশ গণতান্ত্রিক ছাত্র সংসদ, পাবনা জেলা",
          icon: "🏛️"
        }
      ]
    },
    {
      id: 4,
      title: "সামাজিক উদ্যোগ ও অবদান",
      icon: "🤝",
      color: "from-green-500 to-emerald-600",
      content: [
        {
          label: "সেচ্ছাসেবী সংগঠন",
          value: "২৪ এর নবদূত সেচ্ছাসেবী সংগঠন প্রতিষ্ঠা (২০২৪)",
          icon: "🌟"
        },
        {
          label: "সেবামূলক কাজ",
          value: "পাবনা শহরে বিভিন্ন সামাজিক ও সেচ্ছাসেবী কার্যক্রম পরিচালনা",
          icon: "💖"
        },
        {
          label: "যুব নেতৃত্ব",
          value: "স্থানীয় তরুণদের মধ্যে নেতৃত্বের গুণাবলী বিকাশে কাজ",
          icon: "🌱"
        }
      ]
    }
  ];

  const mediaItems = [
    {
      type: "newspaper",
      title: "দৈনিক আদ প্রতিদিন",
      subtitle: "মাদক ও সন্ত্রাসবিরোধী আন্দোলন",
      icon: "📰",
      color: "from-blue-500 to-indigo-600",
      url: "adpratidin.com"
    },
    {
      type: "online",
      title: "পদ্মা টাইমস ২৪",
      subtitle: "শিক্ষার্থীদের মিছিল প্রতিবেদন",
      icon: "💻",
      color: "from-cyan-500 to-blue-600",
      url: "padmatimes24.com"
    },
    {
      type: "newspaper",
      title: "দৈনিক সকালের সময়",
      subtitle: "মাদকবিরোধী প্রচারণা",
      icon: "📰",
      color: "from-green-500 to-emerald-600",
      url: "dailysokalersomoy.com"
    },
    {
      type: "online",
      title: "মানবজমিন",
      subtitle: "পাবনায় শিক্ষার্থীদের বিক্ষোভ",
      icon: "💻",
      color: "from-orange-500 to-red-600",
      url: "mzamin.com"
    },
    {
      type: "newspaper",
      title: "আজকের পত্রিকা",
      subtitle: "রাজশাহী বিভাগীয় প্রতিবেদন",
      icon: "📰",
      color: "from-purple-500 to-violet-600",
      url: "ajkerpatrika.com"
    },
    {
      type: "international",
      title: "The Daily Star বাংলা",
      subtitle: "জাতীয় পর্যায়ে প্রতিবেদন",
      icon: "🌍",
      color: "from-yellow-500 to-orange-600",
      url: "bangla.thedailystar.net"
    }
  ];

  return (
    <div id="About" className="relative pt-32 pb-2 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-bubble opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            Unfolding My Journey
            </span>
          </div>

         <p className="text-2xl md:text-7xl font-black text-white mb-6 tracking-tight text-center leading-snug">একজন তরুণ নেতার
  <span className="bg-gradient-to-r ml-2 from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
     জীবন যাত্রা, শিক্ষা, রাজনৈতিক আদর্শ এবং সামাজিক অবদানের বিস্তারিত পরিচয়
  </span>
</p>


        </div>

        {/* Hero Bio Section */}
        <div className="grid md:grid-cols-2 -mt-8 gap-14 items-center mb-32">
          {/* Mobile Image */}
          <div
            className={`md:hidden mb-12 transform transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative mx-auto w-92 h-92">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-red-500/30 to-yellow-500/40 rounded-4xl blur-2xl animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-4xl border border-orange-500/40 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-700 to-red-800 rounded-4xl flex items-center justify-center">
                 <img className="rounded-2xl" src="https://i.ibb.co.com/fVSW81gF/492942913-1958518174956827-1270583043355150440-n.jpg" alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-4xl" />
              </div>
            </div>
          </div>

          {/* Quick Bio Content */}
          <div
            className={`space-y-8 -mt-18 transform transition-all duration-1200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
            }`}
          >
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-4xl font-black text-white mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                ব্যক্তিগত পরিচিতি
              </h3>

              <div className="space-y-6 text-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 text-base font-bold">📅</span>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-orange-300">জন্ম ও বয়স</p>
                    <p className="text-xl text-gray-300 leading-relaxed"><span className="text-orange-400 font-bold">২১ অক্টোবর ২০০৩</span> তারিখে <span className="text-red-400 font-bold">পাবনা জেলার সিংগা গ্রামে</span> জন্মগ্রহণ। বর্তমানে <span className="text-yellow-400 font-bold">২১ বছর</span> বয়সী একজন প্রতিশ্রুতিশীল তরুণ নেতা।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 text-base font-bold">🎓</span>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-orange-300">শিক্ষাগত যোগ্যতা</p>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      <span className="text-green-400 font-bold">সরকারি এডওয়ার্ড কলেজ</span> থেকে <span className="text-orange-400 font-bold">ইসলামের ইতিহাস ও সংস্কৃতি</span> বিভাগে অধ্যয়নরত।
                      পূর্বে <span className="text-cyan-400 font-bold">পাবনা ইসলামিয়া ডিগ্রি কলেজ</span> থেকে উচ্চ মাধ্যমিক সম্পন্ন।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 text-base font-bold">🏛️</span>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-orange-300">রাজনৈতিক পরিচয়</p>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      <span className="text-red-400 font-bold">বৈষম্যবিরোধী ছাত্র আন্দোলনের</span> অন্যতম নেতা এবং
                      <span className="text-yellow-400 font-bold"> বাংলাদেশ গণতান্ত্রিক ছাত্রসংসদের</span> প্রতিষ্ঠাতা সদস্য সচিব।
                    </p>
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
                    <img src="./shawon.png" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-4xl" />
                </div>
              </div>

              {/* Professional Badge */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/40 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-xl font-black tracking-wide">
                        ছাত্র নেতা ও রাজনীতিবিদ
                      </p>
                      <p className="text-orange-400 text-sm font-bold tracking-widest">
                        বৈষম্যবিরোধী আন্দোলনের নেতা
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Accordion Section */}
        <div
          className={`mb-32 transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              বিস্তারিত <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">তথ্যাবলী</span>
            </h3>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full mb-8" />
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              জীবন যাত্রা, শিক্ষা, রাজনৈতিক কর্মকাণ্ড এবং সামাজিক অবদানের সম্পূর্ণ বিবরণ
            </p>
          </div>

          <div className="space-y-6">
            {accordionData.map((section, index) => (
              <div key={section.id} className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl shadow-2xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-8 flex items-center justify-between hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center shadow-xl text-2xl`}>
                      {section.icon}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-white text-left">
                      {section.title}
                    </h4>
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    activeAccordion === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8 pt-0 space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-black/30 to-gray-900/30 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xl font-bold text-orange-400 mb-2">{item.label}</p>
                          <p className="text-base text-gray-200 leading-relaxed">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div
          className={`mb-32 transform transition-all duration-1200 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              আদর্শ ও <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">লক্ষ্য</span>
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
                <h4 className="text-3xl font-black text-white">দৃষ্টিভঙ্গি</h4>
              </div>
              <p className="text-xl text-gray-200 leading-relaxed">
                একটি <span className="text-orange-400 font-bold">বৈষম্যমুক্ত বাংলাদেশ</span> গড়ার স্বপ্ন দেখি।
                যেখানে প্রতিটি <span className="text-red-400 font-bold">তরুণ-তরুণীর</span> সমান সুযোগ থাকবে এবং
                <span className="text-yellow-400 font-bold"> মেধার ভিত্তিতে</span> এগিয়ে যাওয়ার পথ উন্মুক্ত হবে।
                <span className="text-green-400 font-bold"> শিক্ষা ব্যবস্থার আধুনিকীকরণ</span> এবং যুব সমাজের ক্ষমতায়নের মাধ্যমে একটি
                <span className="text-orange-400 font-bold"> স্মার্ট বাংলাদেশ</span> বিনির্মাণ।
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
                <h4 className="text-3xl font-black text-white">লক্ষ্য</h4>
              </div>
              <p className="text-xl text-gray-200 leading-relaxed">
                <span className="text-red-400 font-bold">পাবনা জেলা</span> থেকে শুরু করে সারাদেশে
                <span className="text-orange-400 font-bold"> যুব নেতৃত্ব বিকাশ</span>,
                <span className="text-yellow-400 font-bold"> দুর্নীতি প্রতিরোধ</span> এবং
                <span className="text-green-400 font-bold"> সুশাসন প্রতিষ্ঠায়</span> কাজ করা।
                আহত ছাত্র-ছাত্রীদের পুনর্বাসন এবং শহীদদের পরিবারের পাশে থেকে
                <span className="text-cyan-400 font-bold"> একটি মানবিক সমাজ</span> গড়ে তোলা।
              </p>
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