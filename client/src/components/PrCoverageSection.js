import React, { useState, useEffect } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import axios from 'axios';

const DEFAULT_PR_LINKS = [
  { id: '1', title: 'Yahoo Finance', url: 'https://finance.yahoo.com', logoUrl: 'https://img.icons8.com/color/144/yahoo.png', active: true },
  { id: '2', title: 'Bloomberg', url: 'https://www.bloomberg.com', logoUrl: 'https://img.icons8.com/color/144/bloomberg.png', active: true },
  { id: '3', title: 'CoinDesk', url: 'https://www.coindesk.com', logoUrl: 'https://img.icons8.com/color/144/bitcoin.png', active: true },
  { id: '4', title: 'Cointelegraph', url: 'https://cointelegraph.com', logoUrl: 'https://img.icons8.com/color/144/ethereum.png', active: true }
];

const PrCoverageSection = () => {
  const [prLinks, setPrLinks] = useState(DEFAULT_PR_LINKS);

  useEffect(() => {
    loadPrLinks();
    window.addEventListener('datastore:update', loadPrLinks);
    return () => window.removeEventListener('datastore:update', loadPrLinks);
  }, []);

  const loadPrLinks = async () => {
    try {
      const res = await axios.get('/api/settings/PR_LINKS');
      const val = res.data?.data?.value;
      if (Array.isArray(val) && val.length > 0) {
        setPrLinks(val.filter(item => item.active !== false));
      }
    } catch (_) {}
  };

  const activeLinks = prLinks.filter(item => item.active !== false);
  if (activeLinks.length === 0) return null;

  return (
    <section className="w-full bg-slate-50 border-y border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <h3 className="text-slate-900 font-extrabold text-base sm:text-lg mb-5 tracking-tight flex items-center justify-center gap-2">
          <span>As Seen On</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-700 font-bold">Verified Press</span>
        </h3>

        {/* Logos grid / row */}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 md:gap-5">
          {activeLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-[#071d3d] hover:bg-[#0c2e5c] border border-sky-400/25 hover:border-[#A85830]/60 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
              title={`Read PR coverage on ${item.title}`}
            >
              <div className="w-6 h-6 rounded-lg bg-[#020817] p-0.5 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={item.logoUrl}
                  alt={item.title}
                  className="w-full h-full object-contain filter brightness-95 group-hover:brightness-110"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://img.icons8.com/color/144/news.png'; }}
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                {item.title}
              </span>
              <ExternalLink className="w-3 h-3 text-sky-400/60 group-hover:text-[#A85830] opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrCoverageSection;
