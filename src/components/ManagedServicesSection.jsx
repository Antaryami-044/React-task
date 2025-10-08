import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom

// The list of features. You can easily add or remove items here.
const features = ['Independent', 'Secure', 'Transparent'];

const ManagedServiceSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start your outsourcing journey today
            </h2>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Button */}
          <div className="flex-shrink-0">
            <Link 
              to="#" 
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              View Profiles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedServiceSection;