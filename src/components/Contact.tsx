"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [mounted, setMounted] = useState(false);

  // Suppress hydration mismatch from browser extensions (like NordPass)
  useEffect(() => {
    setMounted(true);
  }, []);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create payload from form entries
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send to internal API which pushes to GHL
      const response = await fetch('/api/ghl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.warn('GHL integration error handled, continuing with visual success state.');
      }
    } catch (error) {
      console.error('Submission error:', error);
    }

    setIsSubmitted(true);
  };

  // Only render the form content after initial mount to avoid 
  // browser extension hydration mismatches
  const renderFormContent = () => {
    if (!mounted) {
      return (
        <div className="animate-pulse bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
          <p className="text-gray-400">Loading secure form...</p>
        </div>
      );
    }

    if (isSubmitted) {
      return (
        <div className="text-center py-10" id="form-success">
          <i className="fa-solid fa-circle-check text-4xl text-[var(--primary-green)] mb-4"></i>
          <h3 className="text-2xl font-bold mb-2">Thank You</h3>
          <p>We've received your request and will call you shortly to discuss your project.</p>
        </div>
      );
    }

    return (
      <form id="contact-form" data-netlify="true" name="contact" method="POST" onSubmit={handleSubmit} suppressHydrationWarning>
        <div className="md:hidden bg-[#2e5c33] text-white p-5 rounded-lg mb-6 shadow-md text-center">
          <h3 className="font-bold text-xl mb-1">Get an Estimate</h3>
          <p className="text-sm opacity-90">Fill out your details below and we will contact you directly to discuss your project.</p>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="ghl-name">Full Name</label>
          <input type="text" id="ghl-name" name="name" className="form-control" placeholder="Enter your name" required suppressHydrationWarning />
        </div>
        <div className="form-group">
          <label htmlFor="ghl-email">Email Address</label>
          <input type="email" id="ghl-email" name="email" className="form-control" placeholder="email@example.com" required suppressHydrationWarning />
        </div>
        <div className="form-group">
          <label htmlFor="ghl-phone">Phone Number</label>
          <input 
            type="tel" 
            id="ghl-phone" 
            name="phone" 
            className="form-control" 
            placeholder="(706) 000-0000" 
            value={phone}
            onChange={handlePhoneChange}
            required 
            suppressHydrationWarning
          />
        </div>
        <div className="form-group">
          <label htmlFor="ghl-service">Service Needed</label>
          <select id="ghl-service" name="service" className="form-control" required defaultValue="" suppressHydrationWarning>
            <option value="" disabled>Select a service</option>
            <option value="Clearing">Clearing & Demolition</option>
            <option value="Grading">Grading & Roads</option>
            <option value="Enhancement">Land Enhancement (Seeding/Bush Hogging)</option>
            <option value="Other">Other / Multi-Phase Project</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ghl-notes">Project Notes</label>
          <textarea id="ghl-notes" name="notes" className="form-control" rows={4} placeholder="Tell us about your project..." suppressHydrationWarning></textarea>
        </div>
        <button type="submit" className="btn w-full mt-2 py-4 text-[1.05rem] shadow-lg flex items-center justify-center gap-2">
          Submit Request <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    );
  };

  return (
    <>
      <section id="contact" className="contact-section section-padding relative">
        <div className="container" id="contact-container">
          <div className="contact-container">
            <div className="contact-info-block">
              <h2>Get Your Free Quote</h2>
              <p>Ready to start your next project? Fill out the form below, and we'll get back to you with a professional estimate tailored to your land.</p>
              <div className="contact-info mt-10">
                <p className="flex items-start gap-3">
                  <i className="fa-solid fa-phone mt-1 text-[var(--accent-gold)]"></i> 
                  <span className="flex-1">
                    <strong className="block mb-1">Call or Text:</strong>
                    <a href="tel:+17065103942" className="text-gray-600 hover:text-[var(--primary-green)]">(706) 510-3942</a>
                  </span>
                </p>
                <p className="flex items-start gap-3 mt-4">
                  <i className="fa-solid fa-envelope mt-1 text-[var(--accent-gold)]"></i> 
                  <span className="flex-1 break-words">
                    <strong className="block mb-1">Email:</strong>
                    <a href="mailto:groundbreakerlandmanagement@gmail.com" className="text-gray-600 hover:text-[var(--primary-green)] break-all lg:break-words">groundbreakerlandmanagement@gmail.com</a>
                  </span>
                </p>
              </div>
            </div>

            <div className="quote-form">
              {renderFormContent()}
            </div>
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="container">
          <h2>Ready to Break Ground?</h2>
          <p className="mb-8 text-xl">Let’s transform your property today.</p>
          <a href="#contact" className="btn btn-large py-4 px-12">Start Your Project</a>
        </div>
      </section>
      
      {/* Floating SMS CTA for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a href="sms:+17065103942" className="bg-[var(--accent-gold)] text-black px-4 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 border border-yellow-500">
          <i className="fa-solid fa-comment-sms"></i> Text Us
        </a>
      </div>
    </>
  );
}
