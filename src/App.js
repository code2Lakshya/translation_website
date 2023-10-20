import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/loader/Loader';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const MissionPage = lazy(() => import('./pages/MissionPage/MissionPage'));
const CulturePage=lazy(()=>import('./pages/CulturePage/CulturePage'));
const ContactPage=lazy(()=>import('./pages/ContactPage/ContactPage'));

function App() {
  return (
    <div className="App">
      <Navbar />

      {/** Routes  */}
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Suspense fallback={<Loader />}><AboutPage /></Suspense>} />
        <Route path='/services' element={<Suspense fallback={<Loader />}><ServicesPage /></Suspense>} />
        <Route path='/mission' element={<Suspense fallback={<Loader />}><MissionPage /></Suspense>} />
        <Route path='/culture' element={<Suspense fallback={<Loader />}><CulturePage /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Loader />}><ContactPage /></Suspense>} />
        <Route path='*' element={<p>No Such Route Found</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
