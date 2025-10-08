import React from 'react';

// You would typically import these logos from your assets folder, e.g.:
// import nbcLogo from '../assets/nbc-logo.png';
// For now, we'll use placeholder SVGs or assume direct image URLs if you provide them.

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Talrn in the news</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          We are recognized as one of the leading platforms for on-demand talent.
        </p>

        {/* Logos Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {/* Replace with actual image tags when you have the logo files */}
          <div className="w-36 h-20 flex items-center justify-center">
            {/* Placeholder for NBC Logo */}
            <img src="src\assets\nbc.png" alt="NBC" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-36 h-20 flex items-center justify-center">
            {/* Placeholder for FOX News Logo */}
            <img src="src\assets\fox.png" alt="FOX News" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-36 h-20 flex items-center justify-center">
            {/* Placeholder for CBS Logo */}
            <img src="src\assets\cbs.png" alt="CBS" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="w-36 h-20 flex items-center justify-center">
            {/* Placeholder for USA Today Logo */}
            <img src="src\assets\usa-today.png" alt="USA Today" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;