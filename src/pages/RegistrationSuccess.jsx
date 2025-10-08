import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect with in 3 sec
    }, 3000);
    return () => clearTimeout(timer); // Clean timer
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Registration Complete!</h1>
        <p className="mt-4 text-lg text-gray-600">Your email has been successfully verified.</p>
        <p className="mt-2 text-sm text-gray-500">Redirecting to the home page...</p>
      </div>
    </div>
  );
};

export default RegistrationSuccess;