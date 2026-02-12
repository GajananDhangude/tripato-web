import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    // const navigate = useNavigate();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                        </div>
                        <span className={`text-2xl font-bold transition-colors ${
                            isScrolled ? 'text-slate-800' : 'text-white'
                        }`}>
                            Wanderlust
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link 
                            to="/" 
                            className={`font-semibold transition-colors hover:text-rose-500 ${
                                isScrolled ? 'text-slate-700' : 'text-white'
                            }`}
                        >
                            Explore
                        </Link>
                        <Link 
                            to="/destinations" 
                            className={`font-semibold transition-colors hover:text-rose-500 ${
                                isScrolled ? 'text-slate-700' : 'text-white'
                            }`}
                        >
                            Destinations
                        </Link>
                        <Link 
                            to="/experiences" 
                            className={`font-semibold transition-colors hover:text-rose-500 ${
                                isScrolled ? 'text-slate-700' : 'text-white'
                            }`}
                        >
                            Experiences
                        </Link>
                        <Link 
                            to="/about" 
                            className={`font-semibold transition-colors hover:text-rose-500 ${
                                isScrolled ? 'text-slate-700' : 'text-white'
                            }`}
                        >
                            About
                        </Link>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search Button */}
                        <button className={`p-2 rounded-full transition-all ${
                            isScrolled 
                                ? 'hover:bg-slate-100 text-slate-700' 
                                : 'hover:bg-white/20 text-white'
                        }`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Wishlist Button */}
                        <button className={`p-2 rounded-full transition-all relative ${
                            isScrolled 
                                ? 'hover:bg-slate-100 text-slate-700' 
                                : 'hover:bg-white/20 text-white'
                        }`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full"></span>
                        </button>

                        {/* User Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                                    isScrolled
                                        ? 'border-slate-200 hover:shadow-md bg-white'
                                        : 'border-white/30 hover:bg-white/20 text-white'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    JD
                                </div>
                            </button>

                            {/* Dropdown Menu */}
                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-2 border border-slate-100 animate-fade-in-up">
                                    <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
                                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="font-semibold text-slate-700">Profile</span>
                                    </Link>
                                    <Link to="/bookings" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
                                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        <span className="font-semibold text-slate-700">My Bookings</span>
                                    </Link>
                                    <Link to="/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
                                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="font-semibold text-slate-700">Settings</span>
                                    </Link>
                                    <hr className="my-2 border-slate-200" />
                                    <button className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors w-full text-left">
                                        <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        <span className="font-semibold text-rose-500">Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Host CTA Button */}
                        <button className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                            Become a Host
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg mobile-menu-button ${
                            isScrolled ? 'text-slate-700' : 'text-white'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-200 mobile-menu animate-fade-in-up">
                    <div className="px-4 py-6 space-y-4">
                        <Link to="/" className="block py-2 text-slate-700 font-semibold hover:text-rose-500 transition-colors">
                            Explore
                        </Link>
                        <Link to="/destinations" className="block py-2 text-slate-700 font-semibold hover:text-rose-500 transition-colors">
                            Destinations
                        </Link>
                        <Link to="/experiences" className="block py-2 text-slate-700 font-semibold hover:text-rose-500 transition-colors">
                            Experiences
                        </Link>
                        <Link to="/about" className="block py-2 text-slate-700 font-semibold hover:text-rose-500 transition-colors">
                            About
                        </Link>
                        <hr className="border-slate-200" />
                        <Link to="/profile" className="block py-2 text-slate-700 font-semibold hover:text-rose-500 transition-colors">
                            Profile
                        </Link>
                        <Link to="/bookings" className="block py-2 text-slate-700 font-semibold hover:text-rose-500 transition-colors">
                            My Bookings
                        </Link>
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200">
                            Become a Host
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}