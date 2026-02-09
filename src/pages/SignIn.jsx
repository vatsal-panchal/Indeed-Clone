import React from "react";
import Logo from "../components/Logo";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center pt-16">
      {/* Logo */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-[440px] border border-gray-200 rounded-lg p-8 shadow-sm">
        <h1 className="text-2xl font-normal text-gray-900 mb-2">
          Ready to take the next step?
        </h1>
        <p className="text-base text-gray-700 mb-6">
          Create an account or sign in.
        </p>

        {/* Terms text */}
        <p className="text-xs text-gray-600 mb-6 leading-relaxed">
          By clicking any of the 'Continue' options below, you understand and
          agree to Indeed's{" "}
          <a href="#" className="text-blue-600 underline">
            Terms
          </a>
          . You also consent to our{" "}
          <a href="#" className="text-blue-600 underline">
            Cookie
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy
          </a>{" "}
          policies. You will receive marketing messages from Indeed and may opt
          out at any time by following the unsubscribe link in our messages, or
          as detailed in our terms.
        </p>

        {/* Google Button */}
        <button className="w-full border border-gray-300 rounded-lg py-3 mb-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-medium text-gray-900">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z"
              fill="#4285F4"
            />
            <path
              d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z"
              fill="#34A853"
            />
            <path
              d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z"
              fill="#FBBC05"
            />
            <path
              d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        {/* Apple Button */}
        <button className="w-full border border-gray-300 rounded-lg py-3 mb-6 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-medium text-gray-900">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.209 10.655c-.02-2.248 1.835-3.33 1.918-3.382-1.045-1.53-2.673-1.74-3.252-1.764-1.384-.14-2.702.815-3.405.815-.703 0-1.788-.795-2.94-.774-1.513.022-2.907.88-3.686 2.235-1.571 2.723-.402 6.756 1.129 8.967.748 1.082 1.64 2.297 2.812 2.253 1.15-.046 1.585-.744 2.976-.744 1.39 0 1.804.744 2.939.72 1.214-.02 2.002-1.095 2.751-2.178.866-1.252 1.223-2.463 1.244-2.526-.027-.012-2.386-.916-2.409-3.63l-.077.008zm-2.012-5.945c.622-.754 1.041-1.8.927-2.844-.896.036-1.981.597-2.623 1.35-.575.666-1.078 1.731-.943 2.753.997.077 2.015-.507 2.639-1.259z" />
          </svg>
          Continue with Apple
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Required fields note */}
        <p className="text-xs text-gray-600 mb-4">
          All fields marked with * are required.
        </p>

        {/* Email Input */}
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Email address or phone number *
        </label>
        <input
          type="text"
          placeholder="youremail@email.com or 9876543210"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base"
        />

        {/* Continue Button */}
        <button className="w-full bg-[#6c8eef] text-white py-3 rounded-lg font-medium hover:bg-[#5a7dd4] transition-colors flex items-center justify-center gap-2">
          Continue
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M8.5 3l1.4 1.4L6.7 7.5H14v2H6.7l3.2 3.1L8.5 14l-5.5-5.5L8.5 3z"
              transform="rotate(180 8 8)"
            />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12 text-xs text-gray-600 flex gap-6">
        <span>© 2026 Indeed</span>
        <a href="#" className="hover:underline">
          Accessibility at Indeed
        </a>
        <a href="#" className="hover:underline">
          Privacy Centre and Ad Choices
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
      </div>
    </div>
  );
};

export default SignIn;
