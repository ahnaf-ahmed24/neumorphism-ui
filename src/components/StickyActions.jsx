"use client";

import React from 'react';
import Link from 'next/link';
import { GraduationCap, CopyPlus, ShoppingBag } from 'lucide-react';

export default function StickyActions() {
  return (
    <div className="fixed right-4 bottom-10 z-50 flex flex-col items-center gap-3">
      
      {/* ১. 10.10 Deal গোল বাটন */}
      <Link 
        href="#"
        className="relative flex flex-col items-center justify-center w-16 h-16 rounded-full bg-[#ff5e00] text-white shadow-[4px_4px_12px_#0a0b0d,-4px_-4px_12px_#1a1d23] hover:scale-105 transition-all group text-center p-1"
      >
        <GraduationCap className="w-5 h-5 mb-0.5" />
        <span className="text-[9px] font-bold tracking-tighter leading-tight">10.10 DEAL</span>
      </Link>

      {/* ২. Compare বাটন */}
      <Link 
        href="#"
        className="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-[#121418] border border-gray-800 text-gray-300 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23] hover:border-orange-500/50 hover:text-orange-500 transition-all group"
      >
        {/* কাউন্ট ব্যাজ (0) */}
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-[#ff5e00] text-white text-[10px] font-bold shadow-md">
          0
        </span>
        <CopyPlus className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-semibold tracking-wider">COMPARE</span>
      </Link>

      {/* ৩. Cart বাটন */}
      <Link 
        href="#"
        className="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-[#121418] border border-gray-800 text-gray-300 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23] hover:border-orange-500/50 hover:text-orange-500 transition-all group"
      >
        {/* কাউন্ট ব্যাজ (0) */}
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-[#ff5e00] text-white text-[10px] font-bold shadow-md">
          0
        </span>
        <ShoppingBag className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-semibold tracking-wider">CART</span>
      </Link>

    </div>
  );
}