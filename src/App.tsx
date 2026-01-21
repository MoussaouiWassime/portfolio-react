import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div className="relative min-h-screen flex flex-col selection:bg-orange-500/30 selection:text-orange-200">

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid"></div>
                <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-orange-500/20 rounded-full blur-[100px] animate-float opacity-60"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-100 h-100 bg-orange-500/20 rounded-full blur-[100px] animate-float opacity-60" style={{animationDelay: '2s'}}></div>
            </div>

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