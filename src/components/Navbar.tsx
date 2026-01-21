import { motion } from 'framer-motion';
import { Home, User, Code } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-full px-2 p-2 sm:px-6 sm:py-3 flex items-center gap-2 pointer-events-auto"
            >
                <span className="text-xl font-bold text-white mr-6 ml-2 hidden sm:block">
                    WM<span className="text-orange-400">.</span>
                </span>

                <ul className="flex items-center gap-1 sm:gap-2">
                    <li>
                        <a
                            href="#home"
                            className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group flex items-center gap-2 rounded-full overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Home size={18} />
                                <span className="hidden md:inline">Accueil</span>
                            </span>
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group flex items-center gap-2 rounded-full overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Code size={18} />
                                <span className="hidden md:inline">Skills</span>
                            </span>
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group flex items-center gap-2 rounded-full overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <User size={18} />
                                <span className="hidden md:inline">Projets</span>
                            </span>
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                    </li>
                </ul>
            </motion.nav>
        </div>
    );
};

export default Navbar;