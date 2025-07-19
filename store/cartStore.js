import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],
  isCartOpen: false,

  // Add item to cart
  addToCart: (item) => {
    const { cart } = get();
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // If item already exists, increase quantity
      set({
        cart: cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      });
    } else {
      // If item doesn't exist, add it with quantity 1
      set({
        cart: [...cart, { ...item, quantity: 1 }]
      });
    }
  },

  // Remove item from cart
  removeFromCart: (itemId) => {
    const { cart } = get();
    set({
      cart: cart.filter(item => item.id !== itemId)
    });
  },

  // Update item quantity
  updateQuantity: (itemId, quantity) => {
    const { cart } = get();
    if (quantity <= 0) {
      get().removeFromCart(itemId);
    } else {
      set({
        cart: cart.map(item =>
          item.id === itemId
            ? { ...item, quantity }
            : item
        )
      });
    }
  },

  // Clear cart
  clearCart: () => {
    set({ cart: [] });
  },

  // Toggle cart open/close
  toggleCart: () => {
    set(state => ({ isCartOpen: !state.isCartOpen }));
  },

  // Get total items in cart
  getTotalItems: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Get total price
  getTotalPrice: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));

export default useCartStore; 