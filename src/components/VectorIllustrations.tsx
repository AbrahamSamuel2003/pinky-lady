import React from 'react';

interface VectorProps {
  className?: string;
}

/**
 * Chapter 01 — The Awakening
 * Minimalist continuous line-art of a serene woman greeting dawn with an organic botanical leaf.
 */
export function VectorChapter1({ className }: VectorProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Soft Peach Organic Background Halo */}
      <path d="M40 140 C40 80, 80 40, 150 40 C220 40, 240 100, 240 160 C240 220, 180 240, 120 240 C60 240, 40 200, 40 140 Z" fill="#F8D9CD" fillOpacity="0.45" />

      {/* Gentle Dawn Sun Arc */}
      <circle cx="140" cy="140" r="85" stroke="#E76F70" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />

      {/* Elegant Feminine Profile (Deep Plum Fine Line) */}
      <path d="M125 80 C138 80, 152 86, 156 98 C160 110, 152 118, 146 126 C140 134, 142 144, 150 152 C158 160, 162 170, 154 182 C146 194, 132 202, 122 208" stroke="#673C67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Flowing Hair Waves */}
      <path d="M136 86 C120 90, 108 106, 110 126 C112 144, 100 164, 88 180 C82 188, 76 198, 78 208" stroke="#673C67" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M148 92 C132 98, 122 114, 124 134 C126 150, 116 168, 104 186" stroke="#E76F70" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* Botanical Neem/Aloe Leaf Blossom */}
      <path d="M162 140 C175 125, 195 120, 205 132 C215 144, 205 165, 185 168 C172 170, 164 158, 162 140 Z" fill="#E76F70" fillOpacity="0.15" stroke="#E76F70" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M165 152 C180 148, 194 142, 204 134" stroke="#673C67" strokeWidth="1.2" strokeLinecap="round" />

      {/* Stem Branch */}
      <path d="M154 182 C168 178, 184 176, 200 180" stroke="#673C67" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M182 178 C188 170, 196 168, 202 174 C198 180, 190 182, 182 178 Z" fill="#673C67" fillOpacity="0.7" />
    </svg>
  );
}

/**
 * Chapter 02 — Honoring Her Flow
 * Minimalist fluid water ripples and tailored pad contour silhouette.
 */
export function VectorChapter2({ className }: VectorProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background Organic Aura */}
      <path d="M50 120 C50 60, 110 50, 160 50 C210 50, 235 90, 235 150 C235 210, 180 230, 130 230 C80 230, 50 180, 50 120 Z" fill="#F8D9CD" fillOpacity="0.4" />

      {/* Fluid Tide Ripples (Flow Variability) */}
      <path d="M50 85 C80 95, 110 80, 140 90 C170 100, 200 85, 230 95" stroke="#E76F70" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
      <path d="M45 195 C75 185, 105 200, 135 190 C165 180, 195 195, 225 185" stroke="#E76F70" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />

      {/* Tailored Napkin Contour in Fine Line-Art */}
      <path d="M120 70 C132 64, 148 64, 160 70 C174 76, 175 102, 164 112 C160 116, 158 122, 160 128 C160 134, 178 138, 184 148 C184 162, 166 168, 160 168 C158 174, 162 182, 164 188 C175 198, 174 224, 160 230 C148 236, 132 236, 120 230 C106 224, 105 198, 116 188 C118 182, 122 174, 120 168 C114 168, 96 162, 96 148 C102 138, 120 134, 120 128 C122 122, 120 116, 116 112 C105 102, 106 76, 120 70 Z" 
            stroke="#673C67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" fillOpacity="0.75" />

      {/* Internal Herbal Chip Contour */}
      <rect x="131" y="115" width="18" height="70" rx="9" stroke="#E76F70" strokeWidth="1.6" fill="#E76F70" fillOpacity="0.15" />
      
      {/* Dimension Line Micro-Indicators */}
      <line x1="84" y1="70" x2="84" y2="230" stroke="#673C67" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
      <line x1="80" y1="70" x2="88" y2="70" stroke="#673C67" strokeWidth="1" />
      <line x1="80" y1="230" x2="88" y2="230" stroke="#673C67" strokeWidth="1" />
      <text x="68" y="154" fill="#673C67" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" textAnchor="middle" transform="rotate(-90 68 154)">240 - 350mm</text>
    </svg>
  );
}

/**
 * Chapter 03 — Earth's Ancient Wisdom
 * Botanical line-drawing of Neem leaves and Aloe Vera cross-section.
 */
export function VectorChapter3({ className }: VectorProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background Soft Organic Blob */}
      <path d="M60 130 C60 70, 100 50, 160 50 C220 50, 230 110, 220 170 C210 230, 150 235, 100 220 C60 210, 60 180, 60 130 Z" fill="#F8D9CD" fillOpacity="0.45" />

      {/* Aloe Leaf Geometry */}
      <path d="M100 220 C95 160, 115 110, 155 70 C145 110, 150 170, 175 220 Z" fill="#E76F70" fillOpacity="0.1" stroke="#673C67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Aloe cross-ribs */}
      <path d="M120 180 C130 175, 145 180, 155 185" stroke="#E76F70" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M128 140 C135 136, 144 140, 150 144" stroke="#E76F70" strokeWidth="1.2" strokeLinecap="round" />

      {/* Fresh Neem Leaf Sprig */}
      <path d="M80 180 C120 150, 170 130, 215 100" stroke="#673C67" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Neem Leaflets */}
      <path d="M130 144 C132 130, 146 124, 156 130 C150 142, 138 148, 130 144 Z" fill="#673C67" stroke="#673C67" strokeWidth="1.2" />
      <path d="M155 126 C162 112, 178 108, 186 116 C178 126, 165 130, 155 126 Z" fill="#E76F70" stroke="#E76F70" strokeWidth="1.2" />
      <path d="M185 108 C192 94, 206 90, 214 98 C206 108, 195 112, 185 108 Z" fill="#673C67" stroke="#673C67" strokeWidth="1.2" />
      <path d="M142 160 C138 174, 124 178, 116 170 C124 160, 136 156, 142 160 Z" fill="#E76F70" stroke="#E76F70" strokeWidth="1.2" fillOpacity="0.8" />
    </svg>
  );
}

