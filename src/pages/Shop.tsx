import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, CreditCard, MessageCircle, Mail, Truck, Gift, ShoppingBag } from "lucide-react";
import productBox from "@/assets/product-box.jpg";

const orderSteps = [
  {
    step: 1,
    title: "Choose Your Products",
    description: "Select your favorite Peabao products and quantity from our menu."
  },
  {
    step: 2,
    title: "Message or Checkout",
    description: "Send us a message via Facebook, Instagram, or email with your order details."
  },
  {
    step: 3,
    title: "Confirm Schedule",
    description: "We'll confirm your delivery or pick-up schedule within 24 hours."
  },
  {
    step: 4,
    title: "Payment",
    description: "Pay via GCash, bank transfer, or cash on pick-up—whatever works for you!"
  },
  {
    step: 5,
    title: "Receive & Enjoy",
    description: "Get your order and enjoy warm, delicious Peabao goodness!"
  }
];

export default function Shop() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-cream via-cream-light to-peach-light">
        <div className="container-main mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-cocoa mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach to-mango">Shop</span>
            </h1>
            <p className="text-cocoa-light text-lg">
              Order your favorite Filipino dessert bao today and experience the delight!
            </p>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-mango via-peach to-mango py-4">
        <div className="container-main mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
            <Gift className="w-6 h-6 text-cocoa" />
            <p className="font-heading font-bold text-cocoa">
              🎉 Grand Opening Promo: Buy 2 boxes, get 10% off! (Limited time only)
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-cream-light">
        <div className="container-main mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
              Our Products
            </h2>
            <p className="text-cocoa-light text-lg">
              Handcrafted with love, made fresh for you.
            </p>
          </div>

          {/* Product Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden shadow-elevated">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-2 rounded-full bg-leaf text-accent-foreground font-heading font-semibold text-sm">
                      ⭐ Best Seller
                    </span>
                  </div>
                  <img
                    src={productBox}
                    alt="Peach Mango Xiao Long Bao - Box of 6 pieces"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-cocoa mb-4">
                    Peach Mango Xiao Long Bao
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-mango text-mango" />
                    ))}
                    <span className="text-cocoa-light text-sm ml-2">(50+ reviews)</span>
                  </div>
                  <p className="text-cocoa-light mb-6 leading-relaxed">
                    Our signature creation! A warm, creamy peach-mango filling encased in a soft, 
                    delicate bao wrapper. Made with real fruit chunks and no artificial flavors. 
                    Each box contains 6 pieces—perfect for sharing or treating yourself!
                  </p>
                  <ul className="space-y-2 mb-6 text-cocoa-light text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-mango">✓</span> 6 pieces per box
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-mango">✓</span> Real peach & mango chunks
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-mango">✓</span> No preservatives
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-mango">✓</span> Best consumed within 2 days (or freeze for 2 weeks)
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div>
                      <span className="text-3xl font-heading font-bold text-cocoa">₱180</span>
                      <span className="text-cocoa-light ml-2">/ box of 6</span>
                    </div>
                    <Button variant="hero" size="lg" asChild>
                      <a href="https://m.me/61585103797635" target="_blank" rel="noopener noreferrer">
                        Order via Messenger
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Free delivery note */}
          <div className="text-center mt-8">
            <p className="text-cocoa-light inline-flex items-center gap-2 px-6 py-3 bg-mango/10 rounded-full">
              <Truck className="w-5 h-5 text-mango" />
              Free delivery for orders ₱500 and above within Metro Manila!
            </p>
          </div>
        </div>
      </section>

      {/* Location Section - New Design */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="container-main mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-mango/20 text-cocoa font-heading font-semibold text-sm mb-4">
              📍 Find Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
              Where to Get Peabao
            </h2>
            <p className="text-cocoa-light text-lg">
              We deliver straight to your doorstep or you can pick up at our location.
            </p>
          </div>

          {/* Location Cards - New Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-peach/10 via-mango/10 to-peach/10 rounded-3xl p-6 md:p-10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mango/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-peach/20 rounded-full blur-3xl" />
              
              <div className="relative grid md:grid-cols-2 gap-6">
                {/* Delivery Card */}
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-peach/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peach to-mango flex items-center justify-center flex-shrink-0 shadow-soft">
                      <Truck className="w-8 h-8 text-cocoa" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-cocoa mb-2">
                        Delivery
                      </h3>
                      <p className="text-cocoa-light text-sm mb-4">
                        We deliver within Metro Manila. Orders are usually delivered within 1-2 days after confirmation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-peach/10 rounded-full text-xs font-medium text-cocoa">
                          <MapPin className="w-3.5 h-3.5" />
                          Metro Manila
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-mango/10 rounded-full text-xs font-medium text-cocoa">
                          <Clock className="w-3.5 h-3.5" />
                          1-2 Days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pick-up Card */}
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-mango/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mango to-peach flex items-center justify-center flex-shrink-0 shadow-soft">
                      <ShoppingBag className="w-8 h-8 text-cocoa" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-cocoa mb-2">
                        Pick-up Point
                      </h3>
                      <p className="text-cocoa-light text-sm mb-4">
                        Prefer to pick up? Schedule a pick-up at our location in Fairview, Quezon City.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-mango/10 rounded-full text-xs font-medium text-cocoa">
                          <MapPin className="w-3.5 h-3.5" />
                          Fairview, QC
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-leaf/10 rounded-full text-xs font-medium text-cocoa">
                          <Clock className="w-3.5 h-3.5" />
                          By Schedule
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Highlight */}
              <div className="mt-8 bg-cocoa rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-cream-light rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-cream-light rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-cream-light rounded-full" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-peach to-mango flex items-center justify-center mx-auto mb-4 shadow-elevated animate-pulse-soft">
                    <MapPin className="w-8 h-8 text-cocoa" />
                  </div>
                  <h4 className="font-heading text-xl md:text-2xl font-bold text-cream-light mb-2">
                    Fairview, Quezon City
                  </h4>
                  <p className="text-cream-light/70 text-sm max-w-md mx-auto">
                    Exact location will be shared upon order confirmation. Message us to schedule your pick-up!
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream-light/10 rounded-full text-sm text-cream-light">
                      🏠 Home-based
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream-light/10 rounded-full text-sm text-cream-light">
                      🚗 Easy parking
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream-light/10 rounded-full text-sm text-cream-light">
                      📍 Near SM Fairview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="section-padding bg-gradient-to-b from-cream-light to-cream">
        <div className="container-main mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa mb-4">
              How to Order
            </h2>
            <p className="text-cocoa-light text-lg">
              Getting your Peabao fix is easy! Just follow these simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-peach via-mango to-peach -translate-x-1/2" />
              
              <div className="space-y-8">
                {orderSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className={`flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`bg-card rounded-2xl p-6 shadow-card inline-block ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <h3 className="font-heading text-lg font-bold text-cocoa mb-2">
                          {step.title}
                        </h3>
                        <p className="text-cocoa-light text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-peach to-mango flex items-center justify-center shadow-card">
                        <span className="font-heading font-bold text-cocoa text-lg">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <CreditCard className="w-8 h-8 text-mango mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-cocoa mb-4">
                Payment Options
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-mango/10 rounded-full text-cocoa font-medium text-sm">
                  GCash
                </span>
                <span className="px-4 py-2 bg-mango/10 rounded-full text-cocoa font-medium text-sm">
                  Bank Transfer
                </span>
                <span className="px-4 py-2 bg-mango/10 rounded-full text-cocoa font-medium text-sm">
                  Cash on Pick-up
                </span>
              </div>
            </div>
          </div>

          {/* Order CTAs */}
          <div className="mt-12 text-center">
            <h3 className="font-heading text-2xl font-bold text-cocoa mb-6">
              Ready to Order?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://m.me/61585103797635" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Order via Messenger
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:peabaodelight@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Order via Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
