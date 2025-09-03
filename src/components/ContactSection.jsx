import React, { useState, useEffect } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      url: "https://www.facebook.com/muhammadshawonhossain34",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "from-pink-600 to-purple-700",
      hoverColor: "hover:from-pink-400 hover:to-purple-500",
      url: "https://www.instagram.com/shawon._34/",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      url: "https://wa.me/8801768298331?text=Hello%20Shawon!",
    },
    {
      name: "Messenger",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z" />
        </svg>
      ),
      color: "from-blue-600 to-purple-700",
      hoverColor: "hover:from-blue-400 hover:to-purple-500",
      url: "https://m.me/muhammadshawonhossain34",
    },
    {
      name: "Telegram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-300 hover:to-blue-500",
      url: "https://t.me/your-username", // আপনার Telegram username
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-500 hover:to-red-600",
      url: "https://youtube.com/",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "from-gray-800 to-black",
      hoverColor: "hover:from-gray-700 hover:to-gray-900",
      url: "https://twitter.com/",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      url: "https://linkedin.com/",
    },
  ];

  return (
    <div className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Contact-themed Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-contact-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${12 + Math.random() * 50}px`,
                height: `${12 + Math.random() * 50}px`,
                background: `linear-gradient(45deg,
                  ${
                    ["#3b82f6", "#ef4444", "#10b981", "#8b5cf6"][
                      Math.floor(Math.random() * 4)
                    ]
                  }40,
                  ${
                    ["#1d4ed8", "#dc2626", "#059669", "#7c3aed"][
                      Math.floor(Math.random() * 4)
                    ]
                  }20)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                boxShadow: `0 0 ${
                  12 + Math.random() * 20
                }px rgba(59, 130, 246, 0.3)`,
              }}
            />
          ))}
        </div>

        {/* Message-themed Icons */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`message-${i}`}
              className="absolute opacity-10 animate-message-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + ((i * 11) % 50)}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
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
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-2xl border border-blue-500/40 rounded-full shadow-2xl mb-8">
            <span className="text-blue-400 font-bold text-lg tracking-wide flex items-center gap-3">
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              CONTACT ME
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TOUCH
            </span>
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed tracking-wide">
            চলুন,{" "}
            <span className="text-orange-400 font-black">একসাথে দেশ গড়ি</span>।
            পরিবর্তনের পথে{" "}
            <span className="text-yellow-400 font-black">আমরা প্রস্তুত</span>—{" "}
            <span className="text-red-400 font-black">
              আপনার সহযোগিতাই পারে
            </span>{" "}
            একটি{" "}
            <span className="text-orange-400 font-black">
              উন্নত, সমৃদ্ধ ভবিষ্যতের
            </span>{" "}
            ভিত্তি গড়তে।
          </p>
        </div>

        {/* Contact Content */}
        <div
          className={`transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-blue-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-black text-white mb-8">
                Send Me a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Message
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-gray-300 font-semibold text-lg tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gradient-to-r from-black/40 to-gray-900/40 border border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-gray-300 font-semibold text-lg tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gradient-to-r from-black/40 to-gray-900/40 border border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-gray-300 font-semibold text-lg tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gradient-to-r from-black/40 to-gray-900/40 border border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-gray-300 font-semibold text-lg tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-gradient-to-r from-black/40 to-gray-900/40 border border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`w-full py-5 rounded-2xl font-black cursor-pointer text-white text-lg tracking-wide shadow-2xl transform transition-all duration-500 relative overflow-hidden ${
                    submitSuccess
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/40"
                      : isSubmitting
                      ? "bg-gradient-to-r from-gray-600 to-gray-700"
                      : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-blue-500/40 hover:scale-105"
                  }`}
                >
                  {/* Button Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-button-particle opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {submitSuccess ? (
                      <>
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        MESSAGE SENT!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-blue-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-3xl font-black text-white mb-8">
                  Contact{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Information
                  </span>
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-300 text-lg">Phone</div>
                      <div className="text-white font-bold text-lg">
                        +880 1768-298331
                      </div>
                      <div className="text-white font-bold text-lg">
                        +880 1955-055940
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-300 text-lg">Email</div>
                      <div className="text-white font-bold text-sm">
                        shawonahmed6505@gmail.com
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-300 text-lg">Address</div>
                      <div className="text-white font-bold text-lg">
                        Pabna, Rajshahi Division
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-blue-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-3xl font-black text-white mb-8">
                  Follow{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Me
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-6 bg-gradient-to-r ${social.color} rounded-2xl shadow-xl ${social.hoverColor} transform hover:scale-110 transition-all duration-500 overflow-hidden cursor-pointer block`}
                    >
                      {/* Social Button Particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-social-particle opacity-40"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 3}s`,
                              animationDuration: `${3 + Math.random() * 2}s`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="text-white group-hover:scale-125 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <span className="text-white font-bold text-lg tracking-wide">
                          {social.name}
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                    </a>
                  ))}
                </div>
                {/* Quick Contact Methods */}
                <div className="mt-8 grid gap-4">
                  <a
                    href="https://wa.me/8801768298331?text=Hello%20Shawon!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-white hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-green-500/40 cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WHATSAPP CHAT
                  </a>

                  <a
                    href="https://m.me/muhammadshawonhossain34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white hover:scale-105 transform transition-all duration-300 shadow-xl shadow-blue-500/40 cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z" />
                    </svg>
                    MESSENGER CHAT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes contact-float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(15px) scale(1.05)
              rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) translateX(-25px) scale(0.95)
              rotate(180deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-40px) translateX(10px) scale(1.1)
              rotate(270deg);
            opacity: 0.5;
          }
        }

        @keyframes message-float {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-25px) rotateX(180deg) rotateY(180deg);
            opacity: 0.4;
          }
        }

        @keyframes button-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1);
            opacity: 1;
          }
        }

        @keyframes social-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) translateX(8px) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes cta-float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes premium-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(0) rotate(0deg);
            opacity: 0;
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(-5px) scale(1.2)
              rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-15px) translateX(8px) scale(0.8)
              rotate(270deg);
            opacity: 0.6;
          }
        }

        .animate-contact-float {
          animation: contact-float 12s ease-in-out infinite;
        }

        .animate-message-float {
          animation: message-float 18s ease-in-out infinite;
        }

        .animate-button-particle {
          animation: button-particle 4s ease-in-out infinite;
        }

        .animate-social-particle {
          animation: social-particle 5s ease-in-out infinite;
        }

        .animate-cta-float {
          animation: cta-float 10s ease-in-out infinite;
        }

        .animate-premium-particle {
          animation: premium-particle 3s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
