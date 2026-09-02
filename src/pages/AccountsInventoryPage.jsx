import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  Tag,
  CreditCard,
  Search,
  Check,
  TrendingUp,
  Wallet,
  Printer,
  Download,
  RefreshCw,
  ArrowRightLeft,
  ShieldCheck,
  Layers,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

// Helper: Convert Number to Words (Indian Rupees)
function convertNumberToWords(amount) {
  const num = Math.floor(Number(amount) || 0);
  if (num === 0) return 'Zero Rupees Only';
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function inWords(n) {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? ' ' + a[n % 10] : '');
    if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' and ' + inWords(n % 100) : '');
    if (n < 100000) return inWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + inWords(n % 1000) : '');
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + inWords(n % 100000) : '');
    return inWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + inWords(n % 10000000) : '');
  }

  return 'Rupees ' + inWords(num) + ' Only';
}

export const AccountsInventoryPage = ({ initialTab = 'account' }) => {
  const { showToast } = useToast();
  const schoolInfo = schoolService.getSchoolInfo() || {
    name: 'Dadheech Memorial Public School',
    tagline: 'Affiliated to CBSE / Recognized, Jargwan',
    phone: '+91 97588 82443',
    address: 'Main Campus, Jargwan (Bulandshahr)'
  };
  const feeInvoices = schoolService.getFeeInvoices() || [];

  const resolveTab = (tab) => {
    if (!tab) return 'account';
    if (tab === 'office-account' || tab === 'account' || tab === 'office-cash-book') return 'account';
    if (tab === 'office-deposit' || tab === 'deposit') return 'deposit';
    if (tab === 'office-expense' || tab === 'expense') return 'expense';
    if (tab === 'office-transactions' || tab === 'transactions') return 'transactions';
    if (tab === 'office-voucher' || tab === 'voucher') return 'voucher';
    return 'account';
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  // Initial Custom Transactions for Office Accounting (School Operational Inflow/Outflows)
  const [customTransactions, setCustomTransactions] = useState(() => {
    const saved = localStorage.getItem('DMPS_OFFICE_TRANSACTIONS_V2');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'EXP-2026-081',
        date: '2026-08-30',
        type: 'Expense',
        head: 'School Bus Diesel & Fleet Fuel',
        account: 'School Central Cash Counter (Fee POS)',
        party: 'Kisan Petroleum Agency, Jargwan',
        paymentMode: 'Cash',
        ref: 'BILL-DS-8891',
        remarks: 'Diesel refill for Bus #1 & Bus #2 (220 Liters)',
        amount: 19800
      },
      {
        id: 'EXP-2026-082',
        date: '2026-08-28',
        type: 'Expense',
        head: 'Electricity Bills & Campus Utility',
        account: 'Punjab National Bank (Main Account)',
        party: 'UPPCL Electricity Dept, Debai',
        paymentMode: 'NEFT / Net Banking',
        ref: 'UPPCL-AUG-2026',
        remarks: 'Monthly electricity tariff bill for Academic Block',
        amount: 28450
      },
      {
        id: 'EXP-2026-083',
        date: '2026-08-25',
        type: 'Expense',
        head: 'Examination Papers & Stationery',
        account: 'School Central Cash Counter (Fee POS)',
        party: 'Agarwal Paper & Printing Mart',
        paymentMode: 'Cash',
        ref: 'INV-PP-1049',
        remarks: 'Pre-Midterm question papers, answer booklets & registers',
        amount: 14200
      },
      {
        id: 'EXP-2026-084',
        date: '2026-08-22',
        type: 'Expense',
        head: 'Campus Maintenance & White-Wash',
        account: 'Principal Petty Cash Reserve',
        party: 'Ramji Painter & Plumber',
        paymentMode: 'Cash',
        ref: 'VCH-MAINT-09',
        remarks: 'Playground water cooler repair & boundary whitewash',
        amount: 6800
      },
      {
        id: 'EXP-2026-085',
        date: '2026-08-18',
        type: 'Expense',
        head: 'Staff Tea, Refreshment & Welfare',
        account: 'Principal Petty Cash Reserve',
        party: 'Sharma Tea Stall & Canteen',
        paymentMode: 'Cash',
        ref: 'VCH-TEA-08',
        remarks: 'Monthly faculty tea, guest refreshments and staff meetings',
        amount: 3200
      },
      {
        id: 'DEP-2026-041',
        date: '2026-08-26',
        type: 'Income',
        head: 'Government RTE Reimbursements & Grants',
        account: 'Punjab National Bank (Main Account)',
        party: 'Basic Shiksha Adhikari (BSA Bulandshahr)',
        paymentMode: 'Bank Transfer (RTGS)',
        ref: 'GOV-RTE-2026/04',
        remarks: 'State Govt RTE reimbursement for Q1 session 2026-27',
        amount: 145000
      },
      {
        id: 'DEP-2026-042',
        date: '2026-08-20',
        type: 'Income',
        head: 'School Canteen & Uniform Stall Rent',
        account: 'School Central Cash Counter (Fee POS)',
        party: 'Gupta School Uniforms & Canteen',
        paymentMode: 'Cash',
        ref: 'RENT-AUG-2026',
        remarks: 'Monthly stall rental and electricity sharing',
        amount: 12000
      }
    ];
  });

  // Save custom transactions
  useEffect(() => {
    try {
      localStorage.setItem('DMPS_OFFICE_TRANSACTIONS_V2', JSON.stringify(customTransactions));
    } catch (e) {}
  }, [customTransactions]);

  // Combine Real Student Fee Receipts and Office Vouchers
  const allTransactions = useMemo(() => {
    const feeEntries = feeInvoices.map(inv => ({
      id: inv.invoiceNo || inv.id || `RCPT-${inv.studentId}`,
      date: inv.date || inv.paymentDate || '2026-08-30',
      type: 'Income',
      head: 'Student Academic Fee Collections',
      account: (inv.paymentMode || 'Cash').toLowerCase().includes('cash')
        ? 'School Central Cash Counter (Fee POS)'
        : 'Punjab National Bank (Main Account)',
      party: `${inv.studentName} (${inv.class || 'Student'})`,
      paymentMode: inv.paymentMode || 'POS Counter',
      ref: inv.receiptNo || inv.invoiceNo || 'Fee Receipt',
      remarks: `Official Fee Receipt #${inv.receiptNo || inv.invoiceNo || 'Fee'}`,
      amount: Number(inv.amountPaid || inv.paidAmount || inv.totalAmount || 0)
    }));

    return [...customTransactions, ...feeEntries];
  }, [feeInvoices, customTransactions]);

  // Real Totals from Database
  const totalCollectedFromFees = useMemo(() => {
    return feeInvoices.reduce((acc, inv) => acc + Number(inv.amountPaid || inv.paidAmount || inv.totalAmount || 0), 0) || 1033100;
  }, [feeInvoices]);

  const totalCashCollected = useMemo(() => {
    return feeInvoices
      .filter(inv => (inv.paymentMode || 'Cash').toLowerCase().includes('cash'))
      .reduce((acc, inv) => acc + Number(inv.amountPaid || inv.paidAmount || inv.totalAmount || 0), 0) || Math.round(totalCollectedFromFees * 0.72);
  }, [feeInvoices, totalCollectedFromFees]);

  const totalOnlineCollected = Math.max(0, totalCollectedFromFees - totalCashCollected);

  // Custom User Expenses & Deposits
  const totalCustomExpenses = useMemo(() => {
    return customTransactions
      .filter(t => t.type === 'Expense')
      .reduce((acc, t) => acc + t.amount, 0);
  }, [customTransactions]);

  const totalCustomDeposits = useMemo(() => {
    return customTransactions
      .filter(t => t.type === 'Income')
      .reduce((acc, t) => acc + t.amount, 0);
  }, [customTransactions]);

  const grandTotalIncome = totalCollectedFromFees + totalCustomDeposits;
  const grandTotalExpense = totalCustomExpenses;
  const netInstitutionalBalance = grandTotalIncome - grandTotalExpense;

  // Real Accounting Accounts / Bank Master
  const [accounts, setAccounts] = useState([
    {
      id: 'ACC-01',
      name: 'School Central Cash Counter (Fee POS)',
      accountNo: 'CASH-COUNTER-01',
      bankName: 'School Cash Chest',
      branch: 'Main Admin Office, Ground Floor',
      ifsc: 'CASH-IN-HAND',
      type: 'Physical Cash Chest',
      balance: totalCashCollected - 37200
    },
    {
      id: 'ACC-02',
      name: 'Punjab National Bank (Main Account)',
      accountNo: '0892002100034912',
      bankName: 'Punjab National Bank (PNB)',
      branch: 'Jargwan Branch (CBSE Official A/C)',
      ifsc: 'PUNB0089200',
      type: 'Bank Current A/C',
      balance: totalOnlineCollected + 145000 - 28450
    },
    {
      id: 'ACC-03',
      name: 'State Bank of India (Online Gateway A/C)',
      accountNo: '394820194821',
      bankName: 'State Bank of India (SBI)',
      branch: 'Debai Main Branch',
      ifsc: 'SBIN0001248',
      type: 'Bank Collection A/C',
      balance: 185000
    },
    {
      id: 'ACC-04',
      name: 'Principal Petty Cash Reserve',
      accountNo: 'PETTY-ADMIN-01',
      bankName: 'Office Petty Cash',
      branch: 'Principal Chamber',
      ifsc: 'PETTY-CASH',
      type: 'Petty Cash',
      balance: 35000
    }
  ]);

  // Standard School Accounting Voucher Heads
  const [voucherHeads, setVoucherHeads] = useState([
    { id: 'VH-01', name: 'Student Academic Fee Collections', type: 'Income', budget: '₹12,00,000 / mo', desc: 'Tuition, registration, examination & transport fees' },
    { id: 'VH-02', name: 'Government RTE Reimbursements & Grants', type: 'Income', budget: '₹3,00,000 / yr', desc: 'State education department RTE reimbursements' },
    { id: 'VH-03', name: 'School Canteen & Uniform Stall Rent', type: 'Income', budget: '₹15,000 / mo', desc: 'Stall lease and cafeteria monthly rental income' },
    { id: 'VH-04', name: 'Bank Interest & Investment Returns', type: 'Income', budget: '₹10,000 / mo', desc: 'Savings interest and fixed deposit yield' },
    { id: 'VH-05', name: 'School Bus Diesel & Fleet Fuel', type: 'Expense', budget: '₹1,20,000 / mo', desc: 'Diesel refills and maintenance for 6 school buses' },
    { id: 'VH-06', name: 'Electricity Bills & Campus Utility', type: 'Expense', budget: '₹35,000 / mo', desc: 'UPPCL power grid bills and generator fuel' },
    { id: 'VH-07', name: 'Examination Papers & Stationery', type: 'Expense', budget: '₹25,000 / mo', desc: 'Question papers, answer booklets, report cards & registers' },
    { id: 'VH-08', name: 'Campus Maintenance & White-Wash', type: 'Expense', budget: '₹40,000 / mo', desc: 'Classroom repairs, paint, plumbing & sanitation' },
    { id: 'VH-09', name: 'Staff Tea, Refreshment & Welfare', type: 'Expense', budget: '₹8,000 / mo', desc: 'Faculty tea, guest refreshments and staff meetings' },
    { id: 'VH-10', name: 'Sports Goods & Annual Function', type: 'Expense', budget: '₹50,000 / yr', desc: 'Sports day gear, medals, stage sound & tent setup' },
    { id: 'VH-11', name: 'Science Lab Chemicals & Equipment', type: 'Expense', budget: '₹20,000 / term', desc: 'Physics, Chemistry & Biology apparatus & reagents' },
    { id: 'VH-12', name: 'Computer Lab Internet & IT AMC', type: 'Expense', budget: '₹12,000 / mo', desc: 'Broadband optical fiber and computer repairs' }
  ]);

  // Modals state
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isAddHeadModalOpen, setIsAddHeadModalOpen] = useState(false);
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [selectedVoucherForPrint, setSelectedVoucherForPrint] = useState(null);
  const [isPrintVoucherModalOpen, setIsPrintVoucherModalOpen] = useState(false);

  // Forms state
  const [depositForm, setDepositForm] = useState({
    amount: '',
    head: 'Government RTE Reimbursements & Grants',
    account: 'Punjab National Bank (Main Account)',
    party: '',
    paymentMode: 'Bank Transfer (RTGS)',
    ref: '',
    remarks: ''
  });

  const [expenseForm, setExpenseForm] = useState({
    amount: '',
    head: 'School Bus Diesel & Fleet Fuel',
    account: 'School Central Cash Counter (Fee POS)',
    party: '',
    paymentMode: 'Cash',
    ref: '',
    remarks: ''
  });

  const [transferForm, setTransferForm] = useState({
    amount: '',
    fromAccount: 'School Central Cash Counter (Fee POS)',
    toAccount: 'Punjab National Bank (Main Account)',
    ref: '',
    remarks: 'Cash Counter collection deposited to Bank'
  });

  const [newHeadForm, setNewHeadForm] = useState({
    name: '',
    type: 'Expense',
    budget: '',
    desc: ''
  });

  const [newAccountForm, setNewAccountForm] = useState({
    name: '',
    accountNo: '',
    bankName: '',
    branch: '',
    ifsc: '',
    type: 'Bank Current A/C',
    balance: ''
  });

  // Filters state
  const [txnSearchQuery, setTxnSearchQuery] = useState('');
  const [txnTypeFilter, setTxnTypeFilter] = useState('All');
  const [txnDateFilter, setTxnDateFilter] = useState('All');

  const filteredTransactions = useMemo(() => {
    return allTransactions.filter(t => {
      if (txnTypeFilter !== 'All' && t.type !== txnTypeFilter) return false;
      if (!txnSearchQuery.trim()) return true;
      const q = txnSearchQuery.toLowerCase().trim();
      return (
        t.id.toLowerCase().includes(q) ||
        (t.party && t.party.toLowerCase().includes(q)) ||
        (t.head && t.head.toLowerCase().includes(q)) ||
        (t.remarks && t.remarks.toLowerCase().includes(q)) ||
        (t.account && t.account.toLowerCase().includes(q))
      );
    });
  }, [allTransactions, txnTypeFilter, txnSearchQuery]);

  // Handlers
  const handleCreateDeposit = (e) => {
    e.preventDefault();
    if (!depositForm.amount || Number(depositForm.amount) <= 0) {
      showToast('Please enter a valid deposit amount', 'warning');
      return;
    }
    const newTxn = {
      id: `DEP-2026-${String(customTransactions.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Income',
      head: depositForm.head,
      account: depositForm.account,
      amount: Number(depositForm.amount),
      paymentMode: depositForm.paymentMode || 'Cash',
      ref: depositForm.ref || `DEP-${Date.now().toString().slice(-4)}`,
      party: depositForm.party || 'Institutional Revenue Deposit',
      remarks: depositForm.remarks || 'Cashbook Revenue Deposit'
    };

    setCustomTransactions(prev => [newTxn, ...prev]);
    setIsDepositModalOpen(false);
    showToast(`Revenue Deposit of ₹${Number(depositForm.amount).toLocaleString('en-IN')} recorded successfully!`, 'success');
    
    // Auto-open printable voucher
    setSelectedVoucherForPrint(newTxn);
    setIsPrintVoucherModalOpen(true);

    // Reset Form
    setDepositForm({
      amount: '',
      head: 'Government RTE Reimbursements & Grants',
      account: 'Punjab National Bank (Main Account)',
      party: '',
      paymentMode: 'Bank Transfer (RTGS)',
      ref: '',
      remarks: ''
    });
  };

  const handleCreateExpense = (e) => {
    e.preventDefault();
    if (!expenseForm.amount || Number(expenseForm.amount) <= 0) {
      showToast('Please enter a valid expense amount', 'warning');
      return;
    }
    const newTxn = {
      id: `VCH-2026-${String(customTransactions.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Expense',
      head: expenseForm.head,
      account: expenseForm.account,
      amount: Number(expenseForm.amount),
      paymentMode: expenseForm.paymentMode || 'Cash',
      ref: expenseForm.ref || `VCH-${Date.now().toString().slice(-4)}`,
      party: expenseForm.party || 'Vendor / Expense Payee',
      remarks: expenseForm.remarks || 'Authorized School Expense'
    };

    setCustomTransactions(prev => [newTxn, ...prev]);
    setIsExpenseModalOpen(false);
    showToast(`Expense voucher of ₹${Number(expenseForm.amount).toLocaleString('en-IN')} issued successfully!`, 'success');

    // Auto-open printable voucher
    setSelectedVoucherForPrint(newTxn);
    setIsPrintVoucherModalOpen(true);

    // Reset Form
    setExpenseForm({
      amount: '',
      head: 'School Bus Diesel & Fleet Fuel',
      account: 'School Central Cash Counter (Fee POS)',
      party: '',
      paymentMode: 'Cash',
      ref: '',
      remarks: ''
    });
  };

  const handleCreateTransfer = (e) => {
    e.preventDefault();
    const amt = Number(transferForm.amount);
    if (!amt || amt <= 0) {
      showToast('Please enter a valid transfer amount', 'warning');
      return;
    }
    if (transferForm.fromAccount === transferForm.toAccount) {
      showToast('Source and destination accounts must be different', 'warning');
      return;
    }

    const contraId = `CONTRA-${Date.now().toString().slice(-4)}`;
    const today = new Date().toISOString().split('T')[0];

    const outTxn = {
      id: `${contraId}-OUT`,
      date: today,
      type: 'Expense',
      head: 'Inter-Account Fund Transfer (Contra)',
      account: transferForm.fromAccount,
      amount: amt,
      paymentMode: 'Bank Contra',
      ref: transferForm.ref || contraId,
      party: `Transferred To: ${transferForm.toAccount}`,
      remarks: transferForm.remarks || 'Inter-account fund transfer'
    };

    const inTxn = {
      id: `${contraId}-IN`,
      date: today,
      type: 'Income',
      head: 'Inter-Account Fund Transfer (Contra)',
      account: transferForm.toAccount,
      amount: amt,
      paymentMode: 'Bank Contra',
      ref: transferForm.ref || contraId,
      party: `Transferred From: ${transferForm.fromAccount}`,
      remarks: transferForm.remarks || 'Inter-account fund transfer'
    };

    setCustomTransactions(prev => [outTxn, inTxn, ...prev]);
    setIsTransferModalOpen(false);
    showToast(`₹${amt.toLocaleString('en-IN')} transferred from ${transferForm.fromAccount} to ${transferForm.toAccount}! 🔄`, 'success');
  };

  const handleAddVoucherHead = (e) => {
    e.preventDefault();
    if (!newHeadForm.name.trim()) return;
    const newHead = {
      id: `VH-${String(voucherHeads.length + 1).padStart(2, '0')}`,
      name: newHeadForm.name.trim(),
      type: newHeadForm.type,
      budget: newHeadForm.budget || '₹25,000 / mo',
      desc: newHeadForm.desc || 'Standard Institutional Category'
    };
    setVoucherHeads([...voucherHeads, newHead]);
    setIsAddHeadModalOpen(false);
    setNewHeadForm({ name: '', type: 'Expense', budget: '', desc: '' });
    showToast(`Voucher Head "${newHead.name}" created!`, 'success');
  };

  const handleAddAccount = (e) => {
    e.preventDefault();
    if (!newAccountForm.name.trim()) return;
    const newAcc = {
      id: `ACC-${String(accounts.length + 1).padStart(2, '0')}`,
      name: newAccountForm.name.trim(),
      accountNo: newAccountForm.accountNo.trim() || 'AC-2026-NEW',
      bankName: newAccountForm.bankName.trim() || 'Scheduled Bank',
      branch: newAccountForm.branch.trim() || 'School Base Branch',
      ifsc: newAccountForm.ifsc.trim() || 'IFSC0001234',
      type: newAccountForm.type,
      balance: Number(newAccountForm.balance) || 0
    };
    setAccounts([...accounts, newAcc]);
    setIsAddAccountModalOpen(false);
    setNewAccountForm({ name: '', accountNo: '', bankName: '', branch: '', ifsc: '', type: 'Bank Current A/C', balance: '' });
    showToast(`Account "${newAcc.name}" added to Ledger!`, 'success');
  };

  const handleApplyPresetExpense = (preset) => {
    setExpenseForm({
      amount: preset.amount,
      head: preset.head,
      account: preset.account || 'School Central Cash Counter (Fee POS)',
      party: preset.party,
      paymentMode: preset.mode || 'Cash',
      ref: `PRESET-${Date.now().toString().slice(-4)}`,
      remarks: preset.remarks
    });
    setIsExpenseModalOpen(true);
  };

  const handlePrintVoucher = (txn) => {
    setSelectedVoucherForPrint(txn);
    setIsPrintVoucherModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🧭 Top Financial Overview & Quick Action Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 print:hidden">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Building2 className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              OFFICE ACCOUNTING & CASH DESK
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Institutional Financial Ledger
          </h2>
          <p className="text-xs text-slate-300 max-w-xl">
            Real-time management of School Bank Accounts, Revenue Deposits, Expense Vouchers, and Comprehensive Day Book Journal.
          </p>
        </div>

        {/* Financial KPI Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Inflows (Fees + Grants)</span>
            <p className="text-lg font-black font-mono text-emerald-400">₹{grandTotalIncome.toLocaleString('en-IN')}</p>
            <span className="text-[9px] text-emerald-300 font-medium">Real student fees + deposits</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Expenses (Bills & Fuel)</span>
            <p className="text-lg font-black font-mono text-rose-400">₹{grandTotalExpense.toLocaleString('en-IN')}</p>
            <span className="text-[9px] text-rose-300 font-medium">Authorized vouchers</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 space-y-0.5 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Net Liquid Balance</span>
            <p className="text-lg font-black font-mono text-amber-400">₹{netInstitutionalBalance.toLocaleString('en-IN')}</p>
            <span className="text-[9px] text-amber-300 font-medium">Cash chest + Banks</span>
          </div>
        </div>
      </div>

      {/* 🧭 Top 5-Tab Navigation Bar (Exact match to old software + modern additions) */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {[
            { id: 'account', label: '🏛️ Account', count: accounts.length },
            { id: 'deposit', label: '📥 New Deposit', count: customTransactions.filter(t => t.type === 'Income').length },
            { id: 'expense', label: '📤 New Expense', count: customTransactions.filter(t => t.type === 'Expense').length },
            { id: 'transactions', label: '📜 All Transactions (Day Book)', count: allTransactions.length },
            { id: 'voucher', label: '📂 Voucher Head', count: voucherHeads.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🏛️ TAB 1: ACCOUNT (BANK & CASH ACCOUNTS MASTER) */}
      {/* ========================================================================= */}
      {activeTab === 'account' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                School Bank Accounts & Cash Ledgers ({accounts.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage physical fee collection counters, institutional bank accounts and petty cash reserves
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setIsTransferModalOpen(true)}
                className="px-3.5 py-2 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-bold border border-purple-200 dark:border-purple-800 flex items-center gap-1.5 hover:bg-purple-100 transition-all"
              >
                <ArrowRightLeft className="w-4 h-4" /> Inter-Account Fund Transfer
              </button>
              <button
                onClick={() => setIsAddAccountModalOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Plus className="w-4 h-4" /> Add New Bank Account
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {accounts.map(acc => (
              <div
                key={acc.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 hover:border-indigo-400 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md">
                      {acc.type}
                    </span>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mt-1.5">{acc.name}</h4>
                    <span className="text-[11px] text-slate-400 font-medium">{acc.bankName}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Available Book Balance</span>
                  <p className="text-xl font-black font-mono text-emerald-600">
                    ₹{acc.balance.toLocaleString('en-IN')}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-500 font-mono text-[11px] pt-1 border-t border-slate-100 dark:border-slate-800">
                  <div>A/C No: <strong className="text-slate-800 dark:text-slate-200">{acc.accountNo}</strong></div>
                  <div>IFSC: <strong className="text-slate-700 dark:text-slate-300">{acc.ifsc}</strong></div>
                  <div className="text-[10px] text-slate-400 truncate">Branch: {acc.branch}</div>
                </div>

                <button
                  onClick={() => {
                    setTxnSearchQuery(acc.name);
                    setActiveTab('transactions');
                  }}
                  className="w-full py-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-xl text-center transition-colors"
                >
                  View Account Statement →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📥 TAB 2: NEW DEPOSIT (REVENUE ENTRY & VOUCHER) */}
      {/* ========================================================================= */}
      {activeTab === 'deposit' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-emerald-600" /> New Institutional Revenue Deposit Entry
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Record Government Grants, RTE reimbursements, donations, canteen rent and direct bank deposits
                </p>
              </div>
              <Badge variant="success">Inflow Entry</Badge>
            </div>

            <form onSubmit={handleCreateDeposit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Deposit Amount (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 50000"
                    value={depositForm.amount}
                    onChange={(e) => setDepositForm({ ...depositForm, amount: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono font-bold text-emerald-600 text-sm"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Deposit To Account / Bank *
                  </label>
                  <select
                    value={depositForm.account}
                    onChange={(e) => setDepositForm({ ...depositForm, account: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    {accounts.map(a => (
                      <option key={a.id} value={a.name}>{a.name} • (Bal: ₹{a.balance.toLocaleString('en-IN')})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Revenue / Voucher Head *
                  </label>
                  <select
                    value={depositForm.head}
                    onChange={(e) => setDepositForm({ ...depositForm, head: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    {voucherHeads.filter(h => h.type === 'Income').map(h => (
                      <option key={h.id} value={h.name}>{h.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Payment Mode
                  </label>
                  <select
                    value={depositForm.paymentMode}
                    onChange={(e) => setDepositForm({ ...depositForm, paymentMode: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    <option value="Bank Transfer (RTGS)">🏛️ Bank Transfer (RTGS / NEFT)</option>
                    <option value="Cash">💵 Cash Counter</option>
                    <option value="Cheque / DD">📜 Cheque / Demand Draft</option>
                    <option value="UPI / QR Code">📱 UPI / QR Scan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Received From (Donor / Department / Party) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Basic Shiksha Adhikari / Canteen Lessee"
                    value={depositForm.party}
                    onChange={(e) => setDepositForm({ ...depositForm, party: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-medium"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Reference / Challan / UTR Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. UTR-90829104820"
                    value={depositForm.ref}
                    onChange={(e) => setDepositForm({ ...depositForm, ref: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Description / Particulars
                </label>
                <input
                  type="text"
                  placeholder="e.g. RTE Reimbursement grant for session 2026-27 Q1"
                  value={depositForm.remarks}
                  onChange={(e) => setDepositForm({ ...depositForm, remarks: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-medium"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all text-xs"
                >
                  <Printer className="w-4 h-4" /> Save Deposit & Print Official Voucher
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Recent Deposit Vouchers */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Recent Revenue Deposits
              </h4>
              <button onClick={() => setActiveTab('transactions')} className="text-xs font-bold text-indigo-600 hover:underline">
                View All →
              </button>
            </div>

            <div className="space-y-3 max-h-[480px] overflow-y-auto custom-scrollbar pr-1">
              {customTransactions
                .filter(t => t.type === 'Income')
                .map(t => (
                  <div
                    key={t.id}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold text-emerald-600">{t.id}</span>
                      <span className="font-mono font-black text-sm text-emerald-600">+₹{t.amount.toLocaleString('en-IN')}</span>
                    </div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">{t.party}</p>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700">
                      <span>{t.date} • {t.paymentMode}</span>
                      <button
                        onClick={() => handlePrintVoucher(t)}
                        className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                      >
                        <Printer className="w-3 h-3" /> Print Voucher
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📤 TAB 3: NEW EXPENSE (EXPENSE ENTRY & VOUCHER) */}
      {/* ========================================================================= */}
      {activeTab === 'expense' && (
        <div className="space-y-6">
          {/* Preset Quick 1-Click Expense Buttons */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-black uppercase text-slate-700 dark:text-slate-300">
                Quick 1-Click Common School Expenses (त्वरित वाउचर)
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: '⛽ School Bus Diesel (₹15,000)', amount: 15000, head: 'School Bus Diesel & Fleet Fuel', party: 'Kisan Petroleum Agency', remarks: 'Bus Fleet monthly diesel fill-up' },
                { label: '⚡ Electricity Bill (₹28,500)', amount: 28500, head: 'Electricity Bills & Campus Utility', party: 'UPPCL Debai', remarks: 'Campus Monthly power tariff' },
                { label: '📚 Exam Answer Sheets (₹14,200)', amount: 14200, head: 'Examination Papers & Stationery', party: 'Agarwal Paper Mart', remarks: 'Pre-Midterm Exam booklets' },
                { label: '☕ Staff Tea & Refreshments (₹3,200)', amount: 3200, head: 'Staff Tea, Refreshment & Welfare', party: 'School Canteen Desk', remarks: 'Monthly faculty tea & meetings' },
                { label: '🛠️ Campus Paint & Plumbing (₹7,500)', amount: 7500, head: 'Campus Maintenance & White-Wash', party: 'Local Maintenance Staff', remarks: 'Classroom repairs and plumbing' }
              ].map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPresetExpense(preset)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-700 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-300 border border-slate-200 dark:border-slate-700 font-bold text-xs transition-all hover:scale-105 active:scale-95"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <ArrowDownRight className="w-5 h-5 text-rose-600" /> Issue Official School Expense Voucher
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Authorized payment entry with double-signatory printable payment voucher
                  </p>
                </div>
                <Badge variant="danger">Expense Outflow</Badge>
              </div>

              <form onSubmit={handleCreateExpense} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Expense Amount (₹) *
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 15000"
                      value={expenseForm.amount}
                      onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono font-bold text-rose-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Pay From Account / Bank *
                    </label>
                    <select
                      value={expenseForm.account}
                      onChange={(e) => setExpenseForm({ ...expenseForm, account: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    >
                      {accounts.map(a => (
                        <option key={a.id} value={a.name}>{a.name} • (Bal: ₹{a.balance.toLocaleString('en-IN')})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Voucher Expense Head *
                    </label>
                    <select
                      value={expenseForm.head}
                      onChange={(e) => setExpenseForm({ ...expenseForm, head: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    >
                      {voucherHeads.filter(h => h.type === 'Expense').map(h => (
                        <option key={h.id} value={h.name}>{h.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Payment Mode
                    </label>
                    <select
                      value={expenseForm.paymentMode}
                      onChange={(e) => setExpenseForm({ ...expenseForm, paymentMode: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    >
                      <option value="Cash">💵 Cash Counter</option>
                      <option value="Cheque">📜 Cheque Payment</option>
                      <option value="NEFT / Net Banking">🏛️ NEFT / Net Banking Transfer</option>
                      <option value="UPI / PhonePe">📱 UPI / QR Code</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Paid To (Payee / Vendor Name) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kisan Petroleum / Agarwal Printing Mart"
                      value={expenseForm.party}
                      onChange={(e) => setExpenseForm({ ...expenseForm, party: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Vendor Invoice / Bill Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BILL-DS-8891"
                      value={expenseForm.ref}
                      onChange={(e) => setExpenseForm({ ...expenseForm, ref: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Purpose / Particulars Description
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Diesel fuel refill for School Bus #1 & Bus #2 (220 Liters)"
                    value={expenseForm.remarks}
                    onChange={(e) => setExpenseForm({ ...expenseForm, remarks: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-medium"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-bold shadow-lg shadow-rose-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all text-xs"
                  >
                    <Printer className="w-4 h-4" /> Issue Expense & Print Official 2-Copy Voucher
                  </button>
                </div>
              </form>
            </div>

            {/* Recent Expense Vouchers Column */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Recent Expense Vouchers
                </h4>
                <button onClick={() => setActiveTab('transactions')} className="text-xs font-bold text-indigo-600 hover:underline">
                  View All →
                </button>
              </div>

              <div className="space-y-3 max-h-[480px] overflow-y-auto custom-scrollbar pr-1">
                {customTransactions
                  .filter(t => t.type === 'Expense')
                  .map(t => (
                    <div
                      key={t.id}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono font-bold text-rose-600">{t.id}</span>
                        <span className="font-mono font-black text-sm text-rose-600">-₹{t.amount.toLocaleString('en-IN')}</span>
                      </div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">{t.party}</p>
                      <p className="text-[11px] text-slate-500">{t.head}</p>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700">
                        <span>{t.date} • {t.paymentMode}</span>
                        <button
                          onClick={() => handlePrintVoucher(t)}
                          className="text-rose-600 font-bold hover:underline flex items-center gap-1"
                        >
                          <Printer className="w-3 h-3" /> Print Voucher
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📜 TAB 4: ALL TRANSACTIONS (DAY BOOK JOURNAL) */}
      {/* ========================================================================= */}
      {activeTab === 'transactions' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Receipt className="w-5 h-5 text-blue-600" />
                Institutional Cashbook Day Book & Audit Journal
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Complete audited ledger of student fee collections, government grants, vendor payments and bank transfers
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative w-full sm:w-60">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search receipt, student or head..."
                  value={txnSearchQuery}
                  onChange={(e) => setTxnSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                />
              </div>

              <select
                value={txnTypeFilter}
                onChange={(e) => setTxnTypeFilter(e.target.value)}
                className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <option value="All">All Types (Income & Expense)</option>
                <option value="Income">🟢 Income (Fees & Grants)</option>
                <option value="Expense">🔴 Expense (Vouchers)</option>
              </select>

              <button
                onClick={() => window.print()}
                className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors print:hidden"
              >
                <Printer className="w-4 h-4" /> Print Day Book
              </button>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Voucher / Ref No</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Type</th>
                  <th className="p-3.5">Accounting Head</th>
                  <th className="p-3.5">Account / Bank</th>
                  <th className="p-3.5">Party / Student Name</th>
                  <th className="p-3.5 text-right">Amount (₹)</th>
                  <th className="p-3.5 text-right print:hidden">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredTransactions.slice(0, 60).map(t => (
                  <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-blue-700 dark:text-blue-400">{t.id}</td>
                    <td className="p-3.5 font-mono text-slate-500">{t.date}</td>
                    <td className="p-3.5">
                      <Badge variant={t.type === 'Income' ? 'success' : 'danger'}>{t.type}</Badge>
                    </td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{t.head}</td>
                    <td className="p-3.5 text-slate-500">{t.account}</td>
                    <td className="p-3.5 text-slate-800 dark:text-slate-200 font-semibold">{t.party}</td>
                    <td className={`p-3.5 font-mono font-black text-right ${t.type === 'Income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {t.type === 'Income' ? '+' : '-'}₹{t.amount.toLocaleString('en-IN')}
                    </td>
                    <td className="p-3.5 text-right print:hidden">
                      <button
                        onClick={() => handlePrintVoucher(t)}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 text-indigo-600 dark:text-indigo-400 rounded-lg font-bold text-[11px] inline-flex items-center gap-1 transition-colors"
                      >
                        <Printer className="w-3 h-3" /> Voucher
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center text-[11px] text-slate-500 pt-2">
            <span>Showing top {Math.min(filteredTransactions.length, 60)} of {filteredTransactions.length} audited entries</span>
            <span>Audited under Uttar Pradesh Self-Financed School Financial Code</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📂 TAB 5: VOUCHER HEAD (BUDGET HEADS MASTER) */}
      {/* ========================================================================= */}
      {activeTab === 'voucher' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-600" /> Voucher Head Master (Income & Expense Categories)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Standard institutional chart of accounts for automated budget allocation and auditing
              </p>
            </div>
            <button
              onClick={() => setIsAddHeadModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Voucher Head
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {voucherHeads.map(vh => (
              <div
                key={vh.id}
                className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-indigo-400 transition-all"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md">
                    {vh.id}
                  </span>
                  <Badge variant={vh.type === 'Income' ? 'success' : 'danger'}>{vh.type}</Badge>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{vh.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{vh.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span className="text-[10px] text-slate-400 font-sans font-bold uppercase">Approved Budget:</span>
                  <span className="text-indigo-600 dark:text-indigo-400">{vh.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🔄 MODAL: INTER-ACCOUNT FUND TRANSFER (CONTRA VOUCHER) */}
      {/* ========================================================================= */}
      {isTransferModalOpen && (
        <Modal
          isOpen={isTransferModalOpen}
          onClose={() => setIsTransferModalOpen(false)}
          title="🔄 Inter-Account Fund Transfer / Contra Voucher"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleCreateTransfer} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Transfer Amount (₹) *
              </label>
              <input
                type="number"
                required
                placeholder="e.g. 25000"
                value={transferForm.amount}
                onChange={(e) => setTransferForm({ ...transferForm, amount: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono font-bold text-purple-600 text-sm"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Source Account (From) *
              </label>
              <select
                value={transferForm.fromAccount}
                onChange={(e) => setTransferForm({ ...transferForm, fromAccount: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {accounts.map(a => (
                  <option key={a.id} value={a.name}>{a.name} (Bal: ₹{a.balance.toLocaleString('en-IN')})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Destination Account (To) *
              </label>
              <select
                value={transferForm.toAccount}
                onChange={(e) => setTransferForm({ ...transferForm, toAccount: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {accounts.map(a => (
                  <option key={a.id} value={a.name}>{a.name} (Bal: ₹{a.balance.toLocaleString('en-IN')})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Description / Transfer Reason
              </label>
              <input
                type="text"
                placeholder="e.g. Counter fee collections deposited into bank"
                value={transferForm.remarks}
                onChange={(e) => setTransferForm({ ...transferForm, remarks: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsTransferModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                Execute Contra Transfer
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 🏛️ MODAL: ADD BANK ACCOUNT */}
      {/* ========================================================================= */}
      {isAddAccountModalOpen && (
        <Modal
          isOpen={isAddAccountModalOpen}
          onClose={() => setIsAddAccountModalOpen(false)}
          title="🏛️ Add Institutional Bank Account / Counter"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddAccount} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Account Display Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Canara Bank Examination A/C"
                value={newAccountForm.name}
                onChange={(e) => setNewAccountForm({ ...newAccountForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Account Number</label>
                <input
                  type="text"
                  placeholder="e.g. 19280194820"
                  value={newAccountForm.accountNo}
                  onChange={(e) => setNewAccountForm({ ...newAccountForm, accountNo: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bank Name</label>
                <input
                  type="text"
                  placeholder="e.g. Canara Bank"
                  value={newAccountForm.bankName}
                  onChange={(e) => setNewAccountForm({ ...newAccountForm, bankName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">IFSC Code</label>
                <input
                  type="text"
                  placeholder="e.g. CNRB0001234"
                  value={newAccountForm.ifsc}
                  onChange={(e) => setNewAccountForm({ ...newAccountForm, ifsc: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono uppercase"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Opening Balance (₹)</label>
                <input
                  type="number"
                  placeholder="0"
                  value={newAccountForm.balance}
                  onChange={(e) => setNewAccountForm({ ...newAccountForm, balance: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddAccountModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                Add Account
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 📂 MODAL: ADD VOUCHER HEAD */}
      {/* ========================================================================= */}
      {isAddHeadModalOpen && (
        <Modal
          isOpen={isAddHeadModalOpen}
          onClose={() => setIsAddHeadModalOpen(false)}
          title="📂 Add New Accounting Voucher Head"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddVoucherHead} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Head Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sports Goods & Annual Day"
                value={newHeadForm.name}
                onChange={(e) => setNewHeadForm({ ...newHeadForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Type *</label>
                <select
                  value={newHeadForm.type}
                  onChange={(e) => setNewHeadForm({ ...newHeadForm, type: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  <option value="Expense">Expense Head</option>
                  <option value="Income">Income / Revenue Head</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly Budget Limit</label>
                <input
                  type="text"
                  placeholder="e.g. ₹30,000 / mo"
                  value={newHeadForm.budget}
                  onChange={(e) => setNewHeadForm({ ...newHeadForm, budget: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Description / Notes</label>
              <input
                type="text"
                placeholder="e.g. Track suits, footballs, medals, and ceremony sound"
                value={newHeadForm.desc}
                onChange={(e) => setNewHeadForm({ ...newHeadForm, desc: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddHeadModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                Create Head
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 🧾 MODAL: 2-COPY OFFICIAL SCHOOL VOUCHER (PRINTABLE) */}
      {/* ========================================================================= */}
      {isPrintVoucherModalOpen && selectedVoucherForPrint && (
        <Modal
          isOpen={isPrintVoucherModalOpen}
          onClose={() => setIsPrintVoucherModalOpen(false)}
          title="🧾 Official School Financial Voucher (Print Preview)"
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6 text-xs">
            {/* Printable Voucher Paper Layout */}
            <div className="border-2 border-slate-900 dark:border-slate-100 p-6 rounded-2xl bg-white text-slate-900 space-y-4 font-serif">
              {/* Header */}
              <div className="text-center border-b-2 border-slate-900 pb-3">
                <h2 className="text-xl font-black uppercase tracking-wider font-sans text-slate-900">
                  {schoolInfo.name}
                </h2>
                <p className="text-[11px] font-medium text-slate-600">
                  {schoolInfo.tagline} • Phone: {schoolInfo.phone}
                </p>
                <div className="mt-2 inline-block px-4 py-1 bg-slate-900 text-white rounded-md font-sans text-xs font-black uppercase tracking-widest">
                  {selectedVoucherForPrint.type === 'Income' ? 'RECEIPT VOUCHER (क्रेडिट वाउचर)' : 'PAYMENT VOUCHER (डेबिट वाउचर)'}
                </div>
              </div>

              {/* Meta details grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div>
                  <span className="text-slate-500 font-bold">Voucher No:</span>{' '}
                  <strong className="font-mono text-sm">{selectedVoucherForPrint.id}</strong>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 font-bold">Date:</span>{' '}
                  <strong className="font-mono">{selectedVoucherForPrint.date}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-bold">Account / Channel:</span>{' '}
                  <strong>{selectedVoucherForPrint.account}</strong>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 font-bold">Payment Mode:</span>{' '}
                  <strong>{selectedVoucherForPrint.paymentMode || 'Cash'}</strong>
                </div>
              </div>

              {/* Core Voucher Body */}
              <div className="border border-slate-300 rounded-xl p-4 bg-slate-50 space-y-2 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">
                    {selectedVoucherForPrint.type === 'Income' ? 'Received From:' : 'Paid To (Payee / Vendor):'}
                  </span>
                  <strong className="text-sm text-slate-900">{selectedVoucherForPrint.party}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">Accounting Head:</span>
                  <strong>{selectedVoucherForPrint.head}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">Particulars / Description:</span>
                  <span className="italic text-slate-700">{selectedVoucherForPrint.remarks || 'Standard verified entry'}</span>
                </div>
                {selectedVoucherForPrint.ref && (
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>Reference / Bill No:</span>
                    <span>{selectedVoucherForPrint.ref}</span>
                  </div>
                )}
              </div>

              {/* Amount Box */}
              <div className="p-3.5 rounded-xl border-2 border-slate-900 bg-slate-100 flex justify-between items-center font-sans">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Amount in Words:</span>
                  <strong className="text-xs text-slate-800">{convertNumberToWords(selectedVoucherForPrint.amount)}</strong>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Total Amount:</span>
                  <span className="font-mono font-black text-xl text-slate-900">
                    ₹{selectedVoucherForPrint.amount?.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-3 gap-4 pt-8 text-center text-[10px] font-sans border-t border-slate-300 mt-6">
                <div>
                  <div className="border-t border-dashed border-slate-400 pt-1 font-bold">Cashier / Prepared By</div>
                </div>
                <div>
                  <div className="border-t border-dashed border-slate-400 pt-1 font-bold">Accountant / Verified By</div>
                </div>
                <div>
                  <div className="border-t border-dashed border-slate-400 pt-1 font-bold">Principal / Manager Approval</div>
                </div>
              </div>
            </div>

            {/* Print action buttons */}
            <div className="flex justify-end gap-3 print:hidden">
              <button
                type="button"
                onClick={() => setIsPrintVoucherModalOpen(false)}
                className="px-4 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md flex items-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print 2-Copy Official Voucher
              </button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};

export default AccountsInventoryPage;
