import React, { useState } from 'react';
import { TrendingUp, Zap, Info, FileText, ShieldCheck, Download, Compass } from 'lucide-react';
import { m as motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
import { RoiChart } from './RoiChart';

const MotionDiv = motion.div as any;

export const Calculator: React.FC = () => {
  const [bill, setBill] = useState<string>('12000');
  const [orientation, setOrientation] = useState<'east-west' | 'north-tilted'>('east-west');

  const monthlyBill = parseFloat(bill.replace(/[^0-9.]/g, '')) || 0;
  const yieldFactor = orientation === 'east-west' ? 0.45 : 0.41;
  const monthlySavings = (monthlyBill * yieldFactor).toFixed(0);
  const remainingBill = (monthlyBill * (1 - yieldFactor)).toFixed(0);
  const yearlySavings = (monthlyBill * 12 * yieldFactor).toFixed(0);
  const tenYearSavings = (monthlyBill * 12 * yieldFactor * 10 * 1.12).toFixed(0);

  // Preliminary engineering sizing estimates based on South African tariff (~R3.20/kWh) and specific yield (~5.0 kWh/kWp/day)
  const estimatedMonthlyKwhDemand = monthlyBill > 0 ? Math.round(monthlyBill / 3.2) : 0;
  const estimatedOffsetKwh = Math.round(estimatedMonthlyKwhDemand * yieldFactor);
  const recommendedKwp = monthlyBill > 0 ? Math.max(4.55, Number((estimatedOffsetKwh / 150).toFixed(1))) : 0;
  const estimatedPanels = monthlyBill > 0 ? Math.max(8, Math.ceil((recommendedKwp * 1000) / 550)) : 0;

  const exportToPDF = () => {
    if (monthlyBill <= 0) return;

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const drawDivider = (yPos: number, color: string = '#E2E8F0') => {
      doc.setDrawColor(color);
      doc.setLineWidth(0.3);
      doc.line(20, yPos, 190, yPos);
    };

    // Top Accent Border Line: Muted Gold
    doc.setFillColor('#D6BE82');
    doc.rect(0, 0, 210, 6, 'F');

    // Header Branding Section
    doc.setTextColor('#102C26');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('CENERGYS | CARTER ENERGY SOLUTIONS', 20, 24);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor('#64748B');
    doc.text('Carter Energy Solutions (Pty) Ltd | Reg: 2025/852718/07 | B-BBEE Level 1', 20, 29);
    doc.text('Tel: +27 60 292 4523 | Email: info@cenergys.space | https://cenergys.space', 20, 34);

    // Document Header Metadata (Right-Aligned)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor('#102C26');
    doc.text('PRELIMINARY FEASIBILITY SIMULATION', 190, 24, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#64748B');
    doc.text(`Generated: ${new Date().toLocaleDateString('en-ZA')}`, 190, 29, { align: 'right' });
    doc.text(`Ref Number: CES-ROI-${Math.floor(100000 + Math.random() * 900000)}`, 190, 34, { align: 'right' });

    drawDivider(40, '#D6BE82');

    // 1. EXECUTIVE INFRASTRUCTURE PROFILE
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#102C26');
    doc.text('1. PRELIMINARY ENGINEERING & SIZING PROFILE', 20, 48);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor('#334155');
    const introText =
      'This preliminary simulation provides indicative solar sizing, tariff offset estimates, and SARS Section 12B tax allowance context based on your monthly utility expenditure. Final energy yield depends on site-specific solar irradiance, roof or perimeter orientation, shading analysis, and formal SANS 10142-1 engineering design.';
    const splitIntro = doc.splitTextToSize(introText, 170);
    doc.text(splitIntro, 20, 53);

    // Target Grid Metrics Table Box
    doc.setFillColor('#F8FAFC');
    doc.setDrawColor('#E2E8F0');
    doc.setLineWidth(0.5);
    doc.rect(20, 66, 170, 34, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor('#475569');
    doc.text('MUNICIPAL SPEND PROFILE', 25, 72);
    doc.text('INDICATIVE SYSTEM SPECIFICATION', 110, 72);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text(`Monthly Utility Spend: R ${monthlyBill.toLocaleString()}`, 25, 79);
    doc.text(`Calculated Annual Spend: R ${(monthlyBill * 12).toLocaleString()}`, 25, 85);
    doc.text(`Estimated Demand: ~${estimatedMonthlyKwhDemand.toLocaleString()} kWh/mo`, 25, 91);

    let suggestedSystem = 'CES MINI / CORE System';
    if (monthlyBill > 7000) {
      suggestedSystem = 'CES MEGA / VERT-X COMMERCIAL';
    } else if (monthlyBill > 3500) {
      suggestedSystem = 'CES MAXI 3PH / ULTRA BIZ';
    } else if (monthlyBill > 2000) {
      suggestedSystem = 'CES ULTRA (Single Phase)';
    }

    doc.text(`Recommended Tier: ${suggestedSystem}`, 110, 79);
    doc.text(`Indicative Array Size: ~${recommendedKwp} kWp (${estimatedPanels}x 550W Panels)`, 110, 85);
    doc.text(
      `Array Geometry: ${orientation === 'east-west' ? '90° Vertical East-West Bifacial' : '25° North-Facing Monocrystalline'}`,
      110,
      91
    );

    // 2. FINANCIAL RETURN & ROI CUMULATIVE OFFSETS
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#102C26');
    doc.text('2. INDICATIVE CUMULATIVE OFFSET PROJECTIONS', 20, 112);

    doc.setFillColor('#102C26');
    doc.rect(20, 117, 170, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor('#FFFFFF');
    doc.text('Simulation Horizon', 24, 121.5);
    doc.text('Yield Assumption', 64, 121.5);
    doc.text('Tariff Escalation Basis', 108, 121.5);
    doc.text('Estimated Offset Value', 148, 121.5);

    // Row 1: Year 1
    doc.setFillColor('#FFFFFF');
    doc.rect(20, 124, 170, 7, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#475569');
    doc.text('Year 1 Annual Offset', 24, 128.5);
    doc.text(`Self-Consumption (${Math.round(yieldFactor * 100)}%)`, 64, 128.5);
    doc.text('Baseline Municipal Tariff', 108, 128.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#102C26');
    doc.text(`R ${Number(yearlySavings).toLocaleString()}`, 148, 128.5);

    // Row 2: Year 5
    doc.setFillColor('#F8FAFC');
    doc.rect(20, 131, 170, 7, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#475569');
    doc.text('Year 5 Cumulative Offset', 24, 135.5);
    doc.text('Dual-Peak Tariff Alignment', 64, 135.5);
    doc.text('12% p.a. Eskom/Municipal', 108, 135.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#102C26');
    const fiveYearSavings = (monthlyBill * 12 * yieldFactor * 5 * 1.06).toFixed(0);
    doc.text(`R ${Number(fiveYearSavings).toLocaleString()}`, 148, 135.5);

    // Row 3: Year 10
    doc.setFillColor('#FFFFFF');
    doc.rect(20, 138, 170, 7, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#475569');
    doc.text('Year 10 Cumulative Offset', 24, 142.5);
    doc.text('Bifacial / Mono Longevity', 64, 142.5);
    doc.text('Compounded Escalation', 108, 142.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#B0965A');
    doc.text(`R ${Number(tenYearSavings).toLocaleString()}`, 148, 142.5);

    drawDivider(149, '#E2E8F0');

    // 3. TAX & SARS INCENTIVES
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#102C26');
    doc.text('3. SOUTH AFRICAN TAX INCENTIVES (SECTION 12B & 12L)', 20, 159);

    doc.setFillColor('#FFFBEB');
    doc.setDrawColor('#FDE68A');
    doc.setLineWidth(0.4);
    doc.rect(20, 164, 170, 40, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor('#B45309');
    doc.text('SARS INCOME TAX ALLOWANCES', 25, 170);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#78350F');
    const sarsText1 =
      'Section 12B (Income Tax Act): Qualifying commercial renewable energy installations under 1 MW are eligible for a 100% accelerated depreciation allowance in Year 1 when brought into use for trade (subject to independent tax advisor verification).';
    const splitSars1 = doc.splitTextToSize(sarsText1, 160);
    doc.text(splitSars1, 25, 175);

    const sarsText2 =
      'Section 12L (Extended to 31 Dec 2030): Provides tax deductions for verified baseline energy efficiency savings measured in accordance with SANEDI regulations.';
    const splitSars2 = doc.splitTextToSize(sarsText2, 160);
    doc.text(splitSars2, 25, 191);

    // 4. ENGINEERING DISCLAIMER
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor('#102C26');
    doc.text('4. ENGINEERING & GOVERNANCE NOTICE', 20, 215);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#475569');
    const disclaimerText =
      'Notice: This document represents a preliminary desk simulation and does not constitute a guaranteed financial return or binding engineering quotation. Actual photovoltaic output varies according to local solar irradiation, ambient temperature, shading, structural azimuth, and utility tariff structures. A formal site audit is required prior to EPC contracting.';
    doc.text(doc.splitTextToSize(disclaimerText, 170), 20, 221);

    // Footer Block
    doc.setFillColor('#102C26');
    doc.rect(0, 278, 210, 19, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor('#D6BE82');
    doc.text('CARTER ENERGY SOLUTIONS (PTY) LTD — CENERGYS', 20, 285);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor('#F5F3EB');
    doc.text(
      'CIPC: 2025/852718/07 | SARS Tax: 9218382282 | CETA Heights: PSBE/ROY/20/100 | SANS 10142-1 COC',
      20,
      290
    );

    doc.save(`Cenergys_Feasibility_Simulation_R${monthlyBill}.pdf`);
  };

  return (
    <MotionDiv
      id="calculator"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="dark:bg-brand-charcoal/80 bg-white p-8 md:p-10 rounded-sm border dark:border-white/10 border-brand-forest/15 shadow-xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none">
        <Zap className="w-36 h-36 text-brand-gold" />
      </div>

      <div className="relative z-10">
        <div className="mb-8 border-b border-brand-forest/10 dark:border-white/10 pb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold block mb-2">
            PRELIMINARY SOLAR SUITABILITY &amp; YIELD SIMULATOR
          </span>
          <h3 className="text-2xl md:text-3xl font-serif dark:text-brand-ivory text-brand-forest mb-2">
            Estimate Vert-X &amp; Hybrid System Output
          </h3>
          <p className="dark:text-brand-sage text-slate-600 font-light text-sm leading-relaxed">
            Model your indicative array capacity, monthly kWh production, and 20-year cumulative tariff offset based on your current electricity expenditure.
          </p>
        </div>

        <div className="space-y-6">
          {/* Array Architecture Toggle */}
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-brand-sage mb-2.5">
              1. Select Installation Geometry
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setOrientation('east-west')}
                className={`p-3 rounded-sm border text-left transition-all ${
                  orientation === 'east-west'
                    ? 'bg-brand-forest text-brand-ivory border-brand-gold'
                    : 'bg-brand-ivory/50 dark:bg-brand-black/40 text-slate-700 dark:text-brand-sage border-brand-forest/10 dark:border-white/10 hover:border-brand-gold/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-semibold">90° Vertical Bifacial</span>
                  <Compass className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <span className="block text-[11px] opacity-80">East-West Dual-Peak (Morning &amp; Evening)</span>
              </button>

              <button
                type="button"
                onClick={() => setOrientation('north-tilted')}
                className={`p-3 rounded-sm border text-left transition-all ${
                  orientation === 'north-tilted'
                    ? 'bg-brand-forest text-brand-ivory border-brand-gold'
                    : 'bg-brand-ivory/50 dark:bg-brand-black/40 text-slate-700 dark:text-brand-sage border-brand-forest/10 dark:border-white/10 hover:border-brand-gold/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-semibold">North Tilted Mono</span>
                  <Compass className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <span className="block text-[11px] opacity-80">Standard Midday Peak Curve</span>
              </button>
            </div>
          </div>

          {/* Monthly Bill Input */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="bill"
                  className="block font-mono text-[10px] uppercase tracking-[0.2em] dark:text-brand-gold text-brand-gold-dark font-semibold"
                >
                  2. Monthly Electricity Spend (ZAR)
                </label>
                <div className="group/tooltip relative">
                  <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                  <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-brand-forest text-brand-ivory text-xs rounded-sm shadow-lg z-50 pointer-events-none">
                    Enter your average monthly Eskom or Municipal electricity invoice in South African Rand (ZAR).
                  </div>
                </div>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-brand-sage/60">
                Benchmarks
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {[
                { label: 'R2,500', value: '2500', desc: 'Residential' },
                { label: 'R5,000', value: '5000', desc: 'Large Estate' },
                { label: 'R12,000', value: '12000', desc: 'Commercial' },
                { label: 'R35,000', value: '35000', desc: 'Agri / Factory' }
              ].map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setBill(p.value)}
                  className={`py-2 px-3 rounded-sm text-center transition-all border ${
                    bill === p.value
                      ? 'bg-brand-gold border-brand-gold text-brand-black font-bold'
                      : 'bg-brand-ivory/50 hover:bg-brand-ivory dark:bg-brand-black/50 dark:hover:bg-white/10 dark:text-brand-ivory text-brand-forest border-brand-forest/10 dark:border-white/10 text-xs'
                  }`}
                >
                  <div className="font-mono font-semibold tabular-nums">{p.label}</div>
                  <div className="text-[10px] opacity-75 font-normal leading-none mt-0.5">{p.desc}</div>
                </button>
              ))}
            </div>

            <div className="relative group mb-3">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-brand-sage text-slate-500 text-2xl font-mono pointer-events-none group-focus-within:text-brand-gold transition-colors">
                R
              </span>
              <input
                type="number"
                id="bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="12000"
                className="w-full bg-brand-ivory/40 dark:bg-brand-black/60 border border-brand-forest/15 dark:border-white/15 rounded-sm py-3.5 pl-12 pr-4 dark:text-brand-ivory text-brand-forest placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-2xl font-mono tabular-nums transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* Preliminary Engineering Sizing Strip */}
            {monthlyBill > 0 && (
              <div className="p-4 bg-brand-ivory/70 dark:bg-brand-black/60 rounded-sm border border-brand-forest/10 dark:border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-brand-sage">Recommended Architecture:</span>
                  <span className="font-mono font-semibold text-brand-forest dark:text-brand-gold">
                    {monthlyBill > 7000
                      ? 'CES MEGA / VERT-X INDUSTRIAL'
                      : monthlyBill > 3500
                        ? 'CES MAXI 3PH / ULTRA BIZ'
                        : monthlyBill > 2000
                          ? 'CES ULTRA (Single Phase)'
                          : 'CES MINI / CORE System'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-brand-forest/10 dark:border-white/10 text-center">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-brand-sage/70">
                      Est. Array Size
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-forest dark:text-brand-ivory tabular-nums">
                      ~{recommendedKwp} kWp
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-brand-sage/70">
                      Solar Production
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-forest dark:text-brand-ivory tabular-nums">
                      ~{estimatedOffsetKwh.toLocaleString()} kWh/mo
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-brand-sage/70">
                      Module Count
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-forest dark:text-brand-ivory tabular-nums">
                      ~{estimatedPanels} × 550W
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Savings Readouts */}
          <div className="space-y-5 pt-2">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-brand-forest/10 dark:border-white/10 text-left">
              <div className="space-y-1">
                <span className="text-[10px] dark:text-brand-gold text-brand-gold-dark font-mono uppercase tracking-widest font-semibold">
                  Est. Monthly Offset
                </span>
                <p className="text-2xl sm:text-3xl font-serif font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
                  R {monthlyBill > 0 ? Number(monthlySavings).toLocaleString() : '0'}
                </p>
                <span className="text-[10px] dark:text-brand-sage text-slate-500 block leading-tight">
                  {Math.round(yieldFactor * 100)}% Indicative Tariff Deflection
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 dark:text-brand-sage/80 font-mono uppercase tracking-widest font-semibold">
                  Est. Residual Grid Bill
                </span>
                <p className="text-2xl sm:text-3xl font-serif font-semibold dark:text-brand-ivory text-brand-forest tabular-nums">
                  R {monthlyBill > 0 ? Number(remainingBill).toLocaleString() : '0'}
                </p>
                <span className="text-[10px] dark:text-brand-sage text-slate-500 block leading-tight">
                  Post-installation net utility spend
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-gold/15 rounded-sm">
                  <TrendingUp className="w-4 h-4 text-brand-gold-dark dark:text-brand-gold" />
                </div>
                <span className="dark:text-brand-ivory text-brand-forest text-sm font-light">
                  Indicative Year-1 Savings
                </span>
              </div>
              <p className="text-2xl font-serif dark:text-brand-ivory text-brand-forest font-medium tabular-nums">
                R {monthlyBill > 0 ? Number(yearlySavings).toLocaleString() : '0'}
              </p>
            </div>

            <div className="h-px bg-brand-forest/10 dark:bg-white/10" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="dark:text-brand-ivory text-brand-forest text-sm font-light">
                  10-Year Cumulative Offset
                </span>
                <div className="group/tooltip relative">
                  <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                  <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-brand-forest text-brand-ivory text-xs rounded-sm shadow-lg z-50 pointer-events-none">
                    Indicative 10-year cumulative tariff savings modeled with a 12% annual utility tariff escalation assumption.
                  </div>
                </div>
              </div>
              <p className="text-2xl font-serif text-brand-gold-dark dark:text-brand-gold font-semibold tabular-nums">
                R {monthlyBill > 0 ? Number(tenYearSavings).toLocaleString() : '0'}
              </p>
            </div>
          </div>

          {/* Dynamic 20-Year D3 Investment & ROI Chart */}
          <div className="border-t border-brand-forest/10 dark:border-white/10 pt-5">
            <RoiChart monthlyBill={monthlyBill} />
          </div>

          {/* Section 12B & 12L Tax Incentive Box */}
          <div className="p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
              <FileText className="w-20 h-20 text-brand-gold" />
            </div>
            <div className="relative z-10">
              <h4 className="flex items-center gap-2 font-mono font-bold dark:text-brand-gold text-brand-gold-dark mb-1.5 text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> SARS Section 12B &amp; 12L Tax Allowances
              </h4>
              <p className="text-xs dark:text-brand-sage text-slate-700 leading-relaxed">
                <strong className="text-brand-forest dark:text-brand-ivory">Section 12B:</strong> Qualifying commercial PV systems &lt;1 MW are eligible for a 100% Year-1 accelerated depreciation allowance.{' '}
                <strong className="text-brand-forest dark:text-brand-ivory">Section 12L:</strong> Energy efficiency allowances remain active through 31 Dec 2030.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={exportToPDF}
            disabled={monthlyBill === 0}
            className={`w-full flex items-center justify-center gap-2.5 font-mono text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-sm transition-all duration-300 ${
              monthlyBill > 0
                ? 'bg-brand-gold text-brand-black hover:bg-brand-forest hover:text-brand-ivory cursor-pointer shadow-md'
                : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-slate-200 dark:border-white/5'
            }`}
          >
            <Download className="w-4 h-4" />
            {monthlyBill > 0 ? 'Download Preliminary Engineering PDF' : 'Enter Monthly Spend to Export PDF'}
          </button>

          <p className="text-[11px] dark:text-brand-sage/70 text-slate-500 leading-relaxed">
            *Engineering Notice: All figures above are preliminary simulations based on typical South African irradiation (~4.8–5.5 kWh/kWp/day) and municipal tariff structures. They do not constitute a financial guarantee. Formal engineering assessment is required.
          </p>
        </div>
      </div>
    </MotionDiv>
  );
};