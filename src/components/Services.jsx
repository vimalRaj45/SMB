import React, { useState } from 'react';

const services = [
  {
    id: 1,
    icon: 'bi-eye-fill',
    title: 'Site Visit',
    desc: 'We visit your site to assess land conditions, dimensions, soil quality and suitability before planning begins — giving you an expert ground-level view.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    icon: 'bi-chat-dots-fill',
    title: 'Consultation',
    desc: 'Expert one-on-one guidance on design, budget, timeline, material choices, and all construction-related decisions tailored to your goals.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    icon: 'bi-compass-fill',
    title: 'Vasthu Planning',
    desc: 'Designs crafted with Vasthu Shastra principles to bring harmony, prosperity, and positive energy into every corner of your home or office.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    icon: 'bi-calculator-fill',
    title: 'Estimation',
    desc: 'Accurate, transparent cost estimation for materials, labour, and full project scope — empowering you to plan your budget with confidence.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    icon: 'bi-rulers',
    title: '2D & 3D Renovation',
    desc: 'Detailed 2D floor plans and immersive 3D visualizations so you experience your dream space before a single brick is laid.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    icon: 'bi-file-earmark-check-fill',
    title: 'Plan Approval',
    desc: 'Hassle-free handling of all government plan approvals, DTCP/CMDA submissions and building permits, entirely managed by our team.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    icon: 'bi-bank2',
    title: 'Loan Arrangement',
    desc: 'We connect you with leading banks and financial institutions to secure the best home and construction loan terms to suit your profile.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    icon: 'bi-house-fill',
    title: 'Construction',
    desc: 'From cosy residences and luxurious villas to grand temples (small & big) — every structure built with precision, premium materials and care.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    icon: 'bi-building',
    title: 'Commercial',
    desc: 'Office complexes, retail shops, showrooms and commercial buildings — designed for functionality, footfall, and modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    icon: 'bi-tools',
    title: 'Maintenance',
    desc: 'Reliable post-construction maintenance services — from waterproofing and painting to electrical and plumbing — keeping your property pristine.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="services" className="py-24 px-6 overflow-hidden bg-gradient-to-br from-[#f0f6fc] to-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf9432]/15 text-[#cf9432] text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
            What We Do
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#162a4f] mb-4 opacity-0"
            id="services-title"
          >
            Our Services
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto text-lg opacity-0"
            id="services-desc"
          >
            Comprehensive construction solutions — from first site visit to final handover.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="gsap-service-card opacity-0 relative group rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer"
              style={{ minHeight: '260px' }}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Always-visible gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#162a4f]/90 via-[#162a4f]/40 to-transparent"></div>

              {/* Hover: full overlay */}
              <div className="absolute inset-0 bg-[#162a4f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6" style={{ minHeight: '260px' }}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#cf9432] flex items-center justify-center mb-4 shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                  <i className={`bi ${service.icon} text-2xl text-white`}></i>
                </div>

                {/* Title - always visible */}
                <h3 className="text-xl font-black text-white mb-2 leading-tight">{service.title}</h3>

                {/* Number badge */}
                <span className="absolute top-6 right-6 text-[10px] font-black bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                  0{service.id}
                </span>

                {/* Description — appears on hover natively, but visible or scrollable on touch slightly better or transitions quickly */}
                <p className="text-gray-200 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-700 ease-in-out font-medium">
                  {service.desc}
                </p>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#cf9432] font-black text-xs mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                >
                  ENQUIRE NOW <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#162a4f] hover:bg-[#cf9432] text-white font-black px-14 py-5 rounded-full transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(22,42,79,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(207,148,50,0.4)] hover:-translate-y-1 text-lg group"
          >
            <i className="bi bi-chat-dots-fill text-xl group-hover:rotate-12 transition-transform"></i>
            <span>Discuss Your Vision</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
