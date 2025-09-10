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

  // Auto-rotate upcoming events
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUpcoming((prev) => (prev + 1) % upcomingEvents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pastEvents = [
    {
      id: 1,
      title: "Community Development Program",
      date: "07-March-2025",
      location: "Pabna District",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description: "Successful completion of rural development initiative",
      attendees: "500+",
      category: "Development"
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      date: "25-February-2025",
      location: "Rajshahi Division",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      description: "Empowering young leaders for future Bangladesh",
      attendees: "300+",
      category: "Leadership"
    },
    {
      id: 3,
      title: "Healthcare Awareness Campaign",
      date: "18-February-2025",
      location: "Pabna Medical College",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: "Free health checkup and awareness program",
      attendees: "800+",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Education Reform Discussion",
      date: "10-February-2025",
      location: "Pabna University",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      description: "Dialogue on modernizing education system",
      attendees: "200+",
      category: "Education"
    },
    {
      id: 5,
      title: "Agricultural Innovation Fair",
      date: "01-February-2025",
      location: "Pabna Agricultural Center",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=600&fit=crop",
      description: "Promoting modern farming techniques",
      attendees: "1000+",
      category: "Agriculture"
    },
    {
      id: 6,
      title: "Digital Bangladesh Workshop",
      date: "28-January-2025",
      location: "IT Training Center",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
      description: "Technology advancement for rural communities",
      attendees: "150+",
      category: "Technology"
    }
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
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                      {/* Content */}
                      <div className="relative h-full flex items-end p-12">
                        <div className="space-y-6">
                          {/* Category Badge */}
                          <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getCategoryColor(event.category)} rounded-full shadow-xl`}>
                            <span className="text-white font-bold text-sm tracking-wide">{event.category}</span>
                          </div>

                          {/* Date */}
                          <div className="flex items-center gap-3 text-orange-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-bold text-lg">{event.date}</span>
                          </div>

                          {/* Title */}
                          <h4 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            {event.title}
                          </h4>

                          {/* Description */}
                          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            {event.description}
                          </p>

                          {/* Stats */}
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-gray-300 font-semibold">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span className="text-gray-300 font-semibold">{event.attendees} Attendees</span>
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
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-xl border border-orange-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-20"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-xl border border-orange-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-20"
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

            {/* Premium Thumbnails - Horizontal Scroll */}
            <div className="relative mt-8">
              {/* Scroll Buttons */}
              <button
                onClick={() => scrollThumbnails('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-xl border border-orange-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-30"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => scrollThumbnails('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-xl border border-orange-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-30"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Thumbnails Container */}
              <div className="px-16">
                <div
                  ref={thumbnailRef}
                  className="flex gap-4 overflow-x-auto pb-4"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitScrollbar: 'none'
                  }}
                >
                  {pastEvents.map((event, index) => (
                    <button
                      key={event.id}
                      onClick={() => goToSlide(index)}
                      className={`relative group overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 flex-none w-40 ${
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

                      {/* Category Badge */}
                      <div className={`absolute top-2 left-2 px-2 py-1 bg-gradient-to-r ${getCategoryColor(event.category)} rounded-full`}>
                        <span className="text-white text-xs font-bold">{event.category}</span>
                      </div>

                      {/* Event Info */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="text-white text-xs font-bold truncate">{event.title}</div>
                        <div className="text-orange-300 text-xs truncate">{event.date}</div>
                      </div>

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

              {/* Scroll Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: Math.ceil(pastEvents.length / 4) }).map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-orange-500/30 transition-all duration-300 hover:bg-orange-500/50"
                  />
                ))}
              </div>
            </div>
          </div>


        </div>

      </div>
    </>
  );
};

export default EventsSection;