import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import GlobalPresence from './pages/GlobalPresence';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout><Home /></RootLayout>,
  },
  {
    path: '/about',
    element: <RootLayout><About /></RootLayout>,
  },
  {
    path: '/products',
    element: <RootLayout><Products /></RootLayout>,
  },
  {
    path: '/manufacturing',
    element: <RootLayout><Manufacturing /></RootLayout>,
  },
  {
    path: '/global-presence',
    element: <RootLayout><GlobalPresence /></RootLayout>,
  },
  {
    path: '/news-events',
    element: <RootLayout><NewsEvents /></RootLayout>,
  },
  {
    path: '/contact',
    element: <RootLayout><Contact /></RootLayout>,
  },
  {
    path: '*',
    element: (
      <RootLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-[#0A66C2] mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page not found</p>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#0856a8] transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </RootLayout>
    ),
  },
]);
