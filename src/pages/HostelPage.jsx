import React, { useState, useEffect } from 'react';
import {
  Home,
  Users,
  ShieldCheck,
  Phone,
  Bed,
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Trash2,
  Printer,
  Calendar,
  Layers,
  Sparkles,
  Tag
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const HostelPage = ({ initialSection = 'master' }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents() || [];

  const resolveTab = (tab) => {
    if (!tab) return 'master';
    if (tab === 'hostel-master' || tab === 'master') return 'master';
    if (tab === 'hostel-room' || tab === 'rooms') return 'rooms';
    if (tab === 'hostel-category' || tab === 'category') return 'category';
    if (tab === 'hostel-allocation' || tab === 'allocation') return 'allocation';
    return 'master';
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialSection));

  useEffect(() => {
    if (initialSection) setActiveTab(resolveTab(initialSection));
  }, [initialSection]);

  // 1. Hostels Master Data
  const [hostels, setHostels] = useState([
    {
      id: 'HST-01',
      name: 'Kalam Senior Boys Hostel Wing',
      type: 'Boys',
      warden: 'Sh. Surendra Sharma',
      wardenContact: '+91 97588 82443',
      address: 'North Campus Block B, Jargwan',
      capacity: 80,
      occupied: 64,
      totalRooms: 20
    },
    {
      id: 'HST-02',
      name: 'Gargi Girls Residential Wing',
      type: 'Girls',
      warden: 'Mrs. Sunita Verma',
      wardenContact: '+91 97192 25317',
      address: 'South Campus Secure Wing, Jargwan',
      capacity: 60,
      occupied: 48,
      totalRooms: 15
    },
    {
      id: 'HST-03',
      name: 'Tagore Junior Boarders House',
      type: 'Boys',
      warden: 'Sh. Ram Kumar Lodhi',
      wardenContact: '+91 96277 22404',
      address: 'East Academic Residential Block',
      capacity: 40,
      occupied: 32,
      totalRooms: 10
    }
  ]);

  // 2. Hostel Categories Master Data
  const [categories, setCategories] = useState([
    {
      id: 'CAT-01',
      name: 'AC Single Deluxe Room',
      type: 'AC Deluxe',
      monthlyFee: 8500,
      capacity: 1,
      amenities: 'Split AC, Attached Washroom, Study Table, Wardrobe, High-Speed WiFi',
      totalRooms: 6
    },
    {
      id: 'CAT-02',
      name: '2-Bed Air-Cooled Deluxe',
      type: 'Air-Cooled',
      monthlyFee: 6000,
      capacity: 2,
      amenities: 'Desert Cooler, Attached Balcony, Dual Study Desks, Geyser',
      totalRooms: 18
    },
    {
      id: 'CAT-03',
      name: '3-Bed Standard Boarding',
      type: 'Standard',
      monthlyFee: 4500,
      capacity: 3,
      amenities: 'Ceiling Fans, Steel Almirahs, Shared Floor Washrooms, Study Desks',
      totalRooms: 15
    },
    {
      id: 'CAT-04',
      name: '4-Bed Junior Dormitory',
      type: 'Dormitory',
      monthlyFee: 3500,
      capacity: 4,
      amenities: 'Bunk Beds, Individual Lockers, Common Study Hall, Water Cooler',
      totalRooms: 6
    }
  ]);

  // 3. Hostel Rooms Data
  const [rooms, setRooms] = useState([
    { id: 'RM-101', roomNo: '101', hostelId: 'HST-01', hostelName: 'Kalam Senior Boys Hostel Wing', floor: 'Ground Floor', category: '2-Bed Air-Cooled Deluxe', capacity: 2, occupied: 2, fee: 6000 },
    { id: 'RM-102', roomNo: '102', hostelId: 'HST-01', hostelName: 'Kalam Senior Boys Hostel Wing', floor: 'Ground Floor', category: '2-Bed Air-Cooled Deluxe', capacity: 2, occupied: 1, fee: 6000 },
    { id: 'RM-103', roomNo: '103', hostelId: 'HST-01', hostelName: 'Kalam Senior Boys Hostel Wing', floor: 'Ground Floor', category: 'AC Single Deluxe Room', capacity: 1, occupied: 1, fee: 8500 },
    { id: 'RM-201', roomNo: '201', hostelId: 'HST-01', hostelName: 'Kalam Senior Boys Hostel Wing', floor: '1st Floor', category: '3-Bed Standard Boarding', capacity: 3, occupied: 3, fee: 4500 },
    { id: 'RM-202', roomNo: '202', hostelId: 'HST-01', hostelName: 'Kalam Senior Boys Hostel Wing', floor: '1st Floor', category: '3-Bed Standard Boarding', capacity: 3, occupied: 2, fee: 4500 },
    { id: 'RM-G01', roomNo: 'G-101', hostelId: 'HST-02', hostelName: 'Gargi Girls Residential Wing', floor: 'Ground Floor', category: '2-Bed Air-Cooled Deluxe', capacity: 2, occupied: 2, fee: 6000 },
    { id: 'RM-G02', roomNo: 'G-102', hostelId: 'HST-02', hostelName: 'Gargi Girls Residential Wing', floor: 'Ground Floor', category: '2-Bed Air-Cooled Deluxe', capacity: 2, occupied: 1, fee: 6000 },
    { id: 'RM-G201', roomNo: 'G-201', hostelId: 'HST-02', hostelName: 'Gargi Girls Residential Wing', floor: '1st Floor', category: 'AC Single Deluxe Room', capacity: 1, occupied: 1, fee: 8500 },
    { id: 'RM-J01', roomNo: 'J-01', hostelId: 'HST-03', hostelName: 'Tagore Junior Boarders House', floor: 'Ground Floor', category: '4-Bed Junior Dormitory', capacity: 4, occupied: 4, fee: 3500 },
    { id: 'RM-J02', roomNo: 'J-02', hostelId: 'HST-03', hostelName: 'Tagore Junior Boarders House', floor: 'Ground Floor', category: '4-Bed Junior Dormitory', capacity: 4, occupied: 3, fee: 3500 }
  ]);

  // 4. Student Allocations Data
  const [allocations, setAllocations] = useState([
    {
      id: 'ALC-01',
      studentName: 'RITU YADAV',
      class: 'XI',
      rollNo: '101',
      hostelName: 'Gargi Girls Residential Wing',
      roomNo: 'G-101',
      bedNo: 'Bed A',
      category: '2-Bed Air-Cooled Deluxe',
      allocatedDate: '2026-04-10',
      guardian: 'SURENDRA SINGH',
      mobile: '9758882443',
      status: 'Checked In'
    },
    {
      id: 'ALC-02',
      studentName: 'SACHIN KUMAR',
      class: 'X',
      rollNo: '102',
      hostelName: 'Kalam Senior Boys Hostel Wing',
      roomNo: '101',
      bedNo: 'Bed A',
      category: '2-Bed Air-Cooled Deluxe',
      allocatedDate: '2026-04-12',
      guardian: 'REVADI SINGH',
      mobile: '9761768321',
      status: 'Checked In'
    },
    {
      id: 'ALC-03',
      studentName: 'DIPANSHU',
      class: 'IX',
      rollNo: '103',
      hostelName: 'Kalam Senior Boys Hostel Wing',
      roomNo: '101',
      bedNo: 'Bed B',
      category: '2-Bed Air-Cooled Deluxe',
      allocatedDate: '2026-04-12',
      guardian: 'REVADI SINGH',
      mobile: '9761768321',
      status: 'Checked In'
    },
    {
      id: 'ALC-04',
      studentName: 'LAKSHYA AGRAWAL',
      class: 'IX',
      rollNo: '104',
      hostelName: 'Kalam Senior Boys Hostel Wing',
      roomNo: '103',
      bedNo: 'Single Bed',
      category: 'AC Single Deluxe Room',
      allocatedDate: '2026-04-15',
      guardian: 'JAGDISH AGRAWAL',
      mobile: '8377933435',
      status: 'Checked In'
    },
    {
      id: 'ALC-05',
      studentName: 'CHIRAG SHARMA',
      class: 'V',
      rollNo: '105',
      hostelName: 'Tagore Junior Boarders House',
      roomNo: 'J-01',
      bedNo: 'Bed #1',
      category: '4-Bed Junior Dormitory',
      allocatedDate: '2026-04-18',
      guardian: 'SURENDRA SINGH',
      mobile: '9758882443',
      status: 'Checked In'
    }
  ]);

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [hostelFilter, setHostelFilter] = useState('All');

  // Modals state
  const [isAddHostelModalOpen, setIsAddHostelModalOpen] = useState(false);
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isAllocateModalOpen, setIsAllocateModalOpen] = useState(false);

  // Forms state
  const [hostelForm, setHostelForm] = useState({
    name: '',
    type: 'Boys',
    warden: '',
    wardenContact: '',
    address: 'Campus Residential Block',
    capacity: 50,
    totalRooms: 15
  });

  const [roomForm, setRoomForm] = useState({
    roomNo: '',
    hostelId: 'HST-01',
    floor: 'Ground Floor',
    category: '2-Bed Air-Cooled Deluxe',
    capacity: 2,
    fee: 6000
  });

  const [categoryForm, setCategoryForm] = useState({
    name: '',
    type: 'Air-Cooled',
    monthlyFee: 5000,
    capacity: 2,
    amenities: 'Study Desks, Wardrobes, Ceiling Fan, Attached Washroom'
  });

  const [allocateForm, setAllocateForm] = useState({
    studentId: '',
    hostelName: 'Kalam Senior Boys Hostel Wing',
    roomNo: '102',
    bedNo: 'Bed B',
    guardian: '',
    mobile: ''
  });

  // Handlers
  const handleAddHostel = (e) => {
    e.preventDefault();
    if (!hostelForm.name.trim()) return;
    const newHostel = {
      id: `HST-${String(hostels.length + 1).padStart(2, '0')}`,
      ...hostelForm,
      occupied: 0
    };
    setHostels([...hostels, newHostel]);
    setIsAddHostelModalOpen(false);
    setHostelForm({ name: '', type: 'Boys', warden: '', wardenContact: '', address: 'Campus Residential Block', capacity: 50, totalRooms: 15 });
    showToast(`Hostel Wing "${newHostel.name}" added successfully! 🏢`, 'success');
  };

  const handleAddRoom = (e) => {
    e.preventDefault();
    if (!roomForm.roomNo.trim()) return;
    const matchedHostel = hostels.find(h => h.id === roomForm.hostelId);
    const newRoom = {
      id: `RM-${Date.now().toString().slice(-4)}`,
      roomNo: roomForm.roomNo,
      hostelId: roomForm.hostelId,
      hostelName: matchedHostel?.name || 'School Hostel Wing',
      floor: roomForm.floor,
      category: roomForm.category,
      capacity: Number(roomForm.capacity),
      occupied: 0,
      fee: Number(roomForm.fee)
    };
    setRooms([...rooms, newRoom]);
    setIsAddRoomModalOpen(false);
    setRoomForm({ roomNo: '', hostelId: 'HST-01', floor: 'Ground Floor', category: '2-Bed Air-Cooled Deluxe', capacity: 2, fee: 6000 });
    showToast(`Room "${newRoom.roomNo}" added successfully! 🛏️`, 'success');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!categoryForm.name.trim()) return;
    const newCat = {
      id: `CAT-${String(categories.length + 1).padStart(2, '0')}`,
      ...categoryForm,
      totalRooms: 0
    };
    setCategories([...categories, newCat]);
    setIsAddCategoryModalOpen(false);
    setCategoryForm({ name: '', type: 'Air-Cooled', monthlyFee: 5000, capacity: 2, amenities: 'Study Desks, Wardrobes, Ceiling Fan' });
    showToast(`Hostel Category "${newCat.name}" created! 🏷️`, 'success');
  };

  const handleAllocateStudent = (e) => {
    e.preventDefault();
    const stu = students.find(s => s.id === allocateForm.studentId);
    if (!stu) {
      showToast('Please select a student', 'warning');
      return;
    }
    const newAlc = {
      id: `ALC-${String(allocations.length + 1).padStart(2, '0')}`,
      studentName: stu.name,
      class: stu.class,
      rollNo: stu.rollNo,
      hostelName: allocateForm.hostelName,
      roomNo: allocateForm.roomNo,
      bedNo: allocateForm.bedNo || 'Bed #1',
      category: 'Deluxe Boarding',
      allocatedDate: new Date().toISOString().split('T')[0],
      guardian: stu.fatherName || stu.parents?.fatherName || 'Parent',
      mobile: stu.fatherMobile || stu.mobile || '9758882443',
      status: 'Checked In'
    };
    setAllocations([newAlc, ...allocations]);
    setIsAllocateModalOpen(false);
    showToast(`Room ${newAlc.roomNo} allocated to ${stu.name}! 🎓`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🧭 Top Hostel Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Home className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              SUPERVISION • HOSTEL & BOARDING FACILITY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
            Hostel & Residential Management
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Hostel wings, floor-by-floor room & bed matrix, category slabs, and resident student allocation register.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Capacity</span>
            <span className="text-lg font-black font-mono text-emerald-400">180 Beds</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Resident Students</span>
            <span className="text-lg font-black font-mono text-indigo-300">{allocations.length} Active</span>
          </div>
        </div>
      </div>

      {/* 🧭 4-Tab Navigation Bar (Exact match to old software) */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {[
            { id: 'master', label: '🏢 Hostel Master', count: hostels.length },
            { id: 'rooms', label: '🛏️ Hostel Room', count: rooms.length },
            { id: 'category', label: '🏷️ Category', count: categories.length },
            { id: 'allocation', label: '📋 Allocation Report', count: allocations.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🏢 TAB 1: HOSTEL MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'master' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Home className="w-5 h-5 text-indigo-600" />
                Hostel Buildings & Wings Registry ({hostels.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage hostel wings, chief wardens, contact numbers and residential blocks
              </p>
            </div>
            <button
              onClick={() => setIsAddHostelModalOpen(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Hostel Wing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {hostels.map(h => (
              <div
                key={h.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 hover:border-indigo-400 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant={h.type === 'Boys' ? 'primary' : 'purple'} size="sm">
                      {h.type} Hostel
                    </Badge>
                    <h4 className="text-base font-black text-slate-900 dark:text-white mt-2">{h.name}</h4>
                    <p className="text-xs text-slate-500">{h.address}</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">{h.id}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Total Rooms</span>
                    <strong className="text-slate-800 dark:text-slate-200 text-sm">{h.totalRooms} Rooms</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Capacity</span>
                    <strong className="text-emerald-600 text-sm">{h.occupied} / {h.capacity} Beds</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Chief Warden:</span>
                    <strong className="text-slate-900 dark:text-white">{h.warden}</strong>
                  </div>
                  <a
                    href={`tel:${h.wardenContact}`}
                    className="px-2.5 py-1.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-lg font-bold text-[11px] flex items-center gap-1 hover:bg-emerald-100"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Warden
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🛏️ TAB 2: HOSTEL ROOM */}
      {/* ========================================================================= */}
      {activeTab === 'rooms' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Bed className="w-5 h-5 text-indigo-600" />
                Floor-Wise Room & Bed Directory ({rooms.length} Rooms)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Floor allocation, bed occupancy status, and monthly boarding rates
              </p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={hostelFilter}
                onChange={(e) => setHostelFilter(e.target.value)}
                className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <option value="All">All Hostel Wings</option>
                {hostels.map(h => (
                  <option key={h.id} value={h.name}>{h.name}</option>
                ))}
              </select>

              <button
                onClick={() => setIsAddRoomModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Plus className="w-4 h-4" /> Add Room
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms
              .filter(r => hostelFilter === 'All' || r.hostelName === hostelFilter)
              .map(room => {
                const isFull = room.occupied >= room.capacity;
                return (
                  <div
                    key={room.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2 hover:border-indigo-400 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-black text-slate-900 dark:text-white text-base">
                        Room {room.roomNo}
                      </span>
                      <Badge variant={isFull ? 'danger' : 'success'} size="sm">
                        {isFull ? 'Occupied' : `${room.capacity - room.occupied} Vacant Bed`}
                      </Badge>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium truncate">{room.hostelName}</p>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-600 dark:text-slate-400">
                        <span>Floor:</span>
                        <strong className="text-slate-900 dark:text-white">{room.floor}</strong>
                      </div>
                      <div className="flex justify-between text-slate-600 dark:text-slate-400">
                        <span>Category:</span>
                        <strong className="text-indigo-600 text-[11px] truncate max-w-[120px]">{room.category}</strong>
                      </div>
                      <div className="flex justify-between text-slate-600 dark:text-slate-400">
                        <span>Occupancy:</span>
                        <strong className="font-mono font-bold text-slate-900 dark:text-white">{room.occupied} / {room.capacity} Beds</strong>
                      </div>
                      <div className="flex justify-between text-emerald-600 font-bold pt-1 border-t border-slate-200/60">
                        <span>Boarding Fee:</span>
                        <span className="font-mono">₹{room.fee?.toLocaleString('en-IN')}/mo</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏷️ TAB 3: CATEGORY */}
      {/* ========================================================================= */}
      {activeTab === 'category' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-600" /> Room & Boarding Category Master ({categories.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Configure room categories, amenities, capacity standards and monthly boarding fee rates
              </p>
            </div>
            <button
              onClick={() => setIsAddCategoryModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map(cat => (
              <div
                key={cat.id}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4 hover:border-indigo-400 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md">
                      {cat.id}
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white mt-1">{cat.name}</h4>
                    <span className="text-xs text-slate-500">{cat.capacity} Resident Bed(s) per Room</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Monthly Fee</span>
                    <span className="font-mono font-black text-emerald-600 text-base">
                      ₹{cat.monthlyFee?.toLocaleString('en-IN')}/mo
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Included Amenities:</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">{cat.amenities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📋 TAB 4: ALLOCATION REPORT */}
      {/* ========================================================================= */}
      {activeTab === 'allocation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Student Boarding Room Allocation Dossier ({allocations.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Active residential boarders roster with assigned hostel, room number and guardian contacts
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-56">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search resident student..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                />
              </div>

              <button
                onClick={() => setIsAllocateModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Plus className="w-4 h-4" /> Allocate Student
              </button>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll No</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Assigned Hostel Wing</th>
                  <th className="p-3.5">Room & Bed</th>
                  <th className="p-3.5">Father / Guardian</th>
                  <th className="p-3.5">Allocated Date</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {allocations
                  .filter(a => !searchQuery || a.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || a.guardian.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(alc => (
                    <tr key={alc.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5 font-mono font-bold text-indigo-600">#{alc.rollNo}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{alc.studentName}</td>
                      <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{alc.class}</td>
                      <td className="p-3.5 text-slate-700 dark:text-slate-300 font-medium">{alc.hostelName}</td>
                      <td className="p-3.5 font-mono font-bold text-emerald-600">Room {alc.roomNo} ({alc.bedNo})</td>
                      <td className="p-3.5 text-slate-600 dark:text-slate-300">
                        <div>{alc.guardian}</div>
                        <div className="font-mono text-[10px] text-slate-400">{alc.mobile}</div>
                      </td>
                      <td className="p-3.5 text-slate-500 font-mono">{alc.allocatedDate}</td>
                      <td className="p-3.5">
                        <Badge variant="success">{alc.status}</Badge>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏢 MODAL: ADD HOSTEL */}
      {/* ========================================================================= */}
      {isAddHostelModalOpen && (
        <Modal
          isOpen={isAddHostelModalOpen}
          onClose={() => setIsAddHostelModalOpen(false)}
          title="🏢 Add New Hostel Building / Wing"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddHostel} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Hostel Wing Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramanujan Senior Boys Hostel"
                value={hostelForm.name}
                onChange={(e) => setHostelForm({ ...hostelForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Type *</label>
                <select
                  value={hostelForm.type}
                  onChange={(e) => setHostelForm({ ...hostelForm, type: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  <option value="Boys">Boys Hostel</option>
                  <option value="Girls">Girls Hostel</option>
                  <option value="Co-ed">Co-Ed Junior</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Total Bed Capacity</label>
                <input
                  type="number"
                  placeholder="50"
                  value={hostelForm.capacity}
                  onChange={(e) => setHostelForm({ ...hostelForm, capacity: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Chief Warden Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sh. Devendra Singh"
                  value={hostelForm.warden}
                  onChange={(e) => setHostelForm({ ...hostelForm, warden: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Warden Phone</label>
                <input
                  type="text"
                  placeholder="e.g. +91 97588 82443"
                  value={hostelForm.wardenContact}
                  onChange={(e) => setHostelForm({ ...hostelForm, wardenContact: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddHostelModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                + Create Hostel Wing
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 🛏️ MODAL: ADD ROOM */}
      {/* ========================================================================= */}
      {isAddRoomModalOpen && (
        <Modal
          isOpen={isAddRoomModalOpen}
          onClose={() => setIsAddRoomModalOpen(false)}
          title="🛏️ Add New Hostel Room"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddRoom} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Room Number *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 104"
                  value={roomForm.roomNo}
                  onChange={(e) => setRoomForm({ ...roomForm, roomNo: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Hostel Wing *</label>
                <select
                  value={roomForm.hostelId}
                  onChange={(e) => setRoomForm({ ...roomForm, hostelId: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  {hostels.map(h => (
                    <option key={h.id} value={h.id}>{h.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Floor Level</label>
                <select
                  value={roomForm.floor}
                  onChange={(e) => setRoomForm({ ...roomForm, floor: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <option value="Ground Floor">Ground Floor</option>
                  <option value="1st Floor">1st Floor</option>
                  <option value="2nd Floor">2nd Floor</option>
                  <option value="3rd Floor">3rd Floor</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bed Capacity</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={roomForm.capacity}
                  onChange={(e) => setRoomForm({ ...roomForm, capacity: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category</label>
              <select
                value={roomForm.category}
                onChange={(e) => setRoomForm({ ...roomForm, category: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                {categories.map(c => (
                  <option key={c.id} value={c.name}>{c.name} (₹{c.monthlyFee}/mo)</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddRoomModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                + Add Room
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 🏷️ MODAL: ADD CATEGORY */}
      {/* ========================================================================= */}
      {isAddCategoryModalOpen && (
        <Modal
          isOpen={isAddCategoryModalOpen}
          onClose={() => setIsAddCategoryModalOpen(false)}
          title="🏷️ Add Hostel Room Category"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddCategory} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. 2-Bed AC Executive Suite"
                value={categoryForm.name}
                onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly Boarding Fee (₹) *</label>
                <input
                  type="number"
                  required
                  placeholder="6500"
                  value={categoryForm.monthlyFee}
                  onChange={(e) => setCategoryForm({ ...categoryForm, monthlyFee: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bed Capacity per Room</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={categoryForm.capacity}
                  onChange={(e) => setCategoryForm({ ...categoryForm, capacity: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Included Amenities</label>
              <input
                type="text"
                placeholder="e.g. AC, Attached Bath, Balcony, WiFi"
                value={categoryForm.amenities}
                onChange={(e) => setCategoryForm({ ...categoryForm, amenities: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                + Create Category
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 📋 MODAL: ALLOCATE STUDENT */}
      {/* ========================================================================= */}
      {isAllocateModalOpen && (
        <Modal
          isOpen={isAllocateModalOpen}
          onClose={() => setIsAllocateModalOpen(false)}
          title="📋 Allocate Hostel Room to Student"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAllocateStudent} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Student *</label>
              <select
                required
                value={allocateForm.studentId}
                onChange={(e) => setAllocateForm({ ...allocateForm, studentId: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                <option value="">-- Choose Student --</option>
                {students.slice(0, 50).map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} • Class {s.class} • Roll #{s.rollNo}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Hostel Wing *</label>
                <select
                  value={allocateForm.hostelName}
                  onChange={(e) => setAllocateForm({ ...allocateForm, hostelName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  {hostels.map(h => (
                    <option key={h.id} value={h.name}>{h.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Room Number *</label>
                <select
                  value={allocateForm.roomNo}
                  onChange={(e) => setAllocateForm({ ...allocateForm, roomNo: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  {rooms.map(r => (
                    <option key={r.id} value={r.roomNo}>Room {r.roomNo} ({r.floor})</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bed Designation (e.g. Bed A / Bed 1)</label>
              <input
                type="text"
                placeholder="e.g. Bed A (Near Window)"
                value={allocateForm.bedNo}
                onChange={(e) => setAllocateForm({ ...allocateForm, bedNo: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAllocateModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                Allocate & Check In
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};

export default HostelPage;
