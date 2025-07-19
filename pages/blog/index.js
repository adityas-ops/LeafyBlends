import React from "react";
import { useRouter } from "next/router";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

function Blog() {
  const router = useRouter();
  const pathname = router.pathname;

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Tea Brewing: A Complete Guide",
      excerpt: "Discover the secrets to brewing the perfect cup of tea. From water temperature to steeping times, learn everything you need to know.",
      author: "Tea Master Sarah",
      date: "December 15, 2024",
      category: "Brewing Guide",
      image: "/images/landing/steeptea.png",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Health Benefits of Green Tea: What Science Says",
      excerpt: "Explore the numerous health benefits of green tea backed by scientific research. From antioxidants to metabolism boost.",
      author: "Dr. Emily Chen",
      date: "December 12, 2024",
      category: "Health & Wellness",
      image: "/images/landing/greentea.png",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Tea Traditions Around the World",
      excerpt: "Journey through different cultures and their unique tea traditions. From Japanese tea ceremonies to British afternoon tea.",
      author: "Cultural Historian",
      date: "December 10, 2024",
      category: "Culture",
      image: "/images/landing/chai.png",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Matcha: The Superfood Tea Explained",
      excerpt: "Everything you need to know about matcha - the powdered green tea that's taking the world by storm.",
      author: "Matcha Expert",
      date: "December 8, 2024",
      category: "Tea Types",
      image: "/images/landing/matcha.png",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Herbal Tea Remedies for Common Ailments",
      excerpt: "Natural remedies using herbal teas for everyday health concerns. Safe, effective, and delicious solutions.",
      author: "Herbalist Maria",
      date: "December 5, 2024",
      category: "Herbal Remedies",
      image: "/images/landing/herbaltea.png",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "The Perfect Tea Pairing: Tea and Food Combinations",
      excerpt: "Learn how to pair different teas with various foods to enhance both the tea and dining experience.",
      author: "Food & Tea Pairing Expert",
      date: "December 3, 2024",
      category: "Food Pairing",
      image: "/images/landing/allabouttea.png",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Brewing Guide", "Health & Wellness", "Culture", "Tea Types", "Herbal Remedies", "Food Pairing"];

  return (
    <>
      <div className="w-full h-full mt-[60px] tablet:mt-[108px]">
        {/* banner */}
        <div className="w-full h-[400px] relative">
          <img
            src="/images/landing/allabouttea.png"
            alt="Tea Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Tea Blog</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Discover the world of tea through our expert articles, brewing guides, and cultural insights
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full h-full pr-10 pl-10 mt-6">
          {/* breadcrumbs */}
          <div className="w-full h-full uppercase mb-10">Home {pathname}</div>

          {/* category filters */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* featured post */}
          <div className="mb-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                    Featured Post
                  </span>
                  <h2 className="text-3xl font-bold mt-2 mb-4">
                    The Art of Tea Brewing: A Complete Guide
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Discover the secrets to brewing the perfect cup of tea. From water temperature to steeping times, 
                    learn everything you need to know to elevate your tea experience.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FiUser className="mr-2" />
                    <span className="mr-4">Tea Master Sarah</span>
                    <FiCalendar className="mr-2" />
                    <span>December 15, 2024</span>
                  </div>
                  <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center">
                    Read Full Article
                    <FiArrowRight className="ml-2" />
                  </button>
                </div>
                <div>
                  <img
                    src="/images/landing/steeptea.png"
                    alt="Tea Brewing"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiUser className="mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <FiCalendar className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                      Read More
                      <FiArrowRight className="ml-1 text-sm" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* newsletter signup */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest tea insights, brewing tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog; 