import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Vote, TrendingUp, DollarSign, BarChart3, ArrowRight, CheckCircle, ShieldCheck, Sparkles, Activity, Lock, ArrowUpRight, Award } from 'lucide-react';
import StaticResourceCard from '../components/StaticResourceCard';
import LiveRecoveryNotification from '../components/LiveRecoveryNotification';
import { STATIC_FEATURED_RESOURCES } from '../data/staticFeaturedResources';
import heroVisual from '../assets/hero-visual.jpg';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const ref = params.get('ref');
      if (ref) localStorage.setItem('landingReferralCode', ref);
    } catch {}
  }, [location.search]);

  const features = [
    {
      icon: DollarSign,
      title: 'Proof-of-Loss Tokens (RFND)',
      description: 'Eligible victims receive non-transferable on-chain tokens representing verified losses, granting access to private liquidity pools for secure fund recovery.'
    },
    {
      icon: TrendingUp,
      title: 'Restitution Distribution',
      description: 'Recovered cryptocurrency from government actions and civil forfeitures is pooled into secure smart contracts for automated, fair distribution.'
    },
    {
      icon: BarChart3,
      title: 'Victim Verification',
      description: 'Strict verification protocols ensure only legitimate scam victims can claim tokens and participate in the restitution process.'
    },
    {
      icon: Vote,
      title: 'Community Governance',
      description: 'Participate in transparent voting to provide feedback on recovery campaigns and fund distribution, helping improve future efforts and promote accountability.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020817]">
      {/* 
        ============================================================
        WAKEFLY CINEMATIC COBALT & ORANGE HERO WITH WEB3 SIGNALS
        ============================================================
      */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-start overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 in-slideshow-gradient"
        style={{
          marginTop: '-5rem',
          paddingTop: '6.5rem',
          paddingBottom: '3.5rem',
          minHeight: '100vh'
        }}
      >
        {/* Live Photographic Tech Headquarters Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
          }}
        />

        {/* Deep Oceanic Cobalt Gradient & Lighting Overlays (Wakefly cinematic treatment) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(1, 8, 24, 0.92) 0%, rgba(2, 16, 42, 0.85) 35%, rgba(5, 28, 62, 0.72) 70%, rgba(1, 6, 18, 0.94) 100%)'
          }}
        />

        {/* Top/Bottom Cinematic Fade Vignettes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(1, 6, 18, 0.88) 0%, transparent 22%, transparent 72%, #020817 100%)'
          }}
        />

        {/* Cinematic Ceiling Dome Light Beam / Top Ambient Spotlight */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[480px] pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.15) 45%, transparent 75%)' }}
        />

        {/* Ambient Oceanic Side Glows */}
        <div
          className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/3"
          style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full pointer-events-none translate-x-1/3"
          style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(3, 105, 161, 0.14) 40%, transparent 70%)' }}
        />

        {/* Subtle Luminous Bokeh Orbs & Lens Flare with gentle floating animation */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [-12, 12, -12],
            y: [-8, 8, -8]
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/4 w-52 h-52 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(45, 212, 191, 0.2) 50%, transparent 70%)', filter: 'blur(24px)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [10, -10, 10],
            y: [8, -8, 8]
          }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
          className="absolute bottom-4 right-1/3 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.28) 0%, rgba(56, 189, 248, 0.16) 50%, transparent 70%)', filter: 'blur(32px)' }}
        />

        <div className="relative z-10 w-full max-w-[1650px] mr-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7 text-left space-y-5 sm:space-y-6">
            {/* Web3 Live Network Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Web3 Protocol Active</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono text-sky-200/90 bg-sky-500/15 border border-sky-400/25 backdrop-blur-md">
                <span>Proof-of-Loss Smart Contracts</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-400 font-medium">100% Non-Custodial</span>
              </div>
            </motion.div>

            {/* Main Headline (Wakefly Style: Bold, crisp, high-contrast, single-line subtitle) */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-md">
                Reclaim<span className="text-[#A85830]">DAO</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] font-bold mt-2.5 tracking-[-0.02em] text-white sm:whitespace-nowrap">
                  Reclaim What Is Rightfully Yours together.
                </span>
              </h1>
            </motion.div>

            {/* Badge (Sleek pill) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-start sm:items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-sky-100 bg-[#061e40]/70 border border-sky-400/30 backdrop-blur-md shadow-lg"
            >
              <span className="text-[#A85830] text-sm shrink-0 mt-0.5 sm:mt-0 font-bold">★</span>
              <span className="font-normal leading-relaxed">A community-driven nonprofit initiative helping victims of fraud and digital-asset theft navigate the path toward recovery.</span>
            </motion.div>

            {/* Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm"
            >
              ReclaimDAO is a decentralized recovery ecosystem designed to identify legitimate claims, document verified losses, coordinate recovery initiatives, and support eligible victims through transparent, accountable processes.
            </motion.p>

            {/* Primary Action Button (Sunset Orange CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const ref = localStorage.getItem('landingReferralCode');
                  navigate(ref ? `/join-notice?ref=${encodeURIComponent(ref)}` : '/join-notice');
                }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base sm:text-lg shadow-xl cursor-pointer transition-all"
                style={{
                  background: 'linear-gradient(135deg, #A85830 0%, #964d28 50%, #854221 100%)',
                  boxShadow: '0 8px 25px rgba(168, 88, 48, 0.45)'
                }}
              >
                <span>Affected by Fraud? Submit a Claim &rarr;</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Holographic Cyber Security Shield & Animated Web3 Radar */}
          <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-5 hidden lg:flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[460px] h-[460px] xl:w-[490px] xl:h-[490px] flex items-center justify-center"
            >
              {/* Subtle Expanding Ripple Pulses */}
              <motion.div
                animate={{ scale: [0.85, 1.25], opacity: [0.35, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
                className="absolute inset-4 rounded-full border border-sky-400/30 pointer-events-none"
              />
              <motion.div
                animate={{ scale: [0.85, 1.25], opacity: [0.35, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeOut" }}
                className="absolute inset-4 rounded-full border border-cyan-400/30 pointer-events-none"
              />

              {/* Concentric Oceanic Radar Circles (Smooth, slow continuous rotation) */}
              <div className="absolute inset-0 rounded-full border border-sky-400/25 animate-[spin_55s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-dashed border-cyan-300/30 animate-[spin_35s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-sky-400/20" />
              <div className="absolute inset-28 rounded-full border border-dashed border-[#A85830]/25 animate-[spin_25s_linear_infinite]" />

              {/* Subtle Conic Radar Beam Sweep */}
              <div className="absolute inset-3 rounded-full pointer-events-none opacity-20 animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(56,189,248,0.4)_360deg)]" />

              {/* Web3 Orbiting Floating Node Badges with subtle breathing float */}
              {/* Top Node: [ETH] Mainnet */}
              <motion.div
                animate={{ y: [-3, 3, -3], x: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#061833]/90 border border-cyan-400/50 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-md z-20"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>[ETH] Mainnet</span>
              </motion.div>

              {/* Bottom Node: ZK-Merkle Proof */}
              <motion.div
                animate={{ y: [3, -3, 3], x: [1, -1, 1] }}
                transition={{ repeat: Infinity, duration: 4.6, delay: 0.4, ease: "easeInOut" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#061833]/90 border border-emerald-400/50 text-xs font-mono text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.35)] backdrop-blur-md z-20"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ZK-Merkle Proof</span>
              </motion.div>

              {/* Left Node: RFND v2 */}
              <motion.div
                animate={{ x: [-3, 3, -3], y: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.8, ease: "easeInOut" }}
                className="absolute -left-1 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061833]/90 border border-sky-400/50 text-[11px] font-mono text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.35)] backdrop-blur-md z-20"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>RFND v2</span>
              </motion.div>

              {/* Right Node: DAO Multi-Sig */}
              <motion.div
                animate={{ x: [3, -3, 3], y: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 4.8, delay: 1.2, ease: "easeInOut" }}
                className="absolute -right-1 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061833]/90 border border-[#A85830]/50 text-[11px] font-mono text-[#bf6a3d] shadow-[0_0_15px_rgba(255,107,26,0.35)] backdrop-blur-md z-20"
              >
                <span className="w-2 h-2 rounded-full bg-[#A85830] animate-pulse" />
                <span>DAO Multi-Sig</span>
              </motion.div>

              {/* Floating Glowing Shield Container Card */}
              <motion.div
                animate={{
                  y: [-6, 6, -6]
                }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="relative z-10 w-56 h-64 sm:w-60 sm:h-72 rounded-3xl flex flex-col items-center justify-center p-6 backdrop-blur-xl shadow-2xl transition-all"
                style={{
                  background: 'radial-gradient(circle, rgba(8, 28, 60, 0.94) 0%, rgba(3, 12, 28, 0.98) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.45)',
                  boxShadow: '0 0 50px rgba(14, 165, 233, 0.35), inset 0 0 30px rgba(56, 189, 248, 0.18)'
                }}
              >
                {/* Shield SVG with subtle breathing glow */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                    className="relative flex items-center justify-center"
                  >
                    <svg className="w-24 h-28 sm:w-28 sm:h-32 text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]" viewBox="0 0 24 24" fill="rgba(14, 165, 233, 0.12)" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                      className="absolute"
                    >
                      <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-[#A85830] drop-shadow-[0_0_12px_rgba(255,107,26,0.7)]" />
                    </motion.div>
                  </motion.div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs sm:text-[13px] font-black text-white uppercase tracking-wider block">VERIFIED RECOVERY</span>
                  <span className="text-[10px] sm:text-[11px] text-white font-bold mt-1 block">On-Chain Protection</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        REST OF HOMEPAGE CONTENT (White Backgrounds with Deep Cobalt Cards)
        ============================================================
      */}
      {/* Recovery Resources Section */}
      <section className="w-full overflow-x-hidden pt-20 pb-24 bg-white border-t border-slate-200">
        <div className="w-full min-w-0 mobile-padding">
          <div className="mb-14 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-3 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            >
              Recovery resources and <span className="text-[#A85830]">guides</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-3xl text-base sm:text-lg text-slate-600 font-medium"
            >
              Scam alerts, ReclaimDAO refund programs, and an overview of how we help eligible victims recover funds.
            </motion.p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-8 md:grid-cols-3 md:justify-items-stretch md:gap-8">
            {STATIC_FEATURED_RESOURCES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full max-w-[380px] md:max-w-none"
              >
                <StaticResourceCard
                  to={item.path}
                  title={item.title}
                  description={item.description}
                  iconSrc={item.iconSrc}
                  iconAlt={item.iconAlt}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How ReclaimDAO Helps Section */}
      <section className="w-full pt-20 pb-24 bg-slate-50 border-t border-slate-200">
        <div className="w-full mobile-padding">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight"
            >
              How <span className="text-[#A85830]">ReclaimDAO</span> Helps
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto"
            >
              Verify eligible victims, issue on-chain Proof-of-Loss tokens, and facilitate the secure distribution of recovered funds.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-7 text-center rounded-2xl bg-[#0a254d] border border-sky-400/25 hover:border-[#A85830]/60 hover:scale-105 transition-all duration-300 w-full hover:shadow-2xl shadow-xl"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #0e356e 0%, #154c9c 100%)', border: '1px solid rgba(56, 189, 248, 0.4)' }}
                  >
                    <Icon size={30} className="text-[#A85830]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white font-bold text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern White Background with Deep Cobalt Banner CTA Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div
          className="w-full max-w-5xl mx-auto rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #030d1d 0%, #071e3d 40%, #0a2952 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)'
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(168, 88, 48, 0.18) 0%, transparent 70%)' }} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
            >
              You Don't Have to Navigate This <span className="text-[#A85830]">Alone</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-white leading-relaxed max-w-2xl mx-auto space-y-3 font-bold"
            >
              <p>If you've lost funds to a scam or need help understanding the recovery process, reach out to ReclaimDAO.</p>
              <p>Tell us what happened, ask your questions, and learn more about the options available to you.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-extrabold text-white text-base sm:text-lg transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #A85830 0%, #964d28 50%, #854221 100%)',
                  boxShadow: '0 8px 30px rgba(168, 88, 48, 0.5)'
                }}
              >
                Talk to ReclaimDAO <ArrowRight className="w-5 h-5 text-white" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live 1-by-1 Recovery Notification Ticker */}
      <LiveRecoveryNotification />
    </div>
  );
};

export default Home;