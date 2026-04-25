import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Shared page shell that keeps header/footer consistent on all routes.
function RootLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Ensure consistent scroll position on navigation.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
