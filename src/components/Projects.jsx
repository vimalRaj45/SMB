import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Project Images
import ammapetImg from '../assets/Ammapet_march_2025.jpeg';
import eilampillaiFebImg from '../assets/Eilampillai_2_feb_2024.jpeg';
import eilampillaiJulyImg from '../assets/Eilampillai_july_2025.jpeg';
import karurImg from '../assets/Karur_march_2026.jpeg';
import maduraiImg from '../assets/Madurai_sept_2024.jpeg';
import tgodeImg from '../assets/T.gode_nov_2025.jpeg';
import sakthiMaariyammanImg from '../assets/Sakthi_maariyamman.jpeg';
import sakthiMaariyamman2Img from '../assets/Sakthi_maariyamman2.jpeg';
import sakthiMunishwararImg from '../assets/Sakthi_muniswarar.jpeg';

const projects = [
  {
    id: 1,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: ammapetImg,
    title: 'Residential Home',
    location: 'Salem Ammapet',
    type: 'Residential',
    area: '2100 sqft',
    bhk: '2 BHK',
    duration: '8 Months',
    year: '2024',
  },
  {
    id: 2,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: karurImg,
    title: 'Commercial Complex',
    location: ' komarapalaiyam',
    type: 'Commercial',
    area: '6250 sqft',
    bhk: 'G+3 Floors',
    duration: '12 Months',
    year: '2024',
  },
  {
    id: 3,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: eilampillaiFebImg,
    title: 'Residential Home',
    location: 'Eilampillai',
    type: 'Residential',
    area: '2830 sqft',
    bhk: '2 BHK',
    duration: '8 Months',
    year: '2022-2023',
  },
  {
    id: 4,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: eilampillaiJulyImg,
    title: 'Residential Home',
    location: 'Eilampillai',
    type: 'Residential',
    area: '3,200 sqft',
    bhk: '2 BHK',
    duration: '9 Months',
    year: '2025',
  },
  {
    id: 5,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: maduraiImg,
    title: 'Luxury Bungalow',
    location: 'Madurai',
    type: 'Residential',
    area: '2800 sqft',
    bhk: '4 BHK',
    duration: '9 Months',
    year: '2024',
  },
  {
    id: 6,
    status: 'Completed',
    statusColor: 'bg-emerald-500',
    image: tgodeImg,
    title: 'Executive Villa Project',
    location: 'Karur',
    type: 'Residential',
    area: '3,200 sqft',
    bhk: '4 BHK Villa',
    duration: '8 Months',
    year: '2025-2026',
  },
  {
    id: 7,
    status: 'Temple Work',
    statusColor: 'bg-amber-500',
    image: sakthiMaariyammanImg,
    title: 'Sakthi Maariyamman Temple',
    location: 'Tamil Nadu',
    type: 'Temple Work',
    area: '48 sqft',
    duration: '1 Month',
    year: '2025',
  },
  {
    id: 8,
    status: 'Temple Work',
    statusColor: 'bg-amber-500',
    image: sakthiMaariyamman2Img,
    title: 'Sakthi Maariyamman Block',
    location: 'Tamil Nadu',
    type: 'Temple Work',
    area: '100 sqft',
    duration: '2 Months',
    year: '2023',
  },
  {
    id: 9,
    status: 'Temple Work',
    statusColor: 'bg-amber-500',
    image: sakthiMunishwararImg,
    title: 'Sakthi Munishwarar Temple',
    location: 'Tamil Nadu',
    type: 'Temple Work',
    area: '110 sqft',
    duration: '1 Week',
    year: '2026',
  },
];

const statusFilter = ['All', 'Completed', 'Ongoing', 'Upcoming', 'Temple Work'];

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
                  ({
                    f === 'All' ? 14 :
                    f === 'Ongoing' ? 4 :
                    f === 'Upcoming' ? 4 :
                    projects.filter(p => p.status === f).length
                  })
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
                    {project.bhk && (
                      <span className="flex items-center gap-1 text-xs text-gray-500 bg-[#f0f6fc] px-3 py-1 rounded-full">
                        <i className="bi bi-house text-[#162a4f]"></i> {project.bhk}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-[#f0f6fc] px-3 py-1 rounded-full">
                      <i className="bi bi-calendar3 text-[#162a4f]"></i> {project.year}
                    </span>
                  </div>

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
                src={modal.image}
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
            </div>

            {/* Content Body */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 mb-10">
              {/* Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: 'bi-arrows-fullscreen', label: 'Area', val: modal.area },
                  modal.bhk ? { icon: 'bi-house-door', label: 'Units / BHK', val: modal.bhk } : null,
                  { icon: 'bi-clock-history', label: 'Duration', val: modal.duration },
                  { icon: 'bi-calendar-check', label: 'Year', val: modal.year },
                ].filter(Boolean).map((info, i) => (
                  <div key={i} className="bg-[#f0f6fc] rounded-2xl p-4 text-center">
                    <i className={`bi ${info.icon} text-2xl text-[#cf9432] block mb-1`}></i>
                    <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                    <p className="text-[#162a4f] font-bold text-sm mt-0.5">{info.val}</p>
                  </div>
                ))}
              </div>

              {/* Type */}
              <div className="flex flex-wrap gap-4 mb-5">
                <span className="flex items-center gap-2 bg-[#162a4f]/10 text-[#162a4f] px-4 py-2 rounded-full text-sm font-semibold">
                  <i className="bi bi-building"></i> {modal.type}
                </span>
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
