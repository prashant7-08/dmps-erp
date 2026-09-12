import React from 'react';
import {
  Server,
  ShieldCheck,
  Zap,
  ArrowRight,
  Phone,
  CheckCircle2,
  Database,
  Lock,
  Globe,
  Clock,
  HardDrive,
  Cpu,
  RefreshCw,
  HelpCircle
} from 'lucide-react';
import { Breadcrumb } from '../../components/layout/Breadcrumb';

export const CloudServerPage = ({ onNavigate, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR EDUTECH! I would like to get a quotation for Dedicated Cloud VPS Hosting & MySQL Databases.");
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  const specs = [
    {
      title: 'Ultra-Fast NVMe Storage',
      desc: 'Blazing fast Gen4 NVMe enterprise drives ensuring page loads under 180ms even during peak exam result days.',
      icon: HardDrive,
      color: 'text-pink-600',
      bg: 'bg-pink-100'
    },
    {
      title: 'Daily Encrypted Cloud Backups',
      desc: 'Automated 24-hour snapshot backup stored in isolated disaster-recovery cloud vaults with 1-click restore.',
      icon: RefreshCw,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    },
    {
      title: '99.99% Guaranteed Cloud Uptime SLA',
      desc: 'Redundant power feeds, BGP routing, and automatic failover clusters guaranteeing continuous school portal access.',
      icon: Clock,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      title: 'SSL Encryption & DDoS Defense',
      desc: 'Bank-grade 256-bit SSL encryption, Cloudflare enterprise CDN protection, and automated firewall against cyber attacks.',
      icon: Lock,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      title: 'Isolated Multi-Tenant Databases',
      desc: 'Complete data segregation for each school branch ensuring 100% student data privacy and zero cross-leakage.',
      icon: Database,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      title: 'Custom Subdomain & DNS Routing',
      desc: 'Instant school name setup (e.g. yourschool.pkredutech.com or yourschool.com) with automated DNS management.',
      icon: Globe,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    }
  ];

  const serverPlans = [
    {
      name: 'Starter Cloud VPS',
      price: '₹ 1,499 / mo',
      annual: '₹ 14,999 / year',
      specs: ['2 vCPU Cores', '4 GB RAM', '60 GB NVMe Storage', '1 Dedicated IPv4', 'Up to 600 Students'],
      popular: false
    },
    {
      name: 'Pro Enterprise VPS',
      price: '₹ 2,999 / mo',
      annual: '₹ 29,999 / year',
      specs: ['4 vCPU Cores', '8 GB RAM', '150 GB NVMe Storage', 'Daily Auto Backup', 'Up to 2,000 Students'],
      popular: true
    },
    {
      name: 'High-Scale Campus Dedicated',
      price: '₹ 5,999 / mo',
      annual: '₹ 59,999 / year',
      specs: ['8 vCPU Cores', '16 GB RAM', '500 GB NVMe Storage', 'Multi-Branch Clustering', 'Unlimited Students'],
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'Dedicated Cloud VPS & Databases' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-indigo-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-900 border border-pink-300 text-xs font-bold">
            <Server className="w-4 h-4 text-pink-600" />
            <span>Enterprise Cloud Infrastructure • 99.99% SLA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Dedicated Cloud VPS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">Secure Databases</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fast, secure, and fully managed cloud servers designed exclusively for schools, colleges, and ERP systems. Zero maintenance hassles, daily automated backups, and instant scaling.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get Cloud Server Quotation</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <span>Custom Server Specs Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-100 px-3 py-1 rounded-full border border-pink-200">
            Technical Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Why Top Educational Groups Trust Our Servers
          </h2>
          <p className="text-xs text-slate-600">
            Engineered to handle massive concurrent traffic during fee payment deadlines and exam result days without slowdowns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-pink-400 hover:shadow-lg transition-all space-y-3"
              >
                <div className={`w-12 h-12 rounded-xl ${spec.bg} ${spec.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{spec.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{spec.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Server Plans */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            Managed Cloud Hosting
          </span>
          <h2 className="text-2xl font-black text-slate-900">Dedicated Cloud VPS Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serverPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl bg-white border ${
                plan.popular ? 'border-pink-500 shadow-xl ring-2 ring-pink-500/20' : 'border-slate-200 shadow-sm'
              } flex flex-col justify-between space-y-6`}
            >
              <div className="space-y-4">
                {plan.popular && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-pink-100 text-pink-800 border border-pink-200 inline-block">
                    Recommended for Most Schools
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <div className="text-3xl font-black text-slate-900 mt-2">{plan.annual}</div>
                  <div className="text-xs text-slate-500">{plan.price}</div>
                </div>

                <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  {plan.specs.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(`Hello, I want to book ${plan.name} (${plan.annual}).`)}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                  plan.popular
                    ? 'bg-pink-600 hover:bg-pink-700 text-white shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                Choose Server Package
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CloudServerPage;
