import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-[80vh] flex items-center justify-center pt-20">
            <div className="text-center space-y-8 max-w-4xl">
                <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">
                    Disponible pour un stage — Avril 2025
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white">
                    Concevoir des solutions <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-orange-600">
                        Performantes & Intuitives
                    </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Étudiant en informatique spécialisé en <strong className="text-white">C++</strong> et <strong className="text-white">Web</strong>.
                </p>

                <div className="flex justify-center gap-4">
                    <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-slate-200 transition-colors">
                        Mes Projets <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Hero;