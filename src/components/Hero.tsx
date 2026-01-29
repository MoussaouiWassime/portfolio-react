import { motion } from 'framer-motion';
import {Github, ArrowRight, Download} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-20 px-4">
            <motion.div
                className="max-w-4xl mx-auto text-center space-y-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={fadeInUp}>
                  <span className="px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium backdrop-blur-sm">
                    Disponible pour un stage — Avril 2025
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                    Bonjour je suis <br />
                    <span className="text-gradient">Moussaoui Wassime</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Étudiant en informatique spécialisé en <strong className="text-white">C++</strong> et <strong className="text-white">Web</strong>.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        Explorer mes travaux
                        <ArrowRight size={20} />
                    </a>
                    <a
                        href="/cv_wassime_moussaoui.pdf"
                        target="_blank"
                        className="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        Télécharger mon CV
                        <Download size={20} />
                    </a>

                    <a
                        href="https://github.com/MoussaouiWassime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 glass-panel text-white rounded-full flex items-center gap-2 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;