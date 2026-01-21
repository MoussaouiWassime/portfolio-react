import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Mes <span className="text-orange-400">Compétences</span>
                </motion.h2>
                <div className="h-1.5 w-24 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)] mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {skillsData.map((category, catIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                        className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl hover:border-orange-500/30 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                                <category.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                {category.title}
                            </h3>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="text-4xl text-slate-400 transition-all duration-300 group-hover:text-white group-hover:scale-110">
                                        <i className={skill.icon}></i>
                                    </div>

                                    <span className="text-xs font-medium text-slate-500 group-hover:text-orange-300 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;