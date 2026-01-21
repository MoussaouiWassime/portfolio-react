import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Mes <span className="text-orange-400">Projets</span>
                </h2>

                <div className="h-1.5 w-24 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl hover:shadow-orange-500/10 transition-shadow duration-300"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-out group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300" />

                            <div className="absolute top-4 right-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-900/80 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 block"
                                    title="Voir le code"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col grow p-6">

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-300 border border-orange-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-white/5">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-orange-400 font-medium text-sm transition-colors hover:text-orange-300"
                                >
                                    <span>Voir les détails</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;