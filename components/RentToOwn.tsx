import React, { useState } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Calendar, 
  HelpCircle, 
  ChevronRight, 
  Check, 
  Building2, 
  Home as HomeIcon, 
  ShieldCheck, 
  ArrowRight,
  Info,
  GraduationCap,
  Store,
  Utensils,
  Warehouse,
  Apple,
  Heart,
  Users,
  Sun
} from 'lucide-react';

const MotionDiv = motion.div as any;

interface SolarPackage {
  id: string;
  name: string;
  price: number;
  isCustomPrice?: boolean;
  panelsCount: number;
  panelsSpec: string;
  inverterCapacity: string;
  batteryCapacity: string;
  phase: string;
  suitability: string;
  isBackup?: boolean;
  businessSuites?: string[];
}

const HOME_PACKAGES: SolarPackage[] = [
  {
    id: 'ces-backup',
    name: 'CES BACKUP',
    price: 999,
    panelsCount: 0,
    panelsSpec: '0 Panels (Solar Ready)',
    inverterCapacity: '5kW Inverter Capacity',
    batteryCapacity: '5.1kWh Battery',
    phase: 'Single Phase',
    suitability: 'Suitable for electrical bills below R2,000',
    isBackup: true
  },
  {
    id: 'ces-core',
    name: 'CES CORE',
    price: 1299,
    panelsCount: 6,
    panelsSpec: '6 Solar Panels (2.73kWp)',
    inverterCapacity: '5kW Inverter Capacity',
    batteryCapacity: '5.1kWh Battery',
    phase: 'Single Phase',
    suitability: 'Suitable for electrical bills below R2,000'
  },
  {
    id: 'ces-mini',
    name: 'CES MINI',
    price: 1649,
    panelsCount: 10,
    panelsSpec: '10 Solar Panels (4.55kWp)',
    inverterCapacity: '5kW Inverter Capacity',
    batteryCapacity: '5.1kWh Battery',
    phase: 'Single Phase',
    suitability: 'Suitable for electrical bills between R2,000 and R3,500'
  },
  {
    id: 'ces-ultra',
    name: 'CES ULTRA',
    price: 2199,
    panelsCount: 14,
    panelsSpec: '14 Solar Panels (6.37kWp)',
    inverterCapacity: '5kW Inverter Capacity',
    batteryCapacity: '10.2kWh Battery',
    phase: 'Single Phase',
    suitability: 'Suitable for electrical bills between R3,500 and R5,000'
  },
  {
    id: 'ces-maxi',
    name: 'CES MAXI',
    price: 3399,
    panelsCount: 19,
    panelsSpec: '19 Solar Panels (8.64kWp)',
    inverterCapacity: '6kW Inverter Capacity',
    batteryCapacity: '15.3kWh Battery',
    phase: 'Single Phase',
    suitability: 'Suitable for electrical bills between R5,000 and R7,000'
  },
  {
    id: 'ces-maxi-3ph',
    name: 'CES MAXI 3PH',
    price: 3999,
    panelsCount: 26,
    panelsSpec: '26 Solar Panels (11.83kWp)',
    inverterCapacity: '15kW Inverter Capacity',
    batteryCapacity: '15.3kWh Battery',
    phase: 'Three Phase',
    suitability: 'Suitable for electrical bills above R7,000'
  },
  {
    id: 'ces-mega',
    name: 'CES MEGA',
    price: 4199,
    panelsCount: 30,
    panelsSpec: '30 Solar Panels (13.65kWp)',
    inverterCapacity: '12kW Inverter Capacity',
    batteryCapacity: '20.4kWh Battery',
    phase: 'Single Phase',
    suitability: 'Suitable for electrical bills above R7,000'
  }
];

