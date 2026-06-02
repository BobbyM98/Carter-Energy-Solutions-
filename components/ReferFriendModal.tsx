import React, { useState, useEffect } from 'react';
import { X, Gift, User, Mail, Phone, MapPin, Check, ChevronDown, CheckCircle, Flame, DollarSign, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { m as motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

interface ReferFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferFriendModal: React.FC<ReferFriendModalProps> = ({ isOpen, onClose }) => {
  const [reward, setReward] = useState<'airfryer' | 'cache'>('airfryer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form State
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+27');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  // Address parameters
  const [address, setAddress] = useState('');
  const [isManualAddress, setIsManualAddress] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [addressError, setAddressError] = useState('');

  const [monthlyBill, setMonthlyBill] = useState('');
  const [phaseType, setPhaseType] = useState('Single Phase');
  const [referralCode, setReferralCode] = useState('');
  const [optionalMessage, setOptionalMessage] = useState('');
  const [agreed, setAgreed] = useState(false);

  // Focus and Blur states for inputs
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const sampleAddresses = [
    "123 Jan Smuts Avenue, Rosebank, Johannesburg, 2196",
    "45 Protea Road, Claremont, Cape Town, 7708",
    "78 West Street, Sandringham, Sandton, 2196",
    "12 Umhlanga Rocks Drive, Umhlanga, Durban, 4319",
    "56 Garsfontein Road, Waterkloof, Pretoria, 0181",
    "89 Main Road, Walmer, Gqeberha, 6070"
  ];

  useEffect(() => {
    if (address && !isManualAddress && address.length > 2) {
      const filtered = sampleAddresses.filter(addr => 
        addr.toLowerCase().includes(address.toLowerCase())
      );
      setAddressSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setAddressSuggestions([]);
      setShowSuggestions(false);
    }
  }, [address, isManualAddress]);

  const validateEmail = (val: string) => {
    const errorMsg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? '' : 'Please enter a valid email address.';
    setEmailError(errorMsg);
    return errorMsg === '';
  };

  const countries = [
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+267', country: 'Botswana', flag: '🇧🇼' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+266', country: 'Lesotho', flag: '🇱🇸' },
    { code: '+268', country: 'Eswatini', flag: '🇸🇿' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Address check
    if (!address.trim()) {
      setAddressError('Please enter a valid address.');
      return;
    }

    if (!validateEmail(email)) {
      return;
    }

    if (!agreed) {
      alert("You must agree to the terms and conditions to proceed.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API storage
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFirstName('');
    setSurname('');
    setIdNumber('');
    setPhone('');
    setCountryCode('+27');
    setEmail('');
    setAddress('');
    setIsManualAddress(false);
    setMonthlyBill('');
    setPhaseType('Single Phase');
    setReferralCode('');
    setOptionalMessage('');
    setAgreed(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center p-0 md:p-4 bg-black/85 backdrop-blur-md">
        {/* Backdrop overlay */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-brand-black text-white md:rounded-lg shadow-2xl border border-white/5 overflow-hidden z-[101] my-auto"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/80 text-white/70 hover:text-white transition-colors z-[110] border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="flex flex-col max-h-screen md:max-h-[85vh] overflow-y-auto scrollbar-thin">
              
              {/* Advisor Promo Banner */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
                <img 
                  src="/src/assets/images/solar_advisor_1780326472829.png" 
                  alt="Carter Energy advisor offering referral rewards" 
                  className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-10" />
                
                {/* Banner Content */}
                <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 bg-brand-gold/10 backdrop-blur-md px-3 py-1 rounded-full text-brand-gold font-bold text-[10px] uppercase tracking-widest border border-brand-gold/20 mb-3 w-fit">
                    <Gift className="w-3.5 h-3.5" />
                    Double Rewards Campaign
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-none">
                    Refer a friend <span className="text-brand-gold">to solar.</span>
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base mt-2 max-w-md font-light leading-snug">
                    They install, you both get rewarded with premium South African tech or cash bonuses.
                  </p>
                </div>
              </div>

              {/* Form & Selection Content */}
              <div className="p-6 md:p-8 space-y-8">
                
                {/* Promo Pitch Description */}
                <div className="p-4 rounded bg-brand-charcoal border border-brand-gold/10">
                  <p className="text-sm text-slate-300 leading-relaxed text-center">
                    Help your friends and family also enjoy up to <span className="text-brand-gold font-bold">90% savings</span> on their electricity bill — and you both get rewarded handsomely.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Choose Reward */}
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Choose Your Reward
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Reward Option 1: Air Fryer */}
                      <button
                        type="button"
                        onClick={() => setReward('airfryer')}
                        className={`group text-left p-5 rounded-sm border transition-all relative overflow-hidden flex flex-col justify-between h-32 ${
                          reward === 'airfryer' 
                            ? 'bg-brand-gold/5 border-brand-gold shadow-[0_0_15px_-3px_rgba(212,175,55,0.25)]' 
                            : 'bg-brand-charcoal border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <div className={`p-2.5 rounded-sm shrink-0 ${reward === 'airfryer' ? 'bg-brand-gold text-brand-black' : 'bg-white/5 text-slate-400'}`}>
                            <Flame className="w-5 h-5 animate-pulse" />
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            reward === 'airfryer' ? 'border-brand-gold bg-brand-gold text-brand-black' : 'border-white/20'
                          }`}>
                            {reward === 'airfryer' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-sm tracking-tight text-white group-hover:text-brand-gold transition-colors">A Free Air Fryer</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">Premium multi-cooker delivered to you</div>
                        </div>
                      </button>

                      {/* Reward Option 2: Cash Bonus */}
                      <button
                        type="button"
                        onClick={() => setReward('cache')}
                        className={`group text-left p-5 rounded-sm border transition-all relative overflow-hidden flex flex-col justify-between h-32 ${
                          reward === 'cache' 
                            ? 'bg-brand-gold/5 border-brand-gold shadow-[0_0_15px_-3px_rgba(212,175,55,0.25)]' 
                            : 'bg-brand-charcoal border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <div className={`p-2.5 rounded-sm shrink-0 ${reward === 'cache' ? 'bg-brand-gold text-brand-black' : 'bg-white/5 text-slate-400'}`}>
                            <DollarSign className="w-5 h-5" />
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            reward === 'cache' ? 'border-brand-gold bg-brand-gold text-brand-black' : 'border-white/20'
                          }`}>
                            {reward === 'cache' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-sm tracking-tight text-white group-hover:text-brand-gold transition-colors">R1000 Cash Bonus</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">Paid direct to both of your bank accounts</div>
                        </div>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-2 text-center italic">
                      Reward choice can be adjusted at any point before installation.
                    </p>
                  </div>

                  {/* Step 2: Contact Details */}
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Referral Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div className="relative">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 ml-1">First Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="e.g. Sipho"
                            className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3.5 pl-10 pr-4 text-sm outline-none text-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Surname */}
                      <div className="relative">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 ml-1">Surname</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="e.g. Dlamini"
                            className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3.5 pl-10 pr-4 text-sm outline-none text-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* ID Number */}
                      <div className="relative">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 ml-1 flex items-center gap-1.5">
                          RSA ID Number 
                          <span className="text-[10px] text-slate-500 font-normal normal-case">(For Verification)</span>
                        </label>
                        <div className="relative">
                          <ShieldCheck className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            maxLength={13}
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value.replace(/\D/g, ''))}
                            placeholder="YYMMDDSSSSAAA"
                            className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3.5 pl-10 pr-4 text-sm outline-none text-white transition-colors tracking-widest font-mono"
                          />
                        </div>
                      </div>

                      {/* Phone Code & Number Input (Mock Flag Selector as shown in Wetility) */}
                      <div className="relative">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 ml-1">Phone Number</label>
                        <div className="flex gap-2">
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                              className="bg-brand-charcoal h-full px-3 py-3 rounded-sm border border-white/15 focus:border-brand-gold flex items-center gap-1 text-sm text-white"
                            >
                              <span>{countries.find(c => c.code === countryCode)?.flag}</span>
                              <span className="text-[12px]">{countryCode}</span>
                              <ChevronDown className="w-3 h-3 text-slate-400" />
                            </button>
                            
                            {/* Dropdown list */}
                            {isCountryDropdownOpen && (
                              <div className="absolute top-full left-0 mt-1 min-w-[130px] bg-brand-charcoal border border-white/10 shadow-xl z-50 rounded-sm">
                                {countries.map((c) => (
                                  <button
                                    key={c.code}
                                    type="button"
                                    onClick={() => {
                                      setCountryCode(c.code);
                                      setIsCountryDropdownOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-2 text-xs hover:bg-white/10 flex items-center gap-2 text-white"
                                  >
                                    <span>{c.flag}</span>
                                    <span>{c.code}</span>
                                    <span className="text-slate-400 text-[10px]">({c.country})</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          <div className="relative flex-grow">
                            <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                              placeholder="082 123 4567"
                              className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3.5 pl-10 pr-4 text-sm outline-none text-white transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 ml-1">E-mail Address</label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-3.5 w-4 h-4 ${emailError ? 'text-red-400' : 'text-slate-400'}`} />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError('');
                          }}
                          onBlur={() => validateEmail(email)}
                          placeholder="e.g. sipho@gmail.com"
                          className={`w-full bg-brand-charcoal border ${emailError ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-brand-gold'} rounded-sm py-3.5 pl-10 pr-4 text-sm outline-none text-white transition-colors`}
                        />
                        {emailError && (
                          <p className="text-[10px] text-red-400 mt-1 font-medium ml-1">{emailError}</p>
                        )}
                      </div>
                    </div>

                    {/* Address Lookup block with dynamic dropdown suggestion as on mockup */}
                    <div className="relative">
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block ml-1">Property Address</label>
                        <button
                          type="button"
                          onClick={() => {
                            setIsManualAddress(!isManualAddress);
                            setAddress('');
                            setAddressError('');
                            setShowSuggestions(false);
                          }}
                          className="text-[10px] font-bold text-brand-gold hover:underline focus:outline-none"
                        >
                          {isManualAddress ? "Use Address Search" : "Manually Capture"}
                        </button>
                      </div>

                      <div className="relative">
                        <MapPin className={`absolute left-3 top-3.5 w-4 h-4 ${addressError ? 'text-red-400' : 'text-slate-400'}`} />
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                            if (addressError) setAddressError('');
                          }}
                          placeholder={isManualAddress ? "Type your house number, street name, suburb, city..." : "Start typing address..."}
                          className={`w-full bg-brand-charcoal border ${addressError ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-brand-gold'} rounded-sm py-3.5 pl-10 pr-4 text-sm outline-none text-white transition-colors`}
                        />
                        {addressError && (
                          <p className="text-[10px] text-red-400 mt-1 font-medium ml-1">{addressError}</p>
                        )}

                        {/* Search feedback instructions */}
                        {!isManualAddress && !address && (
                          <p className="text-[10px] text-slate-500 mt-1 ml-1 leading-none">
                            Type 3+ letters to see direct South African address options.
                          </p>
                        )}

                        {/* Autocomplete Suggestions Box */}
                        {showSuggestions && addressSuggestions.length > 0 && (
                          <div className="absolute left-0 right-0 mt-1 bg-brand-charcoal border border-white/10 rounded-sm shadow-xl z-50 max-h-48 overflow-y-auto">
                            {addressSuggestions.map((suggestion, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => {
                                  setAddress(suggestion);
                                  setShowSuggestions(false);
                                }}
                                className="w-full text-left px-4 py-3 text-xs text-slate-300 hover:text-white hover:bg-white/10 border-b border-white/5 last:border-0 transition-colors flex items-center gap-2"
                              >
                                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span className="truncate">{suggestion}</span>
                              </button>
                            ))}
                          </div>
                        )}
                        {showSuggestions && addressSuggestions.length === 0 && (
                          <div className="absolute left-0 right-0 mt-1 bg-brand-charcoal border border-white/10 rounded-sm p-3 text-xs text-slate-400 z-50 flex flex-col gap-1">
                            <span>Can't find your address?</span>
                            <button
                              type="button"
                              onClick={() => {
                                setIsManualAddress(true);
                                setAddress('');
                                setShowSuggestions(false);
                              }}
                              className="text-left font-bold text-brand-gold hover:underline"
                            >
                              Click here to capture address manually
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Monthly Electricity Bill */}
                      <div className="relative">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 ml-1">Monthly Electricity Bill</label>
                        <select
                          required
                          value={monthlyBill}
                          onChange={(e) => setMonthlyBill(e.target.value)}
                          className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3.5 px-4 text-sm text-white outline-none appearance-none transition-colors"
                        >
                          <option value="">Select Range (ZAR)</option>
                          <option value="Under R1,500">Under R1,500</option>
                          <option value="R1,500 - R3,000">R1,500 - R3,000</option>
                          <option value="R3,000 - R6,000">R3,000 - R6,000</option>
                          <option value="R6,000 - R12,000">R6,000 - R12,000</option>
                          <option value="Above R12,000">Above R12,000</option>
                        </select>
                      </div>

                      {/* Phase Dropdown */}
                      <div className="relative">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 ml-1">Electrical Connection Phase</label>
                        <select
                          value={phaseType}
                          onChange={(e) => setPhaseType(e.target.value)}
                          className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3.5 px-4 text-sm text-white outline-none appearance-none transition-colors"
                        >
                          <option value="Single Phase">Single Phase</option>
                          <option value="Three Phase">Three Phase</option>
                          <option value="I am unsure">I am unsure</option>
                        </select>
                      </div>
                    </div>

                    {/* Referral / Promo Code */}
                    <div className="relative border-t border-white/5 pt-4">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5 ml-1">Got referred? Apply your referral code</label>
                      <input
                        type="text"
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                        placeholder="Referral Code (Optional)"
                        className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3 px-4 text-sm outline-none text-white transition-colors"
                      />
                    </div>

                    {/* Optional Message */}
                    <div className="relative pt-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5 ml-1">Optional Message</label>
                      <textarea
                        value={optionalMessage}
                        onChange={(e) => setOptionalMessage(e.target.value)}
                        placeholder="Any specific load requirements or battery backup needs?"
                        rows={2}
                        className="w-full bg-brand-charcoal border border-white/15 focus:border-brand-gold rounded-sm py-3 px-4 text-sm outline-none text-white transition-colors resize-none"
                      />
                    </div>

                    {/* Legal Checkbox info */}
                    <div className="pt-2 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agree-checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 w-4 h-4 bg-brand-charcoal border border-white/15 text-brand-gold focus:ring-brand-gold focus:ring-0 cursor-pointer rounded-sm"
                      />
                      <label htmlFor="agree-checkbox" className="text-slate-400 text-xs leading-normal select-none cursor-pointer">
                        I agree to the <a href="#" className="underline text-brand-gold hover:text-brand-gold-light">terms and conditions</a>. The information given above is true and correct, and I agree to abide by the terms.
                      </label>
                    </div>

                  </div>

                  {/* Submission Row */}
                  <div className="pt-6 border-t border-white/5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold py-4 rounded-sm transition-all shadow-[0_4px_25px_-5px_rgba(212,175,55,0.4)] hover:scale-[1.01] flex items-center justify-center gap-2 text-sm uppercase tracking-wide disabled:opacity-50"
                    >
                      {isSubmitting ? 'Registering Referral...' : 'Submit Referral Application'}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          ) : (
            /* Success State - Claim Power Back Screen (matches screen 2 mockup exactly) */
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
            >
              <div className="w-18 h-18 bg-brand-gold/15 border border-brand-gold/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-brand-gold" />
              </div>

              <div className="text-xs uppercase font-extrabold tracking-widest text-brand-gold/80 mb-3">
                Application Registered
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-white leading-tight mb-4 max-w-md">
                Register now to claim your power back
              </h3>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mb-8">
                One of our energy advisors will be in touch shortly regarding your <span className="text-brand-gold font-semibold">CARTER CES BACKUP</span> system and reward activation.
              </p>

              {/* Direct Helplines from Mockup */}
              <div className="w-full max-w-sm bg-brand-charcoal border border-white/5 rounded-sm p-6 text-left space-y-4 mb-8">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Advisor</div>
                    <a href="mailto:info@cenergys.space" className="text-sm font-semibold text-white hover:text-brand-gold transition-colors">
                      info@cenergys.space
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Helpline Number</div>
                    <a href="tel:0602924523" className="text-sm font-semibold text-white hover:text-brand-gold transition-colors font-mono">
                      060 292 4523
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-sm text-sm transition-all focus:outline-none"
              >
                Close Window
              </button>
            </MotionDiv>
          )}

        </MotionDiv>
      </div>
    </AnimatePresence>
  );
};
