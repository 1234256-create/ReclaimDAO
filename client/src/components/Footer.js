import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import PrCoverageSection from "./PrCoverageSection";
import TrustpilotSection from "./TrustpilotSection";

const Footer = () => {
  const location = useLocation();
  const [canContribute, setCanContribute] = React.useState(false);
  const [whatsappLink, setWhatsappLink] = React.useState("https://wa.me/message/QO7NOBRERE3MO1");
  const [companyAddress, setCompanyAddress] = React.useState("12 N 2nd Street STE 100, Richmond, KY 40475");
  const [companyAddress2, setCompanyAddress2] = React.useState("");

  React.useEffect(() => {
    const checkStatusAndSettings = async () => {
      try {
        const [activeRes, publicRes, roundRes, waRes, addrRes, addr2Res] = await Promise.all([
          axios.get("/api/settings/contributionActive").catch(() => ({ data: {} })),
          axios.get("/api/settings/publicContributionsEnabled").catch(() => ({ data: {} })),
          axios.get("/api/settings/contributionRound").catch(() => ({ data: {} })),
          axios.get("/api/settings/WHATSAPP_LINK").catch(() => ({ data: {} })),
          axios.get("/api/settings/COMPANY_ADDRESS").catch(() => ({ data: {} })),
          axios.get("/api/settings/COMPANY_ADDRESS_2").catch(() => ({ data: {} }))
        ]);

        const isActive = activeRes.data?.data?.value ?? true;
        const isPublic = publicRes.data?.data?.value === true;
        const round = roundRes.data?.data?.value;
        const nowMs = Date.now();
        const hasRound = Boolean(round && round.startTime && round.endTime && nowMs <= new Date(round.endTime).getTime());
        setCanContribute(isActive && (isPublic || hasRound));

        if (waRes.data?.data?.value) setWhatsappLink(waRes.data.data.value);
        if (addrRes.data?.data?.value) setCompanyAddress(addrRes.data.data.value);
        if (addr2Res.data?.data?.value) setCompanyAddress2(addr2Res.data.data.value);
      } catch (error) { }
    };
    checkStatusAndSettings();
    window.addEventListener("datastore:update", checkStatusAndSettings);
    return () => window.removeEventListener("datastore:update", checkStatusAndSettings);
  }, []);

  return (
    <>
      {location.pathname === '/' && (
        <>
          <PrCoverageSection />
          <TrustpilotSection />
        </>
      )}
      <footer className="text-white border-t mt-auto" style={{ background: 'linear-gradient(180deg, rgba(2, 10, 25, 0.98) 0%, rgba(1, 6, 16, 1) 100%)', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Platform */}
            <div className="space-y-3">
              <h3 className="text-[#ff6b1a] font-extrabold text-sm tracking-wide uppercase">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/voting" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Voting
                  </Link>
                </li>
                {canContribute && (
                  <li>
                    <Link to="/contribute" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                      Contribute
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/leaderboard" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/referral" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Referral
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h3 className="text-[#ff6b1a] font-extrabold text-sm tracking-wide uppercase">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/resources/scam-alerts" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Scam Alerts
                  </Link>
                </li>
                <li>
                  <Link to="/resources/refund-programs" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Refund Programs
                  </Link>
                </li>
                <li>
                  <Link to="/resources/how-refunds-work" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    How Refunds Work
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h3 className="text-[#ff6b1a] font-extrabold text-sm tracking-wide uppercase">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white hover:text-sky-300 transition-colors duration-200 text-xs sm:text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-[#ff6b1a] font-extrabold text-sm tracking-wide uppercase">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-sky-300 font-semibold hover:text-[#ff6b1a] transition-colors duration-200 text-xs sm:text-sm block">
                    ✉️ Contact & Support Forms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact?type=inquiry"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-left text-slate-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm block group"
                  >
                    <span className="text-[#ff6b1a] font-semibold group-hover:underline">Inquiries:</span> info@reclaimdao.org
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact?type=support"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-left text-slate-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm block group"
                  >
                    <span className="text-sky-300 font-semibold group-hover:underline">Support:</span> support@reclaimdao.org
                  </Link>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-bold hover:text-[#20ba59] transition-colors duration-200 text-xs sm:text-sm flex items-center gap-1.5 group bg-[#25D366]/10 border border-[#25D366]/30 px-2.5 py-1 rounded-lg w-fit"
                  >
                    <span className="text-base">💬</span>
                    <span className="group-hover:underline underline-offset-2">WhatsApp Us</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-[#ff6b1a] font-extrabold text-sm tracking-wide uppercase">Addresses</h3>
              <div className="space-y-2">
                {companyAddress && (
                  <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    <span className="text-xs font-bold text-[#ff6b1a] block mb-0.5">Administrative Office:</span>
                    {companyAddress}
                  </div>
                )}
                {companyAddress2 && (
                  <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line pt-1.5 border-t border-white/10">
                    <span className="text-xs font-bold text-sky-400 block mb-0.5">Registered Office:</span>
                    {companyAddress2}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="border-t border-white/10 mt-8 pt-5 pb-2">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300">
              <Link
                to="/contact?type=inquiry"
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
              >
                <span>🏢</span>
                <span>Enterprise Inquiries (<strong className="text-white">info@reclaimdao.org</strong>)</span>
              </Link>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <Link
                to="/contact?type=support"
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
              >
                <span>🎧</span>
                <span>Contact Support (<strong className="text-white">support@reclaimdao.org</strong>)</span>
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2">
              <p>© {new Date().getFullYear()} ReclaimDAO. All rights reserved.</p>
              <p className="text-sky-400/80 font-medium">Decentralized Recovery Protocol</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
