import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./components/layout/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ManufacturingPage = lazy(() => import("./pages/ManufacturingPage"));
const GlobalPresencePage = lazy(() => import("./pages/GlobalPresencePage"));
const NewsEventsPage = lazy(() => import("./pages/NewsEventsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));

// Simple route loading state to keep transitions polished.
function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#0A66C2] border-t-transparent" />
    </div>
  );
}

// This component defines global app routes and shared layout.
function App() {
  const location = useLocation();
  return (
    <motion.div
      className="min-h-screen bg-white text-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <RootLayout>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/manufacturing" element={<ManufacturingPage />} />
                <Route path="/global-presence" element={<GlobalPresencePage />} />
                <Route path="/news-events" element={<NewsEventsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </RootLayout>
    </motion.div>
  );
}

export default App;
