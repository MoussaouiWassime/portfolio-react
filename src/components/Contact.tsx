import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, Linkedin, Github, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsError(false);

        const serviceID = 'service_t7jcixe';
        const templateID = 'template_m47ew39';
        const publicKey = '_tnejil_pLS9NnW6A';

        if (formRef.current) {
            emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
                .then(() => {
                    setIsSuccess(true);
                    setIsSubmitting(false);
                    formRef.current?.reset();

                    setTimeout(() => setIsSuccess(false), 5000);
                }, (error) => {
                    console.error('Erreur:', error);
                    setIsError(true);
                    setIsSubmitting(false);
                });
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="absolute bottom-0 right-0 w-125 h-125 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
                >

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Une <span className="text-orange-400">Opportunité ?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            Je suis actuellement à la recherche d'un stage d'une durée minimale de 8 semaines à partir du 7 avril.
                            Une idée ? Une opportunité ? N'hésitez pas à m'écrire.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-orange-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <a href="mailto:wassime.moussaoui@etudiant.univ-reims.fr" className="text-white hover:text-orange-400 transition-colors">
                                        wassime.moussaoui@etudiant.univ-reims.fr
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6">
                                <a href="https://www.linkedin.com/in/wassime-moussaoui-16ba94368/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-white hover:bg-[#0077b5] transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/MoussaouiWassime" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-white hover:bg-black transition-colors">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Votre Nom</label>
                                <input type="text" name="from_name" required className="input-field w-full" placeholder="Jean Dupont" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Votre Email</label>
                                <input type="email" name="from_email" required className="input-field w-full" placeholder="jean.dupont@exemple.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea name="message" rows={4} required className="input-field w-full resize-none" placeholder="Bonjour..." />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>Envoi en cours... <Loader2 className="animate-spin" size={20} /></>
                                ) : isSuccess ? (
                                    <>Message envoyé ! <CheckCircle size={20} /></>
                                ) : (
                                    <>Envoyer le message <Send size={20} /></>
                                )}
                            </button>

                            {isError && (
                                <p className="text-red-400 text-sm text-center mt-2">Une erreur est survenue. Réessayez plus tard.</p>
                            )}
                        </div>
                    </motion.form>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;