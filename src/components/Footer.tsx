'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--dark-plum)',
        color: 'var(--white)',
        padding: '80px 0 36px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Col */}
          <div>
            <Image
              src="/brand/logo-light.svg"
              alt="Pink Lady Herbal Sanitary Care"
              width={200}
              height={50}
              style={{ height: '40px', width: 'auto', marginBottom: '20px' }}
            />
            <p style={{ color: '#c9bbc9', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>
                Natural Care. Everyday Confidence.
              </strong>
              Gentle personal care rooted in pure Ayurvedic botanicals and tailored comfort. Designed for your body&apos;s rhythm.
            </p>

          </div>

          {/* Quick Navigation Col */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '18px', fontWeight: 600 }}>Explore</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <Link href="#chapter-1" style={{ color: '#c9bbc9', transition: 'color 0.2s' }}>Our Story</Link>
              <Link href="#chapter-2" style={{ color: '#c9bbc9', transition: 'color 0.2s' }}>Custom Box</Link>
              <Link href="#chapter-3" style={{ color: '#c9bbc9', transition: 'color 0.2s' }}>Ingredients</Link>
              <Link href="#chapter-4" style={{ color: '#c9bbc9', transition: 'color 0.2s' }}>Technology & Anatomy</Link>
              <Link href="#chapter-5" style={{ color: '#c9bbc9', transition: 'color 0.2s' }}>Bundles & Kits</Link>
            </div>
          </div>

          {/* Transparency & Certs */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '18px', fontWeight: 600 }}>Purity Standards</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#c9bbc9' }}>
              <span>🌿 100% Organic Bamboo Cotton</span>
              <span>🌸 Certified Rash-Free Formulation</span>
              <span>0% Chlorine Bleach & Dioxins</span>
              <span>Cruelty-Free & Biodegradable</span>
              <span>Hypoallergenic Approved</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '18px', fontWeight: 600 }}>The Circle</h4>
            <p style={{ color: '#c9bbc9', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '14px' }}>
              Receive thoughtful cycle health notes and 15% off your first tailored box.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('🌸 Welcome to the Pink Lady Circle!');
              }}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-pill)',
                  color: 'var(--white)',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'var(--coral)',
                  color: 'var(--white)',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '0.8rem',
            color: '#9e8c9e',
          }}
        >
          <div>© 2026 Pink Lady Herbal Sanitary Care. All rights reserved.</div>
          <div>Gentle Botanical Purity • Tailored For You</div>
        </div>
      </div>
    </footer>
  );
}
