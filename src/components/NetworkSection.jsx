import React from 'react';

const infoCards = [
    { title: "Featured works on Talrn", description: "Explore the best works delivered by developers" },
    { title: "See all profiles on Talrn", description: "Discover top developer profiles available on Talrn" },
    { title: "Apply as a developer", description: "Start your journey as a developer with Talrn" },
];

const clients = [
    { name: 'Maro', logo: 'K', active: true, engagement: '12 month' },
    { name: 'Buyhive', logo: 'B', active: false, engagement: '12 month' },
    { name: 'Mogul', logo: 'M', active: true, engagement: '12 month' },
    { name: 'Bracketology', logo: '[iv]', active: true, engagement: '12 month' },
    { name: 'RXR', logo: 'FC', active: false, engagement: '12 month' },
    { name: 'Ocula', logo: 'O', active: true, engagement: '12 month' },
    { name: 'GoFynd', logo: 'G', active: false, engagement: '12 month' },
    { name: 'Zenith', logo: 'Z', active: true, engagement: '12 month' },
];

const topRowClients = [...clients.slice(0, 4), ...clients.slice(0, 4)];
const bottomRowClients = [...clients.slice(4), ...clients.slice(4)];

const InfoCard = ({ title, description }) => (
  <div className="bg-blue-600 rounded-2xl p-6 relative group hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
    <h3 className="font-bold text-lg text-white">{title}</h3>
    <p className="text-blue-200 mt-2 text-sm">{description}</p>
    <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
      <span className="text-white group-hover:text-blue-600 transition-colors duration-300">+</span>
    </div>
  </div>
);

const ClientCard = ({ client }) => (
  <div className="relative flex-shrink-0 w-64 bg-white rounded-lg shadow-md mx-4 p-6">
    {client.active && (
        <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            Active
        </span>
    )}
    <div className="flex justify-between items-start">
      <h4 className="font-bold text-lg text-gray-800">{client.name}</h4>
    </div>
    <div className="flex justify-between items-end mt-8">
      <span className="text-4xl font-light text-gray-700">{client.logo}</span>
      <span className="text-sm text-gray-500 text-right">{client.engagement}<br/>engagement</span>
    </div>
  </div>
);

const NetworkSection = () => {
  return (
    <>
      <section className="bg-black text-white rounded-3xl p-8 md:p-16 relative overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-6xl mt-20">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none"/><path d="M10-5V5h20V-5M10 35v10h20V35" strokeWidth="1" stroke="hsl(0, 0%, 50%)" fill="none"/></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)"/></svg>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">Talrn is the world's largest network of top iOS talent.</h1>
          <p className="mt-4 text-gray-300">Save 70% on staff costs, while driving innovation & growth. Guaranteed.</p>
        </div>
        <div className="relative z-10 grid md:grid-cols-3 gap-6 mt-12">
          {infoCards.map(card => <InfoCard key={card.title} title={card.title} description={card.description} />)}
        </div>
      </section>

      <section className="py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">We've helped <span className="text-blue-600 font-bold">250+</span> clients outsource their software development</h2>
          <p className="mt-2 text-gray-500">And just to name a few...</p>
        </div>
        <div className="relative mt-12 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex flex-col space-y-4">
            <div className="flex animate-marquee-scroll">
              {topRowClients.map((client, index) => <ClientCard key={`top-${index}`} client={client} />)}
            </div>
            <div className="flex animate-marquee-scroll-reverse">
              {bottomRowClients.map((client, index) => <ClientCard key={`bottom-${index}`} client={client} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NetworkSection;