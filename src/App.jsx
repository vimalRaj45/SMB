import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Estimation from './components/Estimation';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import AreasServed from './components/AreasServed';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    const handlePreloaderFinished = () => {
      // Setup hero GSAP animations
      const heroContent = document.getElementById('hero-content');
      if (heroContent) heroContent.style.opacity = '1';
      
      const tl = gsap.timeline();
      tl.fromTo(".hero-text",
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
      ).fromTo(".hero-buttons",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );

      // ScrollTrigger Animations
      gsap.fromTo(".gsap-project-card:nth-child(odd)", 
        { opacity: 0, x: -150, skewX: 5 },
        { opacity: 1, x: 0, skewX: 0, duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: "#gsap-projects-grid", start: "top 80%" } }
      );
      gsap.fromTo(".gsap-project-card:nth-child(even)", 
        { opacity: 0, x: 150, skewX: -5 },
        { opacity: 1, x: 0, skewX: 0, duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: "#gsap-projects-grid", start: "top 80%" } }
      );

      gsap.fromTo("#about-img-wrap", 
        { y: -300, rotation: 10, opacity: 0, transformOrigin: "top center" },
        { y: 0, rotation: 0, opacity: 1, duration: 2.2, ease: "elastic.out(1.2, 0.3)", scrollTrigger: { trigger: "#about-container", start: "top 75%" } }
      );
      gsap.fromTo("#about-text-wrap",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.6, scrollTrigger: { trigger: "#about-container", start: "top 75%" } }
      );

      gsap.to("#services-title, #services-desc", { opacity: 1, y: 0, stagger: 0.2, duration: 1, scrollTrigger: { trigger: "#services", start: "top 80%" } });
      gsap.fromTo(".gsap-service-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: "#services-grid", start: "top 85%" } }
      );

      gsap.to("#stats-title", { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: "#stats-section", start: "top 80%" } });
      gsap.fromTo(".gsap-stat-card",
        { y: -150, opacity: 0, scale: 1.1 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: "bounce.out", scrollTrigger: { trigger: "#stats-section", start: "top 85%" } }
      );

      gsap.to("#team-title", { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: "#team", start: "top 80%" } });
      gsap.fromTo(".gsap-team-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: "#team-grid", start: "top 80%" } }
      );


      let tlContact = gsap.timeline({ scrollTrigger: { trigger: "#contact", start: "top 75%" } });
      tlContact.to("#contact-info-wrap", { opacity: 1, duration: 0.5 })
               .fromTo(".gsap-contact-text i", { scale: 5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "bounce.out" })
               .to("#contact-form-wrap", { opacity: 1, duration: 0.5 }, "-=0.3")
               .fromTo(".gsap-form-field", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" });
    };

    window.addEventListener('preloader_finished', handlePreloaderFinished);
    
    // Cleanup
    return () => {
      window.removeEventListener('preloader_finished', handlePreloaderFinished);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden w-full relative">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Estimation />
      <Projects />
      <WhyChooseUs />
      <Team />
      <AreasServed />
      <Contact />
      <Footer />
      
      {/* Global Floating WhatsApp */}
      <a
        href="https://wa.me/918124627498"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 md:w-16 md:h-16"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp text-2xl md:text-3xl"></i>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
        </span>
      </a>
    </div>
  );
}

export default App;
