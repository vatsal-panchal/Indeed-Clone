import React, { useState } from 'react';
import { Search, MapPin, Bookmark, Share2, ChevronDown, X, Briefcase, DollarSign, Clock } from 'lucide-react';
import { jobsData, filtersData } from '../data/jobsData';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('front end developer');
  const [location, setLocation] = useState('ahmedabad, gujarat');
  const [selectedJob, setSelectedJob] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);

  const currentJob = jobsData[selectedJob];

  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Top Section with Search */}
      <div className="fixed top-16 left-0 right-0 bg-white z-30 shadow-sm">
        {/* Search Bar */}
        <div className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex gap-4 justify-center">
              {/* What Input */}
              <div className="w-full max-w-md flex items-center gap-3 border-2 border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-600 bg-white">
                <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-gray-900"
                  placeholder="Job title, keywords"
                />
              </div>

              {/* Where Input */}
              <div className="w-full max-w-md flex items-center gap-3 border-2 border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-600 bg-white">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 outline-none text-gray-900"
                  placeholder="City or state"
                />
              </div>

              {/* Search Button */}
              <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Find jobs
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex gap-3 justify-center flex-wrap">
              {filtersData.map((filter, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                    filter.active
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {filter.label}
                  {!filter.removable && <ChevronDown className="w-4 h-4" />}
                  {filter.removable && <X className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="pt-[200px] flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex gap-0 mx-auto" style={{ maxWidth: '1400px' }}>
            {/* Left Sidebar - Jobs List */}
            <div className="w-[500px] bg-white border-r border-gray-200 flex-shrink-0">
              <div 
                className="overflow-y-auto scrollbar-hide" 
                style={{ height: 'calc(100vh - 200px)' }}
              >
                {/* Upload CV Banner */}
                <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                  <p className="text-sm text-center">
                    📄 <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Upload your CV</span> and find your next job!
                  </p>
                </div>

                {/* Sort Header */}
                <div className="px-6 py-4 bg-white border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-2 text-center">
                    <span className="font-semibold text-gray-900">{jobsData.length} jobs</span> in Ahmedabad, Gujarat
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-600">Sort by:</span>
                    <button className="font-semibold text-gray-900 underline">relevance</button>
                    <span className="text-gray-400">·</span>
                    <button className="text-blue-600 hover:underline">date</button>
                  </div>
                </div>

                {/* Job Cards */}
                <div>
                  {jobsData.map((job, index) => (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJob(index)}
                      className={`px-6 py-6 border-b border-gray-200 cursor-pointer transition-all ${
                        selectedJob === index
                          ? 'bg-blue-50 border-l-4 border-l-blue-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-gray-900 text-base leading-tight pr-4 line-clamp-2">
                          {job.title}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSaveJob(job.id);
                          }}
                          className="flex-shrink-0"
                        >
                          <Bookmark className={`w-5 h-5 ${savedJobs.includes(job.id) ? 'fill-blue-600 text-blue-600' : 'text-gray-400 hover:text-blue-600'}`} />
                        </button>
                      </div>

                      <p className="font-semibold text-gray-900 text-sm mb-1">{job.company}</p>
                      <p className="text-sm text-gray-600 mb-3">{job.location}</p>

                      <p className="text-sm font-semibold text-gray-900 mb-3">{job.salary}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded">
                          {job.type}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.posted}
                        </span>
                      </div>

                      {job.easyApply && (
                        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                          <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">✓</span>
                          </div>
                          Easily apply
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Job Details */}
            <div className="flex-1 bg-white">
              <div 
                className="overflow-y-auto scrollbar-hide" 
                style={{ height: 'calc(100vh - 200px)' }}
              >
                <div className="max-w-3xl mx-auto px-10 py-10">
                  {/* Job Title */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {currentJob.title}
                  </h1>

                  <a href="#" className="text-blue-600 hover:underline font-semibold text-lg mb-3 inline-block">
                    {currentJob.company}
                  </a>

                  <p className="text-gray-700 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {currentJob.location}
                  </p>

                  <p className="text-gray-900 font-bold text-xl mb-8">{currentJob.salary}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mb-12 pb-8 border-b border-gray-200">
                    <button className="bg-blue-600 text-white px-10 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                      Apply now
                    </button>
                    <button
                      onClick={() => toggleSaveJob(currentJob.id)}
                      className={`p-3.5 border-2 rounded-lg transition-all ${
                        savedJobs.includes(currentJob.id)
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-600'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${savedJobs.includes(currentJob.id) ? 'fill-blue-600 text-blue-600' : 'text-gray-600'}`} />
                    </button>
                    <button className="p-3.5 border-2 border-gray-300 rounded-lg hover:border-blue-600 transition-all">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Job Description */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-5">Job Description</h2>
                    <p className="text-gray-700 leading-relaxed text-base">{currentJob.description}</p>
                  </div>

                  {/* Requirements */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-5">Requirements</h2>
                    <ul className="space-y-3">
                      {currentJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 text-base">
                          <span className="text-blue-600 font-bold text-lg mt-0.5">•</span>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-5">Benefits</h2>
                    <div className="flex flex-wrap gap-3">
                      {currentJob.benefits.map((benefit, index) => (
                        <span key={index} className="px-5 py-2.5 bg-green-50 border border-green-200 text-green-700 font-medium rounded-lg text-sm">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;