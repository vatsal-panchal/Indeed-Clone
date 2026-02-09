import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { companiesData } from '../data/companiesData';

const CompanyReviews = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find great places to work
          </h1>
          <p className="text-gray-600 text-base mb-6">
            Get access to millions of company reviews
          </p>

          {/* Search Bar */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Company name or job title
            </label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-base"
                  placeholder=""
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Find Companies
              </button>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm hover:underline">
            Do you want to search for salaries?
          </a>
        </div>

        {/* Popular Companies Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular companies
          </h2>

          <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {companiesData.map((company) => (
              <div
                key={company.id}
                className="group cursor-pointer"
              >
                {/* Company Logo and Info */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-2xl">${company.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-base group-hover:text-blue-600 truncate">
                      {company.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= Math.floor(company.rating)
                                ? 'fill-gray-900 text-gray-900'
                                : star - 0.5 <= company.rating
                                ? 'fill-gray-900 text-gray-900'
                                : 'fill-none text-gray-900'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-blue-600 hover:underline">
                        {company.reviews}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm ml-15">
                  <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">
                    Salaries
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">
                    Questions
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">
                    Open jobs
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyReviews;