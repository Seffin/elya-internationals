import { Globe2, ShieldCheck, Zap, Handshake } from "lucide-react"

const features = [
  {
    title: "Global Shipping Network",
    description: "Extensive logistics partnerships ensuring your goods reach any destination across 50+ countries with maximum efficiency.",
    icon: <Globe2 className="w-10 h-10 text-blue-500" />,
    bg: "bg-blue-500/10"
  },
  {
    title: "Rigorous Quality Assurance",
    description: "Every shipment undergoes strict inspection protocols by certified experts before leaving our facilities.",
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    bg: "bg-green-500/10"
  },
  {
    title: "Trusted Global Suppliers",
    description: "We maintain direct, long-term relationships with premium manufacturers and farmers to guarantee authenticity.",
    icon: <Handshake className="w-10 h-10 text-amber-500" />,
    bg: "bg-amber-500/10"
  },
  {
    title: "Fast & Trackable Logistics",
    description: "End-to-end supply chain visibility with real-time tracking from the warehouse to your doorstep.",
    icon: <Zap className="w-10 h-10 text-primary" />,
    bg: "bg-primary/10"
  }
]

export function Features() {
  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mb-6">
              <span className="text-sm font-semibold tracking-wide uppercase">Why Choose Elya International</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Excellence in Every Shipment
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We eliminate the complexities of international trade. Our infrastructure is built to provide uninterrupted, secure, and fast export solutions tailored to your business scale.
            </p>
            <ul className="space-y-4">
              {[
                "Customs Clearance Support", 
                "Risk-Free Transactions", 
                "24/7 Dedicated Support",
                "Scalable Volume Capacity"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${i % 2 !== 0 ? 'sm:mt-12' : ''}`}
              >
                <div className={`w-20 h-20 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative background blur */}
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${feature.bg} pointer-events-none group-hover:opacity-40 transition-opacity`} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
