import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#162a4f] text-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src="https://i.ibb.co/6cwgM6cx/Whats-App-Image-2026-02-24-at-8-39-10-PM.jpg" alt="Sri Mayil Builders Logo" className="h-12 w-auto mb-3 rounded-full" />
          <p className="mt-4 text-sm leading-relaxed">
            Building trust, one project at a time. Led by <strong className="text-[#dfb36b]">Er. S. Dineshkumar</strong>, Civil Engineer.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><a href="tel:+918124627498" className="hover:text-[#cf9432] flex items-center gap-2"><i className="bi bi-telephone-fill text-[#cf9432]"></i> +91 81246 27498</a></li>
            <li><a href="mailto:srimayilbuilders@gmail.com" className="hover:text-[#cf9432] flex items-center gap-2"><i className="bi bi-envelope-fill text-[#cf9432]"></i> srimayilbuilders@gmail.com</a></li>
            <li><a href="https://www.srimayilbuilders.com" target="_blank" rel="noreferrer" className="hover:text-[#cf9432] flex items-center gap-2"><i className="bi bi-globe2 text-[#cf9432]"></i> www.srimayilbuilders.com</a></li>
            <li className="flex items-start gap-2"><i className="bi bi-geo-alt-fill text-[#cf9432] mt-0.5"></i> <span>Athiyamaan Chinnathambi Street,<br/>Tharamangalam – 636502</span></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#dfb36b]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about"      className="hover:text-[#cf9432]">About Us</a></li>
            <li><a href="#services"   className="hover:text-[#cf9432]">Services</a></li>
            <li><a href="#estimation" className="hover:text-[#cf9432]">Estimation</a></li>
            <li><a href="#projects"   className="hover:text-[#cf9432]">Projects</a></li>
            <li><a href="#projects"    className="hover:text-[#cf9432]">Gallery</a></li>
            <li><a href="#areas"      className="hover:text-[#cf9432]">Areas We Serve</a></li>
            <li><a href="#contact"    className="hover:text-[#cf9432]">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#dfb36b]">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Site Visit</li>
            <li>Consultation</li>
            <li>Vasthu Planning</li>
            <li>Estimation</li>
            <li>2D & 3D Renovation</li>
            <li>Plan Approval</li>
            <li>Loan Arrangement</li>
            <li>Construction</li>
            <li>Commercial</li>
            <li>Maintenance</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#dfb36b]">Connect</h4>
          <div className="flex space-x-4 text-2xl mb-6">
            <a href="#" className="hover:text-[#cf9432] social-hammer"><i className="bi bi-facebook"></i></a>
            <a href="#" className="hover:text-[#cf9432] social-hammer"><i className="bi bi-instagram"></i></a>
            <a href="#" className="hover:text-[#cf9432] social-hammer"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="hover:text-[#cf9432] social-hammer"><i className="bi bi-whatsapp"></i></a>
          </div>
          <h5 className="text-sm font-bold text-[#dfb36b] mb-2">Areas We Serve</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>GM Tex Kumarapalayam</li>
            <li>Karur</li>
            <li>T. Gode</li>
            <li>Eilampillai</li>
            <li>Salem Ammapet</li>
            <li>Madurai</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-12 border-t border-gray-600 pt-6">
        © 2026 Sri Mayil Builders. All rights reserved. | Led by Er. S. Dineshkumar, Civil Engineer
      </div>
    </footer>
  );
};

export default Footer;
