import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import Accordion from "@/components/collections/Accordion";
import Boxes from "@/components/collections/Boxes";
import Origins from "@/components/collections/Origins";
import Flavour from "@/components/collections/Flavour";
import Quality from "@/components/collections/Quality";
import Caffein from "@/components/collections/Caffein";
import Allerg from "@/components/collections/Allerg";
import useCartStore from "../../store/cartStore";

function collections() {
  const router = useRouter();
  const pathname = router.pathname;
  const { addToCart } = useCartStore();
  
  // Filter states
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedOrigins, setSelectedOrigins] = useState([]);
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [selectedQualities, setSelectedQualities] = useState([]);
  const [selectedCaffeine, setSelectedCaffeine] = useState([]);
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  
  const teaProducts = [
    {
      id: 1,
      name: "Ceylon Ginger",
      description: "Cinnamon chai tea",
      price: 4.85,
      image: "/images/collection/1.png",
      collection: "Chai",
      origin: "India",
      flavour: "Spicy",
      quality: "Energy",
      caffeine: "Medium Caffein",
      allergens: ["Gluten-free", "Nuts-free"]
    },
    {
      id: 2,
      name: "Earl Grey",
      description: "Classic bergamot tea",
      price: 5.20,
      image: "/images/collection/2.png",
      collection: "Black Teas",
      origin: "India",
      flavour: "Floral",
      quality: "Energy",
      caffeine: "High Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free"]
    },
    {
      id: 3,
      name: "Green Tea",
      description: "Fresh and light",
      price: 4.50,
      image: "/images/collection/3.png",
      collection: "Green Teas",
      origin: "Japan",
      flavour: "Grassy",
      quality: "Detox",
      caffeine: "Medium Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free", "Lactos-free"]
    },
    {
      id: 4,
      name: "Chamomile",
      description: "Calming herbal tea",
      price: 3.95,
      image: "/images/collection/4.png",
      collection: "Herbal Teas",
      origin: "Iran",
      flavour: "Floral",
      quality: "Relax",
      caffeine: "No Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free", "Lactos-free"]
    },
    {
      id: 5,
      name: "Peppermint",
      description: "Refreshing mint tea",
      price: 4.25,
      image: "/images/collection/5.png",
      collection: "Herbal Teas",
      origin: "Iran",
      flavour: "Minty",
      quality: "Digestion",
      caffeine: "No Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free", "Lactos-free"]
    },
    {
      id: 6,
      name: "Rooibos",
      description: "South African red tea",
      price: 4.75,
      image: "/images/collection/6.png",
      collection: "Rooibos",
      origin: "South Africa",
      flavour: "Smooth",
      quality: "Relax",
      caffeine: "No Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free", "Lactos-free"]
    },
    {
      id: 7,
      name: "Darjeeling",
      description: "Premium black tea",
      price: 6.10,
      image: "/images/collection/7.png",
      collection: "Black Teas",
      origin: "India",
      flavour: "Smooth",
      quality: "Energy",
      caffeine: "High Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free"]
    },
    {
      id: 8,
      name: "Jasmine",
      description: "Fragrant green tea",
      price: 5.45,
      image: "/images/collection/8.png",
      collection: "Green Teas",
      origin: "Japan",
      flavour: "Floral",
      quality: "Relax",
      caffeine: "Low Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free", "Lactos-free"]
    },
    {
      id: 9,
      name: "Lemon Ginger",
      description: "Zesty and warming",
      price: 4.30,
      image: "/images/collection/9.png",
      collection: "Herbal Teas",
      origin: "India",
      flavour: "Citrus",
      quality: "Digestion",
      caffeine: "No Caffein",
      allergens: ["Gluten-free", "Nuts-free", "Soy-free", "Lactos-free"]
    }
  ];

  // Filter functions
  const handleCollectionChange = (collection) => {
    setSelectedCollections(prev => 
      prev.includes(collection) 
        ? prev.filter(item => item !== collection)
        : [...prev, collection]
    );
  };

  const handleOriginChange = (origin) => {
    setSelectedOrigins(prev => 
      prev.includes(origin) 
        ? prev.filter(item => item !== origin)
        : [...prev, origin]
    );
  };

  const handleFlavourChange = (flavour) => {
    setSelectedFlavours(prev => 
      prev.includes(flavour) 
        ? prev.filter(item => item !== flavour)
        : [...prev, flavour]
    );
  };

  const handleQualityChange = (quality) => {
    setSelectedQualities(prev => 
      prev.includes(quality) 
        ? prev.filter(item => item !== quality)
        : [...prev, quality]
    );
  };

  const handleCaffeineChange = (caffeine) => {
    setSelectedCaffeine(prev => 
      prev.includes(caffeine) 
        ? prev.filter(item => item !== caffeine)
        : [...prev, caffeine]
    );
  };

  const handleAllergenChange = (allergen) => {
    setSelectedAllergens(prev => 
      prev.includes(allergen) 
        ? prev.filter(item => item !== allergen)
        : [...prev, allergen]
    );
  };

  const clearAllFilters = () => {
    setSelectedCollections([]);
    setSelectedOrigins([]);
    setSelectedFlavours([]);
    setSelectedQualities([]);
    setSelectedCaffeine([]);
    setSelectedAllergens([]);
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    return teaProducts.filter(product => {
      const collectionMatch = selectedCollections.length === 0 || selectedCollections.includes(product.collection);
      const originMatch = selectedOrigins.length === 0 || selectedOrigins.includes(product.origin);
      const flavourMatch = selectedFlavours.length === 0 || selectedFlavours.includes(product.flavour);
      const qualityMatch = selectedQualities.length === 0 || selectedQualities.includes(product.quality);
      const caffeineMatch = selectedCaffeine.length === 0 || selectedCaffeine.includes(product.caffeine);
      const allergenMatch = selectedAllergens.length === 0 || 
        selectedAllergens.some(allergen => product.allergens.includes(allergen));

      return collectionMatch && originMatch && flavourMatch && qualityMatch && caffeineMatch && allergenMatch;
    });
  }, [selectedCollections, selectedOrigins, selectedFlavours, selectedQualities, selectedCaffeine, selectedAllergens]);

  // Check if any filters are active
  const hasActiveFilters = selectedCollections.length > 0 || selectedOrigins.length > 0 || 
    selectedFlavours.length > 0 || selectedQualities.length > 0 || 
    selectedCaffeine.length > 0 || selectedAllergens.length > 0;

  return (
    <>
      <div className="w-full h-full mt-[60px] tablet:mt-[108px]">
        {/* banner */}
        <div className="w-full h-[300px]">
          <img
            src="images/collection/intro.png"
            alt=""
            className="w-full h-full object-cover hidden tablet:block"
          />
          <img
            src="images/collection/intro-mobile.png"
            alt=""
            className="w-full h-full object-cover tablet:hidden"
          />
        </div>
        <div className="w-full h-full pr-10 pl-10 mt-6">
          {/*  breadcrumbs  */}
          <div className="w-full h-full   uppercase mb-10">Home {pathname}</div>
          
          {/* Clear filters button */}
          {hasActiveFilters && (
            <div className="w-full mb-4">
              <button
                onClick={clearAllFilters}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Clear All Filters
              </button>
              <span className="ml-4 text-sm text-gray-600">
                {filteredProducts.length} of {teaProducts.length} products
              </span>
            </div>
          )}
          
          {/* main page start  */}
          <div className="w-full h-full flex">
            <div className="flex-[25%] h-full mb-10 hidden tablet:flex justify-center">
              <div className="bg-white w-[80%] ">
                <Accordion 
                  title="COLLECTIONS" 
                  content={
                    <Boxes 
                      selectedItems={selectedCollections}
                      onItemChange={handleCollectionChange}
                    />
                  } 
                />
                <Accordion 
                  title="ORIGINS" 
                  content={
                    <Origins 
                      selectedItems={selectedOrigins}
                      onItemChange={handleOriginChange}
                    />
                  } 
                />
                <Accordion 
                  title="FLAVORS" 
                  content={
                    <Flavour 
                      selectedItems={selectedFlavours}
                      onItemChange={handleFlavourChange}
                    />
                  } 
                />
                <Accordion 
                  title="QUALITIES" 
                  content={
                    <Quality 
                      selectedItems={selectedQualities}
                      onItemChange={handleQualityChange}
                    />
                  } 
                />
                <Accordion 
                  title="CAFFEINE" 
                  content={
                    <Caffein 
                      selectedItems={selectedCaffeine}
                      onItemChange={handleCaffeineChange}
                    />
                  } 
                />
                <Accordion 
                  title="ALERGENS" 
                  content={
                    <Allerg 
                      selectedItems={selectedAllergens}
                      onItemChange={handleAllergenChange}
                    />
                  } 
                />
              </div>
            </div>
            <div className="tablet:flex-[75%] flex-[100%] flex justify-center ">
              <div className="grid grid-cols-2 w-[95%] h-full tablet:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="h-full w-full flex flex-col justify-center items-center mb-10 cursor-pointer hover:scale-105 transition-transform">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="object-cover w-[400px]"
                    />
                    <p className="font-thin text-sm tablet:text-base">{product.name}</p>
                    <p className="font-thin text-sm tablet:text-base">{product.description}</p>
                    <p className="text-sm tablet:text-base">
                      <span className="font-bold">€{product.price}</span> / 50 g
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default collections;
