import React, { useState } from "react";
import { Search, ChevronRight, X } from "lucide-react";
import { salariesData } from "../data/salariesData";

const SalaryGuide = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("India");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Modern */}
      <div className="bg-gradient-to-br from-indigo-600 via-blue-500 to-blue-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Discover your earning potential
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed">
                Explore high-paying careers, salaries and job openings by
                industry and location.
              </p>
            </div>

            {/* Right Search Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-5">
                {/* What Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What
                  </label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Job title"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 transition-colors"
                  />
                </div>

                {/* Where Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Where
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 pr-12 transition-colors"
                    />
                    {location && (
                      <button
                        onClick={() => setLocation("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
                  Search Salaries
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse top-paying jobs
          </h2>
          <p className="text-lg text-gray-600">
            Find the best opportunities in your industry
          </p>
        </div>

        {/* Industry Filter */}
        <div className="mb-10">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Filter by industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white text-gray-900 font-medium cursor-pointer min-w-[280px] transition-colors"
          >
            <option>All Industries</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Retail</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salariesData.map((job) => (
            <div
              key={job.id}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Job Title */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors pr-2 leading-snug">
                  {job.title}
                </h3>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>

              {/* Salary Info */}
              <div className="space-y-3">
                <div className="inline-block bg-blue-50 px-4 py-2 rounded-lg">
                  <p className="text-blue-700 font-bold text-sm">
                    {job.salary}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 font-medium inline-flex items-center gap-1"
                  >
                    View job openings
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalaryGuide;
