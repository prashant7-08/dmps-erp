import React, { useState } from 'react';
import {
  ShoppingBag,
  Barcode,
  Search,
  Plus,
  Trash2,
  Printer,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  QrCode,
  RotateCcw,
  Tag,
  CreditCard,
  DollarSign,
  Package,
  Layers,
  Utensils
} from 'lucide-react';
import { Breadcrumb } from '../../components/layout/Breadcrumb';
import { useToast } from '../../components/common/Toast';

const RETAIL_PRODUCTS = [
  { id: '8901030001', name: 'Tata Tea Gold 500g', category: 'Grocery', mrp: 340, rate: 310, barcode: '8901030001', stock: 65, tax: 5 },
  { id: '8901030002', name: 'Aashirvaad Shudh Chakki Atta 5kg', category: 'Grocery', mrp: 260, rate: 245, barcode: '8901030002', stock: 40, tax: 0 },
  { id: '8901030003', name: 'Amul Butter Pasteurised 500g', category: 'Dairy', mrp: 285, rate: 275, barcode: '8901030003', stock: 25, tax: 12 },
  { id: '8901030004', name: 'Fortune Sunlite Refined Oil 1L', category: 'Grocery', mrp: 155, rate: 142, barcode: '8901030004', stock: 80, tax: 5 },
  { id: '8901030005', name: 'Cadbury Dairy Milk Silk 150g', category: 'Snacks', mrp: 180, rate: 165, barcode: '8901030005', stock: 50, tax: 18 },
  { id: '8901030006', name: 'Surf Excel Quick Wash 1kg', category: 'Household', mrp: 160, rate: 148, barcode: '8901030006', stock: 95, tax: 18 },
  { id: '8901030007', name: 'Dettol Original Liquid Handwash 750ml', category: 'Personal Care', mrp: 125, rate: 109, barcode: '8901030007', stock: 35, tax: 18 },
  { id: '8901030008', name: 'Britannia Good Day Butter 600g', category: 'Snacks', mrp: 130, rate: 115, barcode: '8901030008', stock: 70, tax: 12 }
];

