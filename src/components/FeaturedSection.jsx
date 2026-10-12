"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Laptop, 
  MessageSquareWarning, 
  Flame, 
  Wrench, 
  AirVent, 
  BatteryCharging, 
  Wind, 
  Plane, 
  Camera, 
  Tablet, 
  Tv, 
  Refrigerator, 
  Smartphone, 
  Cable, 
  Activity, 
  Video, 
  Scissors, 
  Watch, 
  Headphones, 
  Flashlight, 
  MapPin, 
  Search 
} from 'lucide-react';

export default function FeaturedSection() {
  // ওপরের ৪টি কুইক সার্ভিস কার্ডের ডেটা
  const quickServices = [
    { title: 'Laptop Finder', desc: 'Find Your Laptop Easily', icon: <Laptop className="w-6 h-6 text-orange-500" /> },
    { title: 'Raise a Complain', desc: 'Share your experience', icon: <MessageSquareWarning className="w-6 h-6 text-orange-500" /> },
    { title: 'AC Ton Calculator', desc: 'Find Perfect AC.', icon: <Flame className="w-6 h-6 text-orange-500" /> },
    { title: 'Servicing Center', desc: 'Repair Your Device', icon: <Wrench className="w-6 h-6 text-orange-500" /> },
  ];

  // মাঝের ফিচার্ড ক্যাটাগরিগুলোর ডেটা
  const categories = [
    { name: 'AC', icon: <AirVent className="w-8 h-8 text-gray-300" /> },
    { name: 'Portable Power Station', icon: <BatteryCharging className="w-8 h-8 text-gray-300" /> },
    { name: 'Air Fryer', icon: <Wind className="w-8 h-8 text-gray-300" /> },
    { name: 'Drone', icon: <Plane className="w-8 h-8 text-gray-300" /> },
    { name: 'Gimbal', icon: <Camera className="w-8 h-8 text-gray-300" /> },
    { name: 'Table PC', icon: <Tablet className="w-8 h-8 text-gray-300" /> },
    { name: 'TV', icon: <Tv className="w-8 h-8 text-gray-300" /> },
    { name: 'Fridge', icon: <Refrigerator className="w-8 h-8 text-gray-300" /> },
    { name: 'Mobile Phone', icon: <Smartphone className="w-8 h-8 text-gray-300" /> },
    { name: 'Mobile Accessories', icon: <Cable className="w-8 h-8 text-gray-300" /> },
    { name: 'Health Monitor', icon: <Activity className="w-8 h-8 text-gray-300" /> },
    { name: 'WiFi Camera', icon: <Video className="w-8 h-8 text-gray-300" /> },
    { name: 'Trimmer', icon: <Scissors className="w-8 h-8 text-gray-300" /> },
    { name: 'Smart Watch', icon: <Watch className="w-8 h-8 text-gray-300" /> },
    { name: 'Earbuds', icon: <Headphones className="w-8 h-8 text-gray-300" /> },
    { name: 'Torch Light', icon: <Flashlight className="w-8 h-8 text-gray-300" /> },
  ];

  return (
    <section className="w-full bg-[#121418] py-10 px-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">

        {/* ১. ওপরের ৪টি কুইক সার্ভিস কার্ড (নিউমর্ফিক স্টাইল) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickServices.map((service, index) => (
            <Link 
              key={index} 
              href="#"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#121418] border border-gray-800 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23] hover:border-orange-500/50 transition-all group"
            >
              <div className="p-3 rounded-xl bg-[#121418] shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23] group-hover:scale-105 transition-transform">
                {service.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-200 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* ২. ফিচার্ড ক্যাটাগরি হেডিং */}
        <div className="text-center mt-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-100">Featured Category</h2>
          <p className="text-xs md:text-sm text-gray-400 mt-1">Get Your Desired Product from Featured Category!</p>
        </div>

        {/* ৩. ক্যাটাগরি গ্রিড (আইকনসহ কার্ডসমূহ) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, index) => (
            <Link 
              key={index}
              href="#"
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#121418] border border-gray-800 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23] hover:shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23] hover:border-orange-500/50 transition-all group"
            >
              <div className="mb-3 transition-transform group-hover:-translate-y-1">
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-gray-300 text-center group-hover:text-orange-500 transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* ৪. নিচের ফিজিক্যাল স্টোর ব্যানার (গ্রেডিয়েন্ট এবং নিউমর্ফিক বাটন) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-900 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_16px_#0a0b0d,-8px_-8px_16px_#1a1d23]">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-inner flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white animate-bounce" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">20+ Physical Stores</h3>
              <p className="text-xs md:text-sm text-cyan-100 mt-1">Visit Our Store & Get Your Desired IT Product!</p>
            </div>
          </div>

          <Link 
            href="#" 
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs md:text-sm shadow-[4px_4px_8px_rgba(0,0,0,0.3)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] transition-all whitespace-nowrap"
          >
            <span>Find Our Store</span>
            <Search className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </section>
  );
}