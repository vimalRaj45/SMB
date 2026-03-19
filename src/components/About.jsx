import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto" id="about-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div id="about-text-wrap" className="w-full lg:w-1/2 opacity-0 order-2 lg:order-1">
            <span className="inline-block bg-[#cf9432]/15 text-[#cf9432] text-xs font-black px-5 py-2 rounded-full mb-6 tracking-[3px] uppercase family-outfit">
              Company Overview
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#162a4f] leading-[1.1] mb-8 tracking-tight family-outfit">
              Engineering <span className="text-[#cf9432]">Excellence</span> <br className="hidden md:block" /> Since 2022
            </h2>
            
            <div className="space-y-6 family-poppins">
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Sri Mayil Builders is a premier construction firm in Tamil Nadu, dedicated to blending traditional <strong className="text-[#cf9432]">Vastu Shastra</strong> with cutting-edge <strong className="text-[#162a4f]">modern engineering</strong>. 
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Led by <strong className="text-[#162a4f]">Er. S. Dineshkumar</strong>, we specialize in high-end residential villas, modern apartments, and grand temple projects. We ensure every brick is laid with precision, quality, and total transparency.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <a 
                href="#contact" 
                className="group relative bg-[#162a4f] text-white px-10 py-5 rounded-full font-black text-lg transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[#162a4f]/30 hover:-translate-y-1 family-outfit"
              >
                <div className="absolute inset-0 bg-[#cf9432] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10">Consult Our Engineer</span>
              </a>
              <a href="#projects" className="text-[#162a4f] font-black tracking-widest text-xs uppercase border-b-2 border-[#cf9432]/30 hover:border-[#cf9432] transition-all py-1 family-outfit">
                View Gallery <i className="bi bi-arrow-right ml-1"></i>
              </a>
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div id="about-img-wrap" className="w-full lg:w-1/2 order-1 lg:order-2 opacity-0">
            <div className="relative group px-2 sm:px-0">
              {/* Decorative elements behind image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-[#cf9432]/20 rounded-tl-[2rem] hidden md:block"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-4 border-b-4 border-[#cf9432]/20 rounded-br-[2rem] hidden md:block"></div>
              
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(22,42,79,0.15)] bg-white p-2 sm:p-4 border border-gray-100 transition-all duration-500 hover:shadow-[#cf9432]/10">
                <img 
                  src="https://i.ibb.co/6RqHBnt4/Chat-GPT-Image-Mar-14-2026-11-51-16-PM.png" 
                  alt="Modern House Architectural Sketch" 
                  fetchPriority='high'
                  loading="eager"
                  className="w-full h-auto rounded-[3rem] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Badge - Responsive Sizing */}
                <div className="absolute top-4 sm:top-10 left-4 sm:left-10 bg-white/95 backdrop-blur-md p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 text-center transform -rotate-6 transition-transform hover:rotate-0 duration-500 scale-90 sm:scale-100">
                  <span className="block text-2xl sm:text-4xl font-black text-[#cf9432]">4+</span>
                  <span className="block text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-[#162a4f]">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
