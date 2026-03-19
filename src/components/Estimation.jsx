import React from 'react';

const Estimation = () => {
  const plans = [
    {
      id: 1,
      type: 'Commercial',
      icon: 'bi-building-gear',
      price: '1,600',
      unit: 'per sq.ft',
      accent: '#cf9432',
      badge: 'Business Ready',
      features: [
        'Office & Retail Spaces',
        'Modern Architecture',
        'Structural Strength Focus',
        'Legal Compliance',
      ],
    },
    {
      id: 2,
      type: 'Residential',
      icon: 'bi-house-heart',
      price: '1,999',
      unit: 'per sq.ft',
      accent: '#cf9432',
      badge: 'Best Value',
      features: [
        'Custom Home Designs',
        'Premium Material Finishes',
        'Vastu Shastra Planning',
        'Timely Handover',
      ],
    },
  ];

  return (
    <section id="estimation" className="py-16 px-6 bg-[#0b1528] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#cf9432]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#162a4f]/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header - More Compact */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Estimation & Pricing</h2>
          <div className="h-1 w-20 bg-[#cf9432] mx-auto rounded-full mb-3"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Transparent base pricing for your dream project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-500 hover:border-[#cf9432]/50 hover:bg-white/[0.08] hover:-translate-y-1"
            >
              {/* Top Row: Icon + Type + Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#cf9432]/10 flex items-center justify-center border border-[#cf9432]/20">
                    <i className={`bi ${plan.icon} text-xl text-[#cf9432]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white">{plan.type}</h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#cf9432]/20 text-[#cf9432] px-2 py-1 rounded-md">
                  {plan.badge}
                </span>
              </div>

              {/* Price Area */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-xs text-gray-400 mr-1">Starting from</span>
                  <span className="text-3xl font-black text-white">₹{plan.price}</span>
                  <span className="text-xs text-[#cf9432] ml-1.5 font-medium">{plan.unit}</span>
                </div>
              </div>

              {/* Features - More Compact */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <i className="bi bi-patch-check text-[#cf9432] text-xs"></i>
                    <span className="text-[12px] text-gray-300 leading-tight">{f}</span>
                  </div>
                ))}
              </div>

              {/* Small Action Link */}
              <a 
                href="#contact" 
                className="flex items-center justify-center w-full py-2.5 rounded-lg bg-transparent border border-[#cf9432]/30 text-white text-xs font-bold hover:bg-[#cf9432] hover:border-[#cf9432] transition-colors group-hover:shadow-[0_0_15px_rgba(207,148,50,0.2)]"
              >
                Get Detail Quote
                <i className="bi bi-chevron-right ml-1.5 text-[10px]"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Small Note */}
        <p className="text-center text-gray-500 text-[11px] mt-8 italic">
          * Indicative prices. Actual cost may vary based on design and material selection.
        </p>
      </div>
    </section>
  );
};

export default Estimation;
