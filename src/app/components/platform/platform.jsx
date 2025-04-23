'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

// Define the cn utility function directly in this file
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Platform = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Set the third item (index 2) as active by default

  const items = [
    {
      number: 1,
      title: 'creative discovery and curation',
      content:
        'We strategize, script, and produce content apt for your product or service. Get the best in post-production services from us.',
      image: '/placeholder.svg?height=400&width=400',
    },
    {
      number: 2,
      title: 'Campaign management and tracking tool',
      content:
        'We strategize, script, and produce content apt for your product or service. Get the best in post-production services from us.',
      image: '/placeholder.svg?height=400&width=400',
    },
    {
      number: 3,
      title: 'Content Management',
      content:
        'We strategize, script, and produce content apt for your product or service. Get the best in post-production services from us.',
      image: '/placeholder.svg?height=400&width=400',
    },
    {
      number: 4,
      title: 'Campaign reporting and strategy validation',
      content:
        'We strategize, script, and produce content apt for your product or service. Get the best in post-production services from us.',
      image: '/placeholder.svg?height=400&width=400',
    },
  ];

  const toggleAccordion = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-[100px] mt-40 flex flex-col items-center gap-10 pt-6 md:items-start md:px-[194px] md:py-10">
      <h1 className="font-bold text-[29px] md:text-[39px] text-center md:text-left text-gray-800">
        Platform Benefits
      </h1>

      <div className="w-full">
        {items.map((item, index) => (
          <div key={index} className="border-t border-gray-200 last:border-b">
            {/* Accordion Header */}
            <div
              className={cn(
                'flex items-center px-4 py-4 gap-4 w-full cursor-pointer',
                activeIndex === index ? 'border-b-0' : ''
              )}
              onClick={() => toggleAccordion(index)}
            >
              {activeIndex === index ? (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
                  <X className="w-5 h-5" />
                </div>
              ) : (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-semibold">
                  {item.number}
                </div>
              )}
              <p className="font-semibold text-gray-800">{item.title}</p>
            </div>

            {/* Accordion Content */}
            {activeIndex === index && (
              <div className="flex flex-col px-4 py-6 gap-6 w-full md:py-8 md:flex-row md:gap-16 transition-all duration-300 border-b border-gray-200">
                <div className="flex flex-col">
                  <p className="text-gray-600 max-w-[500px] leading-relaxed">
                    {item.content}
                  </p>
                </div>
                <div className="w-full md:w-[400px] h-[250px] md:h-[300px] relative">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
