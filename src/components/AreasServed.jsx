import React from 'react';

const AreasServed = () => {
  const areas = [
    { id: 1, name: 'GM Tex Kumarapalayam', icon: 'bi-building',          desc: 'Our Head Office & Primary Hub' },
    { id: 2, name: 'Karur',                icon: 'bi-geo-alt-fill',       desc: 'Active Residential Projects' },
    { id: 3, name: 'T. Gode',              icon: 'bi-map-fill',           desc: 'Expert Construction Services' },
    { id: 4, name: 'Eilampillai',          icon: 'bi-pin-map-fill',       desc: 'Commercial Development' },
    { id: 5, name: 'Salem Ammapet',        icon: 'bi-geo-fill',           desc: 'Premium City Projects' },
    { id: 6, name: 'Madurai',              icon: 'bi-house-heart-fill',   desc: 'Luxury Villa Developments' },
  ];

  return (
    <section id="areas" className="py-24 px-6 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cf9432]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#162a4f]/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf9432]/15 text-[#cf9432] text-sm font-black px-6 py-2 rounded-full mb-4 tracking-[3px] uppercase">
            Service Reach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#162a4f] mb-4">Areas We Serve</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#cf9432] to-[#dfb36b] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Spanning across Tamil Nadu with excellence. Sri Mayil Builders is committed to transforming your vision into reality, wherever you are.
          </p>
        </div>

        {/* Grid - Enhanced Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map(area => (
            <div
              key={area.id}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(207,148,50,0.2)] border border-gray-100/50 hover:border-[#cf9432]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Accent Ornament */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#cf9432]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#162a4f] to-[#1e3c6e] group-hover:from-[#cf9432] group-hover:to-[#dfb36b] flex items-center justify-center shadow-xl group-hover:shadow-[#cf9432]/40 transition-all duration-500 transform group-hover:rotate-[15deg] group-hover:scale-110 mb-6">
                  <i className={`bi ${area.icon} text-3xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-extrabold text-[#162a4f] group-hover:text-[#cf9432] transition-colors duration-300 mb-2">
                  {area.name}
                </h3>
                
                <p className="text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300">
                  {area.desc}
                </p>

                {/* Bottom line decor */}
                <div className="mt-6 w-0 group-hover:w-16 h-1 bg-[#cf9432] rounded-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Map CTA - More Premium */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#162a4f] hover:bg-[#cf9432] text-white font-black px-12 py-5 rounded-full transition-all duration-500 shadow-[0_10px_30px_-5px_rgba(22,42,79,0.3)] hover:shadow-[0_10px_40px_-5px_rgba(207,148,50,0.4)] hover:-translate-y-1 group"
          >
            <i className="bi bi-geo-alt-fill text-xl group-hover:animate-bounce"></i>
            <span>Check Availability in Your Area</span>
            <i className="bi bi-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
