import React, { useState, useEffect, useRef } from "react";

const PersonalGallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide functionality (pause when gallery is not visible)
  useEffect(() => {
    if (!isAutoPlay) return;

    // Check if gallery is in viewport before auto-sliding
    const galleryElement = document.getElementById("Gallery");
    if (!galleryElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;

        if (isVisible) {
          const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % personalPhotos.length);
          }, 4000);

          // Store interval reference for cleanup
          galleryElement.dataset.intervalId = interval;

          return () => clearInterval(interval);
        } else {
          // Clear interval when gallery is not visible
          const intervalId = galleryElement.dataset.intervalId;
          if (intervalId) {
            clearInterval(parseInt(intervalId));
            delete galleryElement.dataset.intervalId;
          }
        }
      },
      { threshold: 0.5 } // Only when 50% of gallery is visible
    );

    observer.observe(galleryElement);

    return () => {
      observer.disconnect();
      // Cleanup interval on unmount
      const intervalId = galleryElement?.dataset.intervalId;
      if (intervalId) {
        clearInterval(parseInt(intervalId));
      }
    };
  }, [isAutoPlay]);

  // Auto-scroll thumbnails when active slide changes (only when gallery is in viewport)
  useEffect(() => {
    // Check if gallery section is visible in viewport
    const galleryElement = document.getElementById("Gallery");
    if (!galleryElement || !thumbnailRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        if (isVisible) {
          const thumbnail = thumbnailRef.current.children[activeSlide];
          if (thumbnail) {
            thumbnail.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }
        }
      },
      { threshold: 0.3 } // Only when 30% of gallery is visible
    );

    observer.observe(galleryElement);

    return () => {
      observer.disconnect();
    };
  }, [activeSlide]);
  const personalPhotos = [
    {
      id: 1111,
      location: "Sylhet, Bangladesh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/0R01fv62/546236604-2075372623271381-750133388805385887-n.jpg",
      date: "September 2025",
    },{
      id: 1,
      location: "Sylhet, Bangladesh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/Jjt9GYYJ/544663547-2073458623462781-4692775343500646129-n.jpg",
      date: "April 2025",
    },
    {
      id: 2,
      location: "Cox's Bazar, Bangladesh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/pvb18jyW/542751014-2070228257119151-8490350043094848938-n.jpg",
      date: "September 2025",
    },
    {
      id: 3,
      location: "Bandarban, Bangladesh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/d0wf7qfr/541143563-2066881337453843-3598877357274407808-n.jpg",
      date: "September 2025",
    },
    {
      id: 4,
      location: "Rangamati, Bangladesh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/Z6WzZpM3/537826602-2060109531464357-1792702747081529695-n.jpg",
      date: "February 2025",
    },
    {
      id: 5,
      location: "Srimangal, Bangladesh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/HDmbR9h0/538465515-2060109481464362-1521140325196587607-n.jpg",
      date: "June 2025",
    },
    {
      id: 6,
      location: "Saint Martin's Island",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/wFJrb8CN/537650854-2060109424797701-1598778760328222034-n.jpg",
      date: "March 2025",
    },
    {
      id: 7,
      location: "Chittagong Hill Tracts",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/YFpnD6tC/538797394-2060109218131055-4604785790701512079-n.jpg",
      date: "July 2025",
    },
    {
      id: 8,
      location: "Paharpur, Naogaon",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/Xf6sXZF8/532928792-2050033772471933-2088391885288356297-n.jpg",
      date: "May 2023",
    },
    {
      id: 9,
      location: "Khagrachari",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/rGQnT4LN/529297311-2043553393119971-7985068079542699122-n.jpg",
      date: "August 2024",
    },
    {
      id: 10,
      location: "Comilla",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/jkybBVHj/524563547-2035584463916864-4355180765440860187-n.jpg",
      date: "December 2023",
    },
    {
      id: 11,
      location: "Panchagarh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/ZpffQLpJ/518342498-2026134051528572-1798309939831870330-n.jpg",
      date: "October 2022",
    },
    {
      id: 12,
      location: "Barisal",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/gbYkYqRW/518381964-2018626555612655-7564725290224062694-n.jpg",
      date: "February 2024",
    },
    {
      id: 13,
      location: "Rajshahi",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/HpRtxHxD/516732036-2018626285612682-4146724744690865167-n.jpg",
      date: "June 2023",
    },
    {
      id: 14,
      location: "Bogra",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/jky9nkdV/516188986-2015121732629804-8586485917082034040-n.jpg",
      date: "July 2024",
    },
    {
      id: 15,
      location: "Mymensingh",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/whBvH067/513834358-2009773259831318-4836129616778151232-n.jpg",
      date: "October 2021",
    },
    {
      id: 16,
      location: "Jessore",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/gKxPFLY/510839128-2004047660403878-1254520409021732546-n.jpg",
      date: "March 2023",
    },
    {
      id: 17,
      location: "Dinajpur",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/jkYhGVsd/509427924-2002655197209791-3803536421205284712-n.jpg",
      date: "May 2022",
    },
    {
      id: 18,
      location: "Narsingdi",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/DHmtjFyT/509439509-2002655153876462-982550614579856918-n.jpg",
      date: "April 2023",
    },
    {
      id: 19,
      location: "Narayanganj",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/xZ2HSrN/508146888-2000187904123187-9147168598433342044-n.jpg",
      date: "September 2022",
    },
    {
      id: 20,
      location: "Gazipur",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/KjxqtcC1/506096327-1995917471216897-8519015766251061540-n.jpg",
      date: "January 2024",
    },
    {
      id: 21,
      location: "Jamalpur",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/PzsXgndW/497853082-1974450710030240-4183607679807149578-n.jpg",
      date: "August 2023",
    },
    {
      id: 22,
      location: "Kushtia",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/LDQgvDdg/497513306-1973049673503677-8214228923572413486-n.jpg",
      date: "November 2022",
    },
    {
      id: 23,
      location: "Tangail",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/gFmLrNGL/491975692-1949435262531785-2466618383985363512-n.jpg",
      date: "May 2024",
    },
    {
      id: 24,
      location: "Brahmanbaria",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/yFSV0Wpc/492942913-1958518174956827-1270583043355150440-n.jpg",
      date: "December 2022",
    },
    {
      id: 25,
      location: "Noakhali",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/pBJ7WJSM/487986564-1937384163736895-1376271566853026371-n.jpg",
      date: "February 2022",
    },
    {
      id: 26,
      location: "Feni",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/zTz5pXMG/488708695-1937384170403561-6225214261942060059-n.jpg",
      date: "July 2024",
    },
    {
      id: 27,
      location: "Meherpur",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/YTjfbzFD/488075309-1937030543772257-8559278860500032681-n.jpg",
      date: "October 2023",
    },
    {
      id: 28,
      location: "Netrokona",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/sddpLnhh/487781478-1936553397153305-2309169756983088795-n.jpg",
      date: "June 2023",
    },
    {
      id: 29,
      location: "Sherpur",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/8gDcrCMx/487517739-1936545133820798-6384807513380397443-n.jpg",
      date: "September 2024",
    },
    {
      id: 30,
      location: "Thakurgaon",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/TDLh6d1N/488003113-1936545010487477-8186974945966901778-n.jpg",
      date: "April 2022",
    },
    {
      id: 31,
      location: "Gaibandha",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/Hf8r2QD9/487411828-1935676293907682-543620936876456095-n.jpg",
      date: "January 2023",
    },
    {
      id: 32,
      location: "Lalmonirhat",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/r2SKk69Y/451286988-1738465066962140-6629423090224411968-n.jpg",
      date: "August 2022",
    },
    {
      id: 33,
      location: "Chuadanga",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/MkXr4NdB/485368874-1926766171465361-8183814218412551736-n.jpg",
      date: "March 2024",
    },
    {
      id: 34,
      location: "Bhola",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/0R01fv62/546236604-2075372623271381-750133388805385887-n.jpg",
      date: "May 2025",
    },
    {
      id: 35,
      location: "Patuakhali",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/0R01fv62/546236604-2075372623271381-750133388805385887-n.jpg",
      date: "January 2025",
    },
    {
      id: 36,
      location: "Munshiganj",
      description: "Exploring the beauty of our natural heritage",
      image:
        "https://i.ibb.co.com/0R01fv62/546236604-2075372623271381-750133388805385887-n.jpg",
      date: "June 2022",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % personalPhotos.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + personalPhotos.length) % personalPhotos.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 200;
      thumbnailRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Travel: "from-blue-500 to-cyan-600",
      Friends: "from-green-500 to-emerald-600",
      Culture: "from-purple-500 to-violet-600",
      Lifestyle: "from-orange-500 to-red-600",
      Learning: "from-indigo-500 to-blue-600",
      Family: "from-pink-500 to-rose-600",
      Sports: "from-yellow-500 to-orange-600",
      Hobby: "from-teal-500 to-cyan-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div
      id="Gallery"
      className="relative py-18 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Photo-themed Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-photo-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 70}px`,
                height: `${20 + Math.random() * 70}px`,
                background: `linear-gradient(45deg,
                  ${
                    ["#f97316", "#8b5cf6", "#06b6d4", "#10b981"][
                      Math.floor(Math.random() * 4)
                    ]
                  }30,
                  ${
                    ["#dc2626", "#f59e0b", "#3b82f6", "#ef4444"][
                      Math.floor(Math.random() * 4)
                    ]
                  }15)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 10}s`,
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 165, 0, 0.15)",
                boxShadow: `0 0 ${
                  20 + Math.random() * 30
                }px rgba(139, 92, 246, 0.2)`,
              }}
            />
          ))}
        </div>

        {/* Camera and Photo Icons */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`camera-${i}`}
              className="absolute opacity-10 animate-camera-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + ((i * 17) % 50)}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              <div className="w-12 h-10 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-lg backdrop-blur-sm border border-orange-500/20 relative">
                <div className="absolute top-1 right-1 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <div className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-orange-400/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-2 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-2xl border border-purple-500/40 rounded-full shadow-2xl mb-8">
            <span className="text-purple-400 font-bold text-lg tracking-wide flex items-center gap-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              PERSONAL GALLERY
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Life{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              MOMENTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the personal journey, friendships, and cherished
            memories
          </p>
        </div>

        {/* Premium Photo Gallery */}
        <div
          className={`transform transition-all duration-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Premium Carousel Container */}
          <div className="relative mb-12">
            {/* Main Photo Display */}
            <div className="relative h-[700px] rounded-4xl overflow-hidden backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-purple-500/30 shadow-2xl">
              {personalPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-all duration-800 ${
                    index === activeSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div className="relative h-full w-full">
                    {/* Background Image with Parallax Effect */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transform transition-all duration-1000"
                      style={{
                        backgroundImage: `url(${photo.image})`,
                        transform:
                          index === activeSlide ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Photo Information */}
                    <div className="relative h-full flex items-end p-12">
                      <div className="space-y-6 max-w-4xl">
                        {/* Date and Location */}
                        <div className="flex items-center gap-6 flex-wrap">
                          <div className="flex items-center gap-3 text-cyan-400">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="font-bold text-lg">
                              {photo.date}
                            </span>
                          </div>
                          {/* <div className="flex items-center gap-3 text-green-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-semibold text-lg">{photo.location}</span>
                          </div> */}
                        </div>

                        {/* Description */}
                        {/* <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
                          {photo.description}
                        </p> */}
                      </div>
                    </div>

                    {/* Overlay Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 animate-pulse pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute cursor-pointer left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-xl border border-purple-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-20 group"
            >
              <svg
                className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-1 md:right-6 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-xl border border-purple-500/50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-20 group"
            >
              <svg
                className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* AutoPlay Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`absolute top-6 right-6 w-12 h-12 backdrop-blur-xl border rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 z-20 ${
                isAutoPlay
                  ? "bg-green-500/80 border-green-500/50 text-white"
                  : "bg-gray-500/80 border-gray-500/50 text-gray-300"
              }`}
            >
              {isAutoPlay ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {personalPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-500 ${
                    index === activeSlide ? "w-12 h-3" : "w-3 h-3 hover:w-6"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      index === activeSlide
                        ? "bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg shadow-purple-500/30"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                  {index === activeSlide && isAutoPlay && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Premium Horizontal Scrollable Thumbnails */}
          <div className="relative">
            {/* Thumbnails Container */}
            <div className="px-1">
              <div
                ref={thumbnailRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {personalPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => goToSlide(index)}
                    className={`relative cursor-pointer group overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 flex-none w-40 snap-center ${
                      index === activeSlide
                        ? "ring-4 ring-purple-500/60 shadow-2xl shadow-purple-500/30"
                        : "hover:ring-2 hover:ring-purple-400/40"
                    }`}
                  >
                    <div
                      className="h-28 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${photo.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Photo Info */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-purple-300 text-xs truncate">
                        {photo.date}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {index === activeSlide && (
                      <div className="absolute inset-0 border-2 border-purple-400 rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse" />
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-transparent transition-all duration-300" />

                    {/* Play Icon for Active */}
                    {index === activeSlide && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(personalPhotos.length / 4) }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-purple-500/30 transition-all duration-300 hover:bg-purple-500/50"
                  />
                )
              )}
            </div>
          </div>

          {/* Gallery Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Total Photos",
                count: `${personalPhotos.length}+`,
                icon: "📸",
              },
              { label: "Categories", count: "8", icon: "🏷️" },
              { label: "Memories", count: "∞", icon: "💫" },
              { label: "Moments", count: "Countless", icon: "⏰" },
            ].map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/30 border border-purple-500/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-purple-400 mb-2">
                  {stat.count}
                </div>
                <div className="text-sm text-gray-300 font-semibold tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Personal Quote */}
          <div className="mt-20">
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-purple-500/30 rounded-4xl p-12 shadow-2xl text-center">
              <div className="max-w-4xl mx-auto">
                <svg
                  className="w-12 h-12 text-purple-400 mx-auto mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>

                <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                  "Every moment captured is a story worth telling, every memory
                  preserved is a treasure worth keeping. Life is beautiful when
                  shared with the people we love."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <span className="text-purple-400 font-bold text-lg tracking-wide">
                    SHAWON HOSSAIN
                  </span>
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes photo-float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-45px) translateX(25px) scale(1.15)
              rotate(90deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-25px) translateX(-35px) scale(0.85)
              rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-55px) translateX(20px) scale(1.05)
              rotate(270deg);
            opacity: 0.3;
          }
        }

        @keyframes camera-float {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
            opacity: 0.1;
          }
          33% {
            transform: translateY(-35px) rotateX(120deg) rotateY(120deg)
              scale(1.1);
            opacity: 0.3;
          }
          66% {
            transform: translateY(-20px) rotateX(240deg) rotateY(240deg)
              scale(0.9);
            opacity: 0.2;
          }
        }

        .animate-photo-float {
          animation: photo-float 18s ease-in-out infinite;
        }

        .animate-camera-float {
          animation: camera-float 25s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Custom scrollbar for webkit browsers */
        .scrollbar-hide::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        /* Smooth snap scrolling */
        .snap-x {
          scroll-snap-type: x mandatory;
        }

        .snap-center {
          scroll-snap-align: center;
        }

        /* Glow effect on active thumbnails */
        @keyframes thumbnail-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
          }
        }

        .ring-4.ring-purple-500\/60 {
          animation: thumbnail-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PersonalGallerySection;
