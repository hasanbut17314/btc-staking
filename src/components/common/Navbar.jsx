import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Main Navbar */}
            <div className="flex items-center bg-transparent justify-between gap-4 mx-4 md:mx-12 p-4">
                <div className="text-2xl">LOGO</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex text-xl items-center gap-12">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/staking-interface"
                            className={({ isActive }) =>
                                `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                            }
                        >
                            Staking Interface
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/build"
                            className={({ isActive }) =>
                                `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                            }
                        >
                            Build
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/learn"
                            className={({ isActive }) =>
                                `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                            }
                        >
                            Learn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/connect"
                            className={({ isActive }) =>
                                `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                            }
                        >
                            Connect
                        </NavLink>
                    </li>
                </ul>

                <div className="hidden md:block">
                    <button className="btn">
                        <Link to='/staking-interface'>
                            Staking Interface
                        </Link>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 z-40 h-screen w-screen">
                    <div className="h-full flex flex-col p-6">
                        <div className="flex justify-between items-center mb-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-white hover:opacity-80"
                            >
                            </button>
                        </div>

                        <ul className="flex items-center flex-col gap-8 text-2xl text-white">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/staking-interface"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                                    }
                                >
                                    Staking Interface
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/build"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                                    }
                                >
                                    Build
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/learn"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                                    }
                                >
                                    Learn
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/connect"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:opacity-80 ${isActive ? 'text-[#d053a8]' : ''}`
                                    }
                                >
                                    Connect
                                </NavLink>
                            </li>
                        </ul>

                        <button className="mt-20 btn">
                            Staking Interface
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
