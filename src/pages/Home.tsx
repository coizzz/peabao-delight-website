import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Gift, Star, ChevronDown, ChevronUp, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import heroBao from "@/assets/hero-bao.jpg";
import productBox from "@/assets/product-box.jpg";
const benefits = [{
  icon: Heart,
  title: "Filipino-Inspired Comfort",
  description: "The beloved peach mango flavor you know and love, reimagined in a warm, delicate bao."
}, {
  icon: Sparkles,
  title: "Freshly Made Daily",
  description: "Small-batch crafted with premium ingredients for that perfect burst of flavor in every bite."
}, {
  icon: Gift,
  title: "Perfect for Sharing",
  description: "Ideal for gifting, parties, or treating yourself—joy is meant to be shared."
}];
const testimonials = [{
  name: "John Sanchez",
  location: "Quezon City",
  text: "I ordered a box for my birthday and my friends couldn't stop asking where I got them! The peach mango filling is so creamy and the bao is perfectly soft.",
  rating: 5
}, {
  name: "Marcuz Lagao",
  location: "Quezon City",
  text: "Finally, a dessert that hits different! It's like eating peach mango pie but in a cute bao form. Sulit na sulit!",
  rating: 5
}, {
  name: "Kenneth Salvan",
  location: "Quezon City",
  text: "Bought it for merienda at the office and now my officemates are addicted. We order almost every week now. 10/10 would recommend!",
  rating: 5
}];
const faqs = [{
  question: "How do I order Peabao Delight?",
  answer: "You can order through our Shop page, message us on Facebook or Instagram, or email us at peabaodelight@gmail.com. We accept GCash, bank transfer, and cash on pick-up."
}, {
  question: "Do you deliver outside Metro Manila?",
  answer: "Currently, we deliver within Metro Manila only. For areas outside Metro Manila, please contact us and we'll see what we can arrange!"
}, {
  question: "How long does the bao stay fresh?",
  answer: "Our baos are best consumed within 2 days of delivery when refrigerated. You can also freeze them for up to 2 weeks—just reheat by steaming for 3-5 minutes."
}];
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-peach-light opacity-90" />
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(${heroBao})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        
        <div className="container-main mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <span className="inline-block px-4 py-2 rounded-full bg-mango/20 text-cocoa font-heading font-semibold text-sm mb-6">
                🥟 Now Available in Metro Manila
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cocoa leading-tight mb-6">
                Peach Mango Xiao Long Bao,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach to-mango">
                  the Filipino dessert twist
                </span>{" "}
                you didn't know you needed.
              </h1>
              <p className="text-cocoa-light text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                A warm peach-mango filling wrapped in a soft, delicate bao. Experience comfort in every bite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/shop">Order Now</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/shop">View Menu</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up-delay hidden lg:block">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-peach/30 to-mango/30 rounded-3xl blur-3xl" />
                <img alt="Delicious Peach Mango Xiao Long Bao with golden filling" className="relative w-full rounded-3xl shadow-elevated animate-float" src="/lovable-uploads/dbcf73b3-247c-4ca8-90ce-83e44908cb3c.png" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cocoa/50" />
        </div>
      </section>

      {/* Why Peabao Section */}
      <section className="section-padding bg-cream-light">
        <div className="container-main mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
              Why Peabao Delight?
            </h2>
            <p className="text-cocoa-light text-lg max-w-2xl mx-auto">
              We're not just making dessert—we're creating moments of joy, one bao at a time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => <div key={benefit.title} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peach/20 to-mango/20 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-cocoa mb-3">
                  {benefit.title}
                </h3>
                <p className="text-cocoa-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="section-padding bg-gradient-to-b from-cream-light to-cream">
        <div className="container-main mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 rounded-full bg-leaf/10 text-leaf font-heading font-semibold text-sm mb-4">
                ⭐ Best Seller
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-6">
                Peach Mango Xiao Long Bao
              </h2>
              <p className="text-cocoa-light text-lg mb-6 leading-relaxed">
                Our signature creation combines the nostalgic flavors of Filipino peach mango pie with the delicate artistry of xiao long bao. Each piece is handcrafted with a luscious peach-mango filling encased in a soft, pillowy wrapper.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-cocoa">
                  <span className="w-6 h-6 rounded-full bg-mango/20 flex items-center justify-center text-sm">✓</span>
                  Real peach and mango chunks
                </li>
                <li className="flex items-center gap-3 text-cocoa">
                  <span className="w-6 h-6 rounded-full bg-mango/20 flex items-center justify-center text-sm">✓</span>
                  Freshly steamed to perfection
                </li>
                <li className="flex items-center gap-3 text-cocoa">
                  <span className="w-6 h-6 rounded-full bg-mango/20 flex items-center justify-center text-sm">✓</span>
                  No artificial flavors or preservatives
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div>
                  <span className="text-3xl font-heading font-bold text-cocoa">₱180</span>
                  <span className="text-cocoa-light ml-2">/ box of 6</span>
                </div>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-peach/20 to-mango/20 rounded-3xl blur-2xl" />
                <img src={productBox} alt="Box of Peach Mango Xiao Long Bao - 6 pieces" className="relative w-full max-w-md mx-auto rounded-3xl shadow-elevated" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-cocoa">
        <div className="container-main mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream-light mb-4">
              What Our Peabros Say
            </h2>
            <p className="text-cream-light/70 text-lg">
              Join thousands of happy customers who've discovered their new favorite dessert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => <div key={testimonial.name} className="bg-cocoa-light/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-cream-light/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-mango text-mango" />)}
                </div>
                <p className="text-cream-light/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach to-mango flex items-center justify-center">
                    <span className="text-cocoa font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-cream-light">
                      {testimonial.name}
                    </p>
                    <p className="text-cream-light/60 text-sm flex items-center gap-1">
                      <MapPin size={12} />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-cocoa-light text-lg">
              Got questions? We've got answers, Peabro!
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="bg-card rounded-2xl shadow-soft overflow-hidden">
                <button className="w-full px-6 py-5 flex items-center justify-between text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span className="font-heading font-semibold text-cocoa pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-cocoa-light flex-shrink-0" />}
                </button>
                {openFaq === index && <div className="px-6 pb-5 animate-slide-up">
                    <p className="text-cocoa-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-peach/30 via-mango/20 to-peach/30">
        <div className="container-main mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
            Ready for your first bite?
          </h2>
          <p className="text-cocoa-light text-lg mb-8 max-w-xl mx-auto">
            Experience the warmth of Filipino comfort wrapped in every bao. Order now and taste the delight!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">Order Now</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-cocoa-light text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Metro Manila Delivery
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              Tue–Sun: 11AM–8PM
            </span>
          </div>
        </div>
      </section>
    </Layout>;
}