import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/layout/SiteLayout";
import Index from "./pages/Index.tsx";

// Everything except the homepage is split into its own chunk.
const ServicesHub = lazy(() => import("./pages/ServicesHub.tsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.tsx"));
const IndustryPage = lazy(() => import("./pages/IndustryPage.tsx"));
const IndustriesIndex = lazy(() =>
  import("./pages/IndustryPage.tsx").then((m) => ({ default: m.IndustriesIndex })),
);
const AreaPage = lazy(() => import("./pages/AreaPage.tsx"));
const AreasIndex = lazy(() =>
  import("./pages/AreaPage.tsx").then((m) => ({ default: m.AreasIndex })),
);
const form = (name: keyof typeof import("./pages/FormPages.tsx")) =>
  lazy(() => import("./pages/FormPages.tsx").then((m) => ({ default: m[name] })));
const content = (name: keyof typeof import("./pages/ContentPages.tsx")) =>
  lazy(() => import("./pages/ContentPages.tsx").then((m) => ({ default: m[name] })));
const QuotePage = form("QuotePage");
const BookPage = form("BookPage");
const BusinessQuotePage = form("BusinessQuotePage");
const ContactPage = form("ContactPage");
const FeedbackPage = form("FeedbackPage");
const HowWeWorkPage = content("HowWeWorkPage");
const PricingPage = content("PricingPage");
const CareersPage = content("CareersPage");
const FaqPage = content("FaqPage");
const About = lazy(() => import("./pages/About.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const PageFallback = () => <div className="min-h-[70vh] gradient-hero" aria-busy="true" />;

export const AppRoutes = () => (
  <Suspense fallback={<PageFallback />}>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/homes" element={<ServicesHub hub="home" />} />
        <Route path="/business" element={<ServicesHub hub="business" />} />
        <Route path="/services" element={<ServicesHub hub="all" />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/areas" element={<AreasIndex />} />
        <Route path="/areas/:slug" element={<AreaPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/business-quote" element={<BusinessQuotePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/guides" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Keep the catch-all route last. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
