'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  details: string;
  price: number;
  qty: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, delta: number) => void;
  subtotal: number;
  totalCount: number;
  notificationModal: {
    isOpen: boolean;
    item: CartItem | null;
    timestamp?: number;
  };
  closeNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationModal, setNotificationModal] = useState<{
    isOpen: boolean;
    item: CartItem | null;
    timestamp?: number;
  }>({
    isOpen: false,
    item: null,
  });

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const closeNotification = () =>
    setNotificationModal({ isOpen: false, item: null });

  const addItem = (item: Omit<CartItem, 'id'>) => {
    // Check if matching item already exists
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.title === item.title && i.details === item.details
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += item.qty;
        return updated;
      } else {
        const newItem: CartItem = {
          ...item,
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        };
        return [newItem, ...prev];
      }
    });

    // Trigger 3-second Notification Modal matching user screenshot
    setNotificationModal({
      isOpen: true,
      timestamp: Date.now(),
      item: {
        id: 'latest',
        ...item,
      },
    });
  };

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const totalCount = items.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQty,
        subtotal,
        totalCount,
        notificationModal,
        closeNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
