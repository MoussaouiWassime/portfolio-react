const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 border-b border-slate-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <span className="text-xl font-bold">WM.</span>
                <ul className="flex gap-6">
                    <li><a href="#skills" className="hover:text-orange-500">Compétences</a></li>
                    <li><a href="#projects" className="hover:text-orange-500">Projets</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;