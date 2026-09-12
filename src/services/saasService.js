/**
 * Master SaaS Tenant & Multi-School Management Service
 * Manages all client school instances, modular licensing, subdomains, and tenant data isolation.
 */

const SAAS_STORAGE_KEY = 'DMPS_MASTER_SAAS_TENANTS_V2';
const ACTIVE_TENANT_KEY = 'DMPS_ACTIVE_TENANT_SLUG_V2';

export const DEFAULT_TENANTS = [
  {
    id: 'TENANT-001',
    name: 'Dadheech Memorial Public School',
    shortName: 'DMPS',
    slug: 'dmps',
    customDomain: 'dadheech.vercel.app',
    city: 'Agra',
    state: 'Uttar Pradesh',
    affiliation: 'CBSE & BSB Affiliated (10+2)',
    principalName: 'Mr. P. K. Sharma',
    contactPhone: '+91 97589 75880',
    contactEmail: 'contact@dmps.edu.in',
    isPrimary: true,
    plan: 'Enterprise Pro',
    planPrice: 30000,
    billingCycle: 'Annual',
    status: 'Active',
    licenseKey: 'DMPS-ENT-2027-LIVE-A99X',
    registeredDate: '2025-04-01',
    expiryDate: '2028-03-31',
    stats: {
      studentsCount: 0,
      staffCount: 18,
      branchesCount: 3
    },
    modules: {
      website: true,
      erp: true,
      fees: true,
      attendance: true,
      academics: true,
      examinations: true,
      payroll: true,
      automaticBell: true,
      biometric: true,
      transport: true,
      hostel: true,
      library: true,
      inventory: true,
      idCards: true,
      onlineQuiz: true,
      frontendCMS: true
    }
  },
  {
    id: 'TENANT-002',
    name: 'St. Xavier International Academy',
    shortName: 'SXIA',
    slug: 'stxaviers',
    customDomain: 'stxaviers.schoolportal.in',
    city: 'Jaipur',
    state: 'Rajasthan',
    affiliation: 'ICSE Board',
    principalName: 'Sister Maria Fernandez',
    contactPhone: '+91 98290 11223',
    contactEmail: 'info@stxaviersacademy.org',
    isPrimary: false,
    plan: 'Enterprise Pro',
    planPrice: 30000,
    billingCycle: 'Annual',
    status: 'Active',
    licenseKey: 'SXIA-ENT-2027-PRO-K44B',
    registeredDate: '2026-04-10',
    expiryDate: '2027-04-09',
    stats: {
      studentsCount: 37,
      staffCount: 18,
      branchesCount: 2
    },
    modules: {
      website: true,
      erp: true,
      fees: true,
      attendance: true,
      academics: true,
      examinations: true,
      payroll: true,
      automaticBell: true,
      biometric: true,
      transport: true,
      hostel: false,
      library: true,
      inventory: true,
      idCards: true,
      onlineQuiz: true,
      frontendCMS: true
    }
  },
  {
    id: 'TENANT-003',
    name: 'Green Valley Public School',
    shortName: 'GVPS',
    slug: 'greenvalley',
    customDomain: 'greenvalley.schoolportal.in',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    affiliation: 'UP State Board',
    principalName: 'Dr. Ramesh Chandra',
    contactPhone: '+91 94150 99887',
    contactEmail: 'admin@greenvalleyschool.in',
    isPrimary: false,
    plan: 'Basic ERP',
    planPrice: 15000,
    billingCycle: 'Annual',
    status: 'Active',
    licenseKey: 'GVPS-ERP-2027-STD-X78P',
    registeredDate: '2026-06-01',
    expiryDate: '2027-05-31',
    stats: {
      studentsCount: 37,
      staffCount: 18,
      branchesCount: 2
    },
    modules: {
      website: false,
      erp: true,
      fees: true,
      attendance: true,
      academics: true,
      examinations: true,
      payroll: true,
      automaticBell: false,
      biometric: true,
      transport: true,
      hostel: false,
      library: true,
      inventory: false,
      idCards: true,
      onlineQuiz: false,
      frontendCMS: false
    }
  },
  {
    id: 'TENANT-004',
    name: 'Apex Heritage High School',
    shortName: 'Apex High',
    slug: 'apex',
    customDomain: 'apexhigh.schoolportal.in',
    city: 'Dehradun',
    state: 'Uttarakhand',
    affiliation: 'CBSE Affiliated',
    principalName: 'Mrs. Sunita Rawat',
    contactPhone: '+91 97600 33445',
    contactEmail: 'contact@apexheritage.edu',
    isPrimary: false,
    plan: 'Website Only',
    planPrice: 8000,
    billingCycle: 'Annual',
    status: 'Active',
    licenseKey: 'APEX-WEB-2026-TRL-990Q',
    registeredDate: '2026-08-15',
    expiryDate: '2027-08-14',
    stats: {
      studentsCount: 37,
      staffCount: 18,
      branchesCount: 1
    },
    modules: {
      website: true,
      erp: false,
      fees: false,
      attendance: false,
      academics: false,
      examinations: false,
      payroll: false,
      automaticBell: false,
      biometric: false,
      transport: false,
      hostel: false,
      library: false,
      inventory: false,
      idCards: false,
      onlineQuiz: false,
      frontendCMS: true
    }
  }
];

