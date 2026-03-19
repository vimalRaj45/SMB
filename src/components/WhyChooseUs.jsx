import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, icon: 'bi-patch-check-fill',    endVal: 10,    suffix: '+', label: 'Projects Completed', desc: 'Precision Delivered' },
  { id: 2, icon: 'bi-building-fill-gear',  endVal: 4,     suffix: '',  label: 'Ongoing Works',      desc: 'Active Excellence' },
  { id: 3, icon: 'bi-calendar-event-fill', endVal: 4,     suffix: '',  label: 'Upcoming Vision',    desc: 'Future Ready' },
  { id: 4, icon: 'bi-stars',               endVal: 100,   suffix: '%', label: 'Satisfaction',       desc: 'Our Ultimate Goal' },
];

const reasons = [
  { icon: 'bi-person-badge-fill',      title: 'Expert Leadership',        desc: 'Led by Er. S. Dineshkumar, bringing technical mastery and decades of hands-on structural expertise.' },
  { icon: 'bi-shield-check',           title: 'Quality Standards',       desc: 'We enforce zero compromise on materials, using only top-tier ISI-certified brands for safety.' },
  { icon: 'bi-clock-history',          title: 'Precision Timelines',      desc: 'Our project management ensures handover on the exact date promised. Efficiency is our foundation.' },
  { icon: 'bi-wallet2',                title: 'No Hidden Costs',         desc: 'Total transparency from day one. Detailed estimations ensure your budget stays exactly where planned.' },
  { icon: 'bi-triangle-half',          title: 'Unified Vastu',           desc: 'Designs that breathe harmony. We integrate Vastu principles naturally into every architectural plan.' },
  { icon: 'bi-tools',                  title: 'Lifetime Support',        desc: 'Our service extends beyond the key handover. We provide dedicated maintenance and expert consultation.' },
];

// Animated counter hook
function useCounter(endVal, shouldStart) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * endVal));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [shouldStart, endVal]);
  return count;
}

const StatCard = ({ stat, shouldStart }) => {
  const count = useCounter(stat.endVal, shouldStart);
  return (
    <div className="gsap-stat-card opacity-0 group relative">
      <div className="bg-[#162a4f]/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:border-[#cf9432]/40 hover:bg-[#162a4f]/60 shadow-xl overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#cf9432] to-transparent"></div>
        
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#cf9432] to-[#dfb36b] flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-[360deg] transition-transform duration-1000">
          <i className={`bi ${stat.icon} text-3xl text-white`}></i>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-5xl font-black text-white tracking-tight mb-2">
            {count}{stat.suffix}
          </span>
          <span className="text-[#cf9432] font-bold text-sm uppercase tracking-widest">{stat.label}</span>
          <div className="w-0 group-hover:w-12 h-0.5 bg-white/20 mt-3 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => setCountersStarted(true),
      once: true,
    });
    return () => trigger.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 overflow-hidden bg-[#0b1528] relative"
      id="stats-section"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#cf9432]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#162a4f] rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block border border-[#cf9432]/30 bg-[#cf9432]/5 text-[#dfb36b] text-xs font-black px-6 py-2 rounded-full mb-6 tracking-[4px] uppercase">
            The Advantage
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 opacity-0"
            id="stats-title"
          >
            Why Sri Mayil Builders?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Engineered for durability, designed for aesthetics. We don't just build structures; we craft legacies with absolute integrity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map(stat => (
            <StatCard key={stat.id} stat={stat} shouldStart={countersStarted} />
          ))}
        </div>

        {/* Reasons Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-[2rem] p-8 hover:bg-white/[0.07] hover:border-[#cf9432]/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#cf9432]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#162a4f] border border-white/10 flex items-center justify-center group-hover:bg-[#cf9432] transition-colors duration-500 shadow-xl self-start">
                <i className={`bi ${reason.icon} text-2xl text-[#cf9432] group-hover:text-white transition-colors duration-500`}></i>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#cf9432] transition-colors duration-300">{reason.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#cf9432]/20 via-[#cf9432] to-[#cf9432]/20">
            <a
              href="#contact"
              className="flex items-center gap-3 bg-[#0b1528] hover:bg-[#cf9432] text-[#cf9432] hover:text-[#0b1528] font-black text-lg px-14 py-5 rounded-full transition-all duration-500 group"
            >
              <i className="bi bi-chat-dots-fill text-xl"></i>
              <span>Discuss Your Vision</span>
              <i className="bi bi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
