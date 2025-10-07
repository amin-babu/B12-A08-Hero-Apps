import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className=" bg-[#001931] text-white pt-10">
      <div className='grid grid-cols-1 space-y-10 md:grid-cols-5 w-11/12 mx-auto'>
        <nav>
          <Link to='/'>
            <div className='flex gap-2 items-center'>
              <img className='w-10' src={logo} alt="" />
              <h3 className='text-lg font-bold text-white'>NexaHero</h3>
            </div>
          </Link>
          <p className='text-[14px] mt-2.5'>
            We build productive apps to make life simpler, smarter, and more exciting. Turning your ideas into impactful digital experiences.
          </p>
        </nav>
        <nav className='flex flex-col gap-2.5 lg:mx-auto'>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover text-[14px]">App Development</a>
          <a className="link link-hover text-[14px]">Product Design</a>
          <a className="link link-hover text-[14px]">UI/UX Solutions</a>
          <a className="link link-hover text-[14px]">Custom Integrations</a>
        </nav>
        <nav className='flex flex-col gap-2.5 lg:mx-auto'>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover text-[14px]">Blog</a>
          <a className="link link-hover text-[14px]">Case Studies</a>
          <a className="link link-hover text-[14px]">Documentation</a>
          <a className="link link-hover text-[14px]">Help Center</a>
        </nav>
        <nav className='flex flex-col gap-2.5 lg:mx-auto'>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover text-[14px]">About NexaHero.IO</a>
          <a className="link link-hover text-[14px]">Contact</a>
          <a className="link link-hover text-[14px]">Careers</a>
          <a className="link link-hover text-[14px]">Press & Media</a>
        </nav>
        <nav className='flex flex-col gap-2.5 lg:mx-auto'>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover text-[14px]">Terms of Use</a>
          <a className="link link-hover text-[14px]">Privacy Policy</a>
          <a className="link link-hover text-[14px]">Cookie Policy</a>
        </nav>
      </div>
      <p className='text-center w-11/12 mx-auto py-4 border-t border-[#E5E7EB50]'>Copyright &copy; 2025 - All right reserved</p>
    </footer>

  );
};

export default Footer;