import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getListing } from "../api/api";

export default function ListingDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await getListing(id);
                setListing(response.data.listing)
            } catch (err) {
                console.log("Error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListing();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="mt-4 text-lg text-slate-600 font-medium animate-pulse">
                        Loading details...
                    </p>
                </div>
            </div>
        );
    }

    if (error || !listing) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="text-6xl mb-4">😕</div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                        Listing Not Found
                    </h2>
                    <p className="text-slate-600 mb-6">
                        {error || "This listing doesn't exist or has been removed."}
                    </p>
                    <button
                        onClick={() => navigate("/listings")}
                        className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Back to Listings
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-x-1"
                >
                    <svg
                        className="w-5 h-5 text-slate-700 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-semibold text-slate-700">Back</span>
                </button>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                {/* Image */}
                <div className="absolute inset-0">
                    <img
                        src={listing.image.url}
                        alt={listing.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                            imageLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
                        }`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex items-end">
                    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 md:pb-16 w-full">
                        {/* Location Badge */}
                        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-white font-semibold">{listing.location}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 animate-fade-in-up leading-tight">
                            {listing.title}
                        </h1>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-white font-semibold">4.9</span>
                                <span className="text-white/70 text-sm">(128 reviews)</span>
                            </div>
                            
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <svg className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white font-semibold">Wishlist</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-auto" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" 
                              fill="rgb(248, 250, 252)" fillOpacity="1"/>
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-rose-500 to-purple-500 rounded-full"></span>
                                About This Place
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {listing.description}
                            </p>
                        </div>

                        {/* Amenities Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></span>
                                What This Place Offers
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: "🏖️", label: "Beach Access" },
                                    { icon: "🏊", label: "Swimming Pool" },
                                    { icon: "🅿️", label: "Free Parking" },
                                    { icon: "📶", label: "WiFi" },
                                    { icon: "❄️", label: "Air Conditioning" },
                                    { icon: "🍳", label: "Kitchen" },
                                ].map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-rose-50 hover:to-purple-50 transition-all duration-200"
                                    >
                                        <span className="text-2xl">{amenity.icon}</span>
                                        <span className="font-semibold text-slate-700">{amenity.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
                                Guest Reviews
                            </h2>
                            
                            <div className="space-y-6">
                                {[
                                    { name: "Sarah Johnson", rating: 5, comment: "Absolutely stunning! The views were incredible and the place was even better than the photos.", date: "2 weeks ago" },
                                    { name: "Michael Chen", rating: 5, comment: "Perfect getaway spot. Very peaceful and relaxing. Would definitely come back!", date: "1 month ago" },
                                    { name: "Emma Williams", rating: 4, comment: "Great location and beautiful property. Had an amazing time here with my family.", date: "2 months ago" },
                                ].map((review, index) => (
                                    <div key={index} className="border-b border-slate-200 last:border-0 pb-6 last:pb-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                                    {review.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-800">{review.name}</h4>
                                                    <p className="text-sm text-slate-500">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-slate-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-slate-100">
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-slate-800">$299</span>
                                    <span className="text-slate-500">/ night</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="font-semibold">4.9</span>
                                    <span>· 128 reviews</span>
                                </div>
                            </div>

                            {/* Date Inputs */}
                            <div className="space-y-3 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Check-in</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Check-out</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Guests</label>
                                    <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors">
                                        <option>1 guest</option>
                                        <option>2 guests</option>
                                        <option>3 guests</option>
                                        <option>4 guests</option>
                                        <option>5+ guests</option>
                                    </select>
                                </div>
                            </div>

                            {/* Reserve Button */}
                            <button className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-200 mb-4">
                                Reserve Now
                            </button>

                            <p className="text-center text-sm text-slate-500">
                                You won't be charged yet
                            </p>

                            {/* Price Breakdown */}
                            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                                <div className="flex justify-between text-slate-600">
                                    <span>$299 × 5 nights</span>
                                    <span>$1,495</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Service fee</span>
                                    <span>$75</span>
                                </div>
                                <div className="flex justify-between font-bold text-slate-800 text-lg pt-3 border-t border-slate-200">
                                    <span>Total</span>
                                    <span>$1,570</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Host Card */}
                        <div className="mt-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                                    👤
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Contact Host</h3>
                                    <p className="text-sm text-white/80">Response within hours</p>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-white/90 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}