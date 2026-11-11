import React, { useState } from 'react';
import { ArrowRight, BookOpen, FileText, ChevronDown } from 'lucide-react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { optimizeImage } from '../src/utils/image';

const MotionDiv = motion.div as any;

interface ProductSpec {
  parameter: string;
  value: string;
}

interface ProductPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  engineeringOverview: string;
  installationPrinciple: string;
  performanceNote: string;
  applications: string[];
  specs: ProductSpec[];
  imageUrl: string;
}

const PRODUCTS: ProductPillar[] = [
  {
    id: 'vertx-walls',
    index: '01',
    title: 'Carter Vert-X Walls',
    subtitle: 'Agrivoltaic & Perimeter Solar Fencing',
    description:
      'Turn boundary fences and agricultural paddocks into high-yield vertical power plants. Vert-X Walls preserve 100% of grazing and arable land while creating wind-sheltered microclimates that reduce soil moisture evaporation.',
    engineeringOverview:
      'Engineered with double-glass framed N-Type bifacial modules (550W–570W+) mounted in landscape orientation between 2.4m treated gum poles or hot-dip galvanized I-beams.',
    installationPrinciple:
      'Rapid pile-driven or augered perimeter post foundation. Bottom module edge is elevated 600mm to 1.2m+ above grade, allowing small livestock and grass maintenance equipment to pass safely without shading the lower cell strings.',
    performanceNote:
      'High-albedo ground preparation (such as exposed light sand or crushed aggregate within 1m of the fence line) reflects diffuse irradiance onto the rear N-Type cells, boosting current output by up to 20–30%.',
    applications: [
      'Commercial Grazing & Arable Farmland',
      'Solar Borehole & Irrigation VFD Pump Systems (0.5 HP – 1.5 HP+)',
      'Industrial Estate & Logistics Perimeter Security Walls',
      'Agri-Processing Cold Storage & Packhouses',
    ],
    specs: [
      { parameter: 'Module Technology', value: 'N-Type Double-Glass Bifacial (550W–570W+)' },
      { parameter: 'Mount Orientation', value: '90° Vertical (East-West or North-South)' },
      { parameter: 'Ground Clearance', value: '600 mm – 1,200+ mm (Livestock Safe)' },
      { parameter: 'Structural Posts', value: '2.4m Treated Gum Poles / Galvanized I-Beams' },
      { parameter: 'Bifacial Albedo Gain', value: 'Up to 20% – 30% (Surface Dependent)' },
      { parameter: 'Compliance', value: 'SANS 10142-1 COC & NDB Grant Ready' },
    ],
    imageUrl: 'images/vertx-agri-fence-4k.jpg',
  },
  {
    id: 'vertx-industrial',
    index: '02',
    title: 'Carter Vert-X Industrial',
    subtitle: 'Ultra-Lightweight Chemical-Bond Roof Racking',
    description:
      'Purpose-engineered for load-limited industrial warehouses, distribution centers, and retail malls that cannot support the 25 kg/m² dead load of conventional ballasted solar.',
    engineeringOverview:
      'Aerodynamic low-profile 90° vertical racking weighing under 10 kg/m² (including modules and sub-frame), eliminating concrete ballast blocks entirely.',
    installationPrinciple:
      'Chemically bonded directly to steel or membrane roof substrates using proprietary Sika® structural adhesive. Zero mechanical roof penetrations preserve existing waterproofing guarantees.',
    performanceNote:
      'Wind-tunnel tested up to 180 km/h with negative lift coefficients. Vertical 90° geometry prevents particulate fallout and industrial dust accumulation, maintaining consistent yield and clear HVAC maintenance corridors.',
    applications: [
      'Load-Limited Warehouse & Factory Roofs',
      'Shopping Centers & Retail Box Roofs (6 PM Peak Alignment)',
      'High-Particulate Industrial & Mining Zones',
      'Waterproof Membrane Roofs Prohibiting Penetrations',
    ],
    specs: [
      { parameter: 'System Distributed Weight', value: '< 10 kg/m² (Modules + Racking)' },
      { parameter: 'Mounting Method', value: 'Sika® Structural Chemical Bond (Zero Penetration)' },
      { parameter: 'Wind Load Rating', value: 'Hurricane Rated (Tested up to 180 km/h)' },
      { parameter: 'Tilt Geometry', value: '90° Vertical Self-Cleaning Profile' },
      { parameter: 'Performance Warranty', value: '25-Year Linear Module / 10-Year Racking' },
      { parameter: 'Tax Incentive Eligibility', value: 'SARS Section 12B (100% Year-1) & 12L' },
    ],
    imageUrl: 'images/vertx-warehouse-roof-4k.jpg',
  },
  {
    id: 'vertx-estate',
    index: '03',
    title: 'Carter Vert-X Estate',
    subtitle: 'Architectural Green-Roof & Eco-Estate Systems',
    description:
      'Discreet matte-black vertical solar architecture designed for green roofs, sectional-title estates, and contemporary commercial pavilions where visual harmony and vegetation preservation are paramount.',
    engineeringOverview:
      'Custom-spaced vertical bifacial arrays that allow natural rainfall and overhead midday sunlight to nourish indigenous rooftop flora beneath the solar canopy.',
    installationPrinciple:
      'Modular architectural stanchions integrated into green-roof substrate beds or parapet walls with concealed DC cable routing and rapid-shutdown safety compliance.',
    performanceNote:
      'Evapotranspiration from living green-roof plants cools the ambient microclimate around the vertical modules, mitigating thermal voltage drop during hot South African summer afternoons.',
    applications: [
      'Architectural Green Roofs & Living Canopies',
      'Luxury Eco-Estates & Sectional Title Developments',
      'Corporate Headquarter Campuses',
      'Boutique Hospitality & Wine Estates',
    ],
    specs: [
      { parameter: 'Aesthetic Finish', value: 'Anodized Matte Black Architectural Frame' },
      { parameter: 'Row Spacing', value: 'Customizable for Botanical Light Penetration' },
      { parameter: 'Thermal Synergy', value: 'Evaporative Plant Cooling Yield Assist' },
      { parameter: 'Grid Integration', value: 'Single-Phase & Three-Phase Hybrid Ready' },
      { parameter: 'Electrical Certification', value: 'SANS 10142-1 COC Issued per Installation' },
      { parameter: 'Maintenance Access', value: 'Full Walkable Corridor Clearance' },
    ],
    imageUrl: 'images/vertx-green-roof-4k.jpg',
  },
];

