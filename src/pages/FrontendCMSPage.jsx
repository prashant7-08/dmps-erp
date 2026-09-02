import React, { useState, useEffect } from 'react';
import {
  Globe,
  Settings,
  Menu,
  Layout,
  FileText,
  Sliders,
  Sparkles,
  MessageSquare,
  Award,
  HelpCircle,
  FolderOpen,
  Image as ImageIcon,
  Plus,
  Edit2,
  Trash2,
  Save,
  CheckCircle2,
  ExternalLink,
  Eye,
  Search,
  Star,
  Layers,
  ChevronRight,
  Upload,
  Calendar,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const FrontendCMSPage = ({ initialTab = 'setting', onOpenWebsite }) => {
  const { showToast } = useToast();
  const schoolInfo = schoolService.getSchoolInfo() || { name: 'Dadheech Memorial Public School' };

  const resolveTab = (tab) => {
    if (!tab) return 'setting';
    if (tab === 'fe-setting' || tab === 'setting' || tab === 'frontend') return 'setting';
    if (tab === 'fe-menu' || tab === 'menu') return 'menu';
    if (tab === 'fe-page-section' || tab === 'page-section') return 'page-section';
    if (tab === 'fe-manage-page' || tab === 'manage-page') return 'manage-page';
    if (tab === 'fe-slider' || tab === 'slider') return 'slider';
    if (tab === 'fe-features' || tab === 'features') return 'features';
    if (tab === 'fe-testimonial' || tab === 'testimonial') return 'testimonial';
    if (tab === 'fe-service' || tab === 'service') return 'service';
    if (tab === 'fe-faq' || tab === 'faq') return 'faq';
    if (tab === 'fe-gallery-category' || tab === 'gallery-category') return 'gallery-category';
    if (tab === 'fe-gallery' || tab === 'gallery') return 'gallery';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  // 1. Settings State (Exact match to user screenshot)
  const [cmsSettings, setCmsSettings] = useState({
    branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
    cmsTitle: 'Dadheech Memorial Public School | Official Website',
    cmsUrlAlias: 'dadheech-memorial-public-school',
    cmsFrontend: 'Enabled',
    onlineAdmission: 'Enabled',
    receiveEmailTo: 'info@dadheechmemorial.edu.in',
    contactNumber: '+91 97588 82443, +91 98371 00000',
    address: 'Ramghat Road, Jargwan, Bulandshahr, Uttar Pradesh - 202395',
    workingHours: 'Mon - Sat: 08:00 AM - 02:30 PM',
    facebookUrl: 'https://facebook.com/dmpsjargwan',
    youtubeUrl: 'https://youtube.com/@dmps-official',
    instagramUrl: 'https://instagram.com/dmps_school',
    copyrightText: '© 2026 Dadheech Memorial Public School. All Rights Reserved. Affiliated to CBSE Delhi.'
  });

  // 2. Navigation Menu Items State
  const [menuItems, setMenuItems] = useState([
    { id: 'MN-01', title: 'Home', url: '/', order: 1, openInNewTab: false, status: 'Published' },
    { id: 'MN-02', title: 'About Us', url: '/about', order: 2, openInNewTab: false, status: 'Published' },
    { id: 'MN-03', title: 'Academics & Curriculum', url: '/academics', order: 3, openInNewTab: false, status: 'Published' },
    { id: 'MN-04', title: 'Online Admission 2026-27', url: '/admissions', order: 4, openInNewTab: false, status: 'Published' },
    { id: 'MN-05', title: 'Campus Facilities', url: '/facilities', order: 5, openInNewTab: false, status: 'Published' },
    { id: 'MN-06', title: 'Photo Gallery', url: '/gallery', order: 6, openInNewTab: false, status: 'Published' },
    { id: 'MN-07', title: 'Mandatory CBSE Disclosure', url: '/cbse-disclosure', order: 7, openInNewTab: false, status: 'Published' },
    { id: 'MN-08', title: 'Pay Online Fees', url: '/pay-fees', order: 8, openInNewTab: true, status: 'Published' },
    { id: 'MN-09', title: 'Contact Us', url: '/contact', order: 9, openInNewTab: false, status: 'Published' }
  ]);

  // 3. Page Sections State
  const [sections, setSections] = useState([
    { id: 'SEC-01', name: 'Hero Banner Slider', sectionKey: 'hero_slider', status: 'Enabled', order: 1 },
    { id: 'SEC-02', name: 'Welcome & Principal Desk Message', sectionKey: 'principal_desk', status: 'Enabled', order: 2 },
    { id: 'SEC-03', name: 'Academic Features & Smart Classes', sectionKey: 'features_grid', status: 'Enabled', order: 3 },
    { id: 'SEC-04', name: 'CBSE Toppers Wall of Fame', sectionKey: 'toppers_wall', status: 'Enabled', order: 4 },
    { id: 'SEC-05', name: 'Campus Infrastructure Highlights', sectionKey: 'infrastructure', status: 'Enabled', order: 5 },
    { id: 'SEC-06', name: 'Parent Reviews & Testimonials', sectionKey: 'testimonials', status: 'Enabled', order: 6 },
    { id: 'SEC-07', name: 'Latest Events & Photo Gallery', sectionKey: 'gallery_stream', status: 'Enabled', order: 7 },
    { id: 'SEC-08', name: 'Frequently Asked Questions (FAQ)', sectionKey: 'faq_accordion', status: 'Enabled', order: 8 },
    { id: 'SEC-09', name: 'Footer & Location Map', sectionKey: 'footer_map', status: 'Enabled', order: 9 }
  ]);

  // 4. Manage Pages State
  const [pages, setPages] = useState([
    { id: 'PG-01', title: 'About Dadheech Memorial Public School', slug: 'about-us', lastModified: '2026-08-28', status: 'Published' },
    { id: 'PG-02', title: 'CBSE Mandatory Public Disclosure', slug: 'cbse-disclosure', lastModified: '2026-08-30', status: 'Published' },
    { id: 'PG-03', title: 'Fee Structure & Payment Guidelines 2026-27', slug: 'fee-structure', lastModified: '2026-08-25', status: 'Published' },
    { id: 'PG-04', title: 'Student Code of Conduct & School Rules', slug: 'rules-conduct', lastModified: '2026-08-20', status: 'Published' },
    { id: 'PG-05', title: 'Transfer Certificate (TC) Verification Portal', slug: 'tc-verification', lastModified: '2026-08-15', status: 'Published' }
  ]);

  // 5. Hero Sliders State
  const [sliders, setSliders] = useState([
    { id: 'SLD-01', title: 'Excellence in Holistic Education', subtitle: 'Nurturing Future Leaders with Modern Smart Classrooms & CBSE Pedagogy', buttonText: 'Apply For Admission', buttonUrl: '/admissions', order: 1 },
    { id: 'SLD-02', title: 'World-Class STEM, Robotics & AI Labs', subtitle: 'Hands-on experiential learning for classes Pre-Primary to 12th', buttonText: 'Explore Academics', buttonUrl: '/academics', order: 2 },
    { id: 'SLD-03', title: 'Annual Sports & Athletic Excellence', subtitle: 'State-level sports complex, football ground, basketball court & martial arts', buttonText: 'View Sports Gallery', buttonUrl: '/gallery', order: 3 }
  ]);

  // 6. Key Features State
  const [features, setFeatures] = useState([
    { id: 'FT-01', title: 'CBSE Affiliated English Medium', desc: 'Comprehensive curriculum from Kindergarten to Grade 12', icon: 'GraduationCap' },
    { id: 'FT-02', title: '100% CCTV Monitored Campus', desc: 'Complete 360-degree security and child safety standards', icon: 'ShieldCheck' },
    { id: 'FT-03', title: 'GPS Enabled Bus Transportation', desc: 'Live bus tracking routes across Jargwan, Barheti, Debai and Bulandshahr', icon: 'Bus' },
    { id: 'FT-04', title: 'Digital Smart Boards & AI Labs', desc: 'Interactive visual pedagogy with audio-visual learning', icon: 'Sparkles' },
    { id: 'FT-05', title: 'RO Purified Water & Medical Infirmary', desc: 'Clean drinking water and on-campus first aid healthcare care', icon: 'HeartPulse' }
  ]);

  // 7. Testimonials State
  const [testimonials, setTestimonials] = useState([
    { id: 'TST-01', name: 'Sh. Dharmendra Sharma', studentRelation: 'Father of Aarav Sharma (Class 10-A)', rating: 5, quote: 'Dadheech Memorial School has provided exceptional academic discipline and values to my son. The teachers are devoted and very supportive.' },
    { id: 'TST-02', name: 'Smt. Kavita Raghav', studentRelation: 'Mother of Ananya Singh (Class 10-A)', rating: 5, quote: 'The smart classrooms and robotics labs give students immense practical knowledge. We are very proud of the school administration.' },
    { id: 'TST-03', name: 'Adv. Virendra Yadav', studentRelation: 'Father of Ritu Yadav (Class 10-A)', rating: 5, quote: 'Excellent transportation, safe campus environment, and regular parent-teacher updates through the SMS mobile portal.' }
  ]);

  // 8. Services & Activities State
  const [services, setServices] = useState([
    { id: 'SRV-01', title: 'Holistic STEM & Coding Labs', desc: 'Hands-on practicals in Physics, Chemistry, Biology and Python programming.' },
    { id: 'SRV-02', title: 'Sports Academy & Martial Arts', desc: 'Cricket, Football, Basketball, Taekwondo, and Athletic track events.' },
    { id: 'SRV-03', title: 'Music, Classical Dance & Fine Arts', desc: 'Vocal music, Tabla, Keyboard synthesizer, and creative canvas painting.' },
    { id: 'SRV-04', title: 'Career Guidance & Olympiad Mentorship', desc: 'Special preparation for NTSE, JEE, NEET, NDA, and CBSE Board Honors.' }
  ]);

  // 9. FAQ State
  const [faqs, setFaqs] = useState([
    { id: 'FAQ-01', question: 'What is the admission procedure for Session 2026-27?', answer: 'Parents can fill the online admission registration form on the portal or visit the school reception desk with child Birth Certificate, Aadhar Card, and previous report card.' },
    { id: 'FAQ-02', question: 'What are the school operational hours?', answer: 'Summer Timings: 07:45 AM to 01:45 PM. Winter Timings: 08:30 AM to 02:30 PM (Monday to Saturday).' },
    { id: 'FAQ-03', question: 'Is school transport bus facility available in surrounding villages?', answer: 'Yes, our GPS-enabled fleet of 6 school buses covers 45+ pick-up points across Jargwan, Barheti, Shikarpur, Debai, and nearby rural areas.' },
    { id: 'FAQ-04', question: 'Can parents pay tuition fees online?', answer: 'Yes, fees can be paid via UPI, Net Banking, Debit/Credit Card on the School ERP portal or at the school fee counter.' }
  ]);

  // 10. Gallery Categories State
  const [galleryCategories, setGalleryCategories] = useState([
    { id: 'GCAT-01', name: 'Annual Sports & Athletic Meet', totalPhotos: 24 },
    { id: 'GCAT-02', name: 'Independence Day & Republic Day', totalPhotos: 18 },
    { id: 'GCAT-03', name: 'Science & Robotics Exhibition', totalPhotos: 32 },
    { id: 'GCAT-04', name: 'Smart Classrooms & Campus Infrastructure', totalPhotos: 15 },
    { id: 'GCAT-05', name: 'Art, Music & Cultural Gala', totalPhotos: 20 }
  ]);

  // 11. Gallery Media State
  const [galleryMedia, setGalleryMedia] = useState([
    { id: 'MED-01', title: 'Class 10 CBSE Board Toppers Felicitation Ceremony', category: 'Annual Sports & Athletic Meet', date: '2026-08-15', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60' },
    { id: 'MED-02', title: 'Robotics & STEM Lab Hands-on Workshop', category: 'Science & Robotics Exhibition', date: '2026-08-20', url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&auto=format&fit=crop&q=60' },
    { id: 'MED-03', title: 'Inter-House Basketball Championship Finals', category: 'Annual Sports & Athletic Meet', date: '2026-08-26', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=60' },
    { id: 'MED-04', title: 'Senior Wing Academic Smart Classroom Lecture', category: 'Smart Classrooms & Campus Infrastructure', date: '2026-08-28', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=60' }
  ]);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    showToast('Website & CMS settings updated successfully! 🌐', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top Navigation Suite matching all 11 sub-items from screenshot */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1.5 min-w-max text-xs font-bold">
          {[
            { id: 'setting', label: '⚙️ Setting' },
            { id: 'menu', label: '📋 Menu' },
            { id: 'page-section', label: '📑 Page Section' },
            { id: 'manage-page', label: '📄 Manage Page' },
            { id: 'slider', label: '🖼️ Slider' },
            { id: 'features', label: '⭐ Features' },
            { id: 'testimonial', label: '💬 Testimonial' },
            { id: 'service', label: '🛠️ Service' },
            { id: 'faq', label: '❓ Faq' },
            { id: 'gallery-category', label: '🗂️ Gallery Category' },
            { id: 'gallery', label: '📷 Gallery' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-rose-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ⚙️ 1. SETTING (Exact screenshot match) */}
      {/* ========================================================================= */}
      {activeTab === 'setting' && (
        <div className="space-y-6">
          {/* Select Ground / Branch Section */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider">Select Ground</h3>
            <div className="flex flex-col sm:flex-row items-end gap-3">
              <div className="flex-1 w-full">
                <label className="font-bold text-slate-700 dark:text-slate-300 text-xs block mb-1">
                  Branch <span className="text-rose-500">*</span>
                </label>
                <select
                  value={cmsSettings.branch}
                  onChange={(e) => setCmsSettings({ ...cmsSettings, branch: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold text-xs"
                >
                  <option value="DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)">
                    DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)
                  </option>
                  <option value="DADHEECH MEMORIAL PUBLIC SCHOOL JUNIOR WING (BARHETI)">
                    DADHEECH MEMORIAL PUBLIC SCHOOL JUNIOR WING (BARHETI)
                  </option>
                  <option value="DADHEECH KIDS PLAY SCHOOL">
                    DADHEECH KIDS PLAY SCHOOL
                  </option>
                </select>
              </div>
              <button
                onClick={() => showToast('Branch filter applied!', 'info')}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
              >
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Website Settings Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-600" /> Website Settings & CMS Configuration
              </h3>
              <Badge variant="success">CMS Engine Active</Badge>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Cms Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={cmsSettings.cmsTitle}
                    onChange={(e) => setCmsSettings({ ...cmsSettings, cmsTitle: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Cms Url Alias <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={cmsSettings.cmsUrlAlias}
                    onChange={(e) => setCmsSettings({ ...cmsSettings, cmsUrlAlias: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Cms Frontend <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-4 pt-1">
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="cmsFrontend"
                        checked={cmsSettings.cmsFrontend === 'Enabled'}
                        onChange={() => setCmsSettings({ ...cmsSettings, cmsFrontend: 'Enabled' })}
                        className="text-blue-600"
                      />
                      <span>Enabled</span>
                    </label>
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="cmsFrontend"
                        checked={cmsSettings.cmsFrontend === 'Disabled'}
                        onChange={() => setCmsSettings({ ...cmsSettings, cmsFrontend: 'Disabled' })}
                        className="text-blue-600"
                      />
                      <span>Disabled</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Online Admission <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-4 pt-1">
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="onlineAdmission"
                        checked={cmsSettings.onlineAdmission === 'Enabled'}
                        onChange={() => setCmsSettings({ ...cmsSettings, onlineAdmission: 'Enabled' })}
                        className="text-blue-600"
                      />
                      <span>Enabled</span>
                    </label>
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="onlineAdmission"
                        checked={cmsSettings.onlineAdmission === 'Disabled'}
                        onChange={() => setCmsSettings({ ...cmsSettings, onlineAdmission: 'Disabled' })}
                        className="text-blue-600"
                      />
                      <span>Disabled</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Receive Inquiry Email To <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={cmsSettings.receiveEmailTo}
                    onChange={(e) => setCmsSettings({ ...cmsSettings, receiveEmailTo: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Contact Phone Numbers
                  </label>
                  <input
                    type="text"
                    value={cmsSettings.contactNumber}
                    onChange={(e) => setCmsSettings({ ...cmsSettings, contactNumber: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  School Address (Shown in Website Footer)
                </label>
                <input
                  type="text"
                  value={cmsSettings.address}
                  onChange={(e) => setCmsSettings({ ...cmsSettings, address: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <Save className="w-4 h-4" /> Save Website Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📋 2. MENU */}
      {/* ========================================================================= */}
      {activeTab === 'menu' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Menu className="w-5 h-5 text-indigo-600" /> Header Navigation Menu Builder
              </h3>
              <p className="text-xs text-slate-500">Configure website navigation links, page routes and display order</p>
            </div>
            <button
              onClick={() => showToast('New menu item created!', 'success')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Menu Item
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Order</th>
                  <th className="p-3.5">Menu Title</th>
                  <th className="p-3.5">Route / URL</th>
                  <th className="p-3.5">Target</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {menuItems.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-slate-400">#{item.order}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{item.title}</td>
                    <td className="p-3.5 font-mono text-indigo-600">{item.url}</td>
                    <td className="p-3.5 font-semibold text-slate-500">{item.openInNewTab ? 'New Tab ↗' : 'Same Tab'}</td>
                    <td className="p-3.5"><Badge variant="success">{item.status}</Badge></td>
                    <td className="p-3.5 text-right">
                      <button onClick={() => showToast(`Edit menu ${item.title}`, 'info')} className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📑 3. PAGE SECTION */}
      {/* ========================================================================= */}
      {activeTab === 'page-section' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Layout className="w-5 h-5 text-indigo-600" /> Homepage Page Sections Layout
              </h3>
              <p className="text-xs text-slate-500">Enable or disable visual sections on the public school landing homepage</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map(sec => (
              <div key={sec.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-slate-400">Position #{sec.order}</span>
                  <Badge variant={sec.status === 'Enabled' ? 'success' : 'warning'}>{sec.status}</Badge>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{sec.name}</h4>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-slate-500">{sec.sectionKey}</span>
                  <button
                    onClick={() => {
                      setSections(sections.map(s => s.id === sec.id ? { ...s, status: s.status === 'Enabled' ? 'Disabled' : 'Enabled' } : s));
                      showToast(`Section ${sec.name} status toggled!`, 'info');
                    }}
                    className="text-xs font-bold text-indigo-600 hover:underline"
                  >
                    Toggle Visibility
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📄 4. MANAGE PAGE */}
      {/* ========================================================================= */}
      {activeTab === 'manage-page' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> Static Content Pages Manager
              </h3>
              <p className="text-xs text-slate-500">Edit content for About Us, Mandatory Public Disclosures, and Fee Rules</p>
            </div>
            <button
              onClick={() => showToast('Create new page modal', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Create New Page
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Page Title</th>
                  <th className="p-3.5">URL Slug</th>
                  <th className="p-3.5">Last Updated</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {pages.map(pg => (
                  <tr key={pg.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{pg.title}</td>
                    <td className="p-3.5 font-mono text-indigo-600">/{pg.slug}</td>
                    <td className="p-3.5 font-mono text-slate-500">{pg.lastModified}</td>
                    <td className="p-3.5"><Badge variant="success">{pg.status}</Badge></td>
                    <td className="p-3.5 text-right">
                      <button onClick={() => showToast(`Edit page ${pg.title}`, 'info')} className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg text-[10px]">
                        Edit Content
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🖼️ 5. SLIDER */}
      {/* ========================================================================= */}
      {activeTab === 'slider' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-indigo-600" /> Homepage Carousel Banner Sliders
              </h3>
              <p className="text-xs text-slate-500">Manage high-resolution photography banners and call-to-action buttons</p>
            </div>
            <button
              onClick={() => showToast('Add new banner slide', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Slider
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sliders.map(sld => (
              <div key={sld.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <div className="flex justify-between items-center">
                  <Badge variant="primary">Slide #{sld.order}</Badge>
                  <span className="text-[10px] font-mono text-slate-400">{sld.id}</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{sld.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{sld.subtitle}</p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="font-bold text-indigo-600">Button: "{sld.buttonText}"</span>
                  <button onClick={() => showToast('Edit slider', 'info')} className="p-1 text-slate-500 hover:text-indigo-600">
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⭐ 6. FEATURES */}
      {/* ========================================================================= */}
      {activeTab === 'features' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" /> Key Institutional Highlights & Features
              </h3>
              <p className="text-xs text-slate-500">Showcase core academic strengths, infrastructure and safety features</p>
            </div>
            <button
              onClick={() => showToast('Add new feature', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Feature Card
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.id} className="p-5 rounded-3xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{f.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 💬 7. TESTIMONIAL */}
      {/* ========================================================================= */}
      {activeTab === 'testimonial' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" /> Parent & Alumni Testimonials
              </h3>
              <p className="text-xs text-slate-500">Manage reviews, ratings and authentic parent testimonials</p>
            </div>
            <button
              onClick={() => showToast('Add testimonial modal', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Testimonial
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">"{t.quote}"</p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-white text-xs">{t.name}</h5>
                  <span className="text-[10px] text-slate-400">{t.studentRelation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🛠️ 8. SERVICE */}
      {/* ========================================================================= */}
      {activeTab === 'service' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" /> Co-Curricular & Special Academic Services
              </h3>
              <p className="text-xs text-slate-500">STEM Labs, Martial Arts, Olympiad coaching & Fine arts</p>
            </div>
            <button
              onClick={() => showToast('Add service', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Service
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(s => (
              <div key={s.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ❓ 9. FAQ */}
      {/* ========================================================================= */}
      {activeTab === 'faq' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" /> Frequently Asked Questions (FAQ)
              </h3>
              <p className="text-xs text-slate-500">Answers to common admission, transport, timings and fee questions</p>
            </div>
            <button
              onClick={() => showToast('Add new FAQ', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add FAQ
            </button>
          </div>

          <div className="space-y-3">
            {faqs.map(f => (
              <div key={f.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-2">
                  <span className="p-1 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-600 font-mono text-[10px]">Q</span>
                  {f.question}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🗂️ 10. GALLERY CATEGORY */}
      {/* ========================================================================= */}
      {activeTab === 'gallery-category' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-indigo-600" /> Photo & Video Gallery Albums
              </h3>
              <p className="text-xs text-slate-500">Create event albums for Annual Days, Sports, Labs, and Festivals</p>
            </div>
            <button
              onClick={() => showToast('Add gallery album category', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Album
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryCategories.map(gc => (
              <div key={gc.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex justify-between items-center">
                  <Badge variant="primary">{gc.id}</Badge>
                  <span className="text-xs font-mono font-bold text-emerald-600">{gc.totalPhotos} Photos</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{gc.name}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📷 11. GALLERY MEDIA */}
      {/* ========================================================================= */}
      {activeTab === 'gallery' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-indigo-600" /> Media Gallery Manager
              </h3>
              <p className="text-xs text-slate-500">Upload school event photographs and campus infrastructure media</p>
            </div>
            <button
              onClick={() => showToast('Upload photo modal', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Upload className="w-4 h-4" /> Upload Photo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryMedia.map(m => (
              <div key={m.id} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 space-y-2">
                <img src={m.url} alt={m.title} className="w-full h-40 object-cover hover:scale-105 transition-all" />
                <div className="p-3 space-y-1">
                  <span className="text-[10px] font-bold text-indigo-600 block">{m.category}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs line-clamp-2">{m.title}</h4>
                  <span className="text-[10px] font-mono text-slate-400 block">{m.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default FrontendCMSPage;
