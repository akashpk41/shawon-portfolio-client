import React, { useState, useEffect } from "react";

const BouncyText = ({ text = "Bouncy Animation" }: { text?: string }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-center">
      {text.split("").map((char, i) => (
        <span
          key={`${animationKey}-${i}`}
          className="inline-block animate-bounce-custom"
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: "0.8s",
            animationIterationCount: "1",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Advanced Dark Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Dark Glowing Particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-orange-500/60 to-red-500/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
              }}
            />
          ))}
        </div>

        {/* Dark Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`dark-shape-${i}`}
              className={`absolute opacity-20 animate-float-${i % 5}`}
              style={{
                left: `${5 + i * 6}%`,
                top: `${10 + ((i * 11) % 80)}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              {i % 6 === 0 && (
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600/40 to-red-600/40 rounded-2xl transform rotate-45 backdrop-blur-sm border border-orange-500/20 shadow-2xl" />
              )}
              {i % 6 === 1 && (
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/40 to-orange-600/40 rounded-full backdrop-blur-sm border border-yellow-500/20 shadow-xl" />
              )}
              {i % 6 === 2 && (
                <div className="w-10 h-10 bg-gradient-to-br from-red-600/40 to-pink-600/40 transform rotate-12 backdrop-blur-sm border border-red-500/20 shadow-xl" />
              )}
              {i % 6 === 3 && (
                <div className="w-14 h-14 bg-gradient-to-br from-amber-600/40 to-orange-600/40 rounded-xl transform rotate-45 backdrop-blur-sm shadow-2xl" />
              )}
              {i % 6 === 4 && (
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500/40 to-red-500/40 rounded-lg transform rotate-12 backdrop-blur-sm shadow-lg" />
              )}
              {i % 6 === 5 && (
                <div
                  className="w-10 h-10 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 backdrop-blur-sm shadow-xl"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/30 to-gray-900/50" />

      {/* Fixed Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/20 border-b border-orange-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Premium Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-lg opacity-75"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-black text-xl tracking-wider">
                    SH
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-black text-white tracking-wide">
                  Shawon Hossain
                </h1>
                <p className="text-sm text-orange-400 font-semibold tracking-widest uppercase">
                  Political Leader
                </p>
              </div>
            </div>

            {/* Desktop Premium Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {["Home", "Gallery", "Blogs", "About", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="relative px-8 py-4 rounded-2xl text-white font-bold transition-all duration-500 hover:text-orange-400 group overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500 rounded-2xl backdrop-blur-xl" />
                    <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/30 rounded-2xl transition-all duration-500" />
                    <span className="relative z-10 tracking-wide">{item}</span>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-500" />
                  </a>
                )
              )}
            </div>

            {/* Premium Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative p-4 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden backdrop-blur-2xl bg-black/40 border-b border-orange-500/20 shadow-2xl">
            <div className="px-6 py-6 space-y-3">
              {["Home", "Gallery", "Blogs", "About", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:text-orange-400 border border-transparent hover:border-orange-500/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Premium Profile */}
          <div
            className={`md:hidden mb-20 flex justify-center transform transition-all duration-1500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative">
              {/* Mobile Dark Glowing Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-3xl backdrop-blur-sm border border-orange-500/40 animate-float shadow-2xl" />
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-full backdrop-blur-sm border border-yellow-500/40 animate-pulse shadow-2xl" />

              {/* Mobile Premium Container */}
              <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-4xl p-4 shadow-2xl">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-red-500/30 to-yellow-500/40 rounded-4xl blur-2xl" />
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-4xl border border-orange-500/40 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-orange-700 to-red-800 rounded-4xl flex items-center justify-center">
                      <div className="text-8xl text-white font-black drop-shadow-2xl">
                       <img src="./shawon.png" alt="" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-4xl" />
                  </div>
                </div>

                <div className="mt-8 pb-6 text-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-light text-orange-400 tracking-wide">
                      Welcome to
                    </h2>
                     <span className='text-white text-sm '  ><BouncyText text="SHAWON HOSSAIN" /></span>
                    <div className="w-48 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left Premium Content */}
            <div
              className={`space-y-12 transform transition-all duration-1500 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-32"
              }`}
            >
              {/* Premium Badge */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-2xl border border-orange-500/40 rounded-full shadow-2xl">
                  <span className="text-orange-400 font-bold flex items-center gap-3 tracking-wide">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    POLITICAL LEADER & VISIONARY
                  </span>
                </div>
              </div>

              {/* Main Premium Title */}
              <div className="space-y-8 text-center md:text-left">
                <h2 className="text-4xl hidden md:block font-light text-orange-400 tracking-wide">
                  Meet The Leader
                </h2>

                <div className="hidden md:block">
                  <BouncyText text="SHAWON HOSSAIN" />
                </div>

                <div className="w-64 h-1 mx-auto md:mx-0 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full shadow-lg" />
              </div>

              {/* Premium Description */}
              <div className="backdrop-blur-3xl bg-gradient-to-br from-black/50 to-gray-900/30 border border-orange-500/30 rounded-3xl p-10 shadow-2xl">
                <p className="text-xl text-gray-100 leading-relaxed tracking-wide">
                  Leading with{" "}
                  <span className="text-orange-400 font-black">
                    unwavering dedication
                  </span>
                  ,{" "}
                  <span className="text-red-400 font-black">
                    authentic transparency
                  </span>
                  , and{" "}
                  <span className="text-yellow-400 font-black">
                    visionary leadership
                  </span>
                  . Committed to transforming our community through{" "}
                  <span className="text-orange-400 font-black">
                    innovative solutions
                  </span>{" "}
                  and sustainable progress for generations to come.
                </p>
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-8">
                <button className="group relative px-12 py-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl font-black text-white shadow-2xl hover:shadow-orange-500/40 transform hover:scale-110 transition-all duration-500 overflow-hidden tracking-wide">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center justify-center gap-4 text-lg">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  Download CV
                  </span>
                </button>

                <button className="group px-12 py-6 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-500/40 rounded-2xl font-bold text-white hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 transform hover:scale-110 transition-all duration-500 shadow-2xl tracking-wide">
                  <span className="flex items-center justify-center gap-4 text-lg">
                    <svg
                      className="w-7 h-7 transform group-hover:rotate-12 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    GET IN TOUCH
                  </span>
                </button>
              </div>
            </div>

            {/* Right Premium Profile */}
            <div
              className={`hidden md:block relative transform transition-all duration-1500 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-32"
              }`}
            >
              <div className="relative">
                {/* Desktop Dark Premium Elements */}
                <div className="absolute -top-20 -left-20 w-32 h-32 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-4xl backdrop-blur-sm border border-orange-500/40 animate-float shadow-2xl" />
                <div className="absolute -bottom-20 -right-20 w-28 h-28 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-full backdrop-blur-sm border border-yellow-500/40 animate-pulse shadow-2xl" />
                <div className="absolute top-1/2 -right-28 w-24 h-24 bg-gradient-to-r from-red-600/30 to-pink-600/30 rounded-3xl backdrop-blur-sm border border-red-500/40 animate-float shadow-2xl" />

                {/* Main Premium Container */}
                <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-4xl p-16 shadow-2xl transform hover:scale-105 transition-all duration-700">
                  {/* Premium Profile Image */}
                  <div className="relative w-[420px] h-[560px] mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-red-500/30 to-yellow-500/40 rounded-4xl blur-3xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-4xl border border-orange-500/40 flex items-center justify-center overflow-hidden shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-orange-700 to-red-800 rounded-4xl flex items-center justify-center">
                        <div className="text-9xl text-white font-black drop-shadow-2xl">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpVF_grqBGjheT_7uuKwKPTcj25fKghns0bLF1mbTp7jfRm_ayPhjCoQXrSXlRNEVXTo&usqp=CAU" alt="" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-4xl" />
                    </div>
                  </div>

                  {/* Premium Professional Badge */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/40 rounded-3xl p-8 shadow-2xl">
                      <div className="flex items-center gap-6">
                        <div className="w-18 h-18 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white text-2xl font-black tracking-wide">
                            POLITICAL LEADER
                          </p>
                          <p className="text-orange-400 text-lg font-bold tracking-widest">
                            VISIONARY & PUBLIC SERVANT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Background Glow */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-600/15 via-red-600/15 to-yellow-600/15 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Premium Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="flex flex-col items-center space-y-5 backdrop-blur-3xl bg-gradient-to-br from-black/40 to-gray-900/30 border border-orange-500/30 rounded-3xl p-6 shadow-2xl">
          <p className="text-base font-bold text-orange-300 tracking-widest uppercase">
            Explore Journey
          </p>
          <div className="w-10 h-20 border-3 border-orange-500/60 rounded-full flex justify-center relative">
            <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mt-3 animate-pulse shadow-xl" />
          </div>
        </div>
      </div>

      {/* Premium Custom Animations */}
      <style jsx>{`
        @keyframes bounce-custom {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-30px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translateY(-20px) rotate(240deg) scale(0.95);
          }
        }

        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) scale(1);
          }
          50% {
            transform: translateY(-40px) rotateX(180deg) scale(1.15);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotateY(0deg) scale(1);
          }
          50% {
            transform: translateY(-45px) rotateY(180deg) scale(1.1);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotateZ(0deg) scale(1);
          }
          50% {
            transform: translateY(-25px) rotateZ(180deg) scale(1.05);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-35px) rotate(180deg) scale(1.2);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
          }
          50% {
            transform: translateY(-30px) rotateX(180deg) rotateY(180deg)
              scale(1.1);
          }
        }

        .animate-bounce-custom {
          animation: bounce-custom 0.8s ease-out;
        }
        .animate-float {
          animation: float 28s ease-in-out infinite;
        }
        .animate-float-0 {
          animation: float-0 22s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: float-1 25s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 20s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 24s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 26s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2.5rem;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
};

export default Header;
