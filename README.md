# 🍃 LeafyBlends - Premium Tea E-Commerce Platform

A modern, responsive e-commerce platform built with Next.js for premium tea and tea accessories. LeafyBlends offers a curated collection of over 450+ loose leaf teas, organic certified products, and premium teaware.

## ✨ Features

### 🛍️ E-Commerce Functionality
- **Product Catalog**: Browse through 9 different tea categories including Black Tea, Green Tea, White Tea, Matcha, Herbal Tea, Chai, Oolong, Rooibos, and Teaware
- **Shopping Cart**: Full cart functionality with quantity management, add/remove items, and real-time price calculation
- **Checkout System**: Complete checkout flow with user information collection and payment processing
- **Payment Integration**: Secure payment processing using Razorpay payment gateway
- **Order Management**: Create and track orders with unique receipt IDs

### 🎨 User Experience
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Modern UI**: Clean, elegant design with Tailwind CSS styling
- **Interactive Components**: Accordion filters, collection boxes, and dynamic product displays
- **Toast Notifications**: User-friendly feedback using react-hot-toast
- **State Management**: Efficient cart and user state management with Zustand

### 🔧 Technical Features
- **Server-Side Rendering**: Built with Next.js for optimal performance and SEO
- **API Routes**: RESTful API endpoints for order creation and payment verification
- **Local Storage**: IndexedDB integration for persistent user data
- **Image Optimization**: Next.js Image component for optimized image loading
- **Form Validation**: Comprehensive form handling with validation

## 🛠️ Tech Stack

### Frontend
- **Next.js 13.4.4** - React framework with SSR and API routes
- **React 18.2.0** - UI library
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **React Icons 4.9.0** - Icon library
- **React Hot Toast 2.5.2** - Toast notifications
- **Zustand 5.0.6** - State management

### Backend & APIs
- **Razorpay 2.9.6** - Payment gateway integration
- **Nodemailer 7.0.5** - Email functionality
- **Next.js API Routes** - Serverless backend functions

### Development Tools
- **PostCSS 8.4.24** - CSS processing
- **Autoprefixer 10.4.14** - CSS vendor prefixing
- **TW Elements 1.0.0-beta2** - Tailwind components

## 📁 Project Structure

```
LeafyBlends/
├── components/                 # Reusable UI components
│   ├── Cart.jsx              # Shopping cart component
│   ├── collections/          # Tea collection components
│   │   ├── Accordion.jsx     # Filter accordion
│   │   ├── Allerg.jsx        # Allergen information
│   │   ├── Boxes.jsx         # Product display boxes
│   │   ├── Caffein.jsx       # Caffeine content info
│   │   ├── Flavour.jsx       # Flavor profiles
│   │   ├── Origins.jsx       # Tea origins
│   │   └── Quality.jsx       # Quality indicators
│   ├── Footers.jsx           # Footer component
│   └── Headers.jsx           # Header component
├── pages/                     # Next.js pages and API routes
│   ├── _app.js              # App wrapper
│   ├── _document.js         # Document wrapper
│   ├── index.js             # Homepage
│   ├── checkout.js          # Checkout page
│   ├── payment.js           # Payment processing
│   ├── accessories/         # Accessories page
│   ├── blog/                # Blog section
│   ├── cart/                # Cart page
│   ├── collections/         # Collections page
│   ├── contact/             # Contact page
│   └── api/                 # API routes
│       ├── create-order.js  # Razorpay order creation
│       ├── verify-payment.js # Payment verification
│       └── hello.js         # Test API endpoint
├── public/                   # Static assets
│   └── images/              # Image assets
│       ├── collection/      # Collection images
│       ├── landing/         # Landing page images
│       └── logo.png         # Brand logo
├── store/                    # State management
│   └── cartStore.js         # Zustand cart store
├── styles/                   # Global styles
│   └── globals.css          # Global CSS
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LeafyBlends
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛒 Key Features Explained

### Shopping Cart System
The cart uses Zustand for state management with features like:
- Add/remove items
- Quantity updates
- Total price calculation
- Persistent cart state

### Payment Integration
- Razorpay integration for secure payments
- Order creation and verification
- Support for multiple currencies (default: INR)

### User Experience
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation
- Fast loading with Next.js optimization

## 🎯 Tea Categories

1. **Black Tea** - Classic and robust flavors
2. **Green Tea** - Fresh and delicate varieties
3. **White Tea** - Subtle and refined options
4. **Matcha** - Premium powdered green tea
5. **Herbal Tea** - Caffeine-free herbal blends
6. **Chai** - Traditional spiced tea
7. **Oolong** - Semi-oxidized tea varieties
8. **Rooibos** - South African red tea
9. **Teaware** - Premium tea accessories

## 🔒 Security Features

- Secure payment processing with Razorpay
- Environment variable protection
- Input validation and sanitization
- HTTPS-ready configuration

## 📈 Performance Optimizations

- Next.js Image optimization
- Server-side rendering for better SEO
- Code splitting and lazy loading
- Optimized bundle size
- CDN-ready static assets

## 🌐 Deployment

The application is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@leafyblends.com
- Website: [leafyblends.com](https://leafyblends.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Razorpay for secure payment processing
- React Icons for the beautiful icon library

---

**LeafyBlends** - Where every day is unique, just like our tea! 🍃✨
