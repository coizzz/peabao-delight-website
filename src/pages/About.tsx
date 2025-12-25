import { Layout } from "@/components/Layout";
import { Users, MapPin, Heart, Target, Leaf, Package, HandHeart } from "lucide-react";
import heroBao from "@/assets/hero-bao.jpg";

const segmentations = [
  {
    title: "Demographic",
    items: ["Ages 15–40", "Students & young professionals", "Families and friend groups", "Dessert enthusiasts"]
  },
  {
    title: "Geographic",
    items: ["Metro Manila & nearby cities", "Delivery-friendly locations", "Urban areas with dessert culture", "Pick-up friendly zones"]
  },
  {
    title: "Psychographic",
    items: ["Nostalgic Filipino flavor lovers", "Adventurous dessert explorers", "Social media foodies", "Gift-givers and sharers"]
  },
  {
    title: "Behavioral",
    items: ["Loves limited drops & promos", "Enjoys shareable snacks", "Active on social platforms", "Values quality over quantity"]
  }
];

const socialResponsibility = [
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    description: "We use recyclable and paper-based packaging whenever possible to minimize our environmental footprint."
  },
  {
    icon: Package,
    title: "Support Local Growers",
    description: "We source our mangoes from local Filipino farmers when in season, supporting local agriculture and ensuring freshness."
  },
  {
    icon: HandHeart,
    title: "Peabao Share-a-Bite Program",
    description: "A portion of our monthly profits goes to community food drives and school feeding programs across Metro Manila."
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-peach-light" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroBao})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-main mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-cocoa mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach to-mango">Peabao Delight</span>
            </h1>
            <p className="text-cocoa-light text-lg md:text-xl leading-relaxed">
              Filipino dessert in a bao. We're on a mission to bring joy to every bite, 
              one peach mango xiao long bao at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-cream-light">
        <div className="container-main mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-cocoa-light leading-relaxed">
                <p>
                  Peabao Delight was born from a simple question: What if we could capture the beloved taste of Filipino peach mango pie in a whole new form?
                </p>
                <p>
                  Inspired by the artistry of Chinese xiao long bao and the nostalgic flavors of Filipino merienda, we created something truly unique—a dessert dumpling that's warm, comforting, and unmistakably Filipino.
                </p>
                <p>
                  Every bao is handcrafted with care, using real peach and mango chunks in a creamy, luscious filling. We don't cut corners—no artificial flavors, no preservatives, just pure deliciousness wrapped in a soft, delicate wrapper.
                </p>
                <p>
                  Whether you're treating yourself after a long day, sharing with friends, or surprising someone special, Peabao Delight is here to bring a little sweetness into your life.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-peach/20 to-mango/20 rounded-3xl blur-2xl" />
              <img
                src={heroBao}
                alt="Peabao Delight - Peach Mango Xiao Long Bao"
                className="relative w-full rounded-3xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peach/20 to-mango/20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
              Who We Serve
            </h2>
            <p className="text-cocoa-light text-lg max-w-2xl mx-auto">
              Peabao Delight is made for everyone who craves a taste of home with a modern twist. 
              But we especially love serving our fellow Pinoys who appreciate quality desserts and unique flavors.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-xl font-bold text-cocoa">Our Primary Focus</h3>
            </div>
            <p className="text-cocoa-light text-lg mb-8 p-4 bg-mango/10 rounded-xl border-l-4 border-mango">
              Gen Z and Millennials in Metro Manila who love Filipino-inspired desserts, 
              trend-forward snacks, and experiences worth sharing on social media.
            </p>
            
            <h3 className="font-heading text-xl font-bold text-cocoa mb-6">
              Market Segmentation
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {segmentations.map((segment) => (
                <div key={segment.title} className="bg-cream-light rounded-2xl p-6">
                  <h4 className="font-heading font-bold text-cocoa mb-4 pb-2 border-b border-border">
                    {segment.title}
                  </h4>
                  <ul className="space-y-2">
                    {segment.items.map((item) => (
                      <li key={item} className="text-cocoa-light text-sm flex items-start gap-2">
                        <span className="text-mango mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section className="section-padding bg-leaf/5">
        <div className="container-main mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-leaf/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-leaf" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
              Our Commitment to Community
            </h2>
            <p className="text-cocoa-light text-lg max-w-2xl mx-auto">
              At Peabao Delight, we believe that good food should also do good. 
              Here's how we're making a positive impact beyond delicious baos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {socialResponsibility.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-leaf/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-leaf" />
                </div>
                <h3 className="font-heading text-xl font-bold text-cocoa mb-3">
                  {item.title}
                </h3>
                <p className="text-cocoa-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Promise */}
          <div className="mt-12 bg-gradient-to-r from-leaf/10 via-mango/10 to-peach/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl font-bold text-cocoa mb-4">
              Our Promise
            </h3>
            <p className="text-cocoa-light text-lg max-w-3xl mx-auto leading-relaxed">
              We promise to always prioritize quality, support our local community, 
              and operate with integrity. Every bao we make carries not just delicious flavors, 
              but also our commitment to making the world a little sweeter—one bite at a time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
