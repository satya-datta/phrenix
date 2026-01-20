import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export default function BookCall() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-32 pb-24 container-padding">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left Side Info */}
          <div className="lg:w-1/3 bg-[#111] p-10 text-white flex flex-col justify-between">
             <div>
               <h1 className="text-3xl font-bold font-display mb-6">Discovery Call</h1>
               <div className="flex items-center gap-3 mb-8 text-gray-400">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span>30 Minutes</span>
               </div>
               
               <p className="text-gray-400 mb-10 leading-relaxed">
                 In this free strategy session, we'll discuss your product vision, technical challenges, and how Phrenix can help you scale.
               </p>
               
               <div className="space-y-4">
                 <h4 className="font-semibold text-white">What we'll cover:</h4>
                 <ul className="space-y-3">
                   {[
                     "Your current product roadmap",
                     "Technical feasibility assessment",
                     "Budget and timeline estimation",
                     "Growth & scalability strategy"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                       <Check className="w-5 h-5 text-[#F7DB91] shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
             
             <div className="mt-12 pt-8 border-t border-white/10">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Founder" />
                 </div>
                 <div>
                   <p className="font-semibold text-white">Alex Morgan</p>
                   <p className="text-xs text-gray-500">Head of Strategy</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Right Side Calendar */}
          <div className="lg:w-2/3 p-4 md:p-8 min-h-[600px]">
             {/* Using a placeholder iframe for demonstration. 
                 In production, replace with actual Cal.com or Calendly embed code. */}
             <iframe 
               src="https://cal.com/replit-user" 
               style={{ width: "100%", height: "100%", minHeight: "600px", border: "none" }}
               title="Book a call"
             />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
