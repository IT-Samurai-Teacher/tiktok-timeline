import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TikTokRevolutionPresentation = () => {
  const [step, setStep] = useState(0);
  
  const timeline = [
    // Previous events remain the same until 2024
    {
      year: 2012,
      event: "ByteDance Founded",
      description: "Founded by Zhang Yiming in Beijing",
      impact: "Started as a news aggregator company, showing early signs of powerful AI-driven content recommendation systems.",
      globalContext: "At this time, Facebook dominated social media, and short-form video wasn't yet mainstream.",
      type: "company"
    },
    // ... [Previous years 2016-2023 remain the same] ...
    {
      year: 2024,
      event: "Pre-Ban Developments",
      description: "TikTok's dominant position raises concerns",
      impact: "Platform reaches over 170 million active users in the US alone",
      globalContext: "Growing global debate over social media regulation and data sovereignty",
      usaConcerns: "Intensified legislative scrutiny and security investigations",
      type: "milestone",
      banned: true
    },
    {
      year: "January 19, 2025",
      event: "U.S. Ban Implementation",
      description: "TikTok removed from major app stores",
      impact: "Service disruption affects millions of US users",
      globalContext: "Global tech community watches US actions closely",
      usaConcerns: "Government cites national security concerns related to ByteDance ownership",
      type: "critical",
      banned: true
    },
    {
      year: "January 2025",
      event: "Supreme Court Decision",
      description: "Court upholds legislation mandating ByteDance divestment",
      impact: "Legal precedent set for foreign-owned app regulation",
      globalContext: "International discussion on digital sovereignty intensifies",
      usaConcerns: "Reinforcement of government authority over foreign tech platforms",
      type: "legal",
      banned: true
    },
    {
      year: "January 19, 2025",
      event: "Temporary Service Restoration",
      description: "President-elect proposes 50% US ownership solution",
      impact: "Potential new model for international tech governance",
      globalContext: "Other countries consider similar ownership requirements",
      usaConcerns: "Ongoing negotiations for restructured ownership and operations",
      type: "development",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Dynamic Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-2 text-white">The TikTok Revolution</h1>
          <h2 className="text-2xl font-semibold text-red-400">ByteDance's Rise and America's Response</h2>
          <p className="text-gray-400 mt-4">A Journey from Startup to Current Crisis</p>
        </motion.div>

        {/* Main Timeline Display */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-6 mb-8 border border-gray-700">
          {timeline.slice(0, step).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-6 p-6 rounded-lg ${
                item.type === 'critical' 
                  ? 'bg-red-900/30 border-2 border-red-700'
                  : item.type === 'development'
                  ? 'bg-yellow-900/30 border-2 border-yellow-700'
                  : 'bg-blue-900/30 border-2 border-blue-700'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{item.year}</span>
                <span className={`px-4 py-1 rounded-full text-sm ${
                  item.type === 'critical'
                    ? 'bg-red-700 text-white'
                    : item.type === 'development'
                    ? 'bg-yellow-700 text-white'
                    : 'bg-blue-700 text-white'
                }`}>
                  {item.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mt-3 text-white">{item.event}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
              
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold">Global Impact</h4>
                  <p className="text-gray-300">{item.globalContext}</p>
                </div>
                
                {item.usaConcerns && (
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <h4 className="text-red-400 font-semibold">U.S. Response</h4>
                    <p className="text-gray-300">{item.usaConcerns}</p>
                  </div>
                )}
              </div>

              {item.status === 'pending' && (
                <div className="mt-4 text-yellow-400 flex items-center">
                  <span className="mr-2">🔄</span>
                  Situation Developing
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            className={`px-6 py-2 rounded-lg ${
              step === 0 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => step < timeline.length && setStep(step + 1)}
            className={`px-6 py-2 rounded-lg ${
              step === timeline.length 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Next
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 text-center text-gray-400">
          Chapter {step} of {timeline.length}
        </div>
      </div>
    </div>
  );
};

export default TikTokRevolutionPresentation;