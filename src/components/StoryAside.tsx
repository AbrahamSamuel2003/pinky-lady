import React from 'react';

interface StoryAsideProps {
  chapter: string;
  title: string;
  narrative: string;
  reflection?: string;
  vector: React.ReactNode;
  align?: 'left' | 'right';
}

export function StoryAside({
  chapter,
  title,
  narrative,
  reflection,
  vector,
}: StoryAsideProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '24px 0',
      maxWidth: '440px',
    }}>
      {/* Chapter Indicator */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.8rem',
        fontWeight: 700,
        color: 'var(--coral)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '14px',
      }}>
        <span>{chapter}</span>
        <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--coral)' }}></span>
      </div>

      {/* Chapter Title */}
      <h3 style={{
        fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
        color: 'var(--deep-plum)',
        lineHeight: 1.25,
        marginBottom: '20px',
      }}>
        {title}
      </h3>

      {/* Vector Line-Art Illustration */}
      <div style={{
        margin: '12px 0 24px 0',
        display: 'flex',
        justifyContent: 'flex-start',
      }}>
        {vector}
      </div>

      {/* Micro-Story Narrative */}
      <p style={{
        fontSize: '1.02rem',
        color: 'var(--dark-plum-muted)',
        lineHeight: 1.75,
        fontStyle: 'italic',
        marginBottom: '16px',
        borderLeft: '2px solid var(--soft-peach)',
        paddingLeft: '16px',
      }}>
        “{narrative}”
      </p>

      {/* Optional Short Reflection */}
      {reflection && (
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--deep-plum)',
          letterSpacing: '0.02em',
        }}>
          {reflection}
        </span>
      )}
    </div>
  );
}
