import React, { useState, useEffect } from 'react';
import {
  Pill,
  Search,
  Plus,
  Trash2,
  Printer,
  ShoppingBag,
  AlertTriangle,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Calendar,
  User,
  FileText,
  DollarSign,
  QrCode,
  RotateCcw,
  Zap,
  Building2,
  Clock
} from 'lucide-react';
import { Breadcrumb } from '../../../components/saas/layout/Breadcrumb';
import { useToast } from "../../../components/common/Toast";

const INITIAL_MEDICINES = [
  { id: 'MED01', name: 'Paracetamol 650mg (Dolo 650)', salt: 'Paracetamol IP', manufacturer: 'Micro Labs', batch: 'DL-9042', expiry: '2027-08', mrp: 30.50, rate: 26.00, gst: 12, stock: 180, schedule: 'OTC' },
  { id: 'MED02', name: 'Azithromycin 500mg (Azee 500)', salt: 'Azithromycin IP', manufacturer: 'Cipla Ltd', batch: 'AZ-4411', expiry: '2026-11', mrp: 119.00, rate: 105.00, gst: 12, stock: 45, schedule: 'H' },
  { id: 'MED03', name: 'Pantoprazole DSR (Pan-D)', salt: 'Pantoprazole + Domperidone', manufacturer: 'Alkem Labs', batch: 'PD-8820', expiry: '2027-05', mrp: 195.00, rate: 165.00, gst: 12, stock: 90, schedule: 'H' },
  { id: 'MED04', name: 'Amoxicillin & Pot. Clavulanate (Augmentin 625)', salt: 'Amoxicillin + Clavulanic Acid', manufacturer: 'GSK Pharma', batch: 'AG-1039', expiry: '2026-09', mrp: 204.00, rate: 180.00, gst: 12, stock: 32, schedule: 'H1' },
  { id: 'MED05', name: 'Cetirizine 10mg (Cetzine)', salt: 'Cetirizine Hydrochloride', manufacturer: 'Dr. Reddy Labs', batch: 'CZ-5591', expiry: '2028-01', mrp: 22.00, rate: 18.00, gst: 12, stock: 240, schedule: 'OTC' },
  { id: 'MED06', name: 'Montelukast + Levocetirizine (Montair-LC)', salt: 'Montelukast + Levocetirizine', manufacturer: 'Cipla Ltd', batch: 'ML-7721', expiry: '2027-04', mrp: 185.00, rate: 155.00, gst: 12, stock: 60, schedule: 'H' },
  { id: 'MED07', name: 'ORS Electrolyte Powder (Electral 21.8g)', salt: 'Oral Rehydration Salts IP', manufacturer: 'FDC Ltd', batch: 'EL-3390', expiry: '2027-12', mrp: 21.50, rate: 19.00, gst: 5, stock: 150, schedule: 'OTC' },
  { id: 'MED08', name: 'Vitamin C 500mg Chewable (Limcee)', salt: 'Ascorbic Acid IP', manufacturer: 'Abbott Healthcare', batch: 'LM-2201', expiry: '2026-04', mrp: 25.00, rate: 21.00, gst: 12, stock: 12, schedule: 'OTC' }
];

