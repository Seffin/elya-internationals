"use client"

import { ArrowRight, Globe2, ShieldCheck, Ship, Box } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32" id="home">
      {/* Background with gradient and grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto lg:mx-0 mb-6 flex-wrap">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium">Trusted by 500+ global partners</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Global Export <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400">
                Solutions by Elya International
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto lg:mx-0">
              We connect local excellence with global markets. Seamless international trade, uncompromising quality, and fast logistics handling your products from sourcing to delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-background border-2 border-border rounded-full hover:bg-muted hover:-translate-y-1 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-border">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">12+</span>
                <span className="text-sm text-muted-foreground font-medium">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">50+</span>
                <span className="text-sm text-muted-foreground font-medium">Countries Served</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block"></div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-3xl font-bold">1M+</span>
                <span className="text-sm text-muted-foreground font-medium">Tons Shipped</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-card border border-border rounded-[2.5rem] shadow-2xl overflow-hidden p-6 flex flex-col justify-between">
                
                {/* Decorative UI elements representing logistics platform */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Ship className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">To New York</div>
                      <div className="text-xs text-muted-foreground">ID: EXP-90210</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">Completed</span>
                </div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Ship className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">To Los Angeles</div>
                      <div className="text-xs text-muted-foreground">ID: EXP-90220</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">Completed</span>
                </div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Ship className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">To China</div>
                      <div className="text-xs text-muted-foreground">ID: EXP-90230</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">Completed</span>
                </div>

                <div className="space-y-4 flex-1">
                  
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-background border border-border shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Box className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground">Volume</span>
                      </div>
                      <div className="font-semibold text-lg">1 TEU - 50 TEU</div>
                    </div>
                    <div className="p-3 rounded-xl bg-background border border-border shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Globe2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground">Destination</span>
                      </div>
                      <div className="font-semibold text-lg">World Wide</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                   <div className="flex -space-x-2">
                     {[1, 2, 3].map((i) => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`Team member ${i}`} className="w-full h-full object-cover" />
                       </div>
                     ))}
                   </div>
                   <div className="flex items-center gap-1.5 text-sm font-medium">
                     <ShieldCheck className="w-4 h-4 text-green-500" />
                     <span>Cleared Customs</span>
                   </div>
                </div>

              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-12 bg-background border border-border p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg text-blue-500">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Global Reach</div>
                  <div className="font-bold">5+ Continents</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
