import React, { useState } from 'react';
import { Send, Check, ChevronDown, ShieldCheck, AlertCircle } from 'lucide-react';
import { m as motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    interestType: '',
    energyNotes: '',
    popiaConsent: false
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setErrorMsg('Please complete your name, email address, and contact telephone number.');
      return;
    }

    if (!formState.popiaConsent) {
      setErrorMsg('Please confirm POPIA data processing consent so our engineering team can prepare your proposal.');
      return;
    }

    setIsSubmitting(true);
    const generatedRef = `CES-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setReferenceCode(generatedRef);
      setIsSuccess(true);
    }, 900);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errorMsg) setErrorMsg(null);
  };

  if (isSuccess) {
    return (
      <div className="h-full min-h-[540px] flex flex-col items-center justify-center dark:bg-brand-charcoal/90 bg-white p-10 md:p-12 rounded-sm border border-brand-gold/40 text-center shadow-xl">
        <MotionDiv
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-brand-gold/15 border border-brand-gold/40 rounded-sm flex items-center justify-center mb-6"
        >
          <Check className="w-10 h-10 text-brand-gold-dark dark:text-brand-gold" />
        </MotionDiv>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold mb-2">
          INQUIRY LOGGED · REF {referenceCode}
        </span>
        <h3 className="text-3xl font-serif dark:text-brand-ivory text-brand-forest mb-4">
          Engineering Brief Prepared
        </h3>
        <p className="dark:text-brand-sage text-slate-600 max-w-md mx-auto font-light text-sm leading-relaxed mb-8">
          Your project parameters have been recorded in this session. To transmit your specification immediately to our Gauteng &amp; Vaal engineering desk, select your preferred dispatch channel below or our team will review your inquiry during business hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <a
            href={`mailto:info@cenergys.space?subject=${encodeURIComponent(
              `Engineering Proposal Inquiry [${referenceCode}] - ${formState.company || formState.name}`
            )}&body=${encodeURIComponent(
              `Reference: ${referenceCode}\nName: ${formState.name}\nCompany/Entity: ${formState.company}\nPhone: ${formState.phone}\nLocation: ${formState.location}\nProperty Type: ${formState.propertyType}\nProcurement Stream: ${formState.interestType}\nNotes: ${formState.energyNotes}`
            )}`}
            className="flex-1 bg-brand-gold text-brand-black py-3.5 px-4 rounded-sm font-mono text-xs font-bold uppercase tracking-wider hover:bg-brand-forest hover:text-brand-ivory transition-colors text-center"
          >
            Confirm via Email Client
          </a>
          <a
            href={`https://wa.me/27602924523?text=${encodeURIComponent(
              `Hello Cenergys Engineering Desk, I have completed a proposal request (${referenceCode}) for ${formState.company || formState.name} in ${formState.location || 'South Africa'} (${formState.interestType}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-brand-forest/20 dark:border-white/20 text-brand-forest dark:text-brand-ivory py-3.5 px-4 rounded-sm font-mono text-xs font-bold uppercase tracking-wider hover:border-brand-gold transition-colors text-center"
          >
            Send via WhatsApp Desk
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormState({
              name: '',
              company: '',
              email: '',
              phone: '',
              location: '',
              propertyType: '',
              interestType: '',
              energyNotes: '',
              popiaConsent: false
            });
          }}
          className="mt-6 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand-gold transition-colors"
        >
          Submit Another Project Specification
        </button>
      </div>
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 1, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="dark:bg-brand-charcoal/80 bg-white p-8 md:p-10 rounded-sm border dark:border-white/10 border-brand-forest/15 shadow-xl h-full flex flex-col justify-between"
    >
      <div>
        <div className="mb-8 border-b border-brand-forest/10 dark:border-white/10 pb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold block mb-2">
            DIRECT EPC &amp; PROCUREMENT DESK
          </span>
          <h3 className="text-2xl md:text-3xl font-serif dark:text-brand-ivory text-brand-forest mb-2">
            Request an Engineering Quotation
          </h3>
          <p className="dark:text-brand-sage text-slate-600 font-light text-sm leading-relaxed">
            Partner with a verified B-BBEE Level 1 Contributor (100% Black-Owned EME). Submit your site parameters for a technical feasibility assessment and compliance pack.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/30 rounded-sm flex items-start gap-2.5 text-xs text-red-600 dark:text-red-300">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3 px-3.5 text-sm dark:text-brand-ivory text-brand-forest placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                placeholder="Thabo Mokoena"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
              >
                Company / Estate / Farm
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3 px-3.5 text-sm dark:text-brand-ivory text-brand-forest placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                placeholder="Organization Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
              >
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3 px-3.5 text-sm dark:text-brand-ivory text-brand-forest placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                placeholder="name@company.co.za"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
              >
                Telephone / Mobile *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formState.phone}
                onChange={handleChange}
                className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3 px-3.5 text-sm dark:text-brand-ivory text-brand-forest placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                placeholder="+27 82 000 0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="location"
                className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
              >
                Project Location (Province)
              </label>
              <div className="relative">
                <select
                  id="location"
                  name="location"
                  value={formState.location}
                  onChange={handleChange}
                  className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3 pl-3.5 pr-9 text-sm dark:text-brand-ivory text-brand-forest focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="dark:bg-brand-black bg-white">Select Province / Corridor</option>
                  <option value="Gauteng (JHB / Pretoria / Vaal)" className="dark:bg-brand-black bg-white">Gauteng (JHB / Pretoria / Vaal)</option>
                  <option value="Free State" className="dark:bg-brand-black bg-white">Free State</option>
                  <option value="North West" className="dark:bg-brand-black bg-white">North West</option>
                  <option value="Northern Cape / Kalahari" className="dark:bg-brand-black bg-white">Northern Cape / Kalahari</option>
                  <option value="Western Cape" className="dark:bg-brand-black bg-white">Western Cape</option>
                  <option value="KwaZulu-Natal" className="dark:bg-brand-black bg-white">KwaZulu-Natal</option>
                  <option value="Mpumalanga / Limpopo / EC" className="dark:bg-brand-black bg-white">Mpumalanga / Limpopo / Eastern Cape</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="propertyType"
                className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
              >
                Site / Structure Type
              </label>
              <div className="relative">
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formState.propertyType}
                  onChange={handleChange}
                  className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3 pl-3.5 pr-9 text-sm dark:text-brand-ivory text-brand-forest focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="dark:bg-brand-black bg-white">Select Structure</option>
                  <option value="Vert-X Industrial Roof (<10kg/m²)" className="dark:bg-brand-black bg-white">Industrial / Warehouse Roof (&lt;10 kg/m²)</option>
                  <option value="Vert-X Walls (Agri / Perimeter)" className="dark:bg-brand-black bg-white">Agri Perimeter / Borehole VFD (Vert-X Walls)</option>
                  <option value="Commercial Office / Retail" className="dark:bg-brand-black bg-white">Commercial Office / Retail Center</option>
                  <option value="Residential Estate / Home" className="dark:bg-brand-black bg-white">Residential Estate / Luxury Home</option>
                  <option value="Public Sector / Municipal Facility" className="dark:bg-brand-black bg-white">Public Sector / Municipal Infrastructure</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="interestType"
              className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
            >
              Procurement / Funding Stream *
            </label>
            <div className="relative">
              <select
                id="interestType"
                name="interestType"
                required
                value={formState.interestType}
                onChange={handleChange}
                className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3 pl-3.5 pr-9 text-sm dark:text-brand-ivory text-brand-forest focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled className="dark:bg-brand-black bg-white">
                  Select Procurement Mechanism
                </option>
                <option value="Direct Commercial / Capex (12B)" className="dark:bg-brand-black bg-white">
                  Direct Commercial Capex (SARS Section 12B)
                </option>
                <option value="Rent-to-Own Subscription" className="dark:bg-brand-black bg-white">
                  Rent-to-Own Subscription (Residential / SME)
                </option>
                <option value="ESD — Enterprise & Supplier Development" className="dark:bg-brand-black bg-white">
                  ESD — Enterprise &amp; Supplier Development (Level 1)
                </option>
                <option value="CSI — Corporate Social Investment" className="dark:bg-brand-black bg-white">
                  CSI — Corporate Social Investment
                </option>
                <option value="Public / Private Tender RFQ" className="dark:bg-brand-black bg-white">
                  Public or Corporate Tender / Subcontracting
                </option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
          </div>

          <div>
            <label
              htmlFor="energyNotes"
              className="block font-mono text-[10px] uppercase tracking-widest dark:text-brand-sage text-slate-500 mb-1.5"
            >
              Energy Requirements / Roof or Perimeter Notes (Optional)
            </label>
            <textarea
              id="energyNotes"
              name="energyNotes"
              rows={2}
              value={formState.energyNotes}
              onChange={handleChange}
              placeholder="e.g., 3-phase supply, IBR steel roof, or 1.5 HP borehole pump requirement..."
              className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-2.5 px-3.5 text-sm dark:text-brand-ivory text-brand-forest placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
            />
          </div>

          {/* POPIA Data Protection Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="popiaConsent"
                checked={formState.popiaConsent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded-sm border-brand-forest/30 text-brand-gold focus:ring-brand-gold"
              />
              <span className="text-[11px] text-slate-600 dark:text-brand-sage/80 leading-relaxed">
                <strong className="text-brand-forest dark:text-brand-ivory font-medium">POPIA Privacy Notice:</strong> I consent to Carter Energy Solutions (Pty) Ltd processing my contact and project details strictly for preparing an engineering feasibility assessment and quotation in accordance with the South African Protection of Personal Information Act (Act 4 of 2013).
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-gold text-brand-black py-4 rounded-sm font-mono font-bold text-xs tracking-widest hover:bg-brand-forest hover:text-brand-ivory transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed uppercase shadow-md"
          >
            {isSubmitting ? (
              'Preparing Specification...'
            ) : (
              <>
                Request Engineering Proposal <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="mt-6 pt-5 border-t border-brand-forest/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-brand-sage">
          <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
          <span>CIPC: 2025/852718/07 · Level 1 B-BBEE</span>
        </div>
        <a
          href="https://wa.me/27602924523"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-brand-forest dark:text-brand-gold hover:underline"
        >
          WhatsApp Desk: +27 60 292 4523
        </a>
      </div>
    </MotionDiv>
  );
};