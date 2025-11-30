import barInterior from "@/assets/bar-interior.jpg";
import diningArea from "@/assets/dining-area.jpg";
import heroImage from "@/assets/hero-rooftop.jpg";

export const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Rooftop bar with city skyline view" },
    { src: barInterior, alt: "Modern bar interior with neon lighting" },
    { src: diningArea, alt: "Elegant dining area at twilight" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            Our <span className="text-primary">Atmosphere</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into a world of sophistication and style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
