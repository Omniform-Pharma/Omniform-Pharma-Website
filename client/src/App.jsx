import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./components/layout/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ManufacturingPage = lazy(() => import("./pages/ManufacturingPage"));
const GlobalPresencePage = lazy(() => import("./pages/GlobalPresencePage"));
const NewsEventsPage = lazy(() => import("./pages/NewsEventsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

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
  return (
    <motion.div
      className="min-h-screen bg-white text-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <RootLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/global-presence" element={<GlobalPresencePage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </motion.div>
  );
}

export default App;
