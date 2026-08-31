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
  Bell,
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
  const [selectedNotice, setSelectedNotice] = useState(null);

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

  // 1. Dynamic Hero Slides (3 Campuses + Gallery Photos 1, 6, 22)
  const heroSlides = [
    {
      title: "Dadheech Memorial Public School (Jargwan) (Main Campus)",
      subtitle: "Flagship campus offering Playgroup to 12th Senior Secondary education with modern science labs & sports facilities.",
      tag: "Main Campus • Jargwan",
      image: "/assets/campuses/main_campus.jpg",
      cta: "Explore Main Campus",
      target: "campuses"
    },
    {
      title: "Dadheech Memorial Public School (Barheti)",
      subtitle: "Dedicated faculty, modern laboratories, and holistic schooling from Nursery to Class 8th.",
      tag: "Barheti Campus • Aligarh",
      image: "/assets/campuses/barheti_campus.jpeg",
      cta: "Explore Barheti Campus",
      target: "campuses"
    },
    {
      title: "Dadheech Kids School (Vinay Nagar, Aligarh)",
      subtitle: "Early childhood learning sanctuary with theme-based activity rooms, phonics, and play-way curriculum.",
      tag: "Kids School • Vinay Nagar, Aligarh",
      image: "/assets/banners/slide3.jpg",
      cta: "Explore Kids Wing",
      target: "campuses"
    },
    {
      title: "Co-Curricular & Student Leadership Excellence",
      subtitle: "Holistic personality grooming, cultural performances, and academic brilliance across all wings.",
      tag: "Campus Life • Activity Highlights",
      image: "/assets/gallery/1.jpg",
      cta: "View Event Gallery",
      target: "gallery"
    },
    {
      title: "Annual Functions, Sports & Student Achievers",
      subtitle: "Fostering athletic prowess, debate skills, science exhibitions, and competitive spirit.",
      tag: "Sports & Celebrations",
      image: "/assets/gallery/6.jpg",
      cta: "Explore Activities",
      target: "gallery"
    },
    {
      title: "Vibrant Campus Memories & Community Spirit",
      subtitle: "24 years of empowering young minds into responsible leaders and nation builders.",
      tag: "Dadheech Group of Education",
      image: "/assets/gallery/22.jpg",
      cta: "Discover Our Journey",
      target: "about"
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
    { id: 2, name: "Km. Kalpana Rajput", father: "Mr. Ramprakash", org: "AMU Aligarh" },
    { id: 3, name: "Krishna Kumar", father: "Mr. Ramprakash", org: "AMU Aligarh" },
    { id: 4, name: "Bablu Kumar", father: "Veerpal Singh", org: "AMU Aligarh" },
    { id: 5, name: "Manoj Kumar", father: "Charan Singh", org: "AMU Aligarh" },
    { id: 6, name: "Prashant Kumar", father: "Suresh Chandra", org: "AMU Aligarh" },
    { id: 7, name: "Nirankar Singh", father: "Bhoodev Singh", org: "AMU Aligarh" },
    { id: 8, name: "Sunil Kumar", father: "Ramesh Chandra", org: "AMU Aligarh" },
    { id: 9, name: "Abhishek Kumar", father: "Ashok Kumar", org: "AMU Aligarh" },
    { id: 10, name: "Prashant Rajput", father: "Mr. Pramod Kumar", org: "AMU Aligarh" },
    { id: 11, name: "Divya Rajput", father: "Mr. Pramod Kumar", org: "AMU Aligarh" },
    { id: 12, name: "Neeresh Kumar", father: "Mr. Radhelal", org: "AMU Aligarh" },
    { id: 13, name: "Dushyant Kumar", father: "Sanjeev Ratan", org: "AMU Aligarh" },
    { id: 14, name: "Km. Laxmi Rajput", father: "Mr. Billu Singh", org: "AMU Aligarh" },
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
    { id: 24, name: "Km. Jyoti Singh", father: "Charan Singh", org: "JNV Entrance" },
    { id: 25, name: "Km. Renu Rajput", father: "Suresh Chandra", org: "JNV Entrance" },
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
    { id: 38, name: "Prashant Kumar Rajput", father: "Pramod Kumar", org: "Vidyagyan Academy" }
  ];

  const aecsStudents = [
    { id: 39, name: "Km. Ritika Singh", father: "Charan Singh", org: "AECS Narora & Kendriya" },
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

  // 3.5 Official School Notice Board Data (AMU Portal Style)
  const noticesData = [
    {
      id: 1,
      title: "Counselling-cum-Admission Schedule for Admission to various classes, 2026–27",
      date: "Aug 30, 2026",
      isNew: true,
      category: "Admissions",
      content: "Registration and counselling-cum-admission process for the academic session 2026-27 is actively underway across all three DMPS campuses (Jargwan, Barheti, and Quarsi). Parents and guardians can submit online applications or collect official prospectus forms from the school counter.",
      image: "/assets/campuses/main_campus.jpg"
    },
    {
      id: 2,
      title: "Revised Schedule Registration for Session 2026–27 across all wings",
      date: "Aug 28, 2026",
      isNew: true,
      category: "Admissions",
      content: "The revised registration schedule for newly admitted candidates in Playgroup, Primary, Middle, Secondary, and Senior Secondary wings has been published. Document verification desk is active daily from 8:30 AM to 2:00 PM.",
      image: null
    },
    {
      id: 3,
      title: "Bhartiya Shiksha Board (BSB) Affiliation & Curriculum Guidelines (Code 00065)",
      date: "Aug 24, 2026",
      isNew: false,
      category: "Affiliation",
      content: "DMPS Senior Secondary Campus (Jargwan) operates under the curriculum framework of Bhartiya Shiksha Board (BSB), Affiliation Code 00065, offering comprehensive Science (PCM/PCB), Commerce, and Humanities streams with modern laboratory training.",
      image: "/assets/prospectus/p4.jpg"
    },
    {
      id: 4,
      title: "Quarterly Unit Assessment & Examination Schedule for Classes 1st to 12th",
      date: "Aug 21, 2026",
      isNew: false,
      category: "Examinations",
      content: "First term quarterly examinations and periodic unit evaluations will commence from September 10th, 2026. The detailed subject-wise date sheet and syllabus blueprints have been distributed in all classrooms.",
      image: null
    },
    {
      id: 5,
      title: "Notice regarding Updated School Transport Bus Routes & Timings",
      date: "Aug 18, 2026",
      isNew: false,
      category: "Transport",
      content: "New designated pickup stops have been added covering 30+ surrounding villages and towns along Ramghat Road, Jawan, Chherat, and Atrauli border. All buses are equipped with real-time GPS tracking and dedicated female attendants for student safety.",
      image: null
    },
    {
      id: 6,
      title: "Parent-Teacher Progress Review Meeting (PTM) Notification",
      date: "Aug 15, 2026",
      isNew: false,
      category: "Academics",
      content: "The monthly parent-teacher interaction meeting is scheduled for the upcoming Saturday from 9:00 AM to 1:00 PM. Parents are invited to discuss academic progress, attendance records, and competitive entrance exam coaching.",
      image: null
    }
  ];

  // 4. Our Schools Data
  const campusesData = [
    {
      id: "main-campus",
      name: "Dadheech Memorial Public School (Jargwan) (Main Campus)",
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
      name: "Dadheech Memorial Public School (Barheti)",
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
      name: "Dadheech Kids School (Vinay Nagar, Aligarh)",
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

  // 6. 📸 Dynamic Auto-Discovery & Natural Numerical Sorting (1, 2, 3... 10, 28)
  // (Automatically sorts by file name numbers: 1.jpg, 2.jpg, 3.jpg ... 28.jpg)
  const galleryImageModules = import.meta.glob('/public/assets/gallery/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true, query: '?url', import: 'default' });
  
  const allGalleryPhotos = Object.entries(galleryImageModules)
    .map(([path, url]) => {
      const filename = path.split('/').pop();
      const src = url || path.replace(/^\/public/, '');
      return {
        filename: filename,
        src: src
      };
    })
    .sort((a, b) => {
      return a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: 'base' });
    })
    .map((item, index) => ({
      id: index + 1,
      src: item.src,
      alt: `Photo ${index + 1}`
    }));

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
              <span className="font-serif font-black text-xl sm:text-2xl text-[#0b1e38] tracking-tight uppercase group-hover:text-sky-700 transition-colors leading-none">
                Dadheech
              </span>
              <span className="text-[9.5px] font-extrabold text-slate-500 tracking-[0.16em] uppercase mt-1">
                A Group of Education
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-black uppercase tracking-wider text-slate-800">
            <button onClick={() => navigateTo('home')} className={`py-2 transition-colors ${currentPage === 'home' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Home
            </button>

            {/* About Us Dropdown with Dedicated Subpages */}
            <div className="relative py-2 group cursor-pointer" onMouseEnter={() => setOpenDropdown('about')} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => navigateTo('about')} className={`flex items-center gap-1 transition-colors ${['about', 'founder', 'md', 'principal', 'dedication'].includes(currentPage) ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
                <span>About & Leadership</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 z-50 text-slate-800 normal-case font-semibold">
                  <button onClick={() => navigateTo('about')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏛️ Overview & Society History
                  </button>
                  <button onClick={() => navigateTo('founder')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-amber-800">
                    👑 Founder's Message
                  </button>
                  <button onClick={() => navigateTo('md')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-sky-800">
                    💼 Manager's Message
                  </button>
                  <button onClick={() => navigateTo('principal')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-indigo-800">
                    🎓 Principal's Message
                  </button>
                  <button onClick={() => navigateTo('dedication')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-amber-900">
                    🌸 Sacred Dedication
                  </button>
                </div>
              )}
            </div>

            {/* Our Schools Dropdown */}
            <div className="relative py-2 group cursor-pointer" onMouseEnter={() => setOpenDropdown('campuses')} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => navigateTo('campuses')} className={`flex items-center gap-1 transition-colors ${currentPage === 'campuses' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
                <span>Our Schools</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'campuses' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 z-50 text-slate-800 normal-case font-semibold">
                  <button onClick={() => navigateTo('campuses', 'main-campus')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏫 Dadheech Memorial Public School (Jargwan) (Main Campus)
                  </button>
                  <button onClick={() => navigateTo('campuses', 'barheti-campus')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏫 Dadheech Memorial Public School (Barheti)
                  </button>
                  <button onClick={() => navigateTo('campuses', 'kids-school')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700">
                    🏫 Dadheech Kids School (Vinay Nagar, Aligarh)
                  </button>
                </div>
              )}
            </div>

            {/* Academics & Selections Dropdown */}
            <div className="relative py-2 group cursor-pointer" onMouseEnter={() => setOpenDropdown('academics')} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => navigateTo('academic')} className={`flex items-center gap-1 transition-colors ${['academic', 'selections'].includes(currentPage) ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
                <span>Academics</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'academics' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 z-50 text-slate-800 normal-case font-semibold">
                  <button onClick={() => navigateTo('academic')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold flex items-center gap-2">
                    <span>📖 Curriculum & Academic Wings</span>
                  </button>
                  <button onClick={() => navigateTo('selections')} className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-sky-700 font-bold text-amber-900 flex items-center gap-2">
                    <span>🏆 Competitive Selections</span>
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => navigateTo('facilities')} className={`py-2 transition-colors ${currentPage === 'facilities' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Infrastructure
            </button>

            <button onClick={() => navigateTo('gallery')} className={`py-2 transition-colors ${currentPage === 'gallery' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Gallery
            </button>

            <button onClick={() => navigateTo('contact')} className={`py-2 whitespace-nowrap transition-colors ${currentPage === 'contact' ? 'text-sky-700 border-b-2 border-sky-600 font-black' : 'hover:text-sky-700'}`}>
              Contact Us
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigateTo('admissions')}
              className="px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <div className="flex flex-col text-left leading-none space-y-1">
                <span className="font-black text-xs uppercase tracking-wider text-white">Admissions</span>
                <span className="font-bold text-[10px] text-sky-200 tracking-wider">2026–27</span>
              </div>
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
            <button onClick={() => navigateTo('founder')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-amber-800">👑 Founder's Message</button>
            <button onClick={() => navigateTo('md')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-sky-800">💼 Manager's Message</button>
            <button onClick={() => navigateTo('principal')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-indigo-800">🎓 Principal's Message</button>
            <button onClick={() => navigateTo('dedication')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-amber-900">🌸 Sacred Dedication</button>
            <button onClick={() => navigateTo('campuses')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Our 3 Campuses</button>
            <button onClick={() => navigateTo('academic')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Academics & Curriculum</button>
            <button onClick={() => navigateTo('selections')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm text-amber-800">🏆 Competitive Selections</button>
            <button onClick={() => navigateTo('facilities')} className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-bold text-sm">Campus Infrastructure</button>
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
          
          {/* 🌟 Split Hero Banner (Left: Compact HD Slider | Right: Live Notice Board & Circulars) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* 🖼️ LEFT COLUMN (8 Cols): HD Hero Banner Carousel */}
              <div className="lg:col-span-8 relative h-[360px] sm:h-[440px] lg:h-[470px] bg-slate-900 rounded-3xl overflow-hidden shadow-xl flex items-center border border-slate-200">
                {heroSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      activeHeroSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
                    {/* Soft gradient bottom shadow for captions & dots */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                  </div>
                ))}

                {/* ⬅️ Previous Slide Button */}
                <button
                  onClick={() => setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/60 transition-all shadow-xl hover:scale-110 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* ➡️ Next Slide Button */}
                <button
                  onClick={() => setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/60 transition-all shadow-xl hover:scale-110 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* 🏷️ Floating Caption & Dots */}
                <div className="absolute bottom-4 inset-x-0 z-20 flex flex-col items-center gap-2 px-4 pointer-events-none">
                  <div className="px-3.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-center shadow-xl flex items-center gap-2 pointer-events-auto max-w-xl">
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black uppercase tracking-wider shrink-0">
                      {heroSlides[activeHeroSlide].tag}
                    </span>
                    <span className="font-bold text-xs sm:text-sm tracking-wide text-white truncate">
                      {heroSlides[activeHeroSlide].title}
                    </span>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex items-center gap-1.5 pointer-events-auto">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveHeroSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activeHeroSlide === i ? 'w-6 bg-amber-400' : 'w-2 bg-white/60 hover:bg-white'}`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* 📢 RIGHT COLUMN (4 Cols): Notice Board & Circulars Box */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xl flex flex-col h-[360px] sm:h-[440px] lg:h-[470px]">
                {/* Notice Board Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#0b1e38] text-base font-serif leading-tight">
                        Notice Board
                      </h3>
                      <p className="text-[10px] text-slate-500 font-medium">Click subject to view circular</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Live Updates</span>
                  </span>
                </div>

                {/* Notice Items List */}
                <div className="flex-1 overflow-y-auto divide-y divide-slate-100 pr-1 my-2 custom-scrollbar">
                  {noticesData.map((notice) => (
                    <div
                      key={notice.id}
                      onClick={() => setSelectedNotice(notice)}
                      className="py-3 px-2 rounded-xl hover:bg-sky-50/70 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-800 transition-colors">
                          {notice.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">{notice.date}</span>
                      </div>

                      {/* Main Subject Clickable */}
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#0b1e38] group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                        {notice.title}
                      </h4>

                      {/* Attachment indicator pill if has image */}
                      <div className="flex items-center gap-2 mt-1.5">
                        {notice.image ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 group-hover:bg-amber-100 transition-colors">
                            <Eye className="w-3 h-3 text-amber-600" />
                            <span>Photo Attachment Included</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                            <FileText className="w-3 h-3 text-slate-400" />
                            <span>Official Text Circular</span>
                          </span>
                        )}
                        {notice.isNew && (
                          <span className="px-1.5 py-0.2 rounded bg-rose-600 text-white text-[9px] font-black uppercase tracking-wider">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notice Board Footer */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-medium">All Campuses (DMPS)</span>
                  <button
                    onClick={() => navigateTo('admissions')}
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                  >
                    <span>Apply Online</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* ⚡ Clean Quick Action & Highlights Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <button
                onClick={() => navigateTo('admissions')}
                className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white shadow-md transition-all flex items-center gap-3 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider">Admissions Open</div>
                  <div className="text-[10px] sm:text-xs text-sky-100 font-medium">Session 2026–27 • Apply Now</div>
                </div>
              </button>

              <button
                onClick={() => navigateTo('campuses')}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200 text-slate-800 shadow-sm transition-all flex items-center gap-3 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider">Our 3 Campuses</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Jargwan • Barheti • Quarsi</div>
                </div>
              </button>

              <button
                onClick={() => navigateTo('selections')}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200 text-slate-800 shadow-sm transition-all flex items-center gap-3 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider">Student Selections</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">AMU, JNV & Vidyagyan</div>
                </div>
              </button>

              <button
                onClick={() => setProspectusModalOpen(true)}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-slate-800 shadow-sm transition-all flex items-center gap-3 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider">Prospectus Booklet</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Fee Structure & Info</div>
                </div>
              </button>
            </div>
          </div>

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
                      "Education is not about learning of facts but training young minds to think."
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
                      "Education is the movement from darkness to brightness."
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
                  <p className="text-xs text-sky-900 font-medium">Manager</p>
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
                      "Education is not the preparation for life, Education is life itself."
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
                    {campus.id === 'main-campus' ? 'DMPS Jargwan (Main Campus)' : campus.id === 'barheti-campus' ? 'DMPS Barheti' : 'Dadheech Kids School (Vinay Nagar, Aligarh)'}
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
            
            {/* 📝 LEFT COLUMN (6 Cols): Crisp Thought & Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest block mb-1">
                  Visionary Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif">
                  Training Young Minds to Think & Lead
                </h2>
              </div>

              {/* Entire Founder Message inside Box */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-white border-2 border-amber-300 shadow-lg space-y-4">
                <Quote className="w-10 h-10 text-amber-400/30 absolute -top-3 -left-3" />
                
                <p className="text-base sm:text-lg text-[#0b1e38] font-bold italic font-serif leading-relaxed border-b border-amber-200 pb-3">
                  "Education is not about learning of facts but training young minds to think."
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Today the role of school is not only to pursue academic excellence but also to motivate and empower its students to be lifelong learners, critical thinkers, and productive members of an ever-changing global society. Education is the process of facilitating learning, skills, values, beliefs, and habits, playing an important role in shaping an individual's life. Our students are taught to meet the needs and face the challenges of life in a very confident manner.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  I am very sure that through collaborative effort, we can achieve more to benefit our students who are the future leaders of tomorrow. By focusing on child-centered education, we are trying to mould our future citizens into <strong>"Nation Builders"</strong>. We are sure that the seeds of wisdom are sown today in the form of students and shall reap tomorrow in the form of responsible citizens.
                </p>

                <div className="pt-3 border-t border-amber-200 flex justify-end">
                  <span className="text-xs sm:text-sm font-black text-amber-900 uppercase tracking-wider">
                    — Late Mr. Dauli Singh (Visionary Founder)
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

            {/* 🖼️ RIGHT COLUMN (6 Cols): Large High-Resolution Portrait Photo */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-72 sm:w-80 md:w-[340px] max-w-full rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-gradient-to-b from-amber-100 to-amber-50 p-2.5 group">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner">
                  <img
                    src="/assets/leadership/founder.jpg"
                    alt="Late Mr. Dauli Singh - Founder"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-xl font-black text-[#0b1e38] font-serif whitespace-nowrap">Late Mr. Dauli Singh</h3>
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Visionary Founder</p>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium whitespace-nowrap">Dadheech Educational Society (Estd. July 2002)</p>
                  <p className="text-xs font-bold text-amber-800 tracking-wide mt-1">8 Jan 1975 – 2022</p>
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
                  DMPS Senior Secondary School
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1e38] font-serif tracking-tight">
                Manager's Message
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-sky-900">
                Mr. Pramod Kumar Rajput — Manager, Dadheech Memorial Public School
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
            
            {/* 📝 LEFT COLUMN (6 Cols): Crisp Thought & Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black text-sky-700 uppercase tracking-widest block mb-1">
                  Manager's Perspective
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif">
                  Movement from Darkness to Brightness
                </h2>
              </div>

              {/* Entire Manager Message inside Box */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sky-50/80 via-blue-50/40 to-white border-2 border-sky-300 shadow-lg space-y-4">
                <Quote className="w-10 h-10 text-sky-400/30 absolute -top-3 -left-3" />
                
                <p className="text-base sm:text-lg text-[#0b1e38] font-bold italic font-serif leading-relaxed border-b border-sky-200 pb-3">
                  "Education is the movement from darkness to brightness."
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Education plays an important role in enabling a person to face real-life situations with adequate knowledge. A school is a temple of learning and a home away from home. We are making our best effort to give quality education to our students. We transform dreams into reality, thoughts into ideas, and ideas into actions.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  We aspire to provide the best to our students and no stone will be left unturned to provide holistic and all-round personality development. In this pursuit of excellence, I appreciate our parents for supporting the school in every aspect. I also laud the relentless efforts of our teachers for giving their best. I wish the best of fortune, peace, and prosperity to all those who contribute to the noble task of spreading education.
                </p>

                <div className="pt-3 border-t border-sky-200 flex justify-end">
                  <span className="text-xs sm:text-sm font-black text-sky-900 uppercase tracking-wider">
                    — Mr. Pramod Kumar Rajput (Manager)
                  </span>
                </div>
              </div>

              {/* Action Buttons Directly Below */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo('selections')}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  View Student Selections
                </button>
                <button
                  onClick={() => navigateTo('academic')}
                  className="px-5 py-2.5 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white font-bold text-xs transition-all"
                >
                  Academic Curriculum
                </button>
              </div>
            </div>

            {/* 🖼️ RIGHT COLUMN (6 Cols): Large High-Resolution Portrait Photo */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-72 sm:w-80 md:w-[340px] max-w-full rounded-3xl overflow-hidden border-4 border-sky-400 shadow-2xl bg-gradient-to-b from-sky-100 to-sky-50 p-2.5 group">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner">
                  <img
                    src="/assets/leadership/md.jpg"
                    alt="Mr. Pramod Kumar Rajput - Manager"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-xl font-black text-[#0b1e38] font-serif whitespace-nowrap">Mr. Pramod Kumar Rajput</h3>
                  <p className="text-xs font-bold text-sky-900 uppercase tracking-wider">Manager</p>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium whitespace-nowrap">Overseeing 3 Campuses & Academic Wings</p>
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
            
            {/* 📝 LEFT COLUMN (6 Cols): Crisp Thought & Pedagogy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black text-indigo-700 uppercase tracking-widest block mb-1">
                  Principal's Welcome
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b1e38] font-serif">
                  Education is Life Itself
                </h2>
              </div>

              {/* Entire Principal Message inside Box */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-white border-2 border-indigo-300 shadow-lg space-y-4">
                <Quote className="w-10 h-10 text-indigo-400/30 absolute -top-3 -left-3" />
                
                <p className="text-base sm:text-lg text-[#0b1e38] font-bold italic font-serif leading-relaxed border-b border-indigo-200 pb-3">
                  "Education is not the preparation for life, Education is life itself."
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Our goal is to provide an enriching and exploring curriculum that will prepare the students to become innovative thinkers, creative problem solvers, and inspired learners for achieving success. Education is a team effort. Teachers and parents are important parts of the team who are the coordinating wheels to drive the students always on the road to success, to reach their goal in a fruitful way.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Our institution always believes that education is a shared commitment between dedicated teachers, motivated students, and enthusiastic parents with high expectations. At the end, I would pen down by saying that we are thoroughly committed to serve the nation's youth by providing them high-quality education, so that they can contribute towards a humane, just, and pluralistic society with better innovative ideas.
                </p>

                <div className="pt-3 border-t border-indigo-200 flex justify-end">
                  <span className="text-xs sm:text-sm font-black text-indigo-900 uppercase tracking-wider">
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
                  onClick={() => navigateTo('academic')}
                  className="px-5 py-2.5 rounded-xl bg-[#0b1e38] hover:bg-slate-800 text-white font-bold text-xs transition-all"
                >
                  Academic Curriculum
                </button>
              </div>
            </div>

            {/* 🖼️ RIGHT COLUMN (6 Cols): Large High-Resolution Portrait Photo */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-72 sm:w-80 md:w-[340px] max-w-full rounded-3xl overflow-hidden border-4 border-indigo-400 shadow-2xl bg-gradient-to-b from-indigo-100 to-indigo-50 p-2.5 group">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner">
                  <img
                    src="/assets/leadership/principal.jpg"
                    alt="Mrs. Kavita Rani - Principal"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-xl font-black text-[#0b1e38] font-serif whitespace-nowrap">Mrs. Kavita Rani</h3>
                  <p className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Principal • Educationalist</p>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium whitespace-nowrap">DMPS Senior Secondary Campus</p>
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
      {/* 🔬 PAGE 5: CAMPUS INFRASTRUCTURE (Grouped Facilities) */}
      {/* ========================================================================= */}
      {currentPage === 'facilities' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-in fade-in duration-300">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black tracking-wider uppercase inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Modern Campus Infrastructure</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#0b1e38] font-serif">
              World-Class Learning Spaces
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Designed to foster scientific curiosity, digital innovation, physical fitness, and holistic intellectual growth across all campuses.
            </p>
          </div>

          <div className="space-y-10">
            {/* 🔬 GROUP 1: Advanced Science Laboratories */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0b1e38] font-serif">
                    Advanced Science Laboratories
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">Hands-on experimentation & Board practicals</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-sky-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-sky-600">⚡</span> Physics Laboratory
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Equipped with optical benches, electric circuit kits, magnetism apparatus, prisms, and precision measurement meters for senior secondary practicals.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-sky-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-emerald-600">🧪</span> Chemistry Laboratory
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modern reagent stations, titration setups, organic/inorganic salts, safety fume hoods, and individual student experiment workbenches.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-sky-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-amber-600">🔬</span> Biology Laboratory
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-resolution compound microscopes, permanent botanical/zoological specimen slides, 3D anatomical charts, and plant physiology apparatus.
                  </p>
                </div>
              </div>
            </div>

            {/* 💻 GROUP 2: Digital Technology & Smart Classrooms */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0b1e38] font-serif">
                    Digital & Smart Learning Technology
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">Interactive Touch Panels, Smart LEDs & High-Tech Computer Lab</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2 hover:border-indigo-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-indigo-600">🖥️</span> Touch-Panel Smart Class
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dedicated interactive smart room featuring high-grade Touch Interactive Flat Panels (IFP), digital whiteboarding, and 3D visual concepts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2 hover:border-indigo-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-sky-600">📺</span> Smart 4K LEDs in Each Class
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every standard classroom is equipped with a Smart LED screen for audiovisual lessons, animated subject explanations, and daily quizzes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2 hover:border-indigo-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-purple-600">⌨️</span> High-Tech Computer Lab
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modern desktop systems connected via high-speed fiber internet, offering curriculum in basic computing, coding, typing, and digital literacy.
                  </p>
                </div>
              </div>
            </div>

            {/* 📚 GROUP 3: Knowledge Library & Cultural Auditorium */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0b1e38] font-serif">
                    Central Library & Grand Auditorium
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">Intellectual enrichment, public speaking & cultural events</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200 space-y-2 hover:border-amber-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-amber-700">📖</span> Knowledge Resource Library
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thousands of curriculum textbooks, national competitive entrance study materials (AMU, JNV, BSB, Olympiads), general knowledge encyclopedias, and a serene reading hall.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200 space-y-2 hover:border-amber-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-amber-700">🎭</span> Grand Multipurpose Auditorium
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Acoustically designed auditorium with state-of-the-art stage lighting, digital sound, and comfortable seating for annual functions, science exhibitions, and debates.
                  </p>
                </div>
              </div>
            </div>

            {/* 🏃 GROUP 4: Sports, Transport & Campus Safety */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0b1e38] font-serif">
                    Sports Grounds, Safety & Transport Fleet
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">Physical well-being, campus security & safe commute</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-2 hover:border-emerald-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-emerald-700">⚽</span> Sports Complex & Yoga
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spacious athletic grounds for Cricket, Volleyball, Badminton, Table Tennis, athletics, and daily morning yoga for physical fitness.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-2 hover:border-emerald-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-sky-700">🚌</span> GPS School Bus Fleet
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Well-maintained school buses and vans covering 30+ surrounding villages and towns, equipped with GPS tracking and trained conductors.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-2 hover:border-emerald-400 transition-all">
                  <div className="font-black text-[#0b1e38] text-base flex items-center gap-2">
                    <span className="text-slate-700">🛡️</span> 24x7 CCTV & Pure RO Water
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-definition CCTV coverage across all corridors, entry gates, and grounds, paired with multi-stage RO drinking water stations and clean washrooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* 🏆 PAGE 6: COMPETITIVE SELECTIONS (2-Column Side-by-Side Exam Grid) */}
      {/* ========================================================================= */}
      {currentPage === 'selections' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider uppercase inline-flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Official Merit Record (Till 2020)</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#0b1e38] font-serif">
              Students Who Qualified Entrance Exams
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Official list of stellar achievers from Dadheech Memorial Public School who qualified premier national entrance examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* 🎓 CARD 1: Aligarh Muslim University (AMU), Aligarh Entrance Exams */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-base">
                    🎓
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-[#0b1e38] font-serif">
                      Aligarh Muslim University (AMU), Aligarh
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">Entrance Exam Qualifiers</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200">
                  {amuStudents.length} Students
                </span>
              </div>

              {/* Clean 2-column numbered student list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                {amuStudents.map((s, index) => (
                  <div key={s.id} className="flex items-center gap-2 py-1 px-1.5 rounded-lg hover:bg-sky-50/60 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800 truncate">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 🏫 CARD 2: Jawahar Navodaya Vidyalaya Entrance Exam */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base">
                    🏫
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-[#0b1e38] font-serif">
                      Jawahar Navodaya Vidyalaya (JNV)
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">Entrance Exam Qualifiers</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                  {jnvStudents.length} Students
                </span>
              </div>

              {/* Clean 2-column numbered student list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                {jnvStudents.map((s, index) => (
                  <div key={s.id} className="flex items-center gap-2 py-1 px-1.5 rounded-lg hover:bg-amber-50/60 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800 truncate">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 🌟 CARD 3: Vidyagyan Entrance Exam */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-base">
                    🌟
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-[#0b1e38] font-serif">
                      Vidyagyan Entrance Exam
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">Leadership Academy Qualifiers</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold border border-indigo-200">
                  {vidyagyanStudents.length} Students
                </span>
              </div>

              {/* Clean numbered student list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                {vidyagyanStudents.map((s, index) => (
                  <div key={s.id} className="flex items-center gap-2 py-1 px-1.5 rounded-lg hover:bg-indigo-50/60 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800 truncate">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 🏛️ CARD 4: Atomic Energy Central School, Narora & Central School, Aligarh */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
                    🏛️
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-[#0b1e38] font-serif">
                      AECS Narora & Central School Aligarh
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">Entrance Exam Qualifiers</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  {aecsStudents.length} Students
                </span>
              </div>

              {/* Clean numbered student list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                {aecsStudents.map((s, index) => (
                  <div key={s.id} className="flex items-center gap-2 py-1 px-1.5 rounded-lg hover:bg-emerald-50/60 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800 truncate">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
                    <option>Dadheech Memorial Public School (Jargwan) (Main Campus)</option>
                    <option>Dadheech Memorial Public School (Barheti)</option>
                    <option>Dadheech Kids School (Vinay Nagar, Aligarh)</option>
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
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-black">Main Campus</span>
              <h3 className="text-base font-black text-[#0b1e38] font-serif">Dadheech Memorial Public School (Jargwan) (Main Campus)</h3>
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
              <h3 className="text-base font-black text-[#0b1e38] font-serif">Dadheech Memorial Public School (Barheti)</h3>
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
              <h3 className="text-base font-black text-[#0b1e38] font-serif">Dadheech Kids School (Vinay Nagar, Aligarh)</h3>
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

      {/* 📢 Notice Detail & Attachment Modal */}
      {selectedNotice && (
        <div 
          onClick={() => setSelectedNotice(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden p-6 sm:p-7 shadow-2xl space-y-4 border border-slate-200 animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-black uppercase">
                    {selectedNotice.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Date: {selectedNotice.date}
                  </span>
                  {selectedNotice.isNew && (
                    <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="font-black text-[#0b1e38] text-lg sm:text-xl font-serif leading-tight">
                  {selectedNotice.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedNotice(null)} 
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Notice Body Content */}
            <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1 custom-scrollbar">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                {selectedNotice.content}
              </div>

              {/* Attached Photo / Circular Preview (Only Shown if Attached!) */}
              {selectedNotice.image && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
                      <span>Attached Circular / Document Photo</span>
                    </span>
                    <a
                      href={selectedNotice.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-sky-700 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Open Full Size</span>
                    </a>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 max-h-80 flex items-center justify-center">
                    <img 
                      src={selectedNotice.image} 
                      alt={selectedNotice.title} 
                      className="w-full h-auto max-h-80 object-contain hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
              <span className="text-slate-500 text-[11px]">
                Dadheech Memorial Public School • Admin Desk
              </span>
              <button 
                onClick={() => setSelectedNotice(null)} 
                className="px-4 py-2 rounded-xl bg-[#0b1e38] text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SchoolWebsitePage;
