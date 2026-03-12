import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col flex-2">
            <h4>Ground Breaker Land Management</h4>
            <p className="max-w-[300px]">Providing top-quality land management services. No job is too big or too small for our team.</p>
          </div>
          <div className="footer-col contact-info">
            <h4>Contact Us</h4>
            <p><i className="fa-solid fa-phone"></i> <a href="tel:+17065103942">(706) 510-3942</a></p>
            <p><i className="fa-solid fa-envelope"></i> <a href="mailto:groundbreakerlandmanagement@gmail.com">groundbreakerlandmanagement@gmail.com</a></p>
            <p><i className="fa-solid fa-location-dot"></i> Oconee County, GA</p>
            <div className="mt-4 space-y-1">
              <h4 className="text-sm uppercase tracking-wider mb-2 opacity-70">Business Hours</h4>
              <p className="text-sm text-gray-400">Monday: <span className="text-white">9:00 AM - 5:00 PM</span></p>
              <p className="text-sm text-gray-400">Tuesday: <span className="text-white">9:00 AM - 5:00 PM</span></p>
              <p className="text-sm text-gray-400">Wednesday: <span className="text-white">9:00 AM - 5:00 PM</span></p>
              <p className="text-sm text-gray-400">Thursday: <span className="text-white">9:00 AM - 5:00 PM</span></p>
              <p className="text-sm text-gray-400">Friday: <span className="text-white">9:00 AM - 5:00 PM</span></p>
              <p className="text-sm text-gray-400">Saturday: <span className="text-white">9:00 AM - 5:00 PM</span></p>
              <p className="text-sm text-[#d4a017] font-semibold">Sunday: Closed</p>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#222] mt-10 pt-5 text-center text-sm text-[#555]">
          &copy; 2026 Ground Breaker Land Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
