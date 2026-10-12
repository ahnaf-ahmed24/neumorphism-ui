"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: 'Appliance',
      items: [
        'TV', 'AC', 'Air Fryer', 'Washing Machine', 'Fridge', 'Geyser', 
        'Light', 'Room Heater', 'Air Purifier', 'Coffee Maker', 'Fan', 
        'Dishwasher', 'Vacuum Cleaner', 'Dehumidifier', 'Electric Cooker', 
        'Induction Cooker', 'Oven', 'Blender & Grinder', 'Cooker', 
        'Kitchen Hood', 'Juicer', 'Toaster', 'Sewing Machine', 'Iron', 
        'Electric Kettle', 'Air Cooler', 'Air Curtain', 'Gas Stove', 'Show All Appliance'
      ]
    },
    {
      name: 'Desktop',
      items: [
        'AI PC', 'Desktop Offer', 'Star PC', 'Gaming PC', 'Brand PC', 
        'All-in-One PC', 'Portable Mini PC', 'Apple Mac Mini', 'Apple iMac', 
        'Apple Mac Studio', 'Apple Mac Pro', 'Show All Desktop'
      ]
    },
    {
      name: 'Laptop',
      items: [
        'All Laptop', 'Gaming Laptop', 'Premium Ultrabook', 'Laptop Bag', 
        'Laptop Accessories', 'Laptop Finder', 'Show All Laptop'
      ]
    },
    {
      name: 'Component',
      items: [
        'Processor', 'CPU Cooler', 'Motherboard', 'Graphics Card', 
        'RAM (Desktop)', 'RAM (Laptop)', 'Power Supply', 'Hard Disk Drive', 
        'Portable Hard Disk Drive', 'SSD', 'Portable SSD', 'Casing', 
        'Casing Cooler', 'Optical Disk Drive', 'Vertical GPU Holder', 
        'Water / Liquid Cooling', 'Show All Component'
      ]
    },
    {
      name: 'Monitor',
      items: [
        'MSI', 'AOC', 'Asus', 'Lenovo', 'BenQ', 'LG', 'Acer', 'HP', 'Dell', 
        'Samsung', 'Gigabyte', 'Philips', 'Viewsonic', 'Corsair', 'ThunderRobot', 
        'Koorui', 'Dahua', 'PC Power', 'Hikvision', 'Eurovision', 'Walton', 
        'Arzopa', 'GEESUU', 'Titan Army', 'Value-Top', 'AIWA', 'Xiaomi', 'Fopo', 
        'Alimoto', 'Gigasonic', 'TrendSonic', 'FeuVision', 'Gaming Monitor', 
        'Curved Monitor', 'Touch Monitor', '4K Monitor', 'Portable Monitor', 
        'Monitor Arm', 'Show All Monitor'
      ]
    },
    {
      name: 'Power',
      items: [
        'UPS', 'Online UPS', 'Mini UPS', 'Portable Power Station', 'IPS', 
        'UPS Battery', 'Voltage Stabilizer', 'Inverter', 'Solar Panel', 
        'Solar Battery', 'Load Calculator', 'Show All Power'
      ]
    },
    {
      name: 'Phone',
      items: [
        'Feature Phone', 'iPhone', 'Samsung', 'Google', 'Redmi', 'Realme', 
        'Vivo', 'OPPO', 'HONOR', 'HUAWEI', 'OnePlus', 'TECNO', 'Infinix', 
        'Helio', 'ZTE', 'HTC', 'Mobile Accessories', 'Show All Phone'
      ]
    },
    {
      name: 'Tablet',
      items: [
        'Graphics Tablet', 'iPad', 'Lenovo', 'Samsung', 'HONOR', 'Xiaomi', 
        'Huion', 'Walton', 'HUAWEI', 'Chuwi', 'Amazon', 'Google', 'OnePlus', 
        'Teclast', 'ZTE', 'Infinix', 'reMarkable', 'Tecno', 'Stylus Pen', 
        'Show All Tablet'
      ]
    },
    {
      name: 'Office Equipment',
      items: [
        'Projector', 'Conference System', 'PA System', 'Interactive Flat Panel', 
        'Video Wall', 'Signage', 'Kiosk', 'Printer', 'Laser Printer', 
        'Large Format Printer', 'ID Card Printer', 'POS Printer', 'Label Printer', 
        'Photocopier', 'Toner', 'Cartridge', 'Ink Bottle', 'Printer Paper', 
        'Ribbon', 'Printer Drum', 'Scanner', 'Barcode Scanner', 'Cash Drawer', 
        'Telephone Set', 'IP Phone', 'PABX System', 'Money Counting Machine', 
        'Paper Shredder', 'Laminating Machine', 'Binding Machine', 'Show All Office Equipment'
      ]
    },
    {
      name: 'Camera',
      items: [
        'Action Camera', 'DSLR', 'Mirrorless Camera', 'Digital Camera', 
        'Video Camera', 'Handycam', 'Dash Cam', 'Instant Camera', 'Body Camera', 
        'Camera Lenses', 'Camera Tripod', 'Camera Accessories', 'Gimbal', 'Show All Camera'
      ]
    },
    {
      name: 'Security',
      items: [
        'Portable WiFi Camera', 'IP Camera', 'CC Camera', 'PTZ Camera', 
        'Solar Camera', 'CC Camera Package', 'IP Camera Package', 'DVR', 
        'NVR', 'XVR', 'CC Camera Accessories', 'Door Lock', 'Smart Door Bell', 
        'Access Control', 'Entrance Control', 'Digital Locker & Vault', 
        'KVM Switch', 'Show All Security'
      ]
    },
    {
      name: 'Networking',
      items: [
        'Starlink', 'Router', 'Pocket Router', 'WiFi Range Extender', 
        'Access Point', 'WiFi Adapter', 'Network Switch', 'Firewall', 'ONU', 
        'OLT', 'Media Converter', 'Network Transceivers', 'Networking Cable', 
        'Patch Cord', 'Connector', 'Modular Jack', 'Faceplate', 'Patch Panel', 
        'LAN Card', 'PoE Injector', 'Crimping Tool', 'Splicer Machine', 
        'Cable Tester', 'Show All Networking'
      ]
    },
    {
      name: 'Software',
      items: ['Antivirus', 'Operating System', 'Office Application', 'Utility Software', 'Show All Software']
    },
    {
      name: 'Server & Storage',
      items: [
        'Server', 'GPU Server', 'Server Rack', 'Workstation', 'NAS Storage', 
        'SAN Storage', 'DAS Storage', 'Server HDD', 'Server HDD Bay', 
        'Server RAM', 'Server SSD', 'Server Power Supply', 'Show All Server & Storage'
      ]
    },
    {
      name: 'Accessories',
      items: [
        'Watch', 'Keyboard', 'Mouse', 'Headphone', 'Bluetooth Headphone', 
        'Mouse Pad', 'Wrist Rest', 'Headphone Stand', 'Speaker & Home Theater', 
        'Bluetooth Speakers', 'Soundbar', 'Webcam', 'Cable', 'Converter', 
        'Card Reader', 'Hubs & Docks', 'Microphone', 'Digital Voice Recorder', 
        'Presenter', 'Memory Card', 'Capture Card', 'Pen Drive', 'Thermal Paste', 
        'HDD-SSD Enclosure', 'Power Strip', 'Bluetooth Adapter', 'Monitor Light Bar', 
        'Show All Accessories'
      ]
    },
    {
      name: 'Gadget',
      items: [
        'Smart Watch', 'Smart Band', 'Earphone', 'Earbuds', 'Neckband', 
        'Smart Ring', 'Smart Glasses', 'Power Bank', 'Car Charger', 'Health Monitor', 
        'TV Box', 'Studio Equipment', 'Drones', 'Gimbal', 'Calculator', 
        'Power Tools', 'Show All Gadget'
      ]
    },
    {
      name: 'Gaming',
      items: [
        'Gaming Chair', 'Gaming Desk', 'Gaming Console', 'Gaming PC', 
        'Gaming Laptop', 'Gaming Monitor', 'Keyboard', 'Mouse', 'Headphone', 
        'Mouse Pad', 'Gamepad', 'Racing Wheel', 'VR', 'Games', 'Gaming Router', 
        'Show All Gaming'
      ]
    },
    {
      name: 'Lifestyle',
      items: [
        'Trimmer', 'Hair Dryer', 'Hair Straightener', 'Mini Fan', 'Massage Gun', 
        'Blood Pressure Monitor', 'Weight Scale', 'Table Lamp', 'Torch Light', 
        'Mosquito Bat', 'Electric Toothbrush', 'GPS Tracker', 'Wrist Watch', 
        'Smart Watch', 'Earbuds', 'Neckband', 'Show All Lifestyle'
      ]
    }
  ];

  return (
    <div className="rounded-2xl w-full bg-[#121418] border-t border-b  border-gray-800 shadow-[inset_0px_2px_4px_#0a0b0d]">
      <div className="mx-auto max-w-8xl px-4">
        <ul className="flex items-center justify-between py-2.5 gap-4 text-xs md:text-sm">
          {categories.map((cat) => (
            <li 
              key={cat.name}
              className="relative cursor-pointer py-1"
              onMouseEnter={() => setActiveCategory(cat.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* ক্যাটাগরি নাম */}
              <span className={`font-medium transition-colors block py-1 ${activeCategory === cat.name ? 'text-[#ff5e00]' : 'text-gray-300'}`}>
                {cat.name}
              </span>

              {/* ড্রপডাউন মেনু */}
              {activeCategory === cat.name && (
                <div className="absolute top-full left-0 pt-1 w-64 z-50">
                  <div className="max-h-[400px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-2xl bg-[#121418] p-3 shadow-[8px_8px_16px_#0a0b0d,-8px_-8px_16px_#1a1d23] border border-gray-800">
                    <ul className="flex flex-col gap-1">
                      {cat.items.map((subItem) => (
                        <li key={subItem}>
                          <Link 
                            href="#"
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-xs text-gray-400 hover:text-gray-100 hover:bg-[#121418] shadow-[inset_2px_2px_4px_#0a0b0d,inset_-2px_-2px_4px_#1a1d23] transition-all"
                          >
                            <span>{subItem}</span>
                            <span className="text-[10px] text-gray-600">▶</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}