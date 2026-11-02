'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, totalCount } = useCart();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(51, 39, 51, 0.45)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
      onClick={closeCart}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: 'var(--cream)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.15)',
          animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px',
            backgroundColor: 'var(--white)',
            borderBottom: '1px solid var(--hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-plum)', marginBottom: '2px' }}>Your Care Bag</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--coral)', fontWeight: 600 }}>{totalCount} Items Selected</span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close care bag"
            style={{
              padding: '6px',
              color: 'var(--dark-plum-muted)',
              cursor: 'pointer',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items List with Product Count Controls */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', margin: 'auto', color: 'var(--dark-plum-muted)' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--deep-plum)', fontWeight: 600, marginBottom: '6px' }}>Your Bag is Empty</p>
              <p style={{ fontSize: '0.88rem' }}>Customize your personalized box in Chapter 02 or explore our ready kits.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  border: '1px solid var(--hairline)',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center',
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    position: 'relative',
                    width: '54px',
                    height: '54px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    backgroundColor: 'var(--soft-peach)',
                  }}
                >
                  <Image
                    src={item.image || '/images/custom_box.jpg'}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--deep-plum)', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--dark-plum-muted)', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.details}
                  </p>

                  {/* Quantity Selector inside Cart ([-] Qty [+]) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--hairline)',
                        borderRadius: 'var(--radius-pill)',
                        padding: '2px 6px',
                        gap: '8px',
                      }}
                    >
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                        style={{
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--deep-plum)',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                        }}
                      >
                        −
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, minWidth: '16px', textAlign: 'center' }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="Increase quantity"
                        style={{
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--deep-plum)',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--deep-plum)' }}>
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        style={{ color: '#c3a6c3', cursor: 'pointer', padding: '4px' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--white)',
              borderTop: '1px solid var(--hairline)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.95rem', color: 'var(--dark-plum-muted)' }}>Subtotal</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--deep-plum)', fontFamily: 'var(--font-serif)' }}>
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => alert('🌸 Directing to secure encrypted checkout...')}
              className="btn-primary"
              style={{ width: '100%', padding: '14px 0' }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
