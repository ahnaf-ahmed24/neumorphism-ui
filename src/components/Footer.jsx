"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#121418] pt-12 pb-6 px-4 border-t border-gray-800 text-gray-400">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">

        {/* ওপরের প্রধান কলামগুলো */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ১. সাপোর্ট কলাম */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider text-gray-200">SUPPORT</h3>
            
            {/* হটলাইন কার্ড */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#121418] border border-gray-800 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23]">
              <div className="p-3 rounded-xl bg-[#121418] shadow-[inset_2px_2px_4px_#0a0b0d,inset_-2px_-2px_4px_#1a1d23]">
                <Phone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">9 AM - 8 PM</p>
                <p className="text-base font-bold text-orange-500">16793</p>
              </div>
            </div>

            {/* স্টোর লোকেটর কার্ড */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#121418] border border-gray-800 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23]">
              <div className="p-3 rounded-xl bg-[#121418] shadow-[inset_2px_2px_4px_#0a0b0d,inset_-2px_-2px_4px_#1a1d23]">
                <MapPin className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">Store Locator</p>
                <p className="text-sm font-bold text-orange-500 cursor-pointer hover:underline">Find Our Stores</p>
              </div>
            </div>
          </div>

          {/* ২. অ্যাবাউট আস (কলাম ১) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-wider text-gray-200 mb-1">ABOUT US</h3>
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">Affiliate Program</Link>
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">Online Delivery</Link>
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">Refund and Return Policy</Link>
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">Blog</Link>
          </div>

          {/* ৩. অ্যাবাউট আস (কলাম ২) */}
          <div className="flex flex-col gap-3 lg:mt-7">
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">EMI Terms</Link>
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">Star Point Policy</Link>
            <Link href="#" className="text-xs hover:text-orange-500 transition-colors">Contact Us</Link>
          </div>

          {/* ৪. স্টে কানেক্টেড */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-wider text-gray-200 mb-1">STAY CONNECTED</h3>
            <p className="text-xs font-semibold text-gray-300">Star Tech Ltd</p>
            <p className="text-xs leading-relaxed text-gray-400">
              Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square, Dhaka 1000
            </p>
            <p className="text-xs text-gray-400">
              Email: <span className="text-orange-500">webteam@startechbd.com</span>
            </p>
          </div>

        </div>

        {/* মাঝের ডিভাইডার ও অ্যাপ ডাউনলোড / সোশ্যাল সেকশন */}
        <div className="border-t border-gray-800 pt-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* অ্যাপ ডাউনলোড অংশ */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-xs text-gray-400">Experience Star Tech App on your mobile:</span>
            <div className="flex items-center gap-3">
              {/* Google Play Badge */}
              <div className="px-4 py-2 rounded-xl bg-[#121418] border border-gray-800 shadow-[4px_4px_8px_#0a0b0d,-4px_-4px_8px_#1a1d23] flex items-center gap-2 cursor-pointer hover:border-gray-600 transition-all">
                <span className="text-lg">▶</span>
                <div className="text-left">
                  <p className="text-[8px] text-gray-400 uppercase">Download on</p>
                  <p className="text-xs font-semibold text-gray-200">Google Play</p>
                </div>
              </div>
              {/* App Store Badge */}
              <div className="px-4 py-2 rounded-xl bg-[#121418] border border-gray-800 shadow-[4px_4px_8px_#0a0b0d,-4px_-4px_8px_#1a1d23] flex items-center gap-2 cursor-pointer hover:border-gray-600 transition-all">
                <span className="text-lg"></span>
                <div className="text-left">
                  <p className="text-[8px] text-gray-400 uppercase">Download on</p>
                  <p className="text-xs font-semibold text-gray-200">App Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* সোশ্যাল মিডিয়া আইকনসমূহ */}
          <div className="flex items-center gap-3">
            {[<FaWhatsapp />, <FaFacebookF />, <FaYoutube />, <FaInstagram />].map((icon, idx) => (
              <div 
                key={idx}
                className="w-10 h-10 rounded-xl bg-[#121418] border border-gray-800 shadow-[4px_4px_8px_#0a0b0d,-4px_-4px_8px_#1a1d23] flex items-center justify-center text-gray-300 hover:text-orange-500 cursor-pointer transition-all hover:scale-105"
              >
                {icon}
              </div>
            ))}
          </div>

        </div>

        {/* একদম নিচের কপিরাইট অংশ */}
        <div className="border-t border-gray-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
          <p>© 2026 Star Tech Ltd | All rights reserved</p>
          <p>Powered By: Star Tech</p>
        </div>

      </div>
    </footer>
  );
}