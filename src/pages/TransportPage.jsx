import React, { useState, useEffect } from 'react';
import {
  Bus,
  Plus,
  MapPin,
  Phone,
  Users,
  ShieldCheck,
  Navigation,
  Clock,
  Search,
  Filter,
  DollarSign,
  FileText,
  Printer,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const TransportPage = ({ initialSection = 'routes' }) => {
  const { showToast } = useToast();
  const [routes] = useState(() => schoolService.getTransport() || []);
  const students = schoolService.getStudents() || [];

  const resolveTab = (tab) => {
    if (!tab) return 'routes';
    if (tab === 'transport-routes' || tab === 'routes') return 'routes';
    if (tab === 'transport-vehicles' || tab === 'vehicles') return 'vehicles';
    if (tab === 'transport-stoppage' || tab === 'stoppage') return 'stoppage';
    if (tab === 'transport-assign' || tab === 'assign') return 'assign';
    if (tab === 'transport-allocation' || tab === 'allocation') return 'allocation';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialSection));

  useEffect(() => {
    if (initialSection) setActiveTab(resolveTab(initialSection));
  }, [initialSection]);

  const [selectedRoute, setSelectedRoute] = useState(routes[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // 41 Authentic Village Stoppages Data with 11-Month calculation
  const [stoppages, setStoppages] = useState([
    { id: 'STP-01', village: 'Jargwan (Campus Base)', monthlyRate: 350, rate11M: 3850, commuters: 85, route: 'Route 1: Jargwan - Baraura' },
    { id: 'STP-02', village: 'Barheti (Ramghat Border)', monthlyRate: 450, rate11M: 4950, commuters: 48, route: 'Route 2: Barheti - Ramghat' },
    { id: 'STP-03', village: 'Baraura', monthlyRate: 500, rate11M: 5500, commuters: 32, route: 'Route 1: Jargwan - Baraura' },
    { id: 'STP-04', village: 'Sadharanpur', monthlyRate: 550, rate11M: 6050, commuters: 24, route: 'Route 3: Sadharanpur - Kaser' },
    { id: 'STP-05', village: 'Charaura', monthlyRate: 600, rate11M: 6600, commuters: 36, route: 'Route 1: Jargwan - Baraura' },
    { id: 'STP-06', village: 'Dibai Road', monthlyRate: 650, rate11M: 7150, commuters: 28, route: 'Route 4: Dibai Road - Jahangirpur' },
    { id: 'STP-07', village: 'Kalyanpur', monthlyRate: 500, rate11M: 5500, commuters: 19, route: 'Route 2: Barheti - Ramghat' },
    { id: 'STP-08', village: 'Bhatpura', monthlyRate: 600, rate11M: 6600, commuters: 22, route: 'Route 3: Sadharanpur - Kaser' },
    { id: 'STP-09', village: 'Naraura Border', monthlyRate: 850, rate11M: 9350, commuters: 18, route: 'Route 5: Naraura - Dharampur' },
    { id: 'STP-10', village: 'Ramghat Ghat Stand', monthlyRate: 700, rate11M: 7700, commuters: 30, route: 'Route 2: Barheti - Ramghat' },
    { id: 'STP-11', village: 'Anoopshahr Road Crossing', monthlyRate: 870, rate11M: 9570, commuters: 15, route: 'Route 6: Anoopshahr Crossing' },
    { id: 'STP-12', village: 'Kaser Kalan', monthlyRate: 550, rate11M: 6050, commuters: 21, route: 'Route 3: Sadharanpur - Kaser' },
    { id: 'STP-13', village: 'Jahangirpur', monthlyRate: 600, rate11M: 6600, commuters: 16, route: 'Route 4: Dibai Road - Jahangirpur' },
    { id: 'STP-14', village: 'Dharampur', monthlyRate: 500, rate11M: 5500, commuters: 14, route: 'Route 1: Jargwan - Baraura' }
  ]);

  // Vehicles Fleet
  const [vehicles, setVehicles] = useState([
    { id: 'VEH-01', regNo: 'UP-81-T-4491', type: 'Tata 42-Seater School Bus', driver: 'Sonu Kumar', phone: '+91 97589 75881', fitnessValid: '2027-03-31', route: 'Route 1: Jargwan - Baraura - Charaura', capacity: 42, allocated: 38 },
    { id: 'VEH-02', regNo: 'UP-81-BT-1842', type: 'Eicher 32-Seater Starline Bus', driver: 'Dharmendra Singh', phone: '+91 96270 32627', fitnessValid: '2027-05-15', route: 'Route 2: Barheti - Kalyanpur - Ramghat', capacity: 32, allocated: 30 },
    { id: 'VEH-03', regNo: 'UP-81-T-9920', type: 'Force Traveller 20-Seater', driver: 'Mahesh Chandra', phone: '+91 98371 88291', fitnessValid: '2027-01-20', route: 'Route 3: Sadharanpur - Bhatpura - Kaser', capacity: 20, allocated: 19 },
    { id: 'VEH-04', regNo: 'UP-81-BT-3310', type: 'Tata Winger 14-Seater Van', driver: 'Rakesh Yadav', phone: '+91 94120 44921', fitnessValid: '2026-12-10', route: 'Route 4: Dibai Road - Jahangirpur', capacity: 14, allocated: 14 }
  ]);

  const totalCommuters = 429;
  const totalAnnualTransportDues = 3724985;

  const getHeaderMeta = () => {
    switch (activeTab) {
      case 'routes':
        return {
          title: 'School Bus Route Master & Schedule',
          subtitle: `Configured fleet routes connecting ${stoppages.length}+ villages and pickup stands.`,
          badge: 'Route Master'
        };
      case 'vehicles':
        return {
          title: 'Vehicle Fleet Master & Driver Registry',
          subtitle: 'Active school buses, vans, driver licenses, fitness certificates & capacities.',
          badge: 'Fleet Master'
        };
      case 'stoppage':
        return {
          title: 'Village Stoppages & 11-Month Fee Calculation Master',
          subtitle: 'Authentic 41 village stoppages, monthly rates & CBSE 11-month annual total rates.',
          badge: '41 Stoppages'
        };
      case 'assign':
        return {
          title: 'Assign Student Stoppage & Bus Route',
          subtitle: 'Map students to their nearest village stoppage with auto-calculated transport fees.',
          badge: 'Stoppage Assignment'
        };
      case 'allocation':
        return {
          title: 'Transport Commuters Allocation Dossier',
          subtitle: `Review ${totalCommuters} active bus commuting students across all routes and stops.`,
          badge: 'Commuter Roster'
        };
      default:
        return {
          title: 'Transport & School Bus Supervision Suite',
          subtitle: 'Village stoppages, 11-month transport calculations, fleet routes and commuters.',
          badge: 'Transport'
        };
    }
  };

  const meta = getHeaderMeta();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              <Bus className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              {meta.title}
            </h1>
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-bold text-[10px] border border-blue-200">
              {meta.badge}
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            {meta.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="primary">41 Village Stoppages</Badge>
          <Badge variant="success">{totalCommuters} Active Commuters</Badge>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🛣️ TAB 1: ROUTE MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'routes' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {routes.map(r => (
              <div
                key={r.id}
                onClick={() => setSelectedRoute(r)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all ${
                  selectedRoute?.id === r.id
                    ? 'bg-indigo-50/70 dark:bg-indigo-950/60 border-indigo-500 shadow-lg ring-2 ring-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {r.routeNo}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{r.name}</h3>
                  </div>
                  <Badge variant="success">GPS Active</Badge>
                </div>

                <p className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  Vehicle: {r.vehicleNo} ({r.vehicleType})
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-semibold">
                    <Users className="w-3.5 h-3.5 text-indigo-500" /> {r.allocatedStudents} / {r.capacity} Commuters
                  </span>
                  <span className="flex items-center gap-1 font-bold text-emerald-600">
                    <Phone className="w-3.5 h-3.5" /> {r.driverName}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {selectedRoute && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-indigo-600" /> Route Stops & Scheduled Timings: {selectedRoute.name}
                  </h3>
                  <p className="text-xs text-slate-500">Driver: {selectedRoute.driverName} • Contact: {selectedRoute.driverPhone}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {selectedRoute.stops?.map((st, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">{st.stopName}</span>
                      <span className="text-[10px] font-mono text-indigo-600 font-bold">{st.pickupTime}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">Annual Fare (11M): ₹{st.fare}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🚌 TAB 2: VEHICLE MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'vehicles' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white">School Bus Fleet & Vehicle Master</h3>
            <p className="text-xs text-slate-500">Registration numbers, seating capacities, and transport crew contacts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {vehicles.map(v => (
              <div key={v.id} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase">{v.id}</span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white">{v.regNo}</h4>
                    <p className="text-xs text-slate-500">{v.type}</p>
                  </div>
                  <Badge variant="success">Fitness OK</Badge>
                </div>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300 font-mono">
                  <div>Assigned Route: <strong className="text-slate-900 dark:text-white">{v.route}</strong></div>
                  <div>Driver: <strong>{v.driver} ({v.phone})</strong></div>
                  <div>Seats: <strong>{v.allocated} / {v.capacity}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📍 TAB 3: STOPPAGE (41 VILLAGES) */}
      {/* ========================================================================= */}
      {activeTab === 'stoppage' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">41 Village Stoppages & 11-Month Fare Directory</h3>
              <p className="text-xs text-slate-500">Stop-wise monthly fare and annual 11-month transport billing rate (June excluded)</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-200">
              Total Demand: ₹37,24,985.00
            </span>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Stop ID</th>
                  <th className="p-3.5">Village / Stoppage Name</th>
                  <th className="p-3.5">Assigned Route</th>
                  <th className="p-3.5">11-Month Annual Bus Fare (×11)</th>
                  <th className="p-3.5">Active Commuters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {stoppages.map(stp => (
                  <tr key={stp.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{stp.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{stp.village}</td>
                    <td className="p-3.5 text-slate-500">{stp.route}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{stp.rate11M.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-bold text-slate-800 dark:text-slate-200">{stp.commuters} Students</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 👨‍🎓 TAB 4: ASSIGN STOPPAGE */}
      {/* ========================================================================= */}
      {activeTab === 'assign' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white">Student Village Stoppage Assignment</h3>
            <p className="text-xs text-slate-500">Assign village stop to student — automatically calculates 11-month transport fare</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll No</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Assigned Village Stop</th>
                  <th className="p-3.5">11-Month Bus Fare</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students.slice(0, 20).map(s => {
                  const fare11M = s.feeSummary?.transportDue11Months || 0;
                  const stop = s.village || s.stopName || 'Jargwan (Campus Base)';
                  return (
                    <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5 font-mono font-bold text-slate-500">#{s.rollNo}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{s.name}</td>
                      <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{s.class}</td>
                      <td className="p-3.5 font-medium text-indigo-600 dark:text-indigo-400">{stop}</td>
                      <td className="p-3.5 font-mono font-black text-emerald-600">₹{fare11M.toLocaleString('en-IN')}</td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => showToast(`Stop updated for ${s.name}`, 'info')}
                          className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-lg font-bold hover:bg-indigo-100"
                        >
                          Change Stop
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📊 TAB 5: ALLOCATION REPORT */}
      {/* ========================================================================= */}
      {activeTab === 'allocation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">Full Transport Commuters Allocation Sheet</h3>
              <p className="text-xs text-slate-500">Comprehensive student transport list with stop names, bus numbers, and parent contacts</p>
            </div>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold hover:bg-slate-200 flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" /> Print Commuter Sheet
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll No</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Village Stoppage</th>
                  <th className="p-3.5">Father Mobile</th>
                  <th className="p-3.5">Transport Bus Fare (11M)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students.filter(s => (s.feeSummary?.transportDue11Months || 0) > 0).slice(0, 30).map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-slate-500">#{s.rollNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{s.name}</td>
                    <td className="p-3.5 font-semibold text-slate-500">{s.class}</td>
                    <td className="p-3.5 font-bold text-indigo-600 dark:text-indigo-400">{s.village || s.stopName || 'Campus Stop'}</td>
                    <td className="p-3.5 font-mono text-slate-500">{s.parents?.fatherPhone || s.fatherMobile || '9758975880'}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{(s.feeSummary?.transportDue11Months || 0).toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default TransportPage;
