import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Project Images
import ammapetImg from '../assets/Ammapet_march_2025.jpeg';
import eilampillaiFebImg from '../assets/Eilampillai_2_feb_2024.jpeg';
import eilampillaiJulyImg from '../assets/Eilampillai_july_2025.jpeg';
import karurImg from '../assets/Karur_march_2026.jpeg';
import maduraiImg from '../assets/Madurai_sept_2024.jpeg';
import tgodeImg from '../assets/T.gode_nov_2025.jpeg';

const projects = [
  {
    id: 1,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: ammapetImg,
    galleryImages: [ammapetImg, karurImg, maduraiImg],
    title: 'Modern Apartment Complex',
    location: 'Salem Ammapet',
    type: 'Residential',
    area: '18,000 sqft',
    bhk: '24 Units (2 & 3 BHK)',
    duration: '24 Months',
    year: '2023',
    client: 'R&K Properties',
    features: ['Rooftop Garden', 'Gym & Clubhouse', 'Solar Panels', 'CCTV & Security', 'Children Play Area', 'Covered Parking'],
    desc: 'A premium 24-unit residential complex featuring rooftop gardens, a modern gym, and a dedicated clubhouse. Designed for community living with all modern amenities.',
  },
  {
    id: 2,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: karurImg,
    galleryImages: [karurImg, ammapetImg, tgodeImg],
    title: 'Commercial Complex',
    location: 'Karur',
    type: 'Commercial',
    area: '32,000 sqft',
    bhk: 'G+3 Floors',
    duration: '20 Months',
    year: '2024',
    client: 'Karur Business Hub',
    features: ['Lift & Escalator', 'Ample Parking', 'Fire Safety', 'High-Speed Internet', 'Power Backup', 'LEED Standards'],
    desc: 'A state-of-the-art commercial complex designed for retail, offices, and business operations. Built to LEED standards with a focus on energy efficiency and modern infrastructure.',
  },
  {
    id: 3,
    status: 'Ongoing',
    statusColor: 'bg-amber-500',
    image: eilampillaiFebImg,
    galleryImages: [eilampillaiFebImg, eilampillaiJulyImg, karurImg],
    title: 'Temple Complex',
    location: 'Eilampillai',
    type: 'Temple Construction',
    area: '5,800 sqft',
    bhk: 'Main Shrine + Mandapam',
    duration: '30 Months',
    year: '2025–2026',
    client: 'Village Panchayat',
    features: ['Traditional Architecture', 'Granite Pillars', 'Gopuram Design', 'Vastu Compliant', 'Stage & Hall', 'Water Tank'],
    desc: 'A grand temple complex being built with traditional Dravidian architecture, featuring intricately crafted granite pillars, a towering gopuram, and a large community mandapam.',
  },
  {
    id: 4,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: eilampillaiJulyImg,
    galleryImages: [eilampillaiJulyImg, eilampillaiFebImg, ammapetImg],
    title: 'Heritage Temple Renovation',
    location: 'Eilampillai',
    type: 'Temple Construction',
    area: '3,200 sqft',
    bhk: 'Main Shrine',
    duration: '12 Months',
    year: '2025',
    client: 'Spiritual Trust',
    features: ['Stone Carving', 'Gopuram Painting', 'Temple Tank Restoration'],
    desc: 'Expert renovation and expansion of a traditional temple shrine, preserving ancient aesthetics while ensuring structural integrity.',
  },
  {
    id: 5,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: maduraiImg,
    galleryImages: [maduraiImg, ammapetImg, karurImg],
    title: 'Luxury Bungalow',
    location: 'Madurai',
    type: 'Residential',
    area: '6,000 sqft',
    bhk: '5 BHK',
    duration: '22 Months',
    year: '2025',
    client: 'Mr. Suresh Babu',
    features: ['Swimming Pool', 'Smart Home Tech', 'Home Office', 'Italian Marble', 'Solar System', 'Servant Quarters'],
    desc: 'An ultra-luxury bungalow with smart home automation, Italian marble flooring, and a beautifully designed swimming pool.',
  },
  {
    id: 6,
    status: 'Upcoming',
    statusColor: 'bg-blue-500',
    image: tgodeImg,
    galleryImages: [tgodeImg, ammapetImg, karurImg],
    title: 'Executive Villa Project',
    location: 'Tiruchengode',
    type: 'Residential',
    area: '3,200 sqft',
    bhk: '3 BHK Villa',
    duration: '14 Months',
    year: '2026',
    client: 'Private Owner',
    features: ['Modular Kitchen', 'False Ceiling', 'Custom Wardrobes', 'Theme Lighting', 'Wall Panelling', 'Home Automation'],
    desc: 'A modern villa project focusing on high-end interior finishes and contemporary architectural design.',
  },
];

const statusFilter = ['All', 'Completed', 'Ongoing', 'Upcoming'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const gridRef = useRef(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.status === filter);

  const openModal = (project) => {
    setActiveImg(0);
    setModal(project);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = '';
  };

  // Animate cards when filter changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.proj-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
    );
  }, [filter]);

  return (
    <>
      <section id="projects" className="py-24 px-6 overflow-hidden bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#cf9432]/15 text-[#cf9432] text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#162a4f] mb-4">Featured Projects</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A showcase of our landmark constructions — from luxury villas to grand temples.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {statusFilter.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === f
                    ? 'bg-[#162a4f] text-white shadow-lg scale-105'
                    : 'bg-white text-[#162a4f] border border-[#d0dce8] hover:border-[#cf9432] hover:text-[#cf9432]'
                }`}
              >
                {f}
                <span className="ml-2 text-xs opacity-70">
                  ({f === 'All' ? projects.length : projects.filter(p => p.status === f).length})
                </span>
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            id="gsap-projects-grid"
          >
            {filtered.map(project => (
              <div
                key={project.id}
                className="proj-card gsap-project-card group relative overflow-hidden rounded-[2.5rem] shadow-xl cursor-pointer bg-white"
                onClick={() => openModal(project)}
              >
                {/* Image */}
                <div className="overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Status Badge */}
                <span className={`absolute top-4 left-4 ${project.statusColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                  {project.status}
                </span>

                {/* Type badge */}
                <span className="absolute top-4 right-4 bg-[#162a4f]/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {project.type}
                </span>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#162a4f] mb-1">{project.title}</h3>
                  <p className="text-[#cf9432] font-medium text-sm flex items-center gap-1 mb-3">
                    <i className="bi bi-geo-alt-fill"></i> {project.location}
                  </p>

                  {/* Quick Details Row */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-[#f0f6fc] px-3 py-1 rounded-full">
                      <i className="bi bi-arrows-fullscreen text-[#162a4f]"></i> {project.area}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-[#f0f6fc] px-3 py-1 rounded-full">
                      <i className="bi bi-house text-[#162a4f]"></i> {project.bhk}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-[#f0f6fc] px-3 py-1 rounded-full">
                      <i className="bi bi-calendar3 text-[#162a4f]"></i> {project.year}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm line-clamp-2">{project.desc}</p>

                  <button className="mt-4 flex items-center gap-2 text-[#cf9432] font-semibold text-sm group-hover:gap-3 transition-all">
                    View Full Details <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a href="#contact" className="inline-block bg-[#162a4f] hover:bg-[#cf9432] text-white font-bold px-12 py-4 rounded-full transition-all duration-300 shadow-xl text-lg">
              <i className="bi bi-telephone-fill mr-2"></i> Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* ============ FULL SCREEN PROJECT PAGE ============ */}
      {modal && (
        <div className="fixed inset-0 z-[99999] bg-[#f8fafc] overflow-y-auto animate-modal-in w-full h-full pb-20">
          
          {/* Professional Top Bar */}
          <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <button
              onClick={closeModal}
              className="text-[#162a4f] hover:text-[#cf9432] font-bold flex items-center gap-2 transition-all text-sm md:text-base border border-transparent hover:border-[#cf9432] px-4 py-2 rounded-full"
            >
              <i className="bi bi-arrow-left"></i> Back to All Projects
            </button>
            <div className="hidden md:flex items-center gap-4">
              <span className="font-bold text-[#162a4f] text-lg">{modal.title}</span>
              <span className={`px-4 py-1 rounded-full text-xs font-bold text-white shadow-sm ${modal.statusColor}`}>{modal.status}</span>
            </div>
            <button
              onClick={closeModal}
              className="md:hidden w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#162a4f] hover:text-white flex items-center justify-center transition"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {/* Page Content */}
          <div className="max-w-6xl mx-auto mt-8 px-4 md:px-8">

            {/* Gallery Carousel */}
            <div className="relative rounded-3xl overflow-hidden h-[40vh] md:h-[60vh] shadow-xl mb-10">
              <img
                src={modal.galleryImages[activeImg]}
                alt={modal.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              {/* Status */}
              <span className={`absolute top-5 left-5 ${modal.statusColor} text-white text-sm font-bold px-4 py-1.5 rounded-full`}>
                {modal.status}
              </span>
              {/* Title overlay */}
              <div className="absolute bottom-6 left-6 md:left-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">{modal.title}</h2>
                <p className="text-[#dfb36b] flex items-center gap-1 mt-1">
                  <i className="bi bi-geo-alt-fill"></i> {modal.location}
                </p>
              </div>
              {/* Thumbnail gallery dots */}
              <div className="absolute bottom-5 right-5 flex gap-2">
                {modal.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition ${activeImg === i ? 'border-[#cf9432] scale-110' : 'border-white/50'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 mb-10">
              {/* Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: 'bi-arrows-fullscreen', label: 'Area', val: modal.area },
                  { icon: 'bi-house-door', label: 'Units / BHK', val: modal.bhk },
                  { icon: 'bi-clock-history', label: 'Duration', val: modal.duration },
                  { icon: 'bi-calendar-check', label: 'Year', val: modal.year },
                ].map((info, i) => (
                  <div key={i} className="bg-[#f0f6fc] rounded-2xl p-4 text-center">
                    <i className={`bi ${info.icon} text-2xl text-[#cf9432] block mb-1`}></i>
                    <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                    <p className="text-[#162a4f] font-bold text-sm mt-0.5">{info.val}</p>
                  </div>
                ))}
              </div>

              {/* Type & Client */}
              <div className="flex flex-wrap gap-4 mb-5">
                <span className="flex items-center gap-2 bg-[#162a4f]/10 text-[#162a4f] px-4 py-2 rounded-full text-sm font-semibold">
                  <i className="bi bi-building"></i> {modal.type}
                </span>
                <span className="flex items-center gap-2 bg-[#cf9432]/10 text-[#cf9432] px-4 py-2 rounded-full text-sm font-semibold">
                  <i className="bi bi-person-circle"></i> Client: {modal.client}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">{modal.desc}</p>

              {/* Features */}
              <h4 className="text-[#162a4f] font-bold text-lg mb-3">Key Features</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {modal.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#f8fafc] border border-[#e2eaf0] rounded-xl px-4 py-2 text-sm text-gray-600">
                    <i className="bi bi-check-circle-fill text-[#cf9432]"></i>
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#162a4f] mb-1">Interested in this project?</h4>
                  <p className="text-gray-500 text-sm">Let's discuss how we can build something similar for you.</p>
                </div>
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="bg-[#162a4f] hover:bg-[#cf9432] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-xl shadow-[#162a4f]/20 hover:shadow-2xl whitespace-nowrap"
                >
                  <i className="bi bi-telephone-fill mr-2"></i> Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
