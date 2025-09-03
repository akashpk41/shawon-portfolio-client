import React, { useState, useEffect } from "react";

const TournamentCommitteeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [particleCount, setParticleCount] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const committeeMembers = [
    {
      id: 1,
      title: "👤 Convener",
      name: "Md. Shawon Hossain",
      department: "Islamic History and Culture",
      session: "2022–2023",
      mobile: "01768298331",
      image: "https://i.ibb.co.com/DHbCY62j/shawon.png",
      color: "from-orange-500 via-red-500 to-yellow-500",
      bgColor: "from-orange-500/20 via-red-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/50",
      iconBg: "from-orange-600 to-red-700",
      priority: "highest"
    },
    {
      id: 2,
      title: "👥 Co-Convener",
      name: "Rezaul Islam Badhon",
      department: "Management",
      session: "2021–2022",
      mobile: "01709514747",
      image: "https://i.ibb.co.com/x8tJQhy2/badhon.png",
      color: "from-blue-500 via-indigo-500 to-purple-500",
      bgColor: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      borderColor: "border-blue-500/50",
      iconBg: "from-blue-600 to-indigo-700",
      priority: "high"
    },
    {
      id: 3,
      title: "⚖️ Rules & Event Co-Ordinator",
      name: "Md. Tanzim Hossain",
      department: "Chemistry",
      session: "2022–2023",
      mobile: "01628147782",
      image: "https://i.ibb.co.com/0R72jHkj/tanzim.png",
      color: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      borderColor: "border-green-500/50",
      iconBg: "from-green-600 to-emerald-700",
      priority: "medium"
    },
    {
      id: 4,
      title: "💰 Finance Co-Ordinator",
      name: "Akash PK",
      department: "Degree (2nd Year)",
      session: "2022–2023",
      mobile: "01405700935",
      image: "https://i.ibb.co.com/6R0r2XSC/akash.png",
      color: "from-yellow-500 via-amber-500 to-orange-500",
      bgColor: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/50",
      iconBg: "from-yellow-600 to-amber-700",
      priority: "medium"
    },
    {
      id: 5,
      title: "📣 Public Relations & Media Co-Ordinator",
      name: "Md. Ohiduzzaman",
      department: "Political Science",
      session: "2020–2021",
      mobile: "01744195453",
      image: "https://i.ibb.co.com/v6WrwG0y/nice.png",
      color: "from-purple-500 via-pink-500 to-rose-500",
      bgColor: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      borderColor: "border-purple-500/50",
      iconBg: "from-purple-600 to-pink-700",
      priority: "medium"
    },
    {
      id: 6,
      title: "🛠️ Logistics & Operations",
      name: "Akash Ahmed Shuvo",
      department: "Economics",
      session: "2021–2022",
      mobile: "+8801611-998767",
      image: "https://i.ibb.co.com/kgmQDQGs/shuvo-ahmed-akash.png",
      color: "from-cyan-500 via-teal-500 to-blue-500",
      bgColor: "from-cyan-500/20 via-teal-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/50",
      iconBg: "from-cyan-600 to-teal-700",
      priority: "low"
    },
    {
      id: 7,
      title: "🛠️ Logistics & Operations",
      name: "Shoaib Ahmed Shuvo",
      department: "Management",
      session: "2020–2021",
      mobile: "01733606795",
      image: "https://i.ibb.co.com/B527ZxFY/shoibshuvo.png",
      color: "from-red-500 via-pink-500 to-purple-500",
      bgColor: "from-red-500/20 via-pink-500/20 to-purple-500/20",
      borderColor: "border-red-500/50",
      iconBg: "from-red-600 to-pink-700",
      priority: "low"
    },
    {
      id: 8,
      title: "🛠️ Logistics & Operations",
      name: "Abdul Alim",
      department: "Sociology",
      session: "Master's 2022–2023",
      mobile: "0176860328",
      image: "https://i.ibb.co.com/YB36V7kG/alim.png",
      color: "from-indigo-500 via-violet-500 to-purple-500",
      bgColor: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/50",
      iconBg: "from-indigo-600 to-violet-700",
      priority: "low"
    }
  ];

  // Separate conveners and team members
  const conveners = committeeMembers.filter(member => member.priority === "highest" || member.priority === "high");
  const coordinators = committeeMembers.filter(member => member.priority === "medium");
  const logisticsTeam = committeeMembers.filter(member => member.priority === "low");

  const MemberCard = ({ member, index, isActive }) => (
    <div
      className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
        isActive ? "scale-105 z-20" : ""
      }`}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-30 rounded-4xl blur-3xl group-hover:opacity-50 transition-all duration-700 ${
        isActive ? "animate-pulse opacity-60" : ""
      }`} />

      {/* Member Card */}
      <div className={`relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border-2 rounded-4xl p-8 shadow-2xl transition-all duration-700 ${
        isActive
          ? `${member.borderColor} shadow-2xl transform rotate-1`
          : `border-white/20 group-hover:${member.borderColor}`
      } hover:shadow-2xl`}>

        {/* Priority Badge */}
        {member.priority === "highest" && (
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}

        {/* Member Photo */}
        <div className="relative mb-8">
          <div className={`w-32 h-32 mx-auto relative rounded-full overflow-hidden border-4 ${member.borderColor} shadow-2xl group-hover:scale-110 transition-all duration-500`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 animate-pulse`} />
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/%3E%3C/svg%3E";
              }}
            />
            {/* Glow overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-full group-hover:from-black/40 transition-all duration-500`} />
          </div>

          {/* Position Icon */}
          <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r ${member.iconBg} rounded-full flex items-center justify-center shadow-xl border-2 border-white/20`}>
            <span className="text-lg">{member.title.split(' ')[0]}</span>
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center space-y-4">
          {/* Position Title */}
          <div className={`inline-block px-4 py-2 bg-gradient-to-r ${member.bgColor} backdrop-blur-sm border ${member.borderColor} rounded-2xl shadow-lg`}>
            <p className={`text-sm font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent tracking-wide`}>
              {member.title}
            </p>
          </div>

          {/* Name */}
          <h4 className="text-2xl font-black text-white group-hover:text-orange-300 transition-colors duration-300 leading-tight">
            {member.name}
          </h4>

          {/* Details */}
          <div className="space-y-3 text-gray-200">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full flex items-center justify-center">
                <span className="text-xs">🏛️</span>
              </div>
              <p className="text-sm font-semibold text-blue-300">{member.department}</p>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full flex items-center justify-center">
                <span className="text-xs">📅</span>
              </div>
              <p className="text-sm font-semibold text-green-300">{member.session}</p>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center">
                <span className="text-xs">📱</span>
              </div>
              <p className="text-sm font-semibold text-purple-300 tracking-wider">{member.mobile}</p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="pt-4">
            <button className={`w-full py-3 px-6 bg-gradient-to-r ${member.iconBg} rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide`}>
              যোগাযোগ করুন
            </button>
          </div>
        </div>

        {/* Active Glow */}
        {isActive && (
          <div className={`absolute inset-0 border-2 ${member.borderColor} rounded-4xl pointer-events-none animate-pulse`} />
        )}
      </div>
    </div>
  );

  return (
    <div id="Tournament" className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Dynamic Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 24}px`,
              height: `${8 + Math.random() * 24}px`,
              background: `linear-gradient(45deg,
                ${['#f97316', '#ef4444', '#eab308', '#8b5cf6', '#06b6d4'][Math.floor(Math.random() * 5)]}60,
                ${['#dc2626', '#f59e0b', '#f97316', '#a855f7', '#0ea5e9'][Math.floor(Math.random() * 5)]}30)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `0 0 ${8 + Math.random() * 16}px rgba(249, 115, 22, 0.3)`
            }}
          />
        ))}
      </div>

      {/* Floating Football Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float-football opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              filter: `hue-rotate(${Math.random() * 360}deg)`
            }}
          >
            ⚽
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tournament Header */}
        <div
          className={`text-center mb-24 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Memorial Badge */}
          <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600/40 via-orange-600/30 to-yellow-600/40 backdrop-blur-3xl border border-red-500/50 rounded-full shadow-2xl mb-10 transform hover:scale-105 transition-all duration-500">
            <span className="text-red-300 font-black text-xl tracking-wide flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center animate-pulse">
                🏆
              </div>
              শহীদ জাহিদুল ইসলাম স্মৃতি স্মরণে
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
                🎖️
              </div>
            </span>
          </div>

          {/* Tournament Title */}
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              নবীন শিক্ষার্থীদের
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ফুটবল টুর্নামেন্ট
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              ২০২৫
            </span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                বাস্তবায়ন <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">কমিটি</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                একটি স্মরণীয় টুর্নামেন্টের সফল আয়োজনের জন্য নিবেদিতপ্রাণ সংগঠক দল
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
                <span className="text-2xl">⚽</span>
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Conveners Section */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-2xl border border-orange-500/40 rounded-full shadow-xl mb-6">
              <h3 className="text-2xl font-black text-orange-300 flex items-center gap-3">
                <span className="text-3xl">👑</span>
                নেতৃত্ব পর্যায়
                <span className="text-3xl">👑</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {conveners.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                isActive={activeCard === index}
              />
            ))}
          </div>
        </div>

        {/* Coordinators Section */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-2xl border border-blue-500/40 rounded-full shadow-xl mb-6">
              <h3 className="text-2xl font-black text-blue-300 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                ম্যানেজমেন্ট বোর্ড
                <span className="text-3xl">🎯</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coordinators.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={conveners.length + index}
                isActive={activeCard === conveners.length + index}
              />
            ))}
          </div>
        </div>

        {/* Logistics Team Section */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-600/30 to-teal-600/30 backdrop-blur-2xl border border-green-500/40 rounded-full shadow-xl mb-6">
              <h3 className="text-2xl font-black text-green-300 flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                লজিস্টিকস ও অপারেশনস টিম
                <span className="text-3xl">🛠️</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsTeam.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={conveners.length + coordinators.length + index}
                isActive={activeCard === conveners.length + coordinators.length + index}
              />
            ))}
          </div>
        </div>

        {/* Tournament Info & Notice */}
        <div
          className={`transform transition-all duration-1200 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-4xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-600/40 to-orange-600/40 backdrop-blur-2xl border border-red-500/50 rounded-full shadow-xl mb-6">
                <h3 className="text-3xl font-black text-red-300 flex items-center gap-3">
                  <span className="text-4xl">📢</span>
                  গুরুত্বপূর্ণ বিজ্ঞপ্তি
                  <span className="text-4xl">📢</span>
                </h3>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-2xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/40 rounded-3xl p-10 shadow-xl">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl text-3xl animate-bounce">
                    ⚽
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-2">অংশগ্রহণের শর্তাবলী</h4>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                  </div>
                </div>

                <div className="text-xl text-gray-200 leading-relaxed space-y-4">
                  <p>
                    <span className="text-orange-400 font-black">শুধুমাত্র নবীন শিক্ষার্থীদের</span> অংশগ্রহণে
                    <span className="text-red-400 font-black"> "শহীদ জাহিদুল ইসলাম স্মৃতি ফুটবল টুর্নামেন্ট ২০২৫"</span> আয়োজন করা হয়েছে।
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">⚽</span>
                      <span className="text-yellow-400 font-black">স্মৃতি টুর্নামেন্ট</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">🎗️</span>
                      <span className="text-green-400 font-black">শহীদের সম্মানে</span>
                    </div>
                  </div>
                </div>

                {/* Tournament Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                  {[
                    { icon: "🏆", label: "টুর্নামেন্ট", value: "২০২৫", color: "from-yellow-500 to-orange-600" },
                    { icon: "👥", label: "কমিটি সদস্য", value: "৮ জন", color: "from-blue-500 to-indigo-600" },
                    { icon: "⚽", label: "নবীন খেলোয়াড়", value: "সকল", color: "from-green-500 to-emerald-600" },
                    { icon: "🎖️", label: "শহীদ স্মৃতি", value: "জাহিদুল", color: "from-red-500 to-pink-600" }
                  ].map((stat, index) => (
                    <div key={index} className={`backdrop-blur-2xl bg-gradient-to-br ${stat.color}/20 border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-all duration-300`}>
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <div className="text-2xl font-black text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-300 font-semibold tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Custom Animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-40px) translateX(20px) scale(1.2) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(-30px) scale(0.8) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-60px) translateX(15px) scale(1.1) rotate(270deg);
            opacity: 0.4;
          }
        }

        @keyframes float-football {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translateY(-50px) translateX(30px) rotate(120deg) scale(1.3);
            opacity: 0.5;
          }
          66% {
            transform: translateY(-30px) translateX(-40px) rotate(240deg) scale(0.7);
            opacity: 0.7;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.6), 0 0 60px rgba(239, 68, 68, 0.4);
          }
        }

        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-soft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }

        .animate-float-football {
          animation: float-football 20s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-rotate-border {
          animation: rotate-border 10s linear infinite;
        }

        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }

        /* Custom gradient text animations */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        /* Hover effects */
        .group:hover .group-hover\:animate-spin {
          animation: spin 2s linear infinite;
        }

        /* Mobile responsiveness for cards */
        @media (max-width: 768px) {
          .rounded-4xl {
            border-radius: 1.5rem;
          }
        }

        /* Enhanced shadow effects */
        .shadow-glow {
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.3), 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .shadow-glow-intense {
          box-shadow: 0 0 50px rgba(249, 115, 22, 0.5), 0 20px 60px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default TournamentCommitteeSection;