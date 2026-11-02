'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { StoryAside } from './StoryAside';
import { VectorChapter4 } from './VectorIllustrations';

export function PadAnatomy() {
  const [activeLayer, setActiveLayer] = useState(2);

  const layers = [
    { num: 1, title: 'Organic Bamboo & Cotton Veil', desc: 'Whisper-soft contact surface that completely eliminates friction, chafing, and moisture cling against sensitive skin.' },
    { num: 2, title: 'Ayurvedic Neem & Aloe Chip', desc: 'Embedded natural botanical core that naturally suppresses 99.9% of bacterial colonization and prevents rash flare-ups.' },
    { num: 3, title: 'Airlaid Fluid Guidance Layer', desc: 'Rapidly distributes liquid evenly downwards within 0.3 seconds to stop localized puddling or surface wetness.' },
    { num: 4, title: 'Japanese SAP Absorption Gel Core', desc: 'Medical-grade polymer micro-matrix locking 10x its weight in liquid, turning fluid into dry gel without bulkiness.' },
    { num: 5, title: 'Dual-Contour Side Barrier Wings', desc: 'Flexible side contouring that gently wraps intimate apparel without adhesive friction or pinching.' },
    { num: 6, title: 'Micro-Porous Breathable Shield', desc: 'Microscopic pores that allow body heat and vapor to evaporate outward while keeping moisture locked securely.' },
    { num: 7, title: 'Food-Grade Clean Adhesive', desc: 'Secures firmly without shifting and leaves zero sticky residue on delicate undergarments.' },
  ];

  return (
    <section
      id="chapter-4"
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
            chapter="CHAPTER 04"
            title="Seven Whispering Veils"
            vector={<VectorChapter4 />}
            narrative="Invisible architecture working silently so you forget it is even there. Seven ultra-thin, breathable micro-layers engineered not to constrict, but to let your skin breathe freely from sunrise to deep sleep."
            reflection="0.8mm Feather Fit · Japanese SAP Dry Matrix · Breathable Micro-Shield"
          />

          {/* Interactive Layer Breakdown */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/images/layers_macro.jpg" alt="Macro pad texture" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--coral)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  ACTIVE INSPECTION
                </span>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--deep-plum)' }}>
                  Layer 0{activeLayer}: {layers[activeLayer - 1].title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--dark-plum-muted)' }}>
                  {layers[activeLayer - 1].desc}
                </p>
              </div>
            </div>

            {/* Quiet Layer Number Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {layers.map((l) => {
                const isActive = activeLayer === l.num;
                return (
                  <button
                    key={l.num}
                    onClick={() => setActiveLayer(l.num)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '10px 16px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isActive ? 'var(--soft-peach-subtle)' : 'var(--cream)',
                      border: isActive ? '1px solid var(--coral)' : '1px solid var(--hairline)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: isActive ? 'var(--coral)' : 'var(--hairline)',
                        color: isActive ? 'var(--white)' : 'var(--deep-plum)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {l.num}
                    </span>
                    <span style={{ fontSize: '0.88rem', fontWeight: isActive ? 600 : 500, color: 'var(--deep-plum)' }}>
                      {l.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