class SaasService {
  constructor() {
    this.listeners = new Set();
    this.tenants = this.loadTenants();
    this.activeTenantSlug = this.initActiveTenantSlug();
  }

  loadTenants() {
    try {
      const stored = localStorage.getItem(SAAS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not load SaaS tenants from localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_TENANTS));
  }

  saveTenants() {
    try {
      localStorage.setItem(SAAS_STORAGE_KEY, JSON.stringify(this.tenants));
    } catch (e) {
      console.error('Error saving SaaS tenants:', e);
    }
    this.notifyListeners();
  }

  initActiveTenantSlug() {
    if (typeof window !== 'undefined') {
      try {
        // 1. Check URL Search Query Parameters (?tenant=stxaviers or ?school=stxaviers)
        const urlParams = new URLSearchParams(window.location.search);
        const tenantParam = urlParams.get('tenant') || urlParams.get('school');
        if (tenantParam) {
          const found = this.tenants.find(t => t.slug === tenantParam.toLowerCase() || t.id.toLowerCase() === tenantParam.toLowerCase());
          if (found) {
            try { localStorage.setItem(ACTIVE_TENANT_KEY, found.slug); } catch (e) {}
            return found.slug;
          }
        }

        // 2. Check URL Hash fragment (#tenant=stxaviers or #school=stxaviers)
        const hash = window.location.hash.toLowerCase();
        if (hash.includes('tenant=') || hash.includes('school=')) {
          const match = hash.match(/(?:tenant|school)=([a-z0-9_-]+)/);
          if (match && match[1]) {
            const found = this.tenants.find(t => t.slug === match[1] || t.id.toLowerCase() === match[1]);
            if (found) {
              try { localStorage.setItem(ACTIVE_TENANT_KEY, found.slug); } catch (e) {}
              return found.slug;
            }
          }
        }

        // 3. Check Hostname / Subdomain
        const host = window.location.hostname.toLowerCase();
        const matched = this.tenants.find(t => 
          (t.customDomain && host === t.customDomain.toLowerCase()) ||
          host.startsWith(t.slug + '.')
        );
        if (matched) return matched.slug;
      } catch (e) {
        console.warn('Error detecting tenant from URL:', e);
      }
    }

    // 4. Fallback to localStorage active tenant or primary DMPS
    try {
      const saved = localStorage.getItem(ACTIVE_TENANT_KEY);
      if (saved && this.tenants.some(t => t.slug === saved)) {
        return saved;
      }
    } catch (e) {}

    return 'dmps';
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    this.listeners.forEach(fn => {
      try { fn(this.tenants); } catch (err) { console.error(err); }
    });
  }

  getTenants() {
    return [...this.tenants];
  }

  getTenant(idOrSlug) {
    if (!idOrSlug) return this.getActiveTenant();
    return this.tenants.find(t => t.id === idOrSlug || t.slug === idOrSlug) || this.tenants[0];
  }

  getActiveTenant() {
    const tenant = this.tenants.find(t => t.slug === this.activeTenantSlug);
    return tenant || this.tenants[0] || DEFAULT_TENANTS[0];
  }

  setActiveTenant(idOrSlug) {
    const target = this.tenants.find(t => t.id === idOrSlug || t.slug === idOrSlug);
    if (target) {
      this.activeTenantSlug = target.slug;
      try {
        localStorage.setItem(ACTIVE_TENANT_KEY, target.slug);
      } catch (e) {}
      this.notifyListeners();
      return target;
    }
    return null;
  }

  toggleTenantStatus(tenantId) {
    const tenant = this.tenants.find(t => t.id === tenantId);
    if (tenant) {
      tenant.status = tenant.status === 'Active' ? 'Inactive' : 'Active';
      this.saveTenants();
      return tenant.status;
    }
    return 'Active';
  }

  updateTenantStatus(tenantId, newStatus) {
    const tenant = this.tenants.find(t => t.id === tenantId);
    if (tenant) {
      tenant.status = newStatus;
      this.saveTenants();
      return tenant.status;
    }
    return null;
  }

