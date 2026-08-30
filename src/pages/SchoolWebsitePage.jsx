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
  Search,
  Quote,
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
    <rect width="24" height="24" rx="6" fill="url(#ig-grad-ked-dyn)" />
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34z" fill="#ffffff" />
    <defs>
      <linearGradient id="ig-grad-ked-dyn" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
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
    const validPages = ['home', 'about', 'founder', 'md', 'principal', 'dedication', 'campuses', 'academic', 'facilities', 'selections', 'gallery', 'admissions', 'contact'];
    const page = validPages.includes(rawHash) ? rawHash : 'home';
    return { page, sub: 'all' };
  };

  const initialRoute = getInitialRoute();

  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [activeSubSection, setActiveSubSection] = useState(initialRoute.sub);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [prospectusModalOpen, setProspectusModalOpen] = useState(false);
  const [selectedProspectusPage, setSelectedProspectusPage] = useState(0);
  const [selectedCampusTab, setSelectedCampusTab] = useState(0);
  const [selectedLeaderTab, setSelectedLeaderTab] = useState('founder');
  const [hallOfFameCategory, setHallOfFameCategory] = useState('all');
  const [studentSearchQuery, setStudentSearchQuery] = useState('');

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
    }, 5500);
    return () => clearInterval(interval);
  }, [currentPage]);

  // 1. Dynamic Hero Slides (6 High-Impact Panoramic Slides)
  const heroSlides = [
    {
      title: "Darkness to Brightness • Empowering 21st-Century Leaders",
      subtitle: "Personalized education, sacred Indian values, and unmatched competitive success across 3 modern campuses.",
      tag: "Affiliated to Bhartiya Shiksha Board (BSB) • School Code: 00065",
      image: "/assets/banners/slide1.jpg",
      cta: "Apply for Admission 2026-27",
      target: "admissions"
    },
    {
      title: "DMPS Junior High Campus (Barheti ADF, Aligarh)",
      subtitle: "Dedicated faculty, modern laboratories, and holistic schooling from Nursery to Class 8th.",
      tag: "Barheti Campus • Estd. 2017",
      image: "/assets/banners/slide2.jpg",
      cta: "Explore Our Campuses",
      target: "campuses"
    },
    {
      title: "Dadheech Kids School (Quarsi, PAC Aligarh)",
      subtitle: "Early childhood learning sanctuary with theme-based activity rooms, phonics, and play-way curriculum.",
      tag: "Dadheech Kids School • Early Learning",
      image: "/assets/banners/slide3.jpg",
      cta: "Explore Kids Wing",
      target: "campuses"
    },
    {
      title: "3 State-of-the-Art Campuses in Bulandshahr & Aligarh",
      subtitle: "Holistic schooling from Playgroup to Senior Secondary (12th) with smart labs, sports complex & GPS transport.",
      tag: "Tri-Campus Network • 1,500+ Students",
      image: "/assets/banners/slide4.jpg",
      cta: "Discover Our Schools",
      target: "campuses"
    },
    {
      title: "44+ Premier National Selections in AMU, JNV & Vidyagyan",
      subtitle: "24 years of proven academic supremacy with top ranks in national competitive entrance examinations.",
      tag: "Hall of Fame • Estd. July 2002 by Late Mr. Dauli Singh",
      image: "/assets/banners/slide5.png",
      cta: "Explore Hall of Fame",
      target: "selections"
    },
    {
      title: "Excellence in Sports, STEM Labs & Cultural Development",
      subtitle: "Nurturing champions in cricket, volleyball, science exhibitions, debate, and holistic personality growth.",
      tag: "Holistic Growth • Sports & Arts",
      image: "/assets/banners/slide6.png",
      cta: "Explore Facilities",
      target: "facilities"
    }
  ];

  // 2. Metrics & KPI Statistics
  const statistics = [
    { label: "Years of Educational Legacy", value: "24+", icon: Award, sub: "Estd. July 2002" },
    { label: "Premier National Selections", value: "44+", icon: Trophy, sub: "AMU, JNV & Vidyagyan" },
    { label: "Modern School Campuses", value: "3", icon: Building2, sub: "Bulandshahr & Aligarh" },
    { label: "Active Nurtured Students", value: "1,500+", icon: Users, sub: "Playgroup to 12th" },
    { label: "Board Pass Percentage", value: "100%", icon: GraduationCap, sub: "BSB Board Standard" },
    { label: "Personalized Mentoring Ratio", value: "15:1", icon: HeartHandshake, sub: "Goal-Driven Coaching" }
  ];

  // 3. Complete Authentic 44+ Hall of Fame Data
  const amuStudents = [
    { id: 1, name: "Km. Arati Rajput", father: "Mr. Anar Singh", org: "AMU Aligarh" },
    { id: 2, name: "Km. Kalpana", father: "Mr. Ramprakash", org: "AMU Aligarh" },
    { id: 3, name: "Krishna Kumar", father: "Mr. Ramprakash", org: "AMU Aligarh" },
    { id: 4, name: "Bablu Kumar", father: "Veerpal Singh", org: "AMU Aligarh" },
    { id: 5, name: "Manoj Kumar", father: "Charan Singh", org: "AMU Aligarh" },
    { id: 6, name: "Prashant Kumar", father: "Suresh Chandra", org: "AMU Aligarh" },
    { id: 7, name: "Nirankar", father: "Bhoodev Singh", org: "AMU Aligarh" },
    { id: 8, name: "Sunil Kumar", father: "Ramesh Chandra", org: "AMU Aligarh" },
    { id: 9, name: "Abhishek Kumar", father: "Ashok Kumar", org: "AMU Aligarh" },
    { id: 10, name: "Prashant", father: "Mr. Pramod Kumar", org: "AMU Aligarh" },
    { id: 11, name: "Divya Rajput", father: "Mr. Pramod Kumar", org: "AMU Aligarh" },
    { id: 12, name: "Neeresh Kumar", father: "Mr. Radhelal", org: "AMU Aligarh" },
    { id: 13, name: "Dushyant Kumar", father: "Sanjeev Ratan", org: "AMU Aligarh" },
    { id: 14, name: "Km. Laxmi", father: "Mr. Billu Singh", org: "AMU Aligarh" },
    { id: 15, name: "Yashveer Singh", father: "Tilak Singh", org: "AMU Aligarh" },
    { id: 16, name: "Rahul Kumar", father: "Kailash Chandra", org: "AMU Aligarh" },
    { id: 17, name: "Vishnu Kumar", father: "Mr. Sunil Kumar", org: "AMU Aligarh" },
    { id: 18, name: "Bhuvnesh Kumar", father: "Shyoraj Singh", org: "AMU Aligarh" },
    { id: 19, name: "Mani Rajput", father: "Mr. Pramod Kumar", org: "AMU Aligarh" },
    { id: 20, name: "Rinku Gupta", father: "Manoj Kumar", org: "AMU Aligarh" },
    { id: 21, name: "Shivam Kumar", father: "Sanjay Kumar", org: "AMU Aligarh" },
    { id: 22, name: "Deepika Tomar", father: "Anil Tomar", org: "AMU Aligarh" },
    { id: 23, name: "Kirti Singh", father: "Vinod Kumar", org: "AMU Aligarh" }
  ];

  const jnvStudents = [
    { id: 24, name: "Km. Jyoti", father: "Charan Singh", org: "JNV Entrance" },
    { id: 25, name: "Km. Renu", father: "Suresh Chandra", org: "JNV Entrance" },
    { id: 26, name: "Neha Rajput", father: "Mr. Pramod Kumar", org: "JNV Entrance" },
    { id: 27, name: "Divya Rajput", father: "Mr. Pramod Kumar", org: "JNV Entrance" },
    { id: 28, name: "Mani Rajput", father: "Mr. Pramod Kumar", org: "JNV Entrance" },
    { id: 29, name: "Neeresh Kumar", father: "Mr. Radhelal", org: "JNV Entrance" },
    { id: 30, name: "Kajal Verma", father: "Mr. Shyoraj Singh", org: "JNV Entrance" },
    { id: 31, name: "Sachin Kumar", father: "Harkesh Singh", org: "JNV Entrance" },
    { id: 32, name: "Shivam Kumar", father: "Rajesh Kumar", org: "JNV Entrance" },
    { id: 33, name: "Shahrukh Khan", father: "Babu Khan", org: "JNV Entrance" }
  ];

  const vidyagyanStudents = [
    { id: 34, name: "Divya Rajput", father: "Pramod Kumar", org: "Vidyagyan Academy" },
    { id: 35, name: "Dev Garg", father: "Anil Kumar", org: "Vidyagyan Academy" },
    { id: 36, name: "Neeresh Kumar", father: "Radhelal", org: "Vidyagyan Academy" },
    { id: 37, name: "Mani Rajput", father: "Pramod Kumar", org: "Vidyagyan Academy" },
    { id: 38, name: "Prashant Kumar", father: "Pramod Kumar", org: "Vidyagyan Academy" }
  ];

  const aecsStudents = [
    { id: 39, name: "Km. Ritika", father: "Charan Singh", org: "AECS Narora & Kendriya" },
    { id: 40, name: "Tarun Kumar", father: "Charan Singh", org: "AECS Narora & Kendriya" },
    { id: 41, name: "Nishant Kumar", father: "Charan Singh", org: "AECS Narora & Kendriya" },
    { id: 42, name: "Shirangi Pathak", father: "Bhagwan Shahay", org: "AECS Narora & Kendriya" },
    { id: 43, name: "Shushank Kumar", father: "Ajab Singh", org: "AECS Narora & Kendriya" },
    { id: 44, name: "Anu Yadav", father: "Vijendra Singh", org: "AECS Narora & Kendriya" }
  ];

  const allQualifiers = [...amuStudents, ...jnvStudents, ...vidyagyanStudents, ...aecsStudents];

  const filteredQualifiers = allQualifiers.filter((s) => {
    const matchesCategory =
      hallOfFameCategory === 'all' ||
      (hallOfFameCategory === 'amu' && s.org.includes('AMU')) ||
      (hallOfFameCategory === 'jnv' && s.org.includes('JNV')) ||
      (hallOfFameCategory === 'vidyagyan' && s.org.includes('Vidyagyan')) ||
      (hallOfFameCategory === 'aecs' && s.org.includes('AECS'));
    const matchesSearch =
      s.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
      s.father.toLowerCase().includes(studentSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 4. Our Schools Data
  const campusesData = [
    {
      id: "main-campus",
      name: "DMPS Senior Secondary Campus (Main)",
      grades: "Playgroup (PG) to Class 12th (Senior Secondary)",
      location: "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)",
      phone: "+91 97589 75880 / 96270 32626",
      email: "dmpsjargawan@gmail.com",
      image: "/assets/campuses/main_campus.jpg",
      highlights: [
        "Affiliated to Bhartiya Shiksha Board (BSB) - Code 00065",
        "Science (PCM/PCB), Commerce & Humanities Streams",
        "Advanced Physics, Chemistry, Biology & AI Computer Labs",
        "Multi-Sport Athletic Complex (Cricket, Volleyball, Yoga)",
        "GPS Bus Fleet covering 30+ towns & villages"
      ],
      description: "Our flagship Senior Secondary institution established in July 2002. Offering comprehensive schooling from early childhood through class 12th with modern digital classrooms and intensive competitive entrance coaching."
    },
    {
      id: "barheti-campus",
      name: "DMPS Junior High Campus (Barheti)",
      grades: "Playgroup (PG) to Class 8th (Junior High)",
      location: "Barheti ADF, Jawan, Chherat, Aligarh (U.P.)",
      phone: "+91 86300 08371",
      email: "dadheechsociety@gmail.com",
      image: "/assets/campuses/barheti_campus.jpeg",
      highlights: [
        "Strong Foundational Literacy & Mathematical Fluency",
        "Activity-Based Experiential Learning Studios",
        "Dedicated Entrance Coaching for JNV & Vidyagyan",
        "Safe, Child-Friendly & Digitally Connected Classrooms",
        "Emphasis on Spoken English & Hindi Eloquence"
      ],
      description: "Located near Jawan Chherat in Aligarh district, our Barheti campus nurtures middle and primary school learners with individualized attention and robust conceptual foundations."
    },
    {
      id: "kids-school",
      name: "Dadheech Kids School (Early Learning Sanctuary)",
      grades: "Playgroup, Nursery, LKG, UKG to Class 2nd",
      location: "Vinay Nagar, Sangwan City Road, Quarsi, P.A.C. Aligarh (U.P.)",
      phone: "+91 96270 32626",
      email: "dadheechkids@gmail.com",
      image: "/assets/campuses/kids_school_card.jpg",
      highlights: [
        "Montessori & Play-Way Early Childhood Framework",
        "Vibrant Theme-Based Smart Classrooms",
        "Soft-Play Activity Zones & Sensory Stations",
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

  // 6. 📸 Dynamic Auto-Discovery of Unlimited Gallery Images
  // (Automatically scans and imports EVERY image placed in /public/assets/gallery/)
  const galleryImageModules = import.meta.glob('/public/assets/gallery/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true, query: '?url', import: 'default' });
  
  const allGalleryPhotos = Object.entries(galleryImageModules).map(([path, url], index) => {
    const filename = path.split('/').pop().replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
    const src = url || path.replace(/^\/public/, '');
    return {
      id: index + 1,
      src: src,
      alt: filename
    };
  });

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
      
      {/* 🌟 1. Top Utility Ribbon */}
      <div className="bg-[#0b1e38] text-slate-200 py-2.5 px-4 sm:px-8 text-xs border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-[#0b1e38] font-black text-[10px] uppercase tracking-wider animate-pulse">
              Admissions 2026-27 Open
            </span>
            <span className="hidden sm:inline text-slate-300 text-[11px]">
              Dadheech Educational Group • Affiliated to Bhartiya Shiksha Board (BSB)
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto flex-wrap">
            <div className="hidden lg:flex items-center gap-1.5 border-r border-slate-700 pr-3 mr-1">
              <a href="https://www.facebook.com/dadheech.dadheech.37/" target="_blank" rel="noopener noreferrer" title="Facebook (Schools)" className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/dadheechschool/" target="_blank" rel="noopener noreferrer" title="Instagram @dadheechschool" className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=co.thanos.iymus&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" title="Dadheech Classes App" className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm">
                <PlayStoreIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.youtube.com/@dadheecheducationtrainingi24" target="_blank" rel="noopener noreferrer" title="YouTube Channel" className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all shadow-sm">
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

      {/* 🏛️ 2. Main Brand Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 text-slate-900 border-b border-slate-200 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div onClick={() => navigateTo('home')} className="flex items-center gap-3.5 cursor-pointer group select-none">
            <div className="relative w-12 h-12 rounded-full bg-white p-0.5 shadow-md border-2 border-[#0b1e38] group-hover:scale-105 transition-all">
              <img src="/logo.png" alt="Dadheech Emblem" className="w-full h-full object-contain rounded-full" />
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

          <nav className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-slate-700">
            <button onClick={() => navigateTo('home')} className={`py-2 transition-colors ${currentPage === 'home' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Home
            </button>

            {/* About Us Dropdown with Dedicated Subpages */}
            <div className="relative py-2 group cursor-pointer" onMouseEnter={() => setOpenDropdown('about')} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => navigateTo('about')} className={`flex items-center gap-1 transition-colors ${['about', 'founder', 'md', 'principal', 'dedication'].includes(currentPage) ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
                <span>About & Leadership</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 z-50 text-slate-800 normal-case font-semibold">
                  <button onClick={() => navigateTo('about')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏛️ Overview & Society History
                  </button>
                  <button onClick={() => navigateTo('founder')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-amber-800">
                    👑 Founder's Message (Late Mr. Dauli Singh)
                  </button>
                  <button onClick={() => navigateTo('md')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-sky-800">
                    💼 Manager's Message (Mr. Pramod Kumar Rajput)
                  </button>
                  <button onClick={() => navigateTo('principal')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-indigo-800">
                    🎓 Principal's Message (Mrs. Kavita Rani)
                  </button>
                  <button onClick={() => navigateTo('dedication')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-amber-900">
                    🌸 Late Dadheech Kumar Rajput (Dedication)
                  </button>
                </div>
              )}
            </div>

            {/* Our Schools Dropdown */}
            <div className="relative py-2 group cursor-pointer" onMouseEnter={() => setOpenDropdown('campuses')} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => navigateTo('campuses')} className={`flex items-center gap-1 transition-colors ${currentPage === 'campuses' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
                <span>Our Schools</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {openDropdown === 'campuses' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 z-50 text-slate-800 normal-case font-semibold">
                  <button onClick={() => navigateTo('campuses', 'main-campus')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏫 DMPS Senior Secondary (Jargwan)
                  </button>
                  <button onClick={() => navigateTo('campuses', 'barheti-campus')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏫 DMPS Junior High (Barheti Aligarh)
                  </button>
                  <button onClick={() => navigateTo('campuses', 'kids-school')} className="w-full text-left px-4 py-2 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏫 Dadheech Kids School (Quarsi Aligarh)
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => navigateTo('academic')} className={`py-2 transition-colors ${currentPage === 'academic' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Academics
            </button>

            <button onClick={() => navigateTo('facilities')} className={`py-2 transition-colors ${currentPage === 'facilities' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Beyond Academics
            </button>

            <button onClick={() => navigateTo('selections')} className={`py-2 transition-colors ${currentPage === 'selections' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Hall of Fame (44+)
            </button>

            <button onClick={() => navigateTo('gallery')} className={`py-2 transition-colors ${currentPage === 'gallery' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Gallery
            </button>

            <button onClick={() => navigateTo('contact')} className={`py-2 transition-colors ${currentPage === 'contact' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigateTo('admissions')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions 2026-27</span>
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-2 shadow-2xl text-slate-800">
            <button onClick={() => navigateTo('home')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Home</button>
            <button onClick={() => navigateTo('about')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">About DMPS & Society</button>
            <button onClick={() => navigateTo('founder')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-amber-800">👑 Founder's Message (Late Mr. Dauli Singh)</button>
            <button onClick={() => navigateTo('md')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-sky-800">💼 Manager's Message (Mr. Pramod Kumar Rajput)</button>
            <button onClick={() => navigateTo('principal')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-indigo-800">🎓 Principal's Message (Mrs. Kavita Rani)</button>
            <button onClick={() => navigateTo('dedication')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-amber-900">🌸 Late Dadheech Kumar Rajput (Dedication)</button>
            <button onClick={() => navigateTo('campuses')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Our 3 Campuses</button>
            <button onClick={() => navigateTo('academic')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Academics</button>
            <button onClick={() => navigateTo('facilities')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Beyond Academics</button>
            <button onClick={() => navigateTo('selections')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-sky-700">Hall of Fame (44+)</button>
            <button onClick={() => navigateTo('gallery')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Photo & Event Gallery</button>
            <button onClick={() => navigateTo('admissions')} className="w-full text-left py-2 px-3 rounded-lg bg-sky-600 text-white font-black text-sm uppercase">Admissions 2026-27 Open</button>
            <button onClick={() => navigateTo('contact')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Contact Us</button>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 🏡 PAGE 1: HOME (Dynamic Leadership Messages, Interactive Explorer & Hall of Fame) */}
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
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center brightness-[0.35]" />
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

              <div className="flex items-center gap-2 mt-12">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHeroSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeHeroSlide === i ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ⚡ 4 Floating Quick-Action Pillars */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div onClick={() => navigateTo('admissions')} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">Admissions 2026-27</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Enroll for Playgroup to Class 12th Senior Secondary across all 3 campuses.</p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-sky-700 mt-3 group-hover:underline">Apply Online <ChevronRight className="w-3 h-3" /></span>
              </div>

              <div onClick={() => navigateTo('campuses')} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">Our 3 Campuses</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Main Senior Campus, Barheti Aligarh & Dadheech Kids Early Learning Center.</p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-sky-700 mt-3 group-hover:underline">Explore Branches <ChevronRight className="w-3 h-3" /></span>
              </div>

              <div onClick={() => navigateTo('selections')} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">Hall of Fame (44+)</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">23 AMU Qualifiers, 10 JNV Selections, Vidyagyan & AECS Narora Champions.</p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-sky-700 mt-3 group-hover:underline">View Qualifiers <ChevronRight className="w-3 h-3" /></span>
              </div>

              <div onClick={onGoToLogin} className="p-6 rounded-2xl bg-[#0b1e38] text-white border border-slate-800 shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0b1e38] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">School ERP Portal</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">Direct login for Students, Parents, Teachers & School Administration.</p>
                <span className="inline-flex items-center gap-1 text-xs font-black text-amber-400 mt-3 group-hover:underline">Enter Portal <ChevronRight className="w-3 h-3" /></span>
              </div>

            </div>
          </section>

          {/* 👑 5. DYNAMIC LEADERSHIP & FOUNDER SHOWCASE RIGHT ON HOME (Interactive Tabbed View) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase">
                  From the Leadership Desk
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif mt-2">
                  Vision, Guidance & Leadership Messages
                </h2>
              </div>

              {/* Dynamic Tabs for Leadership */}
              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setSelectedLeaderTab('founder')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedLeaderTab === 'founder' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Founder's Message
                </button>
                <button
                  onClick={() => setSelectedLeaderTab('md')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedLeaderTab === 'md' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Manager's Message
                </button>
                <button
                  onClick={() => setSelectedLeaderTab('principal')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedLeaderTab === 'principal' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Principal's Message
                </button>
              </div>
            </div>

            {/* Dynamic Leader Card Display */}
            {selectedLeaderTab === 'founder' && (
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase">
                      Founder's Vision
                    </span>
                    <span className="text-xs text-slate-500">Dadheech Educational Society (Regd. 1131)</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0b1e38] font-serif">Late Mr. Dauli Singh</h3>
                  <div className="relative pl-6 border-l-4 border-amber-400 space-y-2">
                    <Quote className="w-8 h-8 text-amber-200 absolute -top-3 -left-3" />
                    <p className="text-sm text-slate-700 italic leading-relaxed">
                      "Our aim has always been to remove the darkness of ignorance from rural and semi-urban children and enlighten their path towards self-reliance, national character, and academic brilliance. Every child holds immense potential; our sacred duty is to provide the light of disciplined knowledge."
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => navigateTo('founder')}
                      className="px-4 py-2 rounded-xl bg-[#0b1e38] text-white font-bold text-xs flex items-center gap-1.5 shadow hover:bg-slate-800 transition-all"
                    >
                      <span>Read Full Founder's Message</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-3xl border-2 border-amber-300 shadow-xl space-y-3 text-center">
                  <div className="w-36 h-44 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-lg mx-auto bg-slate-100">
                    <img
                      src="/assets/leadership/founder.jpg"
                      alt="Late Mr. Dauli Singh"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-[#0b1e38] text-base mt-2">Late Mr. Dauli Singh</h4>
                  <p className="text-xs text-amber-900 font-medium">Visionary Founder (Estd. July 2002)</p>
                </div>
              </div>
            )}

            {selectedLeaderTab === 'md' && (
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-black uppercase">
                      Manager's Desk
                    </span>
                    <span className="text-xs text-slate-500">DMPS Educational Group</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0b1e38] font-serif">Mr. Pramod Kumar Rajput</h3>
                  <div className="relative pl-6 border-l-4 border-sky-500 space-y-2">
                    <Quote className="w-8 h-8 text-sky-200 absolute -top-3 -left-3" />
                    <p className="text-sm text-slate-700 italic leading-relaxed">
                      "We provide an environment where children cultivate curiosity, scientific temperament, and moral fortitude. With 44+ selections in premier institutions like AMU, JNV, and Vidyagyan, our students continue to prove that personalized attention and dedicated coaching turn aspirations into reality."
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => navigateTo('md')}
                      className="px-4 py-2 rounded-xl bg-[#0b1e38] text-white font-bold text-xs flex items-center gap-1.5 shadow hover:bg-slate-800 transition-all"
                    >
                      <span>Read Full Manager's Message</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-3xl border-2 border-sky-300 shadow-xl space-y-3 text-center">
                  <div className="w-36 h-44 rounded-2xl overflow-hidden border-4 border-sky-400 shadow-lg mx-auto bg-slate-100">
                    <img
                      src="/assets/leadership/md.jpg"
                      alt="Mr. Pramod Kumar Rajput"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-[#0b1e38] text-base mt-2">Mr. Pramod Kumar Rajput</h4>
                  <p className="text-xs text-sky-900 font-medium">Managing Director & Manager</p>
                </div>
              </div>
            )}

            {selectedLeaderTab === 'principal' && (
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-black uppercase">
                      Principal's Desk
                    </span>
                    <span className="text-xs text-slate-500">DMPS Senior Secondary School</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0b1e38] font-serif">Mrs. Kavita Rani</h3>
                  <div className="relative pl-6 border-l-4 border-indigo-500 space-y-2">
                    <Quote className="w-8 h-8 text-indigo-200 absolute -top-3 -left-3" />
                    <p className="text-sm text-slate-700 italic leading-relaxed">
                      "Education is not merely the accumulation of facts; it is the training of the mind to think critically. We nurture each child with love, disciplined guidance, and experiential pedagogy so that they grow with confidence, empathy, and world-class competence."
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => navigateTo('principal')}
                      className="px-4 py-2 rounded-xl bg-[#0b1e38] text-white font-bold text-xs flex items-center gap-1.5 shadow hover:bg-slate-800 transition-all"
                    >
                      <span>Read Full Principal's Message</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-3xl border-2 border-indigo-300 shadow-xl space-y-3 text-center">
                  <div className="w-36 h-44 rounded-2xl overflow-hidden border-4 border-indigo-400 shadow-lg mx-auto bg-slate-100">
                    <img
                      src="/assets/leadership/principal.jpg"
                      alt="Mrs. Kavita Rani"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-[#0b1e38] text-base mt-2">Mrs. Kavita Rani</h4>
                  <p className="text-xs text-indigo-900 font-medium">Principal • Educationalist</p>
                </div>
              </div>
            )}
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

          {/* 🏫 "Our Schools" Multi-Campus Explorer on Home */}
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
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-slate-100 group">
                  <img
                    src={campusesData[selectedCampusTab].image}
                    alt={campusesData[selectedCampusTab].name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 🏆 DYNAMIC FILTERABLE HALL OF FAME ON HOME */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase">
                  Hall of Fame & Academic Feats
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif mt-2">
                  44+ Premier National Qualifiers
                </h2>
                <p className="text-xs text-slate-600 mt-1">Search & filter students by institution or name</p>
              </div>

              {/* Dynamic Filter Tabs & Search Bar */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search student or father..."
                    value={studentSearchQuery}
                    onChange={(e) => setStudentSearchQuery(e.target.value)}
                    className="pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none w-48 sm:w-60"
                  />
                </div>

                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 overflow-x-auto">
                  <button
                    onClick={() => setHallOfFameCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${hallOfFameCategory === 'all' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    All (44)
                  </button>
                  <button
                    onClick={() => setHallOfFameCategory('amu')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${hallOfFameCategory === 'amu' ? 'bg-sky-700 text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    AMU (23)
                  </button>
                  <button
                    onClick={() => setHallOfFameCategory('jnv')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${hallOfFameCategory === 'jnv' ? 'bg-emerald-700 text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    JNV (10)
                  </button>
                  <button
                    onClick={() => setHallOfFameCategory('vidyagyan')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${hallOfFameCategory === 'vidyagyan' ? 'bg-purple-700 text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    Vidyagyan (5)
                  </button>
                  <button
                    onClick={() => setHallOfFameCategory('aecs')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${hallOfFameCategory === 'aecs' ? 'bg-amber-700 text-white shadow' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    AECS (6)
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Grid of Filtered Qualifiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 max-h-[460px] overflow-y-auto p-1 custom-scrollbar">
              {filteredQualifiers.map((s) => (
                <div key={s.id} className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-md transition-all space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      #{s.id}
                    </span>
                    <span className="text-[10px] font-bold text-sky-700 truncate max-w-[150px]">
                      {s.org}
                    </span>
                  </div>
                  <div className="font-bold text-[#0b1e38] text-xs pt-1">{s.name}</div>
                  <div className="text-slate-500 text-[11px]">S/o or D/o {s.father}</div>
                </div>
              ))}
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
      {/* 👑 SEPARATE DEDICATED PAGE: FOUNDER (Late Mr. Dauli Singh) */}
      {/* ========================================================================= */}
      {currentPage === 'founder' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
          
          {/* 🏷️ Top Header Banner with Designation */}
          <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/5 p-6 sm:p-8 rounded-3xl border-2 border-amber-300/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-[#0b1e38] text-xs font-black tracking-wider uppercase shadow-sm">
                  👑 Founder's Vision
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-sm">
                  Pillar of Foundation • Estd. July 2002
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1e38] font-serif tracking-tight">
                Founder's Message
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-amber-900">
                Late Mr. Dauli Singh — Visionary Founder, Dadheech Educational Society & Training Institute (Regd. 1131)
              </p>
            </div>

            <button
              onClick={() => navigateTo('about')}
              className="px-4 py-2 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white text-xs font-bold shadow transition-all whitespace-nowrap"
            >
              ← Back to Overview
            </button>
          </div>

          {/* 📄 Main Content Card (Left: Crisp Quote & Intro | Right: Large Portrait Photo) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 📝 LEFT COLUMN (7 Cols): Crisp Thought & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest block mb-1">
                  Visionary Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif">
                  Enlightening Minds from Darkness to Brightness
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  <strong>Late Mr. Dauli Singh</strong> established Dadheech Memorial Public School in July 2002 as a sacred lighthouse of knowledge, instilling timeless moral values and academic excellence that have produced 44+ selections across AMU, JNV, and Vidyagyan.
                </p>

                {/* Golden Highlighted Quote Box */}
                <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50/60 to-white border-2 border-amber-300 shadow-md space-y-2 my-2">
                  <Quote className="w-10 h-10 text-amber-400/40 absolute -top-3 -left-3" />
                  <p className="text-sm sm:text-base text-slate-900 italic font-serif leading-relaxed">
                    "Our aim has always been to remove the darkness of ignorance from rural and semi-urban children and enlighten their path towards self-reliance, national character, and academic brilliance. Every child holds immense potential; our sacred duty is to provide the light of disciplined knowledge."
                  </p>
                  <span className="block text-right text-xs font-black text-amber-900 uppercase tracking-wider pt-2">
                    — Late Mr. Dauli Singh (Founder)
                  </span>
                </div>
              </div>

              {/* Action Buttons Directly Below */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo('admissions')}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-[#0b1e38] font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Apply for Admission 2026-27
                </button>
                <button
                  onClick={() => navigateTo('campuses')}
                  className="px-5 py-2.5 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white font-bold text-xs transition-all"
                >
                  Explore Our 3 Campuses
                </button>
              </div>
            </div>

            {/* 🖼️ RIGHT COLUMN (5 Cols): Large High-Resolution Portrait Photo */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-64 sm:w-72 max-w-[280px] rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-gradient-to-b from-amber-100 to-amber-50 p-2 group">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner">
                  <img
                    src="/assets/leadership/founder.jpg"
                    alt="Late Mr. Dauli Singh - Founder"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-lg font-black text-[#0b1e38] font-serif">Late Mr. Dauli Singh</h3>
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wide">Visionary Founder</p>
                  <p className="text-[11px] text-slate-500">Dadheech Educational Society (Estd. July 2002)</p>
                </div>
              </div>
            </div>

          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 💼 SEPARATE DEDICATED PAGE: MANAGER (Mr. Pramod Kumar Rajput) */}
      {/* ========================================================================= */}
      {currentPage === 'md' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
          
          {/* 🏷️ Top Header Banner with Designation */}
          <div className="bg-gradient-to-r from-sky-500/15 via-blue-500/10 to-sky-500/5 p-6 sm:p-8 rounded-3xl border-2 border-sky-300/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-black tracking-wider uppercase shadow-sm">
                  💼 Manager's Desk
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-sm">
                  DMPS Educational Group
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1e38] font-serif tracking-tight">
                Manager's Message
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-sky-900">
                Mr. Pramod Kumar Rajput — Managing Director & Manager, Dadheech Educational Society
              </p>
            </div>

            <button
              onClick={() => navigateTo('about')}
              className="px-4 py-2 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white text-xs font-bold shadow transition-all whitespace-nowrap"
            >
              ← Back to Overview
            </button>
          </div>

          {/* 📄 Main Content Card (Left: Crisp Quote & Intro | Right: Large Portrait Photo) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 📝 LEFT COLUMN (7 Cols): Crisp Thought & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black text-sky-700 uppercase tracking-widest block mb-1">
                  Manager's Perspective
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif">
                  Fostering Scientific Temperament & Academic Excellence
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  <strong>Mr. Pramod Kumar Rajput</strong> spearheads academic expansion, modern science and computer laboratories, and competitive entrance wings across all 3 DMPS campuses under Bhartiya Shiksha Board standards.
                </p>

                {/* Sky Highlighted Quote Box */}
                <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-sky-50 via-blue-50/60 to-white border-2 border-sky-300 shadow-md space-y-2 my-2">
                  <Quote className="w-10 h-10 text-sky-400/40 absolute -top-3 -left-3" />
                  <p className="text-sm sm:text-base text-slate-900 italic font-serif leading-relaxed">
                    "We provide an environment where children cultivate curiosity, scientific temperament, and moral fortitude. With 44+ selections in premier institutions like AMU, JNV, and Vidyagyan, our students continue to prove that personalized attention and dedicated coaching turn aspirations into reality."
                  </p>
                  <span className="block text-right text-xs font-black text-sky-900 uppercase tracking-wider pt-2">
                    — Mr. Pramod Kumar Rajput (Managing Director & Manager)
                  </span>
                </div>
              </div>

              {/* Action Buttons Directly Below */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo('selections')}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  View 44+ Hall of Fame
                </button>
                <button
                  onClick={() => navigateTo('academic')}
                  className="px-5 py-2.5 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white font-bold text-xs transition-all"
                >
                  Academic Curriculum
                </button>
              </div>
            </div>

            {/* 🖼️ RIGHT COLUMN (5 Cols): Large High-Resolution Portrait Photo */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-64 sm:w-72 max-w-[280px] rounded-3xl overflow-hidden border-4 border-sky-400 shadow-2xl bg-gradient-to-b from-sky-100 to-sky-50 p-2 group">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner">
                  <img
                    src="/assets/leadership/md.jpg"
                    alt="Mr. Pramod Kumar Rajput - Manager"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-lg font-black text-[#0b1e38] font-serif">Mr. Pramod Kumar Rajput</h3>
                  <p className="text-xs font-bold text-sky-900 uppercase tracking-wide">Managing Director & Manager</p>
                  <p className="text-[11px] text-slate-500">Overseeing 3 Campuses & Academic Wings</p>
                </div>
              </div>
            </div>

          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🎓 SEPARATE DEDICATED PAGE: PRINCIPAL (Mrs. Kavita Rani) */}
      {/* ========================================================================= */}
      {currentPage === 'principal' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
          
          {/* 🏷️ Top Header Banner with Designation */}
          <div className="bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-indigo-500/5 p-6 sm:p-8 rounded-3xl border-2 border-indigo-300/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-black tracking-wider uppercase shadow-sm">
                  🎓 Principal's Desk
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-sm">
                  DMPS Senior Secondary School
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1e38] font-serif tracking-tight">
                Principal's Message
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-indigo-900">
                Mrs. Kavita Rani — Principal & Educationalist, Dadheech Memorial Public School
              </p>
            </div>

            <button
              onClick={() => navigateTo('about')}
              className="px-4 py-2 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white text-xs font-bold shadow transition-all whitespace-nowrap"
            >
              ← Back to Overview
            </button>
          </div>

          {/* 📄 Main Content Card (Left: Crisp Quote & Intro | Right: Large Portrait Photo) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 📝 LEFT COLUMN (7 Cols): Crisp Thought & Pedagogy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black text-indigo-700 uppercase tracking-widest block mb-1">
                  Principal's Welcome
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif">
                  Nurturing Critical Thinkers & Global Scholars
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  <strong>Mrs. Kavita Rani</strong> champions student-centric experiential learning and cognitive growth, guiding holistic co-curricular opportunities, athletic development, and dedicated individual mentorship.
                </p>

                {/* Indigo Highlighted Quote Box */}
                <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50/60 to-white border-2 border-indigo-300 shadow-md space-y-2 my-2">
                  <Quote className="w-10 h-10 text-indigo-400/40 absolute -top-3 -left-3" />
                  <p className="text-sm sm:text-base text-slate-900 italic font-serif leading-relaxed">
                    "Education is not merely the accumulation of facts; it is the training of the mind to think critically. We nurture each child with love, disciplined guidance, and experiential pedagogy so that they grow with confidence, empathy, and world-class competence."
                  </p>
                  <span className="block text-right text-xs font-black text-indigo-900 uppercase tracking-wider pt-2">
                    — Mrs. Kavita Rani (Principal)
                  </span>
                </div>
              </div>

              {/* Action Buttons Directly Below */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo('admissions')}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Apply for Admission 2026-27
                </button>
                <button
                  onClick={() => navigateTo('facilities')}
                  className="px-5 py-2.5 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white font-bold text-xs transition-all"
                >
                  Campus Facilities & Labs
                </button>
              </div>
            </div>

            {/* 🖼️ RIGHT COLUMN (5 Cols): Large High-Resolution Portrait Photo */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-64 sm:w-72 max-w-[280px] rounded-3xl overflow-hidden border-4 border-indigo-400 shadow-2xl bg-gradient-to-b from-indigo-100 to-indigo-50 p-2 group">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner">
                  <img
                    src="/assets/leadership/principal.jpg"
                    alt="Mrs. Kavita Rani - Principal"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-lg font-black text-[#0b1e38] font-serif">Mrs. Kavita Rani</h3>
                  <p className="text-xs font-bold text-indigo-900 uppercase tracking-wide">Principal</p>
                  <p className="text-[11px] text-slate-500">Champion of Student-Centric Pedagogy</p>
                </div>
              </div>
            </div>

          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🌸 SEPARATE DEDICATED PAGE: SACRED MEMORY & DEDICATION */}
      {/* ========================================================================= */}
      {currentPage === 'dedication' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
          
          {/* 🏷️ Top Header Banner (Restored to earlier format) */}
          <div className="bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/5 p-6 sm:p-8 rounded-3xl border-2 border-amber-300/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-[#0b1e38] text-xs font-black tracking-wider uppercase shadow-sm">
                  🌸 Sacred Heritage & Dedication
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-sm">
                  Born 1st October 1975 • Consecrated 4th July 2002
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1e38] font-serif tracking-tight">
                Late Dadheech Kumar Rajput
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-amber-900">
                The Sacred Inspiration Behind Dadheech Memorial Public School
              </p>
            </div>

            <button
              onClick={() => navigateTo('about')}
              className="px-4 py-2 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white text-xs font-bold shadow transition-all whitespace-nowrap"
            >
              ← Back to Overview
            </button>
          </div>

          {/* 📄 Main Content Card (Left: Crisp Quote & Intro | Right: Large Portrait Photo) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 📝 LEFT COLUMN (7 Cols): Sacred History & Foundation */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest block mb-1">
                  Sacred Consecration & Heritage
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif">
                  A Life of Brilliance & Technical Innovation
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  Dadheech Memorial Public School was established in July 2002 and consecrated on <strong>4th July 2002</strong> by <strong>Rajveer Singh urf Raju Bhaiya</strong>, former Health Minister of Uttar Pradesh, dedicated to the immortal vision: <em>"Darkness to Brightness"</em>.
                </p>

                {/* Amber Highlighted Memory Box */}
                <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50/60 to-white border-2 border-amber-300 shadow-md space-y-2 my-2">
                  <Quote className="w-10 h-10 text-amber-400/40 absolute -top-3 -left-3" />
                  <p className="text-sm sm:text-base text-slate-900 italic font-serif leading-relaxed">
                    "The institution is dedicated to the sacred memory of Late Dadheech Kumar Rajput (born 1st October 1975 at Nagla Kothi, Jargwan, Bulandshahr — Engineer at Shriram Piston & Rings Ltd. Ghaziabad). His devotion to excellence, discipline, and technological innovation continues to illuminate our institution."
                  </p>
                  <span className="block text-right text-xs font-black text-amber-900 uppercase tracking-wider pt-2">
                    — In Sacred Memory of Late Dadheech Kumar Rajput
                  </span>
                </div>
              </div>

              {/* Action Buttons Directly Below */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo('home')}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-[#0b1e38] font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Return to Home
                </button>
              </div>
            </div>

            {/* 🖼️ RIGHT COLUMN (5 Cols): Large High-Resolution Portrait Photo */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-64 sm:w-72 max-w-[280px] rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-gradient-to-b from-amber-100 to-amber-50 p-2 group">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner">
                  <img
                    src="/assets/leadership/dedication.jpg"
                    alt="Late Dadheech Kumar Rajput"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-lg font-black text-[#0b1e38] font-serif">Late Dadheech Kumar Rajput</h3>
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wide">Sacred Inspiration & Engineer</p>
                  <p className="text-[11px] text-slate-500">1st October 1975 — Nagla Kothi, Jargwan</p>
                </div>
              </div>
            </div>

          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 📖 PAGE: OVERVIEW & ABOUT SOCIETY */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div onClick={() => navigateTo('founder')} className="p-6 rounded-3xl bg-white border-2 border-amber-200 hover:border-amber-500 shadow-md hover:shadow-xl transition-all cursor-pointer space-y-4 group">
              <div className="w-24 h-32 rounded-2xl overflow-hidden border-2 border-amber-400 shadow mx-auto bg-slate-100">
                <img src="/assets/leadership/founder.jpg" alt="Late Mr. Dauli Singh" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-black uppercase">Founder Profile</span>
                <h3 className="text-lg font-black text-[#0b1e38]">Late Mr. Dauli Singh</h3>
                <p className="text-xs text-slate-600">Visionary Founder. Established the institution in July 2002.</p>
                <span className="text-xs font-bold text-amber-700 flex items-center justify-center gap-1 pt-2">Read Dedicated Page ↗</span>
              </div>
            </div>

            <div onClick={() => navigateTo('md')} className="p-6 rounded-3xl bg-white border-2 border-sky-200 hover:border-sky-500 shadow-md hover:shadow-xl transition-all cursor-pointer space-y-4 group">
              <div className="w-24 h-32 rounded-2xl overflow-hidden border-2 border-sky-400 shadow mx-auto bg-slate-100">
                <img src="/assets/leadership/md.jpg" alt="Mr. Pramod Kumar Rajput" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-900 text-[10px] font-black uppercase">Managing Director</span>
                <h3 className="text-lg font-black text-[#0b1e38]">Mr. Pramod Kumar Rajput</h3>
                <p className="text-xs text-slate-600">Managing Director overseeing academic programs and campuses.</p>
                <span className="text-xs font-bold text-sky-700 flex items-center justify-center gap-1 pt-2">Read Dedicated Page ↗</span>
              </div>
            </div>

            <div onClick={() => navigateTo('principal')} className="p-6 rounded-3xl bg-white border-2 border-indigo-200 hover:border-indigo-500 shadow-md hover:shadow-xl transition-all cursor-pointer space-y-4 group">
              <div className="w-24 h-32 rounded-2xl overflow-hidden border-2 border-indigo-400 shadow mx-auto bg-slate-100">
                <img src="/assets/leadership/principal.jpg" alt="Mrs. Kavita Rani" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-900 text-[10px] font-black uppercase">Principal</span>
                <h3 className="text-lg font-black text-[#0b1e38]">Mrs. Kavita Rani</h3>
                <p className="text-xs text-slate-600">Principal guiding experiential learning and student-centric pedagogy.</p>
                <span className="text-xs font-bold text-indigo-700 flex items-center justify-center gap-1 pt-2">Read Dedicated Page ↗</span>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🏫 PAGE 3: OUR 3 CAMPUSES */}
      {/* ========================================================================= */}
      {currentPage === 'campuses' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">Our 3 Distinct Campuses</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">Our Educational Institutes</h1>
          </div>

          <div className="space-y-8">
            {campusesData.map((campus, idx) => (
              <div key={campus.id} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-[#0b1e38] text-white text-xs font-bold">Campus {idx + 1}</span>
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
                    <a href={`tel:${campus.phone.split('/')[0].trim()}`} className="px-4 py-2 rounded-xl bg-[#0b1e38] text-white font-bold text-xs flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>{campus.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-slate-100 group">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🎓 PAGE 4: ACADEMICS */}
      {/* ========================================================================= */}
      {currentPage === 'academic' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">Curriculum & Pedagogy</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">Academic Excellence Framework</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <Sun className="w-6 h-6 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Pre-Primary Wing</h3>
              <p className="text-xs font-bold text-sky-700">Playgroup, Nursery, LKG, UKG</p>
              <p className="text-xs text-slate-600 leading-relaxed">Play-way Montessori methodology, phonics, and motor skill exercises.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <BookOpen className="w-6 h-6 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Primary Wing</h3>
              <p className="text-xs font-bold text-sky-700">Classes 1st to 5th</p>
              <p className="text-xs text-slate-600 leading-relaxed">English, Hindi, Mathematics, EVS, Computer, and Value Education.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <CompassIcon className="w-6 h-6 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Middle Wing</h3>
              <p className="text-xs font-bold text-sky-700">Classes 6th to 8th</p>
              <p className="text-xs text-slate-600 leading-relaxed">Specialized subject teachers, Science practicals, and JNV/Vidyagyan preparation.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <GraduationCap className="w-6 h-6 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Senior Secondary</h3>
              <p className="text-xs font-bold text-sky-700">Classes 9th to 12th</p>
              <p className="text-xs text-slate-600 leading-relaxed">Board curriculum in Science (PCM/PCB), Commerce, and Humanities.</p>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🔬 PAGE 5: BEYOND ACADEMICS */}
      {/* ========================================================================= */}
      {currentPage === 'facilities' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">Infrastructure</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">Beyond Academics</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <Cpu className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Science & AI Computer Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Equipped Physics, Chemistry, Biology, and high-speed Computer labs.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <Trophy className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">Sports Complex & Yoga</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Athletic fields for Cricket, Volleyball, Badminton, and daily yoga.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <Bus className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-[#0b1e38] text-base">GPS Bus Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Safe transport fleet connecting 30+ surrounding villages and towns.</p>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🏆 PAGE 6: HALL OF FAME */}
      {/* ========================================================================= */}
      {currentPage === 'selections' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase">Official Record</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">Hall of Fame — 44+ Qualifiers</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {allQualifiers.map((s) => (
              <div key={s.id} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">#{s.id}</span>
                  <span className="text-[10px] font-bold text-sky-700">{s.org}</span>
                </div>
                <div className="font-bold text-[#0b1e38] text-xs pt-1">{s.name}</div>
                <div className="text-slate-500 text-[11px]">S/o or D/o {s.father}</div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🖼️ PAGE 7: GALLERY (Unlimited Pure Photo Grid Showcase) */}
      {/* ========================================================================= */}
      {currentPage === 'gallery' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Visual Gallery • {allGalleryPhotos.length} Photos</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#0b1e38] font-serif">
              Photo Gallery
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Memories of campus life, science exhibitions, sports tournaments, classroom activities, and annual celebrations.
            </p>
          </div>

          {/* 🖼️ Pure Photo Grid (No Text Underneath - Pure Visual Excellence) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {allGalleryPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-950 border border-slate-200/80 hover:border-sky-500 transform hover:-translate-y-1"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg transform group-hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 📑 Prospectus Flip-Booklet Access */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0b1e38] via-slate-900 to-[#0b1e38] text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h3 className="text-base font-bold text-white">Official Scanned Prospectus Booklet</h3>
              <p className="text-xs text-slate-300">View original printed brochures, courses, fee guidelines & heritage pages.</p>
            </div>
            <button
              onClick={() => setProspectusModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0b1e38] font-black text-xs uppercase tracking-wider shadow transition-all shrink-0 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Open Prospectus Booklet</span>
            </button>
          </div>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 📝 PAGE 8: ADMISSIONS */}
      {/* ========================================================================= */}
      {currentPage === 'admissions' && (
        <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase">Admissions Open 2026-27</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">Online Admission & Inquiry Form</h1>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-black text-[#0b1e38] font-serif">Application Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{inquiryForm.parentName}</strong>. We have received your inquiry for <strong>{inquiryForm.studentName}</strong> ({inquiryForm.classSeeking}).
                </p>
                <button onClick={() => setIsSubmitted(false)} className="px-6 py-2.5 rounded-xl bg-[#0b1e38] text-white font-bold text-xs">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Parent / Guardian Name *</label>
                    <input type="text" required placeholder="e.g. Mr. Rajesh Kumar" value={inquiryForm.parentName} onChange={(e) => setInquiryForm({ ...inquiryForm, parentName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Mobile / WhatsApp Number *</label>
                    <input type="tel" required placeholder="e.g. 9758975880" value={inquiryForm.phone} onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Student's Full Name *</label>
                    <input type="text" required placeholder="e.g. Aman Rajput" value={inquiryForm.studentName} onChange={(e) => setInquiryForm({ ...inquiryForm, studentName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Grade / Class Seeking *</label>
                    <select value={inquiryForm.classSeeking} onChange={(e) => setInquiryForm({ ...inquiryForm, classSeeking: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none">
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
                  <select value={inquiryForm.branch} onChange={(e) => setInquiryForm({ ...inquiryForm, branch: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none">
                    <option>Dadheech Memorial Public School (Main Campus - Ramghat Road Border, Jargwan)</option>
                    <option>DMPS Barheti ADF Campus (Jawan, Chherat, Aligarh)</option>
                    <option>Dadheech Kids School (Vinay Nagar, Sangwan City Road, Quarsi, Aligarh)</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Application</span>
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 📞 PAGE 9: CONTACT US */}
      {/* ========================================================================= */}
      {currentPage === 'contact' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase">Get in Touch</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b1e38] font-serif">Contact Campus Offices</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-black">Main Senior Campus</span>
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
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-black">Barheti Campus</span>
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
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-black">Kids City Campus</span>
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
        </main>
      )}

      {/* ========================================================================= */}
      {/* 📞 GRAND MODERN FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-[#0b1e38] text-slate-300 pt-12 pb-6 text-xs border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-md border-2 border-amber-400 shrink-0">
                <img src="/logo.png" alt="Dadheech Crest" className="w-full h-full object-contain rounded-full" />
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
              <li><button onClick={() => navigateTo('founder')} className="hover:text-amber-400 transition-colors">Late Mr. Dauli Singh (Founder)</button></li>
              <li><button onClick={() => navigateTo('md')} className="hover:text-amber-400 transition-colors">Mr. Pramod Kumar Rajput (MD)</button></li>
              <li><button onClick={() => navigateTo('principal')} className="hover:text-amber-400 transition-colors">Mrs. Kavita Rani (Principal)</button></li>
              <li><button onClick={() => navigateTo('campuses')} className="hover:text-amber-400 transition-colors">Our 3 Campuses</button></li>
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

        {/* 🌟 Social & Official Channels Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 bg-slate-900 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-300 shadow-xl">
          <div className="flex items-center gap-3.5 flex-wrap font-semibold">
            <span className="text-amber-400 font-black tracking-wide uppercase text-[10px] bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
              Official Channels:
            </span>
            
            <a href="https://www.facebook.com/dadheech.dadheech.37/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group">
              <FacebookIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">Facebook (Schools)</span>
            </a>

            <a href="https://www.facebook.com/people/Dadheech-Education/100048106256592/?sk=about" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group">
              <FacebookIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">Facebook (Education)</span>
            </a>

            <a href="https://www.instagram.com/dadheechschool/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group">
              <InstagramIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">@dadheechschool</span>
            </a>

            <a href="https://play.google.com/store/apps/details?id=co.thanos.iymus&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group">
              <PlayStoreIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">Dadheech Classes App</span>
            </a>

            <a href="https://www.youtube.com/@dadheecheducationtrainingi24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group">
              <YouTubeIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">YouTube (Training)</span>
            </a>

            <a href="https://www.youtube.com/@dadheechactivities1379" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500 hover:text-white hover:scale-105 transition-all shadow-sm group">
              <YouTubeIcon className="w-4 h-4 shrink-0" />
              <span className="group-hover:underline">YouTube (Activities)</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-200 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <a href="tel:+919758975880" className="hover:underline hover:text-white">📞 9758975880</a>
            <span>•</span>
            <a href="tel:+919627032626" className="hover:underline hover:text-white">9627032626</a>
          </div>
        </div>

        {/* 👑 Developer Credit & Copyright Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2002 - 2026 Dadheech Memorial Public School (DMPS). All Rights Reserved.</p>
          
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

      {/* 🔍 Enhanced High-Res Lightbox Modal */}
      {/* 🔍 Full-Screen Photo Lightbox Modal with Next / Prev */}
      {lightboxIndex !== null && allGalleryPhotos[lightboxIndex] && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 select-none animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold backdrop-blur-md border border-white/20">
              Photo {lightboxIndex + 1} of {allGalleryPhotos.length}
            </span>
            <button 
              onClick={() => setLightboxIndex(null)} 
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors shadow-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + allGalleryPhotos.length) % allGalleryPhotos.length);
            }}
            className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-lg hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % allGalleryPhotos.length);
            }}
            className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-lg hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Main Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center p-2"
          >
            <img 
              src={allGalleryPhotos[lightboxIndex].src} 
              alt={allGalleryPhotos[lightboxIndex].alt} 
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200" 
            />
          </div>
        </div>
      )}

      {/* 📑 Prospectus Modal */}
      {prospectusModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden p-6 shadow-2xl space-y-4 modal-transition border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0b1e38] text-white flex items-center justify-center font-bold text-xs">DMPS</div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">DMPS Official Prospectus & Brochure</h3>
                  <p className="text-xs text-slate-500">Dadheech Educational Society & Training Institute</p>
                </div>
              </div>
              <button onClick={() => setProspectusModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {prospectusPages.map((pg, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedProspectusPage(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedProspectusPage === idx ? 'bg-[#0b1e38] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Page {idx + 1}: {pg.title}
                </button>
              ))}
            </div>

            <div className="max-h-[65vh] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
              <img src={prospectusPages[selectedProspectusPage].src} alt={prospectusPages[selectedProspectusPage].title} className="max-h-[60vh] w-auto object-contain rounded shadow" />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <button disabled={selectedProspectusPage === 0} onClick={() => setSelectedProspectusPage((prev) => prev - 1)} className="px-3 py-1.5 rounded bg-slate-100 text-slate-700 disabled:opacity-40 font-bold">Previous</button>
                <button disabled={selectedProspectusPage === prospectusPages.length - 1} onClick={() => setSelectedProspectusPage((prev) => prev + 1)} className="px-3 py-1.5 rounded bg-slate-100 text-slate-700 disabled:opacity-40 font-bold">Next</button>
              </div>

              <a href={prospectusPages[selectedProspectusPage].src} download={`DMPS_Prospectus_Page_${selectedProspectusPage + 1}.png`} className="px-4 py-1.5 rounded-lg bg-[#0b1e38] text-white font-bold flex items-center gap-1.5 hover:bg-slate-800">
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Save Page</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SchoolWebsitePage;
