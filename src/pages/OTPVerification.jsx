import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { useOtpAuth } from '../context/OtpContext'; // <-- Import context hook

const OTPVerification = () => {
  const { registrationData, login } = useOtpAuth();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const navigate = useNavigate();

  // Get email from the context data, not from location.state
  const email = registrationData?.workEmail;

  // This effect correctly protects the page if the user lands here directly
  useEffect(() => {
    if (!email) {
      navigate('/join');
    }
  }, [email, navigate]);
  
  // This effect manages the resend cooldown timer
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await api.post('/verify-otp', { email, otp });
      login(); // Update context to reflect logged-in state
      navigate('/success');
    } catch (err) {
      setError(err.response?.data?.error || 'Verification failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setIsLoading(true);
    setError('');
    setSuccessMessage('');
    try {
      await api.post('/send-otp', { email });
      setSuccessMessage('A new OTP has been sent.');
      setResendCooldown(60);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to resend OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!email) {
    return null; // Render nothing while redirecting to prevent errors
  }

  // Your full JSX for the OTP form does not need to change.
  // It is included here for completeness.
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
        <p className="text-gray-600 mb-6">Enter the 6-digit code sent to <strong>{email}</strong>.</p>
        <form onSubmit={handleVerifyOtp}>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength="6" className="w-full p-3 text-center text-2xl tracking-[1em] font-mono border-2 rounded-md" required />
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
          <button type="submit" disabled={isLoading} className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 disabled:bg-blue-300">
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          Didn't receive the code?{' '}
          {resendCooldown > 0 ? (
            <span className="text-gray-400">Resend in {resendCooldown}s</span>
          ) : (
            <button onClick={handleResendOtp} disabled={isLoading} className="font-medium text-blue-600 hover:underline disabled:text-gray-400">Resend OTP</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;