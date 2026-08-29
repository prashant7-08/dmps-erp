import React, { useState } from 'react';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, GraduationCap, Users, UserCheck, CreditCard, Award, ArrowLeft, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/common/Toast';

export const LoginPage = ({ onLoginSuccess, onBackToWebsite }) => {
  const { login, loading } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showRolesGuide, setShowRolesGuide] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter both username/email and password.');
      return;
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

      {/* Login Card Container */}
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-300">
        
        {/* Top Burgundy & Gold Brand Header with School Crest Mono */}
        <div className="bg-gradient-to-b from-[#4a0e3d] via-[#5d154d] to-[#6e1c5c] text-white pt-8 pb-7 px-6 text-center rounded-b-3xl shadow-md relative border-b-2 border-amber-400/40">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl p-1 border-2 border-amber-400">
            <img
              src="/logo.png"
              alt="Dadheech Educational Group Crest"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h1 className="text-xl font-black tracking-tight text-white leading-snug font-serif">
            Dadheech Memorial Public School
          </h1>
          <p className="text-[11px] text-amber-300 mt-1 font-bold uppercase tracking-wider">
            DMPS Official ERP & Academic Portal
          </p>
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

          {/* Collapsible Multi-Branch Roles Guide */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowRolesGuide(!showRolesGuide)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-amber-500" />
                <span>Quick Test Logins (Multi-Branch)</span>
              </div>
              {showRolesGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showRolesGuide && (
              <div className="mt-2 p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2 text-[11px] animate-in fade-in">
                <div
                  onClick={() => { setEmail('admin'); setPassword('admin123'); }}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 cursor-pointer hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <strong className="text-amber-700 dark:text-amber-300 block">👑 Super Admin (MD / All Campuses)</strong>
                    <span className="text-slate-500 font-mono text-[10px]">User: admin | Pass: admin123</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-600">Auto-fill ➔</span>
                </div>

                <div
                  onClick={() => { setEmail('principal'); setPassword('principal123'); }}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
                >
                  <div>
                    <strong className="text-slate-900 dark:text-white block">🏢 Principal (Senior Campus Jargwan)</strong>
                    <span className="text-slate-500 font-mono text-[10px]">User: principal | Pass: principal123</span>
                  </div>
                  <span className="text-[10px] font-bold text-sky-600">Auto-fill ➔</span>
                </div>

                <div
                  onClick={() => { setEmail('barheti'); setPassword('barheti123'); }}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
                >
                  <div>
                    <strong className="text-slate-900 dark:text-white block">🏫 In-Charge (Barheti Campus Aligarh)</strong>
                    <span className="text-slate-500 font-mono text-[10px]">User: barheti | Pass: barheti123</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600">Auto-fill ➔</span>
                </div>

                <div
                  onClick={() => { setEmail('kids'); setPassword('kids123'); }}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
                >
                  <div>
                    <strong className="text-slate-900 dark:text-white block">🧸 Head (Dadheech Kids School)</strong>
                    <span className="text-slate-500 font-mono text-[10px]">User: kids | Pass: kids123</span>
                  </div>
                  <span className="text-[10px] font-bold text-purple-600">Auto-fill ➔</span>
                </div>

                <div
                  onClick={() => { setEmail('teacher'); setPassword('teacher123'); }}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
                >
                  <div>
                    <strong className="text-slate-900 dark:text-white block">👨‍🏫 Teacher (Faculty Portal)</strong>
                    <span className="text-slate-500 font-mono text-[10px]">User: teacher | Pass: teacher123</span>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600">Auto-fill ➔</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer Security Note */}
          <div className="text-center text-[11px] text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
            <p>Protected by DMPS Multi-Branch Access Control</p>
            <p className="text-[10px] text-slate-400">
              Assigned branch security active.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

