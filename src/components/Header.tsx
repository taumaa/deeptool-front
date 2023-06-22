import React, { useState } from 'react';
import { CATEGORIES_LIST } from "../const";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="w-full bg-white">
            <header className="max-w-5xl mx-auto rounded-2xl lg:py-6 py-0 flex flex-row w-full justify-between items-center">
                <div>
                    <a href="/">
                        <img src="/logo.png" alt="Logo" className="w-auto h-8" />
                    </a>
                </div>
                <div className="lg:flex hidden">
                    <nav className="flex flex-row space-x-8">
                        {Object.entries(CATEGORIES_LIST).map(([key, item]) => (
                            <a 
                                href={`/${item.slug}/`} 
                                className="font-outfit text-black hover:text-blue-custom transition duration-150"
                                key={key}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="lg:flex hidden">
                    <button className="bg-blue-custom transition duration-100 cursor-not-allowed py-2.5 px-5 text-white rounded-xl font-medium text-sm">
                        Newsletter IA 🔥 (Soon)
                    </button>
                </div>
                <button className="lg:hidden flex p-4" onClick={toggleMenu}>
                    <img src="/burger.svg" alt="burger" className="w-6 h-6" />
                </button>
                <div className={`fixed bg-white z-30 top-0 right-0 h-full w-full lg:hidden transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <button onClick={closeMenu} className="float-right p-4">
                        <img src="/close.svg" alt="close" className="w-6 h-6" />
                    </button>
                    <nav className="mt-20 p-4">
                        {Object.entries(CATEGORIES_LIST).map(([key, item]) => (
                            <a 
                                href={`/${item.slug}/`} 
                                className="font-medium font-outfit text-black hover:text-blue-custom transition duration-150 block mb-4"
                                key={key}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
        </div>
    )
};

export default Header;
