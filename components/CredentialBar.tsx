import React from 'react';

export const CredentialBar: React.FC = () => {
  const credentials = [
    "CARTER ENERGY SOLUTIONS (PTY) LTD",
    "CIPC: 2025/852718/07",
    "SARS TAX REF: 9218382282",
    "B-BBEE LEVEL 1 CONTRIBUTOR (135% RECOGNITION)",
    "100% BLACK-OWNED EME",
    "CETA ACCREDITED: ACC/20/07/00029 (CERT: PSBE/ROY/20/100)",
    "SANS 10142-1 COC ISSUED ON EVERY INSTALLATION"
  ];

  return (
    <div className="w-full bg-brand-forest text-brand-ivory py-3.5 overflow-hidden flex relative z-20 border-y border-brand-gold/25">
      <div className="flex whitespace-nowrap animate-[marquee_36s_linear_infinite]">
        {[...credentials, ...credentials, ...credentials].map((cred, idx) => (
          <div key={idx} className="flex items-center text-xs font-mono tracking-widest uppercase px-6">
            <span className="text-brand-ivory/90">{cred}</span>
            <span className="ml-12 text-brand-gold" aria-hidden="true">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

