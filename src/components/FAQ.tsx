"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we absolutely provide free, no-obligation estimates. We prefer to assess your property in person to give you the most accurate and fair quote possible for your specific land management needs."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Oconee County and the surrounding areas, including Bogart, Watkinsville, Athens, Statham, Bishop, North High Shoals, Farmington, Winterville, and Monroe."
    },
    {
      question: "Are you insured?",
      answer: "Yes, we are Fully Insured. Protecting your property and ensuring our team's safety are our top priorities during any clearing, grading, or heavy equipment operations."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-48 pb-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-5 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold font-montserrat text-[#2e5c33] mb-6 drop-shadow-sm uppercase">Frequently Asked Questions</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">Have questions about our land clearing, grading, or bush hogging services? We've got answers.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`bg-white rounded-xl shadow-md border overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#2e5c33] shadow-lg ring-1 ring-[#2e5c33]' : 'border-gray-200 hover:border-[#d4a017]'}`}>
                <button 
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-[#2e5c33]' : 'text-gray-900'}`}>{faq.question}</span>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#2e5c33] text-white rotate-180' : 'bg-gray-100 text-[#d4a017] group-hover:bg-[#d4a017] group-hover:text-white'}`}>
                    <i className="fa-solid fa-chevron-down text-lg"></i>
                  </div>
                </button>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="w-full h-px bg-gray-100 mb-6"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
          <a href="#contact" className="btn btn-large px-10 py-4 shadow-xl">Contact Us for Details</a>
        </div>
      </div>
    </section>
  );
}
