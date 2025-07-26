import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useCartStore from "../../store/cartStore";
import toast from 'react-hot-toast';

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
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/landing/teaware.png"
            alt="Tea Accessories"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        <div className="w-full h-full pl-10 pr-10 mt-6">
          {/* breadcrumbs */}
          <div className="w-full h-full mb-10 uppercase">Home {pathname}</div>
          
          {/* page title */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold">Tea Accessories</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
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
                  className="px-4 py-2 transition-colors border border-gray-300 rounded-full hover:bg-black hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* main content */}
          <div className="flex justify-center w-full h-full">
            <div className="grid grid-cols-1 w-[95%] h-full tablet:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessories.map((product) => (
                <div key={product.id} className="flex flex-col items-center justify-center w-full h-full mb-10 transition-transform cursor-pointer hover:scale-105">
                  <div className="relative w-full h-64">
                    <Image
                      alt={product.name}
                      src={product.image}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xs tracking-wide text-gray-500 uppercase">{product.category}</p>
                    <p className="mt-1 text-lg font-semibold tablet:text-xl">{product.name}</p>
                    <p className="mt-1 text-sm font-thin text-gray-600 tablet:text-base">{product.description}</p>
                    <p className="mt-2 text-lg font-bold tablet:text-xl">₹{product.price}</p>
                    <button
                      onClick={() => {
                        addToCart(product);
                        toast.success('product added in cart');
                      }}
                      className="px-6 py-2 mt-4 text-white transition-colors bg-black rounded hover:bg-gray-800"
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