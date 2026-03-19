import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a14]">
      {/* Background with subtle zoom animation */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bgZoom"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
          filter: 'brightness(0.3) contrast(1.1)'
        }}
        id="hero-bg"
      ></div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/80 via-transparent to-[#050a14] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050a14_100%)] opacity-80"></div>

      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            particles: {
              number: { value: 30, density: { enable: true, area: 800 } },
              color: { value: ["#cf9432", "#ffffff"] },
              shape: {
                type: "circle",
              },
              opacity: {
                value: { min: 0.1, max: 0.3 },
                animation: { enable: true, speed: 0.5, sync: false }
              },
              size: {
                value: { min: 1, max: 3 },
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out"
              }
            }
          }}
          className="absolute w-full h-full top-0 left-0 z-[1] pointer-events-none"
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-6xl pt-40 pb-20 lg:pt-32 lg:pb-0" id="hero-content" style={{ opacity: 0 }}>

        {/* Floating Trust Badge */}
        <div className="mb-6 py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3 animate-fadeIn">
          <span className="flex h-2 w-2 rounded-full bg-[#cf9432] animate-pulse"></span>
          <span className="text-white/80 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase family-outfit">Building Your Dreams to Reality</span>
        </div>

        {/* Main Heading - Outfit Font */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[100px] font-black leading-[1.05] mb-8 hero-text tracking-tighter text-white family-outfit overflow-hidden">
          <div className="reveal-text">Building Your</div>
          <div className="reveal-text bg-gradient-to-r from-[#cf9432] via-[#dfb36b] to-[#cf9432] bg-clip-text text-transparent italic">Dreams to Reality</div>
          <div className="text-lg sm:text-2xl md:text-3xl mt-8 font-semibold text-white/90 block tracking-normal italic opacity-100 family-poppins">
            வலுவான அடித்தளம்… நிலையான எதிர்காலம்.
          </div>
        </h1>

        {/* Description - Poppins Font */}
        <p className="text-[17px] md:text-xl font-medium mb-12 text-white/50 max-w-xl md:max-w-2xl mx-auto leading-relaxed hero-text family-poppins">
          Tamil Nadu's premier construction experts, blending <span className="text-white font-bold">Vastu-shastra</span> with modern architectural innovation for homes that last generations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto px-4 sm:px-0 hero-buttons">
          <a href="#contact" className="group relative px-10 py-5 rounded-full font-black text-sm md:text-lg transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(207,148,50,0.3)] bg-[#cf9432] text-[#050a14] hover:text-white family-outfit">
            <div className="absolute inset-0 bg-[#050a14] translate-x-[-101%] group-hover:translate-x-[0%] transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-3">
              <i className="bi bi-calendar2-check-fill"></i> Get Free Estimate
            </span>
          </a>
          <a href="#projects" className="group px-10 py-5 rounded-full font-black text-sm md:text-lg transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#050a14] family-outfit">
            <span className="flex items-center justify-center gap-3">
              <i className="bi bi-images text-[#cf9432]"></i> Browse Projects
            </span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 mb-10 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-10 w-full hero-text">
          <div className="flex flex-col items-center group">
            <i className="bi bi-shield-fill-check text-2xl md:text-3xl text-[#cf9432] mb-2 group-hover:scale-125 transition-transform"></i>
            <div className="text-white text-lg md:text-xl font-bold font-outfit">ISI Standard</div>
            <div className="text-white/30 text-[9px] font-black tracking-widest uppercase">Pure Materials</div>
          </div>
          <div className="flex flex-col items-center group">
            <i className="bi bi-clock-history text-2xl md:text-3xl text-[#cf9432] mb-2 group-hover:scale-125 transition-transform"></i>
            <div className="text-white text-lg md:text-xl font-bold font-outfit">On-Time</div>
            <div className="text-white/30 text-[9px] font-black tracking-widest uppercase">Fast Delivery</div>
          </div>
          <div className="flex flex-col items-center group">
            <i className="bi bi-award-fill text-2xl md:text-3xl text-[#cf9432] mb-2 group-hover:scale-125 transition-transform"></i>
            <div className="text-white text-lg md:text-xl font-bold font-outfit">Trusted Edgnr</div>
            <div className="text-white/30 text-[9px] font-black tracking-widest uppercase">Er. S.Dineshkumar</div>
          </div>
          <div className="flex flex-col items-center group">
            <i className="bi bi-people-fill text-2xl md:text-3xl text-[#cf9432] mb-2 group-hover:scale-125 transition-transform"></i>
            <div className="text-white text-lg md:text-xl font-bold font-outfit">100%</div>
            <div className="text-white/30 text-[9px] font-black tracking-widest uppercase">Satisfied Clients</div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <span className="text-[9px] font-black tracking-[0.4em] text-white/30 uppercase vertical-text family-outfit lg:block hidden">Explore More</span>
        <div className="w-[1px] h-10 lg:h-14 bg-gradient-to-b from-[#cf9432] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
