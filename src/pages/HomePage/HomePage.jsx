import Home from '../../components/Home/Home';
import Languages from '../../components/Languages/Languages';
import Projects from '../../components/Projects/Projects';
import Missions from '../../components/Missions/Missions';
import { useEffect } from 'react';

const HomePage=()=>{

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <main>
        <Home />
        <Languages />
        <Projects />
        <Missions />
        </main>
    );
}
export default HomePage;