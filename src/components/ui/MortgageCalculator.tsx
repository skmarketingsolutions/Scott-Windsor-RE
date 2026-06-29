"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/utils";

interface MortgageCalculatorProps {
  defaultPrice?: number;
}

export default function MortgageCalculator({
  defaultPrice = 300000,
}: MortgageCalculatorProps) {
  const [price, setPrice] = useState(defaultPrice);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.875);
  const [term, setTerm] = useState(30);

  const loanAmount = price * (1 - down / 100);
  const monthlyRate = rate / 100 / 12;
  const payments = term * 12;
  const monthly =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, payments)) /
    (Math.pow(1 + monthlyRate, payments) - 1);

  const downPaymentAmount = price * (down / 100);

  return (
    <div className="bg-offwhite p-6 md:p-8">
      <h3 className="font-playfair text-xl font-bold text-navy mb-6">
        Mortgage Calculator
      </h3>

      <div className="space-y-5">
        <div>
          <label className="form-label">Home Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="form-input pl-7"
            />
          </div>
        </div>

        <div>
          <label className="form-label">Down Payment ({down}%) — {formatPrice(downPaymentAmount)}</label>
          <input
            type="range"
            min={3}
            max={50}
            step={1}
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <div>
          <label className="form-label">Interest Rate ({rate}%)</label>
          <input
            type="range"
            min={3}
            max={12}
            step={0.125}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <div>
          <label className="form-label">Loan Term</label>
          <select
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="form-input"
          >
            <option value={30}>30 Years</option>
            <option value={20}>20 Years</option>
            <option value={15}>15 Years</option>
            <option value={10}>10 Years</option>
          </select>
        </div>
      </div>

      <div className="mt-6 p-5 bg-navy text-white">
        <p className="text-xs uppercase tracking-widest text-[#FF6B00] mb-1 font-inter">
          Estimated Monthly Payment
        </p>
        <p className="font-playfair text-3xl font-bold">
          {isNaN(monthly) ? "—" : `${formatPrice(monthly)}/mo`}
        </p>
        <p className="text-xs text-white/60 mt-2">
          Principal & interest only. Taxes, insurance, and HOA not included.
          Contact Scott for accurate local estimates.
        </p>
      </div>
    </div>
  );
}
