import React, { useState, useEffect } from "react";
import DeveloperCredit from "./DeveloperCredit";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const shawonSocialLinks = [
    {
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      href: "https://www.facebook.com/shawonhossain",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/20",
      name: "Facebook",
    },
    {
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
      href: "https://wa.me/8801XXXXXXXXX?text=Hello%20Shawon%20Hossain",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/20",
      name: "WhatsApp",
    },
    {
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: "https://twitter.com/shawonhossain",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-400/20",
      name: "Twitter",
    },
    {
      icon: () => (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      href: "mailto:shawon.hossain@example.com",
      color: "hover:text-red-500",
      bg: "hover:bg-red-500/20",
      name: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Gallery", href: "#Gallery" },
    { name: "Events", href: "#Events" },
    { name: "Blogs", href: "#Blogs" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Political themed particles */}
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-footer-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 30}px`,
                height: `${8 + Math.random() * 30}px`,
                background: `linear-gradient(135deg,
                  ${
                    ["#f97316", "#ef4444", "#eab308", "#8b5cf6"][
                      Math.floor(Math.random() * 4)
                    ]
                  }40,
                  ${
                    ["#dc2626", "#f59e0b", "#f97316", "#a855f7"][
                      Math.floor(Math.random() * 4)
                    ]
                  }20)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
                borderRadius: Math.random() > 0.5 ? "50%" : "20%",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 165, 0, 0.15)",
                boxShadow: `0 0 ${
                  15 + Math.random() * 20
                }px rgba(249, 115, 22, 0.2)`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-12" />

              {/* Bottom Section */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <p className="text-xl text-gray-300 mb-2">
                    © 2025{" "}
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-black">
                      Shawon Hossain
                    </span>{" "}
                    — All Rights Reserved
                  </p>
                  <p className="text-gray-300 text-sm">
                    Committed to serving the people of Bangladesh with integrity
                    and dedication
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Developer Credit */}
                  <button className="group flex items-center gap-2 px-6 py-3  bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl text-orange-400 font-bold hover:from-orange-600 hover:to-red-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105">
                    <span className="text-xl animate-spin">⚡</span>
                    <span className="text-white text-xl">Developed By</span>
                    <span className="decoration-wavy underline font-bold text-3xl ">
                      Akash PK
                    </span>
                  </button>

                  {/* Developer */}

{/* <DeveloperCredit /> */}



                  {/* Go to Top */}
                  <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-base font-semibold">Back to Top</span>
                    <span className="text-lg group-hover:-translate-y-1 transition-transform">
                      ⬆️
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


      {/* Custom Animations */}
      <style jsx>{`
        @keyframes footer-float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-40px) translateX(20px) scale(1.1)
              rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(-30px) scale(0.9)
              rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-50px) translateX(10px) scale(1.05)
              rotate(270deg);
            opacity: 0.3;
          }
        }

        .animate-footer-float {
          animation: footer-float 16s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </>
  );
};

export default Footer;
