import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LIVE_RECOVERIES_DATA } from '../data/liveRecoveriesData';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

const LiveRecoveryNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before showing first notification
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(startTimeout);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let timer;
    if (isVisible) {
      // Stay visible for 4.5 seconds
      timer = setTimeout(() => {
        if (!isHoveredRef.current) {
          setIsVisible(false);
        }
      }, 4500);
    } else {
      // Stay hidden for 2.5 seconds before showing next item
      timer = setTimeout(() => {
        if (!isHoveredRef.current) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % LIVE_RECOVERIES_DATA.length);
          setIsVisible(true);
        }
      }, 2500);
    }

    return () => clearTimeout(timer);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = LIVE_RECOVERIES_DATA[currentIndex];
  if (!current) return null;

  return (
    <div 
      className="fixed bottom-5 left-4 sm:left-6 z-50 pointer-events-none select-none"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { 
        isHoveredRef.current = false;
        if (isVisible) {
          setTimeout(() => setIsVisible(false), 2500);
        }
      }}
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-white/95 hover:bg-white text-slate-800 shadow-[0_10px_35px_rgba(0,0,0,0.14)] border border-slate-200/90 backdrop-blur-md transition-all duration-200 max-w-[92vw] sm:max-w-md group"
          >
            {/* Pulsing Status Dot / Icon */}
            <div className="relative flex items-center justify-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            {/* Notification Text */}
            <div className="flex-1 min-w-0 pr-1 text-left">
              <p className="text-[13px] sm:text-[14px] text-slate-700 leading-snug">
                <span>{current.name}</span> from{' '}
                <strong className="font-bold text-slate-900">{current.country}</strong>{' '}
                just recovered{' '}
                <strong className="font-black text-emerald-600 sm:text-emerald-700 whitespace-nowrap">
                  {current.amount}
                </strong>
              </p>
              <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400 font-medium">
                <span className="inline-flex items-center gap-1 text-sky-600 font-semibold">
                  <ShieldCheck className="w-3 h-3" /> Verified Refund
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="shrink-0 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              title="Dismiss"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiveRecoveryNotification;
