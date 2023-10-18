import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Languages from './components/Languages/Languages';
import Projects from './components/Projects/Projects';
import Missions from './components/Missions/Missions';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Languages />
        <Projects />
        <Missions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
