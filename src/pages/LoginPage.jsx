import React, { useState, useEffect } from 'react';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, GraduationCap, Users, UserCheck, CreditCard, Award, ArrowLeft, Globe, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/common/Toast';

import schoolService from '../services/schoolService';
import saasService from '../services/saasService';

export const LoginPage = ({ onLoginSuccess, onBackToWebsite, onOpenMasterSaaS }) => {
  const { login, loading } = useAuth();
  const { showToast } = useToast();
  const activeTenant = saasService.getActiveTenant();

  const [email, setEmail] = useState(() => localStorage.getItem('DMPS_REMEMBER_USERNAME') || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(() => localStorage.getItem('DMPS_REMEMBER_ME') === 'true');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isPWAInstallable, setIsPWAInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsPWAInstallable(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        showToast('App installed successfully! 🎉', 'success');
      }
      setDeferredPrompt(null);
      setIsPWAInstallable(false);
    } else {
      showToast('To install app: Click the 3-dots in browser address bar and select "Install App" 📱', 'info');
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail.trim()) {
      showToast('Please enter your username or registered email.', 'error');
      return;
    }
    setForgotSubmitted(true);
    showToast(`Password reset link & instructions sent to ${forgotEmail}! 📩`, 'success');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter both username/email and password.');
      return;
    }

    if (rememberMe) {
      localStorage.setItem('DMPS_REMEMBER_USERNAME', email.trim());
      localStorage.setItem('DMPS_REMEMBER_ME', 'true');
    } else {
      localStorage.removeItem('DMPS_REMEMBER_USERNAME');
      localStorage.removeItem('DMPS_REMEMBER_ME');
    }

    const result = await login(email, password);
    if (result.success) {
      showToast(`Welcome back, ${result.user.name}! 👋`, 'success');
      if (onLoginSuccess) onLoginSuccess(result.user);
    } else {
      setErrorMessage(result.message || 'Invalid Username or Password! Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative">
      {/* Top Back to School Website Button */}
      {onBackToWebsite && (
        <button
          onClick={onBackToWebsite}
          className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-amber-500" />
          <span>Back to School Website</span>
        </button>
      )}

      {/* Top Right Install PWA Quick Action */}
      <button
        onClick={handleInstallPWA}
        className="absolute top-6 right-6 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-700 dark:text-amber-400 shadow-sm transition-all flex items-center gap-2"
        title="Install School ERP as Desktop / Mobile App"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        <span>Install PWA App</span>
      </button>

      {/* Login Card Container */}
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-300">
        
        {/* Top Burgundy & Gold Brand Header with School Crest Mono */}
        <div className="bg-gradient-to-b from-[#4a0e3d] via-[#5d154d] to-[#6e1c5c] text-white pt-8 pb-7 px-6 text-center rounded-b-3xl shadow-md relative border-b-2 border-amber-400/40">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl p-1 border-2 border-amber-400">
            <img
              src="/logo.png"
              alt="School Crest"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h1 className="text-xl font-black tracking-tight text-white leading-snug font-serif">
            {activeTenant?.name || 'Dadheech Memorial Public School'}
          </h1>
          <p className="text-[11px] text-amber-300 mt-1 font-bold uppercase tracking-wider">
            {activeTenant?.shortName || 'DMPS'} Official ERP Portal • {activeTenant?.city || 'Campus'}
          </p>
          {activeTenant?.affiliation && (
            <span className="inline-block mt-1 text-[10px] bg-black/30 px-2 py-0.5 rounded-full text-white/90">
              {activeTenant.affiliation}
            </span>
          )}
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Error Banner */}
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 rounded-xl text-xs text-rose-600 dark:text-rose-400 font-semibold animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username / Email */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                Username / Email / Mobile No.
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. admin, teacher, parent, student"
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                  autoFocus
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password Links */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 dark:text-slate-400 font-semibold">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => {
                  setForgotEmail(email || '');
                  setForgotSubmitted(false);
                  setShowForgotPasswordModal(true);
                }}
                className="text-amber-600 dark:text-amber-400 hover:underline font-bold"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0b1e38] rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 mt-2"
            >
              {loading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <ArrowRight className="w-4 h-4" />
                  <span>Sign In to School ERP</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Login 1-Click Buttons */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
              <span>⚡ Quick Demo Login (1-Click):</span>
              <span className="text-[10px] text-amber-500 font-normal">PIN: 1234 / 123456</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[11px]">
              <button
                type="button"
                onClick={() => {
                  setEmail('admin');
                  setPassword('123456');
                }}
                className="py-1.5 px-2 bg-slate-100 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-amber-950/60 text-slate-700 dark:text-slate-200 hover:text-amber-800 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-700"
              >
                👑 Admin
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail('teacher');
                  setPassword('12345');
                }}
                className="py-1.5 px-2 bg-slate-100 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-700 dark:text-slate-200 hover:text-indigo-800 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-700"
              >
                👨‍🏫 Teacher
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail('accountant');
                  setPassword('12345');
                }}
                className="py-1.5 px-2 bg-slate-100 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-200 hover:text-emerald-800 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-700"
              >
                💰 Accounts
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail('student');
                  setPassword('12345');
                }}
                className="py-1.5 px-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-200 hover:text-blue-800 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-700"
              >
                👨‍🎓 Student
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail('parent');
                  setPassword('12345');
                }}
                className="py-1.5 px-2 bg-slate-100 hover:bg-purple-100 dark:bg-slate-800 dark:hover:bg-purple-950/60 text-slate-700 dark:text-slate-200 hover:text-purple-800 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-700 col-span-2"
              >
                👨‍👩‍👦 Parent Portal
              </button>
            </div>
          </div>

          {/* Secure Login Guarantee & PWA Status */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>256-bit SSL Encrypted</span>
            </div>
            <button
              type="button"
              onClick={handleInstallPWA}
              className="text-[11px] text-amber-600 dark:text-amber-400 font-bold hover:underline"
            >
              📲 Install PWA
            </button>
          </div>

          {/* Footer Security Note & Developer Credit */}
          <div className="text-center pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              🔒 Protected by DMPS Multi-Branch Access Control • Installable PWA App
            </p>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 font-bold shadow-sm">
              <span>Designed & Developed by</span>
              <span className="text-amber-600 dark:text-amber-400 font-black">Prashant Rajput</span>
            </div>

            {onOpenMasterSaaS && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenMasterSaaS}
                  className="text-[11px] font-semibold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center gap-1.5 mx-auto transition-colors px-3 py-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>👑 Master SaaS Multi-School Console</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Forgot Password / Password Restoration Modal (Matching Screenshot 2) */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-amber-50 dark:bg-amber-950/50 rounded-2xl flex items-center justify-center mx-auto text-amber-500 border border-amber-200 dark:border-amber-800/60">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Password Restoration</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Enter your username or registered email and you will receive reset instructions on the registered email / SMS.
              </p>
            </div>

            {forgotSubmitted ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">
                  Reset link and temporary OTP instructions sent to <u>{forgotEmail}</u>!
                </p>
                <button
                  type="button"
                  onClick={() => setShowForgotPasswordModal(false)}
                  className="w-full py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow hover:bg-emerald-500"
                >
                  Back to Login
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Username / Registered Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="e.g. admin or staff@dadheechschool.edu.in"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotPasswordModal(false)}
                    className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl"
                  >
                    ← Back to Login
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-[#0b1e38] text-xs font-black rounded-xl shadow-md"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

