import React, { useState, useEffect } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

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
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.417-3.324c.876-.807 2.027-1.297 3.324-1.297s2.448.49 3.324 1.297c.927.876 1.417 2.027 1.417 3.324s-.49 2.448-1.417 3.324c-.876.807-2.027 1.297-3.324 1.297zm7.83-9.605c-.49 0-.876-.386-.876-.876 0-.49.386-.876.876-.876.49 0 .876.386.876.876 0 .49-.386.876-.876.876zm-4.262 1.53c-1.917 0-3.324 1.407-3.324 3.324 0 1.917 1.407 3.324 3.324 3.324 1.917 0 3.324-1.407 3.324-3.324 0-1.917-1.407-3.324-3.324-3.324z"/>
        </svg>
      ),
      color: "from-pink-600 to-purple-800",
      hoverColor: "hover:from-pink-500 hover:to-purple-700"
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: "from-sky-600 to-blue-800",
      hoverColor: "hover:from-sky-500 hover:to-blue-700"
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: "from-green-600 to-emerald-800",
      hoverColor: "hover:from-green-500 hover:to-emerald-700"
    }
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
                  ${['#3b82f6', '#ef4444', '#10b981', '#8b5cf6'][Math.floor(Math.random() * 4)]}40,
                  ${['#1d4ed8', '#dc2626', '#059669', '#7c3aed'][Math.floor(Math.random() * 4)]}20)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: `0 0 ${12 + Math.random() * 20}px rgba(59, 130, 246, 0.3)`
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
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              CONTACT US
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference together? Reach out and let's build a better future
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
                Send Us a <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-gray-300 font-semibold text-sm tracking-wide">Full Name</label>
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
                  <label className="text-gray-300 font-semibold text-sm tracking-wide">Phone Number</label>
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
                  <label className="text-gray-300 font-semibold text-sm tracking-wide">Email Address</label>
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
                  <label className="text-gray-300 font-semibold text-sm tracking-wide">Message</label>
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
                  className={`w-full py-5 rounded-2xl font-black text-white text-lg tracking-wide shadow-2xl transform transition-all duration-500 relative overflow-hidden ${
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
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {submitSuccess ? (
                      <>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        GET IN TOUCH
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
                  Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Information</span>
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Phone</div>
                      <div className="text-white font-bold text-lg">+880 1XXX-XXXXXX</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Email</div>
                      <div className="text-white font-bold text-lg">contact@example.com</div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Office</div>
                      <div className="text-white font-bold text-lg">Pabna, Rajshahi Division</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-blue-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-3xl font-black text-white mb-8">
                  Follow <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={social.name}
                      className={`group relative p-6 bg-gradient-to-r ${social.color} rounded-2xl shadow-xl ${social.hoverColor} transform hover:scale-110 transition-all duration-500 overflow-hidden`}
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
                              animationDuration: `${3 + Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="text-white group-hover:scale-125 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <span className="text-white font-bold text-sm tracking-wide">{social.name}</span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                    </button>
                  ))}
                </div>

                {/* Quick Contact Methods */}
                <div className="mt-8 grid gap-4">
                                    <button className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-white hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-green-500/40">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WHATSAPP CHAT
                  </button>

                  <button className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-white hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-blue-500/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    CALL NOW
                  </button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
                <h4 className="text-2xl font-black text-white mb-6">
                  Office <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Hours</span>
                </h4>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-red-400 font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-blue-500/30 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* CTA Background Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-cta-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${8 + Math.random() * 16}px`,
                      height: `${8 + Math.random() * 16}px`,
                      background: `radial-gradient(circle,
                        ${['#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)]}60,
                        transparent 70%)`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${8 + Math.random() * 6}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <h4 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Ready to Make a <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Difference?</span>
                </h4>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's work together to build a stronger, more prosperous community for everyone.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl font-black text-white text-lg shadow-2xl hover:shadow-blue-500/40 transform hover:scale-110 transition-all duration-500 tracking-wide overflow-hidden">
                    {/* Premium Button Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-premium-particle opacity-70"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                          }}
                        />
                      ))}
                    </div>
                    <span className="relative z-10">GET IN TOUCH</span>

                    {/* Button hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500" />
                  </button>

                  <button className="px-12 py-5 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-blue-500/40 rounded-2xl font-bold text-white hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 transform hover:scale-110 transition-all duration-500 tracking-wide">
                    SCHEDULE MEETING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes contact-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(15px) scale(1.05) rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) translateX(-25px) scale(0.95) rotate(180deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-40px) translateX(10px) scale(1.1) rotate(270deg);
            opacity: 0.5;
          }
        }

        @keyframes message-float {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-25px) rotateX(180deg) rotateY(180deg);
            opacity: 0.4;
          }
        }

        @keyframes button-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1);
            opacity: 1;
          }
        }

        @keyframes social-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) translateX(8px) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes cta-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes premium-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(0) rotate(0deg);
            opacity: 0;
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(-5px) scale(1.2) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-15px) translateX(8px) scale(0.8) rotate(270deg);
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