/**
 * Chapter 04 — Seven Whispering Veils
 * Exploded architectural isometric micro-layer lines.
 */
export function VectorChapter4({ className }: VectorProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      <path d="M50 130 C50 60, 110 40, 170 50 C230 60, 240 130, 225 180 C210 230, 140 240, 90 220 C50 200, 50 170, 50 130 Z" fill="#F8D9CD" fillOpacity="0.4" />

      {/* Layer 1: Topsheet */}
      <path d="M70 70 L210 70 L190 92 L50 92 Z" stroke="#673C67" strokeWidth="1.8" fill="#FFFFFF" fillOpacity="0.9" />
      
      {/* Layer 2: Herbal Bio-Chip (Coral) */}
      <path d="M100 102 L180 102 L165 116 L85 116 Z" stroke="#E76F70" strokeWidth="1.8" fill="#E76F70" fillOpacity="0.25" />

      {/* Layer 3: Dispersion Membrane */}
      <path d="M70 126 L210 126 L190 144 L50 144 Z" stroke="#673C67" strokeWidth="1.4" strokeDasharray="4 2" fill="#FFFFFF" fillOpacity="0.8" />

      {/* Layer 4: SAP Core */}
      <path d="M70 154 L210 154 L190 174 L50 174 Z" stroke="#673C67" strokeWidth="1.8" fill="#F8D9CD" fillOpacity="0.7" />

      {/* Layer 5: Breathable Base */}
      <path d="M70 186 L210 186 L190 208 L50 208 Z" stroke="#673C67" strokeWidth="1.8" fill="#FFFFFF" fillOpacity="0.9" />

      {/* Connecting Vertical Guide Ray */}
      <line x1="130" y1="58" x2="130" y2="220" stroke="#E76F70" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.7" />
    </svg>
  );
}

/**
 * Chapter 05 — The Care Ritual
 * Minimalist vector line-art of the eco-luxury cardboard packaging box tied with an organic sprig.
 */
export function VectorChapter5({ className }: VectorProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      <path d="M60 120 C60 60, 110 50, 160 50 C210 50, 235 90, 235 150 C235 210, 180 235, 120 235 C60 235, 60 180, 60 120 Z" fill="#F8D9CD" fillOpacity="0.4" />

      {/* 3D Isometric Minimalist Box */}
      {/* Top Face */}
      <path d="M140 85 L215 115 L140 145 L65 115 Z" stroke="#673C67" strokeWidth="2" fill="#FFFFFF" fillOpacity="0.9" />
      {/* Left Face */}
      <path d="M65 115 L140 145 L140 215 L65 185 Z" stroke="#673C67" strokeWidth="2" fill="#F8D9CD" fillOpacity="0.3" />
      {/* Right Face */}
      <path d="M140 145 L215 115 L215 185 L140 215 Z" stroke="#673C67" strokeWidth="2" fill="#E76F70" fillOpacity="0.1" />

      {/* Organic Botanical Ribbon Tie */}
      <path d="M135 115 C130 98, 120 90, 112 95 C104 100, 110 115, 135 125" stroke="#E76F70" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M145 115 C150 98, 160 90, 168 95 C176 100, 170 115, 145 125" stroke="#E76F70" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Delicate Leaf on Box */}
      <path d="M140 125 C146 132, 154 134, 160 130 C158 122, 148 120, 140 125 Z" fill="#673C67" />
    </svg>
  );
}

/**
 * Chapter 06 — Unhindered Living
 * Graceful line silhouette of a woman in liberated, joyful motion.
 */
export function VectorChapter6({ className }: VectorProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      <path d="M45 130 C45 60, 100 40, 160 40 C220 40, 240 100, 235 160 C230 220, 170 240, 110 240 C50 240, 45 190, 45 130 Z" fill="#F8D9CD" fillOpacity="0.45" />

      {/* Woman in Fluid Leap / Dance Motion */}
      {/* Head */}
      <circle cx="140" cy="75" r="14" stroke="#673C67" strokeWidth="2" fill="#FFFFFF" />

      {/* Torso & Arch of Back */}
      <path d="M140 89 C140 108, 148 128, 142 148" stroke="#673C67" strokeWidth="2" strokeLinecap="round" />

      {/* Outstretched Arms (Freedom) */}
      <path d="M102 96 C118 100, 134 104, 150 104 C168 104, 186 98, 198 90" stroke="#673C67" strokeWidth="2" strokeLinecap="round" />

      {/* Floating Fabric Ribbon / Botanical Breeze */}
      <path d="M85 120 C105 135, 135 130, 165 145 C190 155, 205 175, 215 195" stroke="#E76F70" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8" />

      {/* Extended Legs */}
      <path d="M142 148 C135 170, 120 190, 105 210" stroke="#673C67" strokeWidth="2" strokeLinecap="round" />
      <path d="M142 148 C155 168, 172 186, 188 202" stroke="#673C67" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
