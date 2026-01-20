import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2, Trophy, Target, Lightbulb, Users, Code, Layout, Database, CreditCard, Globe } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ReadGroCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <a href="https://readgro.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Live Website
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">EdTech + Fintech</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              ReadGro: Revolutionizing E-Learning with a "Learn & Earn" Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A full-stack platform combining skill-based education with a powerful referral-driven earning system, built end-to-end by Phrenix.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="text-primary" /> Project Overview
                </h2>
                <p className="text-muted-foreground mb-6">
                  ReadGro is a full-stack Learn & Earn web platform designed to combine online education with a referral-based earning system. The platform enables users to enroll in skill-based courses and earn commissions by referring those courses to others.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <div className="font-bold text-2xl text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Courses</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <div className="font-bold text-2xl text-primary">95%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <div className="font-bold text-2xl text-primary">Real-time</div>
                    <div className="text-xs text-muted-foreground">Tracking</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <div className="font-bold text-2xl text-primary">Secure</div>
                    <div className="text-xs text-muted-foreground">Payments</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="text-primary" /> Our Role
                </h2>
                <ul className="space-y-3">
                  {[
                    "Product Planning",
                    "UI/UX Design",
                    "Frontend Development",
                    "Backend & API Development",
                    "Database Design",
                    "Payment Integration",
                    "Deployment & Maintenance"
                  ].map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {role}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges & Solution */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb className="text-primary" /> The Problem
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">01.</span>
                  Learners gain skills but have no immediate financial incentive to share their knowledge.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">02.</span>
                  Course marketing depends heavily on expensive traditional advertising.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">03.</span>
                  Limited user engagement after course completion.
                </li>
              </ul>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="text-primary" /> The Solution
              </h2>
              <p className="text-muted-foreground mb-6">
                We built ReadGro to merge skill-based learning with referral-driven earning. This creates a community-driven growth model where education becomes self-promoting.
              </p>
              <ul className="space-y-2">
                {["Skill-based learning", "Referral-driven earning", "Transparent dashboards"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Architecture</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon={<Layout />} title="Frontend" description="React / Next.js with responsive design and component-based architecture." />
            <TechCard icon={<Code />} title="Backend" description="Node.js & Express with RESTful API and JWT authentication." />
            <TechCard icon={<Database />} title="Database" description="Relational structure optimized for analytics and reporting." />
            <TechCard icon={<CreditCard />} title="Payments" description="Razorpay integration with secure payout workflows." />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">Scalable</div>
              <p className="opacity-90 text-sm">Education + Earning Ecosystem</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Organic</div>
              <p className="opacity-90 text-sm">Growth via Referrals</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">High</div>
              <p className="opacity-90 text-sm">User Retention Rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your next big idea?</h2>
          <Link href="/book">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
              Book a Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function TechCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="hover-elevate">
      <CardContent className="pt-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
