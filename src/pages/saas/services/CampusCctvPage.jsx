import React from 'react';
import {
  ShieldCheck,
  Wifi,
  Tv,
  Printer,
  Headphones,
  CheckCircle2,
  Phone,
  ArrowRight,
  Server,
  Zap,
  Lock,
  Radio
} from 'lucide-react';
import { Breadcrumb } from '../../../components/saas/layout/Breadcrumb';

export const CampusCctvPage = ({ onNavigate, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR EDUTECH! I would like to get a quotation for Campus CCTV Surveillance, Mesh Wi-Fi & Annual AMC maintenance.");
    window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
  };

  const services = [
    {
      title: 'IP CCTV Security & Live Surveillance',
      desc: 'High-definition 4MP/5MP night-vision IP dome and bullet cameras covering campus gates, corridors, playgrounds, and classrooms with mobile remote viewing for principals.',
      icon: ShieldCheck,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      title: 'Campus-Wide High-Speed Mesh Wi-Fi',
      desc: 'Seamless Wi-Fi roaming across multiple school blocks, teacher staff rooms, computer labs, and auditorium with centralized bandwidth control and firewall filtering.',
      icon: Wifi,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      title: 'Smart Digital Classroom Interactive Panels',
      desc: '65-inch / 75-inch 4K UHD touch interactive flat panels with Android & Windows OPS, digital whiteboard, lesson recording, and STEM educational software pre-installed.',
      icon: Tv,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      title: 'Annual Maintenance Contract (AMC) & Hardware Support',
      desc: 'Year-round proactive preventive maintenance for school computer labs, server racks, heavy-duty network printers, and sound amplifiers with 4-hour on-site breakdown response.',
      icon: Headphones,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'Smart Campus CCTV & Networking' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Campus Infrastructure • CCTV • Mesh Wi-Fi • Annual AMC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Complete Smart Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">CCTV, Wi-Fi & IT Hardware</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Protect your students and modernize your school infrastructure with crystal-clear IP CCTV surveillance, campus-wide enterprise mesh Wi-Fi, interactive flat panels, and guaranteed Annual Maintenance Contracts (AMC).
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Free On-Campus Infrastructure Survey</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <span>Request Custom AMC / CCTV Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl ${srv.bg} ${srv.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(`Hello, I want to inquire about ${srv.title}.`)}
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-indigo-600 flex items-center justify-between hover:text-indigo-800"
              >
                <span>Request Site Survey & Estimation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </section>

    </div>
  );
};

export default CampusCctvPage;
