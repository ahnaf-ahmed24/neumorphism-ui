"use client";

import React, { useState, useEffect } from 'react';

export default function LiveTracker() {
  const [currentDateTime, setCurrentDateTime] = useState(null);

  useEffect(() => {
    setCurrentDateTime(new Date());

    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!currentDateTime) {
    return null; 
  }

  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDateTime.toLocaleDateString('en-US', options);
  const formattedTime = currentDateTime.toLocaleTimeString('en-US');

  return (
    <div className="mx-auto my-4 max-w-7xl px-4">
      {/* ইনসেট নিউমর্ফিক বার */}
      <div className="w-full overflow-hidden rounded-3xl bg-[#121418] py-3 px-4 shadow-[inset_4px_4px_8px_#0a0b0d,inset_-4px_-4px_8px_#1a1d23]">
        
        {/* সঠিক camelCase ইভেন্ট হ্যান্ডলার (onMouseOver এবং onMouseOut) */}
        <marquee behavior="scroll" direction="left" scrollamount="5" onMouseOver={(e) => e.currentTarget.stop()} onMouseOut={(e) => e.currentTarget.start()}>
          <div className="flex items-center gap-6 text-xs md:text-sm">
            
            {/* লাইভ ইন্ডিকেটর ও ডেট */}
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[#ff5e00] font-bold">{formattedDate}</span>
            </span>

            <span className="text-gray-500">|</span>

            {/* লাইভ টাইম */}
            <span className="text-gray-100 font-semibold">{formattedTime}</span>

            <span className="text-gray-500">|</span>

            {/* নোটিশ মেসেজ */}
            <span className="text-gray-300 font-medium">
              All our branches are open except IDB Branch. Our online activities are fully operational. Please check our contact page for the schedule.
            </span>

          </div>
        </marquee>

      </div>
    </div>
  );
}