'use client';

import React, { useState } from 'react';
import { StoryAside } from './StoryAside';
import { VectorChapter2 } from './VectorIllustrations';
import { useCart } from '@/context/CartContext';

export function AtelierCustomizer() {
  const { addItem } = useCart();

  // State
  const [size, setSize] = useState<'240' | '280' | '320' | '350'>('280');
  const [infusion, setInfusion] = useState<'aloe-neem' | 'mint' | 'pure'>('aloe-neem');
  const [packCount, setPackCount] = useState<10 | 20 | 30>(20);

  // Pad specifications
  const sizeConfig = {
    '240': { label: 'Regular Day (240mm)', desc: 'Light to moderate daily hours', price: 8, height: 280, d: "M 70,25 C 100,10 160,10 190,25 C 215,38 215,85 190,100 C 185,103 182,110 182,120 C 182,128 210,135 220,150 C 220,175 190,185 182,185 C 182,195 188,205 190,215 C 215,230 215,275 190,285 C 160,300 100,300 70,285 C 45,275 45,230 70,215 C 72,205 78,195 78,185 C 70,185 40,175 40,150 C 50,135 78,128 78,120 C 78,110 75,103 70,100 C 45,85 45,38 70,25 Z", viewBox: "0 0 260 320", chipY: 90, chipHeight: 130 },
    '280': { label: 'Super Heavy (280mm)', desc: 'Active days & high volume flow', price: 10, height: 320, d: "M 70,20 C 100,6 160,6 190,20 C 218,34 218,95 190,112 C 185,116 182,124 182,135 C 182,145 214,152 225,170 C 225,198 190,210 182,210 C 182,222 188,235 190,248 C 218,265 218,320 190,332 C 160,348 100,348 70,332 C 42,320 42,265 70,248 C 72,235 78,222 78,210 C 70,210 35,198 35,170 C 46,152 78,145 78,135 C 78,124 75,116 70,112 C 42,95 42,34 70,20 Z", viewBox: "0 0 260 360", chipY: 100, chipHeight: 155 },
    '320': { label: 'Overnight Guard (320mm)', desc: '360° sleep protection with wide fan-tail', price: 12, height: 360, d: "M 70,16 C 100,4 160,4 190,16 C 220,30 220,105 190,125 C 185,129 182,138 182,150 C 182,162 216,170 228,190 C 228,222 190,236 182,236 C 182,250 190,268 192,284 C 224,305 224,368 192,382 C 160,400 100,400 68,382 C 36,368 36,305 68,284 C 70,268 78,250 78,236 C 70,236 32,222 32,190 C 44,170 78,162 78,150 C 78,138 75,129 70,125 C 40,105 40,30 70,16 Z", viewBox: "0 0 260 410", chipY: 110, chipHeight: 185 },
    '350': { label: 'Maternity Maxi (350mm)', desc: 'Postpartum recovery & maximum coverage', price: 14, height: 400, d: "M 68,14 C 100,2 160,2 192,14 C 224,28 224,115 192,138 C 186,142 182,152 182,166 C 182,180 220,190 232,212 C 232,248 190,264 182,264 C 182,280 192,302 194,320 C 230,345 230,418 194,435 C 160,455 100,455 66,435 C 30,418 30,345 66,320 C 68,302 78,280 78,264 C 70,264 28,248 28,212 C 40,190 78,180 78,166 C 78,152 74,142 68,138 C 36,115 36,28 68,14 Z", viewBox: "0 0 260 460", chipY: 120, chipHeight: 215 },
  };

  const infusionConfig = {
    'aloe-neem': { label: 'Soothing Aloe & Neem', color: '#5C8A66', note: 'Antibacterial & anti-rash' },
    'mint': { label: 'Cooling Mint & Camellia', color: '#4A8B8B', note: 'Freshness & thermal relief' },
    'pure': { label: 'Pure Organic Cotton', color: '#BCA893', note: 'Unscented hypoallergenic simplicity' },
  };

  const packMultiplier = {
    10: 1.0,
    20: 1.85,
    30: 2.6,
  };

  const currentSize = sizeConfig[size];
  const currentInfusion = infusionConfig[infusion];
  const calculatedPrice = (currentSize.price * packMultiplier[packCount]).toFixed(2);

  const handleAddCustomBox = () => {
    addItem({
      title: `Custom Pink Lady Box (${packCount} Pads)`,
      details: `${currentSize.label} • ${currentInfusion.label}`,
      price: parseFloat(calculatedPrice),
      qty: 1,
      image: '/images/custom_box.jpg',
    });
  };


  return (
    <section
      id="chapter-2"
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
            alignItems: 'start',
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            border: '1px solid var(--hairline)',
            boxShadow: '0 8px 30px rgba(103, 60, 103, 0.04)',
          }}
        >
          {/* Left: Chapter 2 Story Aside */}
          <StoryAside
            chapter="CHAPTER 02"
            title="Honoring Her Flow"
            vector={<VectorChapter2 />}
            narrative="No two cycles are identical; no two bodies move the same. Why should you be confined to a standard, one-size box? Here, you are the architect of your own comfort — crafting lengths and herbal infusions that honor your natural rhythm."
            reflection="Customizable Lengths · Dual-Contour Wings · Live Pad Adaptation"
          />

          {/* Right: The Minimalist Atelier Customizer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                INTERACTIVE CONFIGURATOR
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--deep-plum)', marginTop: '4px' }}>
                The Pink Lady Atelier
              </h3>
            </div>

            {/* Live Pad Morphing Preview */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid var(--hairline)',
              }}
            >
              <div style={{ width: '100%', maxWidth: '240px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg
                  viewBox={currentSize.viewBox}
                  width="100%"
                  height="100%"
                  style={{ transition: 'all 0.4s var(--ease-smooth)', filter: 'drop-shadow(0 8px 20px rgba(103, 60, 103, 0.08))' }}
                >
                  <path
                    d={currentSize.d}
                    fill="#FFFFFF"
                    stroke="#E9DCD7"
                    strokeWidth="2.5"
                    style={{ transition: 'd 0.4s var(--ease-smooth)' }}
                  />
                  <rect
                    x="116"
                    y={currentSize.chipY}
                    width="28"
                    height={currentSize.chipHeight}
                    rx="14"
                    fill={currentInfusion.color}
                    fillOpacity="0.85"
                    style={{ transition: 'all 0.3s ease' }}
                  />
                </svg>
              </div>

              <div style={{ marginTop: '14px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--deep-plum)', textAlign: 'center' }}>
                {currentSize.label} • <span style={{ color: currentInfusion.color }}>{currentInfusion.label}</span>
              </div>
            </div>

            {/* Step 1: Size Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--deep-plum)', marginBottom: '10px' }}>
                1. SELECT PAD LENGTH
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                {(['240', '280', '320', '350'] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSize(sz)}
                    style={{
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      border: size === sz ? '1.5px solid var(--coral)' : '1px solid var(--hairline)',
                      backgroundColor: size === sz ? 'var(--soft-peach-subtle)' : 'var(--cream)',
                      color: 'var(--deep-plum)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '0.88rem' }}>{sz}mm</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--dark-plum-muted)' }}>
                      {sz === '240' ? 'Regular' : sz === '280' ? 'Super Heavy' : sz === '320' ? 'Overnight' : 'Maternity'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Herbal Core Infusion */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--deep-plum)', marginBottom: '10px' }}>
                2. SELECT HERBAL INFUSION CORE
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                {(['aloe-neem', 'mint', 'pure'] as const).map((inf) => {
                  const cfg = infusionConfig[inf];
                  const isSelected = infusion === inf;
                  return (
                    <button
                      key={inf}
                      onClick={() => setInfusion(inf)}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        border: isSelected ? '1.5px solid var(--coral)' : '1px solid var(--hairline)',
                        backgroundColor: isSelected ? 'var(--soft-peach-subtle)' : 'var(--cream)',
                        color: 'var(--deep-plum)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: cfg.color }}></span>
                        {cfg.label.split('&')[0]}
                      </strong>
                      <span style={{ fontSize: '0.74rem', color: 'var(--dark-plum-muted)' }}>{cfg.note}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pack Size */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--deep-plum)', marginBottom: '10px' }}>
                3. SELECT BOX COUNT
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {([10, 20, 30] as const).map((count) => (
                  <button
                    key={count}
                    onClick={() => setPackCount(count)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: 'var(--radius-pill)',
                      border: packCount === count ? '1.5px solid var(--coral)' : '1px solid var(--hairline)',
                      backgroundColor: packCount === count ? 'var(--coral)' : 'var(--cream)',
                      color: packCount === count ? 'var(--white)' : 'var(--deep-plum)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'center',
                    }}
                  >
                    {count} Pads Box
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Action */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: '1px solid var(--hairline)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--dark-plum-muted)' }}>Custom Box Total</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--deep-plum)', fontFamily: 'var(--font-serif)' }}>
                  ${calculatedPrice}
                </div>
              </div>

              <button onClick={handleAddCustomBox} className="btn-primary">
                Add to Care Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
