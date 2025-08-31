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

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.children[activeSlide];
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSlide]);

  const pastEvents = [
    {
      id: 1,
      title: "Community Development Program",
      date: "07-March-2025",
      location: "Pabna District",
      image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/518331708_2025287868279857_9018764783219570489_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpoDl_Lq9SH6sjS1M-FEZzy7ZqVAMStiXLtmpUAxK2Jaj1EbHOhyNixPMAcSeYtZFjQNX6GHZwDgDPD16pb08I&_nc_ohc=ZiodxTa4EuMQ7kNvwEmxVHV&_nc_oc=Adniqb0fVfEFP3rLyTOhUeW2LnF-8j2cSmTOqaWPNkfBugC0AHy29IfT_hDx7k156uc&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=m0nLFB5H-xXmseW4qNA_Rw&oh=00_AfWM2eMvyDEVdFKMHZrLBso2qy0_U94-lR_YK5668_yGpA&oe=68B9D5A6",
      description: "Successful completion of rural development initiative",
      attendees: "500+",
      category: "Development"
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      date: "25-February-2025",
      location: "Rajshahi Division",
      image: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/528167948_2043384106470233_2821623954817278859_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE83dA3RQFsanpisrMpXBZDG1AONrp_mUcbUA42un-ZR9CWYcO_Hqepcc31EZkq7uwsCxR0vZ1vXgXLBece5q91&_nc_ohc=XOhyG8P1jj4Q7kNvwGf-Ncp&_nc_oc=AdmsClCXYsUdmxgrDr3kw-0XdX-26x_SGxA2FzDZio_FpLdWEsRtTbikAi5H3rYPcwg&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=MBakayHMHWafCUY8ESZ7yw&oh=00_AfXKDYWGO9B-RGo3MkO0eM5hx7f9I3oyDjA4d_m_E-_8cw&oe=68B9B9FD",
      description: "Empowering young leaders for future Bangladesh",
      attendees: "300+",
      category: "Leadership"
    },
    {
      id: 3,
      title: "Healthcare Awareness Campaign",
      date: "18-February-2025",
      location: "Pabna Medical College",
      image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/537704752_2060109281464382_2446731043208468703_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFWpu68Xu3QW2UdXIBp22IDXEgDDV8hRXNcSAMNXyFFc9xXUoBnvI1IoCgj4BpGYQsbTik-CUoJq0MVH-9tlPiq&_nc_ohc=2qzGegZPq0EQ7kNvwFU7o3h&_nc_oc=AdljBSYetYw-ZE2rpTq6n4a1rWZ9viaqLXThaikJW7zGNIcvys3EiUZcRI-AGALRCxQ&_nc_zt=23&se=-1&_nc_ht=scontent.fdac27-2.fna&_nc_gid=rmPIHjx9rJPq5Ax0_wCyGQ&oh=00_AfUk7ppXKkuv-cJ-C6oSCqJvUtwuxR6sb2BrbWQgKEjHMA&oe=68B9BFBE",
      attendees: "800+",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Education Reform Discussion",
      date: "10-February-2025",
      location: "Pabna University",
      image: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/517533966_2019447902197187_8539568872444934234_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH0ddi4LF3eelVaugp3LWE-DzEUP0ynHU4PMRQ_TKcdTkMdNX0cROV8YXJ75385ILENkdcFD-qwTLJsGgqkKuk_&_nc_ohc=fReAQtWSo5UQ7kNvwHJniJS&_nc_oc=AdkGFbEN6m6Z3A-zO7kCqSz1L2G_EcahuepGRz-OtD73gV8bjMxzFhzWP06paXgJSlY&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=ObyP2KyywpMAh8jChLDatA&oh=00_AfXAa6OfCE30FVALAKFypuDbS7AzCMNJAADEKVsfmz7a2A&oe=68B9AABB",
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
    },
    {
      id: 7,
      title: "Environmental Protection Rally",
      date: "20-January-2025",
      location: "Pabna Central Park",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      description: "Awareness campaign for environmental conservation",
      attendees: "600+",
      category: "Environment"
    },
    {
      id: 8,
      title: "Cultural Heritage Festival",
      date: "15-January-2025",
      location: "Pabna Cultural Center",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
      description: "Celebrating Bengali culture and traditions",
      attendees: "1200+",
      category: "Culture"
    },
    {
      id: 9,
      title: "Small Business Development",
      date: "10-January-2025",
      location: "Pabna Chamber of Commerce",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      description: "Supporting local entrepreneurs and businesses",
      attendees: "250+",
      category: "Business"
    },
    {
      id: 10,
      title: "Sports Excellence Program",
      date: "05-January-2025",
      location: "Pabna Sports Complex",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description: "Promoting sports and physical fitness",
      attendees: "400+",
      category: "Sports"
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

  // Thumbnail scroll functions
  const scrollThumbnails = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left'
        ? thumbnailRef.current.scrollLeft - scrollAmount
        : thumbnailRef.current.scrollLeft + scrollAmount;

      thumbnailRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Development: "from-green-500 to-emerald-600",
      Leadership: "from-blue-500 to-indigo-600",
      Healthcare: "from-red-500 to-pink-600",
      Education: "from-purple-500 to-violet-600",
      Agriculture: "from-yellow-500 to-orange-600",
      Technology: "from-cyan-500 to-teal-600",
      Environment: "from-green-600 to-teal-600",
      Culture: "from-pink-500 to-purple-600",
      Business: "from-orange-500 to-red-600",
      Sports: "from-blue-600 to-purple-600"
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
    <div className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Event-themed Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-event-float opacity-30"
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
                boxShadow: `0 0 ${15 + Math.random() * 25}px rgba(249, 115, 22, 0.3)`
              }}
            />
          ))}
        </div>

        {/* Calendar-themed Shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`calendar-${i}`}
              className="absolute opacity-10 animate-calendar-float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + ((i * 13) % 60)}%`,
                animationDelay: `${i * 1}s`,
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
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
            <div className="relative h-[600px] rounded-4xl overflow-hidden backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 shadow-2xl">
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
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

          {/* Premium Horizontal Scrollable Thumbnails */}
          <div className="mt-8 relative">
            {/* Scroll Buttons */}


            {/* Thumbnails Container */}
            <div className="px-0">
              <div
                ref={thumbnailRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {pastEvents.map((event, index) => (
                  <button
                    key={event.id}
                    onClick={() => goToSlide(index)}
                    className={`relative group overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 flex-none w-40 snap-center ${
                      index === activeSlide
                        ? "ring-4 ring-orange-500/60 shadow-2xl shadow-orange-500/30"
                        : "hover:ring-2 hover:ring-orange-400/40"
                    }`}
                  >
                    <div
                      className="h-28 bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Active indicator */}
                    {index === activeSlide && (
                      <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl animate-pulse" />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-transparent transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: Math.ceil(pastEvents.length / 4) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-orange-500/30"
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
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

                      {/* Title */}
                      <h4 className="text-2xl font-black text-white mb-3">
                        {event.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Location & Type */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-green-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm font-semibold">{event.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full">
                          <span className="text-purple-300 text-sm font-bold">{event.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-12 shadow-2xl">
              <h4 className="text-3xl font-black text-white mb-6">
                Stay <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Connected</span>
              </h4>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Don't miss any upcoming events! Join our community and be part of the positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl font-black text-white shadow-2xl hover:shadow-orange-500/40 transform hover:scale-110 transition-all duration-500 tracking-wide">
                  JOIN NEWSLETTER
                </button>
                <button className="px-12 py-4 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-500/40 rounded-2xl font-bold text-white hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 transform hover:scale-110 transition-all duration-500 tracking-wide">
                  FOLLOW SOCIAL MEDIA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes event-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-40px) translateX(20px) scale(1.1) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(-30px) scale(0.9) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-50px) translateX(15px) scale(1.05) rotate(270deg);
            opacity: 0.4;
          }
        }

        @keyframes calendar-float {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-30px) rotateX(180deg) rotateY(180deg);
            opacity: 0.3;
          }
        }

        .animate-event-float {
          animation: event-float 15s ease-in-out infinite;
        }

        .animate-calendar-float {
          animation: calendar-float 20s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EventsSection;