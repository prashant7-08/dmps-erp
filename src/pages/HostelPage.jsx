import React, { useState } from 'react';
import {
  Home,
  Users,
  ShieldCheck,
  Phone,
  Bed,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const HostelPage = () => {
  const [hostels] = useState(schoolService.getHostels());
  const [selectedHostel, setSelectedHostel] = useState(hostels[0]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Home className="w-7 h-7 text-indigo-600" /> Hostel & Boarding Facility Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Hostel buildings, floor-by-floor room and bed allocation matrix, warden contacts, and boarding roll-call.
          </p>
        </div>
      </div>

      {/* Hostels Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {hostels.map(h => (
          <div
            key={h.id}
            onClick={() => setSelectedHostel(h)}
            className={`p-6 rounded-3xl border cursor-pointer transition-all ${
              selectedHostel?.id === h.id
                ? 'bg-indigo-50/70 dark:bg-indigo-950/60 border-indigo-500 shadow-lg ring-2 ring-indigo-500/20'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <Badge variant={h.type === 'Boys' ? 'primary' : 'purple'} size="sm">
                  {h.type} Hostel
                </Badge>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{h.name}</h3>
              </div>
              <span className="text-xs font-bold text-emerald-600">{h.occupied} / {h.capacity} Beds</span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between text-xs text-slate-500">
              <span>Warden: <strong className="text-slate-800 dark:text-slate-200">{h.warden}</strong></span>
              <span className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                <Phone className="w-3.5 h-3.5 text-indigo-500" /> {h.wardenContact}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Room & Bed Allocation Visual Grid */}
      {selectedHostel && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Bed className="w-5 h-5 text-indigo-600" /> Room & Bed Occupancy Matrix: {selectedHostel.name}
              </h3>
              <p className="text-xs text-slate-500">Total Rooms: {selectedHostel.totalRooms} • Capacity: {selectedHostel.capacity} Residents</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedHostel.rooms.map((room, idx) => {
              const isFull = room.occupied === room.capacity;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-xs space-y-2 ${
                    isFull
                      ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40'
                      : 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 dark:text-white">Room {room.roomNo}</span>
                    <span className="text-[10px] text-slate-400 font-semibold">{room.floor}</span>
                  </div>

                  <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    Occupancy: {room.occupied} / {room.capacity} Beds
                  </p>

                  <Badge variant={isFull ? 'danger' : 'success'} size="sm">
                    {isFull ? 'Full (2/2)' : '1 Vacant Bed'}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
