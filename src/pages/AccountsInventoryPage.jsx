import React, { useState, useEffect } from 'react';
import {
  DollarSign,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  Receipt,
  FileText,
  Calendar,
  Filter,
  CheckCircle2,
  Trash2,
  Package,
  Layers,
  Tag,
  CreditCard,
  Search
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const AccountsInventoryPage = ({ initialTab = 'account' }) => {
  const { showToast } = useToast();
  const [inventory] = useState(schoolService.getInventory() || []);

  const resolveTab = (tab) => {
    if (!tab) return 'account';
    if (tab === 'office-account' || tab === 'account') return 'account';
    if (tab === 'office-deposit' || tab === 'deposit') return 'deposit';
    if (tab === 'office-expense' || tab === 'expense') return 'expense';
    if (tab === 'office-transactions' || tab === 'transactions') return 'transactions';
    if (tab === 'office-voucher' || tab === 'voucher') return 'voucher';
    if (tab === 'inventory') return 'inventory';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  // Bank & Cash Accounts
  const [accounts, setAccounts] = useState([
    { id: 'ACC-01', name: 'State Bank of India (Main Current A/C)', accountNo: '38920194821', branch: 'Jargwan Branch', ifsc: 'SBIN0001234', balance: 1425800, type: 'Bank Current' },
    { id: 'ACC-02', name: 'Punjab National Bank (Fees Collection A/C)', accountNo: '18492004819', branch: 'Ramghat Road', ifsc: 'PUNB0184900', balance: 945200, type: 'Bank Collection' },
    { id: 'ACC-03', name: 'School Central Cash Counter', accountNo: 'CASH-COUNTER-01', branch: 'Admin Block Ground Floor', ifsc: 'N/A', balance: 185400, type: 'Physical Cash' },
    { id: 'ACC-04', name: 'Principal Petty Cash Reserve', accountNo: 'PETTY-RESERVE-02', branch: 'Principal Office', ifsc: 'N/A', balance: 49620, type: 'Petty Cash' }
  ]);

  // Voucher Heads (Categories)
  const [voucherHeads, setVoucherHeads] = useState([
    { id: 'VH-01', name: 'Staff & Faculty Monthly Salaries', type: 'Expense', budget: '₹5,50,000 / mo', desc: 'Teaching & support staff payroll disbursals' },
    { id: 'VH-02', name: 'School Bus Diesel & Fleet Fuel', type: 'Expense', budget: '₹1,20,000 / mo', desc: 'Diesel fuel refills for 6 school buses & vans' },
    { id: 'VH-03', name: 'Electricity Bills & Generator Fuel', type: 'Expense', budget: '₹35,000 / mo', desc: 'UPPCL power grid & 25kVA generator diesel' },
    { id: 'VH-04', name: 'Campus Building & White-Wash Maintenance', type: 'Expense', budget: '₹40,000 / mo', desc: 'Classroom repairs, plumbing, painting' },
    { id: 'VH-05', name: 'Examination Papers & Stationary Printing', type: 'Expense', budget: '₹25,000 / mo', desc: 'Question papers, report cards, answer sheets' },
    { id: 'VH-06', name: 'Student Academic Fee Collections', type: 'Income', budget: '₹9,50,000 / mo', desc: 'Tuition and 11-month transport collections' },
    { id: 'VH-07', name: 'Government RTE Reimbursements & Grants', type: 'Income', budget: '₹2,00,000 / yr', desc: 'State education department RTE funds' }
  ]);

  // All Transactions
  const [transactions, setTransactions] = useState([
    { id: 'TXN-01', date: '2026-08-31', type: 'Income', head: 'Student Academic Fee Collections', account: 'Punjab National Bank', amount: 381300, ref: 'POS/BATCH/AUG-31', party: 'Various Students (POS)', remarks: 'Term 2 Fee Collections' },
    { id: 'TXN-02', date: '2026-08-27', type: 'Expense', head: 'School Bus Diesel & Fleet Fuel', account: 'State Bank of India', amount: 142800, ref: 'VCH-2026-089', party: 'Kisan Fuel Center (Ramghat)', remarks: 'August Fleet Diesel Refills' },
    { id: 'TXN-03', date: '2026-08-25', type: 'Expense', head: 'Electricity Bills & Generator Fuel', account: 'School Central Cash Counter', amount: 28400, ref: 'VCH-2026-082', party: 'UPPCL Bulandshahr', remarks: 'August Power Grid Bill' },
    { id: 'TXN-04', date: '2026-08-24', type: 'Income', head: 'Student Academic Fee Collections', account: 'School Central Cash Counter', amount: 75000, ref: 'POS/CASH/AUG-24', party: 'Parent Cash Deposits', remarks: 'Late Fee Settlements' },
    { id: 'TXN-05', date: '2026-08-21', type: 'Expense', head: 'Examination Papers & Stationary Printing', account: 'Principal Petty Cash Reserve', amount: 12500, ref: 'VCH-2026-078', party: 'Agrawal Printers Aligarh', remarks: 'Term 1 Exam Papers' }
  ]);

  // Modals & Form
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  const [depositForm, setDepositForm] = useState({
    amount: '',
    head: 'Student Academic Fee Collections',
    account: 'Punjab National Bank (Fees Collection A/C)',
    party: '',
    ref: '',
    remarks: ''
  });

  const [expenseForm, setExpenseForm] = useState({
    amount: '',
    head: 'School Bus Diesel & Fleet Fuel',
    account: 'State Bank of India (Main Current A/C)',
    party: '',
    ref: '',
    remarks: ''
  });

  const handleCreateDeposit = (e) => {
    e.preventDefault();
    if (!depositForm.amount) return;
    const newTxn = {
      id: `TXN-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Income',
      head: depositForm.head,
      account: depositForm.account,
      amount: Number(depositForm.amount),
      ref: depositForm.ref || `DEP-${Date.now().toString().slice(-4)}`,
      party: depositForm.party || 'Anonymous Donor/Grant',
      remarks: depositForm.remarks
    };
    setTransactions([newTxn, ...transactions]);
    setIsDepositModalOpen(false);
    showToast(`Deposit of ₹${Number(depositForm.amount).toLocaleString('en-IN')} recorded!`, 'success');
  };

  const handleCreateExpense = (e) => {
    e.preventDefault();
    if (!expenseForm.amount) return;
    const newTxn = {
      id: `TXN-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Expense',
      head: expenseForm.head,
      account: expenseForm.account,
      amount: Number(expenseForm.amount),
      ref: expenseForm.ref || `VCH-${Date.now().toString().slice(-4)}`,
      party: expenseForm.party || 'Vendor / Contractor',
      remarks: expenseForm.remarks
    };
    setTransactions([newTxn, ...transactions]);
    setIsExpenseModalOpen(false);
    showToast(`Expense voucher of ₹${Number(expenseForm.amount).toLocaleString('en-IN')} recorded!`, 'success');
  };

  const totalBankBalance = accounts.reduce((acc, a) => acc + a.balance, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              <DollarSign className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              Office Accounting & Institutional Ledger
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Bank accounts, cash counters, expense vouchers, revenue deposits, voucher heads, and store inventory.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDepositModalOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> New Deposit (Income)
          </button>
          <button
            onClick={() => setIsExpenseModalOpen(true)}
            className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> New Expense (Voucher)
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max text-xs font-bold">
          {[
            { id: 'account', label: '🏛️ Accounts & Balances', count: accounts.length },
            { id: 'transactions', label: '📜 All Transactions', count: transactions.length },
            { id: 'voucher', label: '🏷️ Voucher Heads', count: voucherHeads.length },
            { id: 'inventory', label: '📦 Store Inventory', count: inventory.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600'}`}>{tab.count}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🏛️ TAB 1: ACCOUNTS & BALANCES */}
      {/* ========================================================================= */}
      {activeTab === 'account' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex justify-between items-center">
            <div>
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Total Institutional Liquid Balance</span>
              <p className="text-3xl font-black font-mono mt-1 text-emerald-400">₹{totalBankBalance.toLocaleString('en-IN')}</p>
              <span className="text-xs text-slate-400 mt-1 block">Across 2 Bank Accounts, Central Cash Counter & Petty Reserve</span>
            </div>
            <div className="text-right text-xs text-slate-300 space-y-1">
              <div>Bank Funds: <strong className="text-white font-mono">₹23,71,000</strong></div>
              <div>Physical Cash: <strong className="text-white font-mono">₹2,35,020</strong></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accounts.map(acc => (
              <div key={acc.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">{acc.type}</span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{acc.name}</h4>
                  </div>
                  <span className="font-mono font-black text-lg text-emerald-600">₹{acc.balance.toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 font-mono space-y-0.5">
                  <div>Account No: <strong className="text-slate-800 dark:text-slate-200">{acc.accountNo}</strong></div>
                  <div>Branch / Location: {acc.branch}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📜 TAB 2: ALL TRANSACTIONS */}
      {/* ========================================================================= */}
      {activeTab === 'transactions' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">Institutional Cashbook Journal</h3>
              <p className="text-xs text-slate-500">Live journal entries for fee revenues, vendor payments, and operational bills</p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Txn ID</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Type</th>
                  <th className="p-3.5">Voucher Head</th>
                  <th className="p-3.5">Account</th>
                  <th className="p-3.5">Party / Remarks</th>
                  <th className="p-3.5 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {transactions.map(t => (
                  <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-slate-500">{t.id}</td>
                    <td className="p-3.5 font-mono text-slate-500">{t.date}</td>
                    <td className="p-3.5">
                      <Badge variant={t.type === 'Income' ? 'success' : 'danger'}>{t.type}</Badge>
                    </td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{t.head}</td>
                    <td className="p-3.5 text-slate-500">{t.account}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400 text-[11px] max-w-xs">{t.party} • {t.remarks}</td>
                    <td className={`p-3.5 font-mono font-black text-right ${t.type === 'Income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {t.type === 'Income' ? '+' : '-'}₹{t.amount.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏷️ TAB 3: VOUCHER HEADS */}
      {/* ========================================================================= */}
      {activeTab === 'voucher' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-indigo-600" /> Voucher Head Master (Income & Expense Categories)
            </h3>
            <p className="text-xs text-slate-500">Configure accounting budget heads for automated auditing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {voucherHeads.map(vh => (
              <div key={vh.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-indigo-600">{vh.id}</span>
                  <Badge variant={vh.type === 'Income' ? 'success' : 'danger'}>{vh.type}</Badge>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{vh.name}</h4>
                <p className="text-xs text-slate-500">{vh.desc}</p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  Monthly Budget: {vh.budget}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📦 TAB 4: STORE INVENTORY */}
      {/* ========================================================================= */}
      {activeTab === 'inventory' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Package className="w-5 h-5 text-indigo-600" /> Store Inventory & Low-Stock Alerts
            </h3>
            <p className="text-xs text-slate-500">School uniforms, notebooks, answer sheets, cleaning chemicals, and stationery</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">SKU / Item ID</th>
                  <th className="p-3.5">Item Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Quantity In Stock</th>
                  <th className="p-3.5">Unit Price</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {inventory.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-slate-500">{item.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{item.name}</td>
                    <td className="p-3.5 text-slate-500">{item.category}</td>
                    <td className="p-3.5 font-mono font-bold">{item.quantity} {item.unit || 'Units'}</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-600">₹{item.unitPrice?.toLocaleString('en-IN')}</td>
                    <td className="p-3.5">
                      <Badge variant={item.quantity > 20 ? 'success' : 'warning'}>
                        {item.quantity > 20 ? 'In Stock' : 'Low Stock Alert'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal: New Deposit */}
      {isDepositModalOpen && (
        <Modal
          isOpen={isDepositModalOpen}
          onClose={() => setIsDepositModalOpen(false)}
          title="Record Revenue / Deposit Transaction"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleCreateDeposit} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Deposit Amount (₹) *</label>
              <input
                type="number"
                required
                placeholder="e.g. 50000"
                value={depositForm.amount}
                onChange={(e) => setDepositForm({ ...depositForm, amount: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Voucher Revenue Head *</label>
              <select
                value={depositForm.head}
                onChange={(e) => setDepositForm({ ...depositForm, head: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              >
                <option value="Student Academic Fee Collections">Student Academic Fee Collections</option>
                <option value="Government RTE Reimbursements & Grants">Government RTE Reimbursements & Grants</option>
                <option value="Prospectus & Form Sales">Prospectus & Form Sales</option>
                <option value="Other Institutional Inflow">Other Institutional Inflow</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Deposit To Account *</label>
              <select
                value={depositForm.account}
                onChange={(e) => setDepositForm({ ...depositForm, account: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              >
                {accounts.map(a => (
                  <option key={a.id} value={a.name}>{a.name}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsDepositModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Save Deposit
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Modal: New Expense */}
      {isExpenseModalOpen && (
        <Modal
          isOpen={isExpenseModalOpen}
          onClose={() => setIsExpenseModalOpen(false)}
          title="Issue Expense Voucher"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleCreateExpense} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Expense Amount (₹) *</label>
              <input
                type="number"
                required
                placeholder="e.g. 15000"
                value={expenseForm.amount}
                onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-rose-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Voucher Expense Head *</label>
              <select
                value={expenseForm.head}
                onChange={(e) => setExpenseForm({ ...expenseForm, head: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              >
                <option value="School Bus Diesel & Fleet Fuel">School Bus Diesel & Fleet Fuel</option>
                <option value="Electricity Bills & Generator Fuel">Electricity Bills & Generator Fuel</option>
                <option value="Campus Building & White-Wash Maintenance">Campus Building & White-Wash Maintenance</option>
                <option value="Examination Papers & Stationary Printing">Examination Papers & Stationary Printing</option>
                <option value="Staff & Faculty Monthly Salaries">Staff & Faculty Monthly Salaries</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Pay From Account *</label>
              <select
                value={expenseForm.account}
                onChange={(e) => setExpenseForm({ ...expenseForm, account: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              >
                {accounts.map(a => (
                  <option key={a.id} value={a.name}>{a.name}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsExpenseModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow"
              >
                Issue Expense Voucher
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};

export default AccountsInventoryPage;