const PRODUCT_FAQS = [
  {
    q: 'How does a 90° vertical bifacial array compare to a traditional tilted roof array?',
    a: 'Traditional north-facing tilted arrays produce a single bell-curve peak around 12:00 PM, when grid electricity tariffs are typically lowest. A 90° East-West vertical bifacial module harvests solar irradiance from both sides—generating a strong morning peak (eastern face) and a late-afternoon peak (western face) that align directly with commercial and agricultural demand schedules.',
  },
  {
    q: 'Does chemical bonding on industrial roofs void existing waterproofing warranties?',
    a: 'No. Because Carter Vert-X Industrial racking uses Sika® structural adhesive rather than drilling bolts through roof sheeting or waterproof membranes, zero roof penetrations are made—preserving the building’s waterproofing integrity.',
  },
  {
    q: 'What inverter or controller specifications are required for vertical solar arrays?',
    a: 'Vertical arrays experience an intentional dip in direct irradiance right at solar noon when the sun is directly overhead. We specify hybrid inverters and Solar VFDs with a wide MPPT voltage operating window so the system transitions smoothly between the morning and afternoon peaks without tripping.',
  },
  {
    q: 'Are Carter Energy Solutions installations qualifying for SARS Section 12B tax deductions?',
    a: 'Yes. Under South African tax legislation (Section 12B), qualifying commercial solar photovoltaic systems under 1MW are eligible for a 100% upfront capital deduction against taxable income in Year 1, alongside extended Section 12L energy-efficiency allowances.',
  },
];

interface ServicePillarsProps {
  onOpenAgriSpecs?: () => void;
  onOpenTechSpecs?: () => void;
}

