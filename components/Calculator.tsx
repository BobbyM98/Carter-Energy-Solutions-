import React, { useState } from 'react';
import { TrendingUp, Zap, Info, FileText, ShieldCheck, Download } from 'lucide-react';
import { m as motion } from 'framer-motion';
import { jsPDF } from 'jspdf';

const MotionDiv = motion.div as any;

export const Calculator: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  
  // Adjusted calculation logic to reflect higher efficiency of vertical/bifacial systems
  const monthlyBill = parseFloat(bill.replace(/[^0-9.]/g, '')) || 0;
  const yearlySavings = (monthlyBill * 12 * 0.45).toFixed(0); // slightly higher yield factor for bifacial
  const tenYearSavings = (monthlyBill * 12 * 0.45 * 10 * 1.12).toFixed(0); // compounding tariff increase

  const exportToPDF = () => {
    if (monthlyBill <= 0) return;

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Custom helper to draw a horizontal rule
    const drawDivider = (yPos: number, color: string = '#E2E8F0') => {
      doc.setDrawColor(color);
      doc.setLineWidth(0.3);
      doc.line(20, yPos, 190, yPos);
    };

    // Top Accent Border Line: Carter Gold
    doc.setFillColor('#CCA43B');
    doc.rect(0, 0, 210, 6, 'F');

    // Header Branding Section
    doc.setTextColor('#0F172A');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('CARTER ENERGY SOLUTIONS', 20, 24);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor('#64748B');
    doc.text('Advanced Commercial & Residential Solar EPC Specifier', 20, 29);
    doc.text('Tel: +27 60 292 4523 | Email: info@cenergys.space', 20, 34);

    // Document Header Metadata (Right-Aligned)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor('#0F172A');
    doc.text('FEASIBILITY & ROI SIMULATION', 190, 24, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#64748B');
    doc.text(`Generated: ${new Date().toLocaleDateString('en-ZA')}`, 190, 29, { align: 'right' });
    doc.text(`Ref Number: CES-ROI-${Math.floor(100000 + Math.random() * 900000)}`, 190, 34, { align: 'right' });

    drawDivider(40, '#CCA43B');

    // 1. EXECUTIVE INFRASTRUCTURE PROFILE
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#0F172A');
    doc.text('1. EXECUTIVE INFRASTRUCTURE PROFILE', 20, 48);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor('#334155');
    const introText = "This detailed investment outline delivers targeted yield simulations, tax deductions, and compounding annual offsets calculated specifically for your site's monthly utility spend. Values are optimized for Carter Energy Solutions' high-performance vertical bifacial arrays and noon-shaving inverters.";
    const splitIntro = doc.splitTextToSize(introText, 170);
    doc.text(splitIntro, 20, 53);

    // Target Grid Metrics Table Box
    doc.setFillColor('#F8FAFC');
    doc.setDrawColor('#E2E8F0');
    doc.setLineWidth(0.5);
    doc.rect(20, 64, 170, 34, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor('#475569');
    doc.text('MUNICIPAL SPEND PROFILE', 25, 70);
    doc.text('ESTIMATED PEAK SPECIFICATION', 110, 70);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text(`Monthly Utility Spend: R ${monthlyBill.toLocaleString()}`, 25, 77);
    doc.text(`Calculated Annual Spend: R ${(monthlyBill * 12).toLocaleString()}`, 25, 83);
    doc.text('Municipal Surcharge Class: Residential/Commercial', 25, 89);
    
    // Suggest system classes dynamically based on bill input matching actual web options
    let suggestedSystem = "CES MINI / CORE System";
    let panelsEst = "10 Solar Panels (4.55kWp)";
    if (monthlyBill > 7000) {
      suggestedSystem = "CES MEGA / LIFT SERIES (Commercial-Grid)";
      panelsEst = "30+ High-Density bifacial solar panels";
    } else if (monthlyBill > 3500) {
      suggestedSystem = "CES MAXI 3PH / ULTRA BIZ";
      panelsEst = "19-26 High-Yield vertical panels";
    } else if (monthlyBill > 2000) {
      suggestedSystem = "CES ULTRA (Single Phase)";
      panelsEst = "14 Premium Panels (6.37kWp)";
    }

    doc.text(`Optimized Selection: ${suggestedSystem}`, 110, 77);
    doc.text(`Panel Density Estimate: ${panelsEst}`, 110, 83);
    doc.text('Support Mounting: 90° Vertical / Tilted Dual-Mount', 110, 89);

    // 2. FINANCIAL RETURN & ROI CUMULATIVE OFFSETS
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#0F172A');
    doc.text('2. CUMULATIVE VALUE & ROI PROJECTIONS', 20, 110);

    // Let's draw a professional data table
    doc.setFillColor('#0F172A');
    doc.rect(20, 115, 170, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor('#FFFFFF');
    doc.text('Simulation Horizon', 24, 119.5);
    doc.text('Yield Factors', 64, 119.5);
    doc.text('Compounding Grid Inflation', 104, 119.5);
    doc.text('Projected Financial Savings', 144, 119.5);

    // Row 1: Year 1
    doc.setFillColor('#FFFFFF');
    doc.rect(20, 122, 170, 7, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#475569');
    doc.text('Year 1 Annual Savings', 24, 126.5);
    doc.text('Vertical Bifacial Peak (45%)', 64, 126.5);
    doc.text('Baseline Tariff Cost', 104, 126.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#0F172A');
    doc.text(`R ${Number(yearlySavings).toLocaleString()}`, 144, 126.5);

    // Row 2: Year 5
    doc.setFillColor('#F8FAFC');
    doc.rect(20, 129, 170, 7, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#475569');
    doc.text('Year 5 Cumulative Savings', 24, 133.5);
    doc.text('AI Optimised Shift (18%+)', 64, 133.5);
    doc.text('Average 12% p.a. Inflation', 104, 133.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#0F172A');
    const fiveYearSavings = (monthlyBill * 12 * 0.45 * 5 * 1.06).toFixed(0);
    doc.text(`R ${Number(fiveYearSavings).toLocaleString()}`, 144, 133.5);

    // Row 3: Year 10
    doc.setFillColor('#FFFFFF');
    doc.rect(20, 136, 170, 7, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#475569');
    doc.text('Year 10 Cumulative Savings', 24, 140.5);
    doc.text('Double-Sided Daybreak Arc', 64, 140.5);
    doc.text('Fully Deflected Tariff', 104, 140.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#CCA43B');
    doc.text(`R ${Number(tenYearSavings).toLocaleString()}`, 144, 140.5);

    drawDivider(147, '#E2E8F0');

    // 3. TAX & SARS INCENTIVES
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#0F172A');
    doc.text('3. SOUTH AFRICAN TAX INCENTIVES (SECTION 12B & 12L)', 20, 157);

    doc.setFillColor('#FFFBEB');
    doc.setDrawColor('#FDE68A');
    doc.setLineWidth(0.4);
    doc.rect(20, 162, 170, 42, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor('#B45309');
    doc.text('SARS INCOME TAX ADVANTAGES (2026 UPDATE)', 25, 168);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#78350F');
    const sarsText1 = "Section 12B (SARS): Enables businesses to fully deduct 100% of their investment cost directly against corporate income tax in the initial tax year for qualified systems under 1MW. At the standard corporate tax margin of 27%, this results in an immediate 27% baseline saving of your setup cost during your next SARS filing window.";
    const splitSars1 = doc.splitTextToSize(sarsText1, 160);
    doc.text(splitSars1, 25, 173);

    const sarsText2 = "Section 12L (Extended to Dec 2030): Energy efficiency tax incentives continue to reward operators with rich deductions per verified gigajoule or equivalent kilowatt-hour of baseline mechanical energy saved.";
    const splitSars2 = doc.splitTextToSize(sarsText2, 160);
    doc.text(splitSars2, 25, 191);

    // 4. TECHNOLOGY DIFFERENTIATORS
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#0F172A');
    doc.text('4. CARTER VERTICAL BIFACIAL & INTELLIGENT TECHNOLOGY ADVANTAGES', 20, 215);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#334155');
    
    const points = [
      { t: "Dynamic Dual-Peak Energy Mapping", d: "A standard flat layout peaks exclusively at high noon when tariffs are lowest. Carter's 90-degree systems yield dual generation peaks during breakfast and office hours matching peak demand grids." },
      { t: "Zero-Water Surface Gravity Shedding", d: "Horizontal arrays deteriorate rapidly due to dust and sand build-ups. Vertical modules clean themselves naturally via standard gravity runoff, saving water and keeping optimal cells safe." },
      { t: "Waterproof Racking Policies Active", d: "Because we bond lightweight arrays chemically or mount on existing perimeter wall bounds or perimeter fences, your roof membrane waterproofing is never punctured or altered." }
    ];

    let pointY = 221;
    points.forEach((p) => {
      doc.setFillColor('#CCA43B');
      doc.circle(23, pointY + 1.2, 0.8, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setTextColor('#0F172A');
      doc.text(p.t, 27, pointY + 2);
      
      doc.setFont('helvetica', 'normal');
      doc.setTextColor('#475569');
      const textWidth = doc.splitTextToSize(p.d, 155);
      doc.text(textWidth, 27, pointY + 5.5);
      
      pointY += 13;
    });

    // Elegant Sign-off Footer Block at the bottom
    doc.setFillColor('#0F172A');
    doc.rect(0, 278, 210, 19, 'F');
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor('#CCA43B');
    doc.text('CARTER ENERGY SOLUTIONS (PTY) LTD', 20, 285);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor('#E2E8F0');
    doc.text('Level 1 B-BBEE Contributor | Certified Vertical Bifacial Engineering EPC | Gauteng & Vaal-Region SA', 20, 289);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#FFFFFF');
    doc.text('Page 1 of 1', 190 - 15, 287);

    doc.save(`Carter_Energy_Solutions_ROI_Saves_${monthlyBill}.pdf`);
  };

  return (
    <MotionDiv 
      id="calculator"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="dark:bg-brand-black bg-white p-8 md:p-12 rounded-sm border dark:border-white/10 border-slate-200 shadow-2xl dark:shadow-black/50 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Zap className="w-40 h-40 text-brand-gold" />
      </div>
      
      <div className="relative z-10">
        <div className="mb-10">
          <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-2">Estimate Vert-X Yield</h3>
          <p className="dark:text-slate-400 text-slate-500 font-light">Enter your monthly electricity spend to see the potential savings of a high-yield Vert-X system.</p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
                <label htmlFor="bill" className="block text-xs uppercase tracking-widest dark:text-brand-gold text-brand-gold-dark font-semibold">
                Monthly Bill (ZAR)
                </label>
                {/* Tooltip for ZAR */}
                <div className="group/tooltip relative">
                    <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                    <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-xs rounded-md shadow-lg z-50 pointer-events-none">
                        South African Rand (R). Please enter your average monthly electricity bill.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                    </div>
                </div>
            </div>
            
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-500 text-2xl font-light pointer-events-none group-focus-within:text-brand-gold transition-colors">R</span>
              <input
                type="number"
                id="bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="25000"
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-4 pl-12 pr-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-3xl font-light transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div className="space-y-6 pt-4">
             <div className="flex items-center justify-between group/item">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-gold/10 rounded-full">
                        <TrendingUp className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="dark:text-slate-300 text-slate-600 font-light">Projected Annual Savings</span>
                </div>
                <p className="text-3xl font-serif dark:text-white text-brand-black">
                    R {monthlyBill > 0 ? Number(yearlySavings).toLocaleString() : '0'}
                </p>
             </div>
             
             <div className="h-px bg-slate-200 dark:bg-white/10"></div>

             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="dark:text-slate-300 text-slate-600 font-light">10-Year Value (Bifacial)</span>
                    {/* Tooltip for 10-Year Value */}
                    <div className="group/tooltip relative">
                        <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                        <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-md shadow-lg z-50 pointer-events-none">
                             Estimated cumulative savings over 10 years, accounting for a 12% annual tariff increase and superior bifacial generation performance.
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                        </div>
                    </div>
                </div>
                <p className="text-3xl font-serif text-brand-gold">
                    R {monthlyBill > 0 ? Number(tenYearSavings).toLocaleString() : '0'}
                </p>
             </div>
          </div>
          
          {/* Section 12B & 12L Tax Incentive Box */}
          <div className="mt-8 p-5 bg-brand-gold/10 border border-brand-gold/30 rounded-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                <FileText className="w-24 h-24 text-brand-gold" />
             </div>
             <div className="relative z-10">
                <h4 className="flex items-center gap-2 font-serif font-bold dark:text-brand-gold text-brand-gold-dark mb-2 text-sm uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 fill-current" /> Tax Incentives (2026)
                </h4>
                <div className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-3 space-y-2">
                    <p>
                        <strong className="text-brand-black dark:text-white block">Section 12B (Active):</strong> 
                        Reverts to a <span className="underline decoration-brand-gold underline-offset-2 font-bold decoration-2">100% upfront deduction</span> for solar PV &lt;1MW (or 50/30/20% split for &gt;1MW).
                    </p>
                    <p>
                        <strong className="text-brand-black dark:text-white block">Section 12L (Extended):</strong> 
                        Energy-efficiency tax incentives confirmed until <span className="font-semibold text-brand-gold-dark dark:text-brand-gold">31 Dec 2030</span>.
                    </p>
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={exportToPDF}
              className={`w-full flex items-center justify-center gap-2.5 font-bold uppercase tracking-wider py-4 px-6 rounded-lg transition-all duration-300 ${
                monthlyBill > 0
                  ? 'bg-brand-gold text-brand-black hover:bg-yellow-500 active:scale-[0.98] cursor-pointer shadow-lg shadow-brand-gold/10'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-slate-200 dark:border-white/5'
              }`}
              disabled={monthlyBill === 0}
            >
              <Download className="w-5 h-5" />
              {monthlyBill > 0 ? 'Export Professional ROI PDF' : 'Enter Bill Above to Export Report'}
            </button>
          </div>

          <p className="text-xs dark:text-slate-500 text-slate-400 mt-6 italic">
            *Projections include East/West peak tariff offset and reduced cleaning maintenance costs.
          </p>
        </div>
      </div>
    </MotionDiv>
  );
};