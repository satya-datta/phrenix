import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, CheckCircle2, Code2, Smartphone, 
  ShoppingCart, Layout, Cloud, Settings, 
  Rocket, Search, PenTool, BarChart3, ChevronDown 
} from "lucide-react";
import CountUp from "react-countup";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { useContactSubmission } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const contactMutation = useContactSubmission();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFBF0] -z-10 rounded-bl-[100px] hidden lg:block" />
        
        <div className="container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 font-medium text-sm mb-6 border border-yellow-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Accepting new projects for Q4
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 text-gray-900">
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">High-Impact</span> Digital Products.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Phrenix partners with ambitious brands to design, build, and launch web & mobile solutions that drive real business growth.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <button className="bg-black text-white hover:bg-gray-800 font-semibold py-4 px-8 rounded-full transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group">
                    Connect / Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="#work" className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-black hover:text-black transition-all flex items-center justify-center">
                  View Our Work
                </a>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       {/* stock images office people avatars */}
                       <img 
                         src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1506794778202-cad84cf45f1d' : i === 3 ? '1507003211169-0a1dd7228f2d' : '1500648767791-00dcc994a43e'}?w=100&h=100&fit=crop`} 
                         alt="Client" 
                         className="w-full h-full object-cover" 
                       />
                    </div>
                  ))}
                </div>
                <p>Trusted by 50+ innovative founders</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Abstract decorative graphic */}
              <div className="relative w-full aspect-square">
                 {/* stock image modern minimal abstract 3d shapes */}
                 <img 
                   src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" 
                   alt="Digital Innovation" 
                   className="object-cover rounded-3xl shadow-2xl w-full h-full rotate-3 hover:rotate-0 transition-transform duration-700 ease-out" 
                 />
                 
                 {/* Floating card 1 */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                       <Rocket size={20} />
                     </div>
                     <div>
                       <p className="font-bold text-gray-900">Traffic up 240%</p>
                       <p className="text-xs text-gray-500">Last 30 days</p>
                     </div>
                   </div>
                   <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[75%] rounded-full"></div>
                   </div>
                 </motion.div>
                 
                 {/* Floating card 2 */}
                 <motion.div 
                   animate={{ y: [0, 15, 0] }}
                   transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                   className="absolute top-10 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
                 >
                   <div className="bg-[#F7DB91] p-2 rounded-lg">
                     <CheckCircle2 size={24} className="text-black" />
                   </div>
                   <div>
                     <p className="font-bold text-sm">Project Launched</p>
                     <p className="text-xs text-gray-500">On time, on budget</p>
                   </div>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Why most digital products fail</h2>
            <p className="text-gray-600">We solve the core engineering and design challenges that hold businesses back from scaling.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="w-8 h-8 text-red-500" />,
                title: "Slow Development Cycles",
                desc: "Traditional agencies take months to ship simple features, missing critical market opportunities."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-red-500" />,
                title: "Poor Scalability",
                desc: "MVPs built on shaky foundations that crumble when real user traffic actually hits."
              },
              {
                icon: <Layout className="w-8 h-8 text-red-500" />,
                title: "Clunky UX/UI",
                desc: "Interfaces that confuse users instead of converting them, leading to high churn rates."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container-padding">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">A proven process for shipping excellence</h2>
              <p className="text-gray-600 mb-10 text-lg">We don't just write code. We follow a rigorous product development methodology that ensures we build the right thing, the right way.</p>
              
              <div className="space-y-8">
                {[
                  { title: "Discovery & Strategy", desc: "We deep dive into your business goals, user needs, and technical requirements." },
                  { title: "Design & Prototyping", desc: "Crafting intuitive, high-fidelity interfaces that your users will love." },
                  { title: "Agile Development", desc: "Iterative sprints with regular demos, so you're never in the dark." },
                  { title: "Launch & Scale", desc: "Deployment, monitoring, and continuous optimization for growth." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F7DB91] flex items-center justify-center font-bold text-black border-2 border-white shadow-md z-10">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               {/* stock image startup whiteboard meeting */}
               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply pointer-events-none"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000" 
                   alt="Our Process" 
                   className="w-full h-auto"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#111] text-white">
        <div className="container-padding">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#F7DB91] font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-6">Comprehensive digital solutions</h2>
            <p className="text-gray-400 text-lg">From concept to code, we handle every aspect of your digital product lifecycle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Code2 />, title: "Custom Web Development", desc: "Scalable React & Next.js applications built for performance and SEO." },
              { icon: <Smartphone />, title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android." },
              { icon: <ShoppingCart />, title: "E-Commerce Solutions", desc: "High-converting storefronts on Shopify or custom headless builds." },
              { icon: <Layout />, title: "UI/UX Design", desc: "User-centric design systems that ensure consistency and usability." },
              { icon: <Cloud />, title: "Cloud Infrastructure", desc: "Secure, scalable AWS/Azure architecture and DevOps automation." },
              { icon: <Settings />, title: "Custom Software", desc: "Internal tools, dashboards, and enterprise software solutions." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F7DB91]/10 text-[#F7DB91] flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F7DB91]">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/10">
            {[
              { num: 50, suffix: "+", label: "Projects Delivered" },
              { num: 98, suffix: "%", label: "Client Retention" },
              { num: 10, suffix: "M+", label: "Lines of Code" },
              { num: 5, suffix: "yrs", label: "Average Experience" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-black">
                  <CountUp end={stat.num} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <p className="text-black/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24">
        <div className="container-padding">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold font-display mb-4">Selected Work</h2>
              <p className="text-gray-600 max-w-xl">A showcase of our most recent digital partnerships and the results we achieved.</p>
            </div>
            <Link href="/book" className="hidden md:block text-black font-semibold hover:text-[#F7DB91] transition-colors underline decoration-2 underline-offset-4">
              View all projects
            </Link>
          </div>
          
          <div className="space-y-24">
            {[
              {
                title: "ReadGro: Learn & Earn",
                cat: "EdTech • Fintech • Case Study",
                desc: "A full-stack platform combining skill-based education with a powerful referral-driven earning system.",
                img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200",
                link: "/work/readgro"
              },
              {
                title: "Lifestyle E-Commerce",
                cat: "Shopify • Headless • Design",
                desc: "Rebranding and custom storefront for a premium lifestyle brand, increasing conversion by 45%.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
                link: "#"
              }
            ].map((project, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2 group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
                  <Link href={project.link}>
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
                    />
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <span className="text-[#dcb348] font-bold text-sm tracking-widest uppercase mb-3 block">{project.cat}</span>
                  <h3 className="text-3xl font-bold font-display mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{project.desc}</p>
                  <Link href={project.link}>
                    <button className="flex items-center gap-2 font-semibold hover:gap-3 transition-all">
                      Case Study <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 bg-gray-50">
        <div className="container-padding max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How much does a typical project cost?", a: "Every project is unique. A simple landing page might start at $3k, while comprehensive custom web apps typically range from $15k to $50k+. We provide transparent, itemized quotes after our initial discovery call." },
              { q: "How long does development take?", a: "Timeline depends on scope. A marketing site takes 2-4 weeks. A full SaaS MVP typically takes 8-12 weeks. We work in 2-week sprints to ensure consistent progress." },
              { q: "Do you provide post-launch support?", a: "Absolutely. We offer various retainer packages for maintenance, updates, and ongoing optimization to ensure your product continues to perform." },
              { q: "What tech stack do you use?", a: "We specialize in modern JavaScript: React, Next.js, Node.js, TypeScript, and TailwindCSS. For databases we use PostgreSQL, and for CMS we prefer Sanity or Strapi." }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-gray-200 rounded-lg mb-4 px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-padding">
          <div className="bg-[#111] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F7DB91] to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-8">Ready to build something <span className="text-[#F7DB91]">extraordinary?</span></h2>
              <p className="text-gray-400 text-lg mb-10">Stop waiting for the perfect moment. Let's turn your vision into a scalable digital product today.</p>
              <Link href="/book">
                <button className="bg-[#F7DB91] hover:bg-[#F2D070] text-black font-bold text-lg py-5 px-10 rounded-full transition-all hover:shadow-[0_0_30px_rgba(247,219,145,0.4)] hover:-translate-y-1">
                  Connect / Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section (for direct inquiries) */}
      <section className="py-24 bg-white border-t">
        <div className="container-padding max-w-xl mx-auto">
           <div className="text-center mb-10">
             <h3 className="text-2xl font-bold mb-2">Or send us a quick message</h3>
             <p className="text-gray-500">Ideally suited for general inquiries or partnerships.</p>
           </div>

           <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
               <FormField
                 control={form.control}
                 name="name"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Name</FormLabel>
                     <FormControl>
                       <Input placeholder="John Doe" {...field} className="bg-gray-50 border-gray-200 h-12" />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               
               <FormField
                 control={form.control}
                 name="email"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Email</FormLabel>
                     <FormControl>
                       <Input placeholder="john@company.com" {...field} className="bg-gray-50 border-gray-200 h-12" />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />

               <FormField
                 control={form.control}
                 name="message"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Message</FormLabel>
                     <FormControl>
                       <Textarea placeholder="Tell us about your project..." {...field} className="bg-gray-50 border-gray-200 min-h-[120px]" />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               
               <button 
                 type="submit" 
                 disabled={contactMutation.isPending}
                 className="w-full bg-black text-white font-semibold h-12 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
               >
                 {contactMutation.isPending ? "Sending..." : "Send Message"}
               </button>
             </form>
           </Form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
