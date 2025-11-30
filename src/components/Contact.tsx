import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 99102 33332",
      link: "tel:+919910233332",
    },
    {
      icon: Mail,
      title: "Email",
      value: "molecule.corporate@gmail.com",
      link: "mailto:molecule.corporate@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jhansi, Uttar Pradesh",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "5:00 PM - 1:00 AM",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help make your visit unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground font-medium">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
