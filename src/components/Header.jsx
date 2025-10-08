import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useOtpAuth } from '../context/OtpContext'; // Import the context hook

const Header = () => {
  const { isAuthenticated, logout, registrationData } = useOtpAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };
  
  const industries = ["Travel", "Automotive", "Banking", "Capital Markets", "Healthcare", "Digital Commerce", "View all"];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <h1 className="text-3xl font-bold text-blue-600">Talrn</h1>
            </Link>
          </div>

          {/* All navigation and action items grouped on the right for desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-7">
              <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Why</Link>
              
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
                >
                  Industries
                  <svg className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    {industries.map(industry => (
                      <Link key={industry} to="#" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{industry}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Find iOS Dev</Link>
              <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Apply as Vendor</Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="#" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Hire iOS Dev
              </Link>
              
              {isAuthenticated ? (
                // --- PROFILE ICON ---
                <div className="relative" ref={profileRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 ring-2 ring-offset-2 ring-transparent hover:ring-blue-500 transition">
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </button>
                  {isProfileOpen && (
                     <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                       <div className="px-4 py-3 border-b">
                         <p className="text-sm text-gray-500">Signed in as</p>
                         <p className="text-sm font-medium text-gray-800 truncate">{registrationData?.workEmail || 'User'}</p>
                       </div>
                       <div className="py-1">
                         <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                       </div>
                     </div>
                  )}
                </div>
              ) : (
                // --- LOGIN BUTTON ---
                <Link to="/join" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors duration-200">Login</Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Why</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Industries</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Find iOS Dev</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Apply as Vendor</Link>
          <div className="pt-4 mt-4 border-t border-gray-200">
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700">Hire iOS Dev</Link>
            {isAuthenticated ? (
               <button onClick={handleLogout} className="block w-full text-center mt-2 text-gray-600 font-semibold hover:bg-gray-100 px-5 py-2 rounded-lg">Logout</button>
            ) : (
               <Link to="/join" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center mt-2 text-gray-600 font-semibold hover:bg-gray-100 px-5 py-2 rounded-lg">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;