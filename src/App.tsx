import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Peabao Delight | Filipino Dessert in a Bao | Peach Mango Xiao Long Bao</title>
          <meta name="description" content="Peabao Delight offers Filipino-inspired dessert xiao long bao with our signature Peach Mango flavor. Fresh, handcrafted, and perfect for sharing. Order now in Metro Manila!" />
          <meta name="keywords" content="Filipino dessert, peach mango, xiao long bao dessert, Metro Manila delivery, dessert bao, Filipino food, merienda, Peabao Delight" />
          <meta property="og:title" content="Peabao Delight | Filipino Dessert in a Bao" />
          <meta property="og:description" content="A warm peach-mango filling wrapped in a soft, delicate bao. Experience Filipino dessert comfort in every bite!" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://peabaodelight.com" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
