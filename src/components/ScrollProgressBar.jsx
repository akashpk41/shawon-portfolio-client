import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));

      // Show progress bar after scrolling 50px
      setIsVisible(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Custom Scroll Bar Styles */}
      <style jsx global>{`
        /* Custom Scrollbar for Webkit browsers */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(249, 115, 22, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #f97316, #ef4444, #dc2626, #ea580c);
          border-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          box-shadow:
            0 0 15px rgba(249, 115, 22, 0.4),
            0 0 30px rgba(239, 68, 68, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #fb923c, #f87171, #ef4444, #f97316);
          box-shadow:
            0 0 25px rgba(249, 115, 22, 0.6),
            0 0 50px rgba(239, 68, 68, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
        }

        ::-webkit-scrollbar-thumb:active {
          background: linear-gradient(135deg, #fed7aa, #fca5a5, #f87171, #fb923c);
          box-shadow:
            0 0 35px rgba(249, 115, 22, 0.8),
            0 0 70px rgba(239, 68, 68, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        /* For Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #f97316 rgba(0, 0, 0, 0.1);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          ::-webkit-scrollbar {
            width: 8px;
          }
        }

        @media (max-width: 480px) {
          ::-webkit-scrollbar {
            width: 6px;
          }
        }
      `}</style>

      {/* Progress Counter - Premium Style */}
      <div className={`fixed top-6 right-6 z-[9999] transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

          {/* Main Container */}
          <div className="relative bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-xl border border-orange-500/30 rounded-full px-4 py-2 shadow-2xl">
            <div className="flex items-center gap-2">
              {/* Animated Icon */}
              <div className="relative">
                <svg className="w-4 h-4 text-orange-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" className="opacity-20"/>
                  <path d="m22 12c0-5.5-4.5-10-10-10" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse opacity-60"></div>
              </div>

              {/* Progress Text */}
              <span className="text-sm font-bold bg-gradient-to-r from-orange-300 via-red-300 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap">
                {scrollProgress.toFixed(2)}%
              </span>
            </div>

            {/* Micro Progress Ring */}
            <div className="absolute -top-1 -right-1 w-6 h-6">
              <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 24 24">
                <circle
                  cx="12" cy="12" r="10"
                  fill="none"
                  stroke="rgba(249, 115, 22, 0.2)"
                  strokeWidth="2"
                />
                <circle
                  cx="12" cy="12" r="10"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="62.83"
                  strokeDashoffset={62.83 - (62.83 * scrollProgress) / 100}
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Progress Bar */}
      <div className={`fixed left-0 right-0 z-[9998] h-1.5 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} style={{ top: 'var(--navbar-height, 80px)' }}>

        {/* Background Track with Premium Effect */}
        <div className="w-full h-full bg-gradient-to-r from-slate-900/30 via-gray-800/20 to-slate-900/30 backdrop-blur-sm border-b border-orange-500/10">

          {/* Progress Fill with Multiple Layers */}
          <div
            className="h-full relative overflow-hidden transition-all duration-300 ease-out"
            style={{
              width: `${scrollProgress}%`,
              background: 'linear-gradient(90deg, #f97316 0%, #ef4444 25%, #dc2626 50%, #b91c1c 75%, #991b1b 100%)',
              boxShadow: `
                0 0 20px rgba(249, 115, 22, 0.6),
                0 0 40px rgba(239, 68, 68, 0.3),
                0 0 60px rgba(220, 38, 38, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            {/* Animated Shimmer Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
              style={{
                animation: 'slideShimmer 2s ease-in-out infinite'
              }}
            ></div>

            {/* Energy Pulse Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-orange-300/20 via-red-300/30 to-yellow-300/20"
              style={{
                animation: 'energyPulse 1.5s ease-in-out infinite alternate'
              }}
            ></div>

            {/* Moving Light Streak */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12"
              style={{
                animation: 'lightStreak 3s ease-in-out infinite'
              }}
            ></div>

            {/* Progress Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: '25%',
                    animation: `particle${i} ${2 + i * 0.3}s ease-in-out infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className={`fixed bottom-8 right-8 z-[9999] transition-all duration-500 transform ${
        scrollProgress > 20 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75'
      }`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-110 overflow-hidden"
        >
          {/* Button Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

          {/* Button Content */}
          <div className="relative flex items-center justify-center h-full">
            <svg
              className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>

          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-150"></div>
        </button>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes slideShimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
            opacity: 0;
          }
        }

        @keyframes energyPulse {
          0% {
            opacity: 0.2;
            transform: scaleY(1);
          }
          100% {
            opacity: 0.6;
            transform: scaleY(1.2);
          }
        }

        @keyframes lightStreak {
          0% {
            transform: translateX(-150%) skewX(-12deg);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(250%) skewX(-12deg);
            opacity: 0;
          }
        }

        @keyframes particle0 {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-2px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes particle1 {
          0%, 100% {
            transform: translateY(0) scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-3px) scale(1.3);
            opacity: 0.9;
          }
        }

        @keyframes particle2 {
          0%, 100% {
            transform: translateY(0) scale(1.1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-1px) scale(1.4);
            opacity: 1;
          }
        }

        @keyframes particle3 {
          0%, 100% {
            transform: translateY(0) scale(0.9);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-4px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes particle4 {
          0%, 100% {
            transform: translateY(0) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-2px) scale(1.5);
            opacity: 1;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .fixed {
            position: fixed !important;
          }
        }

        @media (max-width: 480px) {
          .z-\\[9999\\] {
            z-index: 9999 !important;
          }
        }
      `}</style>

      {/* CSS Variables for responsive navbar height */}
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            --navbar-height: 80px;
          }

          @media (max-width: 1024px) {
            :root {
              --navbar-height: 75px;
            }
          }

          @media (max-width: 768px) {
            :root {
              --navbar-height: 70px;
            }
          }

          @media (max-width: 480px) {
            :root {
              --navbar-height: 65px;
            }
          }
        `
      }} />
    </>
  );
};

export default ScrollProgressBar;