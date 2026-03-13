import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    content: "Elya International handled our complex agricultural shipments to Europe flawlessly. Their cold chain logistics are unmatched, and their documentation process saved us weeks of delays.",
    author: "Elena Rodriguez",
    role: "Procurement Director, EuroFoods Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    content: "We've been importing industrial parts through Elya International for three years. Not a single shipment has been lost or damaged. Total reliability and transparent communication.",
    author: "James Chen",
    role: "Operations Manager, TechManufacturing",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    content: "What sets them apart is their sourcing capability. They found us premium spice suppliers that perfectly matched our quality requirements and handled the entire export process.",
    author: "Sarah al-Fayed",
    role: "Founder, SpiceRoute Imports",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Global Leaders</h2>
          <p className="text-muted-foreground text-lg">
            Hear from our international partners who rely on Elya International for their critical supply chain operations and sourcing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
