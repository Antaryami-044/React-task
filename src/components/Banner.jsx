import React, { useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-blue-600 text-white text-center p-2">
      <div className="flex items-center justify-center">
        <span className="bg-white text-blue-600 text-xs font-bold mr-3 px-2 py-1 rounded-full">
          NEW
        </span>

        <p className="text-xs font-medium">
          Get a Guaranteed Developer within 24 working hours.
          <a href="#" className="underline ml-7 hover:opacity-80">
            Hire candidates
          </a>
        </p>

        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-blue-700 focus:outline-none"
          aria-label="Dismiss banner"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;