const BUSINESS_PACKAGES: SolarPackage[] = [
  {
    id: 'ces-ultra-biz',
    name: 'CES ULTRA BIZ',
    price: 2299,
    panelsCount: 14,
    panelsSpec: '14 Solar Panels (6.37kWp)',
    inverterCapacity: '5kW Inverter Capacity',
    batteryCapacity: '10.2kWh Battery',
    phase: 'Single Phase',
    suitability: 'Ideal for local boutique retailers, SOHO workspaces, and medical consulting suites.',
    businessSuites: ['Home Offices', 'Boutique Shops', 'SOHO Retailers']
  },
  {
    id: 'ces-maxi-biz',
    name: 'CES MAXI BIZ',
    price: 3499,
    panelsCount: 19,
    panelsSpec: '19 Solar Panels (8.64kWp)',
    inverterCapacity: '6kW Inverter Capacity',
    batteryCapacity: '15.3kWh Battery',
    phase: 'Single Phase',
    suitability: 'Ideal for small retail shops, pharmacies, and single-story commercial offices.',
    businessSuites: ['Medical Practices', 'Professional Offices', 'Local Cafes']
  },
  {
    id: 'ces-maxi-3ph-biz',
    name: 'CES MAXI 3PH BIZ',
    price: 4199,
    panelsCount: 26,
    panelsSpec: '26 Solar Panels (11.83kWp)',
    inverterCapacity: '15kW Inverter Capacity',
    batteryCapacity: '15.3kWh Battery',
    phase: 'Three Phase',
    suitability: 'Ideal for three-phase commercial units, sit-down restaurants, and strip mall anchor stores.',
    businessSuites: ['Busy Restaurants', 'Three-Phase Workshops', 'Strip Malls']
  },
  {
    id: 'ces-mega-biz',
    name: 'CES MEGA BIZ',
    price: 4599,
    panelsCount: 30,
    panelsSpec: '30 Solar Panels (13.65kWp)',
    inverterCapacity: '12kW Inverter Capacity',
    batteryCapacity: '20.4kWh Battery',
    phase: 'Three Phase',
    suitability: 'Ideal for logistics depots, multi-floor corporate offices, and heavy-demand local workshops.',
    businessSuites: ['Logistics Hubs', 'Multi-Floor Offices', 'Workshops']
  },
  {
    id: 'rise-series',
    name: 'CES RISE SERIES',
    price: 7499,
    panelsCount: 40,
    panelsSpec: '40 Panels (Custom Density)',
    inverterCapacity: '25kW Commercial Inverter',
    batteryCapacity: '30.6kWh Storage Pack',
    phase: 'Three Phase',
    suitability: 'Ideal for sectional title developments, gated community cluster grids, and mid-scale manufacturing.',
    businessSuites: ['Apartment Complexes', 'Sectional Titles', 'Light Industrial']
  },
  {
    id: 'lift-series',
    name: 'CES LIFT SERIES',
    price: 15999,
    panelsCount: 65,
    panelsSpec: '65 Panels (Heavy-Grid Array)',
    inverterCapacity: '50kW Heavy-Duty Inverter',
    batteryCapacity: '61.2kWh High-Throughput',
    phase: 'Three Phase',
    suitability: 'Ideal for large campuses, agricultural food processors, industrial manufacturing pools, and cold storage warehouses.',
    businessSuites: ['Commercial Farms', 'Industrial Factories', 'Logistics Warehouses', 'Educational Facilities']
  }
];

interface PremiseType {
  label: string;
  packageId: string;
  segment: 'home' | 'business';
  category: string;
  iconName: 'home' | 'school' | 'utensils' | 'warehouse' | 'store' | 'heart' | 'apple' | 'building' | 'users' | 'sun';
}

const PREMISE_TYPES: PremiseType[] = [
  // Home Segment
  { label: 'Starter Townhouse', packageId: 'ces-core', segment: 'home', category: 'CES Classic Series', iconName: 'home' },
  { label: 'Standard Family Home', packageId: 'ces-mini', segment: 'home', category: 'CES Classic Series', iconName: 'sun' },
  { label: 'Large Extended House', packageId: 'ces-ultra', segment: 'home', category: 'CES Classic Series', iconName: 'building' },
  { label: 'Premium 3-Phase Estate', packageId: 'ces-maxi-3ph', segment: 'home', category: 'CES Triple-Phase Series', iconName: 'users' },
  { label: 'Off-Grid Mega Mansion', packageId: 'ces-mega', segment: 'home', category: 'CES Triple-Phase Series', iconName: 'building' },

  // Business Segment - LUXE/MICRO Series
  { label: 'Spaza Shop', packageId: 'ces-ultra-biz', segment: 'business', category: 'LUXE BIZ Series', iconName: 'store' },
  { label: 'Local Tavern', packageId: 'ces-maxi-biz', segment: 'business', category: 'LUXE BIZ Series', iconName: 'store' },
  { label: 'Boutique Retail / Cafes', packageId: 'ces-maxi-biz', segment: 'business', category: 'LUXE BIZ Series', iconName: 'utensils' },
  { label: 'Medical Consulting Suite', packageId: 'ces-ultra-biz', segment: 'business', category: 'LUXE BIZ Series', iconName: 'heart' },

  // Business Segment - RISE Series
  { label: 'Sectional Cluster Dev', packageId: 'rise-series', segment: 'business', category: 'RISE Series', iconName: 'users' },
  { label: 'Apartment Blocks', packageId: 'rise-series', segment: 'business', category: 'RISE Series', iconName: 'building' },

  // Business Segment - LIFT Series
  { label: 'Commercial Farm', packageId: 'lift-series', segment: 'business', category: 'LIFT Series', iconName: 'apple' },
  { label: 'Industrial Factory', packageId: 'lift-series', segment: 'business', category: 'LIFT Series', iconName: 'warehouse' },
  { label: 'Logistics Depot', packageId: 'ces-mega-biz', segment: 'business', category: 'LIFT Series', iconName: 'warehouse' },
  { label: 'School / Academic Campus', packageId: 'lift-series', segment: 'business', category: 'LIFT Series', iconName: 'school' }
];

export const RentToOwn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'business'>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('ces-ultra');
  const [aiMode, setAiMode] = useState<boolean>(true);
  const [payMonthLater, setPayMonthLater] = useState<boolean>(false);
  const [setupType, setSetupType] = useState<'vertical' | 'normal'>('vertical');

  const getPremiseIcon = (iconName: string) => {
    switch (iconName) {
      case 'school': return <GraduationCap className="w-3.5 h-3.5" />;
      case 'utensils': return <Utensils className="w-3.5 h-3.5" />;
      case 'warehouse': return <Warehouse className="w-3.5 h-3.5" />;
      case 'store': return <Store className="w-3.5 h-3.5" />;
      case 'heart': return <Heart className="w-3.5 h-3.5 text-rose-500" />;
      case 'apple': return <Apple className="w-3.5 h-3.5" />;
      case 'building': return <Building2 className="w-3.5 h-3.5" />;
      case 'users': return <Users className="w-3.5 h-3.5" />;
      case 'sun': return <Sun className="w-3.5 h-3.5 text-amber-500" />;
      default: return <HomeIcon className="w-3.5 h-3.5" />;
    }
  };

  // Switch tabs and reset active package appropriately
  const handleTabChange = (tab: 'home' | 'business') => {
    setActiveTab(tab);
    if (tab === 'home') {
      setSelectedPackageId('ces-ultra');
    } else {
      setSelectedPackageId('ces-maxi-3ph-biz');
    }
  };

  const currentPackages = activeTab === 'home' ? HOME_PACKAGES : BUSINESS_PACKAGES;
  const activePackage = currentPackages.find(p => p.id === selectedPackageId) || currentPackages[0];

  const scrollToContact = () => {
    const element = document.getElementById('get-quote');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Render high-tech simulated vector 3D-oblique stack of cascading solar panels
  const renderInteractiveVisualizer = () => {
    const isBusiness = activeTab === 'business';
    const panels = activePackage.panelsCount;
    
    // Scale panel stack count visually so it is elegant and fits in container (max 10 visualized layers)
    let visualPanelsCount = 0;
    if (panels > 0) {
      visualPanelsCount = Math.min(10, Math.ceil(panels / 3));
    }
    if (panels > 0 && visualPanelsCount === 0) visualPanelsCount = 1;

    return (
      <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center bg-slate-100/30 dark:bg-brand-black/40 rounded-3xl border border-slate-200/50 dark:border-white/5 shadow-inner p-8 overflow-hidden">
        {/* Glowing Background Glows responding to AI mode */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[80px] transition-all duration-700 pointer-events-none ${
          aiMode 
            ? 'bg-amber-500/10 dark:bg-brand-gold/15 scale-110' 
            : 'bg-brand-gold/5 dark:bg-brand-gold/5 scale-90'
        }`} />

        {/* Dynamic decorative technical grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* 3D Container with oblique perspective setup */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Deck of layered Solar Panels behind */}
          <div className="absolute left-[38%] top-[25%] transition-all duration-500 w-[180px] h-[240px]">
            {panels > 0 ? (
              Array.from({ length: visualPanelsCount }).map((_, index) => {
                const offsetStep = 11; // px spacing
                const zIndex = 10 - index;
                return (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: -20, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: -index * offsetStep, 
                      y: index * offsetStep,
                      rotateX: setupType === 'vertical' ? 12 : 45,
                      rotateY: setupType === 'vertical' ? -18 : -10,
                      skewY: setupType === 'vertical' ? -14 : -6,
                      skewX: setupType === 'vertical' ? 4 : 0,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    style={{ zIndex }}
                    className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#1b3252] via-[#0f213a] to-[#040d1a] border border-[#2b5387] shadow-[2px_10px_20px_rgba(0,0,0,0.5)] overflow-hidden"
                  >
                    {/* Solar Panel blue cells look */}
                    <div className="w-full h-full grid grid-cols-4 grid-rows-6 gap-[2px] p-[3px] opacity-80">
                      {Array.from({ length: 24 }).map((_, cellIdx) => (
                        <div key={cellIdx} className="bg-[#112a4f] rounded-[1px] border-[0.5px] border-[#1e4275] flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-tr from-[#1b3c6e]/30 to-blue-400/15" />
                        </div>
                      ))}
                    </div>
                    {/* Gloss Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none skew-y-12" />
                    {/* Dynamic Setup indicator tag within panel glass */}
                    {index === 0 && (
                      <div className="absolute bottom-2 right-2 bg-brand-gold text-brand-black text-[7px] font-bold px-1.5 py-0.5 rounded tracking-widest uppercase z-30 shadow-md font-mono scale-[0.85] origin-bottom-right">
                        {setupType === 'vertical' ? 'Vertical 90°' : 'Tilted 30°'}
                      </div>
                    )}
                  </MotionDiv>
                );
              })
            ) : isBusiness ? (
              // If RISE series multi-res illustrative panel block
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="transform -translate-x-8 translate-y-8 flex flex-col gap-2 scale-90"
              >
                <div className="relative w-[180px] h-[100px] bg-indigo-950/80 border border-indigo-400/20 rounded-md p-2 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_70%)]" />
                  <div className="text-[10px] text-brand-gold font-bold tracking-wider uppercase mb-1">Residential Clusters</div>
                  <div className="grid grid-cols-3 gap-1 h-12">
                    <div className="bg-slate-800/80 border border-slate-700 rounded" />
                    <div className="bg-slate-800/80 border border-slate-700 rounded" />
                    <div className="bg-slate-800/80 border border-slate-700 rounded" />
                  </div>
                </div>
              </MotionDiv>
            ) : (
              // Solar backup (No panels tag)
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center transform -translate-x-12 translate-y-12"
              >
                <Zap className="w-32 h-32 text-brand-gold-dark" />
              </MotionDiv>
            )}
          </div>

          {/* Front Carter Premium Custom Inverter / Battery Unit */}
          <MotionDiv
            layoutId="inverter-unit"
            className="absolute left-[15%] top-[20%] w-[130px] h-[260px] bg-slate-50 dark:bg-white border-2 border-slate-300 dark:border-neutral-100 rounded-[14px] shadow-[10px_20px_45px_rgba(0,0,0,0.3)] z-30 flex flex-col items-center justify-between p-4 overflow-hidden"
            animate={{ 
              y: [0, -4, 0],
              boxShadow: aiMode 
                ? "0 25px 50px -12px rgba(212,175,55,0.30)" 
                : "0 25px 50px -12px rgba(0,0,0,0.25)"
            }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          >
            {/* Gloss light effect */}
            <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white to-transparent pointer-events-none z-10 opacity-40" />
            
            {/* Unit Premium top cover */}
            <div className="w-full flex justify-between items-center relative z-20">
              {/* Premium small Brand Icon */}
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                <span className="text-[8px] font-sans font-black text-brand-black tracking-tighter">CARTER</span>
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
            </div>

            {/* Smart LED strip status down the center */}
            <div className="relative w-1.5 h-32 bg-neutral-200 dark:bg-neutral-100 rounded-full flex items-center justify-center overflow-hidden my-4">
              {/* Interactive glowing energy flow animating based on status */}
              <MotionDiv 
                animate={{
                  y: aiMode ? [-64, 64] : [64, -64],
                  backgroundColor: aiMode ? ["#E5A93C", "#FCEFAD", "#E5A93C"] : ["#cbd5e1", "#e2e8f0", "#cbd5e1"]
                }}
                transition={{
                  repeat: Infinity,
                  duration: aiMode ? 1.5 : 3,
                  ease: "linear"
                }}
                className="absolute inset-x-0 h-10 rounded-full bg-brand-gold shadow-[0_0_8px_#D4AF37]"
              />
            </div>

            {/* Intelligent AI Glow Hub (Front glowing panel element) */}
            <div className="w-full bg-slate-100 p-2.5 rounded-lg border border-slate-200 relative z-20">
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-slate-500 font-bold uppercase tracking-widest">CES SYS</span>
                <Cpu className={`w-3 h-3 transition-colors duration-500 ${aiMode ? 'text-brand-gold' : 'text-slate-400'}`} />
              </div>
              
              <div className="mt-1 h-3.5 flex items-center gap-1">
                {aiMode ? (
                  <>
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-gold"></span>
                    </span>
                    <span className="text-[6.5px] font-bold text-brand-gold-dark font-mono uppercase tracking-widest animate-pulse">AI OPTIMIZED</span>
                  </>
                ) : (
                  <span className="text-[6.5px] font-bold text-neutral-400 font-mono uppercase tracking-widest">ECO ACTIVE</span>
                )}
              </div>
            </div>
          </MotionDiv>

          {/* Right Floating Quick Action Badges matching Wetility's interactive setup */}
          <div className="absolute right-[-4%] top-[12%] flex flex-col gap-3 z-40 min-w-[110px]">
            {/* AI mode toggle badge widget */}
            <button
              onClick={() => setAiMode(!aiMode)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 border font-sans hover:scale-105 active:scale-95 text-left focus:outline-none focus:ring-1 focus:ring-brand-gold min-h-[50px] ${
                aiMode
                  ? 'bg-brand-black text-brand-gold border-brand-gold shadow-lg shadow-brand-gold/10'
                  : 'bg-white/80 dark:bg-brand-charcoal/80 text-slate-500 dark:text-slate-400 border-slate-250 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-wider">AI mode</span>
              </div>
              <span className={`text-[8px] font-semibold uppercase tracking-widest mt-0.5 ${aiMode ? 'text-brand-gold/80' : 'text-slate-400 dark:text-slate-500'}`}>
                {aiMode ? 'Active Save' : 'Standard'}
              </span>
            </button>

            {/* Delay Payment toggle badge widget */}
            <button
              onClick={() => setPayMonthLater(!payMonthLater)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 border font-sans hover:scale-105 active:scale-95 text-left focus:outline-none focus:ring-1 focus:ring-brand-gold min-h-[50px] ${
                payMonthLater
                  ? 'bg-brand-black text-white border-brand-gold shadow-lg shadow-brand-gold/10'
                  : 'bg-white/80 dark:bg-brand-charcoal/80 text-slate-500 dark:text-slate-400 border-slate-250 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-1 text-center">
                <span className="text-[9px] font-bold uppercase leading-tight">Pay <span className="text-brand-gold">1 month</span> later</span>
              </div>
              <span className={`text-[8px] font-semibold uppercase tracking-widest mt-0.5 ${payMonthLater ? 'text-brand-gold' : 'text-slate-400'}`}>
                {payMonthLater ? 'Deferred' : 'Inactive'}
              </span>
            </button>
          </div>

        </div>
      </div>
    );
  };

  return (
    <section id="packages" className="py-24 dark:bg-brand-black bg-white border-y border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-500">
      
      {/* Background radial soft light gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 border border-brand-gold/20">
            <Zap className="w-3.5 h-3.5" /> High-Performance Hybrid Solar
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black dark:text-white text-slate-900 leading-tight uppercase tracking-tight">
            Vertical Smart Solutions
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-450 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Rent-to-Own in Gauteng & Vaal Region. Custom-engineered solar power units configured for zero upfront capital, premium maintenance, and intelligent power management.
          </p>

          {/* Premium Home / Business & Setup Config Toggle Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Segment</span>
              <div className="inline-flex p-1.5 rounded-full dark:bg-brand-charcoal bg-slate-100 border border-slate-200 dark:border-white/5 shadow-inner">
                <button
                  onClick={() => handleTabChange('home')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === 'home'
                      ? 'bg-brand-gold text-brand-black shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <HomeIcon className="w-3.5 h-3.5" />
                  For Home
                </button>
                <button
                  onClick={() => handleTabChange('business')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === 'business'
                      ? 'bg-brand-gold text-brand-black shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  For Business
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Mount Configuration</span>
              <div className="inline-flex p-1.5 rounded-full dark:bg-brand-charcoal bg-slate-100 border border-slate-200 dark:border-white/5 shadow-inner">
                <button
                  onClick={() => setSetupType('vertical')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    setupType === 'vertical'
                      ? 'bg-brand-gold text-brand-black shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  90° Vertical Bifacial
                </button>
                <button
                  onClick={() => setSetupType('normal')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    setupType === 'normal'
                      ? 'bg-brand-gold text-brand-black shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Standard Flat/Tilted
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Premise Type Quick Selector - Modeled after reference site */}
        <div className="mt-12 mb-14 bg-slate-50/50 dark:bg-brand-charcoal/20 p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-white/5 text-center">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#CCA43B] mb-2 font-mono">
            Interactive Premise Selector
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-xl mx-auto font-light mb-8">
            Select your specific property class below to instantly load the recommended bifacial package:
          </p>

          <div className="flex flex-col gap-6 text-left max-w-5xl mx-auto">
            {activeTab === 'home' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Home Classic Series */}
                <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-brand-black/20">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 block mb-3 tracking-widest">
                    CES Classic Series (Single Phase)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PREMISE_TYPES.filter(p => p.segment === 'home' && p.category === 'CES Classic Series').map((p) => {
                      const isSelected = selectedPackageId === p.packageId;
                      return (
                        <button
                          key={p.label}
                          onClick={() => setSelectedPackageId(p.packageId)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                            isSelected
                              ? 'bg-brand-gold text-brand-black border-brand-gold shadow-md shadow-brand-gold/15 font-bold scale-[1.02]'
                              : 'bg-white dark:bg-brand-charcoal hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-350 border-slate-200 dark:border-white/5 hover:border-brand-gold/30'
                          }`}
                        >
                          {getPremiseIcon(p.iconName)}
                          <span>{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Home Triple-Phase Series */}
                <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-brand-black/20">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 block mb-3 tracking-widest">
                    CES Triple-Phase Series (3PH)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PREMISE_TYPES.filter(p => p.segment === 'home' && p.category === 'CES Triple-Phase Series').map((p) => {
                      const isSelected = selectedPackageId === p.packageId;
                      return (
                        <button
                          key={p.label}
                          onClick={() => setSelectedPackageId(p.packageId)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                            isSelected
                              ? 'bg-brand-gold text-brand-black border-brand-gold shadow-md shadow-brand-gold/15 font-bold scale-[1.02]'
                              : 'bg-white dark:bg-brand-charcoal hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-350 border-slate-200 dark:border-white/5 hover:border-brand-gold/30'
                          }`}
                        >
                          {getPremiseIcon(p.iconName)}
                          <span>{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Business LUXE BIZ Series */}
                <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-brand-black/20">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 block mb-3 tracking-widest">
                    LUXE BIZ / Micro Series (Boutique & Retail)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PREMISE_TYPES.filter(p => p.segment === 'business' && p.category === 'LUXE BIZ Series').map((p) => {
                      const isSelected = selectedPackageId === p.packageId;
                      return (
                        <button
                          key={p.label}
                          onClick={() => setSelectedPackageId(p.packageId)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                            isSelected
                              ? 'bg-brand-gold text-brand-black border-brand-gold shadow-md shadow-brand-gold/15 font-bold scale-[1.02]'
                              : 'bg-white dark:bg-brand-charcoal hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-350 border-slate-200 dark:border-white/5 hover:border-brand-gold/30'
                          }`}
                        >
                          {getPremiseIcon(p.iconName)}
                          <span>{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Business RISE Series */}
                  <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-brand-black/20">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 block mb-3 tracking-widest">
                      RISE Series (Apartments & Estates)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {PREMISE_TYPES.filter(p => p.segment === 'business' && p.category === 'RISE Series').map((p) => {
                        const isSelected = selectedPackageId === p.packageId;
                        return (
                          <button
                            key={p.label}
                            onClick={() => setSelectedPackageId(p.packageId)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                              isSelected
                                ? 'bg-brand-gold text-brand-black border-brand-gold shadow-md shadow-brand-gold/15 font-bold scale-[1.02]'
                                : 'bg-white dark:bg-brand-charcoal hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-350 border-slate-200 dark:border-white/5 hover:border-brand-gold/30'
                            }`}
                          >
                            {getPremiseIcon(p.iconName)}
                            <span>{p.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Business LIFT Series */}
                  <div className="p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-brand-black/20">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 block mb-3 tracking-widest">
                      LIFT Series (Industrial, Agriculture & Campuses)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {PREMISE_TYPES.filter(p => p.segment === 'business' && p.category === 'LIFT Series').map((p) => {
                        const isSelected = selectedPackageId === p.packageId;
                        return (
                          <button
                            key={p.label}
                            onClick={() => setSelectedPackageId(p.packageId)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                              isSelected
                                ? 'bg-brand-gold text-brand-black border-brand-gold shadow-md shadow-brand-gold/15 font-bold scale-[1.02]'
                                : 'bg-white dark:bg-brand-charcoal hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-350 border-slate-200 dark:border-white/5 hover:border-brand-gold/30'
                            }`}
                          >
                            {getPremiseIcon(p.iconName)}
                            <span>{p.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Explorer Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  {/* LEFT: Premium Live 3D-oblique Visualizer and Optional Mode Info */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky lg:top-24">
            
            {renderInteractiveVisualizer()}

            {/* Dynamic Interactive Explanation Boxes responding to Toggled Modes */}
            <div className="flex flex-col gap-3">
              <AnimatePresence mode="wait">
                {aiMode ? (
                  <MotionDiv
                    key={`ai-${setupType}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-brand-gold/5 dark:bg-brand-gold/5 p-4 rounded-xl border border-brand-gold/20 flex gap-3 text-left"
                  >
                    <Cpu className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark dark:text-brand-gold">
                        AI Self-Optimization Strategy: {setupType === 'vertical' ? 'Dual-Peak Mapping Mode' : 'Noon-Harvest Master Mode'}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {setupType === 'vertical' ? (
                          <span>
                            <strong>Vertical Adaptation</strong>: The AI maps the double daily solar peaks (AM &amp; PM) of upright bifacial panels. It schedules high-drain loads (pumps, climate control, heavy machinery) to run during early-day and late-afternoon peaks, bridging the midday trough with smart battery management.
                          </span>
                        ) : (
                          <span>
                            <strong>Standard Adaptation</strong>: The AI captures high noon irradiance from standard tilted arrays. It accelerates battery charging to reach 100% state of charge during midday hours, then intelligently schedules grid peak shaving to offset high-cost municipal tariffs.
                          </span>
                        )}
                      </p>
                    </div>
                  </MotionDiv>
                ) : (
                  <MotionDiv
                    key="ai-off"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-slate-100 dark:bg-brand-charcoal/35 p-4 rounded-xl border border-dashed border-slate-300 dark:border-white/10 flex gap-3 text-left"
                  >
                    <Cpu className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Standard Manual Control (AI Off)
                      </h5>
                      <p className="text-xs text-slate-550 dark:text-slate-500 mt-1 leading-relaxed font-light">
                        System charges and discharges purely based on fixed safety triggers. Weather prediction overrides and dynamic tariff scheduling are inactive.
                      </p>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>

              {setupType === 'vertical' && (
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-sky-500/5 dark:bg-sky-500/5 p-4 rounded-xl border border-sky-500/20 flex gap-3 text-left"
                >
                  <Info className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      90° Vertical mounting benefits
                    </h5>
                    <ul className="text-xs text-slate-650 dark:text-slate-450 mt-1 space-y-1 list-disc list-inside">
                      <li>Generates reliable morning &amp; afternoon peak power</li>
                      <li>Zero ground footprint — perfect for boundary fence walls</li>
                      <li>Passive gravity keeps panels clean of dust and bird-droppings</li>
                    </ul>
                  </div>
                </MotionDiv>
              )}

              {payMonthLater && (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-gold/5 dark:bg-brand-gold/5 p-4 rounded-xl border border-brand-gold/25 flex gap-3 text-left"
                >
                  <Calendar className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark dark:text-brand-gold">First Month On Us</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Zero payment required for Month 1. The subscription activates from Month 2 — allowing you to start generating real-world vertical or standard electricity savings before you pay a single cent!
                    </p>
                  </div>
                </MotionDiv>
              )}
            </div>
          </div>

          {/* RIGHT: Selected Package Detail Details and Options Selection Carousel list */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Carousel / Tab List to select packages - Styled custom like mobile screens */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">
                Choose Model Range
              </label>
              
              <div className="flex flex-wrap gap-2 py-1 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
                {currentPackages.map((pkg) => {
                  const isSelected = pkg.id === selectedPackageId;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`px-4 py-3 rounded-lg font-mono text-xs font-bold uppercase tracking-wider border transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'bg-brand-black dark:bg-brand-gold text-brand-gold dark:text-brand-black border-brand-gold shadow-lg shadow-brand-gold/5 scale-[1.02]'
                          : 'bg-slate-50 dark:bg-brand-charcoal text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5 hover:border-brand-gold/40'
                      }`}
                    >
                      <span>{pkg.name}</span>
                      {pkg.isBackup && (
                        <span className="text-[8px] bg-brand-gold/25 text-brand-gold-dark font-sans px-1.5 py-0.5 rounded">BACKUP</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed Active Package Card Box with Price & Tech Highlight */}
            <AnimatePresence mode="wait">
              <MotionDiv
                key={activePackage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 dark:bg-brand-charcoal p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl text-left relative overflow-hidden"
              >
                {/* Visual Accent Badge */}
                <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden pointer-events-none">
                  <div className="bg-brand-gold h-4 w-32 absolute top-4 -right-8 rotate-45 text-[8px] uppercase font-bold text-brand-black flex items-center justify-center tracking-widest shadow-sm">
                    Premium
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-4 border-b border-slate-200 dark:border-white/5 pb-6 mb-6">
                  <div>
                    <h3 className="text-3xl font-serif font-black dark:text-white text-slate-900 tracking-tight">
                      {activePackage.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mt-1">
                      {activePackage.phase}
                    </p>
                  </div>
                  
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] dark:text-slate-500 text-slate-400 font-bold uppercase tracking-widest block">
                      {activePackage.isCustomPrice ? 'Bespoke Quote' : 'Monthly Rent'}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      {activePackage.isCustomPrice ? (
                        <span className="text-2xl sm:text-3xl font-serif font-black text-brand-gold-dark dark:text-brand-gold uppercase tracking-tight">
                          Custom Pricing
                        </span>
                      ) : (
                        <>
                          <span className="text-4xl font-serif font-black text-brand-gold-dark dark:text-brand-gold">
                            R {activePackage.price.toLocaleString()}
                          </span>
                          <span className="text-xs dark:text-slate-400 text-slate-500 font-bold text-brand-black">/ Month</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Included Pills Spec List */}
                <div className="mb-8">
                  <span className="text-[10px] dark:text-slate-500 text-slate-400 font-bold uppercase tracking-widest block mb-3">
                    Included Components
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-slate-100 dark:bg-brand-black/40 p-3 rounded-lg border border-slate-200/50 dark:border-white/5 flex items-center gap-3">
                      <div className="p-1 rounded bg-brand-gold/15 text-brand-gold">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div className="text-xs">
                        <div className="dark:text-slate-400 text-slate-500 font-medium">Solar Array</div>
                        <div className="font-bold dark:text-white text-slate-800">{activePackage.panelsSpec}</div>
                      </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-brand-black/40 p-3 rounded-lg border border-slate-200/50 dark:border-white/5 flex items-center gap-3">
                      <div className="p-1 rounded bg-brand-gold/15 text-brand-gold">
                        <Cpu className="h-4 w-4" />
                      </div>
                      <div className="text-xs">
                        <div className="dark:text-slate-400 text-slate-500 font-medium">Inverter Hybrid</div>
                        <div className="font-bold dark:text-white text-slate-800">{activePackage.inverterCapacity}</div>
                      </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-brand-black/40 p-3 rounded-lg border border-slate-200/50 dark:border-white/5 flex items-center gap-3">
                      <div className="p-1 rounded bg-brand-gold/15 text-brand-gold">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div className="text-xs">
                        <div className="dark:text-slate-400 text-slate-500 font-medium font-sans">Storage Battery</div>
                        <div className="font-bold dark:text-white text-slate-800">{activePackage.batteryCapacity}</div>
                      </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-brand-black/40 p-3 rounded-lg border border-slate-200/50 dark:border-white/5 flex items-center gap-3">
                      <div className="p-1 rounded bg-brand-gold/15 text-brand-gold">
                        <Info className="h-4 w-4" />
                      </div>
                      <div className="text-xs">
                        <div className="dark:text-slate-400 text-slate-500 font-medium">Electrical Line</div>
                        <div className="font-bold dark:text-white text-slate-800">{activePackage.phase}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suitability guidelines */}
                <div className="mb-6 p-4 rounded-xl dark:bg-brand-black/20 bg-[#FDFBF7] border border-brand-gold/20 flex gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold dark:text-white text-slate-900 block mb-0.5 font-sans">Ideal Match</span>
                    <span className="dark:text-slate-300 text-slate-700 font-light leading-relaxed">{activePackage.suitability}</span>
                  </div>
                </div>

                {/* Business-specific extra details */}
                {activePackage.businessSuites && (
                  <div className="mb-6">
                    <span className="text-[10px] dark:text-slate-500 text-slate-400 font-bold uppercase tracking-widest block mb-2">
                      Commercial Integration Suited For
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activePackage.businessSuites.map((suite, sIdx) => (
                        <span key={sIdx} className="text-[10.5px] font-semibold bg-brand-gold/10 text-brand-gold-dark dark:text-brand-gold border border-brand-gold/20 px-2.5 py-1 rounded-sm">
                          {suite}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-white/5 mt-6">
                  <button
                    onClick={scrollToContact}
                    className="flex-1 bg-brand-gold text-brand-black hover:bg-brand-gold-light py-4 rounded-sm text-sm font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-gold/10"
                  >
                    Set Up Site Survey
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="flex-1 dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 dark:text-white text-slate-800 py-4 rounded-sm text-sm font-bold tracking-widest uppercase transition-all"
                  >
                    Request Callback
                  </button>
                </div>

              </MotionDiv>
            </AnimatePresence>

          </div>

        </div>

        {/* Brand Guarantee & Trust badge timeline */}
        <div className="mt-16 bg-slate-50 dark:bg-brand-charcoal/30 p-8 rounded-2xl border border-slate-200 dark:border-white/5 text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Carter Assurance</span>
            <h4 className="text-xl font-serif font-bold text-slate-900 dark:text-white mt-1">Guaranteed Performance</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-light leading-relaxed">
              Every CES series unit includes real-time remote monitoring, active Gauteng-wide engineering support, and full 24/7 warranty coverage. 
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[10.5px] font-bold text-brand-gold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" /> Ownership Journey — 60-Month Rent-To-Own Lease
            </h5>
            
            <div className="flex items-center h-2.5 w-full rounded-full bg-slate-200 dark:bg-brand-black overflow-hidden mb-3">
               <div className="h-full bg-brand-gold/40 border-r border-[#1a1a1a] w-1/5" />
               <div className="h-full bg-brand-gold/60 border-r border-[#1a1a1a] w-1/5" />
               <div className="h-full bg-brand-gold/75 border-r border-[#1a1a1a] w-1/5" />
               <div className="h-full bg-brand-gold/90 border-r border-[#1a1a1a] w-1/5" />
               <div className="h-full bg-brand-gold w-1/5 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
            </div>
            
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span>Year 1</span>
              <span>Year 2</span>
              <span>Year 3</span>
              <span>Year 4</span>
              <span className="text-brand-gold-dark dark:text-brand-gold">Year 5 (Fully Yours)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
