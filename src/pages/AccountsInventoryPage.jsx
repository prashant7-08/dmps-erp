import React, { useState } from 'react';
import {
  Package,
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  FlaskConical,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const AccountsInventoryPage = () => {
  const [inventory] = useState(schoolService.getInventory());
  const [accounting] = useState(schoolService.getAccounting());
  const [activeTab, setActiveTab] = useState('accounting');

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Package className="w-7 h-7 text-indigo-600" /> Accounts Ledger, Store Inventory & Labs
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Institutional cashbook journal, balance sheet ledger, store item SKU stock alerts, and science laboratory assets.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('accounting')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'accounting'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Institutional Cashbook & Accounts
        </button>
        <button
          onClick={() => setActiveTab('inventory')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'inventory'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Store Inventory & Low-Stock Tracker ({inventory.length})
        </button>
      </div>

      {/* TAB 1: Accounts */}
      {activeTab === 'accounting' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">Monthly Income</span>
              <p className="text-2xl font-black text-emerald-600 mt-1">₹{accounting.totalMonthlyRevenue?.toLocaleString('en-IN') || "48,50,000"}</p>
              <span className="text-[11px] text-emerald-600 mt-1 font-semibold flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> Fee Collections & Grants
              </span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">Monthly Expenditure</span>
              <p className="text-2xl font-black text-rose-600 mt-1">₹{accounting.totalMonthlyExpenses?.toLocaleString('en-IN') || "31,20,000"}</p>
              <span className="text-[11px] text-rose-500 mt-1 font-semibold flex items-center gap-1">
                <ArrowDownRight className="w-3.5 h-3.5" /> Salaries, Fuel & Maintenance
              </span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">Net Institutional Surplus</span>
              <p className="text-2xl font-black text-indigo-600 mt-1">₹17,30,000</p>
              <span className="text-[11px] text-slate-500 mt-1 block">Surplus Reinvested in Labs</span>
            </div>
          </div>

          {/* Recent Ledger Entries */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white">
              Recent Cashbook Ledger Transactions
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4">Txn ID / Ref</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Payment Channel</th>
                    <th className="p-4 text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {accounting.recentTransactions?.map(tx => (
                    <tr key={tx.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-4 font-mono font-bold">{tx.ref || tx.id}</td>
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">{tx.category}</td>
                      <td className="p-4 text-slate-500">{tx.date}</td>
                      <td className="p-4"><Badge variant="primary" size="sm">{tx.mode}</Badge></td>
                      <td className={`p-4 text-right font-bold text-sm ${tx.type === 'Income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {tx.type === 'Income' ? '+' : '-'}₹{tx.amount.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Inventory */}
      {activeTab === 'inventory' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Item Name & SKU</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">In Stock</th>
                  <th className="p-4">Min Reorder Level</th>
                  <th className="p-4">Unit Price</th>
                  <th className="p-4">Supplier</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {inventory.map(item => {
                  const isLow = item.quantity <= item.minStock;
                  return (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-4">
                        <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                        <span className="font-mono text-[10px] text-slate-400">SKU: {item.sku}</span>
                      </td>
                      <td className="p-4"><Badge variant="primary" size="sm">{item.category}</Badge></td>
                      <td className="p-4 font-black text-sm text-slate-900 dark:text-white">{item.quantity} {item.unit}</td>
                      <td className="p-4 text-slate-500">{item.minStock} {item.unit}</td>
                      <td className="p-4 font-bold">₹{item.price}</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300">{item.supplier}</td>
                      <td className="p-4">
                        <Badge variant={isLow ? 'danger' : 'success'}>
                          {isLow ? 'Low Stock' : 'Adequate'}
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
    </div>
  );
};
