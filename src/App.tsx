import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <div className="relative z-10 flex flex-col flex-1 pb-10">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
            </div>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
}

export default App;