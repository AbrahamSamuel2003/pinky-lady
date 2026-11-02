'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StoryAside } from './StoryAside';
import { VectorChapter1 } from './VectorIllustrations';

export function HeroSection() {
  return (
    <section id="chapter-1" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FAF3E8' }}>
      {/* =========================================================================
          FULL-BLEED COMPLETE HERO BANNER IMAGE (Navbar Overlays on Top)
          No cards, no borders, pure cinematic natural texture with mild leaf shadows
          ========================================================================= */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#FAF3E8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '65px', // comfortable offset so navbar sits gracefully over top air
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1920px',
            aspectRatio: '1376 / 768',
            maxHeight: 'calc(100vh - 65px)',
          }}
        >
          <Image
            src="/images/pink_lady_clean_hero_banner.jpg"
            alt="Pink Lady — Natural Care. Everyday Confidence"
            fill
            priority
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            sizes="100vw"
          />

          {/* Seamless Clickable Hotspot Overlay for 'Customize Your Flow Box' Button */}
          <Link
            href="#chapter-2"
            aria-label="Customize Your Flow Box"
            style={{
              position: 'absolute',
              top: '66.5%',
              left: '61.2%',
              width: '25.8%',
              height: '8.2%',
              borderRadius: '9999px',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(231, 111, 112, 0.12)';
              e.currentTarget.style.boxShadow = '0 0 0 2px rgba(231, 111, 112, 0.35)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      </div>

      {/* =========================================================================
          CHAPTER 01 NARRATIVE (Fluid Section Flow Below Hero Banner)
          ========================================================================= */}
      <div style={{ backgroundColor: 'var(--cream)', padding: '60px 0 30px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: '44px 48px',
              border: '1px solid var(--hairline)',
              boxShadow: '0 8px 30px rgba(103, 60, 103, 0.04)',
            }}
          >
            <StoryAside
              chapter="CHAPTER 01"
              title="The Awakening"
              vector={<VectorChapter1 />}
              narrative="For years, we accepted plastic chafing, synthetic chemical scents, and monthly rashes as inevitable. But intimate care shouldn't feel like a compromise. You deserve the uncompromised tenderness of nature."
              reflection="100% Organic Bamboo Cotton · 0% Harsh Bleach · Rash-Free Clinical Guarantee"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  padding: '24px',
                  backgroundColor: 'var(--cream)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--hairline)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--coral)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '8px',
                  }}
                >
                  THE HERBAL PROMISE
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--deep-plum)', marginBottom: '8px' }}>
                  No Rashes. No Heavy Plastic. Total Serenity.
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--dark-plum-muted)', lineHeight: 1.65 }}>
                  Wake up feeling rested and confident. Our breathable micro-pores allow intimate skin heat to disperse naturally, eliminating friction dermatitis completely.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  flexWrap: 'wrap',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--deep-plum)',
                  paddingTop: '6px',
                }}
              >
                <span>🌿 100% Organic Cotton</span>
                <span>•</span>
                <span>0% Chlorine Bleach</span>
                <span>•</span>
                <span>10x Absorbency Gel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
