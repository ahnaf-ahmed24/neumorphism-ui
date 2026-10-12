"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার রেজিস্ট্রেশন এর লগিক (API Call) যুক্ত করতে পারেন
    console.log("Registering with:", formData);
  };

  return (
    <div className="min-h-screen bg-[#121418] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-[#121418] p-8 shadow-[8px_8px_16px_#0a0b0d,-8px_-8px_16px_#1a1d23] border border-gray-800/50">
        
        {/* লোগো ও হেডার */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#121418] shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23]">
              <span className="h-3 w-3 rounded-full bg-[#ff5e00] animate-pulse"></span>
            </div>
            <span className="text-xl font-extrabold text-gray-100 tracking-wider">STAR <span className="text-[#ff5e00]">TECH</span></span>
          </Link>
          <h2 className="text-xl font-bold text-gray-200">Create an Account</h2>
          <p className="text-xs text-gray-500 mt-1">Join Star Tech for the best IT solutions</p>
        </div>

        {/* ফর্ম */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* নাম ফিল্ড */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400">Full Name</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#121418] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23] focus:outline-none focus:ring-1 focus:ring-[#ff5e00]"
            />
          </div>

          {/* ইমেইল ফিল্ড */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#121418] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23] focus:outline-none focus:ring-1 focus:ring-[#ff5e00]"
            />
          </div>

          {/* পাসওয়ার্ড ফিল্ড */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400">Password</label>
            <input 
              type="password" 
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#121418] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23] focus:outline-none focus:ring-1 focus:ring-[#ff5e00]"
            />
          </div>

          {/* সাবমিট বাটন */}
          <button 
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#ff5e00] py-3 text-sm font-bold text-white shadow-[4px_4px_8px_#0a0b0d,-4px_-4px_8px_#1a1d23] hover:opacity-95 transition-all"
          >
            Register
          </button>
        </form>

        {/* ফুটার লিংক */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Already have an account?{' '}
            <Link href="/signin" className="text-[#ff5e00] font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}