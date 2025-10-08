// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from '../api/api';

// const JoinPage = ({ setRegistrationData }) => {
//   const [formType, setFormType] = useState("Organisation");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     jobTitle: "",
//     organization: "",
//     website: "",
//     workEmail: "",
//     phoneNumber: "",
//     city: "",
//     corporateRegNumber: "",
//     referralCode: "",
//     portfolio: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     let tempErrors = {};
//     if (!formData.firstName) tempErrors.firstName = "First name is required.";
//     if (!formData.lastName) tempErrors.lastName = "Last name is required.";
//     if (!formData.workEmail || !/\S+@\S+\.\S+/.test(formData.workEmail)) {
//       tempErrors.workEmail = "A valid work email is required.";
//     }
//     if (formType === "Organisation" && !formData.organization) {
//       tempErrors.organization = "Organization name is required.";
//     }
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setIsLoading(true);
//       setErrors({});
//       try {
//         await api.post("/send-otp", { email: formData.workEmail });
        
//         console.log("OTP request sent successfully.");
        
//         // Save the form data to the context before navigating
//         setRegistrationData(formData); 
        
//         // Navigate to the verify page
//         navigate("/verify-otp");

//       } catch (err) {
//         console.error("Send OTP error:", err);
//         setErrors({ api: err.response?.data?.error || "Failed to send OTP." });
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const commonFields = (
//     <>
//       <div className="md:col-span-1">
//         <label className="block text-sm font-medium text-gray-700">First Name*</label>
//         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.firstName ? "border-red-500" : "border-gray-300"}`} />
//         {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//       </div>
//       <div className="md:col-span-1">
//         <label className="block text-sm font-medium text-gray-700">Last Name*</label>
//         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.lastName ? "border-red-500" : "border-gray-300"}`} />
//         {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//       </div>
//       <div className="md:col-span-2">
//         <label className="block text-sm font-medium text-gray-700">Work Email*</label>
//         <input type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.workEmail ? "border-red-500" : "border-gray-300"}`} />
//         {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>}
//       </div>
//     </>
//   );

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <div>
//           <h2 className="text-center text-3xl font-extrabold text-gray-900">Join Talrn</h2>
//           <p className="mt-2 text-center text-sm text-gray-600">Create an account to hire developers or find your next role.</p>
//         </div>

//         <div className="flex justify-center rounded-md shadow-sm" role="group">
//           <button onClick={() => setFormType("Organisation")} className={`py-2 px-8 text-sm font-medium ${formType === "Organisation" ? "bg-blue-600 text-white" : "bg-white text-gray-900"} rounded-l-lg border border-gray-200 hover:bg-gray-100`}>
//             Organisation
//           </button>
//           <button onClick={() => setFormType("Individual")} className={`py-2 px-8 text-sm font-medium ${formType === "Individual" ? "bg-blue-600 text-white" : "bg-white text-gray-900"} rounded-r-md border border-gray-200 hover:bg-gray-100`}>
//             Individual
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="mt-8">
//           {errors.api && <p className="text-red-500 text-sm text-center mb-4">{errors.api}</p>}
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {commonFields}

//             {formType === "Organisation" && (
//               <>
//                 <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Job Title</label><input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
//                 <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Organization*</label><input type="text" name="organization" value={formData.organization} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.organization ? "border-red-500" : "border-gray-300"}`} />{errors.organization && (<p className="text-red-500 text-xs mt-1">{errors.organization}</p>)}</div>
//                 <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700">Website</label><input type="url" name="website" value={formData.website} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
//                 <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Phone Number</label><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
//                 <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">City</label><input type="text" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
//                 <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Corporate Registration Number</label><input type="text" name="corporateRegNumber" value={formData.corporateRegNumber} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
//                 <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Referral Code</label><input type="text" name="referralCode" value={formData.referralCode} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
//               </>
//             )}

//             {formType === "Individual" && (
//               <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700">Portfolio/LinkedIn URL</label><input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
//             )}
//           </div>

//           <div className="mt-8">
//             <button type="submit" disabled={isLoading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed">
//               {isLoading ? "Sending OTP..." : "Create Account"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JoinPage;










import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/api';
import { useOtpAuth } from '../context/OtpContext'; // <-- Import context hook

const JoinPage = () => {
  const { setRegistrationData } = useOtpAuth(); // <-- Get the setter from context
  const [formType, setFormType] = useState("Organisation");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    organization: "",
    website: "",
    workEmail: "",
    phoneNumber: "",
    city: "",
    corporateRegNumber: "",
    referralCode: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required.";
    if (!formData.lastName) tempErrors.lastName = "Last name is required.";
    if (!formData.workEmail || !/\S+@\S+\.\S+/.test(formData.workEmail)) {
      tempErrors.workEmail = "A valid work email is required.";
    }
    if (formType === "Organisation" && !formData.organization) {
      tempErrors.organization = "Organization name is required.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      setErrors({});
      try {
        await api.post("/send-otp", { email: formData.workEmail });
        
        // Save form data to the global context
        setRegistrationData(formData); 
        
        // Navigate to the verification page
        navigate("/verify-otp");

      } catch (err) {
        setErrors({ api: err.response?.data?.error || "Failed to send OTP." });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Your full JSX for the form does not need to change.
  // It is included here for completeness.
  const commonFields = (
    <>
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700">First Name*</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.firstName ? "border-red-500" : "border-gray-300"}`} />
        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
      </div>
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700">Last Name*</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.lastName ? "border-red-500" : "border-gray-300"}`} />
        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Work Email*</label>
        <input type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.workEmail ? "border-red-500" : "border-gray-300"}`} />
        {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>}
      </div>
    </>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Join Talrn</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Create an account to hire developers or find your next role.</p>
        </div>
        <div className="flex justify-center rounded-md shadow-sm" role="group">
          <button onClick={() => setFormType("Organisation")} className={`py-2 px-8 text-sm font-medium ${formType === "Organisation" ? "bg-blue-600 text-white" : "bg-white text-gray-900"} rounded-l-lg border border-gray-200 hover:bg-gray-100`}>Organisation</button>
          <button onClick={() => setFormType("Individual")} className={`py-2 px-8 text-sm font-medium ${formType === "Individual" ? "bg-blue-600 text-white" : "bg-white text-gray-900"} rounded-r-md border border-gray-200 hover:bg-gray-100`}>Individual</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
          {errors.api && <p className="text-red-500 text-sm text-center mb-4">{errors.api}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonFields}
            {formType === "Organisation" && (
              <>
                <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Job Title</label><input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Organization*</label><input type="text" name="organization" value={formData.organization} onChange={handleChange} className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${errors.organization ? "border-red-500" : "border-gray-300"}`} />{errors.organization && (<p className="text-red-500 text-xs mt-1">{errors.organization}</p>)}</div>
                <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700">Website</label><input type="url" name="website" value={formData.website} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Phone Number</label><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">City</label><input type="text" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Corporate Registration Number</label><input type="text" name="corporateRegNumber" value={formData.corporateRegNumber} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div className="md:col-span-1"><label className="block text-sm font-medium text-gray-700">Referral Code</label><input type="text" name="referralCode" value={formData.referralCode} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
              </>
            )}
            {formType === "Individual" && (<div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700">Portfolio/LinkedIn URL</label><input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>)}
          </div>
          <div className="mt-8">
            <button type="submit" disabled={isLoading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed">
              {isLoading ? "Sending OTP..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;