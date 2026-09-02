import React, { useState, useEffect, useMemo } from 'react';
import {
  Package,
  Plus,
  Search,
  Filter,
  Trash2,
  Printer,
  Calendar,
  Layers,
  Sparkles,
  Tag,
  Building2,
  Truck,
  Scale,
  ShoppingCart,
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  User,
  ShoppingBag,
  DollarSign
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const InventoryStorePage = ({ initialTab = 'product' }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents() || [];
  const teachers = schoolService.getTeachers() || [];
  const schoolInfo = schoolService.getSchoolInfo() || {
    name: 'Dadheech Memorial Public School',
    tagline: 'School Store & Consumables Inventory',
    phone: '+91 97588 82443'
  };

  const resolveTab = (tab) => {
    if (!tab) return 'product';
    if (tab === 'inventory-product' || tab === 'product') return 'product';
    if (tab === 'inventory-category' || tab === 'category') return 'category';
    if (tab === 'inventory-store' || tab === 'store') return 'store';
    if (tab === 'inventory-supplier' || tab === 'supplier') return 'supplier';
    if (tab === 'inventory-unit' || tab === 'unit') return 'unit';
    if (tab === 'inventory-purchase' || tab === 'purchase') return 'purchase';
    if (tab === 'inventory-sales' || tab === 'sales') return 'sales';
    if (tab === 'inventory-issue' || tab === 'issue') return 'issue';
    return 'product';
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  // 1. Categories Master Data
  const [categories, setCategories] = useState([
    { id: 'CAT-01', name: 'School Uniforms', code: 'UNIFORM', desc: 'Summer & Winter shirts, trousers, skirts, blazers & tracksuits', count: 8 },
    { id: 'CAT-02', name: 'Academic Notebooks & Registers', code: 'BOOKS', desc: 'School branded 172-pg notebooks, drawing files & attendance registers', count: 6 },
    { id: 'CAT-03', name: 'Examination Stationery', code: 'EXAM', desc: 'Main answer booklets, supplement sheets, graph papers & envelopes', count: 4 },
    { id: 'CAT-04', name: 'Science & Computer Lab Consumables', code: 'LAB', desc: 'Glass test tubes, chemical reagents, optical cables & printer cartridges', count: 5 },
    { id: 'CAT-05', name: 'Sports Goods & Equipment', code: 'SPORTS', desc: 'Footballs, cricket kits, badminton rackets, nets & medals', count: 4 },
    { id: 'CAT-06', name: 'Campus Maintenance & Sanitation', code: 'MAINT', desc: 'White-wash paint, phenyl, brooms, sanitizers & LED bulbs', count: 4 }
  ]);

  // 2. Stores / Rooms Master Data
  const [stores, setStores] = useState([
    { id: 'STR-01', name: 'Central Stationery & Book Godown', code: 'STORE-MAIN', location: 'Ground Floor Admin Wing, Room 04', incharge: 'Sh. Radheshyam Sharma', totalItems: 14 },
    { id: 'STR-02', name: 'School Uniform & Apparel Counter', code: 'STORE-UNIFORM', location: 'Near Main Gate Reception Stall', incharge: 'Mrs. Rekha Gupta', totalItems: 8 },
    { id: 'STR-03', name: 'Physics & Chemistry Lab Store', code: 'STORE-LAB', location: 'First Floor Science Block', incharge: 'Dr. Vivek Upadhyay', totalItems: 5 },
    { id: 'STR-04', name: 'Sports Gear & Activity Room', code: 'STORE-SPORTS', location: 'Ground Floor Playground Wing', incharge: 'Sh. Dharmendra Singh', totalItems: 4 }
  ]);

  // 3. Suppliers Master Data
  const [suppliers, setSuppliers] = useState([
    { id: 'SUP-01', name: 'Agarwal Paper & Printing Mart', contact: 'Mr. Manoj Agarwal', phone: '+91 98371 99201', email: 'agarwalpaper@gmail.com', gstin: '09AABCU9603R1ZM', address: 'Debai Mandi, Bulandshahr', category: 'Academic Notebooks & Exam Sheets' },
    { id: 'SUP-02', name: 'Gupta Uniforms & Tailoring Works', contact: 'Mr. Rajesh Gupta', phone: '+91 97589 44321', email: 'guptauniforms@gmail.com', gstin: '09AAECG4821N1ZY', address: 'Railway Road, Aligarh', category: 'School Uniforms & Tracksuits' },
    { id: 'SUP-03', name: 'Sharda Scientific Apparatus & Chemicals', contact: 'Mr. S. K. Sharda', phone: '+91 94120 88310', email: 'shardalab@rediffmail.com', gstin: '09AAZCS8920K1ZX', address: 'Medical College Road, Meerut', category: 'Science Lab Consumables' },
    { id: 'SUP-04', name: 'National Sports Corporation', contact: 'Mr. Harish Kumar', phone: '+91 98102 33419', email: 'nationalsports@gmail.com', gstin: '09AABCN1094J1ZU', address: 'Suraj Kund Sports Market, Meerut', category: 'Sports Goods' }
  ]);

  // 4. Units Master Data
  const [units, setUnits] = useState([
    { id: 'UNT-01', name: 'Pieces', code: 'Pcs' },
    { id: 'UNT-02', name: 'Complete Sets', code: 'Sets' },
    { id: 'UNT-03', name: 'Packets / Boxes', code: 'Boxes' },
    { id: 'UNT-04', name: 'Dozens (12 Pcs)', code: 'Dozens' },
    { id: 'UNT-05', name: 'Paper Reams (500 Sheets)', code: 'Reams' },
    { id: 'UNT-06', name: 'Liters', code: 'Ltr' },
    { id: 'UNT-07', name: 'Kilograms', code: 'Kg' }
  ]);

  // 5. Products Master Data
  const [products, setProducts] = useState([
    { id: 'PRD-01', sku: 'UNIF-SET-M', name: 'Boys Regular Uniform Set (Shirt + Trouser + Tie)', category: 'School Uniforms', store: 'School Uniform & Apparel Counter', unit: 'Sets', unitPrice: 850, purchasePrice: 620, stock: 124, reorderLevel: 25 },
    { id: 'PRD-02', sku: 'UNIF-SET-F', name: 'Girls Regular Uniform Set (Shirt + Skirt + Ribbon)', category: 'School Uniforms', store: 'School Uniform & Apparel Counter', unit: 'Sets', unitPrice: 820, purchasePrice: 590, stock: 96, reorderLevel: 20 },
    { id: 'PRD-03', sku: 'UNIF-BLAZER', name: 'Winter Woolen Blazer with School Crest', category: 'School Uniforms', store: 'School Uniform & Apparel Counter', unit: 'Pcs', unitPrice: 1250, purchasePrice: 950, stock: 45, reorderLevel: 15 },
    { id: 'PRD-04', sku: 'NOTE-172PG', name: 'DMPS Branded 172-Page Ruled Notebook', category: 'Academic Notebooks & Registers', store: 'Central Stationery & Book Godown', unit: 'Pcs', unitPrice: 45, purchasePrice: 32, stock: 850, reorderLevel: 150 },
    { id: 'PRD-05', sku: 'EXAM-BOOKLET', name: 'Official 32-Page Main Exam Answer Booklet', category: 'Examination Stationery', store: 'Central Stationery & Book Godown', unit: 'Pcs', unitPrice: 20, purchasePrice: 12, stock: 1400, reorderLevel: 300 },
    { id: 'PRD-06', sku: 'EXAM-SUPP', name: 'Examination 8-Page Supplement Sheets', category: 'Examination Stationery', store: 'Central Stationery & Book Godown', unit: 'Pcs', unitPrice: 8, purchasePrice: 4, stock: 950, reorderLevel: 200 },
    { id: 'PRD-07', sku: 'STAT-MARKER', name: 'Whiteboard Marker Pens (Box of 10 Assorted)', category: 'Academic Notebooks & Registers', store: 'Central Stationery & Book Godown', unit: 'Boxes', unitPrice: 280, purchasePrice: 210, stock: 32, reorderLevel: 10 },
    { id: 'PRD-08', sku: 'LAB-TESTTUBE', name: 'Borosil Glass Test Tubes 15ml (Pack of 50)', category: 'Science & Computer Lab Consumables', store: 'Physics & Chemistry Lab Store', unit: 'Boxes', unitPrice: 450, purchasePrice: 340, stock: 18, reorderLevel: 5 },
    { id: 'PRD-09', sku: 'SPORT-FOOTBALL', name: 'Nivia Classic Tournament Football Size 5', category: 'Sports Goods & Equipment', store: 'Sports Gear & Activity Room', unit: 'Pcs', unitPrice: 750, purchasePrice: 560, stock: 12, reorderLevel: 4 },
    { id: 'PRD-10', sku: 'MAINT-PHENYL', name: 'Floor Disinfectant Phenyl 5-Liter Can', category: 'Campus Maintenance & Sanitation', store: 'Central Stationery & Book Godown', unit: 'Ltr', unitPrice: 320, purchasePrice: 240, stock: 8, reorderLevel: 10 }
  ]);

  // 6. Purchases (Stock Inward History)
  const [purchases, setPurchases] = useState([
    { id: 'PO-2026-081', invoiceNo: 'INV-AP-9942', date: '2026-08-25', supplier: 'Agarwal Paper & Printing Mart', productName: 'Official 32-Page Main Exam Answer Booklet', qty: 1000, unit: 'Pcs', rate: 12, totalAmount: 12000, status: 'Received in Store' },
    { id: 'PO-2026-082', invoiceNo: 'INV-GU-4410', date: '2026-08-20', supplier: 'Gupta Uniforms & Tailoring Works', productName: 'Boys Regular Uniform Set (Shirt + Trouser + Tie)', qty: 100, unit: 'Sets', rate: 620, totalAmount: 62000, status: 'Received in Store' },
    { id: 'PO-2026-083', invoiceNo: 'INV-NS-1049', date: '2026-08-15', supplier: 'National Sports Corporation', productName: 'Nivia Classic Tournament Football Size 5', qty: 10, unit: 'Pcs', rate: 560, totalAmount: 5600, status: 'Received in Store' }
  ]);

  // 7. Store Sales (Student POS Counter Billing)
  const [sales, setSales] = useState([
    { id: 'SL-2026-001', receiptNo: 'POS-REC-104', date: '2026-08-30', studentName: 'RITU YADAV', class: 'XI', items: '1x Girls Regular Uniform Set + 4x 172-Pg Notebooks', totalAmount: 1000, paymentMode: 'Cash' },
    { id: 'SL-2026-002', receiptNo: 'POS-REC-105', date: '2026-08-30', studentName: 'SACHIN KUMAR', class: 'X', items: '1x Boys Regular Uniform Set + 1x Winter Blazer', totalAmount: 2100, paymentMode: 'UPI' },
    { id: 'SL-2026-003', receiptNo: 'POS-REC-106', date: '2026-08-29', studentName: 'DIPANSHU', class: 'IX', items: '6x DMPS 172-Page Ruled Notebook', totalAmount: 270, paymentMode: 'Cash' }
  ]);

  // 8. Internal Material Issues (To Staff / Teachers / Depts)
  const [issues, setIssues] = useState([
    { id: 'ISS-01', date: '2026-08-28', issuedTo: 'Sonu Kumar (Teacher)', department: 'Academic Faculty', productName: 'Whiteboard Marker Pens (Box of 10 Assorted)', qty: 2, unit: 'Boxes', purpose: 'Classroom teaching for Class 9 & 10', returnable: false },
    { id: 'ISS-02', date: '2026-08-26', issuedTo: 'Dr. Vivek Upadhyay (Science PGT)', department: 'Physics & Chem Lab', productName: 'Borosil Glass Test Tubes 15ml (Pack of 50)', qty: 2, unit: 'Boxes', purpose: 'Chemistry practicals for Class 11 & 12', returnable: true },
    { id: 'ISS-03', date: '2026-08-24', issuedTo: 'Dharmendra Singh (PTI)', department: 'Sports & PE', productName: 'Nivia Classic Tournament Football Size 5', qty: 2, unit: 'Pcs', purpose: 'Inter-house football tournament practice', returnable: true }
  ]);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCatFilter, setSelectedCatFilter] = useState('All');

  // Modals state
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isAddStoreModalOpen, setIsAddStoreModalOpen] = useState(false);
  const [isAddSupplierModalOpen, setIsAddSupplierModalOpen] = useState(false);
  const [isAddUnitModalOpen, setIsAddUnitModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isSaleModalOpen, setIsSaleModalOpen] = useState(false);
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
  const [selectedSaleForPrint, setSelectedSaleForPrint] = useState(null);
  const [isPrintReceiptModalOpen, setIsPrintReceiptModalOpen] = useState(false);

  // Forms state
  const [productForm, setProductForm] = useState({
    sku: '',
    name: '',
    category: 'School Uniforms',
    store: 'Central Stationery & Book Godown',
    unit: 'Pcs',
    unitPrice: '',
    purchasePrice: '',
    stock: '',
    reorderLevel: '10'
  });

  const [categoryForm, setCategoryForm] = useState({ name: '', code: '', desc: '' });
  const [storeForm, setStoreForm] = useState({ name: '', code: '', location: '', incharge: '' });
  const [supplierForm, setSupplierForm] = useState({ name: '', contact: '', phone: '', email: '', gstin: '', address: '', category: 'Stationery' });
  const [unitForm, setUnitForm] = useState({ name: '', code: '' });

  const [purchaseForm, setPurchaseForm] = useState({
    invoiceNo: '',
    supplier: 'Agarwal Paper & Printing Mart',
    productName: 'Official 32-Page Main Exam Answer Booklet',
    qty: '',
    rate: '',
    unit: 'Pcs'
  });

  const [saleForm, setSaleForm] = useState({
    studentId: '',
    productName: 'DMPS Branded 172-Page Ruled Notebook',
    qty: '1',
    paymentMode: 'Cash'
  });

  const [issueForm, setIssueForm] = useState({
    staffId: '',
    productName: 'Whiteboard Marker Pens (Box of 10 Assorted)',
    qty: '1',
    purpose: '',
    returnable: false
  });

  // KPI Calculations
  const totalStockValue = useMemo(() => {
    return products.reduce((acc, p) => acc + (p.stock * p.unitPrice), 0);
  }, [products]);

  const lowStockCount = useMemo(() => {
    return products.filter(p => p.stock <= p.reorderLevel).length;
  }, [products]);

  // Handlers
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productForm.name.trim()) return;
    const newPrd = {
      id: `PRD-${String(products.length + 1).padStart(2, '0')}`,
      sku: productForm.sku || `SKU-${Date.now().toString().slice(-4)}`,
      name: productForm.name.trim(),
      category: productForm.category,
      store: productForm.store,
      unit: productForm.unit,
      unitPrice: Number(productForm.unitPrice) || 0,
      purchasePrice: Number(productForm.purchasePrice) || 0,
      stock: Number(productForm.stock) || 0,
      reorderLevel: Number(productForm.reorderLevel) || 10
    };
    setProducts([...products, newPrd]);
    setIsAddProductModalOpen(false);
    setProductForm({ sku: '', name: '', category: 'School Uniforms', store: 'Central Stationery & Book Godown', unit: 'Pcs', unitPrice: '', purchasePrice: '', stock: '', reorderLevel: '10' });
    showToast(`Product "${newPrd.name}" added to inventory catalog! 📦`, 'success');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!categoryForm.name.trim()) return;
    const newCat = {
      id: `CAT-${String(categories.length + 1).padStart(2, '0')}`,
      name: categoryForm.name.trim(),
      code: categoryForm.code || categoryForm.name.toUpperCase().slice(0, 6),
      desc: categoryForm.desc || 'School Inventory Category',
      count: 0
    };
    setCategories([...categories, newCat]);
    setIsAddCategoryModalOpen(false);
    setCategoryForm({ name: '', code: '', desc: '' });
    showToast(`Category "${newCat.name}" added! 🏷️`, 'success');
  };

  const handleAddStore = (e) => {
    e.preventDefault();
    if (!storeForm.name.trim()) return;
    const newStr = {
      id: `STR-${String(stores.length + 1).padStart(2, '0')}`,
      name: storeForm.name.trim(),
      code: storeForm.code || `STR-${Date.now().toString().slice(-3)}`,
      location: storeForm.location || 'Campus Ground Floor',
      incharge: storeForm.incharge || 'Store Keeper',
      totalItems: 0
    };
    setStores([...stores, newStr]);
    setIsAddStoreModalOpen(false);
    setStoreForm({ name: '', code: '', location: '', incharge: '' });
    showToast(`Store room "${newStr.name}" registered! 🏪`, 'success');
  };

  const handleAddSupplier = (e) => {
    e.preventDefault();
    if (!supplierForm.name.trim()) return;
    const newSup = {
      id: `SUP-${String(suppliers.length + 1).padStart(2, '0')}`,
      ...supplierForm
    };
    setSuppliers([...suppliers, newSup]);
    setIsAddSupplierModalOpen(false);
    setSupplierForm({ name: '', contact: '', phone: '', email: '', gstin: '', address: '', category: 'Stationery' });
    showToast(`Supplier "${newSup.name}" added to vendor directory! 🚚`, 'success');
  };

  const handleAddUnit = (e) => {
    e.preventDefault();
    if (!unitForm.name.trim()) return;
    const newUnt = {
      id: `UNT-${String(units.length + 1).padStart(2, '0')}`,
      name: unitForm.name.trim(),
      code: unitForm.code || unitForm.name.slice(0, 3)
    };
    setUnits([...units, newUnt]);
    setIsAddUnitModalOpen(false);
    setUnitForm({ name: '', code: '' });
    showToast(`Measurement Unit "${newUnt.name}" created! ⚖️`, 'success');
  };

  const handleCreatePurchase = (e) => {
    e.preventDefault();
    const qty = Number(purchaseForm.qty);
    const rate = Number(purchaseForm.rate);
    if (!qty || qty <= 0) {
      showToast('Please enter a valid inward quantity', 'warning');
      return;
    }
    const newPo = {
      id: `PO-${Date.now().toString().slice(-4)}`,
      invoiceNo: purchaseForm.invoiceNo || `BILL-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      supplier: purchaseForm.supplier,
      productName: purchaseForm.productName,
      qty,
      unit: purchaseForm.unit || 'Pcs',
      rate,
      totalAmount: qty * rate,
      status: 'Received in Store'
    };

    // Update product stock automatically
    setProducts(prev => prev.map(p => {
      if (p.name === purchaseForm.productName) {
        return { ...p, stock: p.stock + qty };
      }
      return p;
    }));

    setPurchases([newPo, ...purchases]);
    setIsPurchaseModalOpen(false);
    showToast(`Stock inward entry of ${qty} ${newPo.unit} saved and added to stock! 📥`, 'success');
  };

  const handleCreateSale = (e) => {
    e.preventDefault();
    const stu = students.find(s => s.id === saleForm.studentId);
    if (!stu) {
      showToast('Please select a student', 'warning');
      return;
    }
    const matchedPrd = products.find(p => p.name === saleForm.productName);
    const qty = Number(saleForm.qty) || 1;
    const unitPrice = matchedPrd?.unitPrice || 100;
    const total = qty * unitPrice;

    const newSale = {
      id: `SL-${Date.now().toString().slice(-4)}`,
      receiptNo: `POS-REC-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      studentName: stu.name,
      class: stu.class,
      items: `${qty}x ${saleForm.productName}`,
      totalAmount: total,
      paymentMode: saleForm.paymentMode
    };

    // Deduct stock
    setProducts(prev => prev.map(p => {
      if (p.name === saleForm.productName) {
        return { ...p, stock: Math.max(0, p.stock - qty) };
      }
      return p;
    }));

    setSales([newSale, ...sales]);
    setIsSaleModalOpen(false);
    showToast(`Store POS Sale of ₹${total.toLocaleString('en-IN')} recorded for ${stu.name}! 🛒`, 'success');

    // Auto open print receipt
    setSelectedSaleForPrint(newSale);
    setIsPrintReceiptModalOpen(true);
  };

  const handleCreateIssue = (e) => {
    e.preventDefault();
    const t = teachers.find(teach => teach.id === issueForm.staffId);
    if (!t) {
      showToast('Please select a teacher/staff member', 'warning');
      return;
    }
    const qty = Number(issueForm.qty) || 1;
    const newIssue = {
      id: `ISS-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      issuedTo: `${t.name} (${t.designation || 'Teacher'})`,
      department: t.department || 'Academics',
      productName: issueForm.productName,
      qty,
      unit: 'Pcs',
      purpose: issueForm.purpose || 'Official Campus Requirement',
      returnable: issueForm.returnable
    };

    // Deduct stock
    setProducts(prev => prev.map(p => {
      if (p.name === issueForm.productName) {
        return { ...p, stock: Math.max(0, p.stock - qty) };
      }
      return p;
    }));

    setIssues([newIssue, ...issues]);
    setIsIssueModalOpen(false);
    showToast(`Issued ${qty} units of ${issueForm.productName} to ${t.name}! 📤`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🧭 Top Inventory Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 print:hidden">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Package className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              SCHOOL STORE & INVENTORY MANAGEMENT
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Store Inventory & Stock Ledger
          </h2>
          <p className="text-xs text-slate-300 max-w-xl">
            Complete track of school uniforms, examination answer booklets, stationery, lab consumables, vendor purchase orders and student counter sales.
          </p>
        </div>

        {/* Stock KPI Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Active SKUs</span>
            <p className="text-lg font-black font-mono text-emerald-400">{products.length} Products</p>
            <span className="text-[9px] text-emerald-300 font-medium">Catalog Items</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Stock Valuation</span>
            <p className="text-lg font-black font-mono text-indigo-300">₹{totalStockValue.toLocaleString('en-IN')}</p>
            <span className="text-[9px] text-indigo-200 font-medium">In-Stock Value</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 space-y-0.5 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Low Stock Alert</span>
            <p className="text-lg font-black font-mono text-rose-400">{lowStockCount} Items</p>
            <span className="text-[9px] text-rose-300 font-medium">Reorder needed</span>
          </div>
        </div>
      </div>

      {/* 🧭 Top 8-Tab Navigation Bar (Exact match to old software) */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {[
            { id: 'product', label: '📦 Product', count: products.length },
            { id: 'category', label: '🏷️ Category', count: categories.length },
            { id: 'store', label: '🏪 Store', count: stores.length },
            { id: 'supplier', label: '🚚 Supplier', count: suppliers.length },
            { id: 'unit', label: '⚖️ Unit', count: units.length },
            { id: 'purchase', label: '📥 Purchase', count: purchases.length },
            { id: 'sales', label: '🛒 Sales (POS)', count: sales.length },
            { id: 'issue', label: '📤 Issue', count: issues.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📦 TAB 1: PRODUCT MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'product' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Package className="w-5 h-5 text-indigo-600" />
                Store Product Catalog & Stock Status ({products.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                School uniforms, notebooks, examination booklets, stationery and laboratory items
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-56">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search item, SKU or store..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                />
              </div>

              <select
                value={selectedCatFilter}
                onChange={(e) => setSelectedCatFilter(e.target.value)}
                className="p-1.5 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <option value="All">All Categories</option>
                {categories.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>

              <button
                onClick={() => setIsAddProductModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Plus className="w-4 h-4" /> Add Product
              </button>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">SKU / Code</th>
                  <th className="p-3.5">Product Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Storage Godown</th>
                  <th className="p-3.5 font-mono">Stock In Hand</th>
                  <th className="p-3.5 font-mono text-right">Sale Price (₹)</th>
                  <th className="p-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {products
                  .filter(p => selectedCatFilter === 'All' || p.category === selectedCatFilter)
                  .filter(p => !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(p => {
                    const isLowStock = p.stock <= p.reorderLevel;
                    return (
                      <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-indigo-600">{p.sku}</td>
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white">{p.name}</td>
                        <td className="p-3.5 text-slate-500 font-medium">{p.category}</td>
                        <td className="p-3.5 text-slate-600 dark:text-slate-400">{p.store}</td>
                        <td className="p-3.5 font-mono font-black text-slate-900 dark:text-white">
                          {p.stock} {p.unit}
                        </td>
                        <td className="p-3.5 font-mono font-black text-right text-emerald-600">
                          ₹{p.unitPrice?.toLocaleString('en-IN')}
                        </td>
                        <td className="p-3.5 text-center">
                          <Badge variant={isLowStock ? 'danger' : 'success'}>
                            {isLowStock ? '⚠️ Low Stock' : 'In Stock'}
                          </Badge>
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
      {/* 🏷️ TAB 2: CATEGORY MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'category' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-600" /> Item Category Master ({categories.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Classify store stock into Uniforms, Examination, Stationery, Sports, and Lab consumables
              </p>
            </div>
            <button
              onClick={() => setIsAddCategoryModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(cat => (
              <div
                key={cat.id}
                className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-indigo-400 transition-all"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md uppercase">
                    {cat.code}
                  </span>
                  <Badge variant="primary">{cat.count} SKUs</Badge>
                </div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">{cat.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏪 TAB 3: STORE MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'store' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-600" /> Store Rooms & Storage Locations ({stores.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Campus godowns, sales counters, science store rooms, and sports equipment rooms
              </p>
            </div>
            <button
              onClick={() => setIsAddStoreModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Store Location
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stores.map(st => (
              <div
                key={st.id}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-indigo-400 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md">
                      {st.code}
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white mt-1.5">{st.name}</h4>
                    <p className="text-xs text-slate-500">{st.location}</p>
                  </div>
                  <span className="font-mono font-bold text-xs text-slate-400">{st.totalItems} Items</span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
                  Store Incharge: <strong className="text-slate-900 dark:text-white">{st.incharge}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🚚 TAB 4: SUPPLIER MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'supplier' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Truck className="w-5 h-5 text-indigo-600" /> Supplier & Vendor Directory ({suppliers.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Authorized vendors for paper printing, uniforms, laboratory apparatus, and sports equipment
              </p>
            </div>
            <button
              onClick={() => setIsAddSupplierModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Supplier
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {suppliers.map(sup => (
              <div
                key={sup.id}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-indigo-400 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-black text-slate-900 dark:text-white">{sup.name}</h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">{sup.category}</p>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 font-bold">{sup.id}</span>
                </div>

                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  <div>Contact Person: <strong className="text-slate-900 dark:text-white">{sup.contact}</strong></div>
                  <div>Phone: <strong className="font-mono text-slate-800 dark:text-slate-200">{sup.phone}</strong></div>
                  <div>GSTIN: <strong className="font-mono text-slate-700 dark:text-slate-300">{sup.gstin}</strong></div>
                  <div className="text-[11px] text-slate-400 truncate">{sup.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⚖️ TAB 5: UNIT MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'unit' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-indigo-600" /> Measurement Units Master ({units.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Standard units for counting and packaging store inventory items
              </p>
            </div>
            <button
              onClick={() => setIsAddUnitModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Unit
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {units.map(u => (
              <div
                key={u.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{u.name}</h4>
                  <span className="text-[10px] text-slate-400 font-mono">{u.id}</span>
                </div>
                <Badge variant="primary">{u.code}</Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📥 TAB 6: PURCHASE (STOCK INWARD) */}
      {/* ========================================================================= */}
      {activeTab === 'purchase' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <ArrowDownLeft className="w-5 h-5 text-emerald-600" /> Stock Inward Purchases Register ({purchases.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Vendor purchase orders, incoming stock entries, and supplier bill tracking
              </p>
            </div>
            <button
              onClick={() => setIsPurchaseModalOpen(true)}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> New Inward Purchase
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">PO / Inward ID</th>
                  <th className="p-3.5">Bill / Invoice No</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Supplier Name</th>
                  <th className="p-3.5">Item Inward</th>
                  <th className="p-3.5 font-mono">Quantity</th>
                  <th className="p-3.5 font-mono text-right">Total (₹)</th>
                  <th className="p-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {purchases.map(po => (
                  <tr key={po.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{po.id}</td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{po.invoiceNo}</td>
                    <td className="p-3.5 font-mono text-slate-500">{po.date}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{po.supplier}</td>
                    <td className="p-3.5 text-slate-700 dark:text-slate-300 font-medium">{po.productName}</td>
                    <td className="p-3.5 font-mono font-bold">{po.qty} {po.unit}</td>
                    <td className="p-3.5 font-mono font-black text-right text-emerald-600">
                      ₹{po.totalAmount?.toLocaleString('en-IN')}
                    </td>
                    <td className="p-3.5 text-center">
                      <Badge variant="success">{po.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🛒 TAB 7: SALES (STUDENT STORE POS) */}
      {/* ========================================================================= */}
      {activeTab === 'sales' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-indigo-600" /> Student Store POS Sales Counter ({sales.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Direct sale of uniforms, notebooks, ties, belts and examination sets to students
              </p>
            </div>
            <button
              onClick={() => setIsSaleModalOpen(true)}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> New Store Sale (POS)
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Sale / Receipt No</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Items Purchased</th>
                  <th className="p-3.5">Payment Mode</th>
                  <th className="p-3.5 font-mono text-right">Amount (₹)</th>
                  <th className="p-3.5 text-right print:hidden">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {sales.map(sl => (
                  <tr key={sl.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{sl.receiptNo}</td>
                    <td className="p-3.5 font-mono text-slate-500">{sl.date}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{sl.studentName}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{sl.class}</td>
                    <td className="p-3.5 text-slate-700 dark:text-slate-300 font-medium">{sl.items}</td>
                    <td className="p-3.5 font-bold text-slate-600 dark:text-slate-300">{sl.paymentMode}</td>
                    <td className="p-3.5 font-mono font-black text-right text-emerald-600">
                      ₹{sl.totalAmount?.toLocaleString('en-IN')}
                    </td>
                    <td className="p-3.5 text-right print:hidden">
                      <button
                        onClick={() => {
                          setSelectedSaleForPrint(sl);
                          setIsPrintReceiptModalOpen(true);
                        }}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 text-indigo-600 rounded-lg font-bold text-[11px] inline-flex items-center gap-1"
                      >
                        <Printer className="w-3 h-3" /> Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📤 TAB 8: ISSUE (TO STAFF / DEPTS) */}
      {/* ========================================================================= */}
      {activeTab === 'issue' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-purple-600" /> Internal Material Issue Register ({issues.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Issue markers, chalk, lab chemicals, examination answer booklets, and sports kits to teachers & departments
              </p>
            </div>
            <button
              onClick={() => setIsIssueModalOpen(true)}
              className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Issue Item to Staff
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Issue ID</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Issued To (Staff Member)</th>
                  <th className="p-3.5">Department</th>
                  <th className="p-3.5">Item Name</th>
                  <th className="p-3.5 font-mono">Quantity</th>
                  <th className="p-3.5">Purpose / Requirement</th>
                  <th className="p-3.5 text-center">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {issues.map(iss => (
                  <tr key={iss.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-purple-600">{iss.id}</td>
                    <td className="p-3.5 font-mono text-slate-500">{iss.date}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{iss.issuedTo}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{iss.department}</td>
                    <td className="p-3.5 font-semibold text-slate-800 dark:text-slate-200">{iss.productName}</td>
                    <td className="p-3.5 font-mono font-black text-slate-900 dark:text-white">{iss.qty} {iss.unit}</td>
                    <td className="p-3.5 text-slate-500 italic">{iss.purpose}</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={iss.returnable ? 'warning' : 'neutral'}>
                        {iss.returnable ? 'Returnable' : 'Consumable'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📦 MODAL: ADD PRODUCT */}
      {/* ========================================================================= */}
      {isAddProductModalOpen && (
        <Modal
          isOpen={isAddProductModalOpen}
          onClose={() => setIsAddProductModalOpen(false)}
          title="📦 Add New Inventory Product"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddProduct} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Product Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. School Woolen Sweater (Full Sleeves)"
                value={productForm.name}
                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">SKU / Item Code</label>
                <input
                  type="text"
                  placeholder="e.g. SWEAT-WOOL-01"
                  value={productForm.sku}
                  onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category *</label>
                <select
                  value={productForm.category}
                  onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  {categories.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Store / Godown</label>
                <select
                  value={productForm.store}
                  onChange={(e) => setProductForm({ ...productForm, store: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  {stores.map(s => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Unit</label>
                <select
                  value={productForm.unit}
                  onChange={(e) => setProductForm({ ...productForm, unit: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  {units.map(u => (
                    <option key={u.id} value={u.code}>{u.name} ({u.code})</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Sale Price (₹)</label>
                <input
                  type="number"
                  placeholder="550"
                  value={productForm.unitPrice}
                  onChange={(e) => setProductForm({ ...productForm, unitPrice: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Cost Price (₹)</label>
                <input
                  type="number"
                  placeholder="400"
                  value={productForm.purchasePrice}
                  onChange={(e) => setProductForm({ ...productForm, purchasePrice: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Opening Stock</label>
                <input
                  type="number"
                  placeholder="50"
                  value={productForm.stock}
                  onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddProductModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                + Add Product
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
          title="🏷️ Add Inventory Category"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddCategory} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Library Reference Material"
                value={categoryForm.name}
                onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Short Code</label>
              <input
                type="text"
                placeholder="e.g. LIB-REF"
                value={categoryForm.code}
                onChange={(e) => setCategoryForm({ ...categoryForm, code: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono uppercase"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Description</label>
              <input
                type="text"
                placeholder="e.g. Reference books and educational journals"
                value={categoryForm.desc}
                onChange={(e) => setCategoryForm({ ...categoryForm, desc: e.target.value })}
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
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Create Category
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 📥 MODAL: NEW INWARD PURCHASE */}
      {/* ========================================================================= */}
      {isPurchaseModalOpen && (
        <Modal
          isOpen={isPurchaseModalOpen}
          onClose={() => setIsPurchaseModalOpen(false)}
          title="📥 Record Stock Inward Purchase"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleCreatePurchase} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Supplier / Vendor *</label>
              <select
                value={purchaseForm.supplier}
                onChange={(e) => setPurchaseForm({ ...purchaseForm, supplier: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              >
                {suppliers.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Vendor Bill / Invoice No</label>
                <input
                  type="text"
                  placeholder="e.g. INV-9901"
                  value={purchaseForm.invoiceNo}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, invoiceNo: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Product *</label>
                <select
                  value={purchaseForm.productName}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, productName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Inward Quantity *</label>
                <input
                  type="number"
                  required
                  placeholder="100"
                  value={purchaseForm.qty}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, qty: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Purchase Rate / Unit (₹) *</label>
                <input
                  type="number"
                  required
                  placeholder="15"
                  value={purchaseForm.rate}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, rate: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsPurchaseModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                Save Inward & Update Stock
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 🛒 MODAL: NEW STORE POS SALE */}
      {/* ========================================================================= */}
      {isSaleModalOpen && (
        <Modal
          isOpen={isSaleModalOpen}
          onClose={() => setIsSaleModalOpen(false)}
          title="🛒 Record Student Store Sale (POS)"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleCreateSale} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Student *</label>
              <select
                required
                value={saleForm.studentId}
                onChange={(e) => setSaleForm({ ...saleForm, studentId: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                <option value="">-- Choose Student --</option>
                {students.slice(0, 50).map(s => (
                  <option key={s.id} value={s.id}>{s.name} • Class {s.class} (Roll #{s.rollNo})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Item to Sell *</label>
              <select
                value={saleForm.productName}
                onChange={(e) => setSaleForm({ ...saleForm, productName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {products.map(p => (
                  <option key={p.id} value={p.name}>{p.name} • (₹{p.unitPrice} / {p.unit})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={saleForm.qty}
                  onChange={(e) => setSaleForm({ ...saleForm, qty: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Payment Mode</label>
                <select
                  value={saleForm.paymentMode}
                  onChange={(e) => setSaleForm({ ...saleForm, paymentMode: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  <option value="Cash">💵 Cash Counter</option>
                  <option value="UPI">📱 UPI / QR Code</option>
                  <option value="Adjust in Fee Ledger">💳 Adjust in Fee Ledger</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsSaleModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                Complete Sale & Print Receipt
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 📤 MODAL: ISSUE ITEM TO STAFF */}
      {/* ========================================================================= */}
      {isIssueModalOpen && (
        <Modal
          isOpen={isIssueModalOpen}
          onClose={() => setIsIssueModalOpen(false)}
          title="📤 Issue Material to Teacher / Department"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleCreateIssue} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Staff Member / Teacher *</label>
              <select
                required
                value={issueForm.staffId}
                onChange={(e) => setIssueForm({ ...issueForm, staffId: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                <option value="">-- Choose Teacher / Staff --</option>
                {teachers.map(t => (
                  <option key={t.id} value={t.id}>{t.name} ({t.designation || 'Faculty'} • {t.department})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Item to Issue *</label>
                <select
                  value={issueForm.productName}
                  onChange={(e) => setIssueForm({ ...issueForm, productName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.name}>{p.name} (Stock: {p.stock})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={issueForm.qty}
                  onChange={(e) => setIssueForm({ ...issueForm, qty: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Purpose / Requirement Note</label>
              <input
                type="text"
                placeholder="e.g. Board markers for Class 10th and 12th classrooms"
                value={issueForm.purpose}
                onChange={(e) => setIssueForm({ ...issueForm, purpose: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="returnable"
                checked={issueForm.returnable}
                onChange={(e) => setIssueForm({ ...issueForm, returnable: e.target.checked })}
                className="rounded text-indigo-600"
              />
              <label htmlFor="returnable" className="font-bold text-slate-700 dark:text-slate-300">
                Item is Returnable (e.g. Lab Kit / Sports Apparatus)
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsIssueModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                Issue Item
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 🧾 MODAL: PRINT POS SALE RECEIPT */}
      {/* ========================================================================= */}
      {isPrintReceiptModalOpen && selectedSaleForPrint && (
        <Modal
          isOpen={isPrintReceiptModalOpen}
          onClose={() => setIsPrintReceiptModalOpen(false)}
          title="🧾 School Store POS Sale Receipt"
          maxWidth="max-w-md"
        >
          <div className="space-y-4 text-xs font-sans">
            <div className="border-2 border-slate-900 dark:border-slate-100 p-5 rounded-2xl bg-white text-slate-900 space-y-3">
              <div className="text-center border-b border-slate-300 pb-2">
                <h3 className="text-base font-black uppercase">{schoolInfo.name}</h3>
                <p className="text-[10px] text-slate-500">{schoolInfo.tagline} • Phone: {schoolInfo.phone}</p>
                <span className="inline-block mt-1 px-3 py-0.5 bg-slate-900 text-white rounded text-[10px] font-black uppercase">
                  STORE CASH RECEIPT
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1 text-[11px]">
                <div>Receipt: <strong className="font-mono">{selectedSaleForPrint.receiptNo}</strong></div>
                <div className="text-right">Date: <strong className="font-mono">{selectedSaleForPrint.date}</strong></div>
                <div>Student: <strong>{selectedSaleForPrint.studentName}</strong></div>
                <div className="text-right">Class: <strong>{selectedSaleForPrint.class}</strong></div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-500 font-bold block mb-1">Particulars:</span>
                <p className="font-bold text-slate-900">{selectedSaleForPrint.items}</p>
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-600">Total Paid:</span>
                  <span className="font-mono font-black text-base text-emerald-600">
                    ₹{selectedSaleForPrint.totalAmount?.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="text-center text-[10px] text-slate-400 pt-2 border-t border-dashed border-slate-300">
                Thank you! Items once sold can only be exchanged within 3 days with tags intact.
              </div>
            </div>

            <div className="flex justify-end gap-2 print:hidden">
              <button
                type="button"
                onClick={() => setIsPrintReceiptModalOpen(false)}
                className="px-4 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print Receipt
              </button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};

export default InventoryStorePage;
