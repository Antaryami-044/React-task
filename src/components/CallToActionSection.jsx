import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToActionSection() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
      
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-600">
            Explore 411+ iOS developers from 71+ countries, delivering 2520+ projects.<br />
            Discover 102+ industry experts in 326+ technology specialists in Swift, ObjectiveC& more.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Explore Our Talent Pool</h2>
            <p className="mt-2 text-gray-300">Get detailed insights into developer skills, experience, and project history.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1 rounded-md">
             <Link to="#" className="block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-transparent hover:text-white transition">
                View Profile
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}