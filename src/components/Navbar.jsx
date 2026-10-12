"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import CategoryNav from './CategoryNav';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-2 sm:px-4 py-3 bg-[#121418]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 rounded-2xl bg-[#121418] px-3 sm:px-5 py-3 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23]">
        
        {/* ১. লোগো সেকশন */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#121418] shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23]">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5e00] animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold text-gray-100 tracking-wider">STAR <span className="text-[#ff5e00]">TECH</span></span>
            <span className="text-[9px] sm:text-[10px] text-gray-500 tracking-wider uppercase">Total IT Solution</span>
          </div>
        </Link>

        {/* ২. সার্চ বার (ল্যাপটপ/বড় স্ক্রিনের জন্য) */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
          <div className="w-full relative flex items-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full rounded-xl bg-[#121418] px-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23] focus:outline-none"
            />
            <span className="absolute right-4 text-gray-400">🔍</span>
          </div>
        </div>

        {/* ৩. রাইট সাইড অপশনস (ডেস্কটপ এবং ট্যাব স্ক্রিনের জন্য) */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          
          {/* Offers */}
          <Link href="#" className="hidden sm:flex items-center gap-2 text-gray-300 hover:text-[#ff5e00] transition-colors">
            <div className="p-2 rounded-xl bg-[#121418] shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23]">
              🎁
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-gray-200">Offers</span>
              <span className="text-[10px] text-gray-400">Latest Offers</span>
            </div>
          </Link>

          {/* Special Deals (10.10) */}
          <Link href="#" className="hidden xl:flex items-center gap-2 text-gray-300 hover:text-[#ff5e00] transition-colors">
            <div className="p-2 rounded-xl bg-[#121418] shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23]">
              ⚡
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#ff5e00]">10.10</span>
              <span className="text-[10px] text-gray-400">Special Deals</span>
            </div>
          </Link>

          {/* Sign In & Register Buttons */}
          <div className="flex items-center gap-2">
            <Link 
              href="/signin" 
              className="px-3 py-2 rounded-xl bg-[#121418] text-xs font-bold text-gray-300 shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23] hover:text-[#ff5e00] transition-all"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="px-3 py-2 rounded-xl bg-[#ff5e00] text-xs font-bold text-white shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23] hover:opacity-90 transition-all"
            >
              Register
            </Link>
          </div>

          {/* PC Builder Button */}
          <Link 
            href="#"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-2 text-xs md:text-sm font-bold text-white shadow-[4px_4px_8px_#0a0b0d,-4px_-4px_8px_#1a1d23] hover:opacity-95 transition-all"
          >
            PC Builder
          </Link>

        </div>

        {/* ৪. মোবাইল স্ক্রিনের জন্য থ্রি-লাইন (Hamburger) বাটন */}
        <div className="flex md:hidden items-center gap-2">
          <Link 
            href="#"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23]"
          >
            PC Builder
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-[#121418] text-gray-200 shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Cross (Close) Icon
              <svg className="w-5 h-5 text-[#ff5e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Three-line (Hamburger) Icon
              <svg className="w-5 h-5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </nav>

      {/* মোবাইল ড্রপডাউন মেনু (থ্রি-লাইন ক্লিক করলে যা দেখাবে) */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-[#121418] p-4 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23] flex flex-col gap-4 border border-gray-800 animate-fadeIn">
          
          {/* মোবাইল সার্চ বার */}
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full rounded-xl bg-[#121418] px-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23] focus:outline-none"
            />
            <span className="absolute right-4 text-gray-400">🔍</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-800/60">
            {/* Offers */}
            <Link href="#" className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#121418] shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23] text-gray-300 hover:text-[#ff5e00]">
              <span className="text-base">🎁</span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-gray-200">Offers</span>
                <span className="text-[9px] text-gray-400">Latest Offers</span>
              </div>
            </Link>

            {/* Special Deals */}
            <Link href="#" className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#121418] shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23] text-gray-300 hover:text-[#ff5e00]">
              <span className="text-base">⚡</span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#ff5e00]">10.10</span>
                <span className="text-[9px] text-gray-400">Special Deals</span>
              </div>
            </Link>
          </div>

          {/* মোবাইল মেনুর জন্য Sign In & Register বাটন */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-800/60">
            <Link 
              href="/signin" 
              className="text-center py-2.5 rounded-xl bg-[#121418] text-xs font-bold text-gray-200 shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23]"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="text-center py-2.5 rounded-xl bg-[#ff5e00] text-xs font-bold text-white shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23]"
            >
              Register
            </Link>
          </div>

        </div>
      )}

      <CategoryNav />
    </header>
  );
}