export const RetailSupermarketPOSApp = ({ onNavigate }) => {
  const { showToast } = useToast();

  const [barcodeInput, setBarcodeInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [cart, setCart] = useState([
    { ...RETAIL_PRODUCTS[0], qty: 1 },
    { ...RETAIL_PRODUCTS[2], qty: 2 }
  ]);

  const [customerPhone, setCustomerPhone] = useState('9876543210');
  const [customerName, setCustomerName] = useState('Amit Kumar');
  const [paymentMode, setPaymentMode] = useState('Cash');
  const [cashTendered, setCashTendered] = useState(1000);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const [invoiceNumber] = useState(() => `BILL-${Math.floor(100000 + Math.random() * 900000)}`);
  const [invoiceDate] = useState(() => new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }));

  const categories = ['ALL', 'Grocery', 'Dairy', 'Snacks', 'Household', 'Personal Care'];

  const filteredProducts = RETAIL_PRODUCTS.filter((p) => {
    const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.barcode.includes(searchQuery);
    return matchCat && matchSearch;
  });

  const handleBarcodeSubmit = (e) => {
    e.preventDefault();
    if (!barcodeInput.trim()) return;
    const found = RETAIL_PRODUCTS.find(p => p.barcode === barcodeInput.trim() || p.id === barcodeInput.trim());
    if (found) {
      addToCart(found);
      setBarcodeInput('');
    } else {
      showToast('❌ Product not found for this barcode', 'error');
    }
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    showToast(`Billed ${product.name}`, 'info');
  };

  const updateQty = (id, newQty) => {
    if (newQty <= 0) {
      setCart(cart.filter(item => item.id !== id));
      return;
    }
    setCart(cart.map(item => item.id === id ? { ...item, qty: newQty } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.rate * item.qty), 0);
  const mrpTotal = cart.reduce((acc, item) => acc + (item.mrp * item.qty), 0);
  const totalSavings = mrpTotal - subtotal;
  const taxAmount = cart.reduce((acc, item) => acc + ((item.rate * item.qty * item.tax) / 100), 0);
  const grandTotal = Math.round(subtotal);
  const changeDue = Math.max(0, cashTendered - grandTotal);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Standalone Software', page: 'services/retail-billing' },
          { label: 'Supermarket & Retail Barcode POS Suite' }
        ]}
        onNavigate={onNavigate}
      />

      {/* App Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center shadow-md">
            <ShoppingBag className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-900">PKR SuperMarket POS • High-Speed Barcode Counter</h1>
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold border border-orange-300">
                POS Ready
              </span>
            </div>
            <p className="text-xs text-slate-500">Live Interactive Standalone Point-of-Sale System (Barcode Scanner, 3-Inch Thermal Print & Cash Drawer)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setCart([]);
              showToast('New Customer Bill cleared', 'info');
            }}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>New Counter Bill (F2)</span>
          </button>

          <button
            onClick={() => {
              const text = encodeURIComponent("Hello PKR EDUTECH! I want to purchase the Standalone Supermarket / Retail POS Software.");
              window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
            }}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Buy POS Software (₹ 3,999)</span>
          </button>
        </div>
      </div>

      {/* Main POS Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col (Products Catalog & Barcode Scanner): 7 Cols */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            
            {/* Barcode Scanner Bar */}
            <form onSubmit={handleBarcodeSubmit} className="space-y-1">
              <label className="block text-xs font-bold text-slate-700">
                Scan / Enter Product Barcode (e.g. 8901030001)
              </label>
              <div className="relative">
                <Barcode className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Scan barcode with handheld scanner or type barcode and press Enter..."
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                  className="w-full pl-11 pr-24 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Scan (Enter)
                </button>
              </div>
            </form>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Quick-Click Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-[420px] overflow-y-auto pr-1">
              {filteredProducts.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => addToCart(prod)}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:border-orange-300 border border-slate-200 text-left transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase">{prod.category}</span>
                    <h4 className="font-bold text-xs text-slate-900 line-clamp-2 mt-0.5 group-hover:text-orange-950">
                      {prod.name}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-black text-xs text-slate-900">₹ {prod.rate}</div>
                      <div className="text-[9px] text-slate-400 line-through">MRP ₹{prod.mrp}</div>
                    </div>
                    <span className="p-1 rounded-lg bg-orange-100 text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Right Col (POS Register Bill Cart): 5 Cols */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-orange-600" />
                  Cashier Counter Bill
                </h3>
                <span className="text-[11px] font-mono text-slate-500">{invoiceNumber} • {invoiceDate}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                {cart.length} Items
              </span>
            </div>

            {/* Customer Details */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Customer Mobile</label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Customer Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs">
                  Scan barcode or tap items on left to add to bill.
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-xs text-slate-900 truncate pr-2">{item.name}</div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">Qty:</span>
                        <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="px-2 py-0.5 hover:bg-slate-100 text-slate-700 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 font-bold text-slate-900">{item.qty}</span>
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
                <span>Total MRP Value:</span>
                <span className="text-slate-500 line-through">₹ {mrpTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-emerald-700">
                <span>Customer Total Savings:</span>
                <span>- ₹ {totalSavings.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-lg font-black text-slate-900">
                <span>Net Bill Total:</span>
                <span className="text-orange-700">₹ {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Cash Drawer & Payment Mode */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2">
                {['Cash', 'UPI', 'Card'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPaymentMode(mode)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      paymentMode === mode
                        ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {paymentMode === 'Cash' && (
                <div className="flex items-center justify-between p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-900 font-medium">Cash Given:</span>
                    <input
                      type="number"
                      value={cashTendered}
                      onChange={(e) => setCashTendered(Number(e.target.value))}
                      className="w-20 px-2 py-1 bg-white border border-amber-300 rounded font-bold text-slate-900"
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-amber-700 block">Change to Return:</span>
                    <strong className="text-sm font-black text-amber-950">₹ {changeDue}</strong>
                  </div>
                </div>
              )}

              <button
                disabled={cart.length === 0}
                onClick={() => setIsPrintModalOpen(true)}
                className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print POS Thermal Receipt</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Thermal Print Modal */}
      {isPrintModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-slate-200 shadow-2xl space-y-4">
            
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <h4 className="font-bold text-sm text-slate-900">3-Inch Supermarket Thermal Receipt</h4>
              <button
                onClick={() => setIsPrintModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Close ✕
              </button>
            </div>

            <div className="p-4 bg-slate-50 font-mono text-[11px] text-slate-800 rounded-xl border border-slate-300 space-y-2">
              <div className="text-center space-y-0.5">
                <h2 className="font-black text-sm text-slate-900">APNA MEGA SUPERMARKET</h2>
                <p className="text-[10px]">Main Market, Station Road, Lucknow</p>
                <p className="text-[10px]">GSTIN: 09ABCDE5678G1Z9</p>
                <div className="border-t border-dashed border-slate-400 my-1" />
              </div>

              <div className="flex justify-between text-[10px]">
                <span>Bill: {invoiceNumber}</span>
                <span>{invoiceDate}</span>
              </div>
              <div className="text-[10px]">
                <span>Customer: <strong>{customerName} ({customerPhone})</strong></span>
              </div>

              <div className="border-t border-dashed border-slate-400 my-1" />

              <div className="space-y-1">
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[9px] text-slate-500">{item.qty} x ₹{item.rate}</div>
                    </div>
                    <span className="font-bold">₹{(item.rate * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-slate-400 my-1" />

              <div className="space-y-0.5 text-right">
                <div>MRP Total: ₹ {mrpTotal.toFixed(2)}</div>
                <div className="font-bold text-emerald-700">You Saved: ₹ {totalSavings.toFixed(2)}</div>
                <div className="font-black text-sm pt-1 text-slate-900">PAID TOTAL: ₹ {grandTotal.toFixed(2)}</div>
                <div className="text-[10px] text-slate-600">Payment: {paymentMode}</div>
                {paymentMode === 'Cash' && <div>Cash Recd: ₹{cashTendered} | Change: ₹{changeDue}</div>}
              </div>

              <div className="border-t border-dashed border-slate-400 my-1 text-center text-[9px] pt-1">
                <p>🛒 Thank you for shopping with us!</p>
                <p>Visit Again soon.</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print POS Bill</span>
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

export default RetailSupermarketPOSApp;
