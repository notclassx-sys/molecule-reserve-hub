import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="text-2xl font-display text-primary-foreground">M</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                MOLECULE
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Air Bar | Jhansi
              </p>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <a
              href="tel:+919910233332"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 99102 33332</span>
            </a>
            <a
              href="mailto:molecule.corporate@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>molecule.corporate@gmail.com</span>
            </a>
          </div>

          {/* CTA */}
          <Link to="/booking">
            <Button size="lg" className="bg-gradient-gold hover:shadow-gold font-semibold">
              Reserve Table
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
