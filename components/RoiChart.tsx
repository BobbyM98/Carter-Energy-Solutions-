import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface RoiChartProps {
  monthlyBill: number;
}

interface DataPoint {
  year: number;
  savings: number;
  cumulativeSavings: number;
  netPosition: number;
}

export const RoiChart: React.FC<RoiChartProps> = ({ monthlyBill }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 450, height: 260 });

  // 1. Projection Math
  const baseSavingsYr1 = monthlyBill * 12 * 0.45; // 45% annual offset with vertical bifacial array
  const estimatedCapex = Math.max(32000, monthlyBill * 9.2); // estimated system capex matching our tiers
  
  const data: DataPoint[] = [];
  let cumulative = 0;
  for (let year = 1; year <= 20; year++) {
    // Compounding 11% annual South African grid tariff inflation
    const yearSavings = baseSavingsYr1 * Math.pow(1.11, year - 1);
    cumulative += yearSavings;
    const netPosition = cumulative - estimatedCapex;
    data.push({
      year,
      savings: Math.round(yearSavings),
      cumulativeSavings: Math.round(cumulative),
      netPosition: Math.round(netPosition)
    });
  }

  // Find break-even year (where net position becomes positive)
  const breakEvenPoint = data.find(p => p.cumulativeSavings >= estimatedCapex);
  const breakEvenYear = breakEvenPoint ? breakEvenPoint.year : '4-5';

  // 2. Responsive container observer
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        // Keep a neat aspect ratio
        const newWidth = Math.max(280, width);
        const newHeight = Math.min(280, Math.max(220, newWidth * 0.55));
        setDimensions({ width: newWidth, height: newHeight });
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // 3. Render D3 Chart
  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0 || monthlyBill <= 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous drawing

    const margin = { top: 20, right: 25, bottom: 40, left: 65 };
    const chartWidth = dimensions.width - margin.left - margin.right;
    const chartHeight = dimensions.height - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Scale (Years 1 to 20)
    const xScale = d3.scaleLinear()
      .domain([1, 20])
      .range([0, chartWidth]);

    // Y Scale (Cumulative Savings)
    const maxSavings = data[data.length - 1].cumulativeSavings;
    const yScale = d3.scaleLinear()
      .domain([0, maxSavings * 1.05])
      .nice()
      .range([chartHeight, 0]);

    // Gridlines for visual accuracy
    const yGrid = d3.axisLeft(yScale)
      .tickSize(-chartWidth)
      .tickFormat(() => '')
      .ticks(5);

    g.append('g')
      .attr('class', 'grid')
      .style('stroke', 'rgba(148, 163, 184, 0.08)')
      .style('stroke-dasharray', '3,3')
      .call(yGrid);

    // X-Axis (Years)
    const xAxis = d3.axisBottom(xScale)
      .ticks(10)
      .tickFormat((d) => `Yr ${d}`);

    g.append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .attr('class', 'x-axis')
      .attr('color', 'rgba(148, 163, 184, 0.35)')
      .style('font-family', '"JetBrains Mono", monospace')
      .style('font-size', '10px')
      .call(xAxis);

    // Y-Axis (Currency)
    const yFormat = d3.format('.2s');
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickFormat((d) => `R ${yFormat(Number(d)).replace('G', 'M')}`); // format as million/k with SA Currency symbol

    g.append('g')
      .attr('class', 'y-axis')
      .attr('color', 'rgba(148, 163, 184, 0.35)')
      .style('font-family', '"JetBrains Mono", monospace')
      .style('font-size', '10px')
      .call(yAxis);

    // Gradient Area Shading under the curve
    const areaGenerator = d3.area<DataPoint>()
      .x(d => xScale(d.year))
      .y0(chartHeight)
      .y1(d => yScale(d.cumulativeSavings))
      .curve(d3.curveMonotoneX);

    // Gradient definition
    const defs = svg.append('defs');
    const areaGradient = defs.append('linearGradient')
      .attr('id', 'savings-area-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    areaGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#CCA43B')
      .attr('stop-opacity', 0.22);

    areaGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#CCA43B')
      .attr('stop-opacity', 0.0);

    g.append('path')
      .datum(data)
      .attr('class', 'area')
      .attr('d', areaGenerator)
      .attr('fill', 'url(#savings-area-gradient)');

    // CAPEX Upfront cost threshold line (horizontal reference)
    g.append('line')
      .attr('x1', 0)
      .attr('y1', yScale(estimatedCapex))
      .attr('x2', chartWidth)
      .attr('y2', yScale(estimatedCapex))
      .attr('stroke', 'rgba(239, 68, 68, 0.35)')
      .attr('stroke-width', 1.5)
      .style('stroke-dasharray', '5,5');

    // Label for CAPEX
    g.append('text')
      .attr('x', chartWidth - 8)
      .attr('y', yScale(estimatedCapex) - 6)
      .attr('text-anchor', 'end')
      .attr('fill', 'rgba(239, 68, 68, 0.8)')
      .style('font-family', 'sans-serif')
      .style('font-size', '8.5px')
      .style('font-weight', 'bold')
      .style('letter-spacing', '0.05em')
      .text('INITIAL INVESTMENT');

    // Main Cumulative Savings line path
    const lineGenerator = d3.line<DataPoint>()
      .x(d => xScale(d.year))
      .y(d => yScale(d.cumulativeSavings))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#CCA43B')
      .attr('stroke-width', 2.8)
      .attr('class', 'savings-line')
      .attr('d', lineGenerator);

    // Interactive Break-even point marker/circle
    if (breakEvenPoint) {
      g.append('circle')
        .attr('cx', xScale(breakEvenPoint.year))
        .attr('cy', yScale(breakEvenPoint.cumulativeSavings))
        .attr('r', 5.5)
        .attr('fill', '#CCA43B')
        .attr('stroke', '#0F172A')
        .attr('stroke-width', 2)
        .style('filter', 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))');

      // Pulsing glow Ring for Break-even Point
      g.append('circle')
        .attr('cx', xScale(breakEvenPoint.year))
        .attr('cy', yScale(breakEvenPoint.cumulativeSavings))
        .attr('r', 10)
        .attr('fill', 'none')
        .attr('stroke', '#CCA43B')
        .attr('stroke-width', 1)
        .attr('opacity', 0.6)
        .append('animate')
          .attr('attributeName', 'r')
          .attr('values', '6;15')
          .attr('dur', '2s')
          .attr('repeatCount', 'indefinite');

      g.append('text')
        .attr('x', xScale(breakEvenPoint.year))
        .attr('y', yScale(breakEvenPoint.cumulativeSavings) - 13)
        .attr('text-anchor', 'middle')
        .attr('fill', '#CCA43B')
        .style('font-family', '"JetBrains Mono", monospace')
        .style('font-weight', 'bold')
        .style('font-size', '9.5px')
        .text(`Breakeven: Yr ${breakEvenPoint.year}`);
    }

    // Add Interactive Hover Guidelines
    const hoverLine = g.append('line')
      .attr('y1', 0)
      .attr('y2', chartHeight)
      .attr('stroke', 'rgba(212, 175, 55, 0.25)')
      .attr('stroke-width', 1)
      .style('stroke-dasharray', '2,2')
      .style('opacity', 0);

    const hoverCircle = g.append('circle')
      .attr('r', 5.5)
      .attr('fill', '#0F172A')
      .attr('stroke', '#CCA43B')
      .attr('stroke-width', 2)
      .style('opacity', 0);

    // Invisible mouse tracker box
    g.append('rect')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .attr('fill', 'transparent')
      .style('cursor', 'crosshair')
      .on('mousemove', (event) => {
        const mouseX = d3.pointer(event)[0];
        const yearVal = Math.round(xScale.invert(mouseX));
        const matched = data.find(p => p.year === yearVal);

        if (matched) {
          const cx = xScale(matched.year);
          const cy = yScale(matched.cumulativeSavings);

          hoverLine.attr('x1', cx).attr('x2', cx).style('opacity', 1);
          hoverCircle.attr('cx', cx).attr('cy', cy).style('opacity', 1);

          // Update standard html panel or custom attributes via dynamic DOM text overlay if needed
          const detailsEl = document.getElementById('chart-hover-details');
          if (detailsEl) {
            detailsEl.innerHTML = `Year ${matched.year}: <strong class="text-brand-gold">R ${matched.cumulativeSavings.toLocaleString()}</strong> of cumulative in-pocket savings.`;
          }
        }
      })
      .on('mouseleave', () => {
        hoverLine.style('opacity', 0);
        hoverCircle.style('opacity', 0);
        const detailsEl = document.getElementById('chart-hover-details');
        if (detailsEl) {
          detailsEl.innerHTML = `Hover the ROI projection curve to see yearly highlights.`;
        }
      });

  }, [data, dimensions, monthlyBill]);

  if (monthlyBill <= 0) {
    return (
      <div className="h-[210px] flex flex-col items-center justify-center p-6 border border-dashed rounded-lg dark:border-white/10 border-slate-200 bg-slate-50 dark:bg-brand-black/20 text-center text-xs text-slate-400 dark:text-slate-500 font-sans">
        <span>Waiting for budget entry...</span>
        <span className="text-[10px] mt-1 opacity-85">Type your monthly bill above or select a preset to compute live ROI graphs.</span>
      </div>
    );
  }

  return (
    <div className="space-y-3 font-sans" ref={containerRef}>
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px] font-mono">
          20-Year Cumulative Savings Outline
        </span>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono px-2 py-0.5 rounded border border-emerald-500/20">
          Breakeven: ~{breakEvenYear} Years
        </span>
      </div>

      <div className="p-3 bg-slate-50 dark:bg-brand-charcoal/30 rounded-lg border dark:border-white/5 border-slate-100 flex items-center justify-center overflow-hidden">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="overflow-visible"
        />
      </div>

      <div 
        id="chart-hover-details"
        className="text-[10.5px] font-mono bg-slate-100 dark:bg-brand-black/40 border dark:border-white/5 border-slate-150 py-1.5 px-3 rounded text-center text-slate-500 dark:text-slate-400 min-h-[32px] flex items-center justify-center transition-all duration-200"
      >
        Hover the ROI projection curve to see yearly highlights.
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs pt-1">
        <div className="p-2 border dark:border-white/5 border-slate-150 rounded dark:bg-brand-charcoal/30 bg-white">
          <span className="text-[9px] text-slate-400 block uppercase tracking-wider font-mono">20-Yr Total Savings</span>
          <span className="text-sm font-bold text-brand-gold-dark dark:text-brand-gold">
            R {data[19]?.cumulativeSavings.toLocaleString() || '0'}
          </span>
        </div>
        <div className="p-2 border dark:border-white/5 border-slate-150 rounded dark:bg-brand-charcoal/30 bg-white">
          <span className="text-[9px] text-slate-400 block uppercase tracking-wider font-mono">Estimated Capex Cost</span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
            R {Math.round(estimatedCapex).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};
