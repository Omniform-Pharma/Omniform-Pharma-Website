import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared page shell that keeps header/footer consistent on all routes.
function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
