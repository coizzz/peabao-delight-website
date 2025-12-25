import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Music2, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    inquiry: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Salamat, Peabro! We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", mobile: "", inquiry: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-cream via-cream-light to-peach-light">
        <div className="container-main mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-cocoa mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach to-mango">Touch</span>
            </h1>
            <p className="text-cocoa-light text-lg">
              Have questions, orders, or just want to say hi? We'd love to hear from you, Peabro!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream-light">
        <div className="container-main mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-cocoa mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-10">
                <a 
                  href="tel:+639171862249"
                  className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-peach/20 flex items-center justify-center flex-shrink-0 group-hover:bg-peach/30 transition-colors">
                    <Phone className="w-6 h-6 text-peach" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-cocoa mb-1">Phone</h3>
                    <p className="text-cocoa-light">+63 917 186 2249</p>
                  </div>
                </a>

                <a 
                  href="mailto:peabaodelight@gmail.com"
                  className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-mango/20 flex items-center justify-center flex-shrink-0 group-hover:bg-mango/30 transition-colors">
                    <Mail className="w-6 h-6 text-mango" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-cocoa mb-1">Email</h3>
                    <p className="text-cocoa-light">peabaodelight@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-leaf/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-leaf" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-cocoa mb-1">Business Hours</h3>
                    <p className="text-cocoa-light">Tuesday – Sunday</p>
                    <p className="text-cocoa-light">11:00 AM – 8:00 PM</p>
                    <p className="text-cocoa-light/60 text-sm mt-1">Closed on Mondays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-cocoa/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cocoa" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-cocoa mb-1">Location</h3>
                    <p className="text-cocoa-light">Taguig, Metro Manila</p>
                    <p className="text-cocoa-light/60 text-sm mt-1">Pick-up by schedule only</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading font-semibold text-cocoa mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61585103797635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-cocoa flex items-center justify-center hover:bg-primary hover:scale-105 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-cream-light" />
                  </a>
                  <a
                    href="https://www.instagram.com/peabao_delight/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-cocoa flex items-center justify-center hover:bg-primary hover:scale-105 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-cream-light" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-cocoa flex items-center justify-center hover:bg-primary hover:scale-105 transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <Music2 className="w-5 h-5 text-cream-light" />
                  </a>
                </div>
              </div>

              {/* Quick DM CTA */}
              <div className="mt-10 p-6 bg-gradient-to-r from-peach/20 to-mango/20 rounded-2xl">
                <h3 className="font-heading font-bold text-cocoa mb-2">
                  Want a faster response?
                </h3>
                <p className="text-cocoa-light mb-4">
                  DM us to reserve your slot, Peabro! We usually reply within minutes during business hours.
                </p>
                <Button variant="hero" asChild>
                  <a href="https://m.me/61585103797635" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Message Us on Facebook
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-cocoa mb-2">
                  Send Us a Message
                </h2>
                <p className="text-cocoa-light mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-heading font-semibold text-cocoa mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                      className="h-12 rounded-xl border-border bg-cream-light/50 focus:border-primary"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block font-heading font-semibold text-cocoa mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@email.com"
                        className="h-12 rounded-xl border-border bg-cream-light/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block font-heading font-semibold text-cocoa mb-2">
                        Mobile *
                      </label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="0917 123 4567"
                        className="h-12 rounded-xl border-border bg-cream-light/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block font-heading font-semibold text-cocoa mb-2">
                      Order Inquiry *
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-cream-light/50 text-cocoa focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="order">Place an Order</option>
                      <option value="bulk">Bulk Order Inquiry</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="partnership">Partnership / Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-heading font-semibold text-cocoa mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      rows={5}
                      className="rounded-xl border-border bg-cream-light/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
