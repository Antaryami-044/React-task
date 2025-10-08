// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Banner from './components/Banner';
// import HomePage from './pages/HomePage';
// import JoinPage from './pages/JoinPage';
// import OTPVerification from './pages/OTPVerification';
// import RegistrationSuccess from './pages/RegistrationSuccess';


// const MainLayout = () => {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <Banner />
//             <Header />
//             <main className="flex-grow">
//                 <Outlet />
//             </main>
//             <Footer />
//         </div>
//     );
// };

// function App() {
//   const [registrationData, setRegistrationData] = useState(null);
//   const [generatedOTP, setGeneratedOTP] = useState('');

//   return (
//     <Router>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<HomePage />} />
//         </Route>
//         <Route path="/join" element={<JoinPage setRegistrationData={setRegistrationData} setGeneratedOTP={setGeneratedOTP} />} />
//         <Route path="/verify-otp" element={
//             <OTPVerification 
//                 registrationData={registrationData} 
//                 correctOTP={generatedOTP} 
//             />} 
//         />
//         <Route path="/success" element={<RegistrationSuccess />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import OTPVerification from './pages/OTPVerification';
import RegistrationSuccess from './pages/RegistrationSuccess';

// Main layout with Header, Banner, and Footer
const MainLayout = () => {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <Outlet /> {/* Renders the page component */}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      {/* Pages with the main layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      
      {/* Pages without the main layout */}
      <Route path="/join" element={<JoinPage />} />
      <Route path="/verify-otp" element={<OTPVerification />} />
      <Route path="/success" element={<RegistrationSuccess />} />
    </Routes>
  );
}

export default App;