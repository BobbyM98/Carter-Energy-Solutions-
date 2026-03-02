import React from 'react';

export const CredentialBar: React.FC = () => {
  const credentials = [
    "CIPC: 2025/852718/07",
    "SARS: 9218382282",
    "B-BBEE Level 1 Contributor",
    "100% Black-Owned EME",
    "CETA Accredited: ACC/20/07/00029",
    "SANS 10142-1 Compliant",
    "COC Issued on All Installations"
  ];

  return (
    <div className="w-full bg-brand-gold py-3 overflow-hidden flex relative z-20 border-y border-brand-gold-dark/20">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...credentials, ...credentials, ...credentials].map((cred, idx) => (
          <div key={idx} className="flex items-center text-brand-black font-semibold text-sm px-6">
            <span>{cred}</span>
            <span className="mx-6 text-brand-black/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
