import React, { useState, useEffect, useRef } from "react";

const EventsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeUpcoming, setActiveUpcoming] = useState(0);
  const swiperRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % pastEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll thumbnails to keep active thumbnail visible
  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnailContainer = thumbnailRef.current;
      const thumbnailWidth = 160 + 16; // 40 (w-40) * 4 (1rem = 4px) + gap
      const containerWidth = thumbnailContainer.clientWidth;
      const visibleThumbnails = Math.floor(containerWidth / thumbnailWidth);

      // Calculate the scroll position to center the active thumbnail
      let targetScrollLeft;

      if (activeSlide < visibleThumbnails / 2) {
        // If active slide is near the beginning, scroll to start
        targetScrollLeft = 0;
      } else if (activeSlide >= pastEvents.length - visibleThumbnails / 2) {
        // If active slide is near the end, scroll to end
        targetScrollLeft = thumbnailContainer.scrollWidth - containerWidth;
      } else {
        // Center the active thumbnail
        targetScrollLeft = (activeSlide - Math.floor(visibleThumbnails / 2)) * thumbnailWidth;
      }

      thumbnailContainer.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);
const pastEvents = [
  {
    id: 1,
    date: "2025-02-14",
    image: "https://i.ibb.co/TxMRk7fc/Whats-App-Image-2025-08-30-at-14-15-12-ad57fa00.jpg",
    description: "Local youth gathering for sports and unity.",
  },
  {
    id: 2,
    date: "2025-03-09",
    image: "https://i.ibb.co/jvhXn75v/Whats-App-Image-2025-08-30-at-14-15-13-e02a1aea.jpg",
    description: "Free health check-up camp organized.",
  },
  {
    id: 3,
    date: "2025-01-22",
    image: "https://i.ibb.co/QF3hZNsC/Whats-App-Image-2025-08-30-at-14-15-32-0fc1f2c1.jpg",
    description: "Tree planting drive held in the community park.",
  },
  {
    id: 4,
    date: "2025-05-05",
    image: "https://i.ibb.co/20VHmThr/Whats-App-Image-2025-08-30-at-14-15-33-0e7be5c4.jpg",
    description: "Art and culture festival celebrated with joy.",
  },
  {
    id: 5,
    date: "2025-06-16",
    image: "https://i.ibb.co/QvPtHWp2/Whats-App-Image-2025-08-30-at-14-15-35-8f553f51.jpg",
    description: "Skill development training for local women.",
  },
  {
    id: 6,
    date: "2025-04-25",
    image: "https://i.ibb.co/Xrp5fTYj/Whats-App-Image-2025-08-30-at-14-15-37-31ead718.jpg",
    description: "Village clean-up campaign involving school children.",
  },
  {
    id: 7,
    date: "2025-07-12",
    image: "https://i.ibb.co/M513JZ07/Whats-App-Image-2025-08-30-at-14-15-32-c9c91eea.jpg",
    description: "Women's day event with awareness sessions.",
  },
  {
    id: 8,
    date: "2025-01-18",
    image: "https://i.ibb.co/CpJmLGJN/Whats-App-Image-2025-08-30-at-14-15-33-bfa252ff.jpg",
    description: "Medical outreach for elderly citizens.",
  },
  {
    id: 9,
    date: "2025-03-30",
    image: "https://i.ibb.co/7xYrL1GN/Whats-App-Image-2025-08-30-at-14-15-35-b826ece2.jpg",
    description: "Cultural performance night by local artists.",
  },
  {
    id: 10,
    date: "2025-02-28",
    image: "https://i.ibb.co/sv0jQKRS/Whats-App-Image-2025-08-30-at-14-15-36-6ed4af93.jpg",
    description: "Educational awareness rally held successfully.",
  },
  {
    id: 11,
    date: "2025-05-10",
    image: "https://i.ibb.co/PG1kFTDv/Whats-App-Image-2025-08-30-at-14-15-38-872e61db.jpg",
    description: "Annual sports day with full community participation.",
  },
  {
    id: 12,
    date: "2025-06-02",
    image: "https://i.ibb.co/d0V3WLR4/Whats-App-Image-2025-08-30-at-14-15-30-97dd0c3b.jpg",
    description: "Disaster preparedness workshop organized.",
  },
  {
    id: 13,
    date: "2025-03-12",
    image: "https://i.ibb.co/bgD9Hgqx/Whats-App-Image-2025-08-30-at-14-15-34-121af914.jpg",
    description: "Agricultural technology demo for farmers.",
  },
  {
    id: 14,
    date: "2025-07-21",
    image: "https://i.ibb.co/TB2X0kmN/Whats-App-Image-2025-08-30-at-14-15-34-3867b38b.jpg",
    description: "Summer youth camp kicked off with excitement.",
  },
  {
    id: 15,
    date: "2025-02-20",
    image: "https://i.ibb.co/RTdD7cS6/Whats-App-Image-2025-08-30-at-14-15-12-85e8440d.jpg",
    description: "Handicraft exhibition by local artisans.",
  },
  {
    id: 16,
    date: "2025-01-30",
    image: "https://i.ibb.co/xSnJf8v5/Whats-App-Image-2025-08-30-at-14-15-13-45681fe7.jpg",
    description: "Book donation program at local schools.",
  },
  {
    id: 17,
    date: "2025-08-01",
    image: "https://i.ibb.co/rGqxrjj5/Whats-App-Image-2025-08-30-at-14-15-30-4c0fa06d.jpg",
    description: "Celebration of local heritage and traditions.",
  },
  {
    id: 18,
    date: "2025-06-30",
    image: "https://i.ibb.co/zhyspxJL/Whats-App-Image-2025-08-30-at-14-15-35-26f3b111.jpg",
    description: "Child education awareness rally organized.",
  },
  {
    id: 19,
    date: "2025-04-14",
    image: "https://i.ibb.co/v4wSrYmL/Whats-App-Image-2025-08-30-at-14-15-33-171f58f2.jpg",
    description: "Evening cultural mela with food stalls.",
  },
  {
    id: 20,
    date: "2025-02-05",
    image: "https://i.ibb.co/KcpH1kS6/Whats-App-Image-2025-08-30-at-14-15-34-4a085801.jpg",
    description: "Free library setup inaugurated by volunteers.",
  },
  {
    id: 21,
    date: "2025-07-07",
    image: "https://i.ibb.co/FbdP8LGz/Whats-App-Image-2025-08-30-at-14-15-36-8023b6c0.jpg",
    description: "Nutrition awareness camp held in the village.",
  },
  {
    id: 22,
    date: "2025-03-22",
    image: "https://i.ibb.co/DPF8sMJy/Whats-App-Image-2025-08-30-at-14-15-38-9152f561.jpg",
    description: "Vocational training course completed successfully.",
  },
  {
    id: 23,
    date: "2025-05-15",
    image: "https://i.ibb.co/NdTzRPy6/Whats-App-Image-2025-08-30-at-14-15-32-52a69ffa.jpg",
    description: "Community theater performance attracting crowds.",
  },
  {
    id: 24,
    date: "2025-04-26",
    image: "https://i.ibb.co/zVRhtQBw/Whats-App-Image-2025-08-30-at-14-15-37-522ce0c9.jpg",
    description: "Local farmers market launched with fresh produce.",
  },
  {
    id: 25,
    date: "2025-01-14",
    image: "https://i.ibb.co/cKMv2PJd/Whats-App-Image-2025-08-30-at-14-15-37-e4c06504.jpg",
    description: "Workshop on women’s rights and safety conducted.",
  },
  {
    id: 26,
    date: "2025-02-18",
    image: "https://i.ibb.co/vCLyC6Kk/Whats-App-Image-2025-08-30-at-14-15-31-ed84bb10.jpg",
    description: "Sports tournament finals played in the community stadium.",
  },
  {
    id: 27,
    date: "2025-06-09",
    image: "https://i.ibb.co/FbCz4SRC/Whats-App-Image-2025-08-30-at-14-15-32-d0ee4a8c.jpg",
    description: "Local library reading program launched.",
  },
  {
    id: 28,
    date: "2025-07-19",
    image: "https://i.ibb.co/231hLM9R/Whats-App-Image-2025-08-30-at-14-15-34-b9ecfa7e.jpg",
    description: "Clean drinking water project inauguration.",
  },
  {
    id: 29,
    date: "2025-03-27",
    image: "https://i.ibb.co/99nqQ4Gb/Whats-App-Image-2025-08-30-at-14-15-31-4b30d237.jpg",
    description: "Youth leadership seminar with active participation.",
  },
  {
    id: 30,
    date: "2025-05-29",
    image: "https://i.ibb.co/PGjRGYkh/Whats-App-Image-2025-08-30-at-14-15-31-a1bdfaf2.jpg",
    description: "Annual cultural fair attracting visitors from nearby towns.",
  },
  {
    id: 31,
    date: "2025-01-20",
    image: "https://i.ibb.co/KxwNyw50/Whats-App-Image-2025-08-30-at-14-15-36-457cd27e.jpg",
    description: "Healthcare awareness rally by local volunteers.",
  },
  {
    id: 32,
    date: "2025-06-14",
    image: "https://i.ibb.co/bD3Z4bs/Whats-App-Image-2025-08-30-at-14-15-39-7a8f7525.jpg",
    description: "Vocational fair showcasing local crafts and skills.",
  },
  {
    id: 33,
    date: "2025-02-11",
    image: "https://i.ibb.co/MxCDPR4t/Whats-App-Image-2025-08-30-at-14-15-40-b50bcb70.jpg",
    description: "School renovation completed with community support.",
  },
  {
    id: 34,
    date: "2025-04-03",
    image: "https://i.ibb.co/JWHt1fD9/Whats-App-Image-2025-08-30-at-14-15-40-f1b944bc.jpg",
    description: "Local sports club celebrates its anniversary.",
  },
  {
    id: 35,
    date: "2025-05-20",
    image: "https://i.ibb.co/5x4bfBcs/Whats-App-Image-2025-08-30-at-14-15-39-b866f8ac.jpg",
    description: "Food festival showcasing regional delicacies.",
  },
  {
    id: 36,
    date: "2025-07-28",
    image: "https://i.ibb.co/9M2KPjT/Whats-App-Image-2025-08-30-at-14-15-39-c7e199b7.jpg",
    description: "Environmental awareness campaign with workshops.",
  },
  {
    id: 37,
    date: "2025-03-15",
    image: "https://i.ibb.co/9XYDSmn/Whats-App-Image-2025-08-30-at-14-15-40-8f40139a.jpg",
    description: "Local music concert performed by young talents.",
  },
  {
    id: 38,
    date: "2025-01-05",
    image: "https://i.ibb.co/qF3rZXWf/Whats-App-Image-2025-08-30-at-14-15-40-c4526be3.jpg",
    description: "Training session on sustainable farming practices.",
  },
  {
    id: 39,
    date: "2025-06-22",
    image: "https://i.ibb.co/hRk4Stmh/490415698-1944933966315248-8644017666476395147-n.jpg",
    description: "Community meeting to discuss infrastructure improvements.",
  },
  {
    id: 40,
    date: "2025-07-03",
    image: "https://i.ibb.co/RTvZ3bhD/490089008-1944934032981908-8187603105754203694-n.jpg",
    description: "Children's art competition encouraging creativity.",
  },
  {
    id: 41,
    date: "2025-02-24",
    image: "https://i.ibb.co/KpsLKdyt/490598938-1944934289648549-6555302484938128254-n.jpg",
    description: "Health and hygiene awareness program in schools.",
  },
  {
    id: 42,
    date: "2025-04-17",
    image: "https://i.ibb.co/MD18tBHs/490329076-1944934489648529-7936935738186258418-n.jpg",
    description: "Village festival with traditional food and dance.",
  },
  {
    id: 43,
    date: "2025-03-07",
    image: "https://i.ibb.co/TxMRk7fc/Whats-App-Image-2025-08-30-at-14-15-12-ad57fa00.jpg",
    description: "Community service day with neighborhood cleanups.",
  },
  {
    id: 44,
    date: "2025-05-08",
    image: "https://i.ibb.co/jvhXn75v/Whats-App-Image-2025-08-30-at-14-15-13-e02a1aea.jpg",
    description: "Local business fair boosting economic growth.",
  },
];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % pastEvents.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 200;
      const currentScroll = thumbnailRef.current.scrollLeft;

      if (direction === 'left') {
        thumbnailRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
        });
      } else {
        thumbnailRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Development: "from-green-500 to-emerald-600",
      Leadership: "from-blue-500 to-indigo-600",
      Healthcare: "from-red-500 to-pink-600",
      Education: "from-purple-500 to-violet-600",
      Agriculture: "from-yellow-500 to-orange-600",
      Technology: "from-cyan-500 to-teal-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: "from-red-500 to-orange-500",
      medium: "from-yellow-500 to-amber-500",
      low: "from-green-500 to-emerald-500"
    };
    return colors[priority] || "from-gray-500 to-gray-600";
  };

  return (
    <>
      <style jsx>{`
        @keyframes eventFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(1deg); }
        }

        @keyframes calendarFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Hide scrollbar but allow scrolling */
        .thumbnail-container::-webkit-scrollbar {
          display: none;
        }
        .thumbnail-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative py-18 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden" data-events-section="true">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Event-themed Particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${15 + Math.random() * 60}px`,
                  height: `${15 + Math.random() * 60}px`,
                  background: `linear-gradient(45deg,
                    ${['#f97316', '#ef4444', '#eab308', '#8b5cf6'][Math.floor(Math.random() * 4)]}40,
                    ${['#dc2626', '#f59e0b', '#f97316', '#a855f7'][Math.floor(Math.random() * 4)]}20)`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${10 + Math.random() * 8}s`,
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 165, 0, 0.2)',
                  boxShadow: `0 0 ${15 + Math.random() * 25}px rgba(249, 115, 22, 0.3)`,
                  animation: 'eventFloat 15s ease-in-out infinite'
                }}
              />
            ))}
          </div>

          {/* Calendar-themed Shapes */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={`calendar-${i}`}
                className="absolute opacity-10"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + ((i * 13) % 60)}%`,
                  animationDelay: `${i * 1}s`,
                  animation: 'calendarFloat 20s ease-in-out infinite'
                }}
              >
                <div className="w-16 h-20 bg-gradient-to-b from-orange-600/40 to-red-600/40 rounded-lg backdrop-blur-sm border border-orange-500/20">
                  <div className="h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-lg"></div>
                  <div className="p-2 text-center">
                    <div className="text-white text-xs font-bold">{i + 1}</div>
                  </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                EVENTS & NEWS
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">JOURNEY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover past achievements and upcoming initiatives shaping our community
            </p>
          </div>

          {/* Past Events Gallery */}
          <div
            className={`mb-32 transform transition-all duration-1200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
                Past <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">EVENTS</span>
              </h3>
              <div className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full" />
            </div>

            {/* Premium Carousel Container */}
            <div className="relative">
              {/* Main Carousel */}
              <div className="relative h-[600px] rounded-2xl overflow-hidden backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 shadow-2xl">
                {pastEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <div className="relative h-full w-full">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0  bg-contain bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                      {/* Content */}
                      <div className="relative h-full flex items-end p-12">
                        <div className="space-y-6">

                          {/* Description */}
                          {/* <p className="text-base text-gray-200 leading-relaxed max-w-2xl">
                            {event.description}
                          </p> */}

                          {/* Event Details */}
                          <div className="flex flex-wrap gap-6 text-sm">
                            {/* Date */}
                            <div className="flex items-center gap-3 text-orange-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="font-bold text-lg">{event.date}</span>
                            </div>

                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-6 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-xl border border-orange-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-20"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-6 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-xl border border-orange-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-20"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {pastEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSlide
                        ? "bg-gradient-to-r from-orange-400 to-red-500 w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Premium Thumbnails - Auto-Scrolling */}
            <div className="relative mt-8">
              {/* Thumbnails Container */}
              <div className="px-1">
                <div
                  ref={thumbnailRef}
                  className="thumbnail-container flex gap-4 overflow-x-auto pb-4"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {pastEvents.map((event, index) => (
                    <button
                      key={event.id}
                      onClick={() => goToSlide(index)}
                      className={`relative cursor-pointer group overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 flex-none w-40 ${
                        index === activeSlide
                          ? "ring-4 ring-orange-500/60 shadow-2xl shadow-orange-500/30"
                          : "hover:ring-2 hover:ring-orange-400/40"
                      }`}
                    >
                      <div
                        className="h-28 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


                      {/* Active indicator */}
                      {index === activeSlide && (
                        <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl animate-pulse" />
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-transparent transition-all duration-300" />

                      {/* Play Icon for Active */}
                      {index === activeSlide && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Slide Indicator */}
              <div className="flex justify-center mt-4">
                <div className="px-4 py-2 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-xl border border-orange-500/40 rounded-full">
                  <span className="text-orange-400 font-bold text-sm">
                    {activeSlide + 1} / {pastEvents.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsSection;