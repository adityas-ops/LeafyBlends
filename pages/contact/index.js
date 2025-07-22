import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

function Contact() {
  const router = useRouter();
  const pathname = router.pathname;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Us",
      details: ["info@leafyblends.com", "support@leafyblends.com"],
      description: "Send us an email anytime"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Visit Us",
      details: ["123 Tea Street", "Brewing District, NY 10001"],
      description: "Come say hello at our office"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
      description: "We're closed on Sundays"
    }
  ];

  return (
    <>
      <div className="w-full h-full mt-[60px] tablet:mt-[108px]">
        {/* banner */}
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/landing/brand.png"
            alt="Contact Us"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Get in touch with us for any questions about our tea products or services
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full h-full pr-10 pl-10 mt-6">
          {/* breadcrumbs */}
          <div className="w-full h-full uppercase mb-10">Home {pathname}</div>

          {/* contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{info.description}</p>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-gray-800">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* contact form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* company info and map */}
            <div className="space-y-8">
              {/* company info */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">About Leafy Blends</h2>
                <p className="text-gray-600 mb-4">
                  We are passionate about bringing you the finest quality teas from around the world. 
                  Our mission is to provide an exceptional tea experience through carefully curated 
                  collections and expert knowledge.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a tea connoisseur or just starting your tea journey, we're here to 
                  help you discover the perfect blend for every moment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FiMapPin className="text-blue-600 mr-3" />
                    <span className="text-sm text-gray-700">123 Tea Street, Brewing District, NY 10001</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="text-blue-600 mr-3" />
                    <span className="text-sm text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <FiMail className="text-blue-600 mr-3" />
                    <span className="text-sm text-gray-700">info@leafyblends.com</span>
                  </div>
                </div>
              </div>

              {/* map placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FiMapPin className="text-4xl mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>

              {/* FAQ section */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">How do I track my order?</h4>
                    <p className="text-sm text-gray-600">You'll receive a tracking number via email once your order ships.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">What's your return policy?</h4>
                    <p className="text-sm text-gray-600">We accept returns within 30 days of purchase for unused items.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Do you ship internationally?</h4>
                    <p className="text-sm text-gray-600">Yes, we ship to most countries worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact; 