import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle2, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useContactSubmission } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BookCall() {
  const contactMutation = useContactSubmission();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-32 pb-24 container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Connect</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to hear from you. Reach out via email, phone, or the form below.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-[#111] text-white border-none overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-8 text-[#F7DB91]">Contact Details</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#F7DB91]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Email Us</p>
                        <a href="mailto:kallepalli.satyadatta@gmail.com" className="text-sm font-medium hover:text-[#F7DB91] transition-colors break-all">
                          kallepalli.satyadatta@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#F7DB91]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Call Us</p>
                        <a href="tel:+916304586548" className="text-sm font-medium hover:text-[#F7DB91] transition-colors">
                          +91 6304586548
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#F7DB91]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Business Hours</p>
                        <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p className="text-xs text-gray-400">Response time: Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-8">
                  <h4 className="font-bold mb-4">Why choose Phrenix?</h4>
                  <ul className="space-y-4">
                    {[
                      "Direct access to expert developers",
                      "Transparent communication",
                      "Flexible engagement models",
                      "Scalable architecture focus"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-[#F7DB91]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-100 shadow-xl p-2 md:p-6">
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="md:col-span-1">
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-gray-50 border-gray-100 h-12 focus-visible:ring-[#F7DB91]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="md:col-span-1">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@company.com" {...field} className="bg-gray-50 border-gray-100 h-12 focus-visible:ring-[#F7DB91]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem className="md:col-span-1">
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Agency" {...field} className="bg-gray-50 border-gray-100 h-12 focus-visible:ring-[#F7DB91]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="md:col-span-1">
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" {...field} className="bg-gray-50 border-gray-100 h-12 focus-visible:ring-[#F7DB91]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your project requirements..." {...field} className="bg-gray-50 border-gray-100 min-h-[150px] focus-visible:ring-[#F7DB91]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="md:col-span-2">
                        <Button 
                          type="submit" 
                          disabled={contactMutation.isPending}
                          className="w-full md:w-auto min-w-[200px] bg-black text-white hover:bg-gray-800 h-12 rounded-full font-bold flex items-center gap-2"
                        >
                          {contactMutation.isPending ? "Sending..." : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                        {contactMutation.isSuccess && (
                          <p className="text-green-600 text-sm mt-4 font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Message sent successfully! We'll get back to you soon.
                          </p>
                        )}
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}