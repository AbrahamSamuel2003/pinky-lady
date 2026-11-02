'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const { openCart, totalCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '10px 0' : '18px 0',
        backgroundColor: scrolled ? 'rgba(255, 248, 240, 0.94)' : 'rgba(255, 248, 240, 0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid rgba(103, 60, 103, 0.06)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Prominent Brand Logo Lockup */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image
            src="/brand/logo_badge.png"
            alt="Pink Lady Herbal Napkin Badge"
            width={44}
            height={44}
            priority
            style={{
              borderRadius: 'var(--radius-pill)',
              boxShadow: '0 2px 10px rgba(103, 60, 103, 0.12)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.28rem',
                fontWeight: 700,
                color: 'var(--deep-plum)',
                lineHeight: 1.1,
                letterSpacing: '0.04em',
              }}
            >
              PINK LADY
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--coral)',
                textTransform: 'uppercase',
              }}
            >
              HERBAL SANITARY CARE
            </span>
          </div>
        </Link>

        {/* Clean, Professional Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
          <Link href="#chapter-1" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--dark-plum)', transition: 'color 0.2s' }}>
            Our Story
          </Link>
          <Link href="#chapter-2" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--dark-plum)', transition: 'color 0.2s' }}>
            Custom Box
          </Link>
          <Link href="#chapter-3" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--dark-plum)', transition: 'color 0.2s' }}>
            Ingredients
          </Link>
          <Link href="#chapter-4" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--dark-plum)', transition: 'color 0.2s' }}>
            Technology
          </Link>
          <Link href="#chapter-5" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--dark-plum)', transition: 'color 0.2s' }}>
            Bundles
          </Link>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Cart Bag Toggle */}
          <button
            onClick={openCart}
            aria-label="Open care bag"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              backgroundColor: 'var(--white)',
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--radius-pill)',
              color: 'var(--deep-plum)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Bag</span>
            <span
              style={{
                backgroundColor: 'var(--coral)',
                color: 'var(--white)',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: 'var(--radius-pill)',
              }}
            >
              {totalCount}
            </span>
          </button>

          <Link href="#chapter-2" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
            Design Your Box
          </Link>
        </div>
      </div>
    </header>
  );
}
