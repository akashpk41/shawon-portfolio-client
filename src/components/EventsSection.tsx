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

  const upcomingEvents = [
    {
      id: 1,
      title: "Economic Policy Forum",
      date: "15-September-2025",
      time: "10:00 AM",
      location: "Pabna Convention Center",
      type: "Public Meeting",
      priority: "high",
      description: "Discussion on economic development strategies"
    },
    {
      id: 2,
      title: "Women Empowerment Conference",
      date: "22-September-2025",
      time: "2:00 PM",
      location: "Pabna Women's College",
      type: "Conference",
      priority: "medium",
      description: "Celebrating women's contribution to society"
    },
    {
      id: 3,
      title: "Environmental Protection Rally",
      date: "30-September-2025",
      time: "9:00 AM",
      location: "Pabna Central Park",
      type: "Rally",
      priority: "high",
      description: "Awareness campaign for environmental conservation"
    },
    {
      id: 4,
      title: "Student Career Guidance",
      date: "05-October-2025",
      time: "11:00 AM",
      location: "Multiple Schools",
      type: "Workshop",
      priority: "low",
      description: "Guiding students for better career choices"
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

      <div className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden" data-events-section="true">
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

          {/* Upcoming Events Schedule */}
          <div
            className={`transform transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
                Upcoming <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">SCHEDULE</span>
              </h3>
              <div className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full mb-8" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join us in these upcoming events to be part of positive change
              </p>
            </div>

            {/* Premium Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-yellow-500 rounded-full shadow-lg" />

              {/* Timeline Events */}
              <div className="space-y-16">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${getPriorityColor(event.priority)} rounded-full border-4 border-black shadow-2xl z-10 animate-pulse`} />

                    {/* Event Card */}
                    <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                      <div className={`backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-500 ${
                        activeUpcoming === index ? 'ring-2 ring-orange-400/50 shadow-orange-500/20' : ''
                      }`}>
                        {/* Priority Badge */}
                        <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getPriorityColor(event.priority)} rounded-full text-white text-sm font-bold mb-4`}>
                          {event.priority.toUpperCase()} PRIORITY
                        </div>

                        {/* Date & Time */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-orange-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-bold">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-bold">{event.time}</span>
                          </div>
                        </div>

                        {/* Event Title */}
                        <h4 className="text-3xl font-black text-white mb-4 leading-tight">
                          {event.title}
                        </h4>

                        {/* Event Description */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {event.description}
                        </p>

                        {/* Event Details */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-gray-300 font-semibold">{event.location}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h1a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="text-gray-300 font-semibold">{event.type}</span>
                          </div>
                        </div>

                        {/* RSVP Button */}
                        <div className="mt-8">
                          <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                            <span className="flex items-center justify-center gap-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              Join Event
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-24 text-center">
              <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-12 shadow-2xl">
                <div className="max-w-3xl mx-auto">
                  <h4 className="text-4xl font-black text-white mb-6">
                    Stay <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">Connected</span>
                  </h4>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Don't miss out on upcoming events and community initiatives. Subscribe to our newsletter for the latest updates.
                  </p>

                  {/* Newsletter Signup */}
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform whitespace-nowrap">
                      Subscribe Now
                    </button>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex justify-center gap-6 mt-8">
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-blue-700/20 backdrop-blur-sm border border-blue-600/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.096.116.112.219.083.338-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.878-2.436-4.632 0-3.78 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
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