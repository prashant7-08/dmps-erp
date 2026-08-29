import React, { useState } from 'react';
import {
  Bus,
  Plus,
  MapPin,
  Phone,
  Users,
  ShieldCheck,
  Navigation,
  Clock
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const TransportPage = () => {
  const [routes] = useState(schoolService.getTransport());
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Bus className="w-7 h-7 text-indigo-600" /> School Bus Fleet & Transport Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Vehicle registration, driver credentials, stop pickup/drop schedules, and student bus tracking.
          </p>
        </div>
      </div>

      {/* Routes Grid */}
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
                <Users className="w-3.5 h-3.5 text-indigo-500" /> {r.allocatedStudents} / {r.capacity} Seats Allocated
              </span>
              <span className="flex items-center gap-1 font-bold text-emerald-600">
                <Phone className="w-3.5 h-3.5" /> {r.driverName} ({r.driverPhone})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Route Detailed Stops Timeline */}
      {selectedRoute && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Navigation className="w-5 h-5 text-indigo-600" /> Route Stops & Scheduled Timings: {selectedRoute.name}
              </h3>
              <p className="text-xs text-slate-500">Driver: {selectedRoute.driverName} • Contact: {selectedRoute.driverPhone}</p>
            </div>
            <Badge variant="primary">{selectedRoute.vehicleNo}</Badge>
          </div>

          <div className="space-y-4">
            {selectedRoute.stops.map((st, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{st.stopName}</h4>
                    <p className="text-[11px] text-slate-500">Designated Student Boarding Point</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-right">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">Morning Pickup</span>
                    <span className="font-bold text-emerald-600 font-mono">{st.pickupTime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">Afternoon Drop</span>
                    <span className="font-bold text-indigo-600 font-mono">{st.dropTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
