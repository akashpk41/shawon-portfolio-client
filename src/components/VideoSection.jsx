import React, { useState, useEffect, useCallback } from "react";

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("speeches");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Close modal with escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Featured Video
  const featuredVideo = {
    id: "featured",
    title: "Message from the Leader: Vision for Bangladesh 2030",
    description: "A comprehensive outline of our development roadmap, focusing on economic growth, social justice, and democratic strengthening for the next decade.",
    youtubeId: "dQw4w9WgXcQ", // Sample YouTube ID
    duration: "12:34",
    views: "25,847",
    publishDate: "March 15, 2025",
    highlights: [
      "Economic Development Strategy",
      "Youth Employment Initiatives",
      "Healthcare System Reform",
      "Education Modernization Plan",
      "Anti-Corruption Measures"
    ]
  };

  // Video Categories
  const videoCategories = [
    {
      id: "speeches",
      name: "Speeches & Interviews",
      icon: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
      count: 12
    },
    {
      id: "events",
      name: "Events & Campaigns",
      icon: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      count: 8
    },
    {
      id: "community",
      name: "Community Work",
      icon: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      count: 15
    }
  ];

  // Video Gallery Data
  const videoGallery = {
    speeches: [
      {
        id: 1,
        title: "Parliamentary Address on Economic Reform",
        description: "Comprehensive speech on restructuring Bangladesh's economic policies for sustainable growth",
        youtubeId: "3zdCvrbd2ck",
        thumbnail: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/528167948_2043384106470233_2821623954817278859_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqfLFWxv_GK8w6CJZtc82EG1AONrp_mUcbUA42un-ZR0pEU16uf2VYOhwxpCVMy82kSD5KnS-nbcoiBGC1kIsn&_nc_ohc=XOhyG8P1jj4Q7kNvwGf-Ncp&_nc_oc=AdmsClCXYsUdmxgrDr3kw-0XdX-26x_SGxA2FzDZio_FpLdWEsRtTbikAi5H3rYPcwg&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=AOzcUfPHqwYNHjXk5kk6Lg&oh=00_AfWZYKt8m5-xWW7ngP-ayVoFl14h5znjvlLtZQhyLHX4Uw&oe=68BA62BD",
        duration: "18:42",
        views: "12,543",
        publishDate: "March 10, 2025",
        category: "Parliament"
      },
      {
        id: 2,
        title: "Youth Leadership Summit Keynote",
        description: "Inspiring address to young leaders about political engagement and social responsibility",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/490415698_1944933966315248_8644017666476395147_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHnjOR5M60YygQuVy3HceKUGbGOdJ10i6QZsY50nXSLpAeX1O-Wwo4Gke2snwte1dQshfItiCqqc1EauP8otw67&_nc_ohc=hPV-aoTUyzYQ7kNvwExbCAN&_nc_oc=AdnTXET_jBjvj97SHmcqHkiPCay-gyG-d4cRBVvxjvI79hhrtGmC0M47kinSteehuyI&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=ICx5gnfTz3yiVW2PBmhRyg&oh=00_AfVu2sHsN7p15sQParh368WdbA5pnG66ZCmqqh1MxegwDQ&oe=68BA8534",
        duration: "15:23",
        views: "8,932",
        publishDate: "February 28, 2025",
        category: "Conference"
      },
      {
        id: 3,
        title: "Television Interview on Healthcare Policy",
        description: "In-depth discussion about healthcare reforms and universal coverage initiatives",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/517314513_2018626185612692_2575090862077467314_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeERykXQfaIxnKeXtKmyRubroI5FLZSO7VGgjkUtlI7tUUSAyXgN3PRwv-ZeSrzw2uLAFc8ssuh8hWhiPe2gTwoR&_nc_ohc=gTmbZUluvPwQ7kNvwF4Lt94&_nc_oc=AdlK4LUMFYxOrz9Gg3JDBafQFnwWbLMfJhIlOivH50Xv_NwofcBrD7en411N_jZNl74&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=mIlEqaoXbr16jLHkBLAe8A&oh=00_AfUxBTidR9gTGZmHeLo7nqE1io3GA-B-261llMT5GWpD3Q&oe=68BA5893",
        duration: "22:15",
        views: "15,672",
        publishDate: "February 20, 2025",
        category: "Interview"
      },
      {
        id: 4,
        title: "Press Conference: Anti-Corruption Measures",
        description: "Announcing new transparency initiatives and accountability frameworks",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/490329076_1944934489648529_7936935738186258418_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUPbdevCk85xAPJro_tIUerom7ek0OoTiuibt6TQ6hOMd1-QQvWzyqY00KuXTwSFTrc9sFL86XPq9BO-4eeu30&_nc_ohc=6PgzPRBo00gQ7kNvwHJl4fp&_nc_oc=AdnwGK4gcN9oPV0Pj0EFL_hZA7Hw_jLKvSThr_ygixx0NfyQyZYi75D0BWjfavQ8_AM&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=ITmcPxL_dLytBHomgaDEuQ&oh=00_AfUKJCDIzt7OPLb4uswPZ3wTCA_uvOY9emZTboL5wiNLVA&oe=68BA76EA",
        duration: "25:48",
        views: "21,234",
        publishDate: "February 15, 2025",
        category: "Press Conference"
      }
    ],
    events: [
      {
        id: 5,
        title: "Election Campaign Rally - Pabna",
        description: "Massive public gathering addressing local development and national vision",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        duration: "35:12",
        views: "45,672",
        publishDate: "January 25, 2025",
        category: "Campaign"
      },
      {
        id: 6,
        title: "Women Empowerment Conference",
        description: "Celebrating women's achievements and discussing gender equality policies",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
        duration: "28:34",
        views: "18,943",
        publishDate: "January 20, 2025",
        category: "Conference"
      },
      {
        id: 7,
        title: "Independence Day Celebration",
        description: "Commemorating national independence with cultural programs and speeches",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
        duration: "42:18",
        views: "32,156",
        publishDate: "December 16, 2024",
        category: "National Event"
      },
      {
        id: 8,
        title: "Digital Bangladesh Workshop",
        description: "Promoting technology adoption and digital literacy in rural communities",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
        duration: "31:29",
        views: "14,278",
        publishDate: "December 10, 2024",
        category: "Workshop"
      }
    ],
    community: [
      {
        id: 9,
        title: "Blood Donation Drive 2025",
        description: "Community initiative saving lives through voluntary blood donation program",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=600&h=400&fit=crop",
        duration: "12:45",
        views: "9,834",
        publishDate: "March 5, 2025",
        category: "Health"
      },
      {
        id: 10,
        title: "Flood Relief Operations",
        description: "Emergency response and community support during natural disaster",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
        duration: "16:22",
        views: "27,543",
        publishDate: "August 15, 2024",
        category: "Relief Work"
      },
      {
        id: 11,
        title: "Tree Plantation Campaign",
        description: "Environmental conservation initiative with community participation",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
        duration: "14:18",
        views: "11,267",
        publishDate: "June 5, 2024",
        category: "Environment"
      },
      {
        id: 12,
        title: "Education Support Program",
        description: "Providing educational materials and scholarships to underprivileged students",
        youtubeId: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
        duration: "19:33",
        views: "13,892",
        publishDate: "May 20, 2024",
        category: "Education"
      }
    ]
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Parliament": "from-red-500 to-pink-600",
      "Conference": "from-blue-500 to-indigo-600",
      "Interview": "from-purple-500 to-violet-600",
      "Press Conference": "from-orange-500 to-amber-600",
      "Campaign": "from-green-500 to-emerald-600",
      "National Event": "from-yellow-500 to-orange-600",
      "Workshop": "from-cyan-500 to-teal-600",
      "Health": "from-red-600 to-red-700",
      "Relief Work": "from-orange-600 to-amber-700",
      "Environment": "from-green-600 to-teal-700",
      "Education": "from-blue-600 to-indigo-700"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const openVideoModal = useCallback((video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  }, []);

  const closeVideoModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  }, []);

  const currentVideos = videoGallery[activeTab] || [];

  // YouTube Embed Component
  const YouTubeEmbed = ({ video, autoplay = false }) => {
    if (!video) return null;

    const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?${new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      fs: '1',
      cc_load_policy: '0',
      iv_load_policy: '3',
      autohide: '0'
    }).toString()}`;

    return (
      <div className="relative w-full h-full">
        <iframe
          src={embedUrl}
          title={video.title}
          className="absolute inset-0 w-full h-full rounded-2xl"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  };

  return (
    <div id="Videos" className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Premium Video Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Video-themed Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce opacity-25"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${12 + Math.random() * 35}px`,
                height: `${12 + Math.random() * 35}px`,
                background: `linear-gradient(135deg,
                  ${['#f97316', '#ef4444', '#eab308', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 6)]}40,
                  ${['#dc2626', '#f59e0b', '#f97316', '#a855f7', '#0891b2', '#059669'][Math.floor(Math.random() * 6)]}20)`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${14 + Math.random() * 10}s`,
                borderRadius: Math.random() > 0.7 ? '50%' : '20%',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 165, 0, 0.2)',
                boxShadow: `0 0 ${20 + Math.random() * 25}px rgba(249, 115, 22, 0.3)`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        {/* Play Button Floating Icons */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`play-${i}`}
              className="absolute opacity-10 animate-pulse"
              style={{
                left: `${10 + i * 12}%`,
                top: `${25 + ((i * 15) % 50)}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-full backdrop-blur-sm border border-orange-500/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400/60 to-red-500/60 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white/70 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              VIDEO GALLERY
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Watch Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the vision, dedication, and impact through our comprehensive video archive
          </p>
        </div>

        {/* Featured Video Section */}
        <div
          className={`mb-24 transform transition-all duration-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Featured <span className="text-orange-400">Message</span>
            </h3>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="relative group cursor-pointer" onClick={() => openVideoModal(featuredVideo)}>
                {/* Video Container */}
                <div className="relative aspect-video rounded-3xl overflow-hidden backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/40 shadow-2xl">
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/492942913_1958518174956827_1270583043355150440_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF6H351rD33BIeQCoVUFKrvC7PiHdMLtyALs-Id0wu3IF1FSwFGhtf6Fj1s_Dnc3Z_aWc-XtlS5dWjefqw8Wip8&_nc_ohc=JW2HnfdlgF8Q7kNvwHMXRMP&_nc_oc=Adl1v1DwdVqEQ5FU5TRTtAnRaMqGOHX0K8bgWGyYCCizgRve2SZdQkrWxOB-SD9g5a8&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=A4X6-o3vE7uvITUfClx8OQ&oh=00_AfU_44mD9jL-f_KEwA0IVSdF_z2Arp2sPuGf8Hm6-WMO5A&oe=68BA8616`}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4 text-white flex-wrap">
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full">
                        <span className="font-semibold text-sm">{featuredVideo.duration}</span>
                      </div>
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full">
                        <span className="font-semibold text-sm">{featuredVideo.views} views</span>
                      </div>
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full">
                        <span className="font-semibold text-sm">{featuredVideo.publishDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 rounded-3xl blur-xl transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Video Details */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  {featuredVideo.title}
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {featuredVideo.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <h5 className="text-xl font-bold text-orange-400 mb-4">Key Highlights:</h5>
                <div className="space-y-3">
                  {featuredVideo.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-300 font-semibold">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6 flex gap-4 flex-wrap">
                <button
                  onClick={() => openVideoModal(featuredVideo)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Now
                </button>
                <a
                  href={`https://www.youtube.com/watch?v=${featuredVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Categories Tabs */}
        <div
          className={`flex justify-center mb-16 transform transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-3 shadow-2xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {videoCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative px-6 py-4 rounded-2xl font-bold transition-all duration-500 ${
                    activeTab === category.id
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-red-600/20"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <category.icon />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activeTab === category.id
                        ? "bg-white/20 text-white"
                        : "bg-orange-500/20 text-orange-400"
                    }`}>
                      {category.count}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Video Gallery Grid */}
        <div
          className={`transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative cursor-pointer transform hover:scale-105 transition-all duration-700 hover:z-10"
                onClick={() => openVideoModal(video)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${getCategoryColor(video.category)} opacity-0 group-hover:opacity-25 rounded-3xl blur-xl transition-all duration-500`} />

                {/* Video Card */}
                <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border border-white/20 group-hover:border-orange-400/60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">

                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className={`absolute top-3 left-3 px-2 py-1 bg-gradient-to-r ${getCategoryColor(video.category)} rounded-full shadow-xl`}>
                      <span className="text-white text-xs font-bold">{video.category}</span>
                    </div>

                    {/* Duration */}
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-xl rounded-full">
                      <span className="text-white text-xs font-bold">{video.duration}</span>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-lg font-black text-white mb-3 leading-tight group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                      {video.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-xs font-semibold">{video.views}</span>
                      </div>
                      <div className="text-gray-400 text-xs font-semibold">
                        {video.publishDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-orange-600 hover:to-red-600 rounded-2xl font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Load More Videos
            <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
              {currentVideos.length}+
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={closeVideoModal}
          />

          <div
            className={`relative w-full max-w-6xl mx-auto bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-3xl border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/80 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="aspect-video">
              <YouTubeEmbed video={selectedVideo} autoplay={true} />
            </div>

            {/* Video Info */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(selectedVideo.category)} rounded-full shadow-xl`}>
                      <span className="text-white text-sm font-bold">{selectedVideo.category}</span>
                    </div>
                    <div className="px-3 py-1 bg-gray-700 rounded-full">
                      <span className="text-white text-sm font-bold">{selectedVideo.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    {selectedVideo.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedVideo.description}
                  </p>

                  <div className="flex items-center gap-6 pt-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="font-semibold">{selectedVideo.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">{selectedVideo.publishDate}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Open in YouTube
                  </a>

                  <button
                    onClick={() => {
                      navigator.share({
                        title: selectedVideo.title,
                        text: selectedVideo.description,
                        url: `https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`
                      }).catch(() => {
                        navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`);
                      });
                    }}
                    className="w-full group inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share Video
                  </button>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-bold mb-3">Related Videos</h4>
                    <div className="space-y-3">
                      {currentVideos.slice(0, 3).map((relatedVideo) => (
                        <button
                          key={relatedVideo.id}
                          onClick={() => setSelectedVideo(relatedVideo)}
                          className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                        >
                          <div className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors line-clamp-2">
                            {relatedVideo.title}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {relatedVideo.duration} • {relatedVideo.views} views
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes video-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-15px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(-10px) rotate(240deg) scale(0.9); }
        }

        @keyframes play-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.1; }
          50% { transform: translateY(-10px) scale(1.05); opacity: 0.2; }
        }

        .animate-video-float {
          animation: video-float linear infinite;
        }

        .animate-play-float {
          animation: play-float ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </div>
  );
};

export default VideoSection;