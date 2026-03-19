import React, { useEffect, useState } from 'react';
import velImage from '../assets/vel_smb.jpeg';

/*
  SEQUENCE:
  0s    → Vel slides UP from bottom (fullscreen BG)
  1.2s  → Logo + Name + Slogan appear (centered)
  2.0s  → Wings fan OPEN behind logo
  3.8s  → Wings CLOSE + Logo HIDES together
  4.8s  → Vel slides OUT from top
  5.5s  → Curtains open
  6.8s  → Preloader removed
*/

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);
  // 0 = vel entering
  // 1 = logo visible
  // 2 = wings opening
  // 3 = wings closing + logo hiding
  // 4 = vel exiting

  const featherCount = 14;
  const featherColors = [
    '#2E8B8B','#1ca684','#D4A017','#1E3A5F','#297d86','#cf9432','#D4A017',
    '#D4A017','#cf9432','#297d86','#1E3A5F','#D4A017','#1ca684','#2E8B8B'
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1300);   // logo appears
    const t2 = setTimeout(() => setStep(2), 2100);   // wings open
    const t3 = setTimeout(() => setStep(3), 3900);   // wings close + logo hides
    const t4 = setTimeout(() => setStep(4), 5000);   // vel exits from top
    const t5 = setTimeout(() => {
      document.getElementById('curtain-left')?.classList.add('open-left');
      document.getElementById('curtain-right')?.classList.add('open-right');
    }, 5700);
    const t6 = setTimeout(() => {
      setIsVisible(false);
      window.dispatchEvent(new Event('preloader_finished'));
    }, 7000);
    return () => [t1,t2,t3,t4,t5,t6].forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999999,
      background: '#061021',
      overflow: 'hidden',
    }}>
      {/* Curtains */}
      <div id="curtain-left" className="curtain curtain-left" />
      <div id="curtain-right" className="curtain curtain-right" />

      {/* ─── VEL FULLSCREEN BACKGROUND ─── */}
      <div style={{
        position: 'absolute', inset: 0,
        zIndex: 100000,
        backgroundImage: `url(${velImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        animation: step < 4
          ? 'velSlideIn 1.2s cubic-bezier(0.22,1,0.36,1) forwards'
          : 'velSlideOut 1.0s cubic-bezier(0.7,0,0.3,1) forwards',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(6,16,33,0.05) 0%, rgba(6,16,33,0.45) 55%, rgba(6,16,33,0.9) 100%)',
        }} />
      </div>

      {/* ─── WINGS (open behind logo in step 2, close in step 3) ─── */}
      {step >= 2 && (
        <div style={{
          position: 'absolute',
          top: '46%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(340px, 88vw)',
          height: 'min(340px, 88vw)',
          zIndex: 100001,
          pointerEvents: 'none',
        }}>
          {Array.from({ length: featherCount }).map((_, i) => {
            const angle = -90 + (i / (featherCount - 1)) * 180;
            return (
              <div key={i} style={{
                position: 'absolute',
                bottom: '50%',
                left: 'calc(50% - 2.5px)',
                width: '5px',
                height: 'clamp(115px, 21vw, 160px)',
                borderRadius: '50% 50% 10% 10%',
                transformOrigin: 'bottom center',
                '--r': `${angle}deg`,
                background: `linear-gradient(to top, ${featherColors[i]}, #D4A017)`,
                opacity: 0,
                animationDelay: step >= 3
                  ? `${i * 0.04}s`
                  : `${i * 0.07}s`,
                animation: step >= 3
                  ? 'featherClose 0.8s cubic-bezier(0.4,0,0.8,0) forwards'
                  : 'featherOpen 1.0s cubic-bezier(0.34,1.56,0.64,1) forwards',
              }}>
                <div style={{
                  position: 'absolute', top: '-9px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '11px', height: '11px', borderRadius: '50%',
                  background: 'radial-gradient(circle, #D4A017 30%, #2E8B8B 60%, #1E3A5F 100%)',
                  boxShadow: '0 0 8px rgba(212,160,23,0.9)',
                }} />
              </div>
            );
          })}
        </div>
      )}

      {/* ─── LOGO + NAME + SLOGAN ─── */}
      {/* Appears in step 1, hides in step 3 */}
      {step >= 1 && step < 3 && (
        <div style={{
          position: 'absolute',
          top: '46%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100002,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '0 24px',
          animation: 'contentReveal 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}>
          {/* Logo */}
          <div style={{
            width: 'clamp(100px, 26vw, 128px)',
            height: 'clamp(100px, 26vw, 128px)',
            borderRadius: '50%',
            border: '4px solid #D4A017',
            boxShadow: '0 0 30px rgba(212,160,23,0.7), 0 0 60px rgba(212,160,23,0.3)',
            background: 'white',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <img
              src="https://i.ibb.co/6cwgM6cx/Whats-App-Image-2026-02-24-at-8-39-10-PM.jpg"
              alt="Sri Mayil Builders"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Name */}
          <h2 style={{
            marginTop: '18px',
            color: '#D4A017',
            fontSize: 'clamp(1.1rem, 5vw, 1.75rem)',
            fontWeight: '800',
            letterSpacing: 'clamp(2px, 1vw, 4px)',
            textTransform: 'uppercase',
            textShadow: '0 0 25px rgba(212,160,23,0.7)',
            textAlign: 'center',
            animation: 'slideUp 0.6s ease 0.1s both',
          }}>
            SRI MAYIL BUILDERS
          </h2>

          {/* Slogan */}
          <p style={{
            marginTop: '8px',
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(0.72rem, 2.5vw, 0.88rem)',
            letterSpacing: '1px',
            textAlign: 'center',
            lineHeight: 1.7,
            animation: 'slideUp 0.6s ease 0.25s both',
          }}>
            Strong Foundation… Sustainable Future.<br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>வலுவான அடித்தளம்… நிலையான எதிர்காலம்.</span>
          </p>
        </div>
      )}

      {/* Logo fading out in step 3 (separate so it fades while wings close) */}
      {step === 3 && (
        <div style={{
          position: 'absolute',
          top: '46%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100002,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '0 24px',
          animation: 'fadeOut 0.6s ease forwards',
        }}>
          <div style={{
            width: 'clamp(100px, 26vw, 128px)',
            height: 'clamp(100px, 26vw, 128px)',
            borderRadius: '50%',
            border: '4px solid #D4A017',
            boxShadow: '0 0 30px rgba(212,160,23,0.5)',
            background: 'white',
            overflow: 'hidden',
          }}>
            <img
              src="https://i.ibb.co/6cwgM6cx/Whats-App-Image-2026-02-24-at-8-39-10-PM.jpg"
              alt="Sri Mayil Builders"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{
            marginTop: '18px', color: '#D4A017',
            fontSize: 'clamp(1.1rem, 5vw, 1.75rem)',
            fontWeight: '800', letterSpacing: 'clamp(2px,1vw,4px)',
            textTransform: 'uppercase', textAlign: 'center',
          }}>SRI MAYIL BUILDERS</h2>
          <p style={{
            marginTop: '8px', color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(0.72rem,2.5vw,0.88rem)',
            letterSpacing: '1px', textAlign: 'center', lineHeight: 1.7,
          }}>
            Strong Foundation… Sustainable Future.<br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>வலுவான அடித்தளம்… நிலையான எதிர்காலம்.</span>
          </p>
        </div>
      )}

      <style>{`
        @keyframes velSlideIn {
          0%   { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        @keyframes velSlideOut {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        @keyframes featherOpen {
          0%   { transform: rotate(var(--r)) scaleY(0); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: rotate(var(--r)) scaleY(1); opacity: 0.9; }
        }
        @keyframes featherClose {
          0%   { transform: rotate(var(--r)) scaleY(1); opacity: 0.9; }
          100% { transform: rotate(var(--r)) scaleY(0); opacity: 0; }
        }
        @keyframes contentReveal {
          0%   { transform: translate(-50%, calc(-50% + 30px)); opacity: 0; }
          100% { transform: translate(-50%, -50%); opacity: 1; }
        }
        @keyframes slideUp {
          0%   { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeOut {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
