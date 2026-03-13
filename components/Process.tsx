import { Search, ClipboardCheck, Package, Plane } from "lucide-react"

const steps = [
  {
    title: "1. Product Sourcing",
    description: "We identify and partner with premium local suppliers, negotiating the best rates while ensuring ethical sourcing practices.",
    icon: <Search className="w-6 h-6 text-primary" />
  },
  {
    title: "2. Quality Inspection",
    description: "Our certified inspectors conduct thorough quality checks at the source to ensure products meet international standards.",
    icon: <ClipboardCheck className="w-6 h-6 text-primary" />
  },
  {
    title: "3. Packaging & Compliance",
    description: "Goods are securely packed using export-grade materials. We prepare all necessary customs documentation and certificates.",
    icon: <Package className="w-6 h-6 text-primary" />
  },
  {
    title: "4. Global Shipping",
    description: "Seamless logistics execution through our network of sea and air freight partners, complete with real-time tracking.",
    icon: <Plane className="w-6 h-6 text-primary" />
  }
]

export function Process() {
  return (
    <section className="py-24" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mb-6">
            <span className="text-sm font-semibold tracking-wide uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Streamlined Export Process</h2>
          <p className="text-muted-foreground text-lg">
            From initial sourcing to final destination delivery, our four-step methodology ensures zero friction and total transparency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden lg:block -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Number Indicator */}
                <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary shadow-lg flex items-center justify-center mx-auto mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="text-center bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4 text-border">
                    <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