export const PharmacyChemistBillingApp = ({ onNavigate }) => {
  const { showToast } = useToast();

  const [inventory, setInventory] = useState(INITIAL_MEDICINES);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([
    { ...INITIAL_MEDICINES[0], qty: 2, discountPercent: 5 },
    { ...INITIAL_MEDICINES[2], qty: 1, discountPercent: 5 }
  ]);

  // Customer & Doctor Details
  const [customer, setCustomer] = useState({
    name: 'Rajesh Verma',
    phone: '9876543210',
    doctor: 'Dr. S. K. Gupta (MD Medicine)',
    paymentMode: 'UPI'
  });

  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [invoiceNumber] = useState(() => `INV-${Math.floor(100000 + Math.random() * 900000)}`);
  const [invoiceDate] = useState(() => new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }));

  const filteredMedicines = inventory.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.salt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.batch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (med) => {
    const existing = cart.find(item => item.id === med.id);
    if (existing) {
      setCart(cart.map(item => item.id === med.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...med, qty: 1, discountPercent: 0 }]);
    }
    showToast(`Added ${med.name} to bill`, 'info');
  };

  const updateQty = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item => item.id === id ? { ...item, qty: newQty } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.rate * item.qty), 0);
  const totalDiscount = cart.reduce((acc, item) => acc + ((item.rate * item.qty * (item.discountPercent || 0)) / 100), 0);
  const taxableAmount = subtotal - totalDiscount;
  const gstAmount = cart.reduce((acc, item) => {
    const itemTotal = item.rate * item.qty * (1 - (item.discountPercent || 0) / 100);
    return acc + ((itemTotal * item.gst) / 100);
  }, 0);
  const grandTotal = Math.round(taxableAmount + gstAmount);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Standalone Software', page: 'services/retail-billing' },
          { label: 'Chemist & Pharmacy GST POS Billing App' }
        ]}
        onNavigate={onNavigate}
      />

      {/* App Header Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-md">
            <Pill className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-900">PKR MediStore POS • Pharmacy Billing Suite</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                GST Ready
              </span>
            </div>
            <p className="text-xs text-slate-500">Live Interactive Standalone Medical Store Billing Sandbox (Batch No, Expiry & Schedule H1 Support)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setCart([]);
              showToast('New Prescription Bill cleared', 'info');
            }}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>New Bill (F2)</span>
          </button>

          <button
            onClick={() => {
              const text = encodeURIComponent("Hello PKR EDUTECH! I want to purchase the Standalone Chemist / Pharmacy POS Billing Software.");
              window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Buy This Software (₹ 4,999)</span>
          </button>
        </div>
      </div>

      {/* Main Billing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col (Medicine Catalog & Search): 7 Cols */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Search className="w-4 h-4 text-emerald-600" />
                  Medicine & Drug Inventory Search
                </h3>
                <p className="text-xs text-slate-500">Search by Brand, Salt composition or Batch number</p>
              </div>

              <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {inventory.length} Medicines in Store
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Type brand name (e.g. Dolo, Pan-D, Augmentin, Azee)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            {/* Medicines List */}
            <div className="divide-y divide-slate-100 max-h-[480px] overflow-y-auto pr-1">
              {filteredMedicines.map((med) => {
                const isNearExpiry = med.expiry.startsWith('2026-04') || med.expiry.startsWith('2026-09');
                return (
                  <div
                    key={med.id}
                    className="py-3 px-2 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-slate-900 truncate">{med.name}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          med.schedule === 'H1' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                          med.schedule === 'H' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                          'bg-emerald-100 text-emerald-800'
                        }`}>
                          Sch {med.schedule}
                        </span>
                        {isNearExpiry && (
                          <span className="text-[10px] font-bold bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded border border-rose-200">
                            ⚠️ Near Expiry ({med.expiry})
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-3 flex-wrap">
                        <span>Salt: <strong className="text-slate-700">{med.salt}</strong></span>
                        <span>• Batch: <strong className="text-slate-700 font-mono">{med.batch}</strong></span>
                        <span>• Stock: <strong className={med.stock < 20 ? 'text-rose-600' : 'text-emerald-700'}>{med.stock} pcs</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <div className="font-black text-sm text-slate-900">₹ {med.rate.toFixed(2)}</div>
                        <div className="text-[10px] text-slate-400 line-through">MRP ₹ {med.mrp.toFixed(2)}</div>
                      </div>

                      <button
                        onClick={() => addToCart(med)}
                        className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm flex items-center gap-1 text-xs font-bold"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Col (Active Bill Cart & Checkout): 5 Cols */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  Tax Invoice / Bill
                </h3>
                <span className="text-[11px] font-mono text-slate-500">{invoiceNumber} • {invoiceDate}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                {cart.length} Items
              </span>
            </div>

            {/* Customer & Doctor Input */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Patient / Customer</label>
                <input
                  type="text"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Prescribing Doctor</label>
                <input
                  type="text"
                  value={customer.doctor}
                  onChange={(e) => setCustomer({ ...customer, doctor: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
                />
              </div>
            </div>

            {/* Cart Table */}
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs">
                  No medicines added to bill yet. Click <strong>+ Add</strong> on left.
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-xs text-slate-900">{item.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">Batch: {item.batch} | Exp: {item.expiry} | GST: {item.gst}%</div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">Qty:</span>
                        <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="px-2 py-0.5 hover:bg-slate-100 text-slate-700 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2.5 font-bold text-slate-900">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="px-2 py-0.5 hover:bg-slate-100 text-slate-700 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="font-black text-slate-900">
                        ₹ {(item.rate * item.qty).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Calculations Summary */}
            <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal (Items Total):</span>
                <span className="font-semibold text-slate-800">₹ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount Allowed:</span>
                <span className="font-semibold text-emerald-600">- ₹ {totalDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST Tax (CGST + SGST):</span>
                <span className="font-semibold text-slate-800">+ ₹ {gstAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-base font-black text-slate-900">
                <span>Grand Total:</span>
                <span className="text-emerald-700">₹ {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Mode & Checkout Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                {['Cash', 'UPI', 'Card'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setCustomer({ ...customer, paymentMode: mode })}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      customer.paymentMode === mode
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              <button
                disabled={cart.length === 0}
                onClick={() => setIsPrintModalOpen(true)}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Thermal Receipt (F8)</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* 3-Inch Thermal Receipt Preview Modal */}
      {isPrintModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-slate-200 shadow-2xl space-y-4">
            
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <h4 className="font-bold text-sm text-slate-900">3-Inch Thermal Bill Preview</h4>
              <button
                onClick={() => setIsPrintModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Close ✕
              </button>
            </div>

            {/* Thermal Print Receipt Simulation (3-Inch Roll Format) */}
            <div className="p-4 bg-slate-50 font-mono text-[11px] text-slate-800 rounded-xl border border-slate-300 space-y-2">
              <div className="text-center space-y-0.5">
                <h2 className="font-black text-sm text-slate-900">SHREE KRISHNA PHARMACY</h2>
                <p className="text-[10px]">Medical Enclave, Civil Lines, Gorakhpur</p>
                <p className="text-[10px]">DL No: 20B/UP/4901 • GSTIN: 09AABCP1234F1Z5</p>
                <div className="border-t border-dashed border-slate-400 my-1" />
              </div>

              <div className="flex justify-between text-[10px]">
                <span>Bill: {invoiceNumber}</span>
                <span>{invoiceDate}</span>
              </div>
              <div className="text-[10px]">
                <div>Patient: <strong>{customer.name}</strong></div>
                <div>Dr: {customer.doctor}</div>
              </div>

              <div className="border-t border-dashed border-slate-400 my-1" />

              <div className="space-y-1">
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[9px] text-slate-500">B: {item.batch} | Exp: {item.expiry} | {item.qty} x {item.rate}</div>
                    </div>
                    <span className="font-bold">₹{(item.rate * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-slate-400 my-1" />

              <div className="space-y-0.5 text-right">
                <div>Subtotal: ₹ {subtotal.toFixed(2)}</div>
                <div>Discount: -₹ {totalDiscount.toFixed(2)}</div>
                <div>GST: +₹ {gstAmount.toFixed(2)}</div>
                <div className="font-black text-sm pt-1 text-slate-900">NET PAYABLE: ₹ {grandTotal.toFixed(2)}</div>
                <div className="text-[10px] text-slate-600">Paid via: {customer.paymentMode}</div>
              </div>

              <div className="border-t border-dashed border-slate-400 my-1 text-center text-[9px] pt-1">
                <p>💊 Medicines once sold cannot be returned without bill.</p>
                <p>Thank you! Get well soon.</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Send to Thermal Printer</span>
              </button>
              <button
                onClick={() => setIsPrintModalOpen(false)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default PharmacyChemistBillingApp;
