import React from "react";

const DeveloperCredit = () => {
  const developerSocialLinks = [
    {
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://www.facebook.com/akashpk41",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
      href: "https://wa.me/8801405700935?text=Hello%20I%20am%20interested",
      color: "text-green-500 hover:text-green-600",
    },
    {
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://linkedin.com/in/akashpk41",
      color: "text-blue-700 hover:text-blue-800",
    },
    {
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com/akashpk41",
      color: "text-gray-700 hover:text-gray-800",
    },
  ];

  return (
    <div className="w-full mt-2 max-w-lg transform transition-all duration-300">
      <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/90 to-gray-900/70 border border-orange-500/40 rounded-4xl shadow-2xl overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-60 h-40 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl transform -translate-x-8 translate-y-8" />
        </div>

        <div className="relative z-10 p-4 text-center">
          {/* Profile Section */}
          <div className="relative mb-8">
            <div className="relative w-64 h-64 mx-auto mb-6">
              <img
                src="https://i.ibb.co.com/GhZWtVc/1740218980929.jpg"
                alt="Akash PK"
                className="w-full h-full rounded-full object-cover border-4 border-orange-500 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />

              {/* Status Indicator */}
              <div className="absolute bottom-1 right-12 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            {/* Name & Title */}
            <h2 className="text-5xl font-black text-white mb-2">Akash PK</h2>
            <div className="flex items-center justify-center gap-2 text-orange-400 text-xl  font-bold mb-4">
              <span className="">💻</span>
              <span>MERN Stack Developer</span>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-base font-bold text-orange-400">
              <span className="text-lg">🚀</span>
              <span>Since 2021</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 space-y-4">
            <p className="text-gray-200 text-sm leading-relaxed">
              Professional MERN stack developer specializing in full-stack web
              applications using
              <span className="font-bold text-green-400">
                {" "}
                MongoDB, Express.js, React, and Node.js
              </span>
              .
            </p>

            <div className="p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
              <p className="text-orange-400 text-sm font-semibold flex items-center justify-center gap-2">
                <span className="text-lg animate-pulse">⭐</span>
                Working towards launching a software startup — very soon,
                InshaAllah!
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-2">
            <p className="text-gray-200 text-base mb-4">
              Connect with the Developer
            </p>
            <div className="flex -mt-6 p-6 justify-center gap-3">
              {developerSocialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14  h-14 backdrop-blur-xl bg-white hover:bg-white/20 border border-white/20 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCredit;
