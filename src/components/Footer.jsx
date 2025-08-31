import React, { useState, useEffect } from "react";

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
      icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>,
      href: "https://www.facebook.com/shawonhossain",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/20",
      name: "Facebook"
    },
    {
      icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>,
      href: "https://wa.me/8801XXXXXXXXX?text=Hello%20Shawon%20Hossain",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/20",
      name: "WhatsApp"
    },
    {
      icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>,
      href: "https://twitter.com/shawonhossain",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-400/20",
      name: "Twitter"
    },
    {
      icon: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      href: "mailto:shawon.hossain@example.com",
      color: "hover:text-red-500",
      bg: "hover:bg-red-500/20",
      name: "Email"
    },
  ];

  const developerSocialLinks = [
    {
      icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
      href: "https://www.facebook.com/akashpk41",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>,
      href: "https://wa.me/8801405700935?text=Hello%20I%20am%20interested",
      color: "text-green-500 hover:text-green-600",
    },
    {
      icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
      href: "https://linkedin.com/in/akashpk41",
      color: "text-blue-700 hover:text-blue-800",
    },
    {
      icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
      href: "https://github.com/akashpk41",
      color: "text-gray-700 hover:text-gray-800",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Gallery", href: "#Gallery" },
    { name: "Events", href: "#Events" },
    { name: "Blogs", href: "#Blogs" },
    { name: "Contact", href: "#Contact" }
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
                  ${['#f97316', '#ef4444', '#eab308', '#8b5cf6'][Math.floor(Math.random() * 4)]}40,
                  ${['#dc2626', '#f59e0b', '#f97316', '#a855f7'][Math.floor(Math.random() * 4)]}20)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 165, 0, 0.15)',
                boxShadow: `0 0 ${15 + Math.random() * 20}px rgba(249, 115, 22, 0.2)`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Top Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Section */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    {/* Logo */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                          <span className="text-white font-black text-2xl tracking-wider">SH</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white tracking-wide">
                          Shawon Hossain
                        </h3>
                        <p className="text-orange-400 font-bold text-sm tracking-widest uppercase">
                          Political Leader
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                      Leading with <span className="text-orange-400 font-bold">dedication</span>,
                      <span className="text-red-400 font-bold"> transparency</span>, and
                      <span className="text-yellow-400 font-bold"> vision</span> for a better Bangladesh.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                        <span className="text-green-400 text-lg">📍</span>
                      </div>
                      <span className="text-gray-300 font-semibold">Pabna, Rajshahi Division, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                        <span className="text-blue-400 text-lg">📞</span>
                      </div>
                      <span className="text-gray-300 font-semibold">+880 1XXX-XXXXXX</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                        <span className="text-purple-400 text-lg">✉️</span>
                      </div>
                      <span className="text-gray-300 font-semibold">shawon.hossain@example.com</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🔗</span>
                    </div>
                    Quick Links
                  </h4>
                  <div className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <div key={link.name}>
                        <a
                          href={link.href}
                          className="group flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 transform hover:translate-x-2"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="w-2 h-2 bg-orange-500/50 group-hover:bg-orange-400 rounded-full transition-colors duration-300" />
                          <span className="font-semibold">{link.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social & Connect */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🌐</span>
                    </div>
                    Stay Connected
                  </h4>

                  {/* Social Links */}
                  <div className="grid grid-cols-2 gap-3">
                    {shawonSocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-3 p-3 backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl text-gray-300 ${social.color} ${social.bg} transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <social.icon />
                        <span className="font-semibold text-sm">{social.name}</span>
                      </a>
                    ))}
                  </div>

                  {/* Newsletter Signup */}
                  <div className="mt-8 p-6 backdrop-blur-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl">
                    <h5 className="text-white font-bold mb-3">Stay Updated</h5>
                    <p className="text-gray-300 text-sm mb-4">Get latest news and updates directly in your inbox</p>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 px-4 py-2 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50"
                      />
                      <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white font-bold hover:scale-105 transition-all duration-300">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>

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
                  <p className="text-gray-400 text-sm">
                    Committed to serving the people of Bangladesh with integrity and dedication
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">

                  {/* Developer Credit */}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">Developed with</span>
                    <span className="text-red-500 text-xl animate-pulse">❤️</span>
                    <span className="text-gray-300">by</span>
                    <button
                      onClick={openModal}
                      className="font-bold text-orange-400 hover:text-orange-300 underline hover:no-underline transition-all duration-300"
                    >
                      Akash PK
                    </button>
                  </div>

                  {/* More Info Button */}
                  <button
                    onClick={openModal}
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl text-orange-400 font-bold hover:from-orange-600 hover:to-red-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-lg animate-spin">⚡</span>
                    <span>Developer Info</span>
                  </button>

                  {/* Go to Top */}
                  <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-sm font-semibold">Back to Top</span>
                    <span className="text-lg group-hover:-translate-y-1 transition-transform">⬆️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Premium Developer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl">
          <div
            className="relative w-full max-w-lg transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/90 to-gray-900/70 border border-orange-500/40 rounded-4xl shadow-2xl overflow-hidden">

              {/* Background Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl transform -translate-x-8 translate-y-8" />
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative z-10 p-8 text-center">
                {/* Profile Section */}
                <div className="relative mb-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img
                      src="https://i.ibb.co.com/GhZWtVc/1740218980929.jpg"
                      alt="Akash PK"
                      className="w-full h-full rounded-full object-cover border-4 border-orange-500 shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Status Indicator */}
                    <div className="absolute bottom-1 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h2 className="text-3xl font-black text-white mb-2">Akash PK</h2>
                  <div className="flex items-center justify-center gap-2 text-orange-400 text-lg font-bold mb-4">
                    <span className="text-xl">💻</span>
                    <span>MERN Stack Developer</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-sm font-bold text-orange-400">
                    <span className="text-lg">🚀</span>
                    <span>Since 2021</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Professional MERN stack developer specializing in full-stack web applications using
                    <span className="font-bold text-white"> MongoDB, Express.js, React, and Node.js</span>.
                  </p>

                  <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
                    <p className="text-orange-300 text-sm font-semibold flex items-center justify-center gap-2">
                      <span className="text-lg animate-pulse">⭐</span>
                      Working towards launching a software startup — very soon, InshaAllah!
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <p className="text-gray-400 text-sm mb-4">Connect with the Developer</p>
                  <div className="flex justify-center gap-3">
                    {developerSocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-white font-black hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes footer-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-40px) translateX(20px) scale(1.1) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(-30px) scale(0.9) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-50px) translateX(10px) scale(1.05) rotate(270deg);
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