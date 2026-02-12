import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-slate-400 text-lg">
                                Get the latest travel deals, tips, and destination guides delivered to your inbox.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full bg-slate-800 border-2 border-slate-700 focus:border-rose-500 focus:outline-none text-white placeholder-slate-500 transition-colors"
                            />
                            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 whitespace-nowrap">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold">Wanderlust</span>
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Your gateway to extraordinary travel experiences. Discover unique destinations and create unforgettable memories around the world.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/press" className="text-slate-400 hover:text-white transition-colors">Press</Link></li>
                            <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Support</h4>
                        <ul className="space-y-3">
                            <li><Link to="/help" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link to="/safety" className="text-slate-400 hover:text-white transition-colors">Safety</Link></li>
                            <li><Link to="/cancellation" className="text-slate-400 hover:text-white transition-colors">Cancellation</Link></li>
                            <li><Link to="/covid" className="text-slate-400 hover:text-white transition-colors">COVID-19</Link></li>
                            <li><Link to="/community" className="text-slate-400 hover:text-white transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    {/* Hosting */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Hosting</h4>
                        <ul className="space-y-3">
                            <li><Link to="/host" className="text-slate-400 hover:text-white transition-colors">Become a Host</Link></li>
                            <li><Link to="/host-resources" className="text-slate-400 hover:text-white transition-colors">Resources</Link></li>
                            <li><Link to="/community-forum" className="text-slate-400 hover:text-white transition-colors">Community Forum</Link></li>
                            <li><Link to="/hosting-responsibly" className="text-slate-400 hover:text-white transition-colors">Host Responsibly</Link></li>
                            <li><Link to="/protection" className="text-slate-400 hover:text-white transition-colors">Host Protection</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} Wanderlust. All rights reserved.
                        </p>
                        
                        <div className="flex flex-wrap gap-6 text-sm">
                            <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link to="/cookies" className="text-slate-400 hover:text-white transition-colors">
                                Cookie Policy
                            </Link>
                            <Link to="/sitemap" className="text-slate-400 hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>

                        {/* Language & Currency Selector */}
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                English
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                USD
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500"></div>
        </footer>
    );
}