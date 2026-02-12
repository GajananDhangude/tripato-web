import React, { useState, useEffect } from "react";
import { getAllListings } from "../api/api";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

export default function Listings() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllListings();
                setListings(response.data.allListings);
            } catch (err) {
                console.log("Error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/listings/${id}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin animation-delay-300"></div>
                </div>
                <p className="mt-6 text-lg text-slate-600 font-medium animate-pulse">
                    Discovering amazing places...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                        Oops! Something went wrong
                    </h2>
                    <p className="text-slate-600">{error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <Header/>

            {/* Listings Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
                {listings && listings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {listings.map((item, index) => (
                            <article
                                key={item._id}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                                onMouseEnter={() => setHoveredId(item._id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => handleCardClick(item._id)}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400">
                                    <img
                                        src={item.image.url}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                    
                                    {/* Hover Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-rose-500/95 to-purple-600/95 flex items-center justify-center transition-opacity duration-300 ${
                                        hoveredId === item._id ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                        <button className="px-8 py-3 bg-white text-rose-600 rounded-full font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 group/btn">
                                            View Details
                                            <svg 
                                                className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Location Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-800 shadow-lg">
                                            <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {item.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                    
                                    {/* Read More Link */}
                                    <div className="mt-4 flex items-center text-rose-500 font-semibold group-hover:text-rose-600">
                                        <span className="text-sm">Learn more</span>
                                        <svg 
                                            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                        <div className="text-7xl mb-6 animate-bounce">🏖️</div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-3">
                            No listings found
                        </h3>
                        <p className="text-slate-600 text-lg">
                            Check back soon for new destinations
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}