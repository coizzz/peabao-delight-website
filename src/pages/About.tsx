import { Layout } from "@/components/Layout";
import { Users, Heart, Leaf, Package, HandHeart, UserCheck, MapPinned, Brain, TrendingUp, Sparkles, LucideIcon } from "lucide-react";
import heroBao from "@/assets/hero-bao.jpg";

type ColorKey = "peach" | "mango" | "leaf" | "cocoa";

interface Segmentation {
  title: string;
  icon: LucideIcon;
  color: ColorKey;
  items: string[];
}

const colorClassMap: Record<ColorKey, { bg: string; border: string; icon: string; dot: string }> = {
  peach: { bg: "bg-peach/10", border: "border-peach/30", icon: "text-peach", dot: "bg-peach" },
  mango: { bg: "bg-mango/10", border: "border-mango/30", icon: "text-mango", dot: "bg-mango" },
  leaf: { bg: "bg-leaf/10", border: "border-leaf/30", icon: "text-leaf", dot: "bg-leaf" },
  cocoa: { bg: "bg-cocoa/10", border: "border-cocoa/30", icon: "text-cocoa", dot: "bg-cocoa" }
};

const segmentations: Segmentation[] = [
  {
    title: "Demographic",
    icon: UserCheck,
    color: "peach",
    items: ["Ages 15–40", "Students & young professionals", "Families and friend groups", "Dessert enthusiasts"]
  },
  {
    title: "Geographic",
    icon: MapPinned,
    color: "mango",
    items: ["Metro Manila & nearby cities", "Delivery-friendly locations", "Urban areas with dessert culture", "Pick-up friendly zones"]
  },
  {
    title: "Psychographic",
    icon: Brain,
    color: "leaf",
    items: ["Nostalgic Filipino flavor lovers", "Adventurous dessert explorers", "Social media foodies", "Gift-givers and sharers"]
  },
  {
    title: "Behavioral",
    icon: TrendingUp,
    color: "cocoa",
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

          {/* Primary Focus - New Design */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-peach via-mango to-peach rounded-3xl opacity-20 blur-xl" />
            <div className="relative bg-gradient-to-r from-peach/90 to-mango/90 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                    <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-cocoa" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-cocoa font-heading font-semibold text-sm mb-3">
                    Our Primary Focus
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-cocoa mb-3">
                    Gen Z & Millennials in Metro Manila
                  </h3>
                  <p className="text-cocoa/80 text-lg max-w-2xl">
                    Young dessert lovers who crave Filipino-inspired flavors, trend-forward snacks, 
                    and experiences worth sharing on social media.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Market Segmentation - New Design */}
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cocoa">
              Market Segmentation
            </h3>
            <p className="text-cocoa-light mt-2">Understanding our customers from every angle</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {segmentations.map((segment) => {
              const Icon = segment.icon;
              const colorClasses = colorClassMap[segment.color];
              
              return (
                <div 
                  key={segment.title} 
                  className={`group relative bg-card rounded-2xl p-6 border-2 ${colorClasses.border} hover:shadow-elevated transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-xl ${colorClasses.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${colorClasses.icon}`} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xl text-cocoa">
                        {segment.title}
                      </h4>
                      <div className={`h-1 w-12 ${colorClasses.dot} rounded-full mt-1`} />
                    </div>
                  </div>
                  
                  {/* Items as tags */}
                  <div className="flex flex-wrap gap-2">
                    {segment.items.map((item) => (
                      <span 
                        key={item} 
                        className={`px-3 py-1.5 ${colorClasses.bg} rounded-full text-sm text-cocoa font-medium`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
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
