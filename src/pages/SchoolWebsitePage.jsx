import React, { useState, useEffect } from 'react';
import {
  School,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Building2,
  Bus,
  Cpu,
  Trophy,
  Star,
  Send,
  Calendar,
  Layers,
  HeartHandshake,
  Sun,
  Zap,
  Tv,
  Palette,
  Compass,
  FileText,
  Volume2,
  ExternalLink,
  MessageCircle,
  Download,
  Check,
  Eye,
  X,
  Flame,
  Globe,
  Home,
  Image as ImageIcon,
  HelpCircle,
  Menu,
  Briefcase,
  UserCheck,
  FileCheck,
  CheckCheck,
  Smartphone,
  Video,
  Share2,
  Target,
  Lightbulb,
  Compass as CompassIcon
} from 'lucide-react';
import { useToast } from '../components/common/Toast';

// 🌟 Custom Colored Brand SVG Icons
const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="url(#ig-grad-ked)" />
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34z" fill="#ffffff" />
    <defs>
      <linearGradient id="ig-grad-ked" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FA8F21" />
        <stop offset="0.5" stopColor="#D82D7E" />
        <stop offset="1" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>
  </svg>
);

const PlayStoreIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.37-.367-.61-.91-.61-1.579V3.393c0-.67.24-1.213.61-1.579z" fill="#00D3FF" />
    <path d="M17.18 8.613L4.855 1.5c-.417-.24-.877-.333-1.246-.314l10.183 10.814 3.388-3.387z" fill="#00F076" />
    <path d="M17.18 15.387l-3.388-3.387-10.183 10.814c.369.019.829-.074 1.246-.314l12.325-7.113z" fill="#FF3A44" />
    <path d="M21.575 11.135l-4.395-2.522-3.388 3.387 3.388 3.387 4.395-2.522c.813-.467.813-1.263 0-1.73z" fill="#FFC400" />
  </svg>
);

