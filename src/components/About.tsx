import { Wine, Utensils, Music, Award } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Wine,
      title: "Craft Cocktails",
      description: "Expertly mixed drinks using premium spirits and fresh ingredients",
    },
    {
      icon: Utensils,
      title: "Contemporary Cuisine",
      description: "A fusion of flavors that delights every palate",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Curated music and events to enhance your experience",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Impeccable hospitality that exceeds expectations",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-display mb-6">
              The Molecule
              <span className="block text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Molecule Air Bar combines sophisticated ambiance with industrial-chic design, 
              creating Jhansi's most sought-after destination for dining, drinks, and entertainment. 
              Our rooftop venue offers breathtaking views and an unforgettable atmosphere.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
            {[
              { value: "150+", label: "Seating Capacity" },
              { value: "100+", label: "Cocktail Varieties" },
              { value: "5★", label: "Guest Rating" },
              { value: "7 Days", label: "Open Weekly" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
