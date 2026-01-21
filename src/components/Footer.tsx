const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900/50 backdrop-blur-md border-t border-white/5">
            <p>© {new Date().getFullYear()} Wassime Moussaoui. Tous droits réservés.</p>
            <p className="mt-2">Développé avec React, Tailwind & Framer Motion</p>
        </footer>
    );
};

export default Footer;