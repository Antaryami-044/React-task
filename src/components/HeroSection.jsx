import React from 'react';

const profiles = [
  { name: 'John Doe', title: 'iOS Developer', company: 'Apple', img: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Jane Smith', title: 'React Native Dev', company: 'Meta', img: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Li Wei', title: 'Flutter Engineer', company: 'Google', img: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Aisha Khan', title: 'Android Developer', company: 'Samsung', img: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Carlos Gomez', title: 'Mobile Architect', company: 'Microsoft', img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Maria Garcia', title: 'SwiftUI Expert', company: 'Amazon', img: 'https://i.pravatar.cc/150?img=6' },
];

// Duplicate the array for a seamless, continuous loop
const duplicatedProfiles = [...profiles, ...profiles];

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center overflow-hidden">
      {/* Left Side */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Hire Pre-Vetted <span className="text-blue-600">Remote Developers</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Access a global pool of skilled developers, engineers, and programmers ready to join your team.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Your work email" 
            className="flex-grow p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
            Hire iOS Dev
          </button>
        </div>
      </div>
      
      {/* Right Side: Single Row Sliding Animation with Bigger Cards */}
      <div className="relative h-[320px] [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
        <div className="absolute top-0 left-0 flex animate-scroll-x group">
          {duplicatedProfiles.map((profile, index) => (
            <div key={index} className="flex-shrink-0 w-64 mx-4 p-6 bg-white rounded-xl shadow-lg text-center group-hover:[animation-play-state:paused]">
              <img 
                src={profile.img} 
                alt={profile.name} 
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-gray-100" 
              />
              <h3 className="text-lg font-bold text-gray-800">{profile.name}</h3>
              <p className="text-base text-gray-600">{profile.title}</p>
              <p className="text-sm text-gray-500">{profile.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}