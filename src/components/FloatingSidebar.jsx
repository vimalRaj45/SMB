import React from 'react';

const FloatingSidebar = () => {
  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 9000,
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      borderRadius: '16px 0 0 16px',
      overflow: 'hidden',
      boxShadow: '-4px 4px 20px rgba(0,0,0,0.18)',
    }}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/918124627498"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '56px',
          background: '#25D366',
          color: 'white',
          fontSize: '24px',
          transition: 'all 0.25s ease',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.width = '68px';
          e.currentTarget.style.background = '#1ebe5d';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.width = '52px';
          e.currentTarget.style.background = '#25D366';
        }}
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/srimayilbuilders"
        target="_blank"
        rel="noreferrer"
        title="Follow on Instagram"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '56px',
          background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
          color: 'white',
          fontSize: '22px',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.width = '68px';
          e.currentTarget.style.filter = 'brightness(1.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.width = '52px';
          e.currentTarget.style.filter = 'brightness(1)';
        }}
      >
        <i className="bi bi-instagram"></i>
      </a>
    </div>
  );
};

export default FloatingSidebar;
