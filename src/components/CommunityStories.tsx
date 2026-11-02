'use client';

import React from 'react';
import { StoryAside } from './StoryAside';
import { VectorChapter6 } from './VectorIllustrations';

export function CommunityStories() {
  const testimonials = [
    {
      quote: 'I used commercial supermarket pads for over a decade and endured constant heat rashes every cycle. Pink Lady’s Neem & Aloe napkin completely resolved it within my first month.',
      author: 'Sneha P.',
      badge: 'Verified Buyer • 4 Cycles',
    },
    {
      quote: 'Being able to configure my box with 320mm overnights and 280mm super heavy daytime pads is brilliant. The pads stay completely dry and feel like whisper-soft linen.',
      author: 'Ananya R.',
      badge: 'Custom Atelier Subscriber',
    },
    {
      quote: 'As an OB-GYN, I counsel patients that unbleached organic plant fibers and natural antibacterial neem prevent the sweat accumulation that triggers intimate dermatitis.',
      author: 'Dr. Kavita M.',
      badge: 'Board-Certified Gynecologist',
    },
  ];

  return (
    <section
      id="chapter-6"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--cream)',
      }}
    >
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
            chapter="CHAPTER 06"
            title="Unhindered Living"
            vector={<VectorChapter6 />}
            narrative="Waking up on day two with crisp white bedsheets unstained. Stepping into a morning run with zero fear of friction rashes. Real stories of women reclaiming peace and total bodily comfort during their cycle."
            reflection="99.4% Rash-Free Clinical Trial · Gynecologist Endorsed · 4.9/5 Rating"
          />

          {/* Clean Testimonial Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  backgroundColor: 'var(--cream)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: '1px solid var(--hairline)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--dark-plum)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '14px',
                  }}
                >
                  “{t.quote}”
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--deep-plum)' }}>{t.author}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--coral)', fontWeight: 600 }}>
                    {t.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
