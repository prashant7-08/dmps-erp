import React, { useState, useEffect } from 'react';
import {
  Server,
  Building2,
  Plus,
  Search,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  GraduationCap,
  Globe,
  Sliders,
  Settings,
  Edit2,
  Trash2,
  Copy,
  Calendar,
  Layers,
  Sparkles,
  Download,
  Upload,
  FileSpreadsheet,
  FileText,
  KeyRound,
  RefreshCw,
  Eye,
  Check,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TrendingUp,
  Receipt,
  Crown
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import saasService from '../services/saasService';
import { PlanComparisonModal } from '../components/saas/PlanComparisonModal';

export const MasterSaaSHubPage = ({ onSwitchTenant, onReturnToSchool }) => {
  const { showToast } = useToast();
  const [tenants, setTenants] = useState(() => saasService.getTenants());
  const [activeTenant, setActiveTenant] = useState(() => saasService.getActiveTenant());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPlan, setFilterPlan] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [activeTab, setActiveTab] = useState('directory'); // 'directory' | 'modules' | 'billing' | 'onboarding'
  
  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTenantForEdit, setSelectedTenantForEdit] = useState(null);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [selectedTenantForInvoice, setSelectedTenantForInvoice] = useState(null);
  const [isPlanComparisonOpen, setIsPlanComparisonOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    shortName: '',
    slug: '',
    city: '',
    state: 'Uttar Pradesh',
    affiliation: 'CBSE Affiliated',
    principalName: '',
    contactPhone: '',
    contactEmail: '',
    plan: 'Enterprise Pro',
    planPrice: 25000,
    billingCycle: 'Annual',
    initialStudents: 150,
    initialStaff: 15
  });

  useEffect(() => {
    const unsub = saasService.subscribe((updatedList) => {
      setTenants([...updatedList]);
      setActiveTenant(saasService.getActiveTenant());
    });
    return () => unsub();
  }, []);

  const analytics = saasService.getSaaSAnalytics();

  const filteredTenants = tenants.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.principalName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPlan = filterPlan === 'ALL' || t.plan === filterPlan;
    const matchesStatus = filterStatus === 'ALL' || t.status === filterStatus;

    return matchesSearch && matchesPlan && matchesStatus;
  });

  const handleCreateSchool = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      showToast('Please enter School Name', 'error');
      return;
    }
    const slug = formData.slug.trim() || formData.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check duplicate slug
    if (tenants.some(t => t.slug === slug)) {
      showToast(`Subdomain '${slug}' is already in use by another school.`, 'error');
      return;
    }

    try {
      const created = saasService.addTenant({
        ...formData,
        slug
      });
      showToast(`🎉 School '${created.name}' created successfully with subdomain '${created.slug}'!`, 'success');
      setIsAddModalOpen(false);
      setFormData({
        name: '',
        shortName: '',
        slug: '',
        city: '',
        state: 'Uttar Pradesh',
        affiliation: 'CBSE Affiliated',
        principalName: '',
        contactPhone: '',
        contactEmail: '',
        plan: 'Enterprise Pro',
        planPrice: 25000,
        billingCycle: 'Annual',
        initialStudents: 150,
        initialStaff: 15
      });
    } catch (err) {
      showToast(err.message || 'Error creating school', 'error');
    }
  };

  const handleUpdateSchool = (e) => {
    e.preventDefault();
    if (!selectedTenantForEdit) return;

    try {
      saasService.updateTenant(selectedTenantForEdit.id, selectedTenantForEdit);
      showToast(`School '${selectedTenantForEdit.name}' details updated!`, 'success');
      setIsEditModalOpen(false);
    } catch (err) {
      showToast('Error updating school details', 'error');
    }
  };

  const handleDeleteSchool = (tenant) => {
    if (tenant.isPrimary) {
      showToast('Primary school (DMPS) cannot be deleted!', 'error');
      return;
    }
    if (window.confirm(`Are you sure you want to delete '${tenant.name}'? This action cannot be undone.`)) {
      try {
        saasService.deleteTenant(tenant.id);
        showToast(`School '${tenant.name}' removed from Master SaaS registry.`, 'info');
      } catch (err) {
        showToast(err.message, 'error');
      }
    }
  };

  const handleSwitchTenant = (tenant) => {
    saasService.setActiveTenant(tenant.slug);
    setActiveTenant(tenant);
    showToast(`Switched active context to: ${tenant.name}`, 'success');
    if (onSwitchTenant) onSwitchTenant(tenant);
  };

  const handleToggleModule = (tenantId, moduleKey) => {
    const nextVal = saasService.toggleModule(tenantId, moduleKey);
    const tenant = tenants.find(t => t.id === tenantId);
    showToast(`${moduleKey.toUpperCase()} is now ${nextVal ? 'ENABLED' : 'DISABLED'} for ${tenant?.shortName || 'School'}`, 'info');
  };

  const copyToClipboard = (text, label = 'Link') => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* SaaS Master Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 rounded-2xl p-6 lg:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-900/40">
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Server className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              Master SaaS Multi-School Console
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              School ERP Multi-Tenant Hub
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-400/30 font-medium">
                SaaS Ready
              </span>
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Manage, license, and deploy isolated School ERP instances & websites for multiple schools. Add new school clients in 1-click and control module licensing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsPlanComparisonOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 font-medium rounded-xl border border-indigo-400/30 transition-all text-xs"
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              Plan Comparison (4 Tiers)
            </button>
            {onReturnToSchool && (
              <button
                onClick={onReturnToSchool}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium rounded-xl border border-slate-700 transition-all text-xs"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180 text-amber-400" />
                Go to DMPS School Portal
              </button>
            )}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/30 transition-all transform active:scale-95 border border-indigo-400/30 text-xs sm:text-sm"
            >
              <Plus className="w-4 h-4" />
              Add New School
            </button>
          </div>
        </div>

        {/* Current Context Strip */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Currently Active School:</span>
            <span className="font-semibold text-white bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              {activeTenant?.name} ({activeTenant?.slug})
            </span>
            {activeTenant?.isPrimary && (
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold text-[10px]">
                PRIMARY (DMPS)
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Platform Status: <strong className="text-emerald-400">100% Operational</strong></span>
            <span>Subdomain Engine: <strong className="text-indigo-300">Wildcard Ready</strong></span>
          </div>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Client Schools</span>
            <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{analytics.totalTenants}</span>
            <span className="text-xs text-emerald-600 font-medium">({analytics.activeTenants} Live Active)</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">{analytics.trialTenants} School on Free Trial</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Students Enrolled</span>
            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{analytics.totalStudents.toLocaleString()}</span>
            <span className="text-xs text-slate-500">Across {analytics.totalTenants} schools</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">{analytics.totalStaff} Teachers & Staff on platform</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Platform Revenue (ARR)</span>
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">₹{analytics.annualRevenue.toLocaleString()}</span>
            <span className="text-xs text-emerald-600 font-medium">/ year</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">MRR: ~₹{analytics.mrr.toLocaleString()} / month</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Upcoming Renewals</span>
            <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{analytics.renewalsDue.length}</span>
            <span className="text-xs text-amber-600 font-medium">Next 60 Days</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {analytics.renewalsDue.length > 0 ? `${analytics.renewalsDue[0].shortName} due soon` : 'All licenses up to date'}
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('directory')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'directory'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Building2 className="w-4 h-4" />
          Schools Directory & Licenses ({tenants.length})
        </button>

        <button
          onClick={() => setActiveTab('modules')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'modules'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Sliders className="w-4 h-4" />
          Modular Feature Toggles
        </button>

        <button
          onClick={() => setActiveTab('billing')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'billing'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Receipt className="w-4 h-4" />
          SaaS Billing & Invoicing
        </button>

        <button
          onClick={() => setActiveTab('onboarding')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'onboarding'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          1-Click Client Onboarding Hub
        </button>
      </div>

      {/* TAB 1: Schools Directory */}
      {activeTab === 'directory' && (
        <div className="space-y-4">
          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by school, city, or subdomain..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={filterPlan}
                onChange={(e) => setFilterPlan(e.target.value)}
                className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="ALL">All Plans</option>
                <option value="Enterprise Pro">Enterprise Pro</option>
                <option value="Basic ERP">Basic ERP</option>
                <option value="Website Only">Website Only</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="ALL">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Trial">Trial</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
          </div>

          {/* School Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTenants.map((tenant) => {
              const isSelected = activeTenant?.id === tenant.id;
              return (
                <div
                  key={tenant.id}
                  className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-500 shadow-md ring-1 ring-indigo-500/30'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                            {tenant.name}
                          </h3>
                          {tenant.isPrimary && (
                            <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-semibold text-[10px]">
                              PRIMARY
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {tenant.city}, {tenant.state} • {tenant.affiliation}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          tenant.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                            : tenant.status === 'Trial'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border border-blue-300 dark:border-blue-800'
                            : 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-300 dark:border-rose-800'
                        }`}>
                          {tenant.status}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {tenant.plan}
                        </span>
                      </div>
                    </div>

                    {/* Subdomain & Link Box */}
                    <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-200/80 dark:border-slate-700/80 mb-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                          <Globe className="w-3.5 h-3.5 text-indigo-500" />
                          Portal URL:
                        </span>
                        <div className="flex items-center gap-1.5">
                          <code className="text-indigo-600 dark:text-indigo-400 font-mono text-[11px] bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                            {tenant.customDomain}
                          </code>
                          <button
                            onClick={() => window.open(`https://dadheech.vercel.app/?tenant=${tenant.slug}#login`, '_blank')}
                            className="p-1 text-indigo-500 hover:text-indigo-400 rounded"
                            title="Launch Live Demo School"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => copyToClipboard(`https://${tenant.customDomain}`, 'URL')}
                            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
                            title="Copy Link"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200 dark:border-slate-700/60">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                          <KeyRound className="w-3.5 h-3.5 text-purple-500" />
                          License Key:
                        </span>
                        <code className="text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                          {tenant.licenseKey}
                        </code>
                      </div>
                    </div>

                    {/* School Stats Pill */}
                    <div className="grid grid-cols-3 gap-2 text-center py-2 px-3 bg-slate-50/50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-800 mb-4 text-xs">
                      <div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">{tenant.stats?.studentsCount || 0}</div>
                        <div className="text-[10px] text-slate-400">Students</div>
                      </div>
                      <div className="border-x border-slate-200 dark:border-slate-700">
                        <div className="font-bold text-slate-800 dark:text-slate-200">{tenant.stats?.staffCount || 0}</div>
                        <div className="text-[10px] text-slate-400">Staff</div>
                      </div>
                      <div>
                        <div className="font-bold text-emerald-600 dark:text-emerald-400">₹{(tenant.planPrice || 0).toLocaleString()}</div>
                        <div className="text-[10px] text-slate-400">Annual Fee</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          setSelectedTenantForEdit(tenant);
                          setIsEditModalOpen(true);
                        }}
                        className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded-lg transition-colors"
                        title="Edit School Details"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedTenantForInvoice(tenant);
                          setIsInvoiceModalOpen(true);
                        }}
                        className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 rounded-lg transition-colors"
                        title="Generate SaaS Invoice / Receipt"
                      >
                        <Receipt className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          const newStatus = saasService.toggleTenantStatus(tenant.id);
                          showToast(`School '${tenant.name}' is now ${newStatus.toUpperCase()}!`, newStatus === 'Active' ? 'success' : 'info');
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
                          tenant.status === 'Active'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20'
                        }`}
                        title={tenant.status === 'Active' ? 'Click to mark as Inactive' : 'Click to mark as Active'}
                      >
                        <span className={`w-2 h-2 rounded-full ${tenant.status === 'Active' ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                        <span>{tenant.status === 'Active' ? 'Active' : 'Inactive'}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          handleSwitchTenant(tenant);
                          window.open(`https://dadheech.vercel.app/?tenant=${tenant.slug}#login`, '_blank');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-500/30'
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch School ERP ↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Modular Feature Toggles */}
      {activeTab === 'modules' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-indigo-600" />
              Per-School Modular Licensing Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Toggle specific ERP & Website capabilities for each client school based on their subscription plan.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold">
                  <th className="p-3.5 min-w-[200px]">School Name</th>
                  <th className="p-3.5 text-center">Plan</th>
                  <th className="p-3.5 text-center">Public Website</th>
                  <th className="p-3.5 text-center">ERP Core</th>
                  <th className="p-3.5 text-center">Fees & Accounts</th>
                  <th className="p-3.5 text-center">Auto Bell</th>
                  <th className="p-3.5 text-center">Biometric Sync</th>
                  <th className="p-3.5 text-center">Transport</th>
                  <th className="p-3.5 text-center">Hostel</th>
                  <th className="p-3.5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {tenants.map(t => (
                  <tr key={t.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-400">{t.city} • Subdomain: {t.slug}</div>
                    </td>
                    <td className="p-3.5 text-center">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {t.plan}
                      </span>
                    </td>

                    {/* Website Toggle */}
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleToggleModule(t.id, 'website')}
                        className={`p-1.5 rounded-lg transition-all ${
                          t.modules?.website
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                        }`}
                        title="Toggle Public Website"
                      >
                        {t.modules?.website ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>

                    {/* ERP Toggle */}
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleToggleModule(t.id, 'erp')}
                        className={`p-1.5 rounded-lg transition-all ${
                          t.modules?.erp
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                        }`}
                        title="Toggle ERP Core"
                      >
                        {t.modules?.erp ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>

                    {/* Fees Toggle */}
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleToggleModule(t.id, 'fees')}
                        className={`p-1.5 rounded-lg transition-all ${
                          t.modules?.fees
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                        }`}
                        title="Toggle Fees Module"
                      >
                        {t.modules?.fees ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>

                    {/* Auto Bell Toggle */}
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleToggleModule(t.id, 'automaticBell')}
                        className={`p-1.5 rounded-lg transition-all ${
                          t.modules?.automaticBell
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                        }`}
                        title="Toggle Automatic Bell"
                      >
                        {t.modules?.automaticBell ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>

                    {/* Biometric Toggle */}
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleToggleModule(t.id, 'biometric')}
                        className={`p-1.5 rounded-lg transition-all ${
                          t.modules?.biometric
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                        }`}
                        title="Toggle Biometric Sync"
                      >
                        {t.modules?.biometric ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>

                    {/* Transport Toggle */}
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleToggleModule(t.id, 'transport')}
                        className={`p-1.5 rounded-lg transition-all ${
                          t.modules?.transport
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                        }`}
                        title="Toggle Transport Module"
                      >
                        {t.modules?.transport ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>

                    {/* Hostel Toggle */}
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleToggleModule(t.id, 'hostel')}
                        className={`p-1.5 rounded-lg transition-all ${
                          t.modules?.hostel
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                        }`}
                        title="Toggle Hostel Module"
                      >
                        {t.modules?.hostel ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>

                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleSwitchTenant(t)}
                        className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                      >
                        Login as Admin
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SaaS Invoicing & Renewals */}
      {activeTab === 'billing' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-emerald-600" />
                  SaaS Subscription & Annual Renewal Ledger
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Track client subscription payments, upcoming renewal expiries, and generate official software receipts.
                </p>
              </div>

              <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 rounded-xl text-emerald-700 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Annual Run Rate: ₹{analytics.annualRevenue.toLocaleString()}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold">
                    <th className="p-3">School Name</th>
                    <th className="p-3">Plan & Amount</th>
                    <th className="p-3">Billing Cycle</th>
                    <th className="p-3">License Key</th>
                    <th className="p-3">Registered On</th>
                    <th className="p-3">Expires On</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {tenants.map(t => {
                    const isExpiringSoon = new Date(t.expiryDate) - new Date() < 60 * 24 * 60 * 60 * 1000;
                    return (
                      <tr key={t.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-semibold text-slate-900 dark:text-white">
                          {t.name}
                        </td>
                        <td className="p-3">
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{(t.planPrice || 0).toLocaleString()}</span>
                          <span className="text-slate-400 text-[10px] ml-1">({t.plan})</span>
                        </td>
                        <td className="p-3">{t.billingCycle || 'Annual'}</td>
                        <td className="p-3 font-mono text-[11px] text-purple-600 dark:text-purple-400">{t.licenseKey}</td>
                        <td className="p-3 text-slate-500">{t.registeredDate}</td>
                        <td className="p-3">
                          <span className={`font-medium ${isExpiringSoon ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
                            {t.expiryDate}
                          </span>
                          {isExpiringSoon && (
                            <span className="ml-1.5 px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 text-[10px] font-semibold">
                              Due Soon
                            </span>
                          )}
                        </td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            t.status === 'Active'
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400'
                          }`}>
                            {t.status}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => {
                              setSelectedTenantForInvoice(t);
                              setIsInvoiceModalOpen(true);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-colors text-xs"
                          >
                            <Receipt className="w-3.5 h-3.5 text-indigo-500" />
                            Print Bill
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: 1-Click Client Onboarding Hub */}
      {activeTab === 'onboarding' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Excel Onboarding Templates</h3>
                <p className="text-xs text-slate-500">Share these standard Excel sheets with new school clients to collect their data.</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs text-slate-800 dark:text-slate-200">1. Student Admissions Excel Template (.csv)</div>
                  <div className="text-[11px] text-slate-400">Cols: Admission No, Roll No, Name, Class, Father Name, Mobile, Address</div>
                </div>
                <button
                  onClick={() => showToast('Student Excel Template Downloaded!', 'success')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs text-slate-800 dark:text-slate-200">2. Staff & Teachers Directory Template (.csv)</div>
                  <div className="text-[11px] text-slate-400">Cols: Employee ID, Name, Designation, Department, Phone, Basic Salary</div>
                </div>
                <button
                  onClick={() => showToast('Staff Excel Template Downloaded!', 'success')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs text-slate-800 dark:text-slate-200">3. Fee Structure & Bus Routes Template (.csv)</div>
                  <div className="text-[11px] text-slate-400">Cols: Class, Monthly Tuition Fee, Admission Fee, Route Stops & Fares</div>
                </div>
                <button
                  onClick={() => showToast('Fee Structure Template Downloaded!', 'success')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 text-white shadow-sm border border-indigo-800/40 space-y-4">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              15-Minute Rapid Onboarding SOP
            </div>
            <h3 className="font-bold text-lg text-white">How to Launch a New School Client</h3>

            <ol className="space-y-3 text-xs text-slate-300 list-decimal pl-4 leading-relaxed">
              <li>
                <strong className="text-white">Create Tenant</strong> in Master SaaS Console with school name and custom slug (e.g. <code className="bg-indigo-950 px-1 py-0.5 rounded text-indigo-300">dpsagra</code>).
              </li>
              <li>
                <strong className="text-white">Choose Plan & Modules</strong> (Enterprise Pro with Website, or ERP Only).
              </li>
              <li>
                <strong className="text-white">Import Students Excel</strong> via Multiple Import tab (500 students in 10 seconds).
              </li>
              <li>
                <strong className="text-white">Upload School Logo & Banners</strong> in Frontend CMS tab for their public website.
              </li>
              <li>
                <strong className="text-white">Send Credentials to Principal</strong> via WhatsApp / Email with their personalized login link!
              </li>
            </ol>

            <div className="pt-2">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="w-full py-2.5 bg-white text-slate-900 hover:bg-indigo-50 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4 text-indigo-600" />
                Launch First School Client Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 1: Add New School Wizard */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Client School (SaaS Onboarding)"
        size="lg"
      >
        <form onSubmit={handleCreateSchool} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                School Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. St. Xavier International School"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Short Name / Acronym
              </label>
              <input
                type="text"
                value={formData.shortName}
                onChange={(e) => setFormData({ ...formData, shortName: e.target.value })}
                placeholder="e.g. SXIS"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Subdomain Slug (Unique URL) *
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '') })}
                  placeholder="stxaviers"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-l-lg focus:ring-2 focus:ring-indigo-500 dark:text-white font-mono"
                />
                <span className="bg-slate-100 dark:bg-slate-700 px-2.5 py-2 border border-l-0 border-slate-200 dark:border-slate-700 rounded-r-lg text-xs text-slate-500 dark:text-slate-300 font-mono">
                  .schoolportal.in
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                City & State
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Agra, UP"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Principal / Contact Person
              </label>
              <input
                type="text"
                value={formData.principalName}
                onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                placeholder="Principal Name"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Principal WhatsApp / Phone
              </label>
              <input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                SaaS Subscription Plan *
              </label>
              <select
                value={formData.plan}
                onChange={(e) => {
                  const plan = e.target.value;
                  const price = plan === 'Enterprise' ? 30000 : plan === 'PRO' ? 22000 : plan === 'Basic' ? 15000 : 8000;
                  setFormData({ ...formData, plan, planPrice: price });
                }}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
              >
                <option value="Enterprise">Enterprise (₹30,000/yr) - All 423 Modules + Biometric & Auto Bell</option>
                <option value="PRO">PRO (₹22,000/yr) - Transport + Hostel + Payroll + Advanced Exams</option>
                <option value="Basic">Basic (₹15,000/yr) - Core ERP + Full Fees POS + School Website</option>
                <option value="Startup">Startup (₹8,000/yr) - Admissions, Attendance & Notices</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Annual Subscription Price (₹)
              </label>
              <input
                type="number"
                value={formData.planPrice}
                onChange={(e) => setFormData({ ...formData, planPrice: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm"
            >
              Create School & Generate License
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL 2: Edit School Details */}
      {selectedTenantForEdit && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title={`Edit School: ${selectedTenantForEdit.name}`}
          size="lg"
        >
          <form onSubmit={handleUpdateSchool} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  School Name
                </label>
                <input
                  type="text"
                  required
                  value={selectedTenantForEdit.name}
                  onChange={(e) => setSelectedTenantForEdit({ ...selectedTenantForEdit, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Custom Domain
                </label>
                <input
                  type="text"
                  value={selectedTenantForEdit.customDomain}
                  onChange={(e) => setSelectedTenantForEdit({ ...selectedTenantForEdit, customDomain: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Status
                </label>
                <select
                  value={selectedTenantForEdit.status}
                  onChange={(e) => setSelectedTenantForEdit({ ...selectedTenantForEdit, status: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white"
                >
                  <option value="Active">Active</option>
                  <option value="Trial">Trial</option>
                  <option value="Expired">Expired</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  License Expiry Date
                </label>
                <input
                  type="date"
                  value={selectedTenantForEdit.expiryDate}
                  onChange={(e) => setSelectedTenantForEdit({ ...selectedTenantForEdit, expiryDate: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subscription Plan
                </label>
                <select
                  value={selectedTenantForEdit.plan}
                  onChange={(e) => setSelectedTenantForEdit({ ...selectedTenantForEdit, plan: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white"
                >
                  <option value="Enterprise">Enterprise (₹30,000/yr)</option>
                  <option value="PRO">PRO (₹22,000/yr)</option>
                  <option value="Basic">Basic (₹15,000/yr)</option>
                  <option value="Startup">Startup (₹8,000/yr)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Annual Price (₹)
                </label>
                <input
                  type="number"
                  value={selectedTenantForEdit.planPrice}
                  onChange={(e) => setSelectedTenantForEdit({ ...selectedTenantForEdit, planPrice: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:text-white"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* MODAL 3: SaaS Client Invoice Receipt */}
      {selectedTenantForInvoice && (
        <Modal
          isOpen={isInvoiceModalOpen}
          onClose={() => setIsInvoiceModalOpen(false)}
          title={`SaaS Software Invoice: ${selectedTenantForInvoice.name}`}
          size="lg"
        >
          <div className="space-y-6 bg-white p-6 rounded-xl border border-slate-200 text-slate-900 font-sans">
            {/* Invoice Printable Header */}
            <div className="flex justify-between items-start border-b pb-4">
              <div>
                <h2 className="text-xl font-black text-indigo-700 tracking-tight">PKR EDUTECH GLOBAL IT SERVICES</h2>
                <p className="text-xs text-slate-500">Official Enterprise School ERP & Smart Campus SaaS Provider • ISO 9001:2015</p>
                <p className="text-xs text-slate-500">Agra / NCR, India • support@pkredutech.vercel.app</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full uppercase">
                  PAID INVOICE
                </span>
                <p className="text-xs text-slate-600 mt-1">Invoice #: <strong>INV-SAAS-{selectedTenantForInvoice.slug.toUpperCase()}-2027</strong></p>
                <p className="text-xs text-slate-500">Date: {new Date().toLocaleDateString('en-IN')}</p>
              </div>
            </div>

            {/* Billed To */}
            <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-lg border">
              <div>
                <span className="text-slate-400 uppercase font-semibold text-[10px]">Billed To (Client School):</span>
                <h4 className="font-bold text-sm text-slate-800 mt-0.5">{selectedTenantForInvoice.name}</h4>
                <p className="text-slate-600">{selectedTenantForInvoice.city}, {selectedTenantForInvoice.state}</p>
                <p className="text-slate-600">Principal: {selectedTenantForInvoice.principalName}</p>
                <p className="text-slate-600">Phone: {selectedTenantForInvoice.contactPhone}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase font-semibold text-[10px]">License & Portal Details:</span>
                <p className="text-slate-700 mt-0.5"><strong>Plan:</strong> {selectedTenantForInvoice.plan}</p>
                <p className="text-slate-700"><strong>Domain:</strong> {selectedTenantForInvoice.customDomain}</p>
                <p className="text-slate-700"><strong>License Key:</strong> {selectedTenantForInvoice.licenseKey}</p>
                <p className="text-slate-700"><strong>Valid Till:</strong> {selectedTenantForInvoice.expiryDate}</p>
              </div>
            </div>

            {/* Invoice Line Items */}
            <table className="w-full text-xs text-left border">
              <thead className="bg-slate-100 border-b font-semibold text-slate-700">
                <tr>
                  <th className="p-2.5">Item Description</th>
                  <th className="p-2.5 text-center">Period</th>
                  <th className="p-2.5 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-700">
                <tr>
                  <td className="p-2.5">
                    <div className="font-semibold">{selectedTenantForInvoice.plan} Subscription License</div>
                    <div className="text-[10px] text-slate-500">Includes Multi-user ERP, Fees, Attendance, Cards, Bell & Biometric Sync</div>
                  </td>
                  <td className="p-2.5 text-center">1 Year</td>
                  <td className="p-2.5 text-right font-semibold">₹{(selectedTenantForInvoice.planPrice || 0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="p-2.5">
                    <div className="font-semibold">Cloud Hosting, SSL & Automatic Backup</div>
                    <div className="text-[10px] text-slate-500">24x7 High Speed Cloud Server & HTTPS Security Certificate</div>
                  </td>
                  <td className="p-2.5 text-center">Included</td>
                  <td className="p-2.5 text-right text-emerald-600 font-semibold">₹0 (FREE)</td>
                </tr>
              </tbody>
              <tfoot className="bg-slate-50 border-t font-bold text-slate-900">
                <tr>
                  <td colSpan="2" className="p-2.5 text-right">Total Paid Amount:</td>
                  <td className="p-2.5 text-right text-sm text-emerald-700">₹{(selectedTenantForInvoice.planPrice || 0).toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>

            <div className="flex justify-between items-center pt-2">
              <div className="text-[10px] text-slate-400">
                This is a computer-generated receipt for SaaS software license.
              </div>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                Print / Save PDF Receipt
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* MODAL 4: Plan Comparison 4-Tier Matrix */}
      <PlanComparisonModal
        isOpen={isPlanComparisonOpen}
        onClose={() => setIsPlanComparisonOpen(false)}
        currentSchoolName="PKR Global International Academy"
        currentPlan="Enterprise"
      />
    </div>
  );
};
export default MasterSaaSHubPage;