export const ServicePillars: React.FC<ServicePillarsProps> = ({
  onOpenAgriSpecs,
  onOpenTechSpecs,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [failedImg, setFailedImg] = useState<Record<number, boolean>>({});

  const currentProduct = PRODUCTS[currentIndex];

  const scrollToQuote = () => {
    const element = document.getElementById('get-quote');
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="service-pillars"
      className="py-24 md:py-32 border-b border-brand-charcoal/10 dark:border-brand-sage/10 transition-colors duration-500 bg-white dark:bg-brand-charcoal/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header + Interactive Product Selector Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold mb-3">
              02 · VERT-X PRODUCT ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-brand-forest dark:text-brand-ivory leading-tight">
              Vert-X Systems &amp; <span className="text-brand-gold-dark dark:text-brand-gold italic">Vert-X Walls.</span>
            </h2>
            <p className="mt-3 text-brand-charcoal/75 dark:text-brand-sage/85 font-light max-w-2xl">
              Engineered in South Africa for industrial roofs, agricultural perimeters, and architectural estates. Select a system below to inspect its technical specifications and installation methodology.
            </p>
          </div>

          {/* Segmented Product Selector */}
          <div className="inline-flex flex-wrap p-1.5 bg-brand-ivory dark:bg-brand-black rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15 gap-1 shrink-0">
            {PRODUCTS.map((product, idx) => (
              <button
                key={product.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-brand-forest dark:bg-brand-gold text-brand-ivory dark:text-brand-forest font-semibold shadow-sm'
                    : 'text-brand-charcoal/75 dark:text-brand-sage/80 hover:text-brand-forest dark:hover:text-brand-ivory'
                }`}
              >
                {product.index}. {product.title.replace('Carter ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Product Showcase Panel */}
        <AnimatePresence initial={false} mode="wait">
          <MotionDiv
            key={currentProduct.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-24"
          >
            {/* Left Column: Visual Asset + Installation & Performance Notes */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3] border border-brand-charcoal/10 dark:border-brand-sage/15 bg-brand-forest">
                {!failedImg[currentIndex] ? (
                  <img
                    src={currentProduct.imageUrl}
                    alt={currentProduct.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() =>
                      setFailedImg((prev) => ({
                        ...prev,
                        [currentIndex]: true,
                      }))
                    }
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-forest to-brand-charcoal flex items-center justify-center p-8 text-brand-ivory font-serif text-2xl">
                    {currentProduct.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-brand-ivory">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                    {currentProduct.index} · {currentProduct.subtitle}
                  </div>
                  <div className="text-2xl font-serif font-semibold mt-1">
                    {currentProduct.title}
                  </div>
                </div>
              </div>

              {/* Installation Principles & Performance Considerations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-brand-ivory dark:bg-brand-black rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-gold-dark dark:text-brand-gold mb-2">
                    Installation Principle
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoal/85 dark:text-brand-sage/90 font-light leading-relaxed">
                    {currentProduct.installationPrinciple}
                  </p>
                </div>
                <div className="p-6 bg-brand-ivory dark:bg-brand-black rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-gold-dark dark:text-brand-gold mb-2">
                    Performance Consideration
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoal/85 dark:text-brand-sage/90 font-light leading-relaxed">
                    {currentProduct.performanceNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Overview, Verified Specs Table, Applications & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-brand-ivory dark:bg-brand-black p-8 sm:p-10 rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-brand-gold-dark dark:text-brand-gold mb-2">
                  SYSTEM SPECIFICATION · {currentProduct.subtitle}
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-forest dark:text-brand-ivory mb-4">
                  {currentProduct.title}
                </h3>
                <p className="text-base text-brand-charcoal/85 dark:text-brand-sage/90 leading-relaxed font-light mb-4">
                  {currentProduct.description}
                </p>
                <p className="text-sm text-brand-charcoal/75 dark:text-brand-sage/75 leading-relaxed font-light mb-8">
                  {currentProduct.engineeringOverview}
                </p>

                {/* Verified Technical Specifications Table */}
                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-forest dark:text-brand-ivory font-semibold mb-3">
                    Verified Technical Specifications
                  </div>
                  <div className="border-t border-brand-charcoal/15 dark:border-brand-sage/15 divide-y divide-brand-charcoal/10 dark:divide-brand-sage/10">
                    {currentProduct.specs.map((spec) => (
                      <div
                        key={spec.parameter}
                        className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm"
                      >
                        <span className="text-brand-charcoal/70 dark:text-brand-sage/75 font-light">
                          {spec.parameter}
                        </span>
                        <span className="font-mono font-medium text-brand-forest dark:text-brand-ivory tabular-nums">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typical Applications (Unboxed Typography List) */}
                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-forest dark:text-brand-ivory font-semibold mb-3">
                    Verified Applications
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentProduct.applications.map((app) => (
                      <div
                        key={app}
                        className="text-xs sm:text-sm text-brand-charcoal/85 dark:text-brand-sage/90 flex items-center gap-2"
                      >
                        <span className="text-brand-gold font-bold" aria-hidden="true">
                          ·
                        </span>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-brand-charcoal/10 dark:border-brand-sage/15 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToQuote}
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-forest px-6 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors min-h-[46px] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Request System Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {currentIndex === 0 && onOpenAgriSpecs && (
                  <button
                    type="button"
                    onClick={onOpenAgriSpecs}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-brand-charcoal/20 dark:border-brand-sage/30 hover:border-brand-gold text-brand-forest dark:text-brand-ivory hover:text-brand-gold-dark dark:hover:text-brand-gold text-xs font-mono uppercase tracking-wider transition-colors min-h-[46px] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-brand-gold" />
                    <span>Inspect Pump &amp; Fence Kits</span>
                  </button>
                )}

                {onOpenTechSpecs && (
                  <button
                    type="button"
                    onClick={onOpenTechSpecs}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-brand-charcoal/20 dark:border-brand-sage/30 hover:border-brand-gold text-brand-forest dark:text-brand-ivory hover:text-brand-gold-dark dark:hover:text-brand-gold text-xs font-mono uppercase tracking-wider transition-colors min-h-[46px] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-brand-gold" />
                    <span>Industrial Datasheet (PDF)</span>
                  </button>
                )}
              </div>
            </div>
          </MotionDiv>
        </AnimatePresence>

        {/* Engineering Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-brand-charcoal/10 dark:border-brand-sage/15">
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold mb-2">
              TECHNICAL BRIEFING
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-forest dark:text-brand-ivory">
              Vert-X Engineering Frequently Asked Questions
            </h3>
          </div>

          <div className="divide-y divide-brand-charcoal/10 dark:divide-brand-sage/15 border-y border-brand-charcoal/10 dark:border-brand-sage/15">
            {PRODUCT_FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-serif font-semibold text-brand-forest dark:text-brand-ivory group-hover:text-brand-gold-dark dark:group-hover:text-brand-gold transition-colors">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm text-brand-charcoal/80 dark:text-brand-sage/85 leading-relaxed font-light pr-8">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};