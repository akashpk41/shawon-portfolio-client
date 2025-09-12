import React, { useState, useEffect } from "react";

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "বাংলাদেশের রাজনৈতিক সংস্কার: একটি নতুন দিগন্ত",
      slug: "political-reform-bangladesh-new-horizon",
      excerpt: "গণতান্ত্রিক ব্যবস্থার উন্নয়নে প্রয়োজনীয় সংস্কারের রূপরেখা এবং এর বাস্তবায়নের পথ নিয়ে বিস্তারিত আলোচনা।",
      content: "গণতন্ত্র শুধু একটি রাজনৈতিক ব্যবস্থা নয়, এটি একটি জীবনযাত্রার পদ্ধতি। আমাদের দেশে গণতান্ত্রিক প্রতিষ্ঠানগুলোর শক্তিশালীকরণ এবং স্বচ্ছতা বৃদ্ধির মাধ্যমে জনগণের কাছে জবাবদিহিতা নিশ্চিত করতে হবে।",
      author: "শাওন হোসেন",
      publishDate: "২৮ আগস্ট ২০২৫",
      readTime: "১ মিনিট",
      category: "Politics",
      tags: ["রাজনীতি", "সংস্কার", "গণতন্ত্র", "উন্নয়ন"],
      image: "https://i.ibb.co.com/vxG78PNQ/518276804-2018625852279392-4450974725976609330-n.jpg",
      featured: true,
      views: "১২৫০",
      likes: "৮৯"
    },
    {
      id: 2,
      title: "তরুণ প্রজন্মের ক্ষমতায়ন: ভবিষ্যতের বাংলাদেশ গড়ায় যুবসমাজের ভূমিকা",
      slug: "youth-empowerment-future-bangladesh",
      excerpt: "তরুণদের নেতৃত্ব বিকাশ, দক্ষতা উন্নয়ন এবং কর্মসংস্থান সৃষ্টির মাধ্যমে কিভাবে একটি উন্নত বাংলাদেশ গড়ে তোলা সম্ভব।",
      content: "আমাদের দেশের মোট জনসংখ্যার একটি বিশাল অংশ তরুণ। এই তরুণ শক্তিকে সঠিকভাবে কাজে লাগাতে পারলে আমরা একটি সমৃদ্ধ ও টেকসই ভবিষ্যত নিশ্চিত করতে পারি।",
      author: "শাওন হোসেন",
      publishDate: "২৫ আগস্ট ২০২৫",
      readTime: "১ মিনিট",
      category: "Youth Development",
      tags: ["যুব উন্নয়ন", "শিক্ষা", "কর্মসংস্থান", "নেতৃত্ব"],
      image: "https://i.ibb.co.com/84g2TN38/517717042-2018626632279314-6576925167024189668-n.jpg",
      featured: false,
      views: "৯৮৫",
      likes: "৭২"
    },
    {
      id: 3,
      title: "স্থানীয় অর্থনীতি শক্তিশালীকরণ: পাবনার উন্নয়ন মডেল",
      slug: "local-economy-strengthening-pabna-development",
      excerpt: "স্থানীয় সম্পদের সদ্ব্যবহার, ক্ষুদ্র ও মাঝারি শিল্পের বিকাশ এবং কৃষি আধুনিকীকরণের মাধ্যমে আঞ্চলিক অর্থনৈতিক উন্নয়নের কৌশল।",
      content: "পাবনা জেলার ভৌগোলিক অবস্থান এবং প্রাকৃতিক সম্পদের কথা বিবেচনা করলে এই অঞ্চলে একটি শক্তিশালী স্থানীয় অর্থনীতি গড়ে তোলার অসীম সম্ভাবনা রয়েছে।",
      author: "শাওন হোসেন",
      publishDate: "২০ আগস্ট ২০২৫",
      readTime: "১ মিনিট",
      category: "Economics",
      tags: ["অর্থনীতি", "স্থানীয় উন্নয়ন", "কৃষি", "শিল্প"],
      image: "https://i.ibb.co.com/jk5TtY1F/508146888-2000187904123187-9147168598433342044-n.jpg",
      featured: false,
      views: "১১২০",
      likes: "৯৫"
    }
  ];

  const categories = [
    { id: "all", name: "All", count: blogPosts.length },
    { id: "Politics", name: "রাজনীতি", count: blogPosts.filter(post => post.category === "Politics").length },
    { id: "Youth Development", name: "যুব উন্নয়ন", count: blogPosts.filter(post => post.category === "Youth Development").length },
    { id: "Economics", name: "অর্থনীতি", count: blogPosts.filter(post => post.category === "Economics").length }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Politics": "from-red-500 to-pink-600",
      "Youth Development": "from-green-500 to-emerald-600",
      "Economics": "from-blue-500 to-indigo-600"
    };
    return colors[category] || "from-orange-500 to-red-600";
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div  id="Blogs" className="relative py-18 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Enhanced Blog Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blog-themed Particles */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-blog-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 35}px`,
                height: `${8 + Math.random() * 35}px`,
                background: `linear-gradient(135deg,
                  ${['#f97316', '#ef4444', '#eab308', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 6)]}50,
                  ${['#dc2626', '#f59e0b', '#f97316', '#a855f7', '#0891b2', '#059669'][Math.floor(Math.random() * 6)]}30)`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 12}s`,
                borderRadius: Math.random() > 0.6 ? '50%' : '15%',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 165, 0, 0.15)',
                boxShadow: `0 0 ${18 + Math.random() * 25}px rgba(249, 115, 22, 0.25)`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        {/* Document-themed Floating Icons */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={`doc-${i}`}
              className="absolute opacity-10 animate-document-float"
              style={{
                left: `${8 + i * 10}%`,
                top: `${20 + ((i * 19) % 60)}%`,
                animationDelay: `${i * 1.2}s`,
              }}
            >
              <div className="w-14 h-16 bg-gradient-to-b from-orange-600/40 to-red-600/40 rounded-lg backdrop-blur-sm border border-orange-500/30 relative">
                <div className="absolute top-2 left-2 right-2 space-y-1">
                  <div className="h-1 bg-orange-400/60 rounded"></div>
                  <div className="h-1 bg-orange-400/40 rounded w-3/4"></div>
                  <div className="h-1 bg-orange-400/50 rounded w-1/2"></div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              BLOGS & NEWS
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Latest <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">INSIGHTS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            রাজনৈতিক দর্শন, সমাজ উন্নয়ন এবং জাতীয় অগ্রগতির বিষয়ে চিন্তাভাবনা
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex justify-center mb-16 transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-3 shadow-2xl">
            <div className="flex flex-wrap justify-around gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative cursor-pointer px-6 py-3 rounded-2xl font-bold transition-all duration-500 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-red-600/20"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category.name}
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activeCategory === category.id
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

        {/* Featured Blog Post */}
        {featuredPost && activeCategory === "all" && (
          <div
            className={`mb-20 transform transition-all duration-1200 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl font-black text-orange-400 mb-4">ফিচার্ড আর্টিকেল</h3>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </div>

            <div className="group relative cursor-pointer" onClick={() => openModal(featuredPost)}>
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 rounded-4xl blur-2xl transition-all duration-700 animate-pulse" />

              <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border border-orange-500/40 group-hover:border-orange-400/80 rounded-4xl overflow-hidden shadow-2xl transition-all duration-700 transform group-hover:scale-105">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-xl">
                      <span className="text-white text-sm font-bold flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ফিচার্ড
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-6 right-6 px-3 py-1 bg-gradient-to-r ${getCategoryColor(featuredPost.category)} rounded-full shadow-xl`}>
                      <span className="text-white text-sm font-bold">{featuredPost.category}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-orange-400 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-base font-semibold">{featuredPost.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-base font-semibold">{featuredPost.readTime} পড়তে</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-black text-green-400 mb-6 leading-tight group-hover:text-orange-300 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-white font-black text-lg">শ</span>
                        </div>
                        <div>
                          <p className="text-white font-bold">{featuredPost.author}</p>
                          <p className="text-gray-400 text-sm">লেখক</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-sm">{featuredPost.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-sm">{featuredPost.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Posts Grid */}
        <div
          className={`transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === "all" ? regularPosts : filteredPosts).map((post, index) => (
              <div
                key={post.id}
                className="group relative cursor-pointer transform hover:scale-105 transition-all duration-700 hover:z-10"
                onClick={() => openModal(post)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${getCategoryColor(post.category)} opacity-0 group-hover:opacity-25 rounded-4xl blur-xl transition-all duration-500 animate-pulse`} />

                {/* Main Card */}
                <div className="relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border border-white/20 group-hover:border-orange-400/60 rounded-4xl overflow-hidden shadow-2xl transition-all duration-500">

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} rounded-full shadow-xl`}>
                      <span className="text-white text-sm font-bold">{post.category}</span>
                    </div>

                    {/* Read Time */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full">
                      <span className="text-white text-sm font-semibold">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-orange-400 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-semibold">{post.publishDate}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-green-400 mb-3 leading-tight group-hover:text-orange-300 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3 text-gray-400">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-base">{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-base">{post.likes}</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full group-hover:from-orange-500/40 group-hover:to-red-500/40 transition-all duration-300">
                        <span className="text-orange-400 text-base font-bold">Read More</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-4xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="group cursor-pointer relative px-12 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl font-black text-white shadow-2xl hover:shadow-orange-500/40 transform hover:scale-110 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-3 text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
           Load More Blogs
            </span>
          </button>
        </div>
      </div>

      {/* Premium Blog Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center p-0 bg-black/80 backdrop-blur-2xl">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-3xl bg-gradient-to-br from-black/90 to-gray-900/70 border border-orange-500/40 rounded-4xl shadow-2xl">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-6 right-6 z-20 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Blog Header Image */}
            <div className="relative h-80 overflow-hidden rounded-t-4xl">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

              {/* Category Badge */}
              <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedBlog.category)} rounded-full shadow-xl`}>
                <span className="text-white font-bold">{selectedBlog.category}</span>
              </div>

              {/* Featured Badge */}
              {selectedBlog.featured && (
                <div className="absolute top-6 right-20 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-xl">
                  <span className="text-white font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ফিচার্ড
                  </span>
                </div>
              )}
            </div>

            {/* Blog Content */}
            <div className="p-8 lg:p-12">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-orange-400 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">{selectedBlog.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">{selectedBlog.readTime} পড়তে</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="font-semibold">{selectedBlog.views} ভিউ</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                {selectedBlog.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 p-4 backdrop-blur-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-2xl">শ</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{selectedBlog.author}</p>
                  <p className="text-orange-400 font-semibold">রাজনৈতিক নেতা ও লেখক</p>
                </div>
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-gray-200 leading-relaxed mb-8 italic border-l-4 border-orange-500 pl-6 bg-orange-500/10 py-4 rounded-r-2xl">
                  {selectedBlog.excerpt}
                </p>

                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                  <p>{selectedBlog.content}</p>

                  <p>
                    এই লক্ষ্য অর্জনের জন্য আমাদের প্রয়োজন একটি সুদূরপ্রসারী পরিকল্পনা এবং তার বাস্তবায়নে দৃঢ় প্রতিজ্ঞা।
                    শুধুমাত্র রাজনৈতিক প্রতিশ্রুতি নয়, বরং কার্যকর পদক্ষেপের মাধ্যমে আমরা একটি উন্নত ভবিষ্যৎ গড়তে পারি।
                  </p>

                  <blockquote className="border-l-4 border-orange-500 pl-6 bg-orange-500/10 py-4 rounded-r-2xl italic">
                    <p className="text-orange-300 text-xl">
                      "পরিবর্তন শুধু একটি স্বপ্ন নয়, এটি আমাদের সম্মিলিত প্রচেষ্টার ফসল।
                      প্রতিটি নাগরিকের অংশগ্রহণেই গড়ে উঠবে একটি সমৃদ্ধ বাংলাদেশ।"
                    </p>
                  </blockquote>

                  <p>
                    আমাদের এই যাত্রায় সবচেয়ে গুরুত্বপূর্ণ হলো জনগণের সাথে একাত্মতা এবং তাদের প্রকৃত সমস্যার সমাধান।
                    রাজনীতি হওয়া উচিত জনসেবার মাধ্যম, ক্ষমতার লোভের বিষয় নয়।
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-10 mb-8">
                {selectedBlog.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 rounded-full font-semibold hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share & Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
                <button className="flex-1 cursor-pointer px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl font-bold text-white shadow-xl hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    <svg
  className="w-5 h-5"
  fill="currentColor"
  viewBox="0 0 24 24"
  aria-hidden="true"
  role="img"
>
  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
</svg>

                   Share
                  </span>
                </button>

                <button className="flex-1 cursor-pointer px-6 py-4 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-500/40 rounded-2xl font-bold text-white hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Like ({selectedBlog.likes})
                  </span>
                </button>

                <button className="flex-1 cursor-pointer px-6 py-4 backdrop-blur-2xl bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-500/40 rounded-2xl font-bold text-white hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                   Save
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Blog Animations */}
      <style jsx>{`
        @keyframes blog-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-45px) translateX(25px) scale(1.15) rotate(90deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-25px) translateX(-35px) scale(0.85) rotate(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-55px) translateX(15px) scale(1.05) rotate(270deg);
            opacity: 0.3;
          }
        }

        @keyframes document-float {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateZ(0deg) scale(1);
            opacity: 0.1;
          }
          33% {
            transform: translateY(-35px) rotateX(120deg) rotateZ(15deg) scale(1.2);
            opacity: 0.3;
          }
          66% {
            transform: translateY(-15px) rotateX(240deg) rotateZ(-15deg) scale(0.9);
            opacity: 0.5;
          }
        }

        .animate-blog-float {
          animation: blog-float 20s ease-in-out infinite;
        }

        .animate-document-float {
          animation: document-float 28s ease-in-out infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }

        .prose blockquote {
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
};

export default BlogSection;