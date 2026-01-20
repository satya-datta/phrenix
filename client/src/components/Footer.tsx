import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-display tracking-tighter text-white mb-6 block">
              Phrenix<span className="text-[#F7DB91]">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build high-impact digital products that scale with your business. Partner with us to transform your vision into reality.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#F7DB91] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#F7DB91] transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-[#F7DB91] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-[#F7DB91] transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#F7DB91] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F7DB91] transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-[#F7DB91] transition-colors">Careers</a></li>
              <li><Link href="/book" className="hover:text-[#F7DB91] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F7DB91] hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F7DB91] hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F7DB91] hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F7DB91] hover:text-black transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Phrenix Digital. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
