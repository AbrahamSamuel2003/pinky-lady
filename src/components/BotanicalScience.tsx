'use client';

import React from 'react';
import { StoryAside } from './StoryAside';
import { VectorChapter3 } from './VectorIllustrations';

export function BotanicalScience() {
  const botanicals = [
    {
      name: 'Sacred Neem',
      latin: 'Azadirachta Indica',
      role: 'Antibacterial Defense',
      desc: 'Used in Ayurveda for thousands of years. Naturally eliminates 99.9% of bacteria without chemical sting or artificial disinfectants.',
    },
    {
      name: 'Cooling Aloe',
      latin: 'Aloe Barbadensis',
      role: 'Soothes & Balances pH',
      desc: 'Plant enzymes that calm friction-chafed skin and preserve the natural acidity balance of intimate areas throughout long days.',
    },
    {
      name: 'Bamboo Cotton',
      latin: 'Bambusoideae & Gossypium',
      role: 'Whisper Purity',
      desc: 'Silky unbleached fibers that breathe naturally. Zero plastic top-sheets, zero chemical bleach, and rapidly biodegradable.',
    },
    {
      name: 'Gentle Mint',
      latin: 'Mentha Piperita',
      role: 'Thermal Calm',
      desc: 'Micro-cooling touch that disperses trapped body heat, restoring natural freshness and neutralizing odor with zero synthetic perfumes.',
    },
  ];

  return (
    <section
      id="chapter-3"
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
            chapter="CHAPTER 03"
            title="Earth’s Secret Healers"
            vector={<VectorChapter3 />}
            narrative="Long before commercial factories, our grandmothers turned to Sacred Neem to cleanse, soothing Aloe to calm inflammation, and Mint to restore peace. We distilled this ancient Ayurvedic memory into every single botanical fiber."
            reflection="Ayurvedic Bio-Core · 99.9% Bacterial Neutralization · 0% Synthetic Scents"
          />

          {/* Clean 2x2 Botanical Ingredient Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {botanicals.map((bot) => (
              <div
                key={bot.name}
                style={{
                  backgroundColor: 'var(--cream)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: '1px solid var(--hairline)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--coral)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '6px',
                  }}
                >
                  {bot.role}
                </span>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--deep-plum)', marginBottom: '4px' }}>
                  {bot.name}
                </h4>
                <div style={{ fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--dark-plum-light)', marginBottom: '12px' }}>
                  {bot.latin}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--dark-plum-muted)', lineHeight: 1.6 }}>
                  {bot.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
