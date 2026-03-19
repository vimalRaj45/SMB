import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navLinksRef = useRef([]);
  const drawerLinksRef = useRef([]);
  const logoRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.fromTo(navbarRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    );
    
    tl.fromTo(logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    tl.fromTo(navLinksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      '-=0.3'
    );

    // Hide/Show on scroll logic
    let lastScroll = 0;
    let scrollTimeout;
    const showNav = () => gsap.to(navbarRef.current, { y: 0, duration: 0.4, ease: 'power2.out' });
    const hideNav = () => gsap.to(navbarRef.current, { y: -100, duration: 0.4, ease: 'power2.in' });

    const scrollListener = () => {
      const currentScroll = window.pageYOffset;
      
      // Clear timeout on every scroll event
      if (scrollTimeout) clearTimeout(scrollTimeout);

      if (currentScroll <= 100) {
        showNav();
        return;
      }
      
      if (currentScroll > lastScroll) {
        hideNav();
      } else {
        showNav();
      }
      lastScroll = currentScroll;

      // Show nav when scrolling stops (after 200ms)
      scrollTimeout = setTimeout(() => {
        showNav();
      }, 200);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', scrollListener);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(drawerLinksRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.2
      });
    } else {
      document.body.style.overflow = 'unset';
      gsap.set(drawerLinksRef.current, { x: 50, opacity: 0 });
    }
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const addToNavLinks = (el) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current.push(el);
    }
  };

  const addToDrawerLinks = (el) => {
    if (el && !drawerLinksRef.current.includes(el)) {
      drawerLinksRef.current.push(el);
    }
  };

  return (
    <>
      {/* SIDE DRAWER */}
      <div 
        className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} 
        onClick={closeDrawer}
      ></div>
      <div className={`side-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="flex flex-col mb-6 pt-2">
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex items-center space-x-3">
               <img src="https://i.ibb.co/6cwgM6cx/Whats-App-Image-2026-02-24-at-8-39-10-PM.jpg" alt="Logo" className="h-9 w-auto rounded-full shadow-lg border-2 border-[#cf9432]" />
               <div className="flex flex-col">
                 <span className="logo-text font-bold text-base tracking-tight text-[#162a4f] leading-tight text-nowrap">SRI MAYIL</span>
                 <span className="logo-text text-[9px] text-[#cf9432] font-medium tracking-widest leading-none uppercase">BUILDERS</span>
               </div>
            </div>
            <button onClick={closeDrawer} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-[#162a4f] hover:bg-[#cf9432] hover:text-white transition-all text-sm">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
        <nav className="flex flex-col space-y-1.5">
          {[
            { name: 'Home', href: '#home', icon: 'bi-house-door' },
            { name: 'About', href: '#about', icon: 'bi-info-circle' },
            { name: 'Services', href: '#services', icon: 'bi-tools' },
            { name: 'Projects', href: '#projects', icon: 'bi-building' },
            { name: 'Team', href: '#team', icon: 'bi-people' },
            { name: 'Estimation', href: '#estimation', icon: 'bi-calculator' },
            { name: 'Contact', href: '#contact', icon: 'bi-envelope' },
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              ref={addToDrawerLinks}
              onClick={closeDrawer} 
              className="drawer-link group flex items-center justify-between p-2.5 rounded-2xl border border-transparent hover:border-[#cf9432]/20 hover:bg-[#cf9432]/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 text-[#162a4f] group-hover:bg-[#cf9432] group-hover:text-white transition-colors duration-300">
                  <i className={`bi ${item.icon}`}></i>
                </span>
                <span className="text-[#1F2937] font-semibold text-base">{item.name}</span>
              </div>
              <i className="bi bi-chevron-right text-xs text-gray-400 group-hover:text-[#cf9432] group-hover:translate-x-1 transition-all"></i>
            </a>
          ))}
          
          <div className="pt-8">
            <div className="bg-gradient-to-br from-[#162a4f] to-[#2a4a8f] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold mb-2">Need Assistance?</h4>
                <p className="text-xs text-white/70 mb-4">Contact our support team for a free consultation.</p>
                <a href="tel:+918124627498" className="flex items-center space-x-2 bg-[#cf9432] py-2 px-4 rounded-lg font-bold text-center text-sm shadow-lg hover:bg-[#dfb36b] transition-colors">
                  <i className="bi bi-telephone-fill"></i>
                  <span>Call Now</span>
                </a>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </nav>
      </div>

      {/* MAIN NAVBAR */}
      <nav 
        ref={navbarRef}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" ref={logoRef} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className={`absolute inset-0 bg-[#cf9432] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              <img 
                src="https://i.ibb.co/6cwgM6cx/Whats-App-Image-2026-02-24-at-8-39-10-PM.jpg" 
                alt="Logo" 
                className={`h-10 md:h-12 w-auto rounded-full ring-2 ${isScrolled ? 'ring-[#162a4f]/10' : 'ring-white/20'} transition-all duration-300`} 
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg md:text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#162a4f]' : 'text-white'} text-nowrap`}>
                SRI MAYIL <span className="text-[#cf9432]">BUILDERS</span>
              </span>
              <span className={`text-[9px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                Foundation for life
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', href: '#home', icon: 'bi-house-door' },
              { name: 'About', href: '#about', icon: 'bi-info-circle' },
              { name: 'Services', href: '#services', icon: 'bi-tools' },
              { name: 'Projects', href: '#projects', icon: 'bi-building' },
              { name: 'Team', href: '#team', icon: 'bi-people' },
            ].map((item, idx) => (
              <a 
                key={item.name}
                href={item.href}
                ref={addToNavLinks}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group flex items-center gap-2 ${
                  isScrolled ? 'text-[#162a4f]' : 'text-white'
                }`}
              >
                <i className={`bi ${item.icon} text-base transition-all duration-500 group-hover:text-[#cf9432] ${idx % 2 === 0 ? 'bi-animate-hover-bounce' : 'bi-animate-hover-spin'}`}></i>
                <span className="relative z-10 group-hover:text-[#cf9432] transition-colors duration-300">{item.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#cf9432] transition-all duration-300 group-hover:w-1/2"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 mr-2">
              <a href="tel:+918124627498" className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group ${isScrolled ? 'bg-gray-100 text-[#162a4f] hover:bg-[#cf9432] hover:text-white' : 'bg-white/10 text-white hover:bg-white hover:text-[#162a4f]'}`}>
                <i className="bi bi-telephone-fill transition-transform group-hover:rotate-12 bi-animate-hover-bounce"></i>
              </a>
              <a href="https://wa.me/918124627498" target="_blank" rel="noreferrer" className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group ${isScrolled ? 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white' : 'bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white'}`}>
                <i className="bi bi-whatsapp transition-transform group-hover:scale-110"></i>
              </a>
            </div>
            
            <a href="#contact" className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg transform active:scale-95 transition-all duration-300 group ${isScrolled ? 'bg-[#cf9432] text-white hover:bg-[#162a4f]' : 'bg-white text-[#162a4f] hover:bg-[#cf9432] hover:text-white'}`}>
              <i className="bi bi-lightning-charge-fill transition-all group-hover:rotate-12"></i>
              <span>Get Quote</span>
            </a>

            <button 
              onClick={toggleDrawer}
              className={`p-3 rounded-full transition-all duration-300 ${isScrolled ? 'text-[#162a4f] bg-gray-100 hover:bg-[#cf9432] hover:text-white' : 'text-white bg-white/10 hover:bg-white/20'}`}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isDrawerOpen ? 'w-6 translate-y-[9px] -rotate-45' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isDrawerOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isDrawerOpen ? 'w-6 -translate-y-[9px] rotate-45' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
