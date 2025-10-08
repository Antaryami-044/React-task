import React from 'react';

const technologies = ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 'Ionic'];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Vetted for Excellence, Ready to Deliver</h2>
        <p className="mt-4 text-gray-600">
          Our rigorous screening process ensures you only connect with the best. We evaluate technical skills, communication, and professionalism to guarantee a perfect fit for your team and projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map(tech => (
            <button key={tech} className="bg-blue-100 text-blue-800 font-semibold px-5 py-5 rounded-full hover:bg-blue-200 transition">
              {tech}
            </button>
          ))}
        </div>
      </div>
      {/* Right Side */}
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 16 }).map((_, index) => (
            <img 
              key={index}
              src={`https://i.pravatar.cc/100?img=${index + 10}`} 
              alt={`Developer ${index + 1}`}
              className="rounded-md w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}