"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Briefcase, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "ময়মনসিংহ শাখা ২য় বর্ষপূর্তি",
      subtitle: "স্টার টেক ময়মনসিংহ ব্রাঞ্চ থেকে যেকোনো ল্যাপটপ কিংবা ডেস্কটপ কিনলেই পাচ্ছেন আকর্ষণীয় অফার ও উপহার!",
      tag: "বর্ষপূর্তি অফার",
      accentGlow: "from-orange-500/20 via-red-500/10 to-transparent",
      borderColor: "border-orange-500/40",
      badgeBg: "bg-orange-500/10 text-orange-400",
      img: "https://pngimg.com/uploads/laptop/laptop_PNG5905.png",
    },
    {
      id: 2,
      title: "গেমিং পিসি স্পেশাল ডিল",
      subtitle: "সেরা মূল্যে হাই-পারফরম্যান্স গেমিং পিসি ও এক্সেসরিজ বিল্ড করুন একদম সাশ্রয়ী বাজেটে।",
      tag: "গেমিং ফেস্ট",
      accentGlow: "from-[#00f0ff]/20 via-blue-500/10 to-transparent",
      borderColor: "border-[#00f0ff]/40",
      badgeBg: "bg-[#00f0ff]/10 text-[#00f0ff]",
      // আইডি ২: নতুন গেমিং ডেস্কটপ/মনিটর সেটআপ ট্রান্সপারেন্ট পিএনজি ইমেজ
      img: "https://pngimg.com/uploads/gamepad/gamepad_PNG95.png",
    },
    {
      id: 3,
      title: "প্রিমিয়াম ল্যাপটপ অফার",
      subtitle: "অফিসিয়াল ওয়ারেন্টিসহ পাচ্ছেন অ্যাপল ম্যাকবুক এবং টপ ব্র্যান্ডের সব লেটেস্ট মডেল।",
      tag: "এক্সক্লুসিভ অফার",
      accentGlow: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "border-purple-500/40",
      badgeBg: "bg-purple-500/10 text-purple-400",
      img: "https://pngimg.com/uploads/macbook/macbook_PNG65.png",
    },
    {
      id: 4,
      title: "স্মার্ট গ্যাজেট প্রমোশন",
      subtitle: "স্মার্টওয়াচ, ইয়ারবাডস এবং ডেইলি লাইফস্টাইল গ্যাজেটে পাচ্ছেন চমৎকার ডিসকাউন্ট।",
      tag: "হট ডিল",
      accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "border-emerald-500/40",
      badgeBg: "bg-emerald-500/10 text-emerald-400",
      img: "https://pngimg.com/uploads/headphones/headphones_PNG7651.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="w-full bg-[#121418] py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ১. প্রধান স্লাইডার ব্যানার (৮ কলাম) */}
        <div className="lg:col-span-8 relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#121418] border border-gray-800/80 shadow-[12px_12px_24px_#090a0c,-12px_-12px_24px_#1b1e24] min-h-[340px] sm:min-h-[380px] md:min-h-[420px] group">
          
          <div className="relative w-full h-full flex-1 overflow-hidden">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-center transition-all duration-1000 ease-in-out ${
                  index === currentBanner 
                    ? "opacity-100 z-10 scale-100" 
                    : "opacity-0 z-0 pointer-events-none scale-105"
                }`}
              >
                {/* ব্যাকগ্রাউন্ড ড্রাইনামিক গ্র্যাডিয়েন্ট ও গ্লো */}
                <div className={`absolute inset-0 bg-gradient-to-r ${banner.accentGlow} pointer-events-none z-0`} />

                {/* বামপাশের কন্টেন্ট */}
                <div className="relative z-10 max-w-md sm:max-w-lg">
                  <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold ${banner.badgeBg} rounded-full border ${banner.borderColor} shadow-[inset_1px_1px_2px_#0a0b0d] mb-4 backdrop-blur-md`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {banner.tag}
                  </span>

                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-100 leading-tight tracking-tight drop-shadow-md">
                    {banner.title}
                  </h1>

                  <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-3 sm:mt-4 leading-relaxed max-w-md">
                    {banner.subtitle}
                  </p>

                  <div className="mt-6 sm:mt-8">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#121418] hover:bg-[#16181d] text-orange-500 font-bold text-xs sm:text-sm rounded-2xl border border-gray-800 shadow-[6px_6px_12px_#0a0b0d,-6px_-6px_12px_#1a1d23] active:shadow-[inset_2px_2px_4px_#0a0b0d,inset_-2px_-2px_4px_#1a1d23] transition-all group/btn"
                    >
                      <span>বিস্তারিত দেখুন</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-orange-500" />
                    </Link>
                  </div>
                </div>

                {/* ডানপাশের ব্যাকগ্রাউন্ড ছাড়া স্বচ্ছ প্রোডাক্ট ইমেজ */}
                <div className="hidden sm:flex absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 items-center justify-center pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform duration-700">
                  <img
                    src={banner.img}
                    alt="Featured Product"
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* নেভিগেশন স্লাইড বার ইন্ডিকেটর */}
          <div className="relative z-20 py-3.5 bg-[#121418]/90 flex items-center justify-center gap-2.5 border-t border-gray-800/80 backdrop-blur-md">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentBanner
                    ? "w-8 sm:w-10 bg-orange-500 shadow-[0_0_12px_rgba(255,94,0,0.7)]"
                    : "w-3 sm:w-4 bg-gray-700 hover:bg-gray-500 shadow-[inset_1px_1px_2px_#0a0b0d]"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

        {/* ২. ডানপাশের ২টি প্রমোশন কার্ড (৪ কলাম) */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6">
          
          {/* কার্ড ১: মতামত বা অভিযোগ */}
          <Link 
            href="#" 
            className="relative overflow-hidden flex-1 p-6 sm:p-8 rounded-3xl bg-[#121418] border border-gray-800 shadow-[10px_10px_20px_#090a0c,-10px_-10px_20px_#1b1e24] hover:border-orange-500/50 transition-all flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#121418] border border-gray-800 shadow-[inset_3px_3px_6px_#090a0c,inset_-3px_-3px_6px_#1b1e24] flex items-center justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-xs text-gray-400 font-medium">স্টার টেক নিয়ে আপনার</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mt-1 group-hover:text-orange-500 transition-colors">
                অভিযোগ বা মতামত
              </h2>
            </div>

            <div className="relative z-10 mt-6">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121418] border border-gray-800 text-orange-500 font-bold text-xs shadow-[5px_5px_10px_#090a0c,-5px_-5px_10px_#1b1e24] group-hover:scale-105 transition-all">
                <span>জানান এখানে</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* কার্ড ২: ক্যারিয়ার */}
          <Link 
            href="#" 
            className="relative overflow-hidden flex-1 p-6 sm:p-8 rounded-3xl bg-[#121418] border border-gray-800 shadow-[10px_10px_20px_#090a0c,-10px_-10px_20px_#1b1e24] hover:border-orange-500/50 transition-all flex flex-col justify-between group"
          >
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#121418] border border-gray-800 shadow-[inset_3px_3px_6px_#090a0c,inset_-3px_-3px_6px_#1b1e24] flex items-center justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-100 leading-snug">
                  Shape <span className="text-orange-500">Your Career</span> With Us!
                </h2>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-orange-400 bg-[#121418] border border-orange-500/40 px-3 py-1.5 rounded-xl shadow-[inset_1px_1px_2px_#090a0c]">
                APPLY NOW
              </span>
            </div>

            <p className="relative z-10 text-xs text-gray-400 mt-3">স্টার টেকের সাথে আপনার ভবিষ্যৎ গড়ুন</p>
          </Link>

        </div>

      </div>
    </section>
  );
}