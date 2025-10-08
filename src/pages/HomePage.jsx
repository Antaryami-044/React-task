import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CallToActionSection from '../components/CallToActionSection';
import NetworkSection from '../components/NetworkSection';
import NewsSection from '../components/NewSection';
import ManagedServicesSection from '../components/ManagedServicesSection';

const ProfileCard = ({ name, role, location, imgUrl }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
        <img src={imgUrl} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-200"/>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-sm text-gray-500 mt-1">{location}</p>
        <span className="mt-3 bg-yellow-400 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Active</span>
    </div>
);

const HomePage = () => {
    const industries = ["Healthcare", "Automotive", "Banking", "Fintech", "Insurance", "E-commerce"];
    const clientLogos = [
        { name: "Client A", active: true }, { name: "Client B", active: false },
        { name: "Client C", active: true }, { name: "Client D", active: false },
        { name: "Client E", active: true }, { name: "Client F", active: false },
    ];
     const newsLogos = ["NBC", "Fox News", "CBS", "USA Today"];

    return (
        <div className="bg-talrn-gray-light">
            <HeroSection />
            <CallToActionSection />
            <FeaturesSection />
            <NetworkSection />
            <NewsSection />
            <ManagedServicesSection />
        </div>
    );
};

export default HomePage;

// import React from 'react';
// import Header from '../components/Header';
// import HeroSection from '../components/HeroSection';
// import CallToActionSection from '../components/CallToActionSection';
// import FeaturesSection from '../components/FeaturesSection';
// import StickyButtons from '../components/StickyButtons';
// // import Footer from '../components/Footer'; // You can add your footer here

// export default function HomePage() {
//   return (
//     <div className="bg-gray-50">
//       {/* <Header /> */}
//       <main>
//         <HeroSection />
//         <CallToActionSection />
//         <FeaturesSection />
//         {/* Add more sections here */}
//       </main>
//       <StickyButtons />
//       {/* <Footer /> */}
//     </div>
//   );
// }