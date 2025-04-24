'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Platform = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setActiveIndex(2);
  }, []);

  const items = [
    {
      number: 1,
      title: 'creative discovery and curation',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magnam ea dolor sapiente dolorum atque beatae, omnis non animi, blanditiis quos, voluptatem qui labore! Sed magni veniam non animi perspiciatis?',
    },
    {
      number: 2,
      title: 'Campaign management and tracking tool',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magnam ea dolor sapiente dolorum atque beatae, omnis non animi, blanditiis quos, voluptatem qui labore! Sed magni veniam non animi perspiciatis?',
    },
    {
      number: 3,
      title: 'Content Management',
      content:
        'We strategize, script, and produce content apt for your product or service. Get the best in post-production services from us.',
    },
    {
      number: 4,
      title: 'Campaign reporting and strategy validation',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magnam ea dolor sapiente dolorum atque beatae, omnis non animi, blanditiis quos, voluptatem qui labore! Sed magni veniam non animi perspiciatis?',
    },
  ];

  const toggleAccordion = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mt-35 lg:mt-60">
      <h1 className="font-bold text-[29px] md:text-[39px] text-center text-gray-800">
        Platform Benefits
      </h1>

      <div className="max-w-[1200px] mx-auto min-h-[100px] mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 pt-6 px-4 md:px-20 md:py-10">
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full sm:px-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="border-t border-gray-200 last:border-b"
                >
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
                      <p className="text-gray-600 max-w-[500px] leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[400px] h-[250px] md:h-[300px] relative">
          <Image
            src="/images/girl-magini.png"
            alt="girl speek image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Platform;
