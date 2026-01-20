import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
    return (
        <div className="relative z-10 flex flex-col flex-1 pb-10">
            <Skills />
            <Projects />
        </div>
    );
}

export default App;