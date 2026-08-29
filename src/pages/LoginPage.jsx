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
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 mt-2"
            >
              {loading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <ArrowRight className="w-4 h-4" />
                  <span>Sign In to Portal</span>
                </>
              )}
            </button>
          </form>

          {/* Footer Security Note */}
          <div className="text-center text-[11px] text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
            <p>Protected by DMPS Secure Access Control</p>
            <p className="text-[10px] text-slate-400">
              Forgot password? <span className="font-semibold text-slate-600 dark:text-slate-300">Contact School Administration</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

