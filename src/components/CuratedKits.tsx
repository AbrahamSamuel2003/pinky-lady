'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { StoryAside } from './StoryAside';
import { VectorChapter5 } from './VectorIllustrations';
import { useCart } from '@/context/CartContext';

export function CuratedKits() {
  const { addItem } = useCart();

  // Local quantity state for each kit on the page
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'Teen & Starter Kit': 1,
    'Balanced Day & Night Kit': 1,
    'Heavy Flow & Recovery Kit': 1,
  });

  // Flying animation state
  const [flyingItem, setFlyingItem] = useState<{ id: string; x: number; y: number } | null>(null);

  const kits = [
    {
      name: 'Teen & Starter Kit',
      price: 14.0,
      breakdown: '12x Regular Day (240mm) + 6x Super (280mm)',
      infusion: 'Aloe & Neem Herbal Infusion',
      desc: 'Feather-fit comfort designed for first cycles and young women with sensitive skin.',
    },
    {
      name: 'Balanced Day & Night Kit',
      price: 18.5,
      breakdown: '10x Regular + 8x Super + 6x Overnight (320mm)',
      infusion: 'Aloe & Neem + Mint Core',
      desc: 'Our most loved complete cycle ratio covering moderate daytime hours to peaceful sleep.',
    },
    {
      name: 'Heavy Flow & Recovery Kit',
      price: 22.0,
      breakdown: '12x Super (280mm) + 12x Maternity Maxi (350mm)',
      infusion: 'Dual Cooling Mint & Aloe Care',
      desc: 'Maximum absorbency with wide 360° fan-tail coverage for heavy days and postpartum healing.',
    },
  ];

  const handleQtyChange = (kitName: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[kitName] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [kitName]: updated };
    });
  };

  const handleAddToCart = (kit: typeof kits[0], e: React.MouseEvent<HTMLButtonElement>) => {
    const qty = quantities[kit.name] || 1;

    // Trigger Fly-to-Cart Animation from click coordinates
    const rect = e.currentTarget.getBoundingClientRect();
    setFlyingItem({
      id: `${Date.now()}`,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setTimeout(() => {
      setFlyingItem(null);
    }, 850);

    // Add to cart with chosen quantity
    addItem({
      title: kit.name,
      details: `${kit.breakdown} • ${kit.infusion}`,
      price: kit.price,
      qty: qty,
      image: '/images/custom_box.jpg',
    });
  };

  return (
    <section
      id="chapter-5"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--cream)',
        position: 'relative',
      }}
    >
      {/* Flying Ghost Cart Animation Element */}
      {flyingItem && (
        <div
          style={{
            position: 'fixed',
            left: `${flyingItem.x}px`,
            top: `${flyingItem.y}px`,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'var(--coral)',
            color: 'var(--white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            fontWeight: 700,
            zIndex: 9999,
            pointerEvents: 'none',
            boxShadow: '0 8px 24px rgba(231, 111, 112, 0.45)',
            animation: 'flyToCart 0.85s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
          }}
        >
          +
        </div>
      )}

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center',
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            border: '1px solid var(--hairline)',
            boxShadow: '0 8px 30px rgba(103, 60, 103, 0.04)',
          }}
        >
          {/* Story Aside Component */}
          <StoryAside
            chapter="CHAPTER 05"
            title="The Care Ritual"
            vector={<VectorChapter5 />}
            narrative="The quiet joy of opening a beautifully packaged, plastic-free box arriving at your door right when you need it most. Personal hygiene transformed from a stressful chore into a serene act of self-care."
            reflection="Recyclable Matte Box · Discreet Home Delivery · Zero Waste Lining"
          />

          {/* Curated Bundles Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '180px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--soft-peach)',
              }}
            >
              <Image
                src="/images/custom_box.jpg"
                alt="Pink Lady Eco-Luxury Cardboard Packaging Box"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {kits.map((kit) => {
                const qty = quantities[kit.name] || 1;
                return (
                  <div
                    key={kit.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--cream)',
                      border: '1px solid var(--hairline)',
                      flexWrap: 'wrap',
                      gap: '14px',
                    }}
                  >
                    <div style={{ maxWidth: '300px' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--deep-plum)', marginBottom: '3px' }}>
                        {kit.name}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--dark-plum-muted)', lineHeight: 1.4 }}>
                        {kit.breakdown} • {kit.infusion}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                      {/* Price Display */}
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--deep-plum)', fontFamily: 'var(--font-serif)' }}>
                        ${(kit.price * qty).toFixed(2)}
                      </span>

                      {/* Quantity Selector on the Page ([-] Qty [+]) */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          backgroundColor: 'var(--white)',
                          border: '1px solid var(--hairline)',
                          borderRadius: 'var(--radius-pill)',
                          padding: '3px 8px',
                          gap: '8px',
                        }}
                      >
                        <button
                          onClick={() => handleQtyChange(kit.name, -1)}
                          aria-label="Decrease quantity"
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--deep-plum)',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                          }}
                        >
                          −
                        </button>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, minWidth: '18px', textAlign: 'center' }}>
                          {qty}
                        </span>
                        <button
                          onClick={() => handleQtyChange(kit.name, 1)}
                          aria-label="Increase quantity"
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--deep-plum)',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                          }}
                        >
                          +
                        </button>
                      </div>

                      {/* Add to Bag Button */}
                      <button
                        onClick={(e) => handleAddToCart(kit, e)}
                        style={{
                          padding: '9px 20px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: 'var(--coral)',
                          color: 'var(--white)',
                          fontSize: '0.84rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          boxShadow: '0 4px 12px rgba(231, 111, 112, 0.25)',
                        }}
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
