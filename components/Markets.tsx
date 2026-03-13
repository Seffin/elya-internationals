import { MapPin } from "lucide-react"

const regions = [
  { name: "Middle East", stats: "40+ Partners", top: "35%", left: "55%" },
  { name: "Europe", stats: "120+ Partners", top: "25%", left: "45%" },
  { name: "Asia", stats: "200+ Partners", top: "40%", left: "75%" },
  { name: "North America", stats: "80+ Partners", top: "30%", left: "20%" }
]

export function Markets() {
  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden" id="markets">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Reach, Local Impact</h2>
          <p className="text-muted-foreground text-lg">
            Our established networks span across major continents, ensuring your products find the right market with optimized logistics.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] bg-muted/20 rounded-3xl border border-border p-4 md:p-8 flex items-center justify-center overflow-hidden">
          
          {/* Abstract World Map Vector */}
          <div className="absolute inset-x-8 inset-y-8 opacity-20 dark:opacity-40">
            <svg viewBox="0 0 1000 500" className="w-full h-full text-foreground fill-current" preserveAspectRatio="xMidYMid meet">
              <path d="M120,150 Q200,80 300,120 T500,100 T700,150 T850,80 Q900,150 850,250 T700,350 T500,400 T300,350 T150,250 Q100,200 120,150 Z" opacity="0.1"/>
              {/* Simplified North America */}
              <path d="M150,100 Q180,50 250,70 T350,120 T300,200 T200,250 T120,200 Z" />
              {/* Simplified South America */}
              <path d="M250,250 Q300,300 320,400 T280,450 T200,350 Z" />
              {/* Simplified Europe/Asia */}
              <path d="M450,150 Q500,50 650,80 T850,120 T900,200 T750,250 T600,200 T500,220 Z" />
              {/* Simplified Africa */}
              <path d="M450,220 Q550,250 580,350 T500,450 T400,350 Z" />
              {/* Simplified Australia */}
              <path d="M800,350 Q850,320 900,380 T850,450 T750,400 Z" />
            </svg>
          </div>

          {/* Region Markers */}
          {regions.map((region, idx) => (
            <div 
              key={idx} 
              className="absolute z-10 group"
              style={{ top: region.top, left: region.left }}
            >
              <div className="relative flex items-center justify-center">
                {/* Ping animation */}
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }} />
                
                {/* Pin */}
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10 cursor-pointer" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-4 -translate-x-1/2 left-1/2 w-48 bg-card border border-border rounded-xl p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none text-center">
                  <div className="font-bold text-foreground mb-1">{region.name}</div>
                  <div className="text-xs text-muted-foreground font-medium">{region.stats}</div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-b border-r border-border bg-card rotate-45" />
                </div>
              </div>
            </div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <path d="M 55% 35% Q 50% 15% 45% 25%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-primary/50" />
            <path d="M 55% 35% Q 65% 25% 75% 40%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-primary/50" />
            <path d="M 45% 25% Q 30% 10% 20% 30%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-primary/50" />
          </svg>
          
        </div>
      </div>
    </section>
  )
}
