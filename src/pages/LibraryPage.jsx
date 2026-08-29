import React, { useState } from 'react';
import {
  BookMarked,
  Plus,
  BookOpen,
  Search,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  QrCode
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const LibraryPage = () => {
  const { showToast } = useToast();
  const [books, setBooks] = useState(schoolService.getBooks());
  const [bookIssues, setBookIssues] = useState(schoolService.getBookIssues());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('catalog');

  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
  const students = schoolService.getStudents();

  const [issueForm, setIssueForm] = useState({
    bookId: books[0]?.id || '',
    studentId: students[0]?.id || '',
    dueDate: '2026-09-15'
  });

  const refreshLibrary = () => {
    setBooks([...schoolService.getBooks()]);
    setBookIssues([...schoolService.getBookIssues()]);
  };

  const handleIssueBook = (e) => {
    e.preventDefault();
    const issue = schoolService.issueBook(issueForm.bookId, issueForm.studentId, issueForm.dueDate);
    if (issue) {
      refreshLibrary();
      setIsIssueModalOpen(false);
      showToast(`Book "${issue.bookTitle}" issued to ${issue.studentName}!`, 'success');
    } else {
      showToast('Book copies currently unavailable', 'error');
    }
  };

  const handleReturnBook = (issueId) => {
    const res = schoolService.returnBook(issueId);
    if (res) {
      refreshLibrary();
      showToast(`Book return confirmed for ${res.bookTitle}!`, 'success');
    }
  };

  const filteredBooks = books.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase()) || b.isbn.includes(searchQuery));

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <BookMarked className="w-7 h-7 text-indigo-600" /> Library Management & Circulation Desk
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Book cataloging, ISBN lookup, borrowing/return issue desk, and automated overdue fine tracking.
          </p>
        </div>
        <button
          onClick={() => setIsIssueModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" /> Issue Book (Check-Out)
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('catalog')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'catalog'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Library Book Catalog ({books.length})
        </button>
        <button
          onClick={() => setActiveTab('issues')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'issues'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Issued Books & Circulation Ledger ({bookIssues.length})
        </button>
      </div>

      {/* TAB 1: Catalog */}
      {activeTab === 'catalog' && (
        <div className="space-y-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, ISBN..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4">Book Title & ISBN</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Shelf Location</th>
                    <th className="p-4">Stock Copies</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredBooks.map(b => (
                    <tr key={b.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-4">
                        <p className="font-bold text-slate-900 dark:text-white text-xs">{b.title}</p>
                        <span className="font-mono text-[10px] text-slate-400">ISBN: {b.isbn}</span>
                      </td>
                      <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{b.author}</td>
                      <td className="p-4"><Badge variant="primary" size="sm">{b.category}</Badge></td>
                      <td className="p-4 font-mono font-bold text-indigo-600">{b.shelf}</td>
                      <td className="p-4 font-bold">{b.available} / {b.quantity} Available</td>
                      <td className="p-4">
                        <Badge variant={b.available > 0 ? 'success' : 'danger'}>
                          {b.available > 0 ? 'In Stock' : 'All Borrowed'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Issues Ledger */}
      {activeTab === 'issues' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Issued Book</th>
                  <th className="p-4">Student Borrower</th>
                  <th className="p-4">Issue Date</th>
                  <th className="p-4">Due Date</th>
                  <th className="p-4">Fine</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {bookIssues.map(iss => (
                  <tr key={iss.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{iss.bookTitle}</td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{iss.studentName} ({iss.class})</td>
                    <td className="p-4 text-slate-500">{iss.issueDate}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{iss.dueDate}</td>
                    <td className="p-4 font-bold text-rose-600">₹{iss.fine}</td>
                    <td className="p-4">
                      <Badge variant={iss.status === 'Issued' ? 'primary' : iss.status === 'Overdue' ? 'danger' : 'success'}>
                        {iss.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      {iss.status !== 'Returned' ? (
                        <button
                          onClick={() => handleReturnBook(iss.id)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 ml-auto"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Return Book
                        </button>
                      ) : (
                        <span className="text-xs text-emerald-600 font-bold">Returned</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Issue Book Modal */}
      <Modal
        isOpen={isIssueModalOpen}
        onClose={() => setIsIssueModalOpen(false)}
        title="Issue Book (Circulation Desk)"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleIssueBook} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Book *</label>
            <select
              value={issueForm.bookId}
              onChange={(e) => setIssueForm({ ...issueForm, bookId: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
            >
              {books.map(b => (
                <option key={b.id} value={b.id} disabled={b.available <= 0}>
                  {b.title} (Available: {b.available} copies - {b.shelf})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Borrower *</label>
            <select
              value={issueForm.studentId}
              onChange={(e) => setIssueForm({ ...issueForm, studentId: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
            >
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.name} (Roll #{s.rollNo} • {s.class}-{s.section})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Return Due Date *</label>
            <input
              type="date"
              required
              value={issueForm.dueDate}
              onChange={(e) => setIssueForm({ ...issueForm, dueDate: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsIssueModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Confirm Book Check-Out</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
