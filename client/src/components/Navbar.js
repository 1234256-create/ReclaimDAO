import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  BarChart3,
  Coins,
  Trophy,
  User,
  Settings,
  LogOut,
  Shield,
  LogIn,
  Mail
} from 'lucide-react';

import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleJoinNow = () => {
    try {
      const ref = localStorage.getItem('landingReferralCode');
      navigate(ref ? `/join-notice?ref=${encodeURIComponent(ref)}` : '/join-notice');
    } catch {
      navigate('/join-notice');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  const [canContribute, setCanContribute] = useState(false);

  React.useEffect(() => {
    const checkContributionStatus = async () => {
      try {
        const [activeRes, publicRes, roundRes] = await Promise.all([
          axios.get('/api/settings/contributionActive'),
          axios.get('/api/settings/publicContributionsEnabled'),
          axios.get('/api/settings/contributionRound')
        ]);

        const isActive = activeRes.data?.data?.value ?? true;
        const isPublic = publicRes.data?.data?.value === true;
        const round = roundRes.data?.data?.value;
        const nowMs = Date.now();
        const hasRound = Boolean(round && round.startTime && round.endTime && nowMs <= new Date(round.endTime).getTime());

        setCanContribute(isActive && (isPublic || hasRound));
      } catch (error) {}
    };

    checkContributionStatus();
    const handleUpdate = () => checkContributionStatus();
    window.addEventListener('datastore:update', handleUpdate);
    return () => window.removeEventListener('datastore:update', handleUpdate);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3, protected: true },
    { name: 'Voting', path: '/voting', icon: BarChart3, protected: true },
    { name: 'Contribute', path: '/contribute', icon: Coins },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy, protected: true },
    { name: 'Referral', path: '/referral', icon: User, protected: true },
    { name: 'Contact Us', path: '/contact', icon: Mail },
  ];

  const filteredNavItems = navItems.filter(item => {
    if (item.name === 'Contribute') return canContribute;
    if (item.name === 'Home' && !user) return false;
    if (item.name === 'Contact Us' && !user) return false;
    if (item.protected && !user) return false;
    return true;
  });

  const adminItems = [
    { name: 'Admin Panel', path: '/admin', icon: Shield },
    { name: 'User Management', path: '/admin/users', icon: User },
    { name: 'Vote Management', path: '/admin/votes', icon: BarChart3 },
    { name: 'Contribution Management', path: '/admin/contributions', icon: Coins },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ background: 'rgba(2, 10, 26, 0.95)', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
      <div className="w-full pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-20 overflow-visible flex-nowrap">
          {/* Logo */}
          <div className="flex items-center h-full flex-shrink-0 pl-4 sm:pl-6">
            <Link to="/" className="flex items-center h-full group">
              <img
                src={logoImg}
                alt="ReclaimDAO"
                className="h-16 sm:h-[70px] md:h-[72px] w-auto max-h-[74px] object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-6 min-w-0">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    isActive(item.path)
                      ? 'bg-[#0a254d] text-white border border-sky-400/50 shadow-sm shadow-sky-400/20 font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-[#0a254d]/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive(item.path) ? 'text-[#A85830]' : 'text-sky-400/80'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action / User Profile */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#0a254d] border border-sky-400/30 hover:border-[#A85830]/50 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #A85830, #854221)' }}>
                    <span className="text-white text-sm font-bold">
                      {(user.fullName || user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim()).charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-white text-sm font-medium">{user.fullName || user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim()}</span>
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 rounded-xl border border-sky-400/25 shadow-2xl p-2"
                      style={{ background: 'rgba(4, 18, 40, 0.98)', backdropFilter: 'blur(16px)' }}
                    >
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0a254d] transition-all text-sm"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <User className="w-4 h-4 text-[#A85830]" />
                        <span>Profile</span>
                      </Link>

                      {user.role === 'admin' && (
                        <>
                          <div className="border-t border-white/10 my-1.5"></div>
                          {adminItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0a254d] transition-all text-sm"
                                onClick={() => setIsProfileOpen(false)}
                              >
                                <Icon className="w-4 h-4 text-sky-400" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </>
                      )}

                      <div className="border-t border-white/10 my-1.5"></div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-[#ec4e70] hover:bg-[#ec4e70]/10 transition-all text-sm w-full"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-2.5">
                <Link
                  to="/"
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all text-sm ${
                    isActive('/')
                      ? 'bg-[#0a254d] text-white border border-sky-400/50 font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-[#0a254d]/60 font-medium'
                  }`}
                >
                  <Home className="w-4 h-4 text-sky-400" />
                  <span>Home</span>
                </Link>
                <Link
                  to="/contact"
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all text-sm ${
                    isActive('/contact')
                      ? 'bg-[#0a254d] text-white border border-sky-400/50 font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-[#0a254d]/60 font-medium'
                  }`}
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Contact Us</span>
                </Link>
                <Link
                  to="/login"
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all text-sm ${
                    isActive('/login')
                      ? 'bg-[#0a254d] text-white border border-sky-400/50 font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-[#0a254d]/60 font-medium'
                  }`}
                >
                  <LogIn className="w-4 h-4 text-sky-400" />
                  <span>Login</span>
                </Link>
                <button
                  onClick={handleJoinNow}
                  className="px-4 py-2 rounded-xl text-white font-black text-sm shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #A85830 0%, #964d28 50%, #854221 100%)',
                    boxShadow: '0 4px 20px rgba(168, 88, 48, 0.45)'
                  }}
                >
                  Submit a Claim
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md border-t max-h-[calc(100vh-4rem)] overflow-y-auto"
            style={{ background: 'rgba(2, 10, 26, 0.98)', borderColor: 'rgba(56, 189, 248, 0.2)' }}
          >
            <div className="px-4 py-4 pb-6 space-y-2">
              {!user && (
                <>
                  <Link
                    to="/"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isActive('/')
                        ? 'bg-[#0a254d] text-white border border-sky-400/50 font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-[#0a254d]/60'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="w-4 h-4 text-sky-400" />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/contact"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isActive('/contact')
                        ? 'bg-[#0a254d] text-white border border-sky-400/50 font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-[#0a254d]/60'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Contact Us</span>
                  </Link>
                </>
              )}

              {filteredNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'bg-[#0a254d] text-white border border-sky-400/50 font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-[#0a254d]/60'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className={`w-4 h-4 ${isActive(item.path) ? 'text-[#A85830]' : 'text-sky-400'}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {user && user.role === 'admin' && (
                <>
                  <div className="border-t border-white/10 my-2"></div>
                  {adminItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0a254d] transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-4 h-4 text-sky-400" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </>
              )}

              {user ? (
                <>
                  <div className="border-t border-white/10 my-2"></div>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0a254d] transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="w-4 h-4 text-[#A85830]" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-[#ec4e70] hover:bg-[#ec4e70]/10 transition-all w-full"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="border-t border-white/10 my-2"></div>
                  <Link
                    to="/login"
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0a254d] transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="w-4 h-4 text-sky-400" />
                    <span>Login</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleJoinNow();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 px-3 py-3 rounded-xl text-white font-bold transition-all w-full shadow-lg cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #A85830 0%, #964d28 50%, #854221 100%)' }}
                  >
                    <span>Submit a Claim</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;