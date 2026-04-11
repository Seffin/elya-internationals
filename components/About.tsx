"use client"

import { motion } from "framer-motion"
import { 
  Globe2, 
  ShieldCheck, 
  Ship, 
  Box, 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle2 
} from "lucide-react"

export function About() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32" id="about">
      {/* Background with gradient and grid - Matches Hero exactly */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            <span className="text-sm font-medium">Our Story & Values</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.2]">
            Connecting India to the 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400"> World</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            Elya International isn't just a logistics provider; we are your strategic partner in global trade. Founded on principles of reliability and transparency, we bridge the gap between local manufacturers and international demand.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Mission Card */}
              <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To simplify global trade by providing seamless, tech-enabled export solutions that minimize risk and maximize speed for our partners. We handle the complexity of customs, freight, and compliance so you can focus on growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the most trusted export house in Asia, recognized for our ethical practices, deep market intelligence, and unwavering commitment to delivering excellence across every nautical mile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: ShieldCheck, text: "100% Compliance" },
                  { icon: Globe2, text: "Multi-Modal Transport" },
                  { icon: Box, text: "End-to-End Tracking" },
                  { icon: Award, text: "Certified Partners" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm font-medium">
                    <div className="p-1.5 rounded-lg bg-primary/5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Large Stats Card */}
            <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent rounded-[2.5rem] transform -rotate-3 scale-105" />
              <div className="absolute inset-0 bg-card border border-border rounded-[2.5rem] shadow-2xl overflow-hidden p-8 flex flex-col">
                
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-8 h-8 text-primary" />
                    <h4 className="text-xl font-bold">Trusted Network</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm text-muted-foreground">Client Retention</span>
                        <span className="text-2xl font-bold">98%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[98%] rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                        <span className="text-2xl font-bold">99.5%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[99%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-8 mb-6">
                  <h5 className="font-semibold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    Global Offices & Agents
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["🇮🇳 India HQ", "🇺🇸 USA", "🇦🇪 UAE", "🇬🇧 UK", "🇸🇬 Singapore"].map((loc) => (
                      <span key={loc} className="px-3 py-1.5 bg-muted/50 rounded-full text-xs font-medium border border-border">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Snippet */}
                <div className="mt-auto bg-primary/5 rounded-2xl p-5 border border-primary/10">
                  <p className="text-sm italic text-foreground/80 mb-3">
                    "Elya International handled our complex shipment to Europe with zero delays. Their transparency is unmatched."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                      TP
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Textile Partner Ltd.</div>
                      <div className="text-xs text-muted-foreground">Exporting since 2021</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Floating Years Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-6 lg:-left-10 bg-background border border-border p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-xl">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium">Established</div>
                <div className="text-2xl font-bold">2012</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom Trust Bar - Echoes Hero Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-8 md:gap-16 mt-24 pt-12 border-t border-border flex-wrap"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary">12+</span>
            <span className="text-sm text-muted-foreground font-medium">Years Experience</span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary">50+</span>
            <span className="text-sm text-muted-foreground font-medium">Countries Served</span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary">1M+</span>
            <span className="text-sm text-muted-foreground font-medium">Tons Shipped</span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary">24/7</span>
            <span className="text-sm text-muted-foreground font-medium">Customer Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}