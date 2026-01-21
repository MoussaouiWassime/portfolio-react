import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
    return (
        <div className="relative z-10 flex flex-col flex-1 pb-10">
            <Hero />
            <Navbar />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;