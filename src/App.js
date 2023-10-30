import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/loader/Loader';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const CulturePage=lazy(()=>import('./pages/CulturePage/CulturePage'));
const ContactPage=lazy(()=>import('./pages/ContactPage/ContactPage'));
const BlogsPage=lazy(()=>import('./pages/BlogsPage/BlogsPage'));

function App() {
  return (
    <div className="App">
      <Navbar />

      {/** Routes  */}
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Suspense fallback={<Loader />}><AboutPage /></Suspense>} />
        <Route path='/services' element={<Suspense fallback={<Loader />}><ServicesPage /></Suspense>} />
        <Route path='/culture' element={<Suspense fallback={<Loader />}><CulturePage /></Suspense>} />
        <Route path='/blogs' element={<Suspense fallback={<Loader />}><BlogsPage /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Loader />}><ContactPage /></Suspense>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
