import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-rooftop.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Jhansi's Premier Rooftop Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-tight">
            Elevate Your
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              Evening
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of contemporary dining, craft cocktails, and stunning city views 
            at Molecule Air Bar. Where every moment becomes a memory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-gradient-gold hover:shadow-gold text-lg px-8 h-14 group"
              >
                Book Your Table
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-lg px-8 h-14"
              >
                Discover More
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
