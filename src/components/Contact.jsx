import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Loader from './Loader';
import dineshkumarImg from '../assets/Dhinesh.jpeg';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      service: form.service.value,
      message: form.message.value
    };

    try {
      // Simulate a small delay to experience the cool animation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      await fetch("https://script.google.com/macros/s/AKfycbzzZCsseHIILhhrjB4WSHvVbcqCGepcJV5fWPJ7W9Tte8ZB2tXZluNl6rS5NaWSp2iqoQ/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
      });

      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "Your message has been sent. We will contact you shortly.",
        confirmButtonColor: "#cf9432"
      });

      form.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: 'bi-telephone-fill',
      label: 'Phone',
      value: '+91 81246 27498',
      href: 'tel:+918124627498',
    },
    {
      icon: 'bi-envelope-fill',
      label: 'Email',
      value: 'srimayilbuilders@gmail.com',
      href: 'mailto:srimayilbuilders@gmail.com',
    },
    {
      icon: 'bi-globe2',
      label: 'Website',
      value: 'www.srimayilbuilders.com',
      href: 'https://www.srimayilbuilders.com',
    },
    {
      icon: 'bi-geo-alt-fill',
      label: 'Address',
      value: 'Athiyamaan Chinnathambi Street, Tharamangalam – 636502',
      href: 'https://maps.google.com/?q=Tharamangalam',
    },
  ];

  return (
    <>
      {isSubmitting && <Loader />}
      <section id="contact" className="py-24 px-6 overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#eaf0f8]">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#cf9432]/15 text-[#cf9432] text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
              Let's Talk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#162a4f] mb-3">Get In Touch</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Reach out to <strong className="text-[#cf9432]">Er. S. Dineshkumar</strong>, Civil Engineer — we're ready to build your dream.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT — Contact Info */}
            <div id="contact-info-wrap" className="opacity-0 space-y-6 relative">
              {/* Profile Card — Enhanced Visibility */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 bg-gradient-to-br from-[#162a4f] to-[#1e3c6e] rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#cf9432] opacity-5 rounded-full -translate-y-24 translate-x-24 group-hover:scale-125 transition-transform duration-1000"></div>
                
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#cf9432]/30 p-1 flex-shrink-0 z-10 relative">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#cf9432] shadow-inner">
                    <img 
                      src={dineshkumarImg} 
                      alt="Er. S. Dineshkumar" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#cf9432] rounded-full flex items-center justify-center text-white border-2 border-[#162a4f] shadow-lg">
                    <i className="bi bi-check-lg text-sm"></i>
                  </div>
                </div>

                <div className="z-10 relative flex-1">
                  <h3 className="text-white text-2xl md:text-3xl font-black mb-2 tracking-tight">Er. S. Dineshkumar</h3>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-4">
                    <span className="w-2 h-2 bg-[#cf9432] rounded-full animate-pulse"></span>
                    <p className="text-[#dfb36b] text-xs md:text-sm font-bold uppercase tracking-wider">Civil Engineer &amp; Founder</p>
                  </div>
                  
                  <div className="space-y-3">
                      <p className="text-white/80 text-sm md:text-base flex items-center justify-center sm:justify-start gap-3">
                        <i className="bi bi-patch-check-fill text-[#cf9432]"></i>
                        <span>Professional Civil Engineering Services</span>
                      </p>
                      <p className="text-white/70 text-xs md:text-sm flex items-center justify-center sm:justify-start gap-3 bg-black/20 p-3 rounded-2xl border border-white/5">
                        <i className="bi bi-geo-alt-fill text-[#cf9432]"></i>
                        <span> Tharamangalam</span>
                      </p>
                  </div>                </div>
              </div>

              {/* Contact Detail Cards */}
              {contactDetails.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 sm:gap-5 bg-white rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(207,148,50,0.15)] hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-[#f8fafc] group-hover:bg-[#162a4f] flex items-center justify-center transition-colors duration-400">
                    <i className={`bi ${item.icon} text-xl sm:text-2xl text-[#cf9432] group-hover:text-white transition-colors`}></i>
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-[#162a4f] font-bold text-[13px] sm:text-base leading-snug break-words">{item.value}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f8fafc] group-hover:bg-[#cf9432] flex items-center justify-center flex-shrink-0 transition-colors hidden sm:flex">
                    <i className="bi bi-arrow-up-right text-gray-400 group-hover:text-white text-sm"></i>
                  </div>
                </a>
              ))}

              {/* WhatsApp CTA - Premium Style */}
              <div className="pt-4">
                <a
                  href="https://wa.me/918124627498"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center gap-4 bg-[#25D366] text-white font-black py-5 rounded-[2rem] shadow-[0_15px_35px_rgba(37,211,102,0.25)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(37,211,102,0.35)] hover:-translate-y-1.5 overflow-hidden w-full"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
                  <i className="bi bi-whatsapp text-2xl relative z-10"></i>
                  <span className="text-lg relative z-10 family-outfit">Consult via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div id="contact-form-wrap" className="opacity-0 relative">
              <div className="absolute top-10 -left-10 w-full h-full bg-gradient-to-br from-[#cf9432]/10 to-transparent blur-3xl z-[-1] rounded-[100px] pointer-events-none"></div>
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(22,42,79,0.07)] border border-gray-100 space-y-6 relative"
              >
                <div>
                  <h3 className="text-3xl font-extrabold text-[#162a4f] mb-2 relative inline-block">
                    Send Us a Message
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#cf9432] rounded-full"></span>
                  </h3>
                  <p className="text-gray-500 mt-4 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-200 bg-[#f8fafc] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf9432] gsap-form-field opacity-0 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 bg-[#f8fafc] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf9432] gsap-form-field opacity-0 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 bg-[#f8fafc] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf9432] gsap-form-field opacity-0 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Service Interested In</label>
                  <select name="service" className="w-full border border-gray-200 bg-[#f8fafc] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf9432] text-gray-600 transition gsap-form-field opacity-0">
                    <option value="">Select a service...</option>
                    <option>Site Visit</option>
                    <option>Consultation</option>
                    <option>Vasthu Planning</option>
                    <option>Estimation</option>
                    <option>2D &amp; 3D Renovation</option>
                    <option>Plan Approval</option>
                    <option>Loan Arrangement</option>
                    <option>Construction (Residential/Villa/Temple)</option>
                    <option>Commercial</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Your Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="w-full border border-gray-200 bg-[#f8fafc] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf9432] transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative bg-[#050a14] text-white overflow-hidden py-5 rounded-2xl font-black text-lg w-full transition-all duration-500 hover:shadow-[0_20px_40px_rgba(5,10,20,0.3)] active:scale-95 flex items-center justify-center family-outfit ${isSubmitting ? 'cursor-not-allowed opacity-80' : ''}`}
                >
                  <div className="absolute inset-0 bg-[#cf9432] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  {isSubmitting ? (
                    <div className="relative z-10 flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <div className="relative z-10 flex items-center gap-3">
                      <i className="bi bi-send-check-fill"></i>
                      <span>Send Project Message</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map — Tharamangalam */}
      <section className="px-6 pb-16 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.3!2d77.9878!3d11.7954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab8e7f1c3e7e5d%3A0x5a3b8e7f1c3e7e5d!2sTharamangalam%2C%20Tamil%20Nadu%20636502!5e0!3m2!1sen!2sin!4v1710000000000"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            title="Sri Mayil Builders – Tharamangalam Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
