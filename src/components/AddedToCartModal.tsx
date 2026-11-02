'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export function AddedToCartModal() {
  const { notificationModal } = useCart();

  if (!notificationModal.isOpen || !notificationModal.item) return null;

  return (
    <AddedToCartDialog
      key={notificationModal.timestamp || 'cart-notification'}
      item={notificationModal.item}
    />
  );
}

function AddedToCartDialog({ item }: { item: NonNullable<ReturnType<typeof useCart>['notificationModal']['item']> }) {
  const { closeNotification, openCart, totalCount } = useCart();
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Animation progress interval
    const intervalTime = 30; // update every 30ms
    const totalDuration = 3000;
    const decrement = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= decrement) {
          clearInterval(timer);
          closeNotification();
          return 0;
        }
        return prev - decrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [closeNotification]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '80px',
        right: '24px',
        zIndex: 2000,
        width: '100%',
        maxWidth: '380px',
        backgroundColor: 'var(--white)',
        borderRadius: '16px',
        boxShadow: '0 20px 48px rgba(51, 39, 51, 0.22)',
        border: '1px solid var(--hairline)',
        overflow: 'hidden',
        animation: 'slideInTop 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Dark Deep Plum Header Bar */}
      <div
        style={{
          backgroundColor: 'var(--deep-plum)',
          color: 'var(--white)',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', fontWeight: 600 }}>
          <span
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '2px solid var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.72rem',
              fontWeight: 800,
            }}
          >
            ✓
          </span>
          <span>Added to Cart Successfully</span>
        </div>
        <button
          onClick={closeNotification}
          aria-label="Close notification"
          style={{
            color: 'var(--white)',
            opacity: 0.8,
            fontSize: '1rem',
            lineHeight: 1,
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          ✕
        </button>
      </div>

      {/* Product Information Card */}
      <div style={{ padding: '18px 20px 14px 20px' }}>
        <div
          style={{
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid var(--hairline)',
            backgroundColor: 'var(--cream)',
            marginBottom: '14px',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '58px',
              height: '58px',
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

          <div style={{ flex: 1, minWidth: 0 }}>
            <h4
              style={{
                fontSize: '0.96rem',
                color: 'var(--deep-plum)',
                fontWeight: 700,
                marginBottom: '2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.title}
            </h4>
            <div
              style={{
                fontSize: '0.78rem',
                color: 'var(--dark-plum-muted)',
                marginBottom: '4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.details}
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--deep-plum)' }}>
              ${(item.price * item.qty).toFixed(2)}{' '}
              <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--dark-plum-light)' }}>
                ({item.qty} × ${item.price.toFixed(2)})
              </span>
            </div>
          </div>
        </div>

        {/* Promo / Cart Quantity Banner */}
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '10px',
            backgroundColor: 'var(--soft-peach-subtle)',
            border: '1px solid var(--soft-peach-warm)',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--deep-plum)' }}>
              🎁 {totalCount} Total in cart
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--coral)' }}>
              Free Eco-Tin
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--dark-plum-muted)' }}>
            Complimentary recyclable packaging on all curated boxes
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button
            onClick={() => {
              closeNotification();
              openCart();
            }}
            style={{
              padding: '10px',
              backgroundColor: 'var(--deep-plum)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>🛍 View Cart ({totalCount})</span>
          </button>

          <button
            onClick={closeNotification}
            style={{
              padding: '10px',
              backgroundColor: 'var(--white)',
              color: 'var(--deep-plum)',
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Continue
          </button>
        </div>
      </div>

      {/* 3-Second Countdown Progress Bar */}
      <div style={{ width: '100%', height: '3.5px', backgroundColor: 'var(--cream)', position: 'relative' }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: 'var(--coral)',
            transition: 'width 30ms linear',
          }}
        />
      </div>
    </div>
  );
}
