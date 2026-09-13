import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { useToast } from '../components/common/Toast';

export const ContactPage = ({ onNavigate }) => {
  const { showToast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    service: 'School ERP - Basic / Pro / Enterprise',
    studentStrength: '301 - 500 Students',
    location: '',
    preferredDate: '',
    message: ''
  });

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      showToast('Please enter your Name and Mobile Number.', 'error');
      return;
    }
    const lines = [
      '👋 Hello PKR ENTERPRISES Global IT Services! I have a website enquiry & demo request:',
      `• Name: ${contactForm.name}`,
      `• Mobile: ${contactForm.phone}`,
      `• Service Required: ${contactForm.service}`,
      `• Institution / Student Strength: ${contactForm.studentStrength}`,
      `• City / Location: ${contactForm.location || 'Not Specified'}`,
      `• Preferred Demo Timing: ${contactForm.preferredDate || 'Earliest Possible'}`,
      `• Details: ${contactForm.message || 'Kindly share full demo details, pricing quotation and setup process.'}`
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
    showToast('Enquiry transferred to WhatsApp! Our architect will respond promptly.', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Contact Us & Book Free Demo' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
              Direct Engineering Line
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
              Let's Connect & Schedule Your Free Demo
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Have questions about student pricing, biometric integration, server specs, or on-campus training? Our senior architects are available 7 days a week.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Official Sales & WhatsApp Helpline</div>
                <div className="font-bold text-slate-900 text-lg">+91 9719476606</div>
                <div className="text-[11px] text-emerald-600 font-semibold">Available 24/7 on WhatsApp</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Official Proposal & Support Email</div>
                <div className="font-bold text-slate-900 text-base">prashant732009@gmail.com</div>
                <div className="text-[11px] text-slate-500">Response within 2 hours</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Corporate Headquarters</div>
                <div className="font-bold text-slate-900 text-sm">Vinay Nagar, Sangwan City Road, PAC Quarsi (Aligarh), UP, India</div>
                <div className="text-[11px] text-slate-500">On-site campus visits available across UP & NCR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Request Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Send className="w-6 h-6 text-indigo-600" />
              Schedule Live Campus / Online Demo
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Fill out this form to connect directly with our engineering team on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleContactFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Principal Rajesh Sharma"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                <select
                  value={contactForm.service}
                  onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                >
                  <option value="School ERP - Basic / Pro / Enterprise">School ERP - Basic / Pro / Enterprise</option>
                  <option value="Biometric Attendance Device Setup">Biometric Attendance Device Setup</option>
                  <option value="Automatic MP3 School Bell Software">Automatic MP3 School Bell Software</option>
                  <option value="PVC ID Card & Certificate Printing">PVC ID Card & Certificate Printing</option>
                  <option value="Retail / Pharmacy / POS Billing Software">Retail / Pharmacy / POS Billing Software</option>
                  <option value="Cloud VPS / Dedicated Server / MySQL">Cloud VPS / Dedicated Server / MySQL</option>
                  <option value="Campus CCTV / Networking Setup">Campus CCTV / Networking Setup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Student / Business Strength</label>
                <select
                  value={contactForm.studentStrength}
                  onChange={(e) => setContactForm({ ...contactForm, studentStrength: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                >
                  <option value="1 - 300 Students (Starter Basic)">1 - 300 Students (Starter Basic)</option>
                  <option value="301 - 500 Students (Standard Plus)">301 - 500 Students (Standard Plus)</option>
                  <option value="501 - 800 Students (Professional)">501 - 800 Students (Professional)</option>
                  <option value="801 - 1200 Students (Enterprise Pro)">801 - 1200 Students (Enterprise Pro)</option>
                  <option value="1201 - 2000+ Students (Custom Tier)">1201 - 2000+ Students (Custom Tier)</option>
                  <option value="Retail / Pharmacy Store (Single Counter)">Retail / Pharmacy Store (Single Counter)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">City / District / State</label>
                <input
                  type="text"
                  placeholder="e.g. Gorakhpur / Lucknow, UP"
                  value={contactForm.location}
                  onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Demo Date / Mode</label>
                <input
                  type="text"
                  placeholder="e.g. Tomorrow 11:00 AM (Google Meet or Campus)"
                  value={contactForm.preferredDate}
                  onChange={(e) => setContactForm({ ...contactForm, preferredDate: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Additional Requirements / Notes</label>
              <textarea
                rows={3}
                placeholder="Describe any custom requirements, current software migration, or specific questions..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Send Demo Booking to WhatsApp & Get Free Quote</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default ContactPage;
