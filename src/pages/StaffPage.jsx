import React, { useState } from 'react';
import {
  Users,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Printer,
  Mail,
  Phone,
  BookOpen,
  Award,
  DollarSign,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import { PrintablePaySlip } from '../components/printables/PrintablePaySlip';
import schoolService from '../services/schoolService';

export const StaffPage = () => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();
  const [teachers, setTeachers] = useState(() => schoolService.getTeachers(activeBranchId));
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isPaySlipModalOpen, setIsPaySlipModalOpen] = useState(false);
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);

  // Sync teachers when active branch changes
  React.useEffect(() => {
    setTeachers(schoolService.getTeachers(activeBranchId));
  }, [activeBranchId]);

  // Edit Teacher State
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    department: 'Science',
    designation: 'PGT Physics',
    qualification: 'M.Sc., B.Ed.',
    mobile: '',
    email: '',
    classTeacherOf: 'Class 10 - A',
    basicSalary: 62000
  });

  const [formData, setFormData] = useState({
    name: '',
    department: 'Science',
    designation: 'PGT Faculty',
    qualification: 'M.Sc., B.Ed.',
    mobile: '',
    email: '',
    gender: 'Male',
    classTeacherOf: 'Class 10 - A'
  });

  const refreshData = () => {
    setTeachers([...schoolService.getTeachers()]);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showToast('Please enter required faculty information', 'warning');
      return;
    }

    const newTeacher = schoolService.addTeacher({
      name: formData.name,
      department: formData.department,
      designation: formData.designation,
      qualification: formData.qualification,
      mobile: formData.mobile || '+91 98110 00000',
      email: formData.email,
      gender: formData.gender,
      classTeacherOf: formData.classTeacherOf,
      photo: `https://images.unsplash.com/photo-${formData.gender === 'Female' ? '1573496359142-b8d87734a5a2' : '1534528741775-53994a69daeb'}?w=150&auto=format&fit=crop&q=80`,
      salary: { basic: 62000, hra: 16000, da: 11000, specialAllowance: 4500, pfDeduction: 7440, taxDeduction: 5100, netSalary: 80960 },
      bankDetails: { bankName: 'HDFC Bank', accountNo: '918237192837', ifsc: 'HDFC0001092' }
    });

    refreshData();
    setIsAddStaffModalOpen(false);
    showToast(`Faculty member ${newTeacher.name} appointed!`, 'success');
  };

  const openEditModal = (teacher) => {
    setEditFormData({
      id: teacher.id,
      name: teacher.name,
      department: teacher.department,
      designation: teacher.designation,
      qualification: teacher.qualification || 'M.Sc., B.Ed.',
      mobile: teacher.mobile || '',
      email: teacher.email || '',
      classTeacherOf: teacher.classTeacherOf || 'None',
      basicSalary: teacher.salary?.basic || 62000
    });
    setIsEditStaffModalOpen(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updated = schoolService.updateTeacher(editFormData.id, {
      name: editFormData.name,
      department: editFormData.department,
      designation: editFormData.designation,
      qualification: editFormData.qualification,
      mobile: editFormData.mobile,
      email: editFormData.email,
      classTeacherOf: editFormData.classTeacherOf,
      salary: {
        basic: Number(editFormData.basicSalary),
        hra: Number(editFormData.basicSalary) * 0.25,
        da: Number(editFormData.basicSalary) * 0.18,
        pfDeduction: Number(editFormData.basicSalary) * 0.12,
        taxDeduction: 5100,
        netSalary: Number(editFormData.basicSalary) * 1.31 - 5100
      }
    });

    refreshData();
    setIsEditStaffModalOpen(false);
    if (selectedStaff && selectedStaff.id === editFormData.id) {
      setSelectedStaff(updated);
    }
    showToast(`Faculty credentials for ${editFormData.name} updated! ✏️`, 'success');
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Remove staff record for ${name}?`)) {
      schoolService.deleteTeacher(id);
      refreshData();
      if (selectedStaff?.id === id) setSelectedStaff(null);
      showToast(`Staff member ${name} deleted`, 'info');
    }
  };

  const filtered = teachers.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.department.toLowerCase().includes(searchQuery.toLowerCase()) || t.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = deptFilter === 'All' || t.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  const schoolInfo = schoolService.getSchoolInfo();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-7 h-7 text-indigo-600" /> Teaching Faculty & Staff Directory
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Faculty credentials, department allocations, class teacher assignments, salary structures & payslips.
          </p>
        </div>
        <button
          onClick={() => setIsAddStaffModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" /> Appoint Faculty Member
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search faculty by name, department, or employee id..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
            <Filter className="w-4 h-4 text-indigo-600" /> Department:
          </div>
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
          >
            <option value="All">All Academic Departments</option>
            <option value="Science">Science (Physics, Chem, Bio)</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Languages">English & Hindi Languages</option>
            <option value="Computer Science">Computer Science & AI</option>
            <option value="Social Studies">Social Studies</option>
          </select>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">Faculty Member</th>
                <th className="p-4">Employee ID</th>
                <th className="p-4">Department & Subject</th>
                <th className="p-4">Designation</th>
                <th className="p-4">Class Teacher</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Monthly Salary</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map(t => (
                <tr key={t.id} className="hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-700" />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-xs">{t.name}</p>
                        <p className="text-[10px] text-slate-400">{t.qualification || 'M.Sc., B.Ed.'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-mono font-bold text-slate-700 dark:text-slate-300">{t.employeeId}</td>
                  <td className="p-4">
                    <Badge variant="purple" size="sm">{t.department}</Badge>
                  </td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{t.designation}</td>
                  <td className="p-4">
                    {t.classTeacherOf ? (
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800">
                        {t.classTeacherOf}
                      </span>
                    ) : (
                      <span className="text-slate-400">Subject Faculty</span>
                    )}
                  </td>
                  <td className="p-4">
                    <p className="font-mono text-slate-800 dark:text-slate-200">{t.mobile}</p>
                    <p className="text-[10px] text-slate-400 truncate max-w-[120px]">{t.email}</p>
                  </td>
                  <td className="p-4 font-black text-emerald-600">
                    ₹{(t.salary?.netSalary || 80960).toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => openEditModal(t)}
                        title="Edit Faculty Member"
                        className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 hover:bg-amber-100"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setSelectedStaff(t); setIsIdCardModalOpen(true); }}
                        title="Print Smart ID Card"
                        className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setSelectedStaff(t); setIsPaySlipModalOpen(true); }}
                        title="Print Monthly Pay Slip"
                        className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100"
                      >
                        <DollarSign className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(t.id, t.name)}
                        title="Delete Faculty Record"
                        className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✏️ Edit Staff Modal */}
      <Modal
        isOpen={isEditStaffModalOpen}
        onClose={() => setIsEditStaffModalOpen(false)}
        title="Edit Faculty & Staff Credentials"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Department *</label>
              <select
                value={editFormData.department}
                onChange={(e) => setEditFormData({ ...editFormData, department: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="Science">Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Languages">Languages</option>
                <option value="Computer Science">Computer Science & AI</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Designation</label>
              <input
                type="text"
                required
                value={editFormData.designation}
                onChange={(e) => setEditFormData({ ...editFormData, designation: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Qualifications</label>
              <input
                type="text"
                value={editFormData.qualification}
                onChange={(e) => setEditFormData({ ...editFormData, qualification: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile Contact</label>
              <input
                type="text"
                value={editFormData.mobile}
                onChange={(e) => setEditFormData({ ...editFormData, mobile: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Email Address</label>
              <input
                type="email"
                value={editFormData.email}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class Teacher Assignment</label>
              <select
                value={editFormData.classTeacherOf}
                onChange={(e) => setEditFormData({ ...editFormData, classTeacherOf: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="None">None (Subject Teacher Only)</option>
                <option value="Class 10 - A">Class 10 - A</option>
                <option value="Class 10 - B">Class 10 - B</option>
                <option value="Class 9 - A">Class 9 - A</option>
                <option value="Class 8 - A">Class 8 - A</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly Basic Salary (₹)</label>
              <input
                type="number"
                value={editFormData.basicSalary}
                onChange={(e) => setEditFormData({ ...editFormData, basicSalary: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsEditStaffModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">Save Faculty Credentials</button>
          </div>
        </form>
      </Modal>

      {/* ID Card Modal */}
      <Modal
        isOpen={isIdCardModalOpen}
        onClose={() => setIsIdCardModalOpen(false)}
        title="Official Faculty Identity Card"
        maxWidth="max-w-3xl"
      >
        {selectedStaff && (
          <PrintableIDCard person={selectedStaff} type="teacher" schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* Pay Slip Modal */}
      <Modal
        isOpen={isPaySlipModalOpen}
        onClose={() => setIsPaySlipModalOpen(false)}
        title="Staff Monthly Salary Pay Slip"
        maxWidth="max-w-4xl"
      >
        {selectedStaff && (
          <PrintablePaySlip teacher={selectedStaff} month="August 2026" schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* Add Staff Modal */}
      <Modal
        isOpen={isAddStaffModalOpen}
        onClose={() => setIsAddStaffModalOpen(false)}
        title="Appoint New Faculty Member"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Teacher Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Prashant Kumar Rajput"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Department *</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Science">Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Languages">Languages</option>
                <option value="Computer Science">Computer Science & AI</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Designation *</label>
              <input
                type="text"
                required
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="e.g. Senior PGT Physics"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Gender *</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile Contact *</label>
              <input
                type="text"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 98112 34567"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Official Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh.sharma@dpga-delhi.edu.in"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsAddStaffModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Appoint Faculty</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
