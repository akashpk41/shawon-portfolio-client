import React, { useState, useEffect } from 'react';

// Particle System Component
const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="relative">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5">
        <div className="w-full h-full rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white font-bold text-lg">SH</span>
        </div>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse"></div>
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
      Shawon Hossain
    </span>
  </div>
);

// Navigation Link Component
const NavLink = ({ href, children, isActive = false }) => (
  <a
    href={href}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
      isActive
        ? 'text-blue-300 bg-white/10'
        : 'text-gray-300 hover:text-white hover:bg-white/5'
    }`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
  </a>
);

// Premium Glow Button Component
const PremiumGlowButton = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: {
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      glow: 'shadow-blue-500/25',
      text: 'text-white'
    },
    secondary: {
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      glow: 'shadow-purple-500/25',
      text: 'text-white'
    }
  };

  const style = variants[variant];

  return (
    <button className={`relative group ${className}`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${style.gradient} rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
      <div className={`relative px-8 py-4 bg-gradient-to-r ${style.gradient} rounded-xl leading-none flex items-center`}>
        <div className="absolute inset-0 bg-black/20 rounded-xl backdrop-blur-sm"></div>
        <span className={`relative ${style.text} font-semibold text-lg transition-all duration-300 group-hover:scale-105`}>
          {children}
        </span>
      </div>
    </button>
  );
};

// Bounce Text Component
const BounceText = ({ text }) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start">
      {text.split(' ').map((word, wordIndex) => (
        <div key={wordIndex} className="flex mr-4 mb-2">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block animate-bounce text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                animationDelay: `${(wordIndex * word.length + charIndex) * 0.1}s`,
                animationDuration: '5s',
                animationIterationCount: 'infinite'
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, navItems }) => (
  <div className={`
    lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out z-50
    ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
  `}>
    <div className="mx-4 mt-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="p-6 space-y-4">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-center font-medium"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item}
          </a>
        ))}
        <div className="pt-4 border-t border-white/10">
          <PremiumGlowButton variant="primary" className="w-full">
            Contact Me
          </PremiumGlowButton>
        </div>
      </div>
    </div>
  </div>
);

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['Home', 'Gallery', 'Blogs', 'About', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center space-x-2 bg-black/20 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                isActive={item === 'Home'}
              >
                {item}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PremiumGlowButton variant="secondary">
              Contact Me
            </PremiumGlowButton>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
    </header>
  );
};

// Hero Section Component
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Political Leader & Community Advocate";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Mobile Image (Shows on mobile first) */}
          <div className="lg:hidden w-full max-w-sm mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
              <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl p-1 border border-white/20">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">SH</span>
                    </div>
                    <p className="text-gray-300">Shawon Hossain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full text-blue-300 text-sm font-semibold border border-blue-500/20 animate-pulse">
                Welcome to my Portfolio
              </span>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl lg:text-4xl font-light text-gray-300 mb-2">
                Hello, I'm
              </h1>
              <BounceText text="SHAWON HOSSAIN" />
            </div>

            <div className="mb-8">
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <span className="text-xl lg:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </div>
            </div>

            <div className="mb-10 max-w-2xl mx-auto lg:mx-0">
              <p className="text-gray-400 text-lg leading-relaxed">
                Dedicated to serving the community with integrity, transparency, and unwavering commitment.
                Building bridges, fostering unity, and creating positive change for a better tomorrow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PremiumGlowButton variant="primary" className="w-full sm:w-auto">
                Explore My Work
              </PremiumGlowButton>
              <PremiumGlowButton variant="secondary" className="w-full sm:w-auto">
                Get In Touch
              </PremiumGlowButton>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-96 bg-black/30 backdrop-blur-xl rounded-3xl p-2 border border-white/20">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">SH</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Shawon Hossain</h3>
                    <p className="text-gray-300">Political Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Main Component
export default function ShawonPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <ParticleSystem />
      <Header />
      <main className="relative z-10">
        <Hero />
      </main>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}