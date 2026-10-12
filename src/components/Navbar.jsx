"use client"

import React from 'react';
import Link from 'next/link';
import CategoryNav from './CategoryNav';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 bg-[#121418]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl bg-[#121418] px-5 py-3 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23]">
        
        {/* ১. লোগো সেকশন */}
        <Link href="#" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#121418] shadow-[inset_3px_3px_6px_#0a0b0d,inset_-3px_-3px_6px_#1a1d23]">
            <span className="h-3 w-3 rounded-full bg-[#ff5e00] animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-gray-100 tracking-wider">STAR <span className="text-[#ff5e00]">TECH</span></span>
            <span className="text-[10px] text-gray-500 tracking-wider uppercase">Total IT Solution</span>
          </div>
        </Link>

        {/* ২. সার্চ বার */}
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

        {/* ৩. রাইট সাইড অপশনস (Offers, Special Deals, Account, PC Builder) */}
        <div className="flex items-center gap-4 md:gap-6">
          
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

          {/* Account */}
          <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-[#ff5e00] transition-colors">
            <div className="p-2 rounded-xl bg-[#121418] shadow-[3px_3px_6px_#0a0b0d,-3px_-3px_6px_#1a1d23]">
              👤
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-gray-200">Account</span>
              <span className="text-[10px] text-gray-400">Register or Login</span>
            </div>
          </Link>

          {/* PC Builder Button */}
          <Link 
            href="#"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs md:text-sm font-bold text-white shadow-[4px_4px_8px_#0a0b0d,-4px_-px_8px_#1a1d23] hover:opacity-95 transition-all"
          >
            PC Builder
          </Link>

        </div>

      </nav>
      <CategoryNav/>
    </header>
    
  );
}