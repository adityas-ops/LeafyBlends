import React from "react";
import { useRouter } from "next/router";
import useCartStore from "../../store/cartStore";

function Accessories() {
  const router = useRouter();
  const pathname = router.pathname;
  const { addToCart } = useCartStore();

  const accessories = [
    {
      id: 1,
      name: "Ceramic Teapot",
      description: "Traditional brewing vessel",
      price: 45.00,
      image: "/images/landing/teaware.png",
      category: "Teapots"
    },
    {
      id: 2,
      name: "Porcelain Tea Cups",
      description: "Set of 4 elegant cups",
      price: 28.50,
      image: "/images/landing/teaware.png",
      category: "Cups"
    },
    {
      id: 3,
      name: "Tea Infuser",
      description: "Stainless steel strainer",
      price: 12.99,
      image: "/images/landing/teaware.png",
      category: "Infusers"
    },
    {
      id: 4,
      name: "Tea Timer",
      description: "Digital brewing timer",
      price: 18.75,
      image: "/images/landing/teaware.png",
      category: "Timers"
    },
    {
      id: 5,
      name: "Tea Storage Tin",
      description: "Airtight storage container",
      price: 15.25,
      image: "/images/landing/teaware.png",
      category: "Storage"
    },
    {
      id: 6,
      name: "Tea Tray Set",
      description: "Complete serving set",
      price: 65.00,
      image: "/images/landing/teaware.png",
      category: "Sets"
    }
  ];

  const categories = ["All", "Teapots", "Cups", "Infusers", "Timers", "Storage", "Sets"];

  return (
    <>
      <div className="w-full h-full mt-[60px] tablet:mt-[108px]">
        {/* banner */}
        <div className="w-full h-[300px]">
          <img
            src="/images/landing/teaware.png"
            alt="Tea Accessories"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full h-full pr-10 pl-10 mt-6">
          {/* breadcrumbs */}
          <div className="w-full h-full uppercase mb-10">Home {pathname}</div>
          
          {/* page title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Tea Accessories</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of premium tea accessories to enhance your tea brewing experience. 
              From traditional teapots to modern infusers, we have everything you need.
            </p>
          </div>

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

          {/* main content */}
          <div className="w-full h-full flex justify-center">
            <div className="grid grid-cols-1 w-[95%] h-full tablet:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessories.map((product) => (
                <div key={product.id} className="h-full w-full flex flex-col justify-center items-center mb-10 cursor-pointer hover:scale-105 transition-transform">
                  <img
                    alt={product.name}
                    src={product.image}
                    className="object-cover w-full h-64 rounded-lg"
                  />
                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
                    <p className="font-semibold text-lg tablet:text-xl mt-1">{product.name}</p>
                    <p className="font-thin text-sm tablet:text-base text-gray-600 mt-1">{product.description}</p>
                    <p className="text-lg tablet:text-xl font-bold mt-2">€{product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accessories; 