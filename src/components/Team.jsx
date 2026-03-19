import React from 'react';
import saminathanImg from '../assets/Saminatha_updated.jpeg';
import gopinathImg from '../assets/Gopinath_updated.jpeg';
import karthikeyanImg from '../assets/Karthikeyan_updated.jpeg';
import mahendranImg from '../assets/Mahendran_updated.jpeg';
import dineshkumarImg from '../assets/Dhinesh.jpeg';
import sathishImg from '../assets/Sathish_Kumar_updated.jpeg';

const teamMembers = [
  { 
    id: 1, 
    name: 'Er. S. Dineshkumar', 
    role: 'Founder & Managing Director', 
    edu: 'Civil Engineer', 
    img: dineshkumarImg,
    accent: '#cf9432'
  },
  { 
    id: 5, 
    name: 'R. Mahindran', 
    role: 'Technical Supervisor', 
    edu: 'Diploma in EEE', 
    img: mahendranImg,
    accent: '#cf9432'
  },
  { 
    id: 2, 
    name: 'Saminathan A', 
    role: 'Legal & Vasthu Advisor', 
    edu: 'BSc, LLB', 
    img: saminathanImg,
    accent: '#162a4f'
  },
  { 
    id: 3, 
    name: 'A. Gopinath', 
    role: 'Technical Lead (E&P)', 
    edu: 'Diploma in ECE', 
    img: gopinathImg,
    accent: '#cf9432'
  },
  { 
    id: 4, 
    name: 'S. Karthikeyan', 
    role: 'Site Operations Manager', 
    edu: 'Diploma in Civil', 
    img: karthikeyanImg,
    accent: '#162a4f'
  },
  { 
    id: 6, 
    name: 'R. Sathish Kumar', 
    role: 'Human Resources', 
    edu: 'MBA', 
    img: sathishImg, 
    accent: '#162a4f'
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-[#f0f4f8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
           <span className="inline-block bg-[#cf9432]/10 text-[#cf9432] text-xs font-black px-6 py-2 rounded-full mb-4 tracking-[4px] uppercase border border-[#cf9432]/20">
            Professional Collective
          </span>
          <h2 id="team-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-[#162a4f] mb-6 opacity-0">Meet Our Visionaries</h2>
          <div className="w-24 h-1.5 bg-[#cf9432] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            The dedicated experts driving innovation and integrity at Sri Mayil Builders.
          </p>
        </div>

        {/* Team Grid */}
        <div id="team-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers.map(member => (
            <div key={member.id} className="gsap-team-card opacity-0 group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-white/50 transition-all duration-700 hover:-translate-y-4">
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.9] group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162a4f] via-[#162a4f]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Float Card */}
              <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-500 transform group-hover:translate-y-[-10px]">
                <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl border border-white/50 relative overflow-hidden group/card shadow-[0_20px_50px_rgba(22,42,79,0.1)]">
                  {/* Small Design Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#cf9432]/10 rounded-full translate-x-12 -translate-y-12"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-[#162a4f] mb-1">{member.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-0.5 bg-[#cf9432] rounded-full"></span>
                      <p className="text-[#cf9432] font-black text-[10px] uppercase tracking-wider">{member.role}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-[#f8fafc] px-4 py-2 rounded-xl self-start group-hover/card:bg-[#162a4f] group-hover/card:text-white transition-colors duration-300">
                      <i className="bi bi-mortarboard-fill text-[#cf9432]"></i>
                      <span className="text-[11px] font-bold tracking-tight">{member.edu}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                <div className="w-12 h-12 bg-[#cf9432] rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                  <i className="bi bi-shield-shaded text-white text-xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