export const SchoolWebsitePage = ({ onGoToLogin }) => {
  const { showToast } = useToast();

  const getInitialRoute = () => {
    const rawHash = window.location.hash.replace('#', '');
    if (rawHash.startsWith('about-')) return { page: 'about', sub: rawHash.replace('about-', '') };
    if (rawHash.startsWith('campuses-')) return { page: 'campuses', sub: rawHash.replace('campuses-', '') };
    if (rawHash.startsWith('selections-')) return { page: 'selections', sub: rawHash.replace('selections-', '') };
    const validPages = ['home', 'about', 'campuses', 'academic', 'facilities', 'selections', 'gallery', 'admissions', 'contact'];
    const page = validPages.includes(rawHash) ? rawHash : 'home';
    return { page, sub: 'all' };
  };

  const initialRoute = getInitialRoute();

  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [activeSubSection, setActiveSubSection] = useState(initialRoute.sub);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [prospectusModalOpen, setProspectusModalOpen] = useState(false);
  const [selectedProspectusPage, setSelectedProspectusPage] = useState(0);
  const [selectedCampusTab, setSelectedCampusTab] = useState(0);

  const [inquiryForm, setInquiryForm] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    classSeeking: 'Class 1',
    branch: 'Dadheech Memorial Public School (Main Campus - Ramghat Road Border, Jargwan)',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const { page, sub } = getInitialRoute();
      setCurrentPage(page);
      setActiveSubSection(sub);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, sub = 'all') => {
    setCurrentPage(page);
    setActiveSubSection(sub);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    if (sub && sub !== 'all') {
      window.location.hash = `${page}-${sub}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentPage !== 'home') return;
    const interval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentPage]);

  // 1. KED-Style Full-Width Modern Hero Slides
  const heroSlides = [
    {
      title: "Personalized Education for 21st-Century Leaders",
      subtitle: "Empowering young minds from Darkness to Brightness with goal-driven mentoring, strong values, and premier competitive success.",
      tag: "Affiliated to Bhartiya Shiksha Board (BSB) • School Code: 00065",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
      cta: "Apply for Admission 2026-27",
      target: "admissions"
    },
    {
      title: "44+ Premier National Selections",
      subtitle: "Remarkable achievements in AMU, Jawahar Navodaya Vidyalaya, Vidyagyan Leadership Academy & AECS Narora.",
      tag: "Hall of Fame • 24 Years of Academic Excellence (Since July 2002)",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Hall of Fame",
      target: "selections"
    },
    {
      title: "3 Modern Campuses across Bulandshahr & Aligarh",
      subtitle: "World-class learning environments from Playgroup to Senior Secondary (12th) with smart labs, sports complexes & GPS transport.",
      tag: "Main Senior Campus • Barheti Campus • Dadheech Kids School",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80",
      cta: "Discover Our Schools",
      target: "campuses"
    }
  ];

  // 2. KED-Style Metrics / Statistics Counter
  const statistics = [
    { label: "Years of Educational Legacy", value: "24+", icon: Award, sub: "Estd. July 2002" },
    { label: "Premier National Selections", value: "44+", icon: Trophy, sub: "AMU, JNV & Vidyagyan" },
    { label: "Modern School Campuses", value: "3", icon: Building2, sub: "Bulandshahr & Aligarh" },
    { label: "Active Nurtured Students", value: "1,500+", icon: Users, sub: "Playgroup to 12th" },
    { label: "Board Examination Pass Rate", value: "100%", icon: GraduationCap, sub: "BSB Board Standard" },
    { label: "Personalized Student Ratio", value: "15:1", icon: HeartHandshake, sub: "Goal-Driven Mentoring" }
  ];

  // 3. The Dadheech Educational Philosophy (Inspired by KED Program)
  const kedProgramPillars = [
    {
      title: "Personalized Learning & Goal Setting",
      icon: Target,
      desc: "Every student learns at their own optimal pace. Personal academic coaches set weekly goals, conduct one-on-one reviews, and build tailored learning plans."
    },
    {
      title: "Self-Regulated & Experiential Learning",
      icon: Lightbulb,
      desc: "We train students to take ownership of their education through hands-on STEM experiments, smart digital boards, practical mathematics, and analytical research."
    },
    {
      title: "Values, Character & Heritage",
      icon: ShieldCheck,
      desc: "Rooted deeply in Indian culture and universal moral virtues. We nurture integrity, empathy, national pride, and social responsibility."
    },
    {
      title: "Life Skills, Sports & Creative Arts",
      icon: Trophy,
      desc: "Comprehensive athletic training, yoga, vocal & instrumental music, classical dance, visual arts, and debating integrated into the daily curriculum."
    }
  ];

  // 4. Our Schools / Campuses Data (Segmented KED Structure)
  const campusesData = [
    {
      id: "main-campus",
      name: "DMPS Senior Secondary Campus (Main)",
      grades: "Playgroup (PG) to Class 12th (Senior Secondary)",
      location: "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)",
      phone: "+91 97589 75880 / 96270 32626",
      email: "dmpsjargawan@gmail.com",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Affiliated to Bhartiya Shiksha Board (BSB) - Code 00065",
        "Senior Science (PCM/PCB), Commerce & Humanities Streams",
        "Advanced Physics, Chemistry, Biology & AI Computer Labs",
        "Multi-Sport Athletic Complex (Cricket, Volleyball, Athletics, Yoga)",
        "Safe GPS-Enabled Bus Network covering 30+ towns & villages"
      ],
      description: "Our flagship Senior Secondary institution established in July 2002. Offering comprehensive schooling from early childhood through class 12th with modern infrastructure, digital classrooms, and top competitive entrance coaching."
    },
    {
      id: "barheti-campus",
      name: "DMPS Junior High Campus (Barheti)",
      grades: "Playgroup (PG) to Class 8th (Junior High)",
      location: "Barheti ADF, Jawan, Chherat, Aligarh (U.P.)",
      phone: "+91 86300 08371",
      email: "dadheechsociety@gmail.com",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Strong Foundational Literacy & Mathematical Fluency",
        "Activity-Based Experiential Learning Studios",
        "Special Entrance Preparation for JNV & Vidyagyan",
        "Safe, Child-Friendly & Digitally Connected Classrooms",
        "Focus on Spoken English & Public Speaking Skills"
      ],
      description: "Located strategically in Aligarh district, our Barheti campus nurtures middle and primary school learners with individualized attention, robust conceptual foundations, and experiential learning."
    },
    {
      id: "kids-school",
      name: "Dadheech Kids School (Early Learning Sanctuary)",
      grades: "Playgroup, Nursery, LKG, UKG to Class 2nd",
      location: "Vinay Nagar, Sangwan City Road, Quarsi, P.A.C. Aligarh (U.P.)",
      phone: "+91 96270 32626",
      email: "dadheechkids@gmail.com",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Montessori & Play-Way Early Childhood Framework",
        "Vibrant Theme-Based Smart Classrooms",
        "Soft-Play Activity Zones & Cognitive Sensory Stations",
        "Phonics, Storytelling, Rhymes & Motor Skill Workshops",
        "Certified & Caring Early Childhood Educators"
      ],
      description: "A joyful early childhood sanctuary in Quarsi Aligarh designed to foster curiosity, communication skills, creativity, and confidence in toddlers and young scholars."
    }
  ];

  // 5. Scanned Prospectus Pages
  const prospectusPages = [
    { id: 1, title: "Cover & Campus Branches", src: "/assets/prospectus/cover_campuses.jpg", description: "Our Educational Institutes & 3 Distinct Campuses across Bulandshahr & Aligarh" },
    { id: 2, title: "Society & Founder Legacy", src: "/assets/prospectus/about_page.jpg", description: "About Dadheech Educational Society & Sacred Dedication to Late Dadheech Kumar Rajput" },
    { id: 3, title: "Leadership Messages", src: "/assets/prospectus/messages_page.jpg", description: "Messages from Late Mr. Dauli Singh, Mr. Pramod Kumar Rajput, and Mrs. Kavita Rani" },
    { id: 4, title: "AMU & JNV Qualifiers", src: "/assets/prospectus/qualifiers_amu_jnv.png", description: "23 AMU Entrance Qualifiers & 10 Jawahar Navodaya Vidyalaya Selections" },
    { id: 5, title: "AECS Narora & Activities", src: "/assets/prospectus/qualifiers_aecs_gallery.png", description: "AECS Narora Qualifiers, Central School Selections & Annual Function Moments" }
  ];

  // 6. Complete Authentic 44+ Hall of Fame Data
  const amuStudents = [
    { id: 1, name: "Km. Arati Rajput", father: "Mr. Anar Singh" },
    { id: 2, name: "Km. Kalpana", father: "Mr. Ramprakash" },
    { id: 3, name: "Krishna Kumar", father: "Mr. Ramprakash" },
    { id: 4, name: "Bablu Kumar", father: "Veerpal Singh" },
    { id: 5, name: "Manoj Kumar", father: "Charan Singh" },
    { id: 6, name: "Prashant Kumar", father: "Suresh Chandra" },
    { id: 7, name: "Nirankar", father: "Bhoodev Singh" },
    { id: 8, name: "Sunil Kumar", father: "Ramesh Chandra" },
    { id: 9, name: "Abhishek Kumar", father: "Ashok Kumar" },
    { id: 10, name: "Prashant", father: "Mr. Pramod Kumar" },
    { id: 11, name: "Divya Rajput", father: "Mr. Pramod Kumar" },
    { id: 12, name: "Neeresh Kumar", father: "Mr. Radhelal" },
    { id: 13, name: "Dushyant Kumar", father: "Sanjeev Ratan" },
    { id: 14, name: "Km. Laxmi", father: "Mr. Billu Singh" },
    { id: 15, name: "Yashveer Singh", father: "Tilak Singh" },
    { id: 16, name: "Rahul Kumar", father: "Kailash Chandra" },
    { id: 17, name: "Vishnu Kumar", father: "Mr. Sunil Kumar" },
    { id: 18, name: "Bhuvnesh Kumar", father: "Shyoraj Singh" },
    { id: 19, name: "Mani Rajput", father: "Mr. Pramod Kumar" },
    { id: 20, name: "Rinku Gupta", father: "Manoj Kumar" },
    { id: 21, name: "Shivam Kumar", father: "Sanjay Kumar" },
    { id: 22, name: "Deepika Tomar", father: "Anil Tomar" },
    { id: 23, name: "Kirti Singh", father: "Vinod Kumar" }
  ];

  const jnvStudents = [
    { id: 1, name: "Km. Jyoti", father: "Charan Singh" },
    { id: 2, name: "Km. Renu", father: "Suresh Chandra" },
    { id: 3, name: "Neha Rajput", father: "Mr. Pramod Kumar" },
    { id: 4, name: "Divya Rajput", father: "Mr. Pramod Kumar" },
    { id: 5, name: "Mani Rajput", father: "Mr. Pramod Kumar" },
    { id: 6, name: "Neeresh Kumar", father: "Mr. Radhelal" },
    { id: 7, name: "Kajal Verma", father: "Mr. Shyoraj Singh" },
    { id: 8, name: "Sachin Kumar", father: "Harkesh Singh" },
    { id: 9, name: "Shivam Kumar", father: "Rajesh Kumar" },
    { id: 10, name: "Shahrukh Khan", father: "Babu Khan" }
  ];

  const vidyagyanStudents = [
    { id: 1, name: "Divya Rajput", father: "Pramod Kumar" },
    { id: 2, name: "Dev Garg", father: "Anil Kumar" },
    { id: 3, name: "Neeresh Kumar", father: "Radhelal" },
    { id: 4, name: "Mani Rajput", father: "Pramod Kumar" },
    { id: 5, name: "Prashant Kumar", father: "Pramod Kumar" }
  ];

  const aecsStudents = [
    { id: 1, name: "Km. Ritika", father: "Charan Singh" },
    { id: 2, name: "Tarun Kumar", father: "Charan Singh" },
    { id: 3, name: "Nishant Kumar", father: "Charan Singh" },
    { id: 4, name: "Shirangi Pathak", father: "Bhagwan Shahay" },
    { id: 5, name: "Shushank Kumar", father: "Ajab Singh" },
    { id: 6, name: "Anu Yadav", father: "Vijendra Singh" }
  ];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryForm.parentName || !inquiryForm.phone || !inquiryForm.studentName) {
      showToast('Please fill in all mandatory fields (Parent Name, Phone, Student Name)', 'error');
      return;
    }
    setIsSubmitted(true);
    showToast('Application Submitted Successfully! Our Admissions Desk will contact you shortly.', 'success');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-600 selection:text-white flex flex-col justify-between">
      
      {/* 🌟 1. Top Utility Ribbon (Clean International KED.EDU.IN Style) */}
      <div className="bg-[#0b1e38] text-slate-200 py-2.5 px-4 sm:px-8 text-xs border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left Announcement */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-[#0b1e38] font-black text-[10px] uppercase tracking-wider animate-pulse">
              Admissions 2026-27 Open
            </span>
            <span className="hidden sm:inline text-slate-300 text-[11px]">
              Dadheech Educational Group • Affiliated to Bhartiya Shiksha Board (BSB)
            </span>
          </div>

          {/* Right Channels & ERP Portal Shortcut */}
          <div className="flex items-center gap-3 ml-auto flex-wrap">
            {/* Quick Brand Social Icons in Top Ribbon */}
            <div className="hidden lg:flex items-center gap-1.5 border-r border-slate-700 pr-3 mr-1">
              <a
                href="https://www.facebook.com/dadheech.dadheech.37/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Page (Schools)"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/dadheechschool/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @dadheechschool"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=co.thanos.iymus&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                title="Dadheech Classes App on Google Play"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm"
              >
                <PlayStoreIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@dadheecheducationtrainingi24"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Channel"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3 text-slate-300 text-[11px]">
              <a href="tel:+919758975880" className="flex items-center gap-1 font-semibold hover:text-white">
                <Phone className="w-3 h-3 text-amber-400" /> +91 97589 75880
              </a>
            </div>

            <button
              onClick={onGoToLogin}
              className="px-3.5 py-1 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0b1e38] font-black text-[11px] flex items-center gap-1 shadow transition-all"
            >
              <Lock className="w-3 h-3" />
              <span>School ERP Login</span>
            </button>

            <button
              onClick={() => setProspectusModalOpen(true)}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold border border-slate-700"
            >
              <Download className="w-3 h-3 text-amber-400" />
              <span>Prospectus</span>
            </button>
          </div>

        </div>
      </div>

      {/* 🏛️ 2. Main Brand Header (KED.EDU.IN Inspired Clean White Header & Mega Navigation) */}
      <header className="sticky top-0 z-50 bg-white/95 text-slate-900 border-b border-slate-200 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* School Brand Crest & Typography */}
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="relative w-12 h-12 rounded-full bg-white p-0.5 shadow-md border-2 border-[#0b1e38] group-hover:scale-105 transition-all">
              <img
                src="/logo.png"
                alt="Dadheech Educational Group Crest"
                className="w-full h-full object-contain rounded-full"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-lg sm:text-xl text-[#0b1e38] tracking-tight uppercase group-hover:text-sky-700 transition-colors">
                  Dadheech
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-300">
                  Estd. 2002
                </span>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                Memorial Public School
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (KED Architecture) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-700">
            <button
              onClick={() => navigateTo('home')}
              className={`py-2 transition-colors ${currentPage === 'home' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => navigateTo('about')}
                className={`flex items-center gap-1 transition-colors ${currentPage === 'about' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 w-60 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 z-50 text-slate-800 normal-case font-semibold">
                  <button
                    onClick={() => navigateTo('about', 'about-us')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700"
                  >
                    About DMPS & Society
                  </button>
                  <button
                    onClick={() => navigateTo('about', 'vision')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700"
                  >
                    Vision, Mission & Motto
                  </button>
                  <button
                    onClick={() => navigateTo('about', 'founder')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700"
                  >
                    Late Mr. Dauli Singh (Founder)
                  </button>
                  <button
                    onClick={() => navigateTo('about', 'leadership')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700"
                  >
                    Leadership & Management
                  </button>
                </div>
              )}
            </div>

            {/* Our Schools Dropdown */}
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setOpenDropdown('campuses')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => navigateTo('campuses')}
                className={`flex items-center gap-1 transition-colors ${currentPage === 'campuses' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
              >
                <span>Our Schools</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {openDropdown === 'campuses' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 z-50 text-slate-800 normal-case font-semibold">
                  <button
                    onClick={() => navigateTo('campuses', 'main-campus')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700"
                  >
                    DMPS Senior Secondary (Jargwan)
                  </button>
                  <button
                    onClick={() => navigateTo('campuses', 'barheti-campus')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700"
                  >
                    DMPS Junior High (Barheti Aligarh)
                  </button>
                  <button
                    onClick={() => navigateTo('campuses', 'kids-school')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700"
                  >
                    Dadheech Kids School (Quarsi Aligarh)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('academic')}
              className={`py-2 transition-colors ${currentPage === 'academic' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
            >
              Academics
            </button>

            <button
              onClick={() => navigateTo('facilities')}
              className={`py-2 transition-colors ${currentPage === 'facilities' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
            >
              Beyond Academics
            </button>

            <button
              onClick={() => navigateTo('selections')}
              className={`py-2 transition-colors ${currentPage === 'selections' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
            >
              Hall of Fame
            </button>

            <button
              onClick={() => navigateTo('gallery')}
              className={`py-2 transition-colors ${currentPage === 'gallery' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
            >
              Gallery
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`py-2 transition-colors ${currentPage === 'contact' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigateTo('admissions')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-sky-600/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions 2026-27</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-3 shadow-2xl text-slate-800">
            <button onClick={() => navigateTo('home')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Home</button>
            <button onClick={() => navigateTo('about')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">About Us</button>
            <button onClick={() => navigateTo('campuses')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Our Schools (3 Campuses)</button>
            <button onClick={() => navigateTo('academic')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Academics</button>
            <button onClick={() => navigateTo('facilities')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Beyond Academics</button>
            <button onClick={() => navigateTo('selections')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-sky-700">Hall of Fame (44+)</button>
            <button onClick={() => navigateTo('gallery')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Gallery</button>
            <button onClick={() => navigateTo('admissions')} className="w-full text-left py-2 px-3 rounded-lg bg-sky-600 text-white font-black text-sm uppercase">Admissions 2026-27 Open</button>
            <button onClick={() => navigateTo('contact')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Contact Us</button>
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button onClick={onGoToLogin} className="w-full py-2.5 rounded-xl bg-[#0b1e38] text-white font-black text-xs flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>School ERP & Student Login</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setProspectusModalOpen(true);
                }}
                className="w-full py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-sky-600" />
                <span>View Prospectus Booklet</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 🏡 PAGE 1: HOME (KED.EDU.IN Clean White & Modern International Aesthetic) */}
      {/* ========================================================================= */}
      {currentPage === 'home' && (
        <main className="flex-1 space-y-16 pb-16">
          
          {/* 🌟 Modern Hero Banner Carousel */}
          <section className="relative min-h-[560px] lg:min-h-[620px] bg-[#0b1e38] text-white flex items-center overflow-hidden">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  activeHeroSlide === idx ? 'opacity-100 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e38] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e38]/90 via-[#0b1e38]/60 to-transparent" />
              </div>
            ))}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
              <div className="max-w-3xl space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{heroSlides[activeHeroSlide].tag}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white leading-tight tracking-tight">
                  {heroSlides[activeHeroSlide].title}
                </h1>

                <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
                  {heroSlides[activeHeroSlide].subtitle}
                </p>

                <div className="flex items-center gap-4 flex-wrap pt-2">
                  <button
                    onClick={() => navigateTo(heroSlides[activeHeroSlide].target)}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0b1e38] font-black text-xs uppercase tracking-wider shadow-2xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span>{heroSlides[activeHeroSlide].cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => navigateTo('campuses')}
                    className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                  >
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span>Our 3 Campuses</span>
                  </button>

                  <button
                    onClick={() => setProspectusModalOpen(true)}
                    className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Prospectus Booklet</span>
                  </button>
                </div>

              </div>

              {/* Slider Dots */}
              <div className="flex items-center gap-2 mt-12">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHeroSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeHeroSlide === i ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

            </div>
          </section>

          {/* ⚡ 4 Floating Quick-Action Pillars (Overlapping Hero in KED.EDU.IN Style) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div
                onClick={() => navigateTo('admissions')}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">
                  Admissions 2026-27
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Enroll for Playgroup to Class 12th Senior Secondary across all 3 campuses.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-sky-700 mt-3 group-hover:underline">
                  Apply Online <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              <div
                onClick={() => navigateTo('campuses')}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">
                  Our 3 Campuses
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Main Senior Campus, Barheti Aligarh & Dadheech Kids Early Learning Center.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-sky-700 mt-3 group-hover:underline">
                  Explore Branches <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              <div
                onClick={() => navigateTo('selections')}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">
                  Hall of Fame (44+)
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  23 AMU Qualifiers, 10 JNV Selections, Vidyagyan & AECS Narora Champions.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-sky-700 mt-3 group-hover:underline">
                  View Qualifiers <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              <div
                onClick={onGoToLogin}
                className="p-6 rounded-2xl bg-[#0b1e38] text-white border border-slate-800 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0b1e38] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                  School ERP Portal
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Direct login for Students, Parents, Teachers & School Administration.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-amber-400 mt-3 group-hover:underline">
                  Enter Portal <ChevronRight className="w-3 h-3" />
                </span>
              </div>

            </div>
          </section>

          {/* 📊 Key Statistics Ribbon */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                {statistics.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="space-y-1 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <Icon className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                      <div className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-mono tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-slate-800 line-clamp-1">{stat.label}</div>
                      <div className="text-[10px] text-slate-500">{stat.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 🎯 "The Dadheech Excellence Model" (Inspired by KED's Personalized Pedagogical Framework) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
                The Dadheech Pedagogical Model
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0b1e38] font-serif">
                Personalized Education for Every Child
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Adapted from world-class personalized frameworks, our pedagogical model empowers students to become self-regulated, confident, and goal-driven learners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kedProgramPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all space-y-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 🏫 "Our Schools" Multi-Campus Explorer (KED Segmented Style) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
                  Our Schools
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif mt-2">
                  Explore Our 3 Distinct Campuses
                </h2>
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {campusesData.map((campus, idx) => (
                  <button
                    key={campus.id}
                    onClick={() => setSelectedCampusTab(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      selectedCampusTab === idx
                        ? 'bg-[#0b1e38] text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {campus.id === 'main-campus' ? 'Senior Campus (Jargwan)' : campus.id === 'barheti-campus' ? 'Barheti Campus (Aligarh)' : 'Kids School (PAC Aligarh)'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 font-bold text-xs">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{campusesData[selectedCampusTab].location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1e38] font-serif">
                  {campusesData[selectedCampusTab].name}
                </h3>
                <p className="text-xs font-bold text-sky-700">
                  Grades Offered: {campusesData[selectedCampusTab].grades}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {campusesData[selectedCampusTab].description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Campus Highlights:</h4>
                  {campusesData[selectedCampusTab].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 flex-wrap">
                  <a
                    href={`tel:${campusesData[selectedCampusTab].phone.split('/')[0].trim()}`}
                    className="px-4 py-2 rounded-xl bg-[#0b1e38] text-white font-bold text-xs flex items-center gap-1.5 shadow"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Campus Desk</span>
                  </a>
                  <button
                    onClick={() => navigateTo('admissions')}
                    className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs uppercase tracking-wider shadow"
                  >
                    Apply for this Campus
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
                  <img
                    src={campusesData[selectedCampusTab].image}
                    alt={campusesData[selectedCampusTab].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 🏆 Hall of Fame Preview (AMU, JNV & Vidyagyan Champions) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase">
                  Academic Feats & Results
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif mt-2">
                  Hall of Fame — 44+ Premier Selections
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Authentic track record from our scanned official school prospectus records.
                </p>
              </div>

              <button
                onClick={() => navigateTo('selections')}
                className="px-4 py-2 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow"
              >
                <span>View All 44 Qualifiers</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-800 text-[10px] font-black uppercase">
                  AMU Entrance Exam
                </span>
                <div className="text-2xl font-black text-[#0b1e38] font-mono">23 Students</div>
                <p className="text-xs text-slate-600">Selected in Aligarh Muslim University Entrance Tests.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-800 text-[10px] font-black uppercase">
                  JNV Selections
                </span>
                <div className="text-2xl font-black text-[#0b1e38] font-mono">10 Students</div>
                <p className="text-xs text-slate-600">Selected in Jawahar Navodaya Vidyalaya National Entrance.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-800 text-[10px] font-black uppercase">
                  Vidyagyan Academy
                </span>
                <div className="text-2xl font-black text-[#0b1e38] font-mono">5 Students</div>
                <p className="text-xs text-slate-600">Selected in Shiv Nadar Foundation Vidyagyan Leadership Academy.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-800 text-[10px] font-black uppercase">
                  AECS Narora & Kendriya
                </span>
                <div className="text-2xl font-black text-[#0b1e38] font-mono">6 Students</div>
                <p className="text-xs text-slate-600">Selected in Atomic Energy Central School & Central Schools.</p>
              </div>
            </div>
          </section>

          {/* 📑 Prospectus Flip-Booklet Showcase */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl bg-[#0b1e38] text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs border border-white/20">
                  Official Publication
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
                  Download or Browse the DMPS Prospectus Booklet
                </h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Read complete messages from Founder Late Mr. Dauli Singh, Managing Director Mr. Pramod Kumar Rajput, Principal Mrs. Kavita Rani, rules & fee guidelines.
                </p>
              </div>

              <button
                onClick={() => setProspectusModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0b1e38] font-black text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 shrink-0"
              >
                <Eye className="w-4 h-4" />
                <span>Open Interactive Prospectus</span>
              </button>
            </div>
          </section>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 📖 PAGE 2: ABOUT US & LEADERSHIP (Word-for-Word Authentic Prospectus) */}
      {/* ========================================================================= */}
      {currentPage === 'about' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
              Institution History & Sacred Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              About Dadheech Educational Society
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Dadheech Educational Society & Training Institute (Regd. No - 1131, Estd. July 2002). Affiliated to Bhartiya Shiksha Board (BSB).
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-black text-[#0b1e38] font-serif">
                Sacred Dedication & Establishment
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Dadheech Memorial Public School was founded in July 2002 and inaugurated on <strong>4th July 2002</strong> by <strong>Rajveer Singh urf Raju Bhaiya</strong>, former Health Minister of Uttar Pradesh. The institution is dedicated to the sacred memory of <strong>Late Dadheech Kumar Rajput</strong> (born 1st October 1975 at Nagla Kothi, Jargwan, B.S.R. — Engineer at Shriram Piston & Rings Ltd. Ghaziabad).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#0b1e38] text-white border border-slate-800 shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase">
                Founder & Treasurer
              </span>
              <h3 className="text-lg font-black text-amber-300 font-serif">Late Mr. Dauli Singh</h3>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Our aim has always been to remove the darkness of ignorance from rural and semi-urban children and enlighten their path towards self-reliance, national character, and academic brilliance."
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-black uppercase">
                Managing Director & Manager
              </span>
              <h3 className="text-lg font-black text-[#0b1e38] font-serif">Mr. Pramod Kumar Rajput</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                "We provide an environment where children cultivate curiosity, scientific temperament, and moral fortitude. With 44+ selections in premier institutions like AMU and JNV, our students continue to lead."
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-black uppercase">
                Principal
              </span>
              <h3 className="text-lg font-black text-[#0b1e38] font-serif">Mrs. Kavita Rani</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                "Education is not merely the accumulation of facts; it is the training of the mind to think critically. We nurture each child with love, disciplined guidance, and experiential pedagogy."
              </p>
            </div>

          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 🏫 PAGE 3: OUR 3 CAMPUSES (Segmented Schools View) */}
      {/* ========================================================================= */}
      {currentPage === 'campuses' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
              Our 3 Distinct Campuses
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              Our Educational Institutes
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Providing holistic schooling from Playgroup to Senior Secondary (Class 12th) across Bulandshahr and Aligarh.
            </p>
          </div>

          <div className="space-y-8">
            {campusesData.map((campus, idx) => (
              <div
                key={campus.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-[#0b1e38] text-white text-xs font-bold">
                      Campus {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-sky-700">{campus.grades}</span>
                  </div>
                  <h2 className="text-2xl font-black text-[#0b1e38] font-serif">{campus.name}</h2>
                  <p className="text-xs text-slate-600 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{campus.location}</span>
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">{campus.description}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-black text-slate-900 uppercase">Key Features:</span>
                    {campus.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={`tel:${campus.phone.split('/')[0].trim()}`}
                      className="px-4 py-2 rounded-xl bg-[#0b1e38] text-white font-bold text-xs flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>{campus.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-video">
                  <img src={campus.image} alt={campus.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 🎓 PAGE 4: ACADEMICS (Curriculum Framework & BSB Affiliation) */}
      {/* ========================================================================= */}
      {currentPage === 'academic' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
              Curriculum & Pedagogy
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              Academic Excellence Framework
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Affiliated to Bhartiya Shiksha Board (BSB) • Affiliation No: UP0F25070073 • School Code: 00065
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0b1e38] text-base">Pre-Primary Wing</h3>
              <p className="text-xs font-bold text-sky-700">Playgroup, Nursery, LKG, UKG</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Play-way, Montessori methodology, phonics, color recognition, sensorial exploration, and fine-motor skill exercises.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0b1e38] text-base">Primary Wing</h3>
              <p className="text-xs font-bold text-sky-700">Classes 1st to 5th</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strong focus on English, Hindi, Mathematics, Environmental Science, Computer Literacy, General Knowledge, and Value Education.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                <CompassIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0b1e38] text-base">Middle Wing</h3>
              <p className="text-xs font-bold text-sky-700">Classes 6th to 8th</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized subject teachers, Science practicals, Social Sciences, Vedic Mathematics, and intensive JNV/Vidyagyan preparation.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0b1e38] text-base">Senior Secondary</h3>
              <p className="text-xs font-bold text-sky-700">Classes 9th to 12th</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive Board curriculum in Science (PCM/PCB), Commerce, and Humanities with dedicated competitive coaching.
              </p>
            </div>

          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 🔬 PAGE 5: BEYOND ACADEMICS / FACILITIES */}
      {/* ========================================================================= */}
      {currentPage === 'facilities' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
              Campus Infrastructure & Student Life
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              Beyond Academics
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Holistic facilities designed to nurture intellectual, physical, and artistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <Cpu className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Science & Computer Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully equipped Physics, Chemistry, Biology, and high-speed Computer labs with multimedia projectors.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <Trophy className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Sports & Yoga Complex</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Spacious athletic fields for Cricket, Volleyball, Badminton, Kho-Kho, and daily morning yoga routines.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <Bus className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Safe Transport Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                GPS-enabled school buses and vans connecting over 30+ surrounding villages and townships safely.
              </p>
            </div>

          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 🏆 PAGE 6: HALL OF FAME (Complete 44+ Qualifiers Point-by-Point) */}
      {/* ========================================================================= */}
      {currentPage === 'selections' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase">
              Official Competitive Record
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              Hall of Fame — 44+ Qualifiers
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Our pride of students who qualified for top national institutions from Dadheech Memorial Public School.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xl font-black text-[#0b1e38] font-serif flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Aligarh Muslim University (AMU) Entrance — 23 Students</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {amuStudents.map((s) => (
                <div key={s.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-[#0b1e38]">{s.id}. {s.name}</div>
                  <div className="text-slate-500 text-[11px]">D/o or S/o {s.father}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xl font-black text-[#0b1e38] font-serif flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                <span>Jawahar Navodaya Vidyalaya (JNV) — 10 Students</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {jnvStudents.map((s) => (
                <div key={s.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-[#0b1e38]">{s.id}. {s.name}</div>
                  <div className="text-slate-500 text-[11px]">D/o or S/o {s.father}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <h2 className="text-lg font-black text-[#0b1e38] font-serif">
                Vidyagyan Leadership Academy — 5 Students
              </h2>
              <div className="space-y-2">
                {vidyagyanStudents.map((s) => (
                  <div key={s.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between">
                    <span className="font-bold text-[#0b1e38]">{s.id}. {s.name}</span>
                    <span className="text-slate-500">S/o / D/o {s.father}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <h2 className="text-lg font-black text-[#0b1e38] font-serif">
                AECS Narora & Central Schools — 6 Students
              </h2>
              <div className="space-y-2">
                {aecsStudents.map((s) => (
                  <div key={s.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between">
                    <span className="font-bold text-[#0b1e38]">{s.id}. {s.name}</span>
                    <span className="text-slate-500">S/o / D/o {s.father}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 🖼️ PAGE 7: PHOTO GALLERY */}
      {/* ========================================================================= */}
      {currentPage === 'gallery' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
              Campus Moments
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              Photo & Event Gallery
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {prospectusPages.map((pg) => (
              <div
                key={pg.id}
                onClick={() => setSelectedGalleryImage({ title: pg.title, image: pg.src })}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-md cursor-pointer hover:scale-105 transition-transform bg-white"
              >
                <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-2">
                  <img src={pg.src} alt={pg.title} className="max-h-full object-contain" />
                </div>
                <div className="p-3 text-center border-t border-slate-100">
                  <h3 className="font-bold text-[#0b1e38] text-xs">{pg.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 📝 PAGE 8: ADMISSIONS 2026-27 (1-Click Application Portal) */}
      {/* ========================================================================= */}
      {currentPage === 'admissions' && (
        <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase">
              Admissions Open 2026-27
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              Online Admission & Inquiry Form
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Fill out the details below. Our admissions desk will get in touch with you within 24 hours.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-black text-[#0b1e38] font-serif">Application Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{inquiryForm.parentName}</strong>. We have received your inquiry for <strong>{inquiryForm.studentName}</strong> ({inquiryForm.classSeeking}).
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0b1e38] text-white font-bold text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. Rajesh Kumar"
                      value={inquiryForm.parentName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9758975880"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Student's Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aman Rajput"
                      value={inquiryForm.studentName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, studentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Grade / Class Seeking *</label>
                    <select
                      value={inquiryForm.classSeeking}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, classSeeking: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option>Playgroup (PG)</option>
                      <option>Nursery / LKG / UKG</option>
                      <option>Class 1</option>
                      <option>Class 2</option>
                      <option>Class 3</option>
                      <option>Class 4</option>
                      <option>Class 5</option>
                      <option>Class 6</option>
                      <option>Class 7</option>
                      <option>Class 8</option>
                      <option>Class 9</option>
                      <option>Class 10</option>
                      <option>Class 11 (Science / Commerce / Arts)</option>
                      <option>Class 12 (Science / Commerce / Arts)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">Select Campus Branch *</label>
                  <select
                    value={inquiryForm.branch}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, branch: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option>Dadheech Memorial Public School (Main Campus - Ramghat Road Border, Jargwan)</option>
                    <option>DMPS Barheti ADF Campus (Jawan, Chherat, Aligarh)</option>
                    <option>Dadheech Kids School (Vinay Nagar, Sangwan City Road, Quarsi, Aligarh)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">Questions / Specific Requests (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific questions regarding bus transport, hostel, or syllabus..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Application</span>
                </button>
              </form>
            )}
          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 📞 PAGE 9: CONTACT US & OFFICIAL MEDIA HUB */}
      {/* ========================================================================= */}
      {currentPage === 'contact' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">
              Contact Campus Offices
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Reach out to our campus offices for admissions, transport routes, and academic inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-black">
                Main Senior Campus
              </span>
              <h3 className="text-base font-black text-[#0b1e38] font-serif">DMPS Main Campus</h3>
              <p className="text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                Ramghat Road Border, Jargwan, Bulandshahr (U.P.)
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                <p className="text-slate-800 font-mono font-bold">+91 97589 75880 / 96270 32626</p>
                <p className="text-slate-500">dmpsjargawan@gmail.com</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-black">
                Barheti Campus
              </span>
              <h3 className="text-base font-black text-[#0b1e38] font-serif">DMPS Barheti Campus</h3>
              <p className="text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                Barheti ADF, Jawan, Chherat, Aligarh (U.P.)
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                <p className="text-slate-800 font-mono font-bold">+91 86300 08371</p>
                <p className="text-slate-500">dadheechsociety@gmail.com</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-black">
                Kids City Campus
              </span>
              <h3 className="text-base font-black text-[#0b1e38] font-serif">Dadheech Kids School</h3>
              <p className="text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                Vinay Nagar, Sangwan City Road, Quarsi, P.A.C. Aligarh (U.P.)
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                <p className="text-slate-800 font-mono font-bold">+91 96270 32626</p>
                <p className="text-slate-500">dadheechkids@gmail.com</p>
              </div>
            </div>

          </div>

          {/* 🌐 Connect with Us (All 6 Official Channels & Apps Grid) */}
          <div className="p-8 rounded-3xl bg-[#0b1e38] text-white border border-slate-800 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 font-black text-xs uppercase tracking-wider border border-white/20">
                Official Digital Media & App
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
                Connect With Dadheech Educational Group
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
                Subscribe to our channels for daily lectures, events, school activities, and download the official student app.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* 1. YouTube Channel 1 */}
              <a
                href="https://www.youtube.com/@dadheecheducationtrainingi24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all hover:scale-[1.02] shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <YouTubeIcon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-xs group-hover:underline truncate">YouTube (Education & Training)</h4>
                  <p className="text-[11px] text-slate-400 truncate">@dadheecheducationtrainingi24</p>
                  <span className="text-[10px] text-red-400 font-bold flex items-center gap-1 mt-0.5">Watch Lectures ↗</span>
                </div>
              </a>

              {/* 2. YouTube Channel 2 */}
              <a
                href="https://www.youtube.com/@dadheechactivities1379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all hover:scale-[1.02] shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <YouTubeIcon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-xs group-hover:underline truncate">YouTube (School Activities)</h4>
                  <p className="text-[11px] text-slate-400 truncate">@dadheechactivities1379</p>
                  <span className="text-[10px] text-red-400 font-bold flex items-center gap-1 mt-0.5">Annual Functions & Sports ↗</span>
                </div>
              </a>

              {/* 3. Facebook 1 */}
              <a
                href="https://www.facebook.com/dadheech.dadheech.37/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all hover:scale-[1.02] shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <FacebookIcon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-xs group-hover:underline truncate">Facebook (Dadheech Schools)</h4>
                  <p className="text-[11px] text-slate-400 truncate">@dadheech.dadheech.37</p>
                  <span className="text-[10px] text-blue-400 font-bold flex items-center gap-1 mt-0.5">Follow Campus Updates ↗</span>
                </div>
              </a>

              {/* 4. Facebook 2 */}
              <a
                href="https://www.facebook.com/people/Dadheech-Education/100048106256592/?sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all hover:scale-[1.02] shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <FacebookIcon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-xs group-hover:underline truncate">Facebook (Dadheech Education)</h4>
                  <p className="text-[11px] text-slate-400 truncate">Dadheech Educational Society</p>
                  <span className="text-[10px] text-blue-400 font-bold flex items-center gap-1 mt-0.5">Official Society Page ↗</span>
                </div>
              </a>

              {/* 5. Instagram */}
              <a
                href="https://www.instagram.com/dadheechschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all hover:scale-[1.02] shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <InstagramIcon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-xs group-hover:underline truncate">Instagram (@dadheechschool)</h4>
                  <p className="text-[11px] text-slate-400 truncate">Official DMPS Instagram</p>
                  <span className="text-[10px] text-pink-400 font-bold flex items-center gap-1 mt-0.5">Reels, Photos & News ↗</span>
                </div>
              </a>

              {/* 6. Google Play Store App */}
              <a
                href="https://play.google.com/store/apps/details?id=co.thanos.iymus&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all hover:scale-[1.02] shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <PlayStoreIcon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-xs group-hover:underline truncate">Dadheech Classes App</h4>
                  <p className="text-[11px] text-slate-400 truncate">Google Play Store</p>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 mt-0.5">Download Android App ↗</span>
                </div>
              </a>

            </div>
          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 📞 GRAND MODERN FOOTER (with "Designed & Developed by Prashant Rajput") */}
      {/* ========================================================================= */}
      <footer className="bg-[#0b1e38] text-slate-300 pt-12 pb-6 text-xs border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-md border-2 border-amber-400 shrink-0">
                <img
                  src="/logo.png"
                  alt="Dadheech Educational Group Crest"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-black text-sm text-white font-serif block">Dadheech</span>
                <span className="text-[10px] text-slate-400 italic">A Group of Education</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Dadheech Memorial Public School • Dadheech Educational Society (Regd. No - 1131, Estd. 2002). Affiliated to Bhartiya Shiksha Board (BSB).
            </p>
            <p className="text-[10px] text-amber-400 font-bold">Affiliation: UP0F25070073 | School Code: 00065</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Quick Navigation</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><button onClick={() => navigateTo('home')} className="hover:text-amber-400 transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors">About & Leadership</button></li>
              <li><button onClick={() => navigateTo('campuses')} className="hover:text-amber-400 transition-colors">Our 3 Campuses</button></li>
              <li><button onClick={() => navigateTo('academic')} className="hover:text-amber-400 transition-colors">Academic Curriculum</button></li>
              <li><button onClick={() => navigateTo('facilities')} className="hover:text-amber-400 transition-colors">Beyond Academics</button></li>
              <li><button onClick={() => navigateTo('selections')} className="hover:text-amber-400 transition-colors">Hall of Fame (44+)</button></li>
              <li><button onClick={() => navigateTo('admissions')} className="hover:text-amber-400 transition-colors">Admissions 2026-27</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Campus Helplines</h4>
            <ul className="space-y-2 text-[11px]">
              <li>Main Campus: <strong className="text-white font-mono">+91 97589 75880</strong></li>
              <li>Barheti Campus: <strong className="text-white font-mono">+91 86300 08371</strong></li>
              <li>Kids School: <strong className="text-white font-mono">+91 96270 32626</strong></li>
              <li className="text-slate-400 pt-1">Office Hours: 07:30 AM - 01:30 PM</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white mb-3 text-sm">School ERP Portal</h4>
            <button
              onClick={onGoToLogin}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0b1e38] font-black text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Lock className="w-4 h-4" />
              <span>School ERP Login</span>
            </button>
            <button
              onClick={() => setProspectusModalOpen(true)}
              className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>View Prospectus Booklet</span>
            </button>
          </div>

        </div>

        {/* 🌟 Social & Official Channels Bar (Fully Clickable & Connected with Brand Icons!) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 bg-slate-900 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-300 shadow-xl">
          <div className="flex items-center gap-3.5 flex-wrap font-semibold">
            <span className="text-amber-400 font-black tracking-wide uppercase text-[10px] bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
              Official Channels:
            </span>
            
            {/* Facebook 1 Link */}
            <a
              href="https://www.facebook.com/dadheech.dadheech.37/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group"
            >
              <FacebookIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">Facebook (Schools)</span>
            </a>

            {/* Facebook 2 Link */}
            <a
              href="https://www.facebook.com/people/Dadheech-Education/100048106256592/?sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group"
            >
              <FacebookIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">Facebook (Education)</span>
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/dadheechschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group"
            >
              <InstagramIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">@dadheechschool</span>
            </a>

            {/* Dadheech Classes Play Store App Link */}
            <a
              href="https://play.google.com/store/apps/details?id=co.thanos.iymus&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group"
            >
              <PlayStoreIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">Dadheech Classes App</span>
            </a>

            {/* YouTube 1 Link */}
            <a
              href="https://www.youtube.com/@dadheecheducationtrainingi24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group"
            >
              <YouTubeIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">YouTube (Training)</span>
            </a>

            {/* YouTube 2 Link */}
            <a
              href="https://www.youtube.com/@dadheechactivities1379"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group"
            >
              <YouTubeIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">YouTube (Activities)</span>
            </a>
          </div>

          {/* Quick Call Numbers */}
          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-200 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <a href="tel:+919758975880" className="hover:underline hover:text-white">📞 9758975880</a>
            <span>•</span>
            <a href="tel:+919627032626" className="hover:underline hover:text-white">9627032626</a>
          </div>
        </div>

        {/* 👑 Developer Credit & Copyright Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2002 - 2026 Dadheech Memorial Public School (DMPS). All Rights Reserved.</p>
          
          {/* ✨ Developed by Prashant Rajput */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-slate-200 font-bold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Designed & Developed by</span>
              <span className="text-amber-400 font-black tracking-wide underline underline-offset-4">
                Prashant Rajput
              </span>
            </span>
          </div>
        </div>
      </footer>

      {/* 🔍 Lightbox Preview Modal */}
      {selectedGalleryImage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-3 modal-transition border border-slate-200">
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-rose-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedGalleryImage.image}
              alt={selectedGalleryImage.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="p-3 text-center">
              <h4 className="font-black text-slate-900 text-sm">{selectedGalleryImage.title}</h4>
            </div>
          </div>
        </div>
      )}

      {/* 📑 Prospectus Booklet Viewer Modal (Browse Authentic Pages) */}
      {prospectusModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden p-6 shadow-2xl space-y-4 modal-transition border border-slate-200">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0b1e38] text-white flex items-center justify-center font-bold text-xs">
                  DMPS
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    DMPS Official Prospectus & Information Brochure
                  </h3>
                  <p className="text-xs text-slate-500">Dadheech Educational Society & Training Institute</p>
                </div>
              </div>
              <button
                onClick={() => setProspectusModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {prospectusPages.map((pg, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedProspectusPage(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedProspectusPage === idx
                      ? 'bg-[#0b1e38] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Page {idx + 1}: {pg.title}
                </button>
              ))}
            </div>

            <div className="max-h-[65vh] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
              <img
                src={prospectusPages[selectedProspectusPage].src}
                alt={prospectusPages[selectedProspectusPage].title}
                className="max-h-[60vh] w-auto object-contain rounded shadow"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <button
                  disabled={selectedProspectusPage === 0}
                  onClick={() => setSelectedProspectusPage((prev) => prev - 1)}
                  className="px-3 py-1.5 rounded bg-slate-100 text-slate-700 disabled:opacity-40 font-bold"
                >
                  Previous Page
                </button>
                <button
                  disabled={selectedProspectusPage === prospectusPages.length - 1}
                  onClick={() => setSelectedProspectusPage((prev) => prev + 1)}
                  className="px-3 py-1.5 rounded bg-slate-100 text-slate-700 disabled:opacity-40 font-bold"
                >
                  Next Page
                </button>
              </div>

              <a
                href={prospectusPages[selectedProspectusPage].src}
                download={`DMPS_Prospectus_Page_${selectedProspectusPage + 1}.png`}
                className="px-4 py-1.5 rounded-lg bg-[#0b1e38] text-white font-bold flex items-center gap-1.5 hover:bg-slate-800"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Scanned Page</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default SchoolWebsitePage;
