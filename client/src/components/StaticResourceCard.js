import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const StaticResourceCard = ({ to, title, description, iconSrc, iconAlt }) => (
  <Link
    to={to}
    className="group flex h-full min-h-[268px] w-full max-w-[380px] flex-col p-6 sm:p-7 text-center rounded-2xl bg-[#0a254d] border border-sky-400/25 hover:border-[#ff6b1a]/60 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
  >
    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-[#030a17] shadow-sm ring-1 ring-sky-400/30 p-2">
      <img src={iconSrc} alt={iconAlt || ''} className="max-h-16 max-w-16 object-contain" loading="lazy" />
    </div>
    <h3 className="mb-2 line-clamp-3 text-xl font-bold text-white group-hover:text-sky-300 transition-colors">{title}</h3>
    <p className="line-clamp-3 flex-1 text-white font-bold text-sm leading-relaxed">{description}</p>
    <div className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#ff6b1a] group-hover:text-[#ff8c42]">
      Read
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#ff6b1a]" aria-hidden />
    </div>
  </Link>
);

export default StaticResourceCard;