  addTenant(newTenantData) {
    const slug = (newTenantData.slug || newTenantData.name.toLowerCase().replace(/[^a-z0-9]/g, '')).toLowerCase();
    const id = `TENANT-${String(this.tenants.length + 1).padStart(3, '0')}`;
    
    // Auto-generate license key
    const prefix = (newTenantData.shortName || slug).toUpperCase().slice(0, 4);
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const licenseKey = `${prefix}-ERP-2027-${newTenantData.plan?.toUpperCase().slice(0, 3) || 'ENT'}-${randomHex}`;

    const defaultModules = {
      website: newTenantData.plan !== 'Basic ERP',
      erp: newTenantData.plan !== 'Website Only',
      fees: true,
      attendance: true,
      academics: true,
      examinations: true,
      payroll: true,
      automaticBell: newTenantData.plan === 'Enterprise Pro',
      biometric: newTenantData.plan === 'Enterprise Pro',
      transport: true,
      hostel: false,
      library: true,
      inventory: true,
      idCards: true,
      onlineQuiz: true,
      frontendCMS: newTenantData.plan !== 'Basic ERP'
    };

    const tenant = {
      id,
      name: newTenantData.name,
      shortName: newTenantData.shortName || newTenantData.name.slice(0, 4).toUpperCase(),
      slug,
      customDomain: newTenantData.customDomain || `${slug}.schoolportal.in`,
      city: newTenantData.city || 'Agra',
      state: newTenantData.state || 'Uttar Pradesh',
      affiliation: newTenantData.affiliation || 'CBSE Affiliated',
      principalName: newTenantData.principalName || 'Principal',
      contactPhone: newTenantData.contactPhone || '',
      contactEmail: newTenantData.contactEmail || '',
      isPrimary: false,
      plan: newTenantData.plan || 'Enterprise Pro',
      planPrice: Number(newTenantData.planPrice) || 20000,
      billingCycle: newTenantData.billingCycle || 'Annual',
      status: 'Active',
      licenseKey,
      registeredDate: new Date().toISOString().split('T')[0],
      expiryDate: newTenantData.expiryDate || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      stats: {
        studentsCount: 37,
        staffCount: 18,
        branchesCount: 1
      },
      modules: {
        ...defaultModules,
        ...(newTenantData.modules || {})
      }
    };

    this.tenants.push(tenant);
    this.saveTenants();
    return tenant;
  }

  updateTenant(id, updateData) {
    const index = this.tenants.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tenants[index] = {
        ...this.tenants[index],
        ...updateData
      };
      this.saveTenants();
      return this.tenants[index];
    }
    return null;
  }

  toggleModule(tenantId, moduleKey, forcedValue = null) {
    const tenant = this.tenants.find(t => t.id === tenantId);
    if (tenant) {
      const current = tenant.modules[moduleKey] ?? false;
      const nextVal = forcedValue !== null ? forcedValue : !current;
      tenant.modules[moduleKey] = nextVal;
      this.saveTenants();
      return nextVal;
    }
    return false;
  }

  deleteTenant(id) {
    const target = this.tenants.find(t => t.id === id);
    if (target && target.isPrimary) {
      throw new Error('Primary school (DMPS) cannot be deleted.');
    }
    this.tenants = this.tenants.filter(t => t.id !== id);
    if (this.activeTenantSlug === target?.slug) {
      this.activeTenantSlug = 'dmps';
      try { localStorage.setItem(ACTIVE_TENANT_KEY, 'dmps'); } catch(e){}
    }
    this.saveTenants();
    return true;
  }

  getSaaSAnalytics() {
    const totalTenants = this.tenants.length;
    const activeTenants = this.tenants.filter(t => t.status === 'Active').length;
    const trialTenants = this.tenants.filter(t => t.status === 'Trial').length;
    const totalStudents = this.tenants.reduce((sum, t) => sum + (t.stats?.studentsCount || 0), 0);
    const totalStaff = this.tenants.reduce((sum, t) => sum + (t.stats?.staffCount || 0), 0);
    
    // Revenue calculations
    const annualRevenue = this.tenants.reduce((sum, t) => sum + (t.planPrice || 0), 0);
    const mrr = Math.round(annualRevenue / 12);

    // Upcoming renewals (within 60 days)
    const now = new Date();
    const in60Days = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);
    const renewalsDue = this.tenants.filter(t => {
      const exp = new Date(t.expiryDate);
      return exp >= now && exp <= in60Days;
    });

    return {
      totalTenants,
      activeTenants,
      trialTenants,
      totalStudents,
      totalStaff,
      annualRevenue,
      mrr,
      renewalsDue
    };
  }
}

export const saasService = new SaasService();
export default saasService;
