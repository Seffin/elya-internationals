import { Leaf, Flame, Sparkles, Factory, Hammer } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Agricultural Products",
    description: "Premium grains, pulses, and organic farm produce sourced directly from trusted farmers worldwide.",
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800",
    color: "bg-green-500/10",
  },
  {
    id: 2,
    title: "Premium Spices",
    description: "Aromatic and authentic spices, carefully processed to retain their natural oils and flavors.",
    icon: <Flame className="w-8 h-8 text-orange-500" />,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    color: "bg-orange-500/10",
  },
  {
    id: 3,
    title: "Textiles & Garments",
    description: "High-quality fabrics and ready-made garments crafted with precision and sustainable materials.",
    icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-500/10",
  },
  {
    id: 4,
    title: "Industrial Goods",
    description: "Heavy machinery parts, raw materials, and essential components for global manufacturing.",
    icon: <Factory className="w-8 h-8 text-zinc-500" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    color: "bg-zinc-500/10",
  },
  {
    id: 5,
    title: "Handmade Products",
    description: "Unique artisanal crafts showcasing authentic cultural heritage and expert craftsmanship.",
    icon: <Hammer className="w-8 h-8 text-amber-500" />,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800",
    color: "bg-amber-500/10",
  },
]

export function Products() {
  return (
    <section className="py-24 bg-muted/30" id="products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Export Categories</h2>
          <p className="text-muted-foreground text-lg">
            We specialize in sourcing and exporting high-quality products across diverse industries, ensuring rigorous quality control at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Icon */}
                <div className={`absolute top-4 right-4 z-20 w-14 h-14 rounded-2xl ${product.color} backdrop-blur-md flex items-center justify-center border border-white/20`}>
                  {product.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-primary font-medium hover:underline cursor-pointer group-hover:translate-x-1 inline-flex transition-transform">
                    View Catalog